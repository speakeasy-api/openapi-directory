<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAssociationBySubjectAndAssocTypeRequest(
    path_params=operations.GetAssociationBySubjectAndAssocTypePathParams(
        association_type="veniam",
    ),
    query_params=operations.GetAssociationBySubjectAndAssocTypeQueryParams(
        evidence="ratione",
        exclude_automatic_assertions=False,
        object="veniam",
        rows=3524526115751290665,
        start=4431293507688501841,
        subject="ipsa",
        unselect_evidence=False,
        use_compact_associations=True,
    ),
)
    
res = s.association.get_association_by_subject_and_assoc_type(req)

if res.association_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->