# projects

### Available Operations

* [cloudtraceProjectsTracesBatchWrite](#cloudtraceprojectstracesbatchwrite) - Batch writes new spans to new or existing traces. You cannot update existing spans.
* [cloudtraceProjectsTracesSpansCreateSpan](#cloudtraceprojectstracesspanscreatespan) - Creates a new span.

## cloudtraceProjectsTracesBatchWrite

Batch writes new spans to new or existing traces. You cannot update existing spans.

### Example Usage

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

            CloudtraceProjectsTracesBatchWriteRequest req = new CloudtraceProjectsTracesBatchWriteRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                batchWriteSpansRequest = new BatchWriteSpansRequest() {{
                    spans = new org.openapis.openapi.models.shared.Span[]{{
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("odio", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "similique";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 708548;
                                            value = "vero";
                                        }};
                                    }});
                                    put("ducimus", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "dolore";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 844550;
                                            value = "illum";
                                        }};
                                    }});
                                    put("sequi", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "natus";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 773326;
                                            value = "aut";
                                        }};
                                    }});
                                    put("voluptatibus", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "exercitationem";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 862310;
                                            value = "fugit";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 780427;
                            }};
                            childSpanCount = 981830;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 985033;
                                value = "iusto";
                            }};
                            endTime = "eligendi";
                            links = new Links() {{
                                droppedLinksCount = 497391;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("tempora", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "ipsam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 410492;
                                                        value = "aspernatur";
                                                    }};
                                                }});
                                                put("vel", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "possimus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 297842;
                                                        value = "ratione";
                                                    }};
                                                }});
                                                put("ex", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "laudantium";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 120657;
                                                        value = "dolor";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 980700;
                                        }};
                                        spanId = "quasi";
                                        traceId = "ex";
                                        type = LinkTypeEnum.PARENT_LINKED_SPAN;
                                    }}),
                                }};
                            }};
                            name = "Boyd Heathcote";
                            parentSpanId = "saepe";
                            sameProcessAsParentSpan = false;
                            spanId = "ea";
                            spanKind = SpanSpanKindEnum.PRODUCER;
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 359271;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "aliquid";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 81101;
                                                value = "magnam";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 407241;
                                                value = "quo";
                                            }};
                                            lineNumber = "consectetur";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 926213;
                                                    value = "aspernatur";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 325310;
                                                    value = "eaque";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 952871;
                                                value = "libero";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 13948;
                                                value = "aut";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "deleniti";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 770581;
                                                value = "aliquam";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 146946;
                                                value = "accusamus";
                                            }};
                                            lineNumber = "inventore";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 250622;
                                                    value = "et";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 677412;
                                                    value = "laborum";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 810424;
                                                value = "velit";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 432148;
                                                value = "autem";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "nobis";
                            }};
                            startTime = "quas";
                            status = new Status() {{
                                code = 829603;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("libero", "quasi");
                                        put("tempora", "numquam");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("provident", "ipsa");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("magnam", "odio");
                                        put("eius", "esse");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("rem", "fuga");
                                        put("reprehenderit", "quidem");
                                    }}),
                                }};
                                message = "fugiat";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 283519;
                                droppedMessageEventsCount = 433439;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("eos", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "praesentium";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 788546;
                                                            value = "veritatis";
                                                        }};
                                                    }});
                                                    put("ipsa", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "id";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 696997;
                                                            value = "neque";
                                                        }};
                                                    }});
                                                    put("quo", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "illum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 777408;
                                                            value = "fuga";
                                                        }};
                                                    }});
                                                    put("eius", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "eos";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 373813;
                                                            value = "ab";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 587600;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 9688;
                                                value = "tempora";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "debitis";
                                            id = "ipsam";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "sequi";
                                        }};
                                        time = "quo";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("recusandae", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "aperiam";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 715179;
                                                            value = "quod";
                                                        }};
                                                    }});
                                                    put("dignissimos", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "inventore";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 469498;
                                                            value = "totam";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 882710;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 306810;
                                                value = "odio";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "occaecati";
                                            id = "commodi";
                                            type = MessageEventTypeEnum.RECEIVED;
                                            uncompressedSizeBytes = "dolores";
                                        }};
                                        time = "deserunt";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("accusantium", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "porro";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 430402;
                                            value = "quas";
                                        }};
                                    }});
                                    put("praesentium", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "consequuntur";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 536178;
                                            value = "fugit";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 681393;
                            }};
                            childSpanCount = 649463;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 277596;
                                value = "atque";
                            }};
                            endTime = "explicabo";
                            links = new Links() {{
                                droppedLinksCount = 325685;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("sapiente", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "consequuntur";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 187131;
                                                        value = "explicabo";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 903984;
                                        }};
                                        spanId = "occaecati";
                                        traceId = "atque";
                                        type = LinkTypeEnum.TYPE_UNSPECIFIED;
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("eveniet", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "accusamus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 82971;
                                                        value = "esse";
                                                    }};
                                                }});
                                                put("quod", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "nam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 877131;
                                                        value = "aliquid";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 93459;
                                        }};
                                        spanId = "saepe";
                                        traceId = "vel";
                                        type = LinkTypeEnum.PARENT_LINKED_SPAN;
                                    }}),
                                }};
                            }};
                            name = "Luz McClure";
                            parentSpanId = "eligendi";
                            sameProcessAsParentSpan = false;
                            spanId = "sit";
                            spanKind = SpanSpanKindEnum.CLIENT;
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 731398;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "cumque";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 160538;
                                                value = "consequatur";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 796392;
                                                value = "quaerat";
                                            }};
                                            lineNumber = "sapiente";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 232865;
                                                    value = "esse";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 503427;
                                                    value = "provident";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 953722;
                                                value = "nulla";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 557811;
                                                value = "esse";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "quasi";
                            }};
                            startTime = "a";
                            status = new Status() {{
                                code = 621679;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("possimus", "quia");
                                        put("eveniet", "asperiores");
                                        put("facere", "veritatis");
                                        put("consequuntur", "quasi");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("culpa", "aliquid");
                                        put("tenetur", "quae");
                                        put("earum", "vel");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("eius", "libero");
                                        put("illum", "soluta");
                                    }}),
                                }};
                                message = "accusantium";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 306986;
                                droppedMessageEventsCount = 958983;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("reprehenderit", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "ullam";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 391774;
                                                            value = "aut";
                                                        }};
                                                    }});
                                                    put("voluptatum", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "qui";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 845358;
                                                            value = "ex";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 536275;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 929292;
                                                value = "dolorum";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "architecto";
                                            id = "omnis";
                                            type = MessageEventTypeEnum.RECEIVED;
                                            uncompressedSizeBytes = "quasi";
                                        }};
                                        time = "at";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                    put("voluptate", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "ipsa";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 326701;
                                            value = "veritatis";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 232744;
                            }};
                            childSpanCount = 237173;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 614465;
                                value = "temporibus";
                            }};
                            endTime = "accusantium";
                            links = new Links() {{
                                droppedLinksCount = 522371;
                                link = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("eum", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "mollitia";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 68074;
                                                        value = "corrupti";
                                                    }};
                                                }});
                                                put("non", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "voluptatem";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 221161;
                                                        value = "occaecati";
                                                    }};
                                                }});
                                                put("numquam", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "impedit";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 131055;
                                                        value = "voluptas";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 12036;
                                        }};
                                        spanId = "dignissimos";
                                        traceId = "dicta";
                                        type = LinkTypeEnum.PARENT_LINKED_SPAN;
                                    }}),
                                }};
                            }};
                            name = "Lee Wiza";
                            parentSpanId = "aperiam";
                            sameProcessAsParentSpan = false;
                            spanId = "ea";
                            spanKind = SpanSpanKindEnum.INTERNAL;
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 162954;
                                    frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                        add(new StackFrame() {{
                                            columnNumber = "officia";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 807023;
                                                value = "dignissimos";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 640024;
                                                value = "asperiores";
                                            }};
                                            lineNumber = "nemo";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 65304;
                                                    value = "quaerat";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 783235;
                                                    value = "quod";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 288398;
                                                value = "ab";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 241418;
                                                value = "fuga";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "id";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 380729;
                                                value = "velit";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 633931;
                                                value = "est";
                                            }};
                                            lineNumber = "recusandae";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 517309;
                                                    value = "fugiat";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 424089;
                                                    value = "ducimus";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 554688;
                                                value = "vel";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 287051;
                                                value = "possimus";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "facilis";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 738227;
                                                value = "commodi";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 447144;
                                                value = "corporis";
                                            }};
                                            lineNumber = "reiciendis";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 828657;
                                                    value = "nemo";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 924967;
                                                    value = "aliquid";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 46007;
                                                value = "cum";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 232627;
                                                value = "in";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "exercitationem";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 937285;
                                                value = "facere";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 257233;
                                                value = "doloribus";
                                            }};
                                            lineNumber = "suscipit";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 968972;
                                                    value = "quidem";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 904949;
                                                    value = "necessitatibus";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 296556;
                                                value = "sunt";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 992012;
                                                value = "adipisci";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "non";
                            }};
                            startTime = "amet";
                            status = new Status() {{
                                code = 105906;
                                details = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("debitis", "consectetur");
                                        put("corporis", "harum");
                                        put("laboriosam", "ipsa");
                                        put("voluptates", "libero");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("accusamus", "similique");
                                    }}),
                                }};
                                message = "tempora";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 132815;
                                droppedMessageEventsCount = 379057;
                                timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("minima", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "nobis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 680116;
                                                            value = "adipisci";
                                                        }};
                                                    }});
                                                    put("minus", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "dolores";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 503934;
                                                            value = "in";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 296242;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 304468;
                                                value = "officiis";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "temporibus";
                                            id = "ullam";
                                            type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                            uncompressedSizeBytes = "cum";
                                        }};
                                        time = "blanditiis";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                    put("hic", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "nesciunt";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 633998;
                                                            value = "corrupti";
                                                        }};
                                                    }});
                                                    put("pariatur", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "totam";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 940210;
                                                            value = "exercitationem";
                                                        }};
                                                    }});
                                                    put("nobis", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "sit";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 699575;
                                                            value = "sed";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 967966;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 131852;
                                                value = "asperiores";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "facilis";
                                            id = "voluptate";
                                            type = MessageEventTypeEnum.RECEIVED;
                                            uncompressedSizeBytes = "ab";
                                        }};
                                        time = "iste";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "in";
                key = "commodi";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "unde";
            }};            

            CloudtraceProjectsTracesBatchWriteResponse res = sdk.projects.cloudtraceProjectsTracesBatchWrite(req, new CloudtraceProjectsTracesBatchWriteSecurity() {{
                option1 = new CloudtraceProjectsTracesBatchWriteSecurityOption1("architecto", "suscipit") {{
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

## cloudtraceProjectsTracesSpansCreateSpan

Creates a new span.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesSpansCreateSpanRequest;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesSpansCreateSpanResponse;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesSpansCreateSpanSecurity;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesSpansCreateSpanSecurityOption1;
import org.openapis.openapi.models.operations.CloudtraceProjectsTracesSpansCreateSpanSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Annotation;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.Attributes;
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

            CloudtraceProjectsTracesSpansCreateSpanRequest req = new CloudtraceProjectsTracesSpansCreateSpanRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                span = new Span() {{
                    attributes = new Attributes() {{
                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                            put("reiciendis", new AttributeValue() {{
                                boolValue = false;
                                intValue = "perferendis";
                                stringValue = new TruncatableString() {{
                                    truncatedByteCount = 546885;
                                    value = "maiores";
                                }};
                            }});
                        }};
                        droppedAttributesCount = 274823;
                    }};;
                    childSpanCount = 148478;
                    displayName = new TruncatableString() {{
                        truncatedByteCount = 592231;
                        value = "eius";
                    }};;
                    endTime = "necessitatibus";
                    links = new Links() {{
                        droppedLinksCount = 215529;
                        link = new org.openapis.openapi.models.shared.Link[]{{
                            add(new Link() {{
                                attributes = new Attributes() {{
                                    attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("quos", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "voluptatibus";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 271653;
                                                value = "tempora";
                                            }};
                                        }});
                                        put("voluptate", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "reiciendis";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 401713;
                                                value = "sit";
                                            }};
                                        }});
                                        put("non", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "officiis";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 505866;
                                                value = "facilis";
                                            }};
                                        }});
                                    }};
                                    droppedAttributesCount = 310381;
                                }};
                                spanId = "incidunt";
                                traceId = "ipsam";
                                type = LinkTypeEnum.PARENT_LINKED_SPAN;
                            }}),
                            add(new Link() {{
                                attributes = new Attributes() {{
                                    attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("sit", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "nobis";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 625637;
                                                value = "veniam";
                                            }};
                                        }});
                                        put("minima", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "recusandae";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 967122;
                                                value = "nulla";
                                            }};
                                        }});
                                        put("magni", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "aperiam";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 901483;
                                                value = "numquam";
                                            }};
                                        }});
                                    }};
                                    droppedAttributesCount = 329935;
                                }};
                                spanId = "in";
                                traceId = "officiis";
                                type = LinkTypeEnum.TYPE_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    name = "Jorge Langosh";
                    parentSpanId = "dolorum";
                    sameProcessAsParentSpan = false;
                    spanId = "voluptatum";
                    spanKind = SpanSpanKindEnum.CLIENT;
                    stackTrace = new StackTrace() {{
                        stackFrames = new StackFrames() {{
                            droppedFramesCount = 944708;
                            frame = new org.openapis.openapi.models.shared.StackFrame[]{{
                                add(new StackFrame() {{
                                    columnNumber = "debitis";
                                    fileName = new TruncatableString() {{
                                        truncatedByteCount = 204923;
                                        value = "dolorum";
                                    }};
                                    functionName = new TruncatableString() {{
                                        truncatedByteCount = 341698;
                                        value = "officia";
                                    }};
                                    lineNumber = "dolorum";
                                    loadModule = new Module() {{
                                        buildId = new TruncatableString() {{
                                            truncatedByteCount = 548361;
                                            value = "accusamus";
                                        }};
                                        module = new TruncatableString() {{
                                            truncatedByteCount = 272683;
                                            value = "atque";
                                        }};
                                    }};
                                    originalFunctionName = new TruncatableString() {{
                                        truncatedByteCount = 148268;
                                        value = "ut";
                                    }};
                                    sourceVersion = new TruncatableString() {{
                                        truncatedByteCount = 856303;
                                        value = "voluptatem";
                                    }};
                                }}),
                                add(new StackFrame() {{
                                    columnNumber = "culpa";
                                    fileName = new TruncatableString() {{
                                        truncatedByteCount = 710337;
                                        value = "magnam";
                                    }};
                                    functionName = new TruncatableString() {{
                                        truncatedByteCount = 7884;
                                        value = "esse";
                                    }};
                                    lineNumber = "ipsam";
                                    loadModule = new Module() {{
                                        buildId = new TruncatableString() {{
                                            truncatedByteCount = 24527;
                                            value = "voluptatum";
                                        }};
                                        module = new TruncatableString() {{
                                            truncatedByteCount = 558065;
                                            value = "repudiandae";
                                        }};
                                    }};
                                    originalFunctionName = new TruncatableString() {{
                                        truncatedByteCount = 361151;
                                        value = "et";
                                    }};
                                    sourceVersion = new TruncatableString() {{
                                        truncatedByteCount = 502710;
                                        value = "ex";
                                    }};
                                }}),
                                add(new StackFrame() {{
                                    columnNumber = "sed";
                                    fileName = new TruncatableString() {{
                                        truncatedByteCount = 24313;
                                        value = "vel";
                                    }};
                                    functionName = new TruncatableString() {{
                                        truncatedByteCount = 342611;
                                        value = "saepe";
                                    }};
                                    lineNumber = "error";
                                    loadModule = new Module() {{
                                        buildId = new TruncatableString() {{
                                            truncatedByteCount = 8511;
                                            value = "incidunt";
                                        }};
                                        module = new TruncatableString() {{
                                            truncatedByteCount = 968865;
                                            value = "dolorem";
                                        }};
                                    }};
                                    originalFunctionName = new TruncatableString() {{
                                        truncatedByteCount = 690894;
                                        value = "dicta";
                                    }};
                                    sourceVersion = new TruncatableString() {{
                                        truncatedByteCount = 99416;
                                        value = "occaecati";
                                    }};
                                }}),
                            }};
                        }};;
                        stackTraceHashId = "labore";
                    }};;
                    startTime = "quidem";
                    status = new Status() {{
                        code = 539074;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("tenetur", "laboriosam");
                                put("alias", "amet");
                                put("deserunt", "voluptate");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("reiciendis", "provident");
                                put("repellendus", "delectus");
                                put("voluptates", "perferendis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("quidem", "reprehenderit");
                                put("facere", "fuga");
                                put("praesentium", "mollitia");
                            }}),
                        }};
                        message = "veniam";
                    }};;
                    timeEvents = new TimeEvents() {{
                        droppedAnnotationsCount = 29100;
                        droppedMessageEventsCount = 790840;
                        timeEvent = new org.openapis.openapi.models.shared.TimeEvent[]{{
                            add(new TimeEvent() {{
                                annotation = new Annotation() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("atque", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "reprehenderit";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 991142;
                                                    value = "totam";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 383103;
                                    }};
                                    description = new TruncatableString() {{
                                        truncatedByteCount = 693957;
                                        value = "maxime";
                                    }};
                                }};
                                messageEvent = new MessageEvent() {{
                                    compressedSizeBytes = "et";
                                    id = "esse";
                                    type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                    uncompressedSizeBytes = "assumenda";
                                }};
                                time = "ea";
                            }}),
                            add(new TimeEvent() {{
                                annotation = new Annotation() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("error", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "officiis";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 886961;
                                                    value = "accusamus";
                                                }};
                                            }});
                                            put("natus", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "minima";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 133461;
                                                    value = "ex";
                                                }};
                                            }});
                                            put("maiores", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "corrupti";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 871786;
                                                    value = "error";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 502721;
                                    }};
                                    description = new TruncatableString() {{
                                        truncatedByteCount = 379356;
                                        value = "repudiandae";
                                    }};
                                }};
                                messageEvent = new MessageEvent() {{
                                    compressedSizeBytes = "atque";
                                    id = "atque";
                                    type = MessageEventTypeEnum.TYPE_UNSPECIFIED;
                                    uncompressedSizeBytes = "recusandae";
                                }};
                                time = "dolorum";
                            }}),
                            add(new TimeEvent() {{
                                annotation = new Annotation() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("labore", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "reiciendis";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 42976;
                                                    value = "repudiandae";
                                                }};
                                            }});
                                            put("dicta", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "accusantium";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 106429;
                                                    value = "dolores";
                                                }};
                                            }});
                                            put("enim", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "laboriosam";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 246535;
                                                    value = "a";
                                                }};
                                            }});
                                            put("molestias", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "magnam";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 906355;
                                                    value = "consequuntur";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 580107;
                                    }};
                                    description = new TruncatableString() {{
                                        truncatedByteCount = 886305;
                                        value = "perspiciatis";
                                    }};
                                }};
                                messageEvent = new MessageEvent() {{
                                    compressedSizeBytes = "in";
                                    id = "adipisci";
                                    type = MessageEventTypeEnum.RECEIVED;
                                    uncompressedSizeBytes = "occaecati";
                                }};
                                time = "consequuntur";
                            }}),
                            add(new TimeEvent() {{
                                annotation = new Annotation() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("id", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "quis";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 440264;
                                                    value = "error";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 76486;
                                    }};
                                    description = new TruncatableString() {{
                                        truncatedByteCount = 361306;
                                        value = "quidem";
                                    }};
                                }};
                                messageEvent = new MessageEvent() {{
                                    compressedSizeBytes = "eveniet";
                                    id = "non";
                                    type = MessageEventTypeEnum.RECEIVED;
                                    uncompressedSizeBytes = "doloremque";
                                }};
                                time = "iure";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "molestiae";
                key = "eveniet";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "iure";
                uploadProtocol = "necessitatibus";
            }};            

            CloudtraceProjectsTracesSpansCreateSpanResponse res = sdk.projects.cloudtraceProjectsTracesSpansCreateSpan(req, new CloudtraceProjectsTracesSpansCreateSpanSecurity() {{
                option1 = new CloudtraceProjectsTracesSpansCreateSpanSecurityOption1("ratione", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.span != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
