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
                    associationType = "et";
                }};
                queryParams = new GetAssociationBySubjectAndAssocTypeQueryParams() {{
                    evidence = "vero";
                    excludeAutomaticAssertions = false;
                    object = "doloribus";
                    rows = 3512290042494767099;
                    start = 4738051472549726492;
                    subject = "quibusdam";
                    unselectEvidence = false;
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