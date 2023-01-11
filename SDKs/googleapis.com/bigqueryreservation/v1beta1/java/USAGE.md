<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest req = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest() {{
                security = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity() {{
                    option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams() {{
                    parent = "voluptatem";
                }};
                queryParams = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "aperiam";
                    alt = "media";
                    callback = "eum";
                    capacityCommitmentId = "atque";
                    enforceSingleAdminProjectPerOrg = false;
                    fields = "nostrum";
                    key = "occaecati";
                    oauthToken = "iste";
                    prettyPrint = true;
                    quotaUser = "iure";
                    uploadType = "qui";
                    uploadProtocol = "voluptas";
                }};
                request = new CapacityCommitmentInput() {{
                    failureStatus = new Status() {{
                        code = 1903799700764338020;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("excepturi", "vel");
                                put("beatae", "enim");
                            }}),
                        }};
                        message = "illo";
                    }};
                    multiRegionAuxiliary = false;
                    plan = "FLEX";
                    renewalPlan = "ANNUAL";
                    slotCount = "voluptatibus";
                }};
            }};

            BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse res = sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req);

            if (res.capacityCommitment.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->