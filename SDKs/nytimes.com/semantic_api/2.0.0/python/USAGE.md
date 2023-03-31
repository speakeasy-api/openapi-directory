<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetNameConceptTypeSpecificConceptJSONRequest(
    concept_type="nytd_org",
    fields_="combinations",
    query="distinctio",
    specific_concept="quibusdam",
)
    
res = s.get_name_concept_type_specific_concept_json(req)

if res.get_name_concept_type_specific_concept_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->