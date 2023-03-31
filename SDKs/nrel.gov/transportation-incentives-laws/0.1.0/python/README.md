# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nrel.gov/transportation-incentives-laws/0.1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TransportationIncentivesLawsAllRequest(
    api_key="corrupti",
    expired=False,
    incentive_type="provident",
    jurisdiction="distinctio",
    keyword="quibusdam",
    law_type="unde",
    limit=857946,
    local=False,
    output_format="xml",
    poc=False,
    recent=False,
    regulation_type="illum",
    technology="vel",
    user_type="error",
)
    
res = s.transportation_incentives_laws_all(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `transportation_incentives_laws_all` - Return a full list of laws and incentives that match your query.
* `transportation_incentives_laws_categories` - Return the law categories for a given category type.
* `transportation_incentives_laws_id` - Fetch the details of a specific law given the law's ID.
* `transportation_incentives_laws_pocs` - Get the points of contact for a given jurisdiction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
