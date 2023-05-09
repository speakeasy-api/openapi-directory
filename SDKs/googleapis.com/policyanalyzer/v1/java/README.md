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
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest req = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse res = sdk.projects.policyanalyzerProjectsLocationsActivityTypesActivitiesQuery(req, new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudPolicyanalyzerV1QueryActivityResponse != null) {
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

* [policyanalyzerProjectsLocationsActivityTypesActivitiesQuery](docs/projects/README.md#policyanalyzerprojectslocationsactivitytypesactivitiesquery) - Queries policy activities on Google Cloud resources.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
