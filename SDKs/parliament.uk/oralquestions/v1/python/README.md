# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/parliament.uk/oralquestions/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PublishedEarlyDayMotionGetRequest(
    id=548814,
)
    
res = s.early_day_motions.published_early_day_motion_get(req)

if res.api_response_list_published_written_question is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### early_day_motions

* `published_early_day_motion_get` - Returns a single Early Day Motion by ID
* `get_early_day_motions_list` - Returns a list of Early Day Motions

### oral_question_times

* `published_oral_question_time_get` - Returns a list of oral question times

### oral_questions

* `published_oral_question_get` - Returns a list of oral questions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
