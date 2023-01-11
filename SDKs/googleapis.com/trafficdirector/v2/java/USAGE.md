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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new ClientStatusRequest() {{
                    nodeMatchers = new openapisdk.models.shared.NodeMatcher[]() {{
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "dicta";
                                ignoreCase = true;
                                prefix = "voluptatum";
                                regex = "et";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 7144924247938981575;
                                    }};
                                    regex = "dolorem";
                                }};
                                suffix = "et";
                            }};
                            nodeMetadatas = new openapisdk.models.shared.StructMatcher[]() {{
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "vitae";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "totam";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "dolores";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 86.099998;
                                            range = new DoubleRange() {{
                                                end = 20.200001;
                                                start = 12.200000;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("totam", "commodi");
                                            put("quis", "est");
                                            put("aut", "odit");
                                        }};
                                        presentMatch = true;
                                        stringMatch = new StringMatcher() {{
                                            exact = "voluptas";
                                            ignoreCase = true;
                                            prefix = "aut";
                                            regex = "illo";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 5558237345453186302;
                                                }};
                                                regex = "officiis";
                                            }};
                                            suffix = "autem";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "consectetur";
                                ignoreCase = false;
                                prefix = "odio";
                                regex = "qui";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 388440063886460141;
                                    }};
                                    regex = "at";
                                }};
                                suffix = "ipsum";
                            }};
                            nodeMetadatas = new openapisdk.models.shared.StructMatcher[]() {{
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "sint";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "inventore";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = true;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 56.099998;
                                            range = new DoubleRange() {{
                                                end = 30.200001;
                                                start = 97.099998;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("beatae", "veritatis");
                                            put("in", "et");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "ipsum";
                                            ignoreCase = true;
                                            prefix = "dolores";
                                            regex = "placeat";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 2118716725206170867;
                                                }};
                                                regex = "rerum";
                                            }};
                                            suffix = "mollitia";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "quam";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "reprehenderit";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = true;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 78.099998;
                                            range = new DoubleRange() {{
                                                end = 31.100000;
                                                start = 13.100000;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("ab", "neque");
                                            put("ullam", "et");
                                            put("accusantium", "esse");
                                        }};
                                        presentMatch = true;
                                        stringMatch = new StringMatcher() {{
                                            exact = "quam";
                                            ignoreCase = false;
                                            prefix = "cumque";
                                            regex = "soluta";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 759605945513541974;
                                                }};
                                                regex = "voluptates";
                                            }};
                                            suffix = "magni";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "et";
                                ignoreCase = true;
                                prefix = "qui";
                                regex = "earum";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 4391202566038595699;
                                    }};
                                    regex = "omnis";
                                }};
                                suffix = "ut";
                            }};
                            nodeMetadatas = new openapisdk.models.shared.StructMatcher[]() {{
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "commodi";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "error";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 3.200000;
                                            range = new DoubleRange() {{
                                                end = 19.100000;
                                                start = 80.199997;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("aut", "quas");
                                        }};
                                        presentMatch = true;
                                        stringMatch = new StringMatcher() {{
                                            exact = "laudantium";
                                            ignoreCase = true;
                                            prefix = "ipsa";
                                            regex = "expedita";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 8204648627352676445;
                                                }};
                                                regex = "perferendis";
                                            }};
                                            suffix = "atque";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "quisquam";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 42.099998;
                                            range = new DoubleRange() {{
                                                end = 15.200000;
                                                start = 66.099998;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("quis", "cumque");
                                            put("minima", "necessitatibus");
                                            put("est", "quis");
                                        }};
                                        presentMatch = true;
                                        stringMatch = new StringMatcher() {{
                                            exact = "labore";
                                            ignoreCase = false;
                                            prefix = "impedit";
                                            regex = "ad";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 8953538234431013647;
                                                }};
                                                regex = "vel";
                                            }};
                                            suffix = "qui";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "nihil";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "tempora";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = true;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 59.099998;
                                            range = new DoubleRange() {{
                                                end = 68.099998;
                                                start = 66.099998;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("placeat", "qui");
                                            put("nisi", "quis");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "porro";
                                            ignoreCase = true;
                                            prefix = "et";
                                            regex = "accusamus";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 7953274849279451463;
                                                }};
                                                regex = "laborum";
                                            }};
                                            suffix = "rerum";
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