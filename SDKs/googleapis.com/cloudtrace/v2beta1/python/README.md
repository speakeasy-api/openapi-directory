# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/cloudtrace/v2beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudtraceProjectsTraceSinksCreateRequest(
    dollar_xgafv="2",
    trace_sink_input=shared.TraceSinkInput(
        name="provident",
        output_config=shared.OutputConfig(
            destination="distinctio",
        ),
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.cloudtrace_projects_trace_sinks_create(req, operations.CloudtraceProjectsTraceSinksCreateSecurity(
    option1=operations.CloudtraceProjectsTraceSinksCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.trace_sink is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudtrace_projects_trace_sinks_create` - Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
* `cloudtrace_projects_trace_sinks_delete` - Deletes a sink.
* `cloudtrace_projects_trace_sinks_get` - Get a trace sink by name under the parent resource (GCP project).
* `cloudtrace_projects_trace_sinks_list` - List all sinks for the parent resource (GCP project).
* `cloudtrace_projects_trace_sinks_patch` - Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
