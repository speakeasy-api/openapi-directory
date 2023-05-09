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
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesBatchWriteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Annotation;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.Attributes;
import org.openapis.openapi.models.shared.BatchWriteSpansRequest;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.LinkTypeEnum;
import org.openapis.openapi.models.shared.Links;
import org.openapis.openapi.models.shared.MessageEvent;
import org.openapis.openapi.models.shared.MessageEventTypeEnum;
import org.openapis.openapi.models.shared.Module;
import org.openapis.openapi.models.shared.Span;
import org.openapis.openapi.models.shared.SpanSpanKindEnum;
import org.openapis.openapi.models.shared.StackFrame;
import org.openapis.openapi.models.shared.StackFrames;
import org.openapis.openapi.models.shared.StackTrace;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TimeEvent;
import org.openapis.openapi.models.shared.TimeEvents;
import org.openapis.openapi.models.shared.TruncatableString;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtraceProjectsTracesBatchWriteRequest req = new CloudtraceProjectsTracesBatchWriteRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                batchWriteSpansRequest = new BatchWriteSpansRequest() {{
                    spans = new org.openapis.openapi.models.shared.Span[]{{
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("unde", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "nulla";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 544883;
                                            value = "illum";
                                        }};
                                    }});
                                    put("vel", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "error";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 645894;
                                            value = "suscipit";
                                        }};
                                    }});
                                    put("iure", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "magnam";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 891773;
                                            value = "ipsa";
                                        }};
                                    }});
                                    put("delectus", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "tempora";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 383441;
                                            value = "molestiae";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 791725;
                            }};
                            childSpanCount = 812169;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 528895;
                                value = "iusto";
                            }};
                            endTime = "excepturi";
                            links = new Links() {{
                                droppedLinksCount = 392785;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("ab", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "quis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 87129;
                                                        value = "deserunt";
                                                    }};
                                                }});
                                                put("perferendis", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "ipsam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 832620;
                                                        value = "sapiente";
                                                    }};
                                                }});
                                                put("quo", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "odit";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 870013;
                                                        value = "at";
                                                    }};
                                                }});
                                                put("maiores", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "molestiae";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 799159;
                                                        value = "quod";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 461479;
                                        }};
                                        spanId = "totam";
                                        traceId = "porro";
                                        type = LinkTypeEnum.PARENT_LINKED_SPAN;
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("nam", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "officia";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 582020;
                                                        value = "fugit";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 537373;
                                        }};
                                        spanId = "hic";
                                        traceId = "optio";
                                        type = LinkTypeEnum.CHILD_LINKED_SPAN;
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("commodi", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "molestiae";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 264555;
                                                        value = "qui";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 774234;
                                        }};
                                        spanId = "cum";
                                        traceId = "esse";
                                        type = LinkTypeEnum.TYPE_UNSPECIFIED;
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("aspernatur", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "perferendis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 324141;
                                                        value = "natus";
                                                    }};
                                                }});
                                                put("sed", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "iste";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 222321;
                                                        value = "natus";
                                                    }};
                                                }});
                                                put("laboriosam", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "hic";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 902599;
                                                        value = "fuga";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 449950;
                                        }};
                                        spanId = "corporis";
                                        traceId = "iste";
                                        type = LinkTypeEnum.CHILD_LINKED_SPAN;
                                    }}),
                                }};
                            }};
                            name = "Dr. Rickey Boyle";
                            parentSpanId = "mollitia";
                            sameProcessAsParentSpan = false;
                            spanId = "laborum";
                            spanKind = SpanSpanKindEnum.INTERNAL;
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 210382;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "explicabo";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 750686;
                                                value = "enim";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 607831;
                                                value = "nemo";
                                            }};
                                            lineNumber = "minima";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 570197;
                                                    value = "accusantium";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 438601;
                                                    value = "culpa";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 988374;
                                                value = "sapiente";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 102044;
                                                value = "mollitia";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "dolorem";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 635059;
                                                value = "consequuntur";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 995300;
                                                value = "mollitia";
                                            }};
                                            lineNumber = "occaecati";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 253291;
                                                    value = "commodi";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 466311;
                                                    value = "molestiae";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 244425;
                                                value = "error";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 158969;
                                                value = "quis";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "vitae";
                            }};
                            startTime = "laborum";
                            status = new Status() {{
                                code = 656330;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("quo", "sequi");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("ipsam", "id");
                                        put("possimus", "aut");
                                        put("quasi", "error");
                                        put("temporibus", "laborum");
                                    }}),
                                }};
                                message = "quasi";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 971945;
                                droppedMessageEventsCount = 976460;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("praesentium", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "voluptatibus";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 55714;
                                                            value = "omnis";
                                                        }};
                                                    }});
                                                    put("voluptate", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "cum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 19987;
                                                            value = "doloremque";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 441711;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 282807;
                                                value = "maiores";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "dicta";
                                            id = "corporis";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "iusto";
                                        }};
                                        time = "dicta";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("enim", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "accusamus";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 414263;
                                                            value = "repudiandae";
                                                        }};
                                                    }});
                                                    put("quae", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "ipsum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 692472;
                                                            value = "molestias";
                                                        }};
                                                    }});
                                                    put("excepturi", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "pariatur";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 265389;
                                                            value = "praesentium";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 523248;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 916723;
                                                value = "quasi";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "repudiandae";
                                            id = "sint";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "itaque";
                                        }};
                                        time = "incidunt";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("consequatur", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "est";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 842342;
                                                            value = "explicabo";
                                                        }};
                                                    }});
                                                    put("deserunt", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "distinctio";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 841386;
                                                            value = "labore";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 264730;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 183191;
                                                value = "aliquid";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "cupiditate";
                                            id = "quos";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "magni";
                                        }};
                                        time = "assumenda";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("alias", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "fugit";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 677817;
                                                            value = "excepturi";
                                                        }};
                                                    }});
                                                    put("tempora", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "facilis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 735194;
                                                            value = "labore";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 962189;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 433288;
                                                value = "non";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "eligendi";
                                            id = "sint";
                                            type = MessageEventTypeEnum.SENT;
                                            uncompressedSizeBytes = "provident";
                                        }};
                                        time = "necessitatibus";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("officia", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "dolor";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 891555;
                                            value = "a";
                                        }};
                                    }});
                                    put("dolorum", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "in";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 449198;
                                            value = "illum";
                                        }};
                                    }});
                                    put("maiores", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "rerum";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 116202;
                                            value = "magnam";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 767024;
                            }};
                            childSpanCount = 813798;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 411820;
                                value = "aliquid";
                            }};
                            endTime = "laborum";
                            links = new Links() {{
                                droppedLinksCount = 881104;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("enim", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "accusamus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 965417;
                                                        value = "quidem";
                                                    }};
                                                }});
                                                put("provident", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "nam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 659669;
                                                        value = "blanditiis";
                                                    }};
                                                }});
                                                put("deleniti", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "sapiente";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 230533;
                                                        value = "deserunt";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 394869;
                                        }};
                                        spanId = "vel";
                                        traceId = "natus";
                                        type = LinkTypeEnum.CHILD_LINKED_SPAN;
                                    }}),
                                }};
                            }};
                            name = "Dorothy Kovacek";
                            parentSpanId = "id";
                            sameProcessAsParentSpan = false;
                            spanId = "labore";
                            spanKind = SpanSpanKindEnum.INTERNAL;
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 383462;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "nobis";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 428769;
                                                value = "vero";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 135474;
                                                value = "architecto";
                                            }};
                                            lineNumber = "magnam";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 92373;
                                                    value = "excepturi";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 354047;
                                                    value = "provident";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 551816;
                                                value = "sint";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 33625;
                                                value = "mollitia";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "reiciendis";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 652103;
                                                value = "ad";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 431418;
                                                value = "dolor";
                                            }};
                                            lineNumber = "necessitatibus";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 141264;
                                                    value = "nemo";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 97260;
                                                    value = "iure";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 984043;
                                                value = "debitis";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 260341;
                                                value = "maxime";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "deleniti";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 703889;
                                                value = "in";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 100226;
                                                value = "architecto";
                                            }};
                                            lineNumber = "repudiandae";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 352312;
                                                    value = "expedita";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 469249;
                                                    value = "repellat";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 841140;
                                                value = "sed";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 904648;
                                                value = "pariatur";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "accusantium";
                            }};
                            startTime = "consequuntur";
                            status = new Status() {{
                                code = 508315;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("sunt", "quo");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("pariatur", "maxime");
                                        put("ea", "excepturi");
                                        put("odit", "ea");
                                        put("accusantium", "ab");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("quidem", "ipsam");
                                        put("voluptate", "autem");
                                        put("nam", "eaque");
                                        put("pariatur", "nemo");
                                    }}),
                                }};
                                message = "voluptatibus";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 16627;
                                droppedMessageEventsCount = 855804;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("cumque", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "corporis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 944124;
                                                            value = "libero";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 749999;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 171629;
                                                value = "quis";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "totam";
                                            id = "dignissimos";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "quis";
                                        }};
                                        time = "nesciunt";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("perferendis", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "dolores";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 793698;
                                            value = "quam";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 223924;
                            }};
                            childSpanCount = 874573;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 345352;
                                value = "hic";
                            }};
                            endTime = "recusandae";
                            links = new Links() {{
                                droppedLinksCount = 608253;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("voluptatem", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "porro";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 164694;
                                                        value = "blanditiis";
                                                    }};
                                                }});
                                                put("error", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "eaque";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 577229;
                                                        value = "rerum";
                                                    }};
                                                }});
                                                put("adipisci", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "asperiores";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 934214;
                                                        value = "modi";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 613966;
                                        }};
                                        spanId = "dolorum";
                                        traceId = "deleniti";
                                        type = LinkTypeEnum.PARENT_LINKED_SPAN;
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("nobis", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "libero";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 964490;
                                                        value = "quaerat";
                                                    }};
                                                }});
                                                put("quos", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "aliquid";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 212390;
                                                        value = "dolorem";
                                                    }};
                                                }});
                                                put("dolor", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "qui";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 218749;
                                                        value = "hic";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 569574;
                                        }};
                                        spanId = "cum";
                                        traceId = "voluptate";
                                        type = LinkTypeEnum.CHILD_LINKED_SPAN;
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("amet", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "dolorum";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 254356;
                                                        value = "veritatis";
                                                    }};
                                                }});
                                                put("ipsa", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "ipsa";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 434417;
                                                        value = "odio";
                                                    }};
                                                }});
                                                put("quaerat", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "accusamus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 696344;
                                                        value = "voluptatibus";
                                                    }};
                                                }});
                                                put("voluptas", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "natus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 179603;
                                                        value = "atque";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 24678;
                                        }};
                                        spanId = "fugiat";
                                        traceId = "ab";
                                        type = LinkTypeEnum.PARENT_LINKED_SPAN;
                                    }}),
                                }};
                            }};
                            name = "Ted Kling";
                            parentSpanId = "omnis";
                            sameProcessAsParentSpan = false;
                            spanId = "necessitatibus";
                            spanKind = SpanSpanKindEnum.PRODUCER;
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 990339;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "ipsum";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 456015;
                                                value = "id";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 906418;
                                                value = "eius";
                                            }};
                                            lineNumber = "aspernatur";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 20651;
                                                    value = "amet";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 758379;
                                                    value = "accusamus";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 320017;
                                                value = "saepe";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 383464;
                                                value = "deserunt";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "provident";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 324683;
                                                value = "repellendus";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 519711;
                                                value = "similique";
                                            }};
                                            lineNumber = "alias";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 872651;
                                                    value = "quaerat";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 273542;
                                                    value = "vel";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 798047;
                                                value = "officiis";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 185636;
                                                value = "dolorum";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "a";
                            }};
                            startTime = "esse";
                            status = new Status() {{
                                code = 687488;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("quisquam", "tenetur");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("tempore", "accusamus");
                                    }}),
                                }};
                                message = "numquam";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 313692;
                                droppedMessageEventsCount = 213312;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("nihil", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "sit";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 711584;
                                                            value = "neque";
                                                        }};
                                                    }});
                                                    put("sed", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "vel";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 730442;
                                                            value = "voluptas";
                                                        }};
                                                    }});
                                                    put("deserunt", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "quam";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 214880;
                                                            value = "incidunt";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 186458;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 586784;
                                                value = "maxime";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "pariatur";
                                            id = "soluta";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "laborum";
                                        }};
                                        time = "totam";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("aspernatur", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "dolores";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 716860;
                                                            value = "facilis";
                                                        }};
                                                    }});
                                                    put("aliquid", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "quam";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 565421;
                                                            value = "temporibus";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 183280;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 204865;
                                                value = "fugit";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "magni";
                                            id = "odio";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "ullam";
                                        }};
                                        time = "nam";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("voluptatem", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "cumque";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 746994;
                                                            value = "nobis";
                                                        }};
                                                    }});
                                                    put("et", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "saepe";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 217450;
                                                            value = "veritatis";
                                                        }};
                                                    }});
                                                    put("nobis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "quos";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 731694;
                                                            value = "cupiditate";
                                                        }};
                                                    }});
                                                    put("aperiam", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "delectus";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 209157;
                                                            value = "dolore";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 286915;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 240829;
                                                value = "dolorum";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "architecto";
                                            id = "quae";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "quas";
                                        }};
                                        time = "itaque";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("est", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "repellendus";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 785153;
                                                            value = "doloribus";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 281730;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 703495;
                                                value = "cupiditate";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "qui";
                                            id = "quae";
                                            type = MessageEventTypeEnum.SENT;
                                            uncompressedSizeBytes = "odio";
                                        }};
                                        time = "occaecati";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "omnis";
                key = "quis";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "voluptate";
                uploadProtocol = "consectetur";
            }};            

            CloudtraceProjectsTracesBatchWriteResponse res = sdk.projects.cloudtraceProjectsTracesBatchWrite(req, new CloudtraceProjectsTracesBatchWriteSecurity() {{
                option1 = new CloudtraceProjectsTracesBatchWriteSecurityOption1("vero", "tenetur") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudtraceProjectsTracesBatchWrite](docs/projects/README.md#cloudtraceprojectstracesbatchwrite) - Batch writes new spans to new or existing traces. You cannot update existing spans.
* [cloudtraceProjectsTracesSpansCreateSpan](docs/projects/README.md#cloudtraceprojectstracesspanscreatespan) - Creates a new span.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
