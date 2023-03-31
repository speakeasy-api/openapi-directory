<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse;
import org.openapis.openapi.models.shared.CapacityCommitmentPlanEnum;
import org.openapis.openapi.models.shared.CapacityCommitmentRenewalPlanEnum;
import org.openapis.openapi.models.shared.CapacityCommitmentInput;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    capacityCommitmentId = "nulla";
                    enforceSingleAdminProjectPerOrg = false;
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new CapacityCommitmentInput() {{
                    failureStatus = new Status() {{
                        code = 437587;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("excepturi", "nisi");
                                put("recusandae", "temporibus");
                            }}),
                        }};
                        message = "ab";
                    }};
                    multiRegionAuxiliary = false;
                    plan = "FLEX";
                    renewalPlan = "COMMITMENT_PLAN_UNSPECIFIED";
                    slotCount = "deserunt";
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