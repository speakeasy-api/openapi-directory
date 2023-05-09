# projects

### Available Operations

* [cloudtraceProjectsPatchTraces](#cloudtraceprojectspatchtraces) - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* [cloudtraceProjectsTracesGet](#cloudtraceprojectstracesget) - Gets a single trace by its ID.
* [cloudtraceProjectsTracesList](#cloudtraceprojectstraceslist) - Returns a list of traces that match the specified filter conditions.

## cloudtraceProjectsPatchTraces

Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsPatchTracesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Trace;
import org.openapis.openapi.models.shared.TraceSpan;
import org.openapis.openapi.models.shared.TraceSpanKindEnum;
import org.openapis.openapi.models.shared.Traces;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsPatchTracesRequest req = new CloudtraceProjectsPatchTracesRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                traces = new Traces() {{
                    traces = new org.openapis.openapi.models.shared.Trace[]{{
                        add(new Trace() {{
                            projectId = "sint";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "itaque";
                                    kind = TraceSpanKindEnum.SPAN_KIND_UNSPECIFIED;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("consequatur", "est");
                                        put("quibusdam", "explicabo");
                                    }};
                                    name = "Rudy Spencer";
                                    parentSpanId = "qui";
                                    spanId = "aliquid";
                                    startTime = "cupiditate";
                                }}),
                            }};
                            traceId = "quos";
                        }}),
                        add(new Trace() {{
                            projectId = "perferendis";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "assumenda";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("fugit", "dolorum");
                                    }};
                                    name = "Eddie Prosacco";
                                    parentSpanId = "delectus";
                                    spanId = "eum";
                                    startTime = "non";
                                }}),
                            }};
                            traceId = "eligendi";
                        }}),
                        add(new Trace() {{
                            projectId = "sint";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "provident";
                                    kind = TraceSpanKindEnum.RPC_CLIENT;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("officia", "dolor");
                                        put("debitis", "a");
                                        put("dolorum", "in");
                                    }};
                                    name = "Angel Wolff II";
                                    parentSpanId = "cumque";
                                    spanId = "facere";
                                    startTime = "ea";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "aliquid";
                                    kind = TraceSpanKindEnum.RPC_CLIENT;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("non", "occaecati");
                                        put("enim", "accusamus");
                                        put("delectus", "quidem");
                                        put("provident", "nam");
                                    }};
                                    name = "Nelson Lesch";
                                    parentSpanId = "deserunt";
                                    spanId = "nisi";
                                    startTime = "vel";
                                }}),
                            }};
                            traceId = "natus";
                        }}),
                        add(new Trace() {{
                            projectId = "omnis";
                            spans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    endTime = "perferendis";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("distinctio", "id");
                                        put("labore", "labore");
                                    }};
                                    name = "Ada Rohan";
                                    parentSpanId = "aspernatur";
                                    spanId = "architecto";
                                    startTime = "magnam";
                                }}),
                                add(new TraceSpan() {{
                                    endTime = "et";
                                    kind = TraceSpanKindEnum.RPC_SERVER;
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("provident", "quos");
                                        put("sint", "accusantium");
                                    }};
                                    name = "Abel O'Hara";
                                    parentSpanId = "dolor";
                                    spanId = "necessitatibus";
                                    startTime = "odit";
                                }}),
                            }};
                            traceId = "nemo";
                        }}),
                    }};
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                key = "eius";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "facilis";
                uploadProtocol = "in";
            }};            

            CloudtraceProjectsPatchTracesResponse res = sdk.projects.cloudtraceProjectsPatchTraces(req, new CloudtraceProjectsPatchTracesSecurity() {{
                option1 = new CloudtraceProjectsPatchTracesSecurityOption1("architecto", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtraceProjectsTracesGet

Gets a single trace by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesGetRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesGetResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesGetSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTracesGetRequest req = new CloudtraceProjectsTracesGetRequest("repudiandae", "ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            CloudtraceProjectsTracesGetResponse res = sdk.projects.cloudtraceProjectsTracesGet(req, new CloudtraceProjectsTracesGetSecurity() {{
                option1 = new CloudtraceProjectsTracesGetSecurityOption1("natus", "magni") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.trace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudtraceProjectsTracesList

Returns a list of traces that match the specified filter conditions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesListRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesListResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesListSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesListSecurityOption2;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTracesListRequest req = new CloudtraceProjectsTracesListRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                endTime = "ea";
                fields = "excepturi";
                filter = "odit";
                key = "ea";
                oauthToken = "accusantium";
                orderBy = "ab";
                pageSize = 982575L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "ipsam";
                startTime = "voluptate";
                uploadType = "autem";
                uploadProtocol = "nam";
                view = CloudtraceProjectsTracesListViewEnum.VIEW_TYPE_UNSPECIFIED;
            }};            

            CloudtraceProjectsTracesListResponse res = sdk.projects.cloudtraceProjectsTracesList(req, new CloudtraceProjectsTracesListSecurity() {{
                option1 = new CloudtraceProjectsTracesListSecurityOption1("pariatur", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTracesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
