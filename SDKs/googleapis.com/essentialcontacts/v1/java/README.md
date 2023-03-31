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

import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeSecurity;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputePathParams;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeQueryParams;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsComputeRequest req = new EssentialcontactsProjectsContactsComputeRequest() {{
                security = new EssentialcontactsProjectsContactsComputeSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new EssentialcontactsProjectsContactsComputePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new EssentialcontactsProjectsContactsComputeQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    notificationCategories = new org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[]{{
                        add("SECURITY"),
                        add("BILLING"),
                        add("BILLING"),
                        add("SECURITY"),
                    }};
                    oauthToken = "iure";
                    pageSize = 297534;
                    pageToken = "debitis";
                    prettyPrint = false;
                    quotaUser = "ipsa";
                    uploadType = "delectus";
                    uploadProtocol = "tempora";
                }};
            }};            

            EssentialcontactsProjectsContactsComputeResponse res = sdk.projects.essentialcontactsProjectsContactsCompute(req);

            if (res.googleCloudEssentialcontactsV1ComputeContactsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `essentialcontactsProjectsContactsCompute` - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* `essentialcontactsProjectsContactsCreate` - Adds a new contact for a resource.
* `essentialcontactsProjectsContactsDelete` - Deletes a contact.
* `essentialcontactsProjectsContactsGet` - Gets a single contact.
* `essentialcontactsProjectsContactsList` - Lists the contacts that have been set on a resource.
* `essentialcontactsProjectsContactsPatch` - Updates a contact. Note: A contact's email address cannot be changed.
* `essentialcontactsProjectsContactsSendTestMessage` - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
