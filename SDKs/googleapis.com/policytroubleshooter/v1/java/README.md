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

import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootSecurity;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootQueryParams;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootRequest;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootResponse;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1AccessTuple;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicytroubleshooterIamTroubleshootRequest req = new PolicytroubleshooterIamTroubleshootRequest() {{
                security = new PolicytroubleshooterIamTroubleshootSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new PolicytroubleshooterIamTroubleshootQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest() {{
                    accessTuple = new GoogleCloudPolicytroubleshooterV1AccessTuple() {{
                        fullResourceName = "deserunt";
                        permission = "suscipit";
                        principal = "iure";
                    }};
                }};
            }};            

            PolicytroubleshooterIamTroubleshootResponse res = sdk.iam.policytroubleshooterIamTroubleshoot(req);

            if (res.googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### iam

* `policytroubleshooterIamTroubleshoot` - Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
