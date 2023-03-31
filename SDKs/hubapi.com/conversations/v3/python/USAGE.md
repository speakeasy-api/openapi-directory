<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.IdentificationTokenGenerationRequest(
    email="Larue_Rau85@yahoo.com",
    first_name="Karley",
    last_name="Stamm",
)
    
res = s.generate.post_visitor_identification_v3_tokens_create_generate_token(req, operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.identification_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->