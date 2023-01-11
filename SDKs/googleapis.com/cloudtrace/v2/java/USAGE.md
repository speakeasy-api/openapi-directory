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
                    name = "sit";
                }};
                queryParams = new CloudtraceProjectsTracesBatchWriteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new BatchWriteSpansRequest() {{
                    spans = new openapisdk.models.shared.Span[]() {{
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                    put("voluptatum", new AttributeValue() {{
                                        boolValue = false;
                                        intValue = "ut";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 161231572858529631;
                                            value = "et";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 7373105480197164748;
                            }};
                            childSpanCount = 3287288577352441706;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 3930927879439176946;
                                value = "totam";
                            }};
                            endTime = "dolores";
                            links = new Links() {{
                                droppedLinksCount = 1929546706668609706;
                                link = new openapisdk.models.shared.Link[]() {{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("odio", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "id";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 959367522974354090;
                                                        value = "accusantium";
                                                    }};
                                                }});
                                                put("totam", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "quis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 3398579248012586914;
                                                        value = "aut";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 3317123977833389635;
                                        }};
                                        spanId = "non";
                                        traceId = "voluptas";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "aut";
                            parentSpanId = "illo";
                            sameProcessAsParentSpan = false;
                            spanId = "officiis";
                            spanKind = "INTERNAL";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 8514850266767180993;
                                    frame = new openapisdk.models.shared.StackFrame[]() {{
                                        add(new StackFrame() {{
                                            columnNumber = "odio";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 7699391924090763411;
                                                value = "recusandae";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 7561811714888168464;
                                                value = "ipsum";
                                            }};
                                            lineNumber = "eveniet";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 303089054982227392;
                                                    value = "sint";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 5392504858645185670;
                                                    value = "ut";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 406703151708498928;
                                                value = "aut";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 5837486892148644279;
                                                value = "tempore";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "maiores";
                            }};
                            startTime = "incidunt";
                            status = new Status() {{
                                code = 7242748068272024738;
                                details = new java.util.HashMap<String, Object>[]() {{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("in", "et");
                                        put("omnis", "ipsum");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("dolores", "placeat");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("rerum", "mollitia");
                                        put("voluptas", "quam");
                                    }}),
                                }};
                                message = "reprehenderit";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 6056649900269286653;
                                droppedMessageEventsCount = 8056746523676181822;
                                timeEvent = new openapisdk.models.shared.TimeEvent[]() {{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("autem", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "ut";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 8559453321117178323;
                                                            value = "ab";
                                                        }};
                                                    }});
                                                    put("neque", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "et";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 4304520335772049496;
                                                            value = "esse";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 5902760509050140210;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 9021104375654741729;
                                                value = "velit";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "cumque";
                                            id = "soluta";
                                            type = "SENT";
                                            uncompressedSizeBytes = "voluptates";
                                        }};
                                        time = "magni";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("optio", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "earum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 4391202566038595699;
                                                            value = "omnis";
                                                        }};
                                                    }});
                                                    put("ut", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "dolor";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 7945398411639602224;
                                                            value = "error";
                                                        }};
                                                    }});
                                                    put("reprehenderit", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "nostrum";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 950400323440343118;
                                                            value = "laboriosam";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 1937101031588528881;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 6604365855503062775;
                                                value = "soluta";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "aut";
                                            id = "quas";
                                            type = "RECEIVED";
                                            uncompressedSizeBytes = "laudantium";
                                        }};
                                        time = "autem";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("expedita", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "perferendis";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 8497925768463229012;
                                                            value = "ratione";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 3967212276624460248;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 1681876124477381252;
                                                value = "ea";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "maxime";
                                            id = "eum";
                                            type = "SENT";
                                            uncompressedSizeBytes = "et";
                                        }};
                                        time = "rerum";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                    put("quis", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "minima";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 2333048574390956331;
                                            value = "est";
                                        }};
                                    }});
                                    put("quis", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "labore";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 544981646038740619;
                                            value = "impedit";
                                        }};
                                    }});
                                    put("ad", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "vel";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 5310832663795041070;
                                            value = "modi";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 8279128640960530079;
                            }};
                            childSpanCount = 1011676084465510524;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 8764227983217623240;
                                value = "eaque";
                            }};
                            endTime = "sunt";
                            links = new Links() {{
                                droppedLinksCount = 157519078836327761;
                                link = new openapisdk.models.shared.Link[]() {{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("vel", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "placeat";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 3755969145755718156;
                                                        value = "nisi";
                                                    }};
                                                }});
                                                put("quis", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "porro";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 4230816687517220040;
                                                        value = "et";
                                                    }};
                                                }});
                                                put("accusamus", new AttributeValue() {{
                                                    boolValue = true;
                                                    intValue = "laborum";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 8958290475970215309;
                                                        value = "ut";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 4400124260933614083;
                                        }};
                                        spanId = "fugit";
                                        traceId = "quis";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "soluta";
                            parentSpanId = "aperiam";
                            sameProcessAsParentSpan = true;
                            spanId = "excepturi";
                            spanKind = "PRODUCER";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 1377327594979300801;
                                    frame = new openapisdk.models.shared.StackFrame[]() {{
                                        add(new StackFrame() {{
                                            columnNumber = "ipsa";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 8997481548049309375;
                                                value = "animi";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 2606774689767964810;
                                                value = "aliquam";
                                            }};
                                            lineNumber = "fuga";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 7899896093082851758;
                                                    value = "sed";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 6464511094049078446;
                                                    value = "consequuntur";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 3308475210590835610;
                                                value = "cupiditate";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 432317278959866118;
                                                value = "molestiae";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "pariatur";
                            }};
                            startTime = "quasi";
                            status = new Status() {{
                                code = 5534365872829545664;
                                details = new java.util.HashMap<String, Object>[]() {{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("sit", "possimus");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("neque", "consequuntur");
                                        put("quia", "et");
                                    }}),
                                }};
                                message = "est";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 6028661030721431741;
                                droppedMessageEventsCount = 7949662743330369695;
                                timeEvent = new openapisdk.models.shared.TimeEvent[]() {{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("temporibus", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "quae";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 5042961816383320698;
                                                            value = "ut";
                                                        }};
                                                    }});
                                                    put("necessitatibus", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "possimus";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 1123791776565256914;
                                                            value = "dolorum";
                                                        }};
                                                    }});
                                                    put("doloribus", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "sunt";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 2676265675595725604;
                                                            value = "et";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 6499763367080957833;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 1514803956160473307;
                                                value = "et";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "est";
                                            id = "ipsum";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "voluptas";
                                        }};
                                        time = "nihil";
                                    }}),
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("suscipit", new AttributeValue() {{
                                                        boolValue = true;
                                                        intValue = "non";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 2991421044203248760;
                                                            value = "ut";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 3357930257403748968;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 371208508841907247;
                                                value = "qui";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "quia";
                                            id = "ipsam";
                                            type = "SENT";
                                            uncompressedSizeBytes = "enim";
                                        }};
                                        time = "blanditiis";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new Span() {{
                            attributes = new Attributes() {{
                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                    put("delectus", new AttributeValue() {{
                                        boolValue = true;
                                        intValue = "dolore";
                                        stringValue = new TruncatableString() {{
                                            truncatedByteCount = 7274936573655343394;
                                            value = "velit";
                                        }};
                                    }});
                                }};
                                droppedAttributesCount = 1469755398674317289;
                            }};
                            childSpanCount = 8230160685758639177;
                            displayName = new TruncatableString() {{
                                truncatedByteCount = 6225508190691823821;
                                value = "voluptas";
                            }};
                            endTime = "amet";
                            links = new Links() {{
                                droppedLinksCount = 8268186752735240934;
                                link = new openapisdk.models.shared.Link[]() {{
                                    add(new Link() {{
                                        attributes = new Attributes() {{
                                            attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                put("excepturi", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "corporis";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 4588799179103092032;
                                                        value = "rem";
                                                    }};
                                                }});
                                                put("doloremque", new AttributeValue() {{
                                                    boolValue = false;
                                                    intValue = "nisi";
                                                    stringValue = new TruncatableString() {{
                                                        truncatedByteCount = 7977311963062833636;
                                                        value = "qui";
                                                    }};
                                                }});
                                            }};
                                            droppedAttributesCount = 3553406609570696275;
                                        }};
                                        spanId = "et";
                                        traceId = "rerum";
                                        type = "CHILD_LINKED_SPAN";
                                    }}),
                                }};
                            }};
                            name = "rem";
                            parentSpanId = "eos";
                            sameProcessAsParentSpan = false;
                            spanId = "reiciendis";
                            spanKind = "SPAN_KIND_UNSPECIFIED";
                            stackTrace = new StackTrace() {{
                                stackFrames = new StackFrames() {{
                                    droppedFramesCount = 5683174242247563523;
                                    frame = new openapisdk.models.shared.StackFrame[]() {{
                                        add(new StackFrame() {{
                                            columnNumber = "nihil";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 4897843869982862208;
                                                value = "consequatur";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 3196051979344515342;
                                                value = "accusantium";
                                            }};
                                            lineNumber = "atque";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 1444501184389758573;
                                                    value = "nisi";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 1782404925332466934;
                                                    value = "est";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 9117043256905423229;
                                                value = "vero";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 8663396966358647741;
                                                value = "totam";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "deserunt";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 1958777829936408748;
                                                value = "repellat";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 7470170325123997143;
                                                value = "omnis";
                                            }};
                                            lineNumber = "totam";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 6110482739283003758;
                                                    value = "et";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 7167106058699817943;
                                                    value = "necessitatibus";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 4525004039791920848;
                                                value = "culpa";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 8364267861508686372;
                                                value = "voluptas";
                                            }};
                                        }}),
                                        add(new StackFrame() {{
                                            columnNumber = "ut";
                                            fileName = new TruncatableString() {{
                                                truncatedByteCount = 2118949171484888039;
                                                value = "architecto";
                                            }};
                                            functionName = new TruncatableString() {{
                                                truncatedByteCount = 9207329833049742865;
                                                value = "rerum";
                                            }};
                                            lineNumber = "quo";
                                            loadModule = new Module() {{
                                                buildId = new TruncatableString() {{
                                                    truncatedByteCount = 7465719782626729327;
                                                    value = "saepe";
                                                }};
                                                module = new TruncatableString() {{
                                                    truncatedByteCount = 1215184329252422444;
                                                    value = "in";
                                                }};
                                            }};
                                            originalFunctionName = new TruncatableString() {{
                                                truncatedByteCount = 8590975497400104807;
                                                value = "asperiores";
                                            }};
                                            sourceVersion = new TruncatableString() {{
                                                truncatedByteCount = 5721519542403305305;
                                                value = "ea";
                                            }};
                                        }}),
                                    }};
                                }};
                                stackTraceHashId = "soluta";
                            }};
                            startTime = "tempora";
                            status = new Status() {{
                                code = 5850174490929081658;
                                details = new java.util.HashMap<String, Object>[]() {{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("in", "et");
                                        put("odit", "est");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("ipsum", "aut");
                                        put("perspiciatis", "et");
                                        put("vero", "voluptatem");
                                    }}),
                                }};
                                message = "ex";
                            }};
                            timeEvents = new TimeEvents() {{
                                droppedAnnotationsCount = 1253678802066634880;
                                droppedMessageEventsCount = 5185464786920936105;
                                timeEvent = new openapisdk.models.shared.TimeEvent[]() {{
                                    add(new TimeEvent() {{
                                        annotation = new Annotation() {{
                                            attributes = new Attributes() {{
                                                attributeMap = new java.util.HashMap<String, openapisdk.models.shared.AttributeValue>() {{
                                                    put("ea", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "non";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 930977177771307407;
                                                            value = "beatae";
                                                        }};
                                                    }});
                                                    put("quae", new AttributeValue() {{
                                                        boolValue = false;
                                                        intValue = "magni";
                                                        stringValue = new TruncatableString() {{
                                                            truncatedByteCount = 6901636176146439792;
                                                            value = "sit";
                                                        }};
                                                    }});
                                                }};
                                                droppedAttributesCount = 3696118768821457648;
                                            }};
                                            description = new TruncatableString() {{
                                                truncatedByteCount = 3450989031171849556;
                                                value = "iusto";
                                            }};
                                        }};
                                        messageEvent = new MessageEvent() {{
                                            compressedSizeBytes = "quia";
                                            id = "repudiandae";
                                            type = "TYPE_UNSPECIFIED";
                                            uncompressedSizeBytes = "autem";
                                        }};
                                        time = "odit";
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