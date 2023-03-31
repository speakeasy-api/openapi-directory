<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusSecurity;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusQueryParams;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusRequest;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusResponse;
import org.openapis.openapi.models.shared.ClientStatusRequest;
import org.openapis.openapi.models.shared.NodeMatcher;
import org.openapis.openapi.models.shared.StructMatcher;
import org.openapis.openapi.models.shared.ValueMatcher;
import org.openapis.openapi.models.shared.StringMatcher;
import org.openapis.openapi.models.shared.RegexMatcher;
import org.openapis.openapi.models.shared.GoogleRe2;
import org.openapis.openapi.models.shared.ListMatcher;
import org.openapis.openapi.models.shared.DoubleMatcher;
import org.openapis.openapi.models.shared.DoubleRange;
import org.openapis.openapi.models.shared.PathSegment;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrafficdirectorDiscoveryClientStatusRequest req = new TrafficdirectorDiscoveryClientStatusRequest() {{
                security = new TrafficdirectorDiscoveryClientStatusSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new TrafficdirectorDiscoveryClientStatusQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new ClientStatusRequest() {{
                    nodeMatchers = new org.openapis.openapi.models.shared.NodeMatcher[]{{
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "suscipit";
                                ignoreCase = false;
                                prefix = "iure";
                                regex = "magnam";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 891773;
                                    }};
                                    regex = "ipsa";
                                }};
                                suffix = "delectus";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "molestiae";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "minus";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 8121.69;
                                            range = new DoubleRange() {{
                                                end = 5288.95;
                                                start = 4799.77;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("nisi", "recusandae");
                                            put("temporibus", "ab");
                                            put("quis", "veritatis");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "deserunt";
                                            ignoreCase = false;
                                            prefix = "perferendis";
                                            regex = "ipsam";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 832620;
                                                }};
                                                regex = "sapiente";
                                            }};
                                            suffix = "quo";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "at";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 8700.88;
                                            range = new DoubleRange() {{
                                                end = 9786.19;
                                                start = 4736.08;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("quod", "esse");
                                            put("totam", "porro");
                                            put("dolorum", "dicta");
                                            put("nam", "officia");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "occaecati";
                                            ignoreCase = false;
                                            prefix = "fugit";
                                            regex = "deleniti";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 944669;
                                                }};
                                                regex = "optio";
                                            }};
                                            suffix = "totam";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "beatae";
                                ignoreCase = false;
                                prefix = "commodi";
                                regex = "molestiae";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 264555;
                                    }};
                                    regex = "qui";
                                }};
                                suffix = "impedit";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "ipsum";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "excepturi";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 1352.18;
                                            range = new DoubleRange() {{
                                                end = 187.89;
                                                start = 3241.41;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("sed", "iste");
                                            put("dolor", "natus");
                                            put("laboriosam", "hic");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "saepe";
                                            ignoreCase = false;
                                            prefix = "fuga";
                                            regex = "in";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 359508;
                                                }};
                                                regex = "iste";
                                            }};
                                            suffix = "iure";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "quidem";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "architecto";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "ipsa";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "reiciendis";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 6667.67;
                                            range = new DoubleRange() {{
                                                end = 6531.4;
                                                start = 6706.38;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("dolorem", "corporis");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "explicabo";
                                            ignoreCase = false;
                                            prefix = "nobis";
                                            regex = "enim";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 607831;
                                                }};
                                                regex = "nemo";
                                            }};
                                            suffix = "minima";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "accusantium";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "iure";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "culpa";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 9883.74;
                                            range = new DoubleRange() {{
                                                end = 9589.5;
                                                start = 1020.44;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("dolorem", "culpa");
                                            put("consequuntur", "repellat");
                                            put("mollitia", "occaecati");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "numquam";
                                            ignoreCase = false;
                                            prefix = "commodi";
                                            regex = "quam";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 474697;
                                                }};
                                                regex = "velit";
                                            }};
                                            suffix = "error";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "quia";
                                ignoreCase = false;
                                prefix = "quis";
                                regex = "vitae";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 674752;
                                    }};
                                    regex = "animi";
                                }};
                                suffix = "enim";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "sequi";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "tenetur";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "ipsam";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "id";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 8209.94;
                                            range = new DoubleRange() {{
                                                end = 135.71;
                                                start = 971.01;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("temporibus", "laborum");
                                            put("quasi", "reiciendis");
                                            put("voluptatibus", "vero");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "nihil";
                                            ignoreCase = false;
                                            prefix = "praesentium";
                                            regex = "voluptatibus";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 55714;
                                                }};
                                                regex = "omnis";
                                            }};
                                            suffix = "voluptate";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};            

            TrafficdirectorDiscoveryClientStatusResponse res = sdk.discovery.trafficdirectorDiscoveryClientStatus(req);

            if (res.clientStatusResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->