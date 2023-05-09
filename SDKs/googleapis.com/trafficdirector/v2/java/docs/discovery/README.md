# discovery

### Available Operations

* [trafficdirectorDiscoveryClientStatus](#trafficdirectordiscoveryclientstatus)

## trafficdirectorDiscoveryClientStatus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusRequest;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusResponse;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientStatusRequest;
import org.openapis.openapi.models.shared.DoubleMatcher;
import org.openapis.openapi.models.shared.DoubleRange;
import org.openapis.openapi.models.shared.GoogleRe2;
import org.openapis.openapi.models.shared.ListMatcher;
import org.openapis.openapi.models.shared.NodeMatcher;
import org.openapis.openapi.models.shared.PathSegment;
import org.openapis.openapi.models.shared.RegexMatcher;
import org.openapis.openapi.models.shared.StringMatcher;
import org.openapis.openapi.models.shared.StructMatcher;
import org.openapis.openapi.models.shared.ValueMatcher;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrafficdirectorDiscoveryClientStatusRequest req = new TrafficdirectorDiscoveryClientStatusRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                clientStatusRequest = new ClientStatusRequest() {{
                    nodeMatchers = new org.openapis.openapi.models.shared.NodeMatcher[]{{
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "excepturi";
                                ignoreCase = false;
                                prefix = "pariatur";
                                regex = "modi";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 508969L;
                                    }};
                                    regex = "rem";
                                }};
                                suffix = "voluptates";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "sint";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "veritatis";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "itaque";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "incidunt";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 3185.69;
                                            range = new DoubleRange() {{
                                                end = 93.56;
                                                start = 6674.11;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("explicabo", "deserunt");
                                            put("distinctio", "quibusdam");
                                            put("labore", "modi");
                                            put("qui", "aliquid");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "cupiditate";
                                            ignoreCase = false;
                                            prefix = "quos";
                                            regex = "perferendis";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 164940L;
                                                }};
                                                regex = "assumenda";
                                            }};
                                            suffix = "ipsam";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "alias";
                                ignoreCase = false;
                                prefix = "fugit";
                                regex = "dolorum";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 569618L;
                                    }};
                                    regex = "tempora";
                                }};
                                suffix = "facilis";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "delectus";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "eum";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 2487.53;
                                            range = new DoubleRange() {{
                                                end = 7561.07;
                                                start = 5761.57;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("provident", "necessitatibus");
                                            put("sint", "officia");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "dolor";
                                            ignoreCase = false;
                                            prefix = "debitis";
                                            regex = "a";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 680056L;
                                                }};
                                                regex = "in";
                                            }};
                                            suffix = "in";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "maiores";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "rerum";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "dicta";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "magnam";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 7670.24;
                                            range = new DoubleRange() {{
                                                end = 8137.98;
                                                start = 4118.2;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("laborum", "accusamus");
                                            put("non", "occaecati");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "enim";
                                            ignoreCase = false;
                                            prefix = "accusamus";
                                            regex = "delectus";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 692532L;
                                                }};
                                                regex = "provident";
                                            }};
                                            suffix = "nam";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "blanditiis";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "deleniti";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "sapiente";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 2305.33;
                                            range = new DoubleRange() {{
                                                end = 6439.9;
                                                start = 3948.69;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("natus", "omnis");
                                            put("molestiae", "perferendis");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "nihil";
                                            ignoreCase = false;
                                            prefix = "magnam";
                                            regex = "distinctio";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 660174L;
                                                }};
                                                regex = "labore";
                                            }};
                                            suffix = "labore";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "suscipit";
                                ignoreCase = false;
                                prefix = "natus";
                                regex = "nobis";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 428769L;
                                    }};
                                    regex = "vero";
                                }};
                                suffix = "aspernatur";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "et";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "excepturi";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 3540.47;
                                            range = new DoubleRange() {{
                                                end = 5908.73;
                                                start = 5518.16;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("accusantium", "mollitia");
                                            put("reiciendis", "mollitia");
                                            put("ad", "eum");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "dolor";
                                            ignoreCase = false;
                                            prefix = "necessitatibus";
                                            regex = "odit";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 367562L;
                                                }};
                                                regex = "quasi";
                                            }};
                                            suffix = "iure";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            TrafficdirectorDiscoveryClientStatusResponse res = sdk.discovery.trafficdirectorDiscoveryClientStatus(req, new TrafficdirectorDiscoveryClientStatusSecurity("repudiandae", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
