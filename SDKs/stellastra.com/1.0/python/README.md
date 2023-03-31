# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/stellastra.com/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `post_post_review` - Posts the user's review to Stellastra
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
