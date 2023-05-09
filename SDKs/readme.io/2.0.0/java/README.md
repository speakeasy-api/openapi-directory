# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAPISpecificationRequest;
import org.openapis.openapi.models.operations.DeleteAPISpecificationResponse;
import org.openapis.openapi.models.operations.DeleteAPISpecificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAPISpecificationRequest req = new DeleteAPISpecificationRequest("corrupti");            

            DeleteAPISpecificationResponse res = sdk.apiSpecification.deleteAPISpecification(req, new DeleteAPISpecificationSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiSpecification](docs/apispecification/README.md)

* [deleteAPISpecification](docs/apispecification/README.md#deleteapispecification) - Delete an API specification in ReadMe
* [getAPISpecification](docs/apispecification/README.md#getapispecification) - Get API specification metadata
* [updateAPISpecification](docs/apispecification/README.md#updateapispecification) - Update an API specification in ReadMe
* [uploadAPISpecification](docs/apispecification/README.md#uploadapispecification) - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

### [categories](docs/categories/README.md)

* [getCategory](docs/categories/README.md#getcategory) - Get category
* [getCategoryDocs](docs/categories/README.md#getcategorydocs) - Get docs for category

### [changelog](docs/changelog/README.md)

* [createChangelog](docs/changelog/README.md#createchangelog) - Create changelog
* [deleteChangelog](docs/changelog/README.md#deletechangelog) - Delete changelog
* [getChangelog](docs/changelog/README.md#getchangelog) - Get changelog
* [getChangelogs](docs/changelog/README.md#getchangelogs) - Get changelogs
* [updateChangelog](docs/changelog/README.md#updatechangelog) - Update changelog

### [customPages](docs/custompages/README.md)

* [createCustomPage](docs/custompages/README.md#createcustompage) - Create custom page
* [deleteCustomPage](docs/custompages/README.md#deletecustompage) - Delete custom page
* [getCustomPage](docs/custompages/README.md#getcustompage) - Get custom page
* [getCustomPages](docs/custompages/README.md#getcustompages) - Get custom pages
* [updateCustomPage](docs/custompages/README.md#updatecustompage) - Update custom page

### [docs](docs/docs/README.md)

* [createDoc](docs/docs/README.md#createdoc) - Create doc
* [deleteDoc](docs/docs/README.md#deletedoc) - Delete doc
* [getDoc](docs/docs/README.md#getdoc) - Get doc
* [searchDocs](docs/docs/README.md#searchdocs) - Search docs
* [updateDoc](docs/docs/README.md#updatedoc) - Update doc

### [errors](docs/errors/README.md)

* [getErrors](docs/errors/README.md#geterrors) - Get errors

### [projects](docs/projects/README.md)

* [getProject](docs/projects/README.md#getproject) - Get metadata about the current project

### [swagger](docs/swagger/README.md)

* [~~deleteSwagger~~](docs/swagger/README.md#deleteswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe :warning: **Deprecated**
* [~~updateSwagger~~](docs/swagger/README.md#updateswagger) - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file. :warning: **Deprecated**
* [~~uploadSwagger~~](docs/swagger/README.md#uploadswagger) - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe :warning: **Deprecated**

### [version](docs/version/README.md)

* [createVersion](docs/version/README.md#createversion) - Create version
* [deleteVersion](docs/version/README.md#deleteversion) - Delete version
* [getVersion](docs/version/README.md#getversion) - Get version
* [getVersions](docs/version/README.md#getversions) - Get versions
* [updateVersion](docs/version/README.md#updateversion) - Update version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
