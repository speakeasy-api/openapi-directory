<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurityOption2;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AllocateQuotaRequest;
import org.openapis.openapi.models.shared.QuotaOperationQuotaModeEnum;
import org.openapis.openapi.models.shared.QuotaOperation;
import org.openapis.openapi.models.shared.MetricValueSet;
import org.openapis.openapi.models.shared.MetricValue;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.LinearBuckets;
import org.openapis.openapi.models.shared.ExponentialBuckets;
import org.openapis.openapi.models.shared.ExplicitBuckets;
import org.openapis.openapi.models.shared.Exemplar;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicecontrolServicesAllocateQuotaRequest req = new ServicecontrolServicesAllocateQuotaRequest() {{
                dollarXgafv = "2";
                allocateQuotaRequest = new AllocateQuotaRequest() {{
                    allocateOperation = new QuotaOperation() {{
                        consumerId = "provident";
                        labels = new java.util.HashMap<String, String>() {{
                            put("quibusdam", "unde");
                            put("nulla", "corrupti");
                            put("illum", "vel");
                        }};
                        methodName = "error";
                        operationId = "deserunt";
                        quotaMetrics = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                            add(new MetricValueSet() {{
                                metricName = "iure";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("ipsa"),
                                                add("delectus"),
                                                add("tempora"),
                                                add("suscipit"),
                                            }};
                                            count = "molestiae";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("iusto", "excepturi");
                                                            put("nisi", "recusandae");
                                                            put("temporibus", "ab");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("veritatis", "deserunt");
                                                            put("perferendis", "ipsam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sapiente", "quo");
                                                            put("odit", "at");
                                                            put("at", "maiores");
                                                            put("molestiae", "quod");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("esse", "totam");
                                                            put("porro", "dolorum");
                                                            put("dicta", "nam");
                                                            put("officia", "occaecati");
                                                        }}),
                                                    }};
                                                    timestamp = "fugit";
                                                    value = 5373.73;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("totam", "beatae");
                                                            put("commodi", "molestiae");
                                                            put("modi", "qui");
                                                            put("impedit", "cum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsum", "excepturi");
                                                            put("aspernatur", "perferendis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("natus", "sed");
                                                            put("iste", "dolor");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("laboriosam", "hic");
                                                            put("saepe", "fuga");
                                                            put("in", "corporis");
                                                        }}),
                                                    }};
                                                    timestamp = "iste";
                                                    value = 4370.32;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("architecto", "ipsa");
                                                            put("reiciendis", "est");
                                                            put("mollitia", "laborum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolorem", "corporis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nobis", "enim");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nemo", "minima");
                                                            put("excepturi", "accusantium");
                                                            put("iure", "culpa");
                                                        }}),
                                                    }};
                                                    timestamp = "doloribus";
                                                    value = 9589.5;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolorem", "culpa");
                                                            put("consequuntur", "repellat");
                                                            put("mollitia", "occaecati");
                                                        }}),
                                                    }};
                                                    timestamp = "numquam";
                                                    value = 4143.69;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(4746.97),
                                                    add(2444.25),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 6235.1;
                                                numFiniteBuckets = 158969;
                                                scale = 3380.07;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 110375;
                                                offset = 6747.52;
                                                width = 6563.3;
                                            }};
                                            maximum = 3172.02;
                                            mean = 1381.83;
                                            minimum = 7783.46;
                                            sumOfSquaredDeviation = 1965.82;
                                        }};
                                        doubleValue = 9495.72;
                                        endTime = "ipsam";
                                        int64Value = "id";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("aut", "quasi");
                                            put("error", "temporibus");
                                            put("laborum", "quasi");
                                            put("reiciendis", "voluptatibus");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "vero";
                                            nanos = 468651;
                                            units = "praesentium";
                                        }};
                                        startTime = "voluptatibus";
                                        stringValue = "ipsa";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("voluptate"),
                                                add("cum"),
                                                add("perferendis"),
                                            }};
                                            count = "doloremque";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dicta", "corporis");
                                                            put("dolore", "iusto");
                                                            put("dicta", "harum");
                                                            put("enim", "accusamus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("repudiandae", "quae");
                                                            put("ipsum", "quidem");
                                                        }}),
                                                    }};
                                                    timestamp = "molestias";
                                                    value = 5666.02;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("praesentium", "rem");
                                                            put("voluptates", "quasi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sint", "veritatis");
                                                            put("itaque", "incidunt");
                                                            put("enim", "consequatur");
                                                            put("est", "quibusdam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("deserunt", "distinctio");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("labore", "modi");
                                                            put("qui", "aliquid");
                                                            put("cupiditate", "quos");
                                                            put("perferendis", "magni");
                                                        }}),
                                                    }};
                                                    timestamp = "assumenda";
                                                    value = 3698.08;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(1464.41),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 6778.17;
                                                numFiniteBuckets = 569618;
                                                scale = 2700.08;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 703737;
                                                offset = 7351.94;
                                                width = 2884.76;
                                            }};
                                            maximum = 9621.89;
                                            mean = 4332.88;
                                            minimum = 2487.53;
                                            sumOfSquaredDeviation = 7561.07;
                                        }};
                                        doubleValue = 5761.57;
                                        endTime = "aliquid";
                                        int64Value = "provident";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("sint", "officia");
                                            put("dolor", "debitis");
                                            put("a", "dolorum");
                                            put("in", "in");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "illum";
                                            nanos = 978571;
                                            units = "rerum";
                                        }};
                                        startTime = "dicta";
                                        stringValue = "magnam";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "cumque";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("aliquid"),
                                                add("laborum"),
                                            }};
                                            count = "accusamus";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("accusamus", "delectus");
                                                            put("quidem", "provident");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("id", "blanditiis");
                                                            put("deleniti", "sapiente");
                                                            put("amet", "deserunt");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("vel", "natus");
                                                            put("omnis", "molestiae");
                                                        }}),
                                                    }};
                                                    timestamp = "perferendis";
                                                    value = 4701.32;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(7160.75),
                                                    add(6601.74),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 2879.91;
                                                numFiniteBuckets = 290077;
                                                scale = 3834.62;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 618016;
                                                offset = 7491.7;
                                                width = 4287.69;
                                            }};
                                            maximum = 8784.53;
                                            mean = 1354.74;
                                            minimum = 1028.63;
                                            sumOfSquaredDeviation = 2982.82;
                                        }};
                                        doubleValue = 923.73;
                                        endTime = "excepturi";
                                        int64Value = "ullam";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("quos", "sint");
                                            put("accusantium", "mollitia");
                                            put("reiciendis", "mollitia");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "ad";
                                            nanos = 431418;
                                            units = "dolor";
                                        }};
                                        startTime = "necessitatibus";
                                        stringValue = "odit";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("quasi"),
                                                add("iure"),
                                            }};
                                            count = "doloribus";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("deleniti", "facilis");
                                                            put("in", "architecto");
                                                            put("architecto", "repudiandae");
                                                            put("ullam", "expedita");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("repellat", "quibusdam");
                                                            put("sed", "saepe");
                                                        }}),
                                                    }};
                                                    timestamp = "pariatur";
                                                    value = 375.59;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("natus", "magni");
                                                            put("sunt", "quo");
                                                            put("illum", "pariatur");
                                                        }}),
                                                    }};
                                                    timestamp = "maxime";
                                                    value = 4113.97;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ea", "accusantium");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("maiores", "quidem");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptate", "autem");
                                                            put("nam", "eaque");
                                                        }}),
                                                    }};
                                                    timestamp = "pariatur";
                                                    value = 3654.96;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("fugiat", "amet");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("cumque", "corporis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("libero", "nobis");
                                                            put("dolores", "quis");
                                                            put("totam", "dignissimos");
                                                            put("eaque", "quis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eos", "perferendis");
                                                        }}),
                                                    }};
                                                    timestamp = "dolores";
                                                    value = 7936.98;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(2239.24),
                                                    add(8745.73),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 3453.52;
                                                numFiniteBuckets = 944120;
                                                scale = 9280.82;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 608253;
                                                offset = 7044.15;
                                                width = 5966.56;
                                            }};
                                            maximum = 318.38;
                                            mean = 7836.45;
                                            minimum = 1646.94;
                                            sumOfSquaredDeviation = 5000.26;
                                        }};
                                        doubleValue = 6214.79;
                                        endTime = "eaque";
                                        int64Value = "occaecati";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("adipisci", "asperiores");
                                            put("earum", "modi");
                                            put("iste", "dolorum");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "deleniti";
                                            nanos = 864282;
                                            units = "provident";
                                        }};
                                        startTime = "nobis";
                                        stringValue = "libero";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("quaerat"),
                                                add("quos"),
                                                add("aliquid"),
                                                add("dolorem"),
                                            }};
                                            count = "dolorem";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("hic", "excepturi");
                                                        }}),
                                                    }};
                                                    timestamp = "cum";
                                                    value = 4521.09;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(9702.37),
                                                    add(2274.14),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 6805.45;
                                                numFiniteBuckets = 254356;
                                                scale = 852.95;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 58029;
                                                offset = 564.18;
                                                width = 4344.17;
                                            }};
                                            maximum = 4878.38;
                                            mean = 3117.96;
                                            minimum = 8810.05;
                                            sumOfSquaredDeviation = 6963.44;
                                        }};
                                        doubleValue = 9764.05;
                                        endTime = "voluptas";
                                        int64Value = "natus";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("atque", "sit");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "fugiat";
                                            nanos = 67249;
                                            units = "soluta";
                                        }};
                                        startTime = "dolorum";
                                        stringValue = "iusto";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("dolorum"),
                                                add("deleniti"),
                                            }};
                                            count = "omnis";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nihil", "ipsum");
                                                            put("voluptate", "id");
                                                            put("saepe", "eius");
                                                            put("aspernatur", "perferendis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("optio", "accusamus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("saepe", "suscipit");
                                                            put("deserunt", "provident");
                                                        }}),
                                                    }};
                                                    timestamp = "minima";
                                                    value = 8310.49;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("alias", "at");
                                                            put("quaerat", "tempora");
                                                            put("vel", "quod");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("qui", "dolorum");
                                                            put("a", "esse");
                                                            put("harum", "iusto");
                                                            put("ipsum", "quisquam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("amet", "tempore");
                                                            put("accusamus", "numquam");
                                                            put("enim", "dolorem");
                                                            put("sapiente", "totam");
                                                        }}),
                                                    }};
                                                    timestamp = "nihil";
                                                    value = 256.62;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sed", "vel");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptas", "deserunt");
                                                            put("quam", "ipsum");
                                                            put("incidunt", "qui");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("maxime", "pariatur");
                                                            put("soluta", "dicta");
                                                            put("laborum", "totam");
                                                        }}),
                                                    }};
                                                    timestamp = "incidunt";
                                                    value = 1320.68;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("facilis", "aliquid");
                                                            put("quam", "molestias");
                                                            put("temporibus", "qui");
                                                        }}),
                                                    }};
                                                    timestamp = "neque";
                                                    value = 1448.47;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(4880.56),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 1248.33;
                                                numFiniteBuckets = 355613;
                                                scale = 7220.81;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 940432;
                                                offset = 304.52;
                                                width = 7653.26;
                                            }};
                                            maximum = 7469.94;
                                            mean = 7486.64;
                                            minimum = 925.96;
                                            sumOfSquaredDeviation = 9037.2;
                                        }};
                                        doubleValue = 2174.5;
                                        endTime = "veritatis";
                                        int64Value = "nobis";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("tempore", "cupiditate");
                                            put("aperiam", "delectus");
                                            put("dolorem", "dolore");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "labore";
                                            nanos = 240829;
                                            units = "dolorum";
                                        }};
                                        startTime = "architecto";
                                        stringValue = "quae";
                                    }}),
                                }};
                            }}),
                        }};
                        quotaMode = "UNSPECIFIED";
                    }};
                    serviceConfigId = "quas";
                }};
                accessToken = "itaque";
                alt = "json";
                callback = "est";
                fields = "repellendus";
                key = "porro";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "ut";
                serviceName = "facilis";
                uploadType = "cupiditate";
                uploadProtocol = "qui";
            }}            

            ServicecontrolServicesAllocateQuotaResponse res = sdk.services.servicecontrolServicesAllocateQuota(req, new ServicecontrolServicesAllocateQuotaSecurity() {{
                option1 = new ServicecontrolServicesAllocateQuotaSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.allocateQuotaResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->