# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/restful4up.local/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApplyYaraRulesRequestBody(
    file=operations.ApplyYaraRulesRequestBodyFile(
        content="corrupti".encode(),
        file="provident",
    ),
    is_unpacking_required="false",
    rules=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
)
    
res = s.apply_yara_rules(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `apply_yara_rules` - apply given YARA rules to the given executable. (upto 10 rules)
* `clean` - clean up the uploaded files
* `emulation_output` - try to get the emulation output after unpacking the file
* `generate_partial_yara_rule` - generate partial YARA rules for give executable. (Rule without the condition section)
* `unpack` - try to unpack the given file
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
