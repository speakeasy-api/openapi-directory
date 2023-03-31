<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.CreateConversationRequestBody(
    display_name="Customer Chat",
    image_url="https://example.com/image.png",
    name="customer_chat",
    properties=shared.ConversationProperties(
        ttl=60,
    ),
)
    
res = s.conversation.create_conversation(req)

if res.create_conversation_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->