# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/openapi-generator.tech/6.2.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.clients.client_options()

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### clients

* `client_options` - Gets languages supported by the client generator
* `download_file` - Downloads a pre-generated file
* `generate_client` - Generates a client library
* `get_client_options` - Returns options for a client library

### servers

* `download_file` - Downloads a pre-generated file
* `generate_server_for_language` - Generates a server library
* `get_server_options` - Returns options for a server framework
* `server_options` - Gets languages supported by the server generator
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
