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
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchRequest;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchResponse;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCaseClassificationsSearchRequest req = new CloudsupportCaseClassificationsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252L;
                pageToken = "vel";
                prettyPrint = false;
                query = "error";
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            CloudsupportCaseClassificationsSearchResponse res = sdk.caseClassifications.cloudsupportCaseClassificationsSearch(req, new CloudsupportCaseClassificationsSearchSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchCaseClassificationsResponse != null) {
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


### [caseClassifications](docs/caseclassifications/README.md)

* [cloudsupportCaseClassificationsSearch](docs/caseclassifications/README.md#cloudsupportcaseclassificationssearch) - Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

### [cases](docs/cases/README.md)

* [cloudsupportCasesAttachmentsList](docs/cases/README.md#cloudsupportcasesattachmentslist) - Retrieve all attachments associated with a support case.
* [cloudsupportCasesClose](docs/cases/README.md#cloudsupportcasesclose) - Close the specified case.
* [cloudsupportCasesCommentsCreate](docs/cases/README.md#cloudsupportcasescommentscreate) - Add a new comment to the specified Case. The comment object must have the following fields set: body.
* [cloudsupportCasesCommentsList](docs/cases/README.md#cloudsupportcasescommentslist) - Retrieve all Comments associated with the Case object.
* [cloudsupportCasesCreate](docs/cases/README.md#cloudsupportcasescreate) - Create a new case and associate it with the given Google Cloud Resource. The case object must have the following fields set: `display_name`, `description`, `classification`, and `priority`.
* [cloudsupportCasesEscalate](docs/cases/README.md#cloudsupportcasesescalate) - Escalate a case. Escalating a case will initiate the Google Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
* [cloudsupportCasesGet](docs/cases/README.md#cloudsupportcasesget) - Retrieve the specified case.
* [cloudsupportCasesList](docs/cases/README.md#cloudsupportcaseslist) - Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
* [cloudsupportCasesPatch](docs/cases/README.md#cloudsupportcasespatch) - Update the specified case. Only a subset of fields can be updated.
* [cloudsupportCasesSearch](docs/cases/README.md#cloudsupportcasessearch) - Search cases using the specified query.

### [media](docs/media/README.md)

* [cloudsupportMediaDownload](docs/media/README.md#cloudsupportmediadownload) - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
* [cloudsupportMediaUpload](docs/media/README.md#cloudsupportmediaupload) - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
