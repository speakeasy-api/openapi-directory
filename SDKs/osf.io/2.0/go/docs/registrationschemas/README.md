# RegistrationSchemas

## Overview

A Registration Schemas defines the range of valid responses to a registration. Each Registration Schema is composed of <a href="#tag/Registration-Schema-Blocks">"blocks"</a> that define the individual questions a user responds to. Registration Schemas are created by the Center for Open Science or an affiliated institution and periodically migrated into the system. Registration Schemas are updated and deactivated using an internal versioning system.

### Available Operations

* [RegistrationSchemaRead](#registrationschemaread) - Retrieve a Registration Schema
* [RegistrationSchemasList](#registrationschemaslist) - Retrieve a list of Registration Schemas

## RegistrationSchemaRead

Retrieves the details of a given Registration Schema. Registration Schemas defines the desired supplemental information that should accompany be included in a Registration. Registration Schemas are Read-only to API users.
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
#### Errors
If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RegistrationSchemas.RegistrationSchemaRead(ctx, operations.RegistrationSchemaReadRequest{
        RegistrationSchemaID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## RegistrationSchemasList

Retrieve a paginated list of all active Registration Schemas. Registration Schemas describe the supplemental questions that accompany a registration. Registration Schemas are read-only for API users.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `data` key contains an array of 10 Registration Schemas. Each resource in the array is a separate Registration Schemas object.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RegistrationSchemas.RegistrationSchemasList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
