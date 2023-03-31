<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudtraceProjectsPatchTracesRequest(
    dollar_xgafv="2",
    traces=shared.Traces(
        traces=[
            shared.Trace(
                project_id="distinctio",
                spans=[
                    shared.TraceSpan(
                        end_time="unde",
                        kind="RPC_CLIENT",
                        labels={
                            "illum": "vel",
                            "error": "deserunt",
                            "suscipit": "iure",
                        },
                        name="magnam",
                        parent_span_id="debitis",
                        span_id="ipsa",
                        start_time="delectus",
                    ),
                    shared.TraceSpan(
                        end_time="tempora",
                        kind="RPC_SERVER",
                        labels={
                            "minus": "placeat",
                            "voluptatum": "iusto",
                        },
                        name="excepturi",
                        parent_span_id="nisi",
                        span_id="recusandae",
                        start_time="temporibus",
                    ),
                    shared.TraceSpan(
                        end_time="ab",
                        kind="RPC_SERVER",
                        labels={
                            "deserunt": "perferendis",
                        },
                        name="ipsam",
                        parent_span_id="repellendus",
                        span_id="sapiente",
                        start_time="quo",
                    ),
                    shared.TraceSpan(
                        end_time="odit",
                        kind="RPC_CLIENT",
                        labels={
                            "maiores": "molestiae",
                            "quod": "quod",
                            "esse": "totam",
                            "porro": "dolorum",
                        },
                        name="dicta",
                        parent_span_id="nam",
                        span_id="officia",
                        start_time="occaecati",
                    ),
                ],
                trace_id="fugit",
            ),
            shared.Trace(
                project_id="deleniti",
                spans=[
                    shared.TraceSpan(
                        end_time="optio",
                        kind="RPC_SERVER",
                        labels={
                            "commodi": "molestiae",
                        },
                        name="modi",
                        parent_span_id="qui",
                        span_id="impedit",
                        start_time="cum",
                    ),
                    shared.TraceSpan(
                        end_time="esse",
                        kind="SPAN_KIND_UNSPECIFIED",
                        labels={
                            "aspernatur": "perferendis",
                            "ad": "natus",
                            "sed": "iste",
                        },
                        name="dolor",
                        parent_span_id="natus",
                        span_id="laboriosam",
                        start_time="hic",
                    ),
                    shared.TraceSpan(
                        end_time="saepe",
                        kind="RPC_CLIENT",
                        labels={
                            "corporis": "iste",
                            "iure": "saepe",
                        },
                        name="quidem",
                        parent_span_id="architecto",
                        span_id="ipsa",
                        start_time="reiciendis",
                    ),
                    shared.TraceSpan(
                        end_time="est",
                        kind="RPC_SERVER",
                        labels={
                            "dolores": "dolorem",
                            "corporis": "explicabo",
                            "nobis": "enim",
                        },
                        name="omnis",
                        parent_span_id="nemo",
                        span_id="minima",
                        start_time="excepturi",
                    ),
                ],
                trace_id="accusantium",
            ),
            shared.Trace(
                project_id="iure",
                spans=[
                    shared.TraceSpan(
                        end_time="doloribus",
                        kind="RPC_CLIENT",
                        labels={
                            "mollitia": "dolorem",
                        },
                        name="culpa",
                        parent_span_id="consequuntur",
                        span_id="repellat",
                        start_time="mollitia",
                    ),
                    shared.TraceSpan(
                        end_time="occaecati",
                        kind="SPAN_KIND_UNSPECIFIED",
                        labels={
                            "quam": "molestiae",
                            "velit": "error",
                        },
                        name="quia",
                        parent_span_id="quis",
                        span_id="vitae",
                        start_time="laborum",
                    ),
                    shared.TraceSpan(
                        end_time="animi",
                        kind="SPAN_KIND_UNSPECIFIED",
                        labels={
                            "quo": "sequi",
                        },
                        name="tenetur",
                        parent_span_id="ipsam",
                        span_id="id",
                        start_time="possimus",
                    ),
                ],
                trace_id="aut",
            ),
        ],
    ),
    access_token="quasi",
    alt="media",
    callback="temporibus",
    fields_="laborum",
    key="quasi",
    oauth_token="reiciendis",
    pretty_print=False,
    project_id="voluptatibus",
    quota_user="vero",
    upload_type="nihil",
    upload_protocol="praesentium",
)
    
res = s.projects.cloudtrace_projects_patch_traces(req, operations.CloudtraceProjectsPatchTracesSecurity(
    option1=operations.CloudtraceProjectsPatchTracesSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->