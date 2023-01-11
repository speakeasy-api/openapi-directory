<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.books.get_books()

if res.get_books_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->