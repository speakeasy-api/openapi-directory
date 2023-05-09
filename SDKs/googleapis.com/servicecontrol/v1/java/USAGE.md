<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaResponse;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurityOption2;
import org.openapis.openapi.models.shared.AllocateQuotaRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.Exemplar;
import org.openapis.openapi.models.shared.ExplicitBuckets;
import org.openapis.openapi.models.shared.ExponentialBuckets;
import org.openapis.openapi.models.shared.LinearBuckets;
import org.openapis.openapi.models.shared.MetricValue;
import org.openapis.openapi.models.shared.MetricValueSet;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.QuotaOperation;
import org.openapis.openapi.models.shared.QuotaOperationQuotaModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicecontrolServicesAllocateQuotaRequest req = new ServicecontrolServicesAllocateQuotaRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                allocateQuotaRequest = new AllocateQuotaRequest() {{
                    allocateOperation = new QuotaOperation() {{
                        consumerId = "distinctio";
                        labels = new java.util.HashMap<String, String>() {{
                            put("unde", "nulla");
                            put("corrupti", "illum");
                            put("vel", "error");
                            put("deserunt", "suscipit");
                        }};
                        methodName = "iure";
                        operationId = "magnam";
                        quotaMetrics = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                            add(new MetricValueSet() {{
                                metricName = "ipsa";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("suscipit"),
                                                add("molestiae"),
                                            }};
                                            count = "minus";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("excepturi", "nisi");
                                                            put("recusandae", "temporibus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quis", "veritatis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("perferendis", "ipsam");
                                                            put("repellendus", "sapiente");
                                                            put("quo", "odit");
                                                        }}),
                                                    }};
                                                    timestamp = "at";
                                                    value = 8700.88;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quod", "quod");
                                                            put("esse", "totam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolorum", "dicta");
                                                            put("nam", "officia");
                                                            put("occaecati", "fugit");
                                                            put("deleniti", "hic");
                                                        }}),
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
                                                    }};
                                                    timestamp = "ad";
                                                    value = 6176.36;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolor", "natus");
                                                            put("laboriosam", "hic");
                                                            put("saepe", "fuga");
                                                        }}),
                                                    }};
                                                    timestamp = "in";
                                                    value = 3595.08;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("saepe", "quidem");
                                                            put("architecto", "ipsa");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("est", "mollitia");
                                                            put("laborum", "dolores");
                                                            put("dolorem", "corporis");
                                                            put("explicabo", "nobis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("omnis", "nemo");
                                                            put("minima", "excepturi");
                                                        }}),
                                                    }};
                                                    timestamp = "accusantium";
                                                    value = 4386.01;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(9883.74),
                                                    add(9589.5),
                                                    add(1020.44),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 6527.9;
                                                numFiniteBuckets = 208876;
                                                scale = 6350.59;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 161309;
                                                offset = 9953;
                                                width = 6531.08;
                                            }};
                                            maximum = 5818.5;
                                            mean = 2532.91;
                                            minimum = 4143.69;
                                            sumOfSquaredDeviation = 4663.11;
                                        }};
                                        doubleValue = 4746.97;
                                        endTime = "velit";
                                        int64Value = "error";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("quis", "vitae");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "laborum";
                                            nanos = 656330;
                                            units = "enim";
                                        }};
                                        startTime = "odit";
                                        stringValue = "quo";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("tenetur"),
                                            }};
                                            count = "ipsam";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quasi", "error");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("laborum", "quasi");
                                                            put("reiciendis", "voluptatibus");
                                                            put("vero", "nihil");
                                                            put("praesentium", "voluptatibus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("omnis", "voluptate");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("perferendis", "doloremque");
                                                            put("reprehenderit", "ut");
                                                            put("maiores", "dicta");
                                                        }}),
                                                    }};
                                                    timestamp = "corporis";
                                                    value = 2961.4;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("harum", "enim");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("commodi", "repudiandae");
                                                            put("quae", "ipsum");
                                                            put("quidem", "molestias");
                                                            put("excepturi", "pariatur");
                                                        }}),
                                                    }};
                                                    timestamp = "modi";
                                                    value = 5089.69;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quasi", "repudiandae");
                                                            put("sint", "veritatis");
                                                            put("itaque", "incidunt");
                                                            put("enim", "consequatur");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quibusdam", "explicabo");
                                                            put("deserunt", "distinctio");
                                                            put("quibusdam", "labore");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("qui", "aliquid");
                                                            put("cupiditate", "quos");
                                                        }}),
                                                    }};
                                                    timestamp = "perferendis";
                                                    value = 1649.4;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(3698.08),
                                                    add(46.95),
                                                    add(1464.41),
                                                    add(6778.17),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 5696.18;
                                                numFiniteBuckets = 270008;
                                                scale = 7037.37;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 735194;
                                                offset = 2884.76;
                                                width = 9621.89;
                                            }};
                                            maximum = 4332.88;
                                            mean = 2487.53;
                                            minimum = 7561.07;
                                            sumOfSquaredDeviation = 5761.57;
                                        }};
                                        doubleValue = 3960.98;
                                        endTime = "provident";
                                        int64Value = "necessitatibus";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("officia", "dolor");
                                            put("debitis", "a");
                                            put("dolorum", "in");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "in";
                                            nanos = 846409;
                                            units = "maiores";
                                        }};
                                        startTime = "rerum";
                                        stringValue = "dicta";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("cumque"),
                                                add("facere"),
                                            }};
                                            count = "ea";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("non", "occaecati");
                                                            put("enim", "accusamus");
                                                            put("delectus", "quidem");
                                                            put("provident", "nam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("blanditiis", "deleniti");
                                                            put("sapiente", "amet");
                                                            put("deserunt", "nisi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("natus", "omnis");
                                                            put("molestiae", "perferendis");
                                                        }}),
                                                    }};
                                                    timestamp = "nihil";
                                                    value = 3015.75;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("labore", "labore");
                                                            put("suscipit", "natus");
                                                            put("nobis", "eum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aspernatur", "architecto");
                                                            put("magnam", "et");
                                                            put("excepturi", "ullam");
                                                            put("provident", "quos");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("accusantium", "mollitia");
                                                            put("reiciendis", "mollitia");
                                                            put("ad", "eum");
                                                        }}),
                                                    }};
                                                    timestamp = "dolor";
                                                    value = 8965.47;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(3675.62),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 972.6;
                                                numFiniteBuckets = 435865;
                                                scale = 9840.43;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 891924;
                                                offset = 2603.41;
                                                width = 8061.94;
                                            }};
                                            maximum = 5370.23;
                                            mean = 7038.89;
                                            minimum = 4479.26;
                                            sumOfSquaredDeviation = 1002.26;
                                        }};
                                        doubleValue = 995.69;
                                        endTime = "repudiandae";
                                        int64Value = "ullam";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("nihil", "repellat");
                                            put("quibusdam", "sed");
                                            put("saepe", "pariatur");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "accusantium";
                                            nanos = 162493;
                                            units = "praesentium";
                                        }};
                                        startTime = "natus";
                                        stringValue = "magni";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("quo"),
                                            }};
                                            count = "illum";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("excepturi", "odit");
                                                            put("ea", "accusantium");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("maiores", "quidem");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptate", "autem");
                                                            put("nam", "eaque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nemo", "voluptatibus");
                                                            put("perferendis", "fugiat");
                                                            put("amet", "aut");
                                                            put("cumque", "corporis");
                                                        }}),
                                                    }};
                                                    timestamp = "hic";
                                                    value = 7299.91;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quis", "totam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eaque", "quis");
                                                            put("nesciunt", "eos");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolores", "minus");
                                                        }}),
                                                    }};
                                                    timestamp = "quam";
                                                    value = 2239.24;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("hic", "recusandae");
                                                            put("omnis", "facilis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptatem", "porro");
                                                            put("consequuntur", "blanditiis");
                                                            put("error", "eaque");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("rerum", "adipisci");
                                                            put("asperiores", "earum");
                                                            put("modi", "iste");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("deleniti", "pariatur");
                                                            put("provident", "nobis");
                                                            put("libero", "delectus");
                                                        }}),
                                                    }};
                                                    timestamp = "quaerat";
                                                    value = 5542.42;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolorem", "dolor");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsum", "hic");
                                                        }}),
                                                    }};
                                                    timestamp = "excepturi";
                                                    value = 7395.51;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(4904.59),
                                                    add(9702.37),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 2274.14;
                                                numFiniteBuckets = 680545;
                                                scale = 2543.56;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 85295;
                                                offset = 580.29;
                                                width = 564.18;
                                            }};
                                            maximum = 4344.17;
                                            mean = 4878.38;
                                            minimum = 3117.96;
                                            sumOfSquaredDeviation = 8810.05;
                                        }};
                                        doubleValue = 6963.44;
                                        endTime = "voluptatibus";
                                        int64Value = "voluptas";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("eos", "atque");
                                            put("sit", "fugiat");
                                            put("ab", "soluta");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "dolorum";
                                            nanos = 478596;
                                            units = "voluptate";
                                        }};
                                        startTime = "dolorum";
                                        stringValue = "deleniti";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "omnis";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("asperiores"),
                                                add("nihil"),
                                                add("ipsum"),
                                            }};
                                            count = "voluptate";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aspernatur", "perferendis");
                                                            put("amet", "optio");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ad", "saepe");
                                                            put("suscipit", "deserunt");
                                                            put("provident", "minima");
                                                            put("repellendus", "totam");
                                                        }}),
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
                                                    }};
                                                    timestamp = "tenetur";
                                                    value = 2294.42;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("numquam", "enim");
                                                            put("dolorem", "sapiente");
                                                            put("totam", "nihil");
                                                            put("sit", "expedita");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sed", "vel");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptas", "deserunt");
                                                            put("quam", "ipsum");
                                                            put("incidunt", "qui");
                                                        }}),
                                                    }};
                                                    timestamp = "cupiditate";
                                                    value = 8075.81;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dicta", "laborum");
                                                            put("totam", "incidunt");
                                                            put("aspernatur", "dolores");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("facilis", "aliquid");
                                                            put("quam", "molestias");
                                                            put("temporibus", "qui");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("fugit", "magni");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sunt", "ullam");
                                                            put("nam", "hic");
                                                        }}),
                                                    }};
                                                    timestamp = "voluptatem";
                                                    value = 7653.26;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(7486.64),
                                                    add(925.96),
                                                    add(9037.2),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 2174.5;
                                                numFiniteBuckets = 83422;
                                                scale = 7492.55;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 552193;
                                                offset = 7316.94;
                                                width = 5844.76;
                                            }};
                                            maximum = 456.14;
                                            mean = 9619.37;
                                            minimum = 2091.57;
                                            sumOfSquaredDeviation = 2921.47;
                                        }};
                                        doubleValue = 2869.15;
                                        endTime = "adipisci";
                                        int64Value = "dolorum";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("quae", "aut");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "quas";
                                            nanos = 929530;
                                            units = "consequatur";
                                        }};
                                        startTime = "est";
                                        stringValue = "repellendus";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("doloribus"),
                                                add("ut"),
                                                add("facilis"),
                                                add("cupiditate"),
                                            }};
                                            count = "qui";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("occaecati", "voluptatibus");
                                                            put("quisquam", "vero");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quis", "ipsum");
                                                            put("delectus", "voluptate");
                                                            put("consectetur", "vero");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dignissimos", "hic");
                                                            put("distinctio", "quod");
                                                            put("odio", "similique");
                                                            put("facilis", "vero");
                                                        }}),
                                                    }};
                                                    timestamp = "ducimus";
                                                    value = 2930.2;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(8489.44),
                                                    add(1943.42),
                                                    add(6178.77),
                                                    add(7733.26),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 132.36;
                                                numFiniteBuckets = 974259;
                                                scale = 3472.33;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 862310;
                                                offset = 1481.41;
                                                width = 7804.27;
                                            }};
                                            maximum = 9818.3;
                                            mean = 9850.33;
                                            minimum = 4783.7;
                                            sumOfSquaredDeviation = 7535.7;
                                        }};
                                        doubleValue = 4973.91;
                                        endTime = "alias";
                                        int64Value = "officia";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("ipsam", "ea");
                                            put("aspernatur", "vel");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "possimus";
                                            nanos = 297842;
                                            units = "ratione";
                                        }};
                                        startTime = "ex";
                                        stringValue = "laudantium";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("dolor"),
                                            }};
                                            count = "maiores";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("excepturi", "voluptatibus");
                                                            put("nostrum", "sapiente");
                                                            put("quisquam", "saepe");
                                                            put("ea", "impedit");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("veniam", "aliquid");
                                                            put("inventore", "magnam");
                                                        }}),
                                                    }};
                                                    timestamp = "ea";
                                                    value = 7752.2;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(9262.13),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 1324.87;
                                                numFiniteBuckets = 325310;
                                                scale = 534.27;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 952871;
                                                offset = 7255.95;
                                                width = 139.48;
                                            }};
                                            maximum = 114.27;
                                            mean = 5334.66;
                                            minimum = 7705.81;
                                            sumOfSquaredDeviation = 3045.82;
                                        }};
                                        doubleValue = 1469.46;
                                        endTime = "accusamus";
                                        int64Value = "inventore";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("et", "dolorum");
                                            put("laborum", "placeat");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "velit";
                                            nanos = 432148;
                                            units = "autem";
                                        }};
                                        startTime = "nobis";
                                        stringValue = "quas";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("nulla"),
                                                add("voluptas"),
                                                add("libero"),
                                                add("quasi"),
                                            }};
                                            count = "tempora";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "molestiae");
                                                            put("magnam", "odio");
                                                            put("eius", "esse");
                                                        }}),
                                                    }};
                                                    timestamp = "esse";
                                                    value = 5245.93;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quidem", "fugiat");
                                                            put("ut", "eum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("assumenda", "eos");
                                                            put("praesentium", "quisquam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "id");
                                                        }}),
                                                    }};
                                                    timestamp = "quidem";
                                                    value = 2065.94;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(8472.76),
                                                    add(7774.08),
                                                    add(6813.59),
                                                    add(2594.22),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 1783.67;
                                                numFiniteBuckets = 373813;
                                                scale = 698.59;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 587600;
                                                offset = 96.88;
                                                width = 2728.22;
                                            }};
                                            maximum = 8920.5;
                                            mean = 3708.53;
                                            minimum = 1334.65;
                                            sumOfSquaredDeviation = 1970.54;
                                        }};
                                        doubleValue = 7791.92;
                                        endTime = "esse";
                                        int64Value = "recusandae";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("distinctio", "quod");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "dignissimos";
                                            nanos = 76956;
                                            units = "nihil";
                                        }};
                                        startTime = "totam";
                                        stringValue = "accusamus";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "aliquam";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("commodi"),
                                                add("sapiente"),
                                                add("dolores"),
                                            }};
                                            count = "deserunt";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eum", "quas");
                                                            put("praesentium", "consequuntur");
                                                            put("deleniti", "fugit");
                                                            put("fuga", "mollitia");
                                                        }}),
                                                    }};
                                                    timestamp = "incidunt";
                                                    value = 5392.24;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nisi", "fugit");
                                                            put("sapiente", "consequuntur");
                                                        }}),
                                                    }};
                                                    timestamp = "ratione";
                                                    value = 1294.12;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(5789.22),
                                                    add(5438.06),
                                                    add(922.6),
                                                    add(4569.11),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 9105.45;
                                                numFiniteBuckets = 882042;
                                                scale = 829.71;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 458604;
                                                offset = 8003.79;
                                                width = 7241.68;
                                            }};
                                            maximum = 8771.31;
                                            mean = 3990.25;
                                            minimum = 934.59;
                                            sumOfSquaredDeviation = 9040.45;
                                        }};
                                        doubleValue = 4263.06;
                                        endTime = "harum";
                                        int64Value = "molestiae";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("occaecati", "minima");
                                            put("distinctio", "eligendi");
                                            put("sit", "culpa");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "tempore";
                                            nanos = 240020;
                                            units = "cumque";
                                        }};
                                        startTime = "consequuntur";
                                        stringValue = "consequatur";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("quaerat"),
                                                add("sapiente"),
                                                add("consectetur"),
                                                add("esse"),
                                            }};
                                            count = "blanditiis";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quas", "esse");
                                                            put("quasi", "a");
                                                            put("error", "sint");
                                                            put("pariatur", "possimus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eveniet", "asperiores");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("veritatis", "consequuntur");
                                                            put("quasi", "similique");
                                                            put("culpa", "aliquid");
                                                            put("tenetur", "quae");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("vel", "in");
                                                            put("eius", "libero");
                                                            put("illum", "soluta");
                                                            put("accusantium", "aliquam");
                                                        }}),
                                                    }};
                                                    timestamp = "sapiente";
                                                    value = 1197.71;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ullam", "nisi");
                                                            put("aut", "voluptatum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quibusdam", "ex");
                                                        }}),
                                                    }};
                                                    timestamp = "deleniti";
                                                    value = 9292.92;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("omnis", "tenetur");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("at", "et");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "minima");
                                                            put("veritatis", "consectetur");
                                                        }}),
                                                    }};
                                                    timestamp = "adipisci";
                                                    value = 6144.65;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(330.74),
                                                    add(5223.71),
                                                    add(156.06),
                                                    add(5130.75),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 4287.96;
                                                numFiniteBuckets = 649832;
                                                scale = 680.74;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 544591;
                                                offset = 2519.41;
                                                width = 324.65;
                                            }};
                                            maximum = 2211.61;
                                            mean = 5801.52;
                                            minimum = 2531.91;
                                            sumOfSquaredDeviation = 7710.89;
                                        }};
                                        doubleValue = 1310.55;
                                        endTime = "voluptas";
                                        int64Value = "aut";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("dicta", "maiores");
                                            put("natus", "velit");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "voluptatibus";
                                            nanos = 374323;
                                            units = "asperiores";
                                        }};
                                        startTime = "aperiam";
                                        stringValue = "ea";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "quaerat";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("officia"),
                                                add("maxime"),
                                                add("dignissimos"),
                                                add("officia"),
                                            }};
                                            count = "asperiores";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("porro", "quod");
                                                            put("labore", "ab");
                                                        }}),
                                                    }};
                                                    timestamp = "adipisci";
                                                    value = 6835.73;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("velit", "culpa");
                                                            put("est", "recusandae");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("fugiat", "vel");
                                                            put("ducimus", "quos");
                                                            put("vel", "labore");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("facilis", "cum");
                                                            put("commodi", "in");
                                                            put("corporis", "reiciendis");
                                                            put("assumenda", "nemo");
                                                        }}),
                                                    }};
                                                    timestamp = "recusandae";
                                                    value = 3975.33;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(7386.83),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 2326.27;
                                                numFiniteBuckets = 449083;
                                                scale = 3485.19;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 937285;
                                                offset = 8149.67;
                                                width = 2572.33;
                                            }};
                                            maximum = 9854.92;
                                            mean = 3817.6;
                                            minimum = 9689.72;
                                            sumOfSquaredDeviation = 6971.42;
                                        }};
                                        doubleValue = 9049.49;
                                        endTime = "necessitatibus";
                                        int64Value = "dolore";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("asperiores", "adipisci");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "non";
                                            nanos = 228263;
                                            units = "beatae";
                                        }};
                                        startTime = "dignissimos";
                                        stringValue = "a";
                                    }}),
                                }};
                            }}),
                        }};
                        quotaMode = QuotaOperationQuotaModeEnum.ADJUST_ONLY;
                    }};;
                    serviceConfigId = "consectetur";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "ipsa";
                key = "voluptates";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "accusamus";
                uploadProtocol = "similique";
            }};            

            ServicecontrolServicesAllocateQuotaResponse res = sdk.services.servicecontrolServicesAllocateQuota(req, new ServicecontrolServicesAllocateQuotaSecurity() {{
                option1 = new ServicecontrolServicesAllocateQuotaSecurityOption1("tempora", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.allocateQuotaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->