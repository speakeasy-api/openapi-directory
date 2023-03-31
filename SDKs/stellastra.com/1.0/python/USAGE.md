<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.PostPostReviewRequest(
    request_body=operations.PostPostReviewRequestBody(
        rating=5,
        user_email="johnsmith@usercompanyxyz.com",
        user_name="John",
    ),
    rating="3",
    user_email="provident",
    user_name="Micheal_Sporer",
)
    
res = s.post_post_review(req)

if res.post_post_review_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->