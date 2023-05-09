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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APISpecification.DeleteAPISpecification(ctx, operations.DeleteAPISpecificationRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.DeleteAPISpecificationSecurity{
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


### [APISpecification](docs/apispecification/README.md)

* [DeleteAPISpecification](docs/apispecification/README.md#deleteapispecification) - Delete an API specification in ReadMe
* [GetAPISpecification](docs/apispecification/README.md#getapispecification) - Get API specification metadata
* [UpdateAPISpecification](docs/apispecification/README.md#updateapispecification) - Update an API specification in ReadMe
* [UploadAPISpecification](docs/apispecification/README.md#uploadapispecification) - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

### [Categories](docs/categories/README.md)

* [GetCategory](docs/categories/README.md#getcategory) - Get category
* [GetCategoryDocs](docs/categories/README.md#getcategorydocs) - Get docs for category

### [Changelog](docs/changelog/README.md)

* [CreateChangelog](docs/changelog/README.md#createchangelog) - Create changelog
* [DeleteChangelog](docs/changelog/README.md#deletechangelog) - Delete changelog
* [GetChangelog](docs/changelog/README.md#getchangelog) - Get changelog
* [GetChangelogs](docs/changelog/README.md#getchangelogs) - Get changelogs
* [UpdateChangelog](docs/changelog/README.md#updatechangelog) - Update changelog

### [CustomPages](docs/custompages/README.md)

* [CreateCustomPage](docs/custompages/README.md#createcustompage) - Create custom page
* [DeleteCustomPage](docs/custompages/README.md#deletecustompage) - Delete custom page
* [GetCustomPage](docs/custompages/README.md#getcustompage) - Get custom page
* [GetCustomPages](docs/custompages/README.md#getcustompages) - Get custom pages
* [UpdateCustomPage](docs/custompages/README.md#updatecustompage) - Update custom page

### [Docs](docs/docs/README.md)

* [CreateDoc](docs/docs/README.md#createdoc) - Create doc
* [DeleteDoc](docs/docs/README.md#deletedoc) - Delete doc
* [GetDoc](docs/docs/README.md#getdoc) - Get doc
* [SearchDocs](docs/docs/README.md#searchdocs) - Search docs
* [UpdateDoc](docs/docs/README.md#updatedoc) - Update doc

### [Errors](docs/errors/README.md)

* [GetErrors](docs/errors/README.md#geterrors) - Get errors

### [Projects](docs/projects/README.md)

* [GetProject](docs/projects/README.md#getproject) - Get metadata about the current project

### [Swagger](docs/swagger/README.md)

* [~~DeleteSwagger~~](docs/swagger/README.md#deleteswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe :warning: **Deprecated**
* [~~UpdateSwagger~~](docs/swagger/README.md#updateswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file. :warning: **Deprecated**
* [~~UploadSwagger~~](docs/swagger/README.md#uploadswagger) - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe :warning: **Deprecated**

### [Version](docs/version/README.md)

* [CreateVersion](docs/version/README.md#createversion) - Create version
* [DeleteVersion](docs/version/README.md#deleteversion) - Delete version
* [GetVersion](docs/version/README.md#getversion) - Get version
* [GetVersions](docs/version/README.md#getversions) - Get versions
* [UpdateVersion](docs/version/README.md#updateversion) - Update version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
