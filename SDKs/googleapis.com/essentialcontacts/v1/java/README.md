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
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsComputeRequest req = new EssentialcontactsProjectsContactsComputeRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                notificationCategories = new org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[]{{
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.SECURITY),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.BILLING),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.BILLING),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.SECURITY),
                }};
                oauthToken = "iure";
                pageSize = 297534L;
                pageToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            EssentialcontactsProjectsContactsComputeResponse res = sdk.projects.essentialcontactsProjectsContactsCompute(req, new EssentialcontactsProjectsContactsComputeSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudEssentialcontactsV1ComputeContactsResponse != null) {
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


### [projects](docs/projects/README.md)

* [essentialcontactsProjectsContactsCompute](docs/projects/README.md#essentialcontactsprojectscontactscompute) - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* [essentialcontactsProjectsContactsCreate](docs/projects/README.md#essentialcontactsprojectscontactscreate) - Adds a new contact for a resource.
* [essentialcontactsProjectsContactsDelete](docs/projects/README.md#essentialcontactsprojectscontactsdelete) - Deletes a contact.
* [essentialcontactsProjectsContactsGet](docs/projects/README.md#essentialcontactsprojectscontactsget) - Gets a single contact.
* [essentialcontactsProjectsContactsList](docs/projects/README.md#essentialcontactsprojectscontactslist) - Lists the contacts that have been set on a resource.
* [essentialcontactsProjectsContactsPatch](docs/projects/README.md#essentialcontactsprojectscontactspatch) - Updates a contact. Note: A contact's email address cannot be changed.
* [essentialcontactsProjectsContactsSendTestMessage](docs/projects/README.md#essentialcontactsprojectscontactssendtestmessage) - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
