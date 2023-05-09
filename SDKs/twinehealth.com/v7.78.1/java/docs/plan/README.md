# plan

## Overview

A plan is the set of actions and associated goals for a patient.

### Available Operations

* [fetchPatientPlanSummaries](#fetchpatientplansummaries) - List patient plan summaries
* [fetchPatientPlanSummary](#fetchpatientplansummary) - Get the plan summary for a patient
* [updatePatientPlanSummary](#updatepatientplansummary) - Update a plan summary

## fetchPatientPlanSummaries

Get a list of patient plan summaries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientPlanSummariesIncludeEnum;
import org.openapis.openapi.models.operations.FetchPatientPlanSummariesRequest;
import org.openapis.openapi.models.operations.FetchPatientPlanSummariesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientPlanSummariesRequest req = new FetchPatientPlanSummariesRequest() {{
                filterGroups = "ipsam";
                filterOrganization = "sit";
                filterPatient = "voluptatum";
                include = FetchPatientPlanSummariesIncludeEnum.PATIENT;
            }};            

            FetchPatientPlanSummariesResponse res = sdk.plan.fetchPatientPlanSummaries(req);

            if (res.fetchPatientPlanSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatientPlanSummary

Get the plan summary for a patient.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientPlanSummaryIncludeEnum;
import org.openapis.openapi.models.operations.FetchPatientPlanSummaryRequest;
import org.openapis.openapi.models.operations.FetchPatientPlanSummaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientPlanSummaryRequest req = new FetchPatientPlanSummaryRequest("repudiandae") {{
                include = FetchPatientPlanSummaryIncludeEnum.BUNDLES;
            }};            

            FetchPatientPlanSummaryResponse res = sdk.plan.fetchPatientPlanSummary(req);

            if (res.fetchPatientPlanSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePatientPlanSummary

Update a plan summary record for a patient.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePatientPlanSummaryRequest;
import org.openapis.openapi.models.operations.UpdatePatientPlanSummaryResponse;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceAttributesInput;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceAttributesWindowOrder;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceInput;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationships;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsActions;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsActionsData;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsActionsLinks;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsBundles;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsBundlesData;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsBundlesLinks;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsCurrentResults;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsCurrentResultsData;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsCurrentResultsLinks;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsPatient;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsPatientData;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsPatientLinks;
import org.openapis.openapi.models.shared.PatientPlanSummaryResourceTypeEnum;
import org.openapis.openapi.models.shared.UpdatePatientPlanSummaryRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePatientPlanSummaryRequest req = new UpdatePatientPlanSummaryRequest(                new UpdatePatientPlanSummaryRequestInput(                new PatientPlanSummaryResourceInput("57b36e3c04ad8c2224f2af38", PatientPlanSummaryResourceTypeEnum.PATIENT_PLAN_SUMMARY) {{
                                                attributes = new PatientPlanSummaryResourceAttributesInput() {{
                                                    critical = new java.util.HashMap<String, Object>() {{
                                                        put("blanditiis", "ex");
                                                    }};
                                                    timeZone = "sed";
                                                    windowOrder = new org.openapis.openapi.models.shared.PatientPlanSummaryResourceAttributesWindowOrder[]{{
                                                        add(new PatientPlanSummaryResourceAttributesWindowOrder() {{
                                                            actions = new String[]{{
                                                                add("nostrum"),
                                                                add("saepe"),
                                                            }};
                                                            type = "error";
                                                        }}),
                                                    }};
                                                }};;
                                                relationships = new PatientPlanSummaryResourceRelationships(                new PatientPlanSummaryResourceRelationshipsActions() {{
                                                                    data = new org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsActionsData[]{{
                                                                        add(new PatientPlanSummaryResourceRelationshipsActionsData("veniam", "voluptatem") {{
                                                                            id = "4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8";
                                                                            type = "mollitia";
                                                                        }}),
                                                                    }};
                                                                    links = new PatientPlanSummaryResourceRelationshipsActionsLinks() {{
                                                                        related = "quisquam";
                                                                    }};;
                                                                }};,                 new PatientPlanSummaryResourceRelationshipsBundles() {{
                                                                    data = new org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsBundlesData[]{{
                                                                        add(new PatientPlanSummaryResourceRelationshipsBundlesData("recusandae", "dolorum") {{
                                                                            id = "187f86bc-173d-4689-aee9-526f8d986e88";
                                                                            type = "sunt";
                                                                        }}),
                                                                        add(new PatientPlanSummaryResourceRelationshipsBundlesData("quidem", "eveniet") {{
                                                                            id = "d4f0e101-2563-4f94-a29e-973e922a57a1";
                                                                            type = "corporis";
                                                                        }}),
                                                                        add(new PatientPlanSummaryResourceRelationshipsBundlesData("minima", "dolore") {{
                                                                            id = "3e060807-e2b6-4e3a-b884-5f0597a60ff2";
                                                                            type = "id";
                                                                        }}),
                                                                        add(new PatientPlanSummaryResourceRelationshipsBundlesData("aliquid", "accusantium") {{
                                                                            id = "a31e9476-4a3e-4865-a795-6f9251a5a9da";
                                                                            type = "ex";
                                                                        }}),
                                                                    }};
                                                                    links = new PatientPlanSummaryResourceRelationshipsBundlesLinks() {{
                                                                        related = "repellat";
                                                                    }};;
                                                                }};,                 new PatientPlanSummaryResourceRelationshipsPatient() {{
                                                                    data = new PatientPlanSummaryResourceRelationshipsPatientData() {{
                                                                        id = "f57bfaad-4f9e-4fc1-b451-2c1032648dc2";
                                                                        type = "sapiente";
                                                                    }};;
                                                                    links = new PatientPlanSummaryResourceRelationshipsPatientLinks() {{
                                                                        related = "eum";
                                                                    }};;
                                                                }};) {{
                                                    currentResults = new PatientPlanSummaryResourceRelationshipsCurrentResults() {{
                                                        data = new org.openapis.openapi.models.shared.PatientPlanSummaryResourceRelationshipsCurrentResultsData[]{{
                                                            add(new PatientPlanSummaryResourceRelationshipsCurrentResultsData("quasi", "magni") {{
                                                                id = "5199ebfd-0e9f-4e6c-a32c-a3aed0117996";
                                                                type = "adipisci";
                                                            }}),
                                                        }};
                                                        links = new PatientPlanSummaryResourceRelationshipsCurrentResultsLinks() {{
                                                            related = "doloribus";
                                                        }};;
                                                    }};;
                                                }};;
                                            }};);, "nulla");            

            UpdatePatientPlanSummaryResponse res = sdk.plan.updatePatientPlanSummary(req);

            if (res.updatePatientPlanSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
