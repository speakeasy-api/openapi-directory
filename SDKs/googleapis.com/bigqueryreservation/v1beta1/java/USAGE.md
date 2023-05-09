<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CapacityCommitmentInput;
import org.openapis.openapi.models.shared.CapacityCommitmentPlanEnum;
import org.openapis.openapi.models.shared.CapacityCommitmentRenewalPlanEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest req = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                capacityCommitmentInput = new CapacityCommitmentInput() {{
                    failureStatus = new Status() {{
                        code = 715190;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("iure", "magnam");
                                put("debitis", "ipsa");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }}),
                        }};
                        message = "veritatis";
                    }};;
                    multiRegionAuxiliary = false;
                    plan = CapacityCommitmentPlanEnum.MONTHLY;
                    renewalPlan = CapacityCommitmentRenewalPlanEnum.COMMITMENT_PLAN_UNSPECIFIED;
                    slotCount = "ipsam";
                }};;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                capacityCommitmentId = "odit";
                enforceSingleAdminProjectPerOrg = false;
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse res = sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req, new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1("esse", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.capacityCommitment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->