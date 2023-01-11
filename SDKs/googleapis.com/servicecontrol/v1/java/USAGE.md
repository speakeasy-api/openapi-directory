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

            ServicecontrolServicesAllocateQuotaRequest req = new ServicecontrolServicesAllocateQuotaRequest() {{
                security = new ServicecontrolServicesAllocateQuotaSecurity() {{
                    option1 = new ServicecontrolServicesAllocateQuotaSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ServicecontrolServicesAllocateQuotaPathParams() {{
                    serviceName = "sit";
                }};
                queryParams = new ServicecontrolServicesAllocateQuotaQueryParams() {{
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
                request = new AllocateQuotaRequest() {{
                    allocateOperation = new QuotaOperation() {{
                        consumerId = "dicta";
                        labels = new java.util.HashMap<String, String>() {{
                            put("voluptatum", "et");
                        }};
                        methodName = "ut";
                        operationId = "dolorem";
                        quotaMetrics = new openapisdk.models.shared.MetricValueSet[]() {{
                            add(new MetricValueSet() {{
                                metricName = "voluptate";
                                metricValues = new openapisdk.models.shared.MetricValue[]() {{
                                    add(new MetricValue() {{
                                        boolValue = true;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]() {{
                                                add("dolores"),
                                                add("illum"),
                                                add("debitis"),
                                            }};
                                            count = "vel";
                                            exemplars = new openapisdk.models.shared.Exemplar[]() {{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aspernatur", "accusantium");
                                                            put("totam", "commodi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("est", "aut");
                                                            put("odit", "non");
                                                            put("voluptas", "omnis");
                                                        }}),
                                                    }};
                                                    timestamp = "aut";
                                                    value = 76.099998;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]() {{
                                                    add(87.099998),
                                                    add(0.100000),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 77.099998;
                                                numFiniteBuckets = 7561811714888168464;
                                                scale = 74.099998;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 303089054982227392;
                                                offset = 0.200000;
                                                width = 94.099998;
                                            }};
                                            maximum = 4.100000;
                                            mean = 7.200000;
                                            minimum = 78.099998;
                                            sumOfSquaredDeviation = 23.200001;
                                        }};
                                        doubleValue = 80.199997;
                                        endTime = "omnis";
                                        int64Value = "ipsum";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("dolores", "placeat");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "vel";
                                            nanos = 2587000937929698613;
                                            units = "mollitia";
                                        }};
                                        startTime = "voluptas";
                                        stringValue = "quam";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]() {{
                                                add("qui"),
                                            }};
                                            count = "unde";
                                            exemplars = new openapisdk.models.shared.Exemplar[]() {{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ut", "itaque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("neque", "ullam");
                                                        }}),
                                                    }};
                                                    timestamp = "et";
                                                    value = 40.099998;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("velit", "cumque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sunt", "voluptates");
                                                        }}),
                                                    }};
                                                    timestamp = "magni";
                                                    value = 9.200000;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]() {{
                                                    add(59.200001),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 6.100000;
                                                numFiniteBuckets = 7442289190031176026;
                                                scale = 32.099998;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 1925401661646756611;
                                                offset = 19.200001;
                                                width = 59.200001;
                                            }};
                                            maximum = 64.099998;
                                            mean = 53.200001;
                                            minimum = 28.100000;
                                            sumOfSquaredDeviation = 48.200001;
                                        }};
                                        doubleValue = 73.199997;
                                        endTime = "expedita";
                                        int64Value = "doloremque";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("atque", "ratione");
                                            put("quisquam", "explicabo");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "ea";
                                            nanos = 2629911606854649819;
                                            units = "eum";
                                        }};
                                        startTime = "perferendis";
                                        stringValue = "et";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = true;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]() {{
                                                add("quis"),
                                                add("cumque"),
                                                add("minima"),
                                            }};
                                            count = "necessitatibus";
                                            exemplars = new openapisdk.models.shared.Exemplar[]() {{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("labore", "et");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ad", "expedita");
                                                            put("vel", "qui");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nihil", "tempora");
                                                            put("deserunt", "eaque");
                                                        }}),
                                                    }};
                                                    timestamp = "sunt";
                                                    value = 68.099998;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("vel", "placeat");
                                                            put("qui", "nisi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("adipisci", "porro");
                                                            put("rerum", "et");
                                                            put("accusamus", "numquam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("rerum", "ut");
                                                            put("laborum", "fugit");
                                                            put("quis", "minus");
                                                        }}),
                                                    }};
                                                    timestamp = "soluta";
                                                    value = 68.199997;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]() {{
                                                    add(52.099998),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 29.200001;
                                                numFiniteBuckets = 8997481548049309375;
                                                scale = 86.099998;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 8003520668589102978;
                                                offset = 95.099998;
                                                width = 83.099998;
                                            }};
                                            maximum = 30.100000;
                                            mean = 42.099998;
                                            minimum = 99.099998;
                                            sumOfSquaredDeviation = 22.100000;
                                        }};
                                        doubleValue = 46.200001;
                                        endTime = "sit";
                                        int64Value = "possimus";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("neque", "consequuntur");
                                            put("quia", "et");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "est";
                                            nanos = 6028661030721431741;
                                            units = "ex";
                                        }};
                                        startTime = "voluptatem";
                                        stringValue = "quia";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "temporibus";
                                metricValues = new openapisdk.models.shared.MetricValue[]() {{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]() {{
                                                add("ut"),
                                                add("necessitatibus"),
                                            }};
                                            count = "in";
                                            exemplars = new openapisdk.models.shared.Exemplar[]() {{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("doloribus", "saepe");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("earum", "et");
                                                            put("ut", "asperiores");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("est", "ipsum");
                                                        }}),
                                                    }};
                                                    timestamp = "quam";
                                                    value = 63.099998;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("impedit", "non");
                                                            put("magnam", "ut");
                                                        }}),
                                                    }};
                                                    timestamp = "possimus";
                                                    value = 16.200001;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ducimus", "enim");
                                                            put("blanditiis", "distinctio");
                                                            put("delectus", "rerum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("repellat", "velit");
                                                            put("officia", "modi");
                                                        }}),
                                                    }};
                                                    timestamp = "sunt";
                                                    value = 30.100000;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]() {{
                                                    add(32.099998),
                                                    add(30.200001),
                                                    add(3.100000),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 73.199997;
                                                numFiniteBuckets = 5492620638782281201;
                                                scale = 19.100000;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 7110471015351200494;
                                                offset = 48.200001;
                                                width = 7.100000;
                                            }};
                                            maximum = 43.200001;
                                            mean = 98.099998;
                                            minimum = 74.099998;
                                            sumOfSquaredDeviation = 55.099998;
                                        }};
                                        doubleValue = 40.200001;
                                        endTime = "illum";
                                        int64Value = "accusantium";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("amet", "nisi");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "quidem";
                                            nanos = 2803265238606586800;
                                            units = "quo";
                                        }};
                                        startTime = "vero";
                                        stringValue = "alias";
                                    }}),
                                }};
                            }}),
                        }};
                        quotaMode = "NORMAL";
                    }};
                    serviceConfigId = "deserunt";
                }};
            }};

            ServicecontrolServicesAllocateQuotaResponse res = sdk.services.servicecontrolServicesAllocateQuota(req);

            if (res.allocateQuotaResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->