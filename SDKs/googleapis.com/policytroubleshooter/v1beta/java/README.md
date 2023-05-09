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
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootRequest;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootResponse;
import org.openapis.openapi.models.operations.PolicytroubleshooterIamTroubleshootSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple;
import org.openapis.openapi.models.shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicytroubleshooterIamTroubleshootRequest req = new PolicytroubleshooterIamTroubleshootRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest = new GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest() {{
                    accessTuple = new GoogleCloudPolicytroubleshooterV1betaAccessTuple() {{
                        fullResourceName = "provident";
                        permission = "distinctio";
                        principal = "quibusdam";
                    }};;
                }};;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            PolicytroubleshooterIamTroubleshootResponse res = sdk.iam.policytroubleshooterIamTroubleshoot(req, new PolicytroubleshooterIamTroubleshootSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse != null) {
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


### [iam](docs/iam/README.md)

* [policytroubleshooterIamTroubleshoot](docs/iam/README.md#policytroubleshooteriamtroubleshoot) - Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
