<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAttachmentRequest(
    bucket_id="corrupti",
    collection_id="provident",
    id="distinctio",
)
    
res = s.attachment.create_attachment(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->