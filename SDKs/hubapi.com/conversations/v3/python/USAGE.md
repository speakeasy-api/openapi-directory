<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostVisitorIdentificationV3TokensCreateGenerateTokenRequest(
    security=operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity(
        hapikey=shared.SchemeHapikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=shared.IdentificationTokenGenerationRequest(
        email="similique",
        first_name="ullam",
        last_name="qui",
    ),
)
    
res = s.generate.post_visitor_identification_v3_tokens_create_generate_token(req)

if res.identification_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->