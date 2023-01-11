<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.CreateConversationRequest(
    request=operations.CreateConversationRequestBody(
        display_name="repellendus",
        image_url="minima",
        name="consequatur",
        properties=shared.ConversationProperties(
            ttl=17.200001,
        ),
    ),
)
    
res = s.conversation.create_conversation(req)

if res.create_conversation_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->