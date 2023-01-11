<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudtraceProjectsPatchTracesRequest(
    security=operations.CloudtraceProjectsPatchTracesSecurity(
        option1=operations.CloudtraceProjectsPatchTracesSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.CloudtraceProjectsPatchTracesPathParams(
        project_id="enim",
    ),
    query_params=operations.CloudtraceProjectsPatchTracesQueryParams(
        dollar_xgafv="2",
        access_token="quibusdam",
        alt="proto",
        callback="harum",
        fields="aliquid",
        key="voluptatum",
        oauth_token="doloremque",
        pretty_print=True,
        quota_user="dolorum",
        upload_type="vel",
        upload_protocol="quibusdam",
    ),
    request=shared.Traces(
        traces=[
            shared.Trace(
                project_id="ullam",
                spans=[
                    shared.TraceSpan(
                        end_time="hic",
                        kind="RPC_SERVER",
                        labels={
                            "modi": "sapiente",
                        },
                        name="voluptatem",
                        parent_span_id="maiores",
                        span_id="ipsum",
                        start_time="natus",
                    ),
                    shared.TraceSpan(
                        end_time="omnis",
                        kind="SPAN_KIND_UNSPECIFIED",
                        labels={
                            "nam": "recusandae",
                            "et": "nostrum",
                            "repellat": "dolor",
                        },
                        name="rem",
                        parent_span_id="et",
                        span_id="ducimus",
                        start_time="et",
                    ),
                    shared.TraceSpan(
                        end_time="nam",
                        kind="RPC_SERVER",
                        labels={
                            "beatae": "nisi",
                        },
                        name="corrupti",
                        parent_span_id="id",
                        span_id="cum",
                        start_time="voluptas",
                    ),
                ],
                trace_id="iusto",
            ),
        ],
    ),
)
    
res = s.projects.cloudtrace_projects_patch_traces(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->