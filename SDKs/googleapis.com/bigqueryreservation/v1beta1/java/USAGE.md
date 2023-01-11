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
                    parent = "sit";
                }};
                queryParams = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    capacityCommitmentId = "dolor";
                    enforceSingleAdminProjectPerOrg = true;
                    fields = "voluptas";
                    key = "fugit";
                    oauthToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new CapacityCommitmentInput() {{
                    failureStatus = new Status() {{
                        code = 5617773211005988520;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorem", "et");
                                put("voluptate", "iste");
                                put("vitae", "totam");
                            }}),
                        }};
                        message = "dolores";
                    }};
                    multiRegionAuxiliary = false;
                    plan = "FLEX";
                    renewalPlan = "TRIAL";
                    slotCount = "odio";
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