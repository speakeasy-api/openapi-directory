# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_serverless_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAssetRequest(
    request_body=operations.CreateAssetCreateAssetRequest(
        friendly_name="corrupti",
    ),
    service_sid="provident",
)
    
res = s.create_asset(req, operations.CreateAssetSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.serverless_v1_service_asset is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_asset` - Create a new Asset resource.
* `create_build` - Create a new Build resource. At least one function version or asset version is required.
* `create_deployment` - Create a new Deployment.
* `create_environment` - Create a new environment.
* `create_function` - Create a new Function resource.
* `create_service` - Create a new Service resource.
* `create_variable` - Create a new Variable.
* `delete_asset` - Delete an Asset resource.
* `delete_build` - Delete a Build resource.
* `delete_environment` - Delete a specific environment.
* `delete_function` - Delete a Function resource.
* `delete_service` - Delete a Service resource.
* `delete_variable` - Delete a specific Variable.
* `fetch_asset` - Retrieve a specific Asset resource.
* `fetch_asset_version` - Retrieve a specific Asset Version.
* `fetch_build` - Retrieve a specific Build resource.
* `fetch_build_status` - Retrieve a specific Build resource.
* `fetch_deployment` - Retrieve a specific Deployment.
* `fetch_environment` - Retrieve a specific environment.
* `fetch_function` - Retrieve a specific Function resource.
* `fetch_function_version` - Retrieve a specific Function Version resource.
* `fetch_function_version_content` - Retrieve a the content of a specific Function Version resource.
* `fetch_log` - Retrieve a specific log.
* `fetch_service` - Retrieve a specific Service resource.
* `fetch_variable` - Retrieve a specific Variable.
* `list_asset` - Retrieve a list of all Assets.
* `list_asset_version` - Retrieve a list of all Asset Versions.
* `list_build` - Retrieve a list of all Builds.
* `list_deployment` - Retrieve a list of all Deployments.
* `list_environment` - Retrieve a list of all environments.
* `list_function` - Retrieve a list of all Functions.
* `list_function_version` - Retrieve a list of all Function Version resources.
* `list_log` - Retrieve a list of all logs.
* `list_service` - Retrieve a list of all Services.
* `list_variable` - Retrieve a list of all Variables.
* `update_asset` - Update a specific Asset resource.
* `update_function` - Update a specific Function resource.
* `update_service` - Update a specific Service resource.
* `update_variable` - Update a specific Variable.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
