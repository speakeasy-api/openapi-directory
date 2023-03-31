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

import org.openapis.openapi.models.operations.DeleteContentSecurity;
import org.openapis.openapi.models.operations.DeleteContentPathParams;
import org.openapis.openapi.models.operations.DeleteContentRequest;
import org.openapis.openapi.models.operations.DeleteContentResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContentRequest req = new DeleteContentRequest() {{
                security = new DeleteContentSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new DeleteContentPathParams() {{
                    sid = "corrupti";
                }};
            }};            

            DeleteContentResponse res = sdk.deleteContent(req);

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

### SDK SDK

* `deleteContent` - Deletes a Content resource
* `fetchApprovalFetch` - Fetch a Content resource's approval status by its unique Content Sid
* `fetchContent` - Fetch a Content resource by its unique Content Sid
* `listContent` - Retrieve a list of Contents belonging to the account used to make the request
* `listContentAndApprovals` - Retrieve a list of Contents with approval statuses belonging to the account used to make the request
* `listLegacyContent` - Retrieve a list of Legacy Contents belonging to the account used to make the request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
