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
import org.openapis.openapi.models.shared.CapacityCommitmentEditionEnum;
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
                    edition = CapacityCommitmentEditionEnum.ENTERPRISE;
                    failureStatus = new Status() {{
                        code = 844266;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                            }}),
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
                    }};;
                    multiRegionAuxiliary = false;
                    plan = CapacityCommitmentPlanEnum.TRIAL;
                    renewalPlan = CapacityCommitmentRenewalPlanEnum.COMMITMENT_PLAN_UNSPECIFIED;
                    slotCount = "deserunt";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                capacityCommitmentId = "sapiente";
                enforceSingleAdminProjectPerOrg = false;
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse res = sdk.projects.bigqueryreservationProjectsLocationsCapacityCommitmentsCreate(req, new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity() {{
                option1 = new BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1("quod", "quod") {{
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