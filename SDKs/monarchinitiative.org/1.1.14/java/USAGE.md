<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAssociationBySubjectAndAssocTypeRequest;
import org.openapis.openapi.models.operations.GetAssociationBySubjectAndAssocTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationBySubjectAndAssocTypeRequest req = new GetAssociationBySubjectAndAssocTypeRequest() {{
                associationType = "corrupti";
                evidence = "provident";
                excludeAutomaticAssertions = false;
                object = "distinctio";
                rows = 844266;
                start = 602763;
                subject = "nulla";
                unselectEvidence = false;
                useCompactAssociations = false;
            }}            

            GetAssociationBySubjectAndAssocTypeResponse res = sdk.association.getAssociationBySubjectAndAssocType(req);

            if (res.associationResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->