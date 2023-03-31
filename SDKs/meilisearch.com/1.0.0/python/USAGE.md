<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddOrReplaceDocumentsRequest(
    request_body=[
        operations.AddOrReplaceDocumentsRequestBody(
            author="Jane Austen",
            genre="romance",
            id=2,
            price=3.5,
            title="Pride and Prejudice",
        ),
        operations.AddOrReplaceDocumentsRequestBody(
            author="Jane Austen",
            genre="romance",
            id=2,
            price=3.5,
            title="Pride and Prejudice",
        ),
        operations.AddOrReplaceDocumentsRequestBody(
            author="Jane Austen",
            genre="romance",
            id=2,
            price=3.5,
            title="Pride and Prejudice",
        ),
    ],
    primary_key="id",
)
    
res = s.documents.add_or_replace_documents(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->