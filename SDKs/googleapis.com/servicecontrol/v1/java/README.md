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

import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurityOption2;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaPathParams;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaQueryParams;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesAllocateQuotaResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    serviceName = "corrupti";
                }};
                queryParams = new ServicecontrolServicesAllocateQuotaQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AllocateQuotaRequest() {{
                    allocateOperation = new QuotaOperation() {{
                        consumerId = "suscipit";
                        labels = new java.util.HashMap<String, String>() {{
                            put("magnam", "debitis");
                            put("ipsa", "delectus");
                        }};
                        methodName = "tempora";
                        operationId = "suscipit";
                        quotaMetrics = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                            add(new MetricValueSet() {{
                                metricName = "minus";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("iusto"),
                                                add("excepturi"),
                                                add("nisi"),
                                            }};
                                            count = "recusandae";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("veritatis", "deserunt");
                                                            put("perferendis", "ipsam");
                                                        }}),
                                                    }};
                                                    timestamp = "repellendus";
                                                    value = 9571.56;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("at", "at");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("molestiae", "quod");
                                                            put("quod", "esse");
                                                            put("totam", "porro");
                                                            put("dolorum", "dicta");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("officia", "occaecati");
                                                            put("fugit", "deleniti");
                                                            put("hic", "optio");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("beatae", "commodi");
                                                            put("molestiae", "modi");
                                                            put("qui", "impedit");
                                                        }}),
                                                    }};
                                                    timestamp = "cum";
                                                    value = 4561.5;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aspernatur", "perferendis");
                                                            put("ad", "natus");
                                                            put("sed", "iste");
                                                        }}),
                                                    }};
                                                    timestamp = "dolor";
                                                    value = 6169.34;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("saepe", "fuga");
                                                            put("in", "corporis");
                                                            put("iste", "iure");
                                                            put("saepe", "quidem");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsa", "reiciendis");
                                                        }}),
                                                    }};
                                                    timestamp = "est";
                                                    value = 6531.4;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(1709.09),
                                                    add(2103.82),
                                                    add(3581.52),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 1289.26;
                                                numFiniteBuckets = 750686;
                                                scale = 3154.28;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 607831;
                                                offset = 3637.11;
                                                width = 3250.47;
                                            }};
                                            maximum = 5701.97;
                                            mean = 384.25;
                                            minimum = 4386.01;
                                            sumOfSquaredDeviation = 6342.74;
                                        }};
                                        doubleValue = 9883.74;
                                        endTime = "sapiente";
                                        int64Value = "architecto";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("dolorem", "culpa");
                                            put("consequuntur", "repellat");
                                            put("mollitia", "occaecati");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "numquam";
                                            nanos = 414369;
                                            units = "quam";
                                        }};
                                        startTime = "molestiae";
                                        stringValue = "velit";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("quia"),
                                                add("quis"),
                                                add("vitae"),
                                            }};
                                            count = "laborum";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quo", "sequi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsam", "id");
                                                            put("possimus", "aut");
                                                            put("quasi", "error");
                                                            put("temporibus", "laborum");
                                                        }}),
                                                    }};
                                                    timestamp = "quasi";
                                                    value = 9719.45;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nihil", "praesentium");
                                                            put("voluptatibus", "ipsa");
                                                            put("omnis", "voluptate");
                                                            put("cum", "perferendis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("reprehenderit", "ut");
                                                        }}),
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
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("facere"),
                                                add("ea"),
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
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "delectus";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("aliquid"),
                                                add("dolorem"),
                                                add("dolorem"),
                                            }};
                                            count = "dolor";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("excepturi", "cum");
                                                            put("voluptate", "dignissimos");
                                                            put("reiciendis", "amet");
                                                            put("dolorum", "numquam");
                                                        }}),
                                                    }};
                                                    timestamp = "veritatis";
                                                    value = 580.29;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(4344.17),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 4878.38;
                                                numFiniteBuckets = 311796;
                                                scale = 8810.05;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 696344;
                                                offset = 9764.05;
                                                width = 3777.52;
                                            }};
                                            maximum = 6176.58;
                                            mean = 1796.03;
                                            minimum = 5424.99;
                                            sumOfSquaredDeviation = 246.78;
                                        }};
                                        doubleValue = 8546.14;
                                        endTime = "ab";
                                        int64Value = "soluta";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("iusto", "voluptate");
                                            put("dolorum", "deleniti");
                                            put("omnis", "necessitatibus");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "distinctio";
                                            nanos = 990339;
                                            units = "nihil";
                                        }};
                                        startTime = "ipsum";
                                        stringValue = "voluptate";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("saepe"),
                                                add("eius"),
                                                add("aspernatur"),
                                            }};
                                            count = "perferendis";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
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
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(2074.7),
                                                    add(1536.94),
                                                    add(4246.85),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 7304.42;
                                                numFiniteBuckets = 374170;
                                                scale = 6462.65;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 463575;
                                                offset = 2148.8;
                                                width = 2776.28;
                                            }};
                                            maximum = 1864.58;
                                            mean = 5867.84;
                                            minimum = 8075.81;
                                            sumOfSquaredDeviation = 8638.56;
                                        }};
                                        doubleValue = 7470.8;
                                        endTime = "dicta";
                                        int64Value = "laborum";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("incidunt", "aspernatur");
                                            put("dolores", "distinctio");
                                            put("facilis", "aliquid");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "quam";
                                            nanos = 565421;
                                            units = "temporibus";
                                        }};
                                        startTime = "qui";
                                        stringValue = "neque";
                                    }}),
                                }};
                            }}),
                        }};
                        quotaMode = "UNSPECIFIED";
                    }};
                    serviceConfigId = "magni";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### services

* `servicecontrolServicesAllocateQuota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `servicecontrolServicesCheck` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `servicecontrolServicesReport` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
