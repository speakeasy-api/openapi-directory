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

            GetAssociationBySubjectAndAssocTypeRequest req = new GetAssociationBySubjectAndAssocTypeRequest() {{
                pathParams = new GetAssociationBySubjectAndAssocTypePathParams() {{
                    associationType = "sit";
                }};
                queryParams = new GetAssociationBySubjectAndAssocTypeQueryParams() {{
                    evidence = "voluptas";
                    excludeAutomaticAssertions = true;
                    object = "expedita";
                    rows = 3390393562759376202;
                    start = 2669985732393126063;
                    subject = "expedita";
                    unselectEvidence = true;
                    useCompactAssociations = true;
                }};
            }};

            GetAssociationBySubjectAndAssocTypeResponse res = sdk.association.getAssociationBySubjectAndAssocType(req);

            if (res.associationResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->