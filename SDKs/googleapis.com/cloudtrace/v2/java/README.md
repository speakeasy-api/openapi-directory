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

import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurityOption2;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTracesBatchWriteRequest req = new CloudtraceProjectsTracesBatchWriteRequest() {{
                dollarXgafv = "2";
                batchWriteSpansRequest = new BatchWriteSpansRequest() {{
                    spans = new org.openapis.openapi.models.shared.Span[]{{
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("quibusdam", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "unde";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 857946;
                                            value = "corrupti";
                                        }};
                                    }});
                                    put("illum", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "vel";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 623564;
                                            value = "deserunt";
                                        }};
                                    }});
                                    put("suscipit", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "iure";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 297534;
                                            value = "debitis";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 56713;
                            }};
                            childSpanCount = 963663;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 272656;
                                value = "suscipit";
                            }};
                            endTime = "molestiae";
                            links = new Links() {{
                                droppedLinksCount = 791725;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("iusto", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "excepturi";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 392785;
                                                        value = "recusandae";
                                                    }};
                                                }});
                                                put("temporibus", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "ab";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 337396;
                                                        value = "veritatis";
                                                    }};
                                                }});
                                                put("deserunt", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "perferendis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 368241;
                                                        value = "repellendus";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 957156;
                                        }};
                                        spanId = "quo";
                                        traceId = "odit";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("maiores", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "molestiae";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 799159;
                                                        value = "quod";
                                                    }};
                                                }});
                                                put("esse", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "totam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 780529;
                                                        value = "dolorum";
                                                    }};
                                                }});
                                                put("dicta", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "nam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 639921;
                                                        value = "occaecati";
                                                    }};
                                                }});
                                                put("fugit", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "deleniti";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 944669;
                                                        value = "optio";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 521848;
                                        }};
                                        spanId = "beatae";
                                        traceId = "commodi";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("qui", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "impedit";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 736918;
                                                        value = "esse";
                                                    }};
                                                }});
                                                put("ipsum", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "excepturi";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 135218;
                                                        value = "perferendis";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 324141;
                                        }};
                                        spanId = "natus";
                                        traceId = "sed";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("natus", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "laboriosam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 943749;
                                                        value = "saepe";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 681820;
                                        }};
                                        spanId = "in";
                                        traceId = "corporis";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "iure";
                            parentSpanId = "saepe";
                            sameProcessAsParentSpan = false;
                            spanId = "quidem";
                            spanKind = "SPAN_KIND_UNSPECIFIED";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 60225;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "est";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 653140;
                                                value = "laborum";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 170909;
                                                value = "dolorem";
                                            }};
                                            lineNumber = "corporis";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 128926;
                                                    value = "nobis";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 315428;
                                                    value = "omnis";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 363711;
                                                value = "minima";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 570197;
                                                value = "accusantium";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "iure";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 634274;
                                                value = "doloribus";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 958950;
                                                value = "architecto";
                                            }};
                                            lineNumber = "mollitia";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 208876;
                                                    value = "culpa";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 161309;
                                                    value = "repellat";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 653108;
                                                value = "occaecati";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 253291;
                                                value = "commodi";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "quam";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 474697;
                                                value = "velit";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 623510;
                                                value = "quia";
                                            }};
                                            lineNumber = "quis";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 110375;
                                                    value = "laborum";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 656330;
                                                    value = "enim";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 138183;
                                                value = "quo";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 196582;
                                                value = "tenetur";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "ipsam";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 662527;
                                                value = "possimus";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 13571;
                                                value = "quasi";
                                            }};
                                            lineNumber = "error";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 837945;
                                                    value = "laborum";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 96098;
                                                    value = "reiciendis";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 976460;
                                                value = "vero";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 468651;
                                                value = "praesentium";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "voluptatibus";
                            }};
                            startTime = "ipsa";
                            status = new Status() {{
                                code = 604846;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("perferendis", "doloremque");
                                        put("reprehenderit", "ut");
                                        put("maiores", "dicta");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("dolore", "iusto");
                                        put("dicta", "harum");
                                    }}),
                                }};
                                message = "enim";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 880476;
                                droppedMessageEventsCount = 414263;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("ipsum", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "quidem";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 565189;
                                                            value = "excepturi";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 865103;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 265389;
                                                value = "praesentium";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "rem";
                                            id = "voluptates";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "repudiandae";
                                        }};
                                        time = "sint";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("itaque", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "incidunt";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 318569;
                                                            value = "consequatur";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 667411;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 842342;
                                                value = "explicabo";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "deserunt";
                                            id = "distinctio";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "labore";
                                        }};
                                        time = "modi";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("aliquid", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "cupiditate";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 552822;
                                                            value = "perferendis";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 164940;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 828940;
                                                value = "ipsam";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "alias";
                                            id = "fugit";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "excepturi";
                                        }};
                                        time = "tempora";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("tempore", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "labore";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 962189;
                                                            value = "eum";
                                                        }};
                                                    }});
                                                    put("non", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "eligendi";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 576157;
                                                            value = "aliquid";
                                                        }};
                                                    }});
                                                    put("provident", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "necessitatibus";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 572252;
                                                            value = "officia";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 223081;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 891555;
                                                value = "a";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "dolorum";
                                            id = "in";
                                            type = "SENT";
                                            uncompressedSizeBytes = "illum";
                                        }};
                                        time = "maiores";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("dicta", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "magnam";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 767024;
                                            value = "facere";
                                        }};
                                    }});
                                    put("ea", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "aliquid";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 675439;
                                            value = "accusamus";
                                        }};
                                    }});
                                    put("non", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "occaecati";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 313218;
                                            value = "accusamus";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 965417;
                            }};
                            childSpanCount = 692532;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 588465;
                                value = "nam";
                            }};
                            endTime = "id";
                            links = new Links() {{
                                droppedLinksCount = 501324;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("amet", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "deserunt";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 394869;
                                                        value = "vel";
                                                    }};
                                                }});
                                                put("natus", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "omnis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 474867;
                                                        value = "perferendis";
                                                    }};
                                                }});
                                                put("nihil", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "magnam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 716075;
                                                        value = "id";
                                                    }};
                                                }});
                                                put("labore", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "labore";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 383462;
                                                        value = "natus";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 749170;
                                        }};
                                        spanId = "eum";
                                        traceId = "vero";
                                        type = "TYPE_UNSPECIFIED";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("magnam", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "et";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 569965;
                                                        value = "ullam";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 590873;
                                        }};
                                        spanId = "quos";
                                        traceId = "sint";
                                        type = "TYPE_UNSPECIFIED";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("reiciendis", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "mollitia";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 320997;
                                                        value = "eum";
                                                    }};
                                                }});
                                                put("dolor", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "necessitatibus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 141264;
                                                        value = "nemo";
                                                    }};
                                                }});
                                                put("quasi", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "iure";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 984043;
                                                        value = "debitis";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 260341;
                                        }};
                                        spanId = "maxime";
                                        traceId = "deleniti";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "in";
                            parentSpanId = "architecto";
                            sameProcessAsParentSpan = false;
                            spanId = "architecto";
                            spanKind = "CONSUMER";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 352312;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
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
                                        add(new StackFrame() {{
                                            columnNumber = "pariatur";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 807319;
                                                value = "ea";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 569101;
                                                value = "odit";
                                            }};
                                            lineNumber = "ea";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 33222;
                                                    value = "ab";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 982575;
                                                    value = "quidem";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 373291;
                                                value = "voluptate";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 420075;
                                                value = "nam";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "eaque";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 866383;
                                                value = "nemo";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 975522;
                                                value = "perferendis";
                                            }};
                                            lineNumber = "fugiat";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 230742;
                                                    value = "aut";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 764912;
                                                    value = "corporis";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 944124;
                                                value = "libero";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 749999;
                                                value = "dolores";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "quis";
                            }};
                            startTime = "totam";
                            status = new Status() {{
                                code = 489549;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("nesciunt", "eos");
                                        put("perferendis", "dolores");
                                    }}),
                                }};
                                message = "minus";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 463451;
                                droppedMessageEventsCount = 223924;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("hic", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "recusandae";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 608253;
                                                            value = "facilis";
                                                        }};
                                                    }});
                                                    put("perspiciatis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "voluptatem";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 783645;
                                                            value = "consequuntur";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 500026;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 621479;
                                                value = "eaque";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "occaecati";
                                            id = "rerum";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "asperiores";
                                        }};
                                        time = "earum";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("iste", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "dolorum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 535633;
                                                            value = "pariatur";
                                                        }};
                                                    }});
                                                    put("provident", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "nobis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 730122;
                                                            value = "delectus";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 311945;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 554242;
                                                value = "aliquid";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "dolorem";
                                            id = "dolorem";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "qui";
                                        }};
                                        time = "ipsum";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("excepturi", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "cum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 452109;
                                                            value = "dignissimos";
                                                        }};
                                                    }});
                                                    put("reiciendis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "amet";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 680545;
                                                            value = "numquam";
                                                        }};
                                                    }});
                                                    put("veritatis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "ipsa";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 56418;
                                                            value = "iure";
                                                        }};
                                                    }});
                                                    put("odio", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "quaerat";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 881005;
                                                            value = "quidem";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 976405;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 377752;
                                                value = "natus";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "eos";
                                            id = "atque";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "fugiat";
                                        }};
                                        time = "ab";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("dolorum", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "iusto";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 453697;
                                                            value = "dolorum";
                                                        }};
                                                    }});
                                                    put("deleniti", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "omnis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 896672;
                                                            value = "distinctio";
                                                        }};
                                                    }});
                                                    put("asperiores", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "nihil";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 216897;
                                                            value = "voluptate";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 663078;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 906418;
                                                value = "eius";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "aspernatur";
                                            id = "perferendis";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "optio";
                                        }};
                                        time = "accusamus";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("saepe", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "suscipit";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 645785;
                                            value = "provident";
                                        }};
                                    }});
                                    put("minima", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "repellendus";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 519711;
                                            value = "similique";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 55;
                            }};
                            childSpanCount = 872651;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 311860;
                                value = "tempora";
                            }};
                            endTime = "vel";
                            links = new Links() {{
                                droppedLinksCount = 798047;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("dolorum", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "a";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 456130;
                                                        value = "harum";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 483409;
                                        }};
                                        spanId = "ipsum";
                                        traceId = "quisquam";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("tempore", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "accusamus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 253941;
                                                        value = "enim";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 213312;
                                        }};
                                        spanId = "sapiente";
                                        traceId = "totam";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("expedita", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "neque";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 153694;
                                                        value = "vel";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 730442;
                                        }};
                                        spanId = "voluptas";
                                        traceId = "deserunt";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("incidunt", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "qui";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 586784;
                                                        value = "maxime";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 863856;
                                        }};
                                        spanId = "soluta";
                                        traceId = "dicta";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "totam";
                            parentSpanId = "incidunt";
                            sameProcessAsParentSpan = false;
                            spanId = "aspernatur";
                            spanKind = "INTERNAL";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 716860;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "aliquid";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 463150;
                                                value = "molestias";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 840429;
                                                value = "qui";
                                            }};
                                            lineNumber = "neque";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 144847;
                                                    value = "magni";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 488056;
                                                    value = "sunt";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 355613;
                                                value = "nam";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 940432;
                                                value = "voluptatem";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "cumque";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 746994;
                                                value = "nobis";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 92596;
                                                value = "saepe";
                                            }};
                                            lineNumber = "ipsum";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 83422;
                                                    value = "nobis";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 552193;
                                                    value = "tempore";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 584476;
                                                value = "aperiam";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 961937;
                                                value = "dolorem";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "dolore";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 286915;
                                                value = "adipisci";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 677263;
                                                value = "architecto";
                                            }};
                                            lineNumber = "quae";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 16429;
                                                    value = "quas";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 929530;
                                                    value = "consequatur";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 669917;
                                                value = "repellendus";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 785153;
                                                value = "doloribus";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "ut";
                            }};
                            startTime = "facilis";
                            status = new Status() {{
                                code = 586410;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("laudantium", "odio");
                                    }}),
                                }};
                                message = "occaecati";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 977496;
                                droppedMessageEventsCount = 787542;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("quis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "ipsum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 961571;
                                                            value = "voluptate";
                                                        }};
                                                    }});
                                                    put("consectetur", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "vero";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 949319;
                                                            value = "dignissimos";
                                                        }};
                                                    }});
                                                    put("hic", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "distinctio";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 799203;
                                                            value = "odio";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 630448;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 708548;
                                                value = "vero";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "ducimus";
                                            id = "dolore";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "illum";
                                        }};
                                        time = "sequi";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("impedit", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "aut";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 974259;
                                                            value = "exercitationem";
                                                        }};
                                                    }});
                                                    put("nulla", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "fugit";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 780427;
                                                            value = "maiores";
                                                        }};
                                                    }});
                                                    put("doloribus", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "iusto";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 753570;
                                                            value = "ducimus";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 4048;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 639473;
                                                value = "tempora";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "ipsam";
                                            id = "ea";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "vel";
                                        }};
                                        time = "possimus";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("ratione", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "ex";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 511319;
                                                            value = "dicta";
                                                        }};
                                                    }});
                                                    put("dolor", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "maiores";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 97844;
                                                            value = "ex";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 862192;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 569211;
                                                value = "voluptatibus";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "nostrum";
                                            id = "sapiente";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "saepe";
                                        }};
                                        time = "ea";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("corporis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "veniam";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 399499;
                                                            value = "inventore";
                                                        }};
                                                    }});
                                                    put("magnam", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "ea";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 775220;
                                                            value = "consectetur";
                                                        }};
                                                    }});
                                                    put("recusandae", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "aspernatur";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 325310;
                                                            value = "eaque";
                                                        }};
                                                    }});
                                                    put("a", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "libero";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 13948;
                                                            value = "aut";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 533466;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 770581;
                                                value = "aliquam";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "fugit";
                                            id = "accusamus";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "non";
                                        }};
                                        time = "et";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};
                accessToken = "dolorum";
                alt = "proto";
                callback = "placeat";
                fields = "velit";
                key = "eum";
                name = "autem";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "assumenda";
                uploadProtocol = "nulla";
            }}            

            CloudtraceProjectsTracesBatchWriteResponse res = sdk.projects.cloudtraceProjectsTracesBatchWrite(req, new CloudtraceProjectsTracesBatchWriteSecurity() {{
                option1 = new CloudtraceProjectsTracesBatchWriteSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `cloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
