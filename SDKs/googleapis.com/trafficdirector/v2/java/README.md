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

import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusSecurity;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusRequest;
import org.openapis.openapi.models.operations.TrafficdirectorDiscoveryClientStatusResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrafficdirectorDiscoveryClientStatusRequest req = new TrafficdirectorDiscoveryClientStatusRequest() {{
                dollarXgafv = "2";
                clientStatusRequest = new ClientStatusRequest() {{
                    nodeMatchers = new org.openapis.openapi.models.shared.NodeMatcher[]{{
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "distinctio";
                                ignoreCase = false;
                                prefix = "quibusdam";
                                regex = "unde";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 857946;
                                    }};
                                    regex = "corrupti";
                                }};
                                suffix = "illum";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "deserunt";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "suscipit";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "iure";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 2975.34;
                                            range = new DoubleRange() {{
                                                end = 8917.73;
                                                start = 567.13;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("tempora", "suscipit");
                                            put("molestiae", "minus");
                                            put("placeat", "voluptatum");
                                            put("iusto", "excepturi");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "nisi";
                                            ignoreCase = false;
                                            prefix = "recusandae";
                                            regex = "temporibus";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 71036;
                                                }};
                                                regex = "quis";
                                            }};
                                            suffix = "veritatis";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "perferendis";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "ipsam";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "repellendus";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 9571.56;
                                            range = new DoubleRange() {{
                                                end = 7781.57;
                                                start = 1403.5;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("at", "maiores");
                                            put("molestiae", "quod");
                                            put("quod", "esse");
                                            put("totam", "porro");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "dolorum";
                                            ignoreCase = false;
                                            prefix = "dicta";
                                            regex = "nam";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 639921;
                                                }};
                                                regex = "occaecati";
                                            }};
                                            suffix = "fugit";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "deleniti";
                                ignoreCase = false;
                                prefix = "hic";
                                regex = "optio";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 521848;
                                    }};
                                    regex = "beatae";
                                }};
                                suffix = "commodi";
                            }};
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "qui";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "impedit";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 7369.18;
                                            range = new DoubleRange() {{
                                                end = 4561.5;
                                                start = 2165.5;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("aspernatur", "perferendis");
                                            put("ad", "natus");
                                            put("sed", "iste");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "dolor";
                                            ignoreCase = false;
                                            prefix = "natus";
                                            regex = "laboriosam";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 943749;
                                                }};
                                                regex = "saepe";
                                            }};
                                            suffix = "fuga";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "corporis";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "iste";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 4370.32;
                                            range = new DoubleRange() {{
                                                end = 9023.49;
                                                start = 6976.31;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("ipsa", "reiciendis");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "est";
                                            ignoreCase = false;
                                            prefix = "mollitia";
                                            regex = "laborum";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 170909;
                                                }};
                                                regex = "dolorem";
                                            }};
                                            suffix = "corporis";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
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
                            nodeMetadatas = new org.openapis.openapi.models.shared.StructMatcher[]{{
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "iure";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 6342.74;
                                            range = new DoubleRange() {{
                                                end = 9883.74;
                                                start = 9589.5;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("mollitia", "dolorem");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "culpa";
                                            ignoreCase = false;
                                            prefix = "consequuntur";
                                            regex = "repellat";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 653108;
                                                }};
                                                regex = "occaecati";
                                            }};
                                            suffix = "numquam";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "quam";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "molestiae";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 2444.25;
                                            range = new DoubleRange() {{
                                                end = 6235.1;
                                                start = 1589.69;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("vitae", "laborum");
                                            put("animi", "enim");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "odit";
                                            ignoreCase = false;
                                            prefix = "quo";
                                            regex = "sequi";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 949572;
                                                }};
                                                regex = "ipsam";
                                            }};
                                            suffix = "id";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new org.openapis.openapi.models.shared.PathSegment[]{{
                                        add(new PathSegment() {{
                                            key = "aut";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "quasi";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "error";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "temporibus";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 6736.6;
                                            range = new DoubleRange() {{
                                                end = 960.98;
                                                start = 9719.45;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{}};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("vero", "nihil");
                                            put("praesentium", "voluptatibus");
                                            put("ipsa", "omnis");
                                            put("voluptate", "cum");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "perferendis";
                                            ignoreCase = false;
                                            prefix = "doloremque";
                                            regex = "reprehenderit";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 282807;
                                                }};
                                                regex = "maiores";
                                            }};
                                            suffix = "dicta";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
                accessToken = "corporis";
                alt = "json";
                callback = "iusto";
                fields = "dicta";
                key = "harum";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }}            

            TrafficdirectorDiscoveryClientStatusResponse res = sdk.discovery.trafficdirectorDiscoveryClientStatus(req, new TrafficdirectorDiscoveryClientStatusSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientStatusResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### discovery

* `trafficdirectorDiscoveryClientStatus`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
