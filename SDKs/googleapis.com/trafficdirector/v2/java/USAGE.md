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
                    accessToken = "quis";
                    alt = "json";
                    callback = "aut";
                    fields = "blanditiis";
                    key = "omnis";
                    oauthToken = "sequi";
                    prettyPrint = true;
                    quotaUser = "modi";
                    uploadType = "deleniti";
                    uploadProtocol = "ipsam";
                }};
                request = new ClientStatusRequest() {{
                    nodeMatchers = new openapisdk.models.shared.NodeMatcher[]() {{
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "voluptatem";
                                ignoreCase = true;
                                prefix = "in";
                                regex = "in";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 4729097419352513109;
                                    }};
                                    regex = "adipisci";
                                }};
                                suffix = "consequatur";
                            }};
                            nodeMetadatas = new openapisdk.models.shared.StructMatcher[]() {{
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "illo";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "tenetur";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 16.100000;
                                            range = new DoubleRange() {{
                                                end = 46.099998;
                                                start = 70.099998;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("maiores", "sed");
                                            put("nisi", "nam");
                                            put("et", "aperiam");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "corporis";
                                            ignoreCase = false;
                                            prefix = "iste";
                                            regex = "aut";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 8134347427207786810;
                                                }};
                                                regex = "aspernatur";
                                            }};
                                            suffix = "aut";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "at";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = true;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 62.099998;
                                            range = new DoubleRange() {{
                                                end = 6.200000;
                                                start = 95.099998;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("consequatur", "fugit");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "id";
                                            ignoreCase = true;
                                            prefix = "alias";
                                            regex = "repudiandae";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 275787588869259325;
                                                }};
                                                regex = "harum";
                                            }};
                                            suffix = "aut";
                                        }};
                                    }};
                                }}),
                            }};
                        }}),
                        add(new NodeMatcher() {{
                            nodeId = new StringMatcher() {{
                                exact = "enim";
                                ignoreCase = false;
                                prefix = "explicabo";
                                regex = "rerum";
                                safeRegex = new RegexMatcher() {{
                                    googleRe2 = new GoogleRe2() {{
                                        maxProgramSize = 3627120516043648871;
                                    }};
                                    regex = "praesentium";
                                }};
                                suffix = "temporibus";
                            }};
                            nodeMetadatas = new openapisdk.models.shared.StructMatcher[]() {{
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "quidem";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "delectus";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = true;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 98.099998;
                                            range = new DoubleRange() {{
                                                end = 41.099998;
                                                start = 59.099998;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("optio", "voluptates");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "quas";
                                            ignoreCase = false;
                                            prefix = "sint";
                                            regex = "sunt";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 2510571391511749064;
                                                }};
                                                regex = "placeat";
                                            }};
                                            suffix = "qui";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "aut";
                                        }}),
                                        add(new PathSegment() {{
                                            key = "perferendis";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = false;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 30.200001;
                                            range = new DoubleRange() {{
                                                end = 37.099998;
                                                start = 25.100000;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("omnis", "rerum");
                                        }};
                                        presentMatch = true;
                                        stringMatch = new StringMatcher() {{
                                            exact = "repudiandae";
                                            ignoreCase = false;
                                            prefix = "aut";
                                            regex = "nostrum";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 5708324130846447037;
                                                }};
                                                regex = "fuga";
                                            }};
                                            suffix = "assumenda";
                                        }};
                                    }};
                                }}),
                                add(new StructMatcher() {{
                                    path = new openapisdk.models.shared.PathSegment[]() {{
                                        add(new PathSegment() {{
                                            key = "magnam";
                                        }}),
                                    }};
                                    value = new ValueMatcher() {{
                                        boolMatch = true;
                                        doubleMatch = new DoubleMatcher() {{
                                            exact = 50.099998;
                                            range = new DoubleRange() {{
                                                end = 24.100000;
                                                start = 82.199997;
                                            }};
                                        }};
                                        listMatch = new ListMatcher() {{
                                            oneOf = new ValueMatcher() {{
                                            
                                            }};
                                        }};
                                        nullMatch = new java.util.HashMap<String, Object>() {{
                                            put("et", "eaque");
                                        }};
                                        presentMatch = false;
                                        stringMatch = new StringMatcher() {{
                                            exact = "voluptatem";
                                            ignoreCase = false;
                                            prefix = "qui";
                                            regex = "laboriosam";
                                            safeRegex = new RegexMatcher() {{
                                                googleRe2 = new GoogleRe2() {{
                                                    maxProgramSize = 2371724776320130943;
                                                }};
                                                regex = "repellendus";
                                            }};
                                            suffix = "tempore";
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