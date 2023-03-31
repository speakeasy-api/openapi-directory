<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetfullnameparsedmatchRequest(
    firstname="Katharina",
    lastname="Medhurst",
    license="distinctio",
)
    
res = s.full_name_parsed_similarity_key.getfullnameparsedmatch(req)

if res.getfullnameparsedmatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->