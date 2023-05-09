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

            GetAssociationBySubjectAndAssocTypeRequest req = new GetAssociationBySubjectAndAssocTypeRequest("corrupti") {{
                evidence = "provident";
                excludeAutomaticAssertions = false;
                object = "distinctio";
                rows = 844266L;
                start = 602763L;
                subject = "nulla";
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationBySubjectAndAssocTypeResponse res = sdk.association.getAssociationBySubjectAndAssocType(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->