# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/readme.io/2.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteAPISpecificationRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.APISpecification.DeleteAPISpecification(ctx, req, operations.DeleteAPISpecificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### APISpecification

* `DeleteAPISpecification` - Delete an API specification in ReadMe
* `GetAPISpecification` - Get API specification metadata
* `UpdateAPISpecification` - Update an API specification in ReadMe
* `UploadAPISpecification` - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

### Categories

* `GetCategory` - Get category
* `GetCategoryDocs` - Get docs for category

### Changelog

* `CreateChangelog` - Create changelog
* `DeleteChangelog` - Delete changelog
* `GetChangelog` - Get changelog
* `GetChangelogs` - Get changelogs
* `UpdateChangelog` - Update changelog

### CustomPages

* `CreateCustomPage` - Create custom page
* `DeleteCustomPage` - Delete custom page
* `GetCustomPage` - Get custom page
* `GetCustomPages` - Get custom pages
* `UpdateCustomPage` - Update custom page

### Docs

* `CreateDoc` - Create doc
* `DeleteDoc` - Delete doc
* `GetDoc` - Get doc
* `SearchDocs` - Search docs
* `UpdateDoc` - Update doc

### Errors

* `GetErrors` - Get errors

### Projects

* `GetProject` - Get metadata about the current project

### Swagger

* `DeleteSwagger` - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
* `UpdateSwagger` - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.
* `UploadSwagger` - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe

### Version

* `CreateVersion` - Create version
* `DeleteVersion` - Delete version
* `GetVersion` - Get version
* `GetVersions` - Get versions
* `UpdateVersion` - Update version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
