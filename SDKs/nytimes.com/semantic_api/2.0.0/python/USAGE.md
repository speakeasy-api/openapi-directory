<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetNameConceptTypeSpecificConceptJSONRequest(
    path_params=operations.GetNameConceptTypeSpecificConceptJSONPathParams(
        concept_type="nytd_des",
        specific_concept="dicta",
    ),
    query_params=operations.GetNameConceptTypeSpecificConceptJSONQueryParams(
        fields="all",
        query="ea",
    ),
)
    
res = s.get_name_concept_type_specific_concept_json(req)

if res.get_name_concept_type_specific_concept_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->