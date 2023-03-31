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