<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurityOption2;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWritePathParams;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteQueryParams;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteResponse;
import org.openapis.openapi.models.shared.BatchWriteSpansRequest;
import org.openapis.openapi.models.shared.SpanSpanKindEnum;
import org.openapis.openapi.models.shared.Span;
import org.openapis.openapi.models.shared.TimeEvents;
import org.openapis.openapi.models.shared.TimeEvent;
import org.openapis.openapi.models.shared.MessageEventTypeEnum;
import org.openapis.openapi.models.shared.MessageEvent;
import org.openapis.openapi.models.shared.Annotation;
import org.openapis.openapi.models.shared.TruncatableString;
import org.openapis.openapi.models.shared.Attributes;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.StackTrace;
import org.openapis.openapi.models.shared.StackFrames;
import org.openapis.openapi.models.shared.StackFrame;
import org.openapis.openapi.models.shared.Module;
import org.openapis.openapi.models.shared.Links;
import org.openapis.openapi.models.shared.LinkTypeEnum;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTracesBatchWriteRequest req = new CloudtraceProjectsTracesBatchWriteRequest() {{
                security = new CloudtraceProjectsTracesBatchWriteSecurity() {{
                    option1 = new CloudtraceProjectsTracesBatchWriteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudtraceProjectsTracesBatchWritePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new CloudtraceProjectsTracesBatchWriteQueryParams() {{
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
                request = new BatchWriteSpansRequest() {{
                    spans = new org.openapis.openapi.models.shared.Span[]{{
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("magnam", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "debitis";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 56713;
                                            value = "delectus";
                                        }};
                                    }});
                                    put("tempora", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "suscipit";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 477665;
                                            value = "minus";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 812169;
                            }};
                            childSpanCount = 528895;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 479977;
                                value = "excepturi";
                            }};
                            endTime = "nisi";
                            links = new Links() {{
                                droppedLinksCount = 925597;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("quis", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "veritatis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 648172;
                                                        value = "perferendis";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 368241;
                                        }};
                                        spanId = "repellendus";
                                        traceId = "sapiente";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("at", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "at";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 978619;
                                                        value = "molestiae";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 799159;
                                        }};
                                        spanId = "quod";
                                        traceId = "esse";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("dolorum", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "dicta";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 720633;
                                                        value = "officia";
                                                    }};
                                                }});
                                                put("occaecati", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "fugit";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 537373;
                                                        value = "hic";
                                                    }};
                                                }});
                                                put("optio", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "totam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 105907;
                                                        value = "commodi";
                                                    }};
                                                }});
                                                put("molestiae", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "modi";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 186332;
                                                        value = "impedit";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 736918;
                                        }};
                                        spanId = "esse";
                                        traceId = "ipsum";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("perferendis", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "ad";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 617636;
                                                        value = "sed";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 612096;
                                        }};
                                        spanId = "dolor";
                                        traceId = "natus";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "hic";
                            parentSpanId = "saepe";
                            sameProcessAsParentSpan = false;
                            spanId = "fuga";
                            spanKind = "SERVER";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 359508;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "iure";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 902349;
                                                value = "quidem";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 99280;
                                                value = "ipsa";
                                            }};
                                            lineNumber = "reiciendis";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 666767;
                                                    value = "mollitia";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 670638;
                                                    value = "dolores";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 210382;
                                                value = "corporis";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 128926;
                                                value = "nobis";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "enim";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 607831;
                                                value = "nemo";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 325047;
                                                value = "excepturi";
                                            }};
                                            lineNumber = "accusantium";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 438601;
                                                    value = "culpa";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 988374;
                                                    value = "sapiente";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 102044;
                                                value = "mollitia";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 208876;
                                                value = "culpa";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "consequuntur";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 995300;
                                                value = "mollitia";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 581850;
                                                value = "numquam";
                                            }};
                                            lineNumber = "commodi";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 466311;
                                                    value = "molestiae";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 244425;
                                                    value = "error";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 158969;
                                                value = "quis";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 110375;
                                                value = "laborum";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "animi";
                            }};
                            startTime = "enim";
                            status = new Status() {{
                                code = 138183;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("tenetur", "ipsam");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("possimus", "aut");
                                        put("quasi", "error");
                                        put("temporibus", "laborum");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("reiciendis", "voluptatibus");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("nihil", "praesentium");
                                        put("voluptatibus", "ipsa");
                                        put("omnis", "voluptate");
                                        put("cum", "perferendis");
                                    }}),
                                }};
                                message = "doloremque";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 441711;
                                droppedMessageEventsCount = 282807;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("corporis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "dolore";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 480894;
                                                            value = "dicta";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 688661;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 317983;
                                                value = "accusamus";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "commodi";
                                            id = "repudiandae";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "ipsum";
                                        }};
                                        time = "quidem";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("excepturi", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "pariatur";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 265389;
                                                            value = "praesentium";
                                                        }};
                                                    }});
                                                    put("rem", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "voluptates";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 93940;
                                                            value = "repudiandae";
                                                        }};
                                                    }});
                                                    put("sint", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "veritatis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 929297;
                                                            value = "incidunt";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 318569;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 9356;
                                                value = "est";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "quibusdam";
                                            id = "explicabo";
                                            type = "SENT";
                                            uncompressedSizeBytes = "distinctio";
                                        }};
                                        time = "quibusdam";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("modi", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "qui";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 397821;
                                                            value = "cupiditate";
                                                        }};
                                                    }});
                                                    put("quos", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "perferendis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 164940;
                                                            value = "assumenda";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 369808;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 4695;
                                                value = "fugit";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "dolorum";
                                            id = "excepturi";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "facilis";
                                        }};
                                        time = "tempore";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("delectus", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "eum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 248753;
                                                            value = "eligendi";
                                                        }};
                                                    }});
                                                    put("sint", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "aliquid";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 592042;
                                                            value = "necessitatibus";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 572252;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 638921;
                                                value = "dolor";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "debitis";
                                            id = "a";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "in";
                                        }};
                                        time = "in";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("maiores", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "rerum";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 116202;
                                            value = "magnam";
                                        }};
                                    }});
                                    put("cumque", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "facere";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 411820;
                                            value = "aliquid";
                                        }};
                                    }});
                                    put("laborum", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "accusamus";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 249796;
                                            value = "occaecati";
                                        }};
                                    }});
                                    put("enim", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "accusamus";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 965417;
                                            value = "quidem";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 588465;
                            }};
                            childSpanCount = 725255;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 659669;
                                value = "blanditiis";
                            }};
                            endTime = "deleniti";
                            links = new Links() {{
                                droppedLinksCount = 956084;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("nisi", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "vel";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 618809;
                                                        value = "omnis";
                                                    }};
                                                }});
                                                put("molestiae", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "perferendis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 470132;
                                                        value = "magnam";
                                                    }};
                                                }});
                                                put("distinctio", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "id";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 287991;
                                                        value = "labore";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 383462;
                                        }};
                                        spanId = "natus";
                                        traceId = "nobis";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "vero";
                            parentSpanId = "aspernatur";
                            sameProcessAsParentSpan = false;
                            spanId = "architecto";
                            spanKind = "INTERNAL";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 92373;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "ullam";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 590873;
                                                value = "quos";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 574325;
                                                value = "accusantium";
                                            }};
                                            lineNumber = "mollitia";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 968962;
                                                    value = "mollitia";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 320997;
                                                    value = "eum";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 221262;
                                                value = "necessitatibus";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 141264;
                                                value = "nemo";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "quasi";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 435865;
                                                value = "doloribus";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 891924;
                                                value = "eius";
                                            }};
                                            lineNumber = "maxime";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 537023;
                                                    value = "facilis";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 447926;
                                                    value = "architecto";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 99569;
                                                value = "repudiandae";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 352312;
                                                value = "expedita";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "nihil";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 998848;
                                                value = "quibusdam";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 149448;
                                                value = "saepe";
                                            }};
                                            lineNumber = "pariatur";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 37559;
                                                    value = "consequuntur";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 508315;
                                                    value = "natus";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 166847;
                                                value = "sunt";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 779051;
                                                value = "illum";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "pariatur";
                            }};
                            startTime = "maxime";
                            status = new Status() {{
                                code = 411397;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("ea", "accusantium");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("maiores", "quidem");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("voluptate", "autem");
                                        put("nam", "eaque");
                                    }}),
                                }};
                                message = "pariatur";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 365496;
                                droppedMessageEventsCount = 975522;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("amet", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "aut";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 764912;
                                                            value = "corporis";
                                                        }};
                                                    }});
                                                    put("hic", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "libero";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 749999;
                                                            value = "dolores";
                                                        }};
                                                    }});
                                                    put("quis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "totam";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 489549;
                                                            value = "eaque";
                                                        }};
                                                    }});
                                                    put("quis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "nesciunt";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 179490;
                                                            value = "perferendis";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 170986;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 793698;
                                                value = "quam";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "dolor";
                                            id = "vero";
                                            type = "SENT";
                                            uncompressedSizeBytes = "hic";
                                        }};
                                        time = "recusandae";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};
            }};            

            CloudtraceProjectsTracesBatchWriteResponse res = sdk.projects.cloudtraceProjectsTracesBatchWrite(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->