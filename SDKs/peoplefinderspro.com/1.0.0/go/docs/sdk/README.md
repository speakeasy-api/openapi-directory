# SDK

## Overview

Self Service Developer API documentation and demo.

##Getting Started

You will need an API access profile user and password in order to access search endpoints.
Your access profile user and password is used for authenticating all requests to our search API. 
You MUST pass the user and password each time you perform a search request.

### Available Operations

* [Search](#search) - Search
* [PostAddressAutocomplete](#postaddressautocomplete) - Search
* [PostContactEnrich](#postcontactenrich) - Search
* [PostEmailEnrich](#postemailenrich) - Search
* [PostPhoneEnrich](#postphoneenrich) - Search

## Search

###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIIDVerification

2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street, Unit 102",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

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
    res, err := s.SDK.Search(ctx, operations.SearchRequest{
        RequestBody: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: sdk.String("tempora"),
                AddressLine2: sdk.String("suscipit"),
            },
            Age: sdk.Float64(4776.65),
            Dob: sdk.String("minus"),
            Email: sdk.String("Junior.Kshlerin@hotmail.com"),
            FirstName: sdk.String("Tianna"),
            LastName: sdk.String("Smith"),
            MiddleName: sdk.String("ab"),
            PhoneNumber: sdk.String("quis"),
        },
        GalaxyApName: sdk.String("veritatis"),
        GalaxyApPassword: sdk.String("deserunt"),
        GalaxySearchType: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAddressAutocomplete

###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIAddressAutoComplete

2.  Add search criteria to your request.
    ~~~html
            {
                "Input":"1821 Q"
            }
    ~~~

3.  Submit your search

The JSON request should have parts of the address.

+ <code>Input</code> = null (optional, string) ... address.

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
    res, err := s.SDK.PostAddressAutocomplete(ctx, operations.PostAddressAutocompleteRequest{
        RequestBody: &operations.PostAddressAutocompleteRequestBody{
            Input: sdk.String("ipsam"),
        },
        GalaxyApName: sdk.String("repellendus"),
        GalaxyApPassword: sdk.String("sapiente"),
        GalaxySearchType: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostContactEnrich

###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIContactEnrich

2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

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
    res, err := s.SDK.PostContactEnrich(ctx, operations.PostContactEnrichRequest{
        RequestBody: &operations.PostContactEnrichRequestBody{
            Address: &operations.PostContactEnrichRequestBodyAddress{
                AddressLine1: sdk.String("odit"),
                AddressLine2: sdk.String("at"),
            },
            Age: sdk.Float64(8700.88),
            Dob: sdk.String("maiores"),
            Email: sdk.String("Pinkie_Schmidt@yahoo.com"),
            FirstName: sdk.String("Osborne"),
            LastName: sdk.String("Parisian"),
            MiddleName: sdk.String("dicta"),
            PhoneNumber: sdk.String("nam"),
        },
        GalaxyApName: sdk.String("officia"),
        GalaxyApPassword: sdk.String("occaecati"),
        GalaxySearchType: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostEmailEnrich

###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*

Perform a search:

1. Add your Access Profile username and password to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIEmailID

2.  Add search criteria to your request.
    ~~~html
            {
                "Email":"johnsmith@somedomain"
            }
    ~~~

3.  Submit your search

The JSON request should have an email.

+ <code>Email</code> = null (optional, string) ... E-mail address.

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
    res, err := s.SDK.PostEmailEnrich(ctx, operations.PostEmailEnrichRequest{
        RequestBody: &operations.PostEmailEnrichRequestBody{
            Email: sdk.String("Tyrel.Rosenbaum@yahoo.com"),
        },
        GalaxyApName: sdk.String("commodi"),
        GalaxyApPassword: sdk.String("molestiae"),
        GalaxySearchType: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostPhoneEnrich

###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPICallerID

2.  Add search criteria to your request.
    ~~~html
            {
                "Phone":"(123) 456-7890"
            }
    ~~~

3.  Submit your search

The JSON request should have a phone number.

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

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
    res, err := s.SDK.PostPhoneEnrich(ctx, operations.PostPhoneEnrichRequest{
        RequestBody: &operations.PostPhoneEnrichRequestBody{
            Phone: sdk.String("1-874-351-0361"),
        },
        GalaxyApName: sdk.String("iste"),
        GalaxyApPassword: sdk.String("dolor"),
        GalaxySearchType: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
