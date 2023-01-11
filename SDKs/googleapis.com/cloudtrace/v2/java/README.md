# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    name = "nemo";
                }};
                queryParams = new CloudtraceProjectsTracesBatchWriteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ad";
                    alt = "media";
                    callback = "aspernatur";
                    fields = "sit";
                    key = "et";
                    oauthToken = "iure";
                    prettyPrint = false;
                    quotaUser = "consequuntur";
                    uploadType = "sit";
                    uploadProtocol = "aliquid";
                }};
                request = new BatchWriteSpansRequest() {{
                    spans = new openapisdk.models.shared.Span[]() {{
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                    put("officiis", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "et";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 1804224214858177959;
                                            value = "numquam";
                                        }};
                                    }});
                                    put("in", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "consequuntur";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 7561712990623215666;
                                            value = "cumque";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 4563244328754448304;
                            }};
                            childSpanCount = 1184330157466971675;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 4562469448921502992;
                                value = "voluptatum";
                            }};
                            endTime = "temporibus";
                            links = new Links() {{
                                droppedLinksCount = 3382200328057311758;
                                link = new openapisdk.models.shared.Link[]() {{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("aut", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "quasi";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 1310881182571916834;
                                                        value = "quibusdam";
                                                    }};
                                                }});
                                                put("veniam", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "facere";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 4195458633512547050;
                                                        value = "ea";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 2860334995358769622;
                                        }};
                                        spanId = "blanditiis";
                                        traceId = "sed";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("commodi", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "praesentium";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 2259317027605689951;
                                                        value = "iusto";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 3192064374027903706;
                                        }};
                                        spanId = "vel";
                                        traceId = "et";
                                        type = "TYPE_UNSPECIFIED";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("doloremque", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "quam";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 1802448684716436870;
                                                        value = "nostrum";
                                                    }};
                                                }});
                                                put("qui", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "a";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 4305797250286209667;
                                                        value = "rerum";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 1564552833101329351;
                                        }};
                                        spanId = "consequatur";
                                        traceId = "animi";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "perspiciatis";
                            parentSpanId = "ut";
                            sameProcessAsParentSpan = true;
                            spanId = "beatae";
                            spanKind = "INTERNAL";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 5367813680244948468;
                                    frame = new openapisdk.models.shared.StackFrame[]() {{
                                        add(new StackFrame() {{
                                            columnNumber = "accusamus";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 1885821339067477954;
                                                value = "nihil";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 6095776608541182310;
                                                value = "nostrum";
                                            }};
                                            lineNumber = "porro";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 917866770690479674;
                                                    value = "maxime";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 6989985264471353561;
                                                    value = "est";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 1364405987411205607;
                                                value = "eum";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 4647957966767445130;
                                                value = "illo";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "magnam";
                            }};
                            startTime = "quas";
                            status = new Status() {{
                                code = 7106263022791918447;
                                details = new java.util.HashMap<String, Object>[]() {{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("eos", "quae");
                                        put("sit", "libero");
                                    }}),
                                }};
                                message = "et";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 837956011097427003;
                                droppedMessageEventsCount = 825591409357314671;
                                timeEvent = new openapisdk.models.shared.TimeEvent[]() {{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("inventore", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "ea";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 969787689554645240;
                                                            value = "accusamus";
                                                        }};
                                                    }});
                                                    put("illo", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "est";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 9090750573754919592;
                                                            value = "officiis";
                                                        }};
                                                    }});
                                                    put("deserunt", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "est";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 7938884131674045195;
                                                            value = "eius";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 1449332318142548079;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 4549929878172147188;
                                                value = "dolor";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "qui";
                                            id = "molestiae";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "nulla";
                                        }};
                                        time = "quis";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("ratione", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "eveniet";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 5477290329885206447;
                                                            value = "aut";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 7844920657243949328;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 6128597315039639873;
                                                value = "minus";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "laudantium";
                                            id = "rerum";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "qui";
                                        }};
                                        time = "incidunt";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("et", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "distinctio";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 1505761860247034802;
                                                            value = "vero";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 1056848294855839694;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 3272367200792124083;
                                                value = "ea";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "et";
                                            id = "soluta";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "ea";
                                        }};
                                        time = "veritatis";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                    put("voluptas", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "saepe";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 3384859399230951989;
                                            value = "voluptatibus";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 7714595531747239371;
                            }};
                            childSpanCount = 8228744753735621794;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 3305171090113509911;
                                value = "tempora";
                            }};
                            endTime = "quis";
                            links = new Links() {{
                                droppedLinksCount = 9105949327192998418;
                                link = new openapisdk.models.shared.Link[]() {{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("non", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "illo";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 4752424897656572077;
                                                        value = "et";
                                                    }};
                                                }});
                                                put("asperiores", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "aut";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 5759564449639800400;
                                                        value = "voluptatum";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 3719273367924823605;
                                        }};
                                        spanId = "qui";
                                        traceId = "optio";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("dolore", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "explicabo";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 4641115907911013179;
                                                        value = "sapiente";
                                                    }};
                                                }});
                                                put("nesciunt", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "ab";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 7965470659207079005;
                                                        value = "est";
                                                    }};
                                                }});
                                                put("eos", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "minus";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 6724544039289392578;
                                                        value = "fugiat";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 7594653454812188417;
                                        }};
                                        spanId = "nesciunt";
                                        traceId = "consequatur";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("nesciunt", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "debitis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 6660550732417573024;
                                                        value = "ut";
                                                    }};
                                                }});
                                                put("sint", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "aut";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 7147025795779270845;
                                                        value = "corporis";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 3337377836539276656;
                                        }};
                                        spanId = "eaque";
                                        traceId = "facilis";
                                        type = "PARENT_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "tempore";
                            parentSpanId = "dignissimos";
                            sameProcessAsParentSpan = false;
                            spanId = "enim";
                            spanKind = "CLIENT";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 436516170605914391;
                                    frame = new openapisdk.models.shared.StackFrame[]() {{
                                        add(new StackFrame() {{
                                            columnNumber = "dolorum";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 1393669649565974555;
                                                value = "rerum";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 3433945862520620057;
                                                value = "voluptatem";
                                            }};
                                            lineNumber = "voluptatem";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 530761758046281305;
                                                    value = "incidunt";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 8867977073733200290;
                                                    value = "ratione";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 5531864773380536659;
                                                value = "repudiandae";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 591801027521665798;
                                                value = "ipsum";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "rem";
                            }};
                            startTime = "consequuntur";
                            status = new Status() {{
                                code = 1890891824592727580;
                                details = new java.util.HashMap<String, Object>[]() {{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("vero", "eius");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("et", "et");
                                        put("voluptatibus", "quia");
                                        put("similique", "perspiciatis");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("tenetur", "voluptas");
                                    }}),
                                }};
                                message = "ullam";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 7823988538792749199;
                                droppedMessageEventsCount = 4355603884507255116;
                                timeEvent = new openapisdk.models.shared.TimeEvent[]() {{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("laborum", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "quia";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 4842958983485037817;
                                                            value = "vel";
                                                        }};
                                                    }});
                                                    put("et", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "voluptas";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 5804363980339712581;
                                                            value = "quam";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 6760941977446966150;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 8434818999232091421;
                                                value = "et";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "ut";
                                            id = "ut";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "omnis";
                                        }};
                                        time = "quam";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                    put("sed", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "magnam";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 3505318564628815658;
                                            value = "blanditiis";
                                        }};
                                    }});
                                    put("labore", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "consequuntur";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 6327170330936160295;
                                            value = "saepe";
                                        }};
                                    }});
                                    put("facere", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "quia";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 5210037618159600102;
                                            value = "quia";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 6217671665710508880;
                            }};
                            childSpanCount = 7979210581135317029;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 2091377460346316637;
                                value = "fugit";
                            }};
                            endTime = "sed";
                            links = new Links() {{
                                droppedLinksCount = 1742680714849556894;
                                link = new openapisdk.models.shared.Link[]() {{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("quibusdam", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "architecto";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 2942404699460457412;
                                                        value = "modi";
                                                    }};
                                                }});
                                                put("voluptatem", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "illum";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 8122225401490503898;
                                                        value = "est";
                                                    }};
                                                }});
                                                put("repellendus", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "laudantium";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 2099843909004544925;
                                                        value = "et";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 7368212880384163087;
                                        }};
                                        spanId = "ipsum";
                                        traceId = "perspiciatis";
                                        type = "TYPE_UNSPECIFIED";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("dolorum", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "qui";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 2798040926579184996;
                                                        value = "dolores";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 3399444059571737035;
                                        }};
                                        spanId = "et";
                                        traceId = "rem";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("doloremque", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "ad";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 3987262204940548331;
                                                        value = "voluptatem";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 6871959739203321470;
                                        }};
                                        spanId = "laborum";
                                        traceId = "et";
                                        type = "TYPE_UNSPECIFIED";
                                    }}),
                                }};
                            }};
                            name = "incidunt";
                            parentSpanId = "odio";
                            sameProcessAsParentSpan = true;
                            spanId = "quo";
                            spanKind = "CONSUMER";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 748860030438244157;
                                    frame = new openapisdk.models.shared.StackFrame[]() {{
                                        add(new StackFrame() {{
                                            columnNumber = "eligendi";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 6561005670526616017;
                                                value = "ipsam";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 6360205563553768482;
                                                value = "sunt";
                                            }};
                                            lineNumber = "quo";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 7567506244737770019;
                                                    value = "quo";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 8849183510342938086;
                                                    value = "autem";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 4446458173921767115;
                                                value = "neque";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 3698700790902195148;
                                                value = "ut";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "saepe";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 6572660036128825007;
                                                value = "quas";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 6445403560384450451;
                                                value = "perferendis";
                                            }};
                                            lineNumber = "earum";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 3439781000513342338;
                                                    value = "et";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 1596694120651979294;
                                                    value = "sunt";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 1702238368766414083;
                                                value = "occaecati";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 405165300928418374;
                                                value = "aspernatur";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "voluptates";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 8633306521588365616;
                                                value = "totam";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 1329783785750491306;
                                                value = "molestiae";
                                            }};
                                            lineNumber = "voluptates";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 6794222868705695593;
                                                    value = "aut";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 7649719169732311041;
                                                    value = "vitae";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 6072330269587538543;
                                                value = "et";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 8231290409800061725;
                                                value = "quis";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "vitae";
                            }};
                            startTime = "sunt";
                            status = new Status() {{
                                code = 6076919023379900515;
                                details = new java.util.HashMap<String, Object>[]() {{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("ratione", "ut");
                                        put("et", "omnis");
                                        put("placeat", "quis");
                                    }}),
                                }};
                                message = "iusto";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 2921202276620631895;
                                droppedMessageEventsCount = 1098076113137295273;
                                timeEvent = new openapisdk.models.shared.TimeEvent[]() {{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("id", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "aut";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 1814978640069239714;
                                                            value = "et";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 8675396754983321795;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 171893596897832587;
                                                value = "expedita";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "eveniet";
                                            id = "et";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "sed";
                                        }};
                                        time = "quos";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `cloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
