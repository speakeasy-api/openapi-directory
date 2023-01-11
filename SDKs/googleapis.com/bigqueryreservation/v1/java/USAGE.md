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
                    parent = "reprehenderit";
                }};
                queryParams = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "atque";
                    alt = "media";
                    callback = "quo";
                    capacityCommitmentId = "facere";
                    enforceSingleAdminProjectPerOrg = false;
                    fields = "voluptate";
                    key = "assumenda";
                    oauthToken = "fugiat";
                    prettyPrint = true;
                    quotaUser = "aut";
                    uploadType = "laborum";
                    uploadProtocol = "praesentium";
                }};
                request = new CapacityCommitmentInput() {{
                    failureStatus = new Status() {{
                        code = 406521603865612147;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("laudantium", "iure");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("doloribus", "rem");
                                put("sit", "aut");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("quod", "ut");
                                put("voluptas", "atque");
                                put("et", "nobis");
                            }}),
                        }};
                        message = "ipsum";
                    }};
                    multiRegionAuxiliary = true;
                    plan = "FLEX";
                    renewalPlan = "COMMITMENT_PLAN_UNSPECIFIED";
                    slotCount = "id";
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