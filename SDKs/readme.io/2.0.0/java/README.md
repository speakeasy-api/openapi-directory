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

import org.openapis.openapi.models.operations.DeleteAPISpecificationSecurity;
import org.openapis.openapi.models.operations.DeleteAPISpecificationPathParams;
import org.openapis.openapi.models.operations.DeleteAPISpecificationRequest;
import org.openapis.openapi.models.operations.DeleteAPISpecificationResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAPISpecificationRequest req = new DeleteAPISpecificationRequest() {{
                security = new DeleteAPISpecificationSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new DeleteAPISpecificationPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteAPISpecificationResponse res = sdk.apiSpecification.deleteAPISpecification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### apiSpecification

* `deleteAPISpecification` - Delete an API specification in ReadMe
* `getAPISpecification` - Get API specification metadata
* `updateAPISpecification` - Update an API specification in ReadMe
* `uploadAPISpecification` - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

### categories

* `getCategory` - Get category
* `getCategoryDocs` - Get docs for category

### changelog

* `createChangelog` - Create changelog
* `deleteChangelog` - Delete changelog
* `getChangelog` - Get changelog
* `getChangelogs` - Get changelogs
* `updateChangelog` - Update changelog

### customPages

* `createCustomPage` - Create custom page
* `deleteCustomPage` - Delete custom page
* `getCustomPage` - Get custom page
* `getCustomPages` - Get custom pages
* `updateCustomPage` - Update custom page

### docs

* `createDoc` - Create doc
* `deleteDoc` - Delete doc
* `getDoc` - Get doc
* `searchDocs` - Search docs
* `updateDoc` - Update doc

### errors

* `getErrors` - Get errors

### projects

* `getProject` - Get metadata about the current project

### swagger

* `deleteSwagger` - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
* `updateSwagger` - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.
* `uploadSwagger` - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe

### version

* `createVersion` - Create version
* `deleteVersion` - Delete version
* `getVersion` - Get version
* `getVersions` - Get versions
* `updateVersion` - Update version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
