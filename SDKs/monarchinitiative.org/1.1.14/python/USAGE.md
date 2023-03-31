<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAssociationBySubjectAndAssocTypeRequest(
    association_type="corrupti",
    evidence="provident",
    exclude_automatic_assertions=False,
    object="distinctio",
    rows=844266,
    start=602763,
    subject="nulla",
    unselect_evidence=False,
    use_compact_associations=False,
)
    
res = s.association.get_association_by_subject_and_assoc_type(req)

if res.association_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->