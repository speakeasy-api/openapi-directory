# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption2;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesPathParams;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesQueryParams;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesResponse;
import org.openapis.openapi.models.shared.Traces;
import org.openapis.openapi.models.shared.Trace;
import org.openapis.openapi.models.shared.TraceSpanKindEnum;
import org.openapis.openapi.models.shared.TraceSpan;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsPatchTracesRequest req = new CloudtraceProjectsPatchTracesRequest() {{
                security = new CloudtraceProjectsPatchTracesSecurity() {{
                    option1 = new CloudtraceProjectsPatchTracesSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudtraceProjectsPatchTracesPathParams() {{
                    projectId = "corrupti";
                }};
                queryParams = new CloudtraceProjectsPatchTracesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Traces() {{
                    traces = new org.openapis.openapi.models.shared.Trace[]{{
                        add(new Trace() {{
                            projectId = "iure";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "debitis";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("tempora", "suscipit");
                                        put("molestiae", "minus");
                                        put("placeat", "voluptatum");
                                        put("iusto", "excepturi");
                                    }};
                                    name = "nisi";
                                    parentSpanId = "recusandae";
                                    spanId = "temporibus";
                                    startTime = "ab";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "quis";
                                    kind = "SPAN_KIND_UNSPECIFIED";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("perferendis", "ipsam");
                                        put("repellendus", "sapiente");
                                        put("quo", "odit");
                                    }};
                                    name = "at";
                                    parentSpanId = "at";
                                    spanId = "maiores";
                                    startTime = "molestiae";
                                }}),
                            }};
                            traceId = "quod";
                        }}),
                        add(new Trace() {{
                            projectId = "quod";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "totam";
                                    kind = "RPC_CLIENT";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("dicta", "nam");
                                        put("officia", "occaecati");
                                        put("fugit", "deleniti");
                                    }};
                                    name = "hic";
                                    parentSpanId = "optio";
                                    spanId = "totam";
                                    startTime = "beatae";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "commodi";
                                    kind = "RPC_SERVER";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("qui", "impedit");
                                        put("cum", "esse");
                                    }};
                                    name = "ipsum";
                                    parentSpanId = "excepturi";
                                    spanId = "aspernatur";
                                    startTime = "perferendis";
                                }}),
                            }};
                            traceId = "ad";
                        }}),
                    }};
                }};
            }};            

            CloudtraceProjectsPatchTracesResponse res = sdk.projects.cloudtraceProjectsPatchTraces(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `cloudtraceProjectsPatchTraces` - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* `cloudtraceProjectsTracesGet` - Gets a single trace by its ID.
* `cloudtraceProjectsTracesList` - Returns a list of traces that match the specified filter conditions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
