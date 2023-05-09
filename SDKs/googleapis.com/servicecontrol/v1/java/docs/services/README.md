# services

### Available Operations

* [servicecontrolServicesAllocateQuota](#servicecontrolservicesallocatequota) - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* [servicecontrolServicesCheck](#servicecontrolservicescheck) - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* [servicecontrolServicesReport](#servicecontrolservicesreport) - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

## servicecontrolServicesAllocateQuota

Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.

### Example Usage

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

            ServicecontrolServicesAllocateQuotaRequest req = new ServicecontrolServicesAllocateQuotaRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                allocateQuotaRequest = new AllocateQuotaRequest() {{
                    allocateOperation = new QuotaOperation() {{
                        consumerId = "voluptas";
                        labels = new java.util.HashMap<String, String>() {{
                            put("nobis", "dolorum");
                            put("adipisci", "minus");
                        }};
                        methodName = "dolores";
                        operationId = "blanditiis";
                        quotaMetrics = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                            add(new MetricValueSet() {{
                                metricName = "dolore";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("temporibus"),
                                                add("ullam"),
                                                add("adipisci"),
                                                add("cum"),
                                            }};
                                            count = "blanditiis";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("culpa", "corrupti");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("totam", "hic");
                                                            put("exercitationem", "nobis");
                                                            put("sit", "rerum");
                                                            put("sed", "reiciendis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("asperiores", "facilis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("expedita", "ab");
                                                            put("iste", "dolore");
                                                        }}),
                                                    }};
                                                    timestamp = "laborum";
                                                    value = 1523.54;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quidem", "explicabo");
                                                            put("voluptas", "unde");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("suscipit", "sapiente");
                                                        }}),
                                                    }};
                                                    timestamp = "debitis";
                                                    value = 724.34;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("corrupti", "maiores");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("sed", "provident");
                                                            put("eius", "necessitatibus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ea", "occaecati");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptatibus", "tempora");
                                                            put("tempora", "voluptate");
                                                            put("reiciendis", "ex");
                                                        }}),
                                                    }};
                                                    timestamp = "sit";
                                                    value = 2484.13;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(5058.66),
                                                    add(7086.09),
                                                    add(3103.81),
                                                    add(2777.73),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 3730.35;
                                                numFiniteBuckets = 894864;
                                                scale = 5249.7;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 26522;
                                                offset = 7505.95;
                                                width = 6256.37;
                                            }};
                                            maximum = 3335.07;
                                            mean = 3295.43;
                                            minimum = 9241.59;
                                            sumOfSquaredDeviation = 9671.22;
                                        }};
                                        doubleValue = 8623.19;
                                        endTime = "magni";
                                        int64Value = "aperiam";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("numquam", "veniam");
                                            put("in", "officiis");
                                            put("beatae", "laudantium");
                                            put("exercitationem", "praesentium");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "cum";
                                            nanos = 386827;
                                            units = "dolorum";
                                        }};
                                        startTime = "voluptatum";
                                        stringValue = "error";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("expedita"),
                                                add("debitis"),
                                                add("neque"),
                                                add("dolorum"),
                                            }};
                                            count = "nostrum";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("accusamus", "tempora");
                                                            put("atque", "fugit");
                                                            put("ut", "fugiat");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("culpa", "expedita");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("consequatur", "esse");
                                                            put("ipsam", "sit");
                                                        }}),
                                                    }};
                                                    timestamp = "voluptatum";
                                                    value = 5580.65;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("et", "blanditiis");
                                                            put("ex", "sed");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("vel", "nostrum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("error", "consequatur");
                                                            put("incidunt", "reiciendis");
                                                            put("dolorem", "harum");
                                                            put("dicta", "architecto");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("labore", "quidem");
                                                            put("atque", "laborum");
                                                            put("nam", "tenetur");
                                                        }}),
                                                    }};
                                                    timestamp = "laboriosam";
                                                    value = 27.03;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptate", "unde");
                                                            put("reiciendis", "provident");
                                                            put("repellendus", "delectus");
                                                        }}),
                                                    }};
                                                    timestamp = "voluptates";
                                                    value = 168.71;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(6964.83),
                                                    add(4406.66),
                                                    add(8136.79),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 6850.92;
                                                numFiniteBuckets = 509807;
                                                scale = 6485.98;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 333965;
                                                offset = 291;
                                                width = 7908.4;
                                            }};
                                            maximum = 9195.32;
                                            mean = 972.43;
                                            minimum = 5424.57;
                                            sumOfSquaredDeviation = 4420.36;
                                        }};
                                        doubleValue = 9911.42;
                                        endTime = "totam";
                                        int64Value = "suscipit";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("maxime", "et");
                                            put("esse", "amet");
                                            put("assumenda", "ea");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "atque";
                                            nanos = 623295;
                                            units = "officiis";
                                        }};
                                        startTime = "officiis";
                                        stringValue = "accusamus";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "natus";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("ex"),
                                            }};
                                            count = "maiores";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("blanditiis", "suscipit");
                                                            put("repudiandae", "atque");
                                                            put("atque", "sunt");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolorum", "repellendus");
                                                            put("labore", "reiciendis");
                                                            put("doloremque", "repudiandae");
                                                            put("dicta", "accusantium");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolores", "enim");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("velit", "a");
                                                            put("molestias", "magnam");
                                                        }}),
                                                    }};
                                                    timestamp = "saepe";
                                                    value = 1604.67;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("perspiciatis", "in");
                                                            put("adipisci", "eveniet");
                                                            put("occaecati", "consequuntur");
                                                            put("fugit", "id");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("reprehenderit", "error");
                                                            put("illo", "corporis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("eveniet", "non");
                                                            put("vero", "doloremque");
                                                            put("iure", "ipsa");
                                                        }}),
                                                    }};
                                                    timestamp = "totam";
                                                    value = 610.78;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("qui", "cum");
                                                            put("iure", "necessitatibus");
                                                            put("ratione", "laborum");
                                                            put("distinctio", "voluptatum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aliquam", "ad");
                                                            put("repellat", "alias");
                                                            put("corporis", "perspiciatis");
                                                        }}),
                                                    }};
                                                    timestamp = "nihil";
                                                    value = 6490.78;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(51.89),
                                                    add(9795.27),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 9702.22;
                                                numFiniteBuckets = 174658;
                                                scale = 6638.66;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 327988;
                                                offset = 2931.44;
                                                width = 6803.49;
                                            }};
                                            maximum = 2003.64;
                                            mean = 632.07;
                                            minimum = 9257.03;
                                            sumOfSquaredDeviation = 6072.49;
                                        }};
                                        doubleValue = 3092.51;
                                        endTime = "molestiae";
                                        int64Value = "ex";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("culpa", "adipisci");
                                            put("debitis", "laudantium");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "eum";
                                            nanos = 367927;
                                            units = "recusandae";
                                        }};
                                        startTime = "esse";
                                        stringValue = "provident";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("eum"),
                                                add("reiciendis"),
                                            }};
                                            count = "provident";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("animi", "nostrum");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("provident", "possimus");
                                                            put("animi", "ex");
                                                            put("aliquid", "accusantium");
                                                        }}),
                                                    }};
                                                    timestamp = "repellat";
                                                    value = 9846.32;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(4481.43),
                                                    add(7214.07),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 9376.36;
                                                numFiniteBuckets = 637583;
                                                scale = 6720.41;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 813054;
                                                offset = 2666.97;
                                                width = 9762.26;
                                            }};
                                            maximum = 5640.64;
                                            mean = 8897.94;
                                            minimum = 9569.33;
                                            sumOfSquaredDeviation = 7645.62;
                                        }};
                                        doubleValue = 1134.86;
                                        endTime = "rerum";
                                        int64Value = "tempora";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("inventore", "fugit");
                                            put("cumque", "quae");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "perferendis";
                                            nanos = 241901;
                                            units = "aspernatur";
                                        }};
                                        startTime = "eum";
                                        stringValue = "eius";
                                    }}),
                                }};
                            }}),
                        }};
                        quotaMode = QuotaOperationQuotaModeEnum.BEST_EFFORT;
                    }};;
                    serviceConfigId = "at";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "eum";
                key = "dicta";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "cupiditate";
                uploadProtocol = "provident";
            }};            

            ServicecontrolServicesAllocateQuotaResponse res = sdk.services.servicecontrolServicesAllocateQuota(req, new ServicecontrolServicesAllocateQuotaSecurity() {{
                option1 = new ServicecontrolServicesAllocateQuotaSecurityOption1("earum", "soluta") {{
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

## servicecontrolServicesCheck

Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckResponse;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesCheckSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.Attributes;
import org.openapis.openapi.models.shared.CheckRequest;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.Exemplar;
import org.openapis.openapi.models.shared.ExplicitBuckets;
import org.openapis.openapi.models.shared.ExponentialBuckets;
import org.openapis.openapi.models.shared.HttpRequest;
import org.openapis.openapi.models.shared.LinearBuckets;
import org.openapis.openapi.models.shared.LogEntry;
import org.openapis.openapi.models.shared.LogEntryOperation;
import org.openapis.openapi.models.shared.LogEntrySeverityEnum;
import org.openapis.openapi.models.shared.LogEntrySourceLocation;
import org.openapis.openapi.models.shared.MetricValue;
import org.openapis.openapi.models.shared.MetricValueSet;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationImportanceEnum;
import org.openapis.openapi.models.shared.QuotaProperties;
import org.openapis.openapi.models.shared.QuotaPropertiesQuotaModeEnum;
import org.openapis.openapi.models.shared.ResourceInfo;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TraceSpan;
import org.openapis.openapi.models.shared.TraceSpanSpanKindEnum;
import org.openapis.openapi.models.shared.TruncatableString;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicecontrolServicesCheckRequest req = new ServicecontrolServicesCheckRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                checkRequest = new CheckRequest() {{
                    operation = new Operation() {{
                        consumerId = "eaque";
                        endTime = "earum";
                        importance = OperationImportanceEnum.DEBUG;
                        labels = new java.util.HashMap<String, String>() {{
                            put("debitis", "aliquid");
                            put("porro", "suscipit");
                            put("dolorem", "fugit");
                            put("cumque", "fuga");
                        }};
                        logEntries = new org.openapis.openapi.models.shared.LogEntry[]{{
                            add(new LogEntry() {{
                                httpRequest = new HttpRequest() {{
                                    cacheFillBytes = "animi";
                                    cacheHit = false;
                                    cacheLookup = false;
                                    cacheValidatedWithOriginServer = false;
                                    latency = "necessitatibus";
                                    protocol = "nulla";
                                    referer = "consequatur";
                                    remoteIp = "quasi";
                                    requestMethod = "et";
                                    requestSize = "ducimus";
                                    requestUrl = "natus";
                                    responseSize = "occaecati";
                                    serverIp = "suscipit";
                                    status = 241557;
                                    userAgent = "quasi";
                                }};
                                insertId = "magni";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("nulla", "necessitatibus");
                                    put("ipsa", "tempora");
                                    put("nihil", "molestiae");
                                    put("dicta", "iusto");
                                }};
                                name = "Irma Wuckert";
                                operation = new LogEntryOperation() {{
                                    first = false;
                                    id = "1d017476-360a-415d-b6a6-60659a1adeaa";
                                    last = false;
                                    producer = "libero";
                                }};
                                protoPayload = new java.util.HashMap<String, Object>() {{
                                    put("deleniti", "enim");
                                    put("vitae", "repellendus");
                                }};
                                severity = LogEntrySeverityEnum.NOTICE;
                                sourceLocation = new LogEntrySourceLocation() {{
                                    file = "quo";
                                    function = "ex";
                                    line = "ut";
                                }};
                                structPayload = new java.util.HashMap<String, Object>() {{
                                    put("expedita", "voluptatem");
                                    put("molestias", "cum");
                                }};
                                textPayload = "aliquid";
                                timestamp = "beatae";
                                trace = "voluptatum";
                            }}),
                        }};
                        metricValueSets = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                            add(new MetricValueSet() {{
                                metricName = "veritatis";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("culpa"),
                                                add("voluptatem"),
                                                add("sapiente"),
                                            }};
                                            count = "officiis";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("debitis", "voluptatem");
                                                            put("alias", "deleniti");
                                                            put("earum", "ex");
                                                            put("sapiente", "rem");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nemo", "asperiores");
                                                            put("ratione", "ullam");
                                                            put("perferendis", "illum");
                                                            put("totam", "impedit");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nam", "ipsam");
                                                            put("culpa", "dolor");
                                                            put("aliquam", "inventore");
                                                            put("deleniti", "veritatis");
                                                        }}),
                                                    }};
                                                    timestamp = "tempora";
                                                    value = 2213.96;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(1000.14),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 249.44;
                                                numFiniteBuckets = 265039;
                                                scale = 1442.86;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 66149;
                                                offset = 5137.6;
                                                width = 656.04;
                                            }};
                                            maximum = 2226.58;
                                            mean = 8562.77;
                                            minimum = 3694.9;
                                            sumOfSquaredDeviation = 1621.2;
                                        }};
                                        doubleValue = 551.07;
                                        endTime = "quas";
                                        int64Value = "eveniet";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("officiis", "esse");
                                            put("necessitatibus", "sed");
                                            put("veniam", "nesciunt");
                                            put("expedita", "eum");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "vel";
                                            nanos = 528234;
                                            units = "magnam";
                                        }};
                                        startTime = "exercitationem";
                                        stringValue = "ab";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("autem"),
                                                add("nobis"),
                                                add("laboriosam"),
                                                add("recusandae"),
                                            }};
                                            count = "consequuntur";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quasi", "nisi");
                                                            put("at", "vero");
                                                            put("est", "harum");
                                                            put("sequi", "doloribus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("optio", "occaecati");
                                                            put("nemo", "voluptate");
                                                            put("blanditiis", "officia");
                                                            put("voluptas", "numquam");
                                                        }}),
                                                    }};
                                                    timestamp = "nemo";
                                                    value = 5510.79;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(1319.03),
                                                    add(4959.7),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 2005.16;
                                                numFiniteBuckets = 681740;
                                                scale = 5140.54;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 277340;
                                                offset = 974.93;
                                                width = 5243.8;
                                            }};
                                            maximum = 8518.54;
                                            mean = 1173.8;
                                            minimum = 3955.44;
                                            sumOfSquaredDeviation = 1598.45;
                                        }};
                                        doubleValue = 2330.78;
                                        endTime = "aperiam";
                                        int64Value = "cupiditate";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("soluta", "alias");
                                            put("omnis", "eos");
                                            put("occaecati", "iste");
                                            put("magni", "inventore");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "fuga";
                                            nanos = 881897;
                                            units = "voluptatibus";
                                        }};
                                        startTime = "distinctio";
                                        stringValue = "omnis";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("minima"),
                                                add("praesentium"),
                                                add("maxime"),
                                                add("magnam"),
                                            }};
                                            count = "temporibus";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("commodi", "totam");
                                                            put("earum", "modi");
                                                            put("nam", "vero");
                                                            put("voluptatem", "ipsam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("alias", "quasi");
                                                            put("non", "maiores");
                                                        }}),
                                                    }};
                                                    timestamp = "enim";
                                                    value = 5752.13;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("esse", "nemo");
                                                            put("reprehenderit", "est");
                                                            put("quis", "sint");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("impedit", "hic");
                                                            put("necessitatibus", "asperiores");
                                                            put("ex", "voluptas");
                                                            put("debitis", "delectus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("minus", "fuga");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("consectetur", "velit");
                                                            put("atque", "ipsum");
                                                            put("impedit", "magni");
                                                        }}),
                                                    }};
                                                    timestamp = "soluta";
                                                    value = 9227.57;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("iusto", "voluptate");
                                                            put("sequi", "dignissimos");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("quo", "deleniti");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("iure", "odit");
                                                            put("voluptatibus", "vel");
                                                            put("magnam", "quibusdam");
                                                            put("inventore", "facere");
                                                        }}),
                                                    }};
                                                    timestamp = "libero";
                                                    value = 1024.13;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(1563.83),
                                                    add(7820.9),
                                                    add(3041.98),
                                                    add(2470.45),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 753.59;
                                                numFiniteBuckets = 36561;
                                                scale = 4246.63;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 406922;
                                                offset = 1076.17;
                                                width = 8777.51;
                                            }};
                                            maximum = 5682.18;
                                            mean = 4319.94;
                                            minimum = 2465.57;
                                            sumOfSquaredDeviation = 2840.86;
                                        }};
                                        doubleValue = 5964.33;
                                        endTime = "earum";
                                        int64Value = "dicta";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("voluptatibus", "iste");
                                            put("itaque", "alias");
                                            put("nisi", "itaque");
                                            put("velit", "laborum");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "non";
                                            nanos = 224467;
                                            units = "iusto";
                                        }};
                                        startTime = "sit";
                                        stringValue = "doloremque";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "consequatur";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("ea"),
                                                add("quidem"),
                                                add("voluptas"),
                                                add("facilis"),
                                            }};
                                            count = "placeat";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("a", "voluptate");
                                                            put("ullam", "unde");
                                                            put("necessitatibus", "animi");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsam", "corporis");
                                                            put("est", "error");
                                                            put("esse", "labore");
                                                            put("veritatis", "vero");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("vitae", "inventore");
                                                        }}),
                                                    }};
                                                    timestamp = "dolorem";
                                                    value = 3220.17;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ex", "nemo");
                                                            put("soluta", "libero");
                                                            put("rem", "dolorum");
                                                        }}),
                                                    }};
                                                    timestamp = "odio";
                                                    value = 1446.91;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("vel", "quae");
                                                        }}),
                                                    }};
                                                    timestamp = "quae";
                                                    value = 2643.33;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(3483.57),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 9323.94;
                                                numFiniteBuckets = 88248;
                                                scale = 2153.98;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 602229;
                                                offset = 8583.38;
                                                width = 7143.76;
                                            }};
                                            maximum = 8028.94;
                                            mean = 1572.22;
                                            minimum = 1591.46;
                                            sumOfSquaredDeviation = 3421.37;
                                        }};
                                        doubleValue = 6057.12;
                                        endTime = "libero";
                                        int64Value = "dicta";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("libero", "fugiat");
                                            put("officia", "quos");
                                            put("placeat", "sit");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "iusto";
                                            nanos = 57320;
                                            units = "voluptates";
                                        }};
                                        startTime = "inventore";
                                        stringValue = "aperiam";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("dolore"),
                                                add("eligendi"),
                                                add("distinctio"),
                                            }};
                                            count = "voluptatem";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("assumenda", "beatae");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("facere", "corrupti");
                                                            put("molestiae", "provident");
                                                            put("accusamus", "necessitatibus");
                                                        }}),
                                                    }};
                                                    timestamp = "tempore";
                                                    value = 5750.78;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("ipsam", "rerum");
                                                            put("laudantium", "corporis");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("voluptatibus", "cum");
                                                            put("at", "alias");
                                                            put("quia", "quidem");
                                                            put("fuga", "repudiandae");
                                                        }}),
                                                    }};
                                                    timestamp = "accusantium";
                                                    value = 7104.56;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(1770.05),
                                                    add(8448.54),
                                                    add(4835.18),
                                                    add(5101.28),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 1403.16;
                                                numFiniteBuckets = 127688;
                                                scale = 3589.95;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 621473;
                                                offset = 9371.17;
                                                width = 2393.37;
                                            }};
                                            maximum = 9233.06;
                                            mean = 6308.71;
                                            minimum = 2828.37;
                                            sumOfSquaredDeviation = 6937.46;
                                        }};
                                        doubleValue = 3396.31;
                                        endTime = "beatae";
                                        int64Value = "unde";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("delectus", "cupiditate");
                                            put("fugit", "numquam");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "numquam";
                                            nanos = 201010;
                                            units = "at";
                                        }};
                                        startTime = "officia";
                                        stringValue = "dignissimos";
                                    }}),
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("necessitatibus"),
                                                add("corporis"),
                                                add("qui"),
                                                add("expedita"),
                                            }};
                                            count = "voluptatum";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("enim", "neque");
                                                            put("in", "minus");
                                                            put("eum", "modi");
                                                            put("corporis", "magnam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("maiores", "tempore");
                                                            put("aperiam", "libero");
                                                            put("ratione", "labore");
                                                            put("totam", "occaecati");
                                                        }}),
                                                    }};
                                                    timestamp = "voluptas";
                                                    value = 7791.8;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("fuga", "nostrum");
                                                            put("est", "impedit");
                                                            put("delectus", "tempore");
                                                            put("vero", "odit");
                                                        }}),
                                                    }};
                                                    timestamp = "repellat";
                                                    value = 8659.46;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("aperiam", "odio");
                                                            put("minima", "in");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("excepturi", "dolores");
                                                            put("error", "veritatis");
                                                        }}),
                                                    }};
                                                    timestamp = "ducimus";
                                                    value = 4527.29;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(9326.66),
                                                    add(6277.35),
                                                    add(7631.65),
                                                    add(4014.28),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 3114.86;
                                                numFiniteBuckets = 416692;
                                                scale = 8886.16;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 810839;
                                                offset = 6972.74;
                                                width = 3481.92;
                                            }};
                                            maximum = 4633.44;
                                            mean = 2114.55;
                                            minimum = 2646.19;
                                            sumOfSquaredDeviation = 593.83;
                                        }};
                                        doubleValue = 5755.34;
                                        endTime = "vero";
                                        int64Value = "sequi";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("cum", "dicta");
                                            put("earum", "veniam");
                                            put("animi", "dolores");
                                            put("nam", "dicta");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "consequuntur";
                                            nanos = 899867;
                                            units = "nobis";
                                        }};
                                        startTime = "ipsa";
                                        stringValue = "ducimus";
                                    }}),
                                }};
                            }}),
                            add(new MetricValueSet() {{
                                metricName = "maiores";
                                metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]{{
                                                add("laboriosam"),
                                            }};
                                            count = "pariatur";
                                            exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("nemo", "aliquam");
                                                            put("nostrum", "doloribus");
                                                            put("eligendi", "sint");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("hic", "animi");
                                                            put("quas", "totam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("odio", "eaque");
                                                            put("saepe", "architecto");
                                                            put("quos", "iste");
                                                        }}),
                                                    }};
                                                    timestamp = "assumenda";
                                                    value = 7316.34;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("doloremque", "delectus");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("cum", "ipsum");
                                                            put("adipisci", "saepe");
                                                            put("deserunt", "doloremque");
                                                            put("quis", "veniam");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("architecto", "cupiditate");
                                                            put("molestiae", "eligendi");
                                                            put("possimus", "non");
                                                        }}),
                                                    }};
                                                    timestamp = "magnam";
                                                    value = 9322.96;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]{{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("veniam", "consequuntur");
                                                            put("facere", "laudantium");
                                                            put("odit", "pariatur");
                                                            put("amet", "exercitationem");
                                                        }}),
                                                    }};
                                                    timestamp = "ab";
                                                    value = 2426.37;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]{{
                                                    add(7310.65),
                                                    add(3952.33),
                                                    add(9775.18),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 3108.4;
                                                numFiniteBuckets = 503748;
                                                scale = 7186.27;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 392430;
                                                offset = 3359.77;
                                                width = 3919.33;
                                            }};
                                            maximum = 7277.71;
                                            mean = 7945.07;
                                            minimum = 8152;
                                            sumOfSquaredDeviation = 7060.61;
                                        }};
                                        doubleValue = 2176.63;
                                        endTime = "ad";
                                        int64Value = "voluptatibus";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("consequuntur", "debitis");
                                            put("labore", "rerum");
                                            put("eos", "reprehenderit");
                                            put("nostrum", "neque");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "iusto";
                                            nanos = 664965;
                                            units = "rem";
                                        }};
                                        startTime = "eligendi";
                                        stringValue = "fugiat";
                                    }}),
                                }};
                            }}),
                        }};
                        operationId = "unde";
                        operationName = "officiis";
                        quotaProperties = new QuotaProperties() {{
                            quotaMode = QuotaPropertiesQuotaModeEnum.ACQUIRE_BEST_EFFORT;
                        }};;
                        resources = new org.openapis.openapi.models.shared.ResourceInfo[]{{
                            add(new ResourceInfo() {{
                                permission = "dicta";
                                resourceContainer = "error";
                                resourceLocation = "porro";
                                resourceName = "vitae";
                            }}),
                        }};
                        startTime = "dignissimos";
                        traceSpans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                            add(new TraceSpan() {{
                                attributes = new Attributes() {{
                                    attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("ad", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "aspernatur";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 316501;
                                                value = "delectus";
                                            }};
                                        }});
                                        put("iusto", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "dignissimos";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 729828;
                                                value = "illo";
                                            }};
                                        }});
                                        put("ab", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "incidunt";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 879174;
                                                value = "saepe";
                                            }};
                                        }});
                                        put("tempore", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "veniam";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 176499;
                                                value = "reiciendis";
                                            }};
                                        }});
                                    }};
                                    droppedAttributesCount = 939161;
                                }};
                                childSpanCount = 444121;
                                displayName = new TruncatableString() {{
                                    truncatedByteCount = 506312;
                                    value = "nemo";
                                }};
                                endTime = "repellat";
                                name = "Jimmy Konopelski II";
                                parentSpanId = "assumenda";
                                sameProcessAsParentSpan = false;
                                spanId = "aliquam";
                                spanKind = TraceSpanSpanKindEnum.PRODUCER;
                                startTime = "provident";
                                status = new Status() {{
                                    code = 514993;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("maxime", "aspernatur");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("expedita", "quas");
                                            put("provident", "repudiandae");
                                            put("rerum", "dignissimos");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("vero", "similique");
                                            put("repellendus", "iure");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("commodi", "impedit");
                                        }}),
                                    }};
                                    message = "commodi";
                                }};
                            }}),
                            add(new TraceSpan() {{
                                attributes = new Attributes() {{
                                    attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                        put("voluptatem", new AttributeValue() {{
                                            boolValue = false;
                                            intValue = "ad";
                                            stringValue = new TruncatableString() {{
                                                truncatedByteCount = 60995;
                                                value = "amet";
                                            }};
                                        }});
                                    }};
                                    droppedAttributesCount = 849320;
                                }};
                                childSpanCount = 506863;
                                displayName = new TruncatableString() {{
                                    truncatedByteCount = 695526;
                                    value = "cum";
                                }};
                                endTime = "amet";
                                name = "Dr. Mildred Larkin";
                                parentSpanId = "amet";
                                sameProcessAsParentSpan = false;
                                spanId = "provident";
                                spanKind = TraceSpanSpanKindEnum.PRODUCER;
                                startTime = "necessitatibus";
                                status = new Status() {{
                                    code = 592880;
                                    details = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("nemo", "molestiae");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("facilis", "corrupti");
                                            put("aperiam", "sint");
                                            put("accusamus", "eos");
                                            put("totam", "dicta");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("velit", "dolor");
                                        }}),
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("a", "dolor");
                                        }}),
                                    }};
                                    message = "occaecati";
                                }};
                            }}),
                        }};
                        userLabels = new java.util.HashMap<String, String>() {{
                            put("beatae", "at");
                            put("labore", "minus");
                            put("esse", "voluptatem");
                        }};
                    }};;
                    requestProjectSettings = false;
                    serviceConfigId = "perferendis";
                    skipActivationCheck = false;
                }};;
                accessToken = "rerum";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "dignissimos";
                key = "repellat";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "provident";
                uploadProtocol = "consectetur";
            }};            

            ServicecontrolServicesCheckResponse res = sdk.services.servicecontrolServicesCheck(req, new ServicecontrolServicesCheckSecurity() {{
                option1 = new ServicecontrolServicesCheckSecurityOption1("eligendi", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicecontrolServicesReport

Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportRequest;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportResponse;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportSecurity;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportSecurityOption1;
import org.openapis.openapi.models.operations.ServicecontrolServicesReportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.Attributes;
import org.openapis.openapi.models.shared.Distribution;
import org.openapis.openapi.models.shared.Exemplar;
import org.openapis.openapi.models.shared.ExplicitBuckets;
import org.openapis.openapi.models.shared.ExponentialBuckets;
import org.openapis.openapi.models.shared.HttpRequest;
import org.openapis.openapi.models.shared.LinearBuckets;
import org.openapis.openapi.models.shared.LogEntry;
import org.openapis.openapi.models.shared.LogEntryOperation;
import org.openapis.openapi.models.shared.LogEntrySeverityEnum;
import org.openapis.openapi.models.shared.LogEntrySourceLocation;
import org.openapis.openapi.models.shared.MetricValue;
import org.openapis.openapi.models.shared.MetricValueSet;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.Operation;
import org.openapis.openapi.models.shared.OperationImportanceEnum;
import org.openapis.openapi.models.shared.QuotaProperties;
import org.openapis.openapi.models.shared.QuotaPropertiesQuotaModeEnum;
import org.openapis.openapi.models.shared.ReportRequest;
import org.openapis.openapi.models.shared.ResourceInfo;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TraceSpan;
import org.openapis.openapi.models.shared.TraceSpanSpanKindEnum;
import org.openapis.openapi.models.shared.TruncatableString;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicecontrolServicesReportRequest req = new ServicecontrolServicesReportRequest("consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                reportRequest = new ReportRequest() {{
                    operations = new org.openapis.openapi.models.shared.Operation[]{{
                        add(new Operation() {{
                            consumerId = "temporibus";
                            endTime = "officia";
                            importance = OperationImportanceEnum.LOW;
                            labels = new java.util.HashMap<String, String>() {{
                                put("aspernatur", "quo");
                                put("itaque", "illum");
                                put("laborum", "dignissimos");
                                put("vero", "qui");
                            }};
                            logEntries = new org.openapis.openapi.models.shared.LogEntry[]{{
                                add(new LogEntry() {{
                                    httpRequest = new HttpRequest() {{
                                        cacheFillBytes = "repellat";
                                        cacheHit = false;
                                        cacheLookup = false;
                                        cacheValidatedWithOriginServer = false;
                                        latency = "explicabo";
                                        protocol = "explicabo";
                                        referer = "exercitationem";
                                        remoteIp = "nihil";
                                        requestMethod = "non";
                                        requestSize = "ab";
                                        requestUrl = "illo";
                                        responseSize = "hic";
                                        serverIp = "deserunt";
                                        status = 964925;
                                        userAgent = "non";
                                    }};
                                    insertId = "distinctio";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("exercitationem", "labore");
                                        put("numquam", "repudiandae");
                                    }};
                                    name = "Maureen Champlin";
                                    operation = new LogEntryOperation() {{
                                        first = false;
                                        id = "02857a5b-4046-43a7-9575-f1400e764ad7";
                                        last = false;
                                        producer = "consectetur";
                                    }};
                                    protoPayload = new java.util.HashMap<String, Object>() {{
                                        put("quaerat", "itaque");
                                    }};
                                    severity = LogEntrySeverityEnum.ALERT;
                                    sourceLocation = new LogEntrySourceLocation() {{
                                        file = "sunt";
                                        function = "distinctio";
                                        line = "iusto";
                                    }};
                                    structPayload = new java.util.HashMap<String, Object>() {{
                                        put("et", "facilis");
                                        put("amet", "autem");
                                        put("fuga", "alias");
                                    }};
                                    textPayload = "rem";
                                    timestamp = "aut";
                                    trace = "quos";
                                }}),
                            }};
                            metricValueSets = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                                add(new MetricValueSet() {{
                                    metricName = "repellendus";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("eaque"),
                                                }};
                                                count = "saepe";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("officia", "sed");
                                                                put("voluptatem", "alias");
                                                                put("eveniet", "hic");
                                                                put("voluptatem", "incidunt");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("qui", "necessitatibus");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("explicabo", "beatae");
                                                                put("aliquid", "modi");
                                                                put("optio", "voluptatibus");
                                                            }}),
                                                        }};
                                                        timestamp = "molestias";
                                                        value = 6394.63;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("sequi", "aliquid");
                                                                put("ea", "impedit");
                                                                put("ducimus", "odit");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("reiciendis", "repellat");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("laborum", "natus");
                                                                put("accusamus", "doloremque");
                                                                put("nisi", "rerum");
                                                                put("recusandae", "voluptates");
                                                            }}),
                                                        }};
                                                        timestamp = "non";
                                                        value = 5245.77;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quisquam", "dicta");
                                                                put("voluptatibus", "eligendi");
                                                            }}),
                                                        }};
                                                        timestamp = "quae";
                                                        value = 8850.22;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("enim", "optio");
                                                            }}),
                                                        }};
                                                        timestamp = "rem";
                                                        value = 170.6;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(9670.55),
                                                        add(9555.51),
                                                        add(6150.58),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 1178.19;
                                                    numFiniteBuckets = 552439;
                                                    scale = 3563.15;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 295950;
                                                    offset = 2662.84;
                                                    width = 9292.92;
                                                }};
                                                maximum = 8074.19;
                                                mean = 2659.05;
                                                minimum = 1635.58;
                                                sumOfSquaredDeviation = 8281.47;
                                            }};
                                            doubleValue = 8768.4;
                                            endTime = "doloribus";
                                            int64Value = "impedit";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("accusamus", "totam");
                                                put("reiciendis", "ab");
                                                put("sint", "nihil");
                                                put("esse", "iure");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "odio";
                                                nanos = 202796;
                                                units = "debitis";
                                            }};
                                            startTime = "vel";
                                            stringValue = "neque";
                                        }}),
                                    }};
                                }}),
                                add(new MetricValueSet() {{
                                    metricName = "corporis";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("officia"),
                                                }};
                                                count = "reprehenderit";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("rem", "maiores");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("veniam", "saepe");
                                                            }}),
                                                        }};
                                                        timestamp = "neque";
                                                        value = 8163.65;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("doloribus", "fugiat");
                                                                put("est", "delectus");
                                                                put("velit", "vitae");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("similique", "illo");
                                                            }}),
                                                        }};
                                                        timestamp = "repellat";
                                                        value = 3632.14;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("unde", "incidunt");
                                                                put("explicabo", "ipsam");
                                                                put("cupiditate", "optio");
                                                                put("alias", "quidem");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("commodi", "sapiente");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("veniam", "debitis");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("sint", "ut");
                                                                put("numquam", "tenetur");
                                                                put("adipisci", "libero");
                                                            }}),
                                                        }};
                                                        timestamp = "in";
                                                        value = 3296.51;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(7917.62),
                                                        add(688.8),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 1081.65;
                                                    numFiniteBuckets = 943143;
                                                    scale = 3923.19;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 786954;
                                                    offset = 2212.18;
                                                    width = 4965.48;
                                                }};
                                                maximum = 6837.27;
                                                mean = 3269.03;
                                                minimum = 1024.46;
                                                sumOfSquaredDeviation = 1814.76;
                                            }};
                                            doubleValue = 3970.26;
                                            endTime = "magni";
                                            int64Value = "incidunt";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("praesentium", "dolor");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "exercitationem";
                                                nanos = 709701;
                                                units = "facilis";
                                            }};
                                            startTime = "impedit";
                                            stringValue = "sit";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("culpa"),
                                                    add("consequuntur"),
                                                }};
                                                count = "amet";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quod", "itaque");
                                                                put("a", "quisquam");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("doloribus", "assumenda");
                                                                put("officiis", "architecto");
                                                            }}),
                                                        }};
                                                        timestamp = "alias";
                                                        value = 6339.82;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("necessitatibus", "quia");
                                                                put("dicta", "vel");
                                                                put("perspiciatis", "debitis");
                                                                put("ullam", "architecto");
                                                            }}),
                                                        }};
                                                        timestamp = "accusantium";
                                                        value = 180.96;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("cumque", "iure");
                                                                put("quibusdam", "quod");
                                                                put("nemo", "recusandae");
                                                            }}),
                                                        }};
                                                        timestamp = "velit";
                                                        value = 2991.53;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(3884.04),
                                                        add(1522.83),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 4862.72;
                                                    numFiniteBuckets = 616941;
                                                    scale = 5881.52;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 739508;
                                                    offset = 9838.54;
                                                    width = 7039.66;
                                                }};
                                                maximum = 6973.3;
                                                mean = 9320.8;
                                                minimum = 3895.48;
                                                sumOfSquaredDeviation = 6017.14;
                                            }};
                                            doubleValue = 2637.67;
                                            endTime = "perspiciatis";
                                            int64Value = "hic";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("aspernatur", "libero");
                                                put("nam", "incidunt");
                                                put("recusandae", "quod");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "id";
                                                nanos = 904440;
                                                units = "autem";
                                            }};
                                            startTime = "quo";
                                            stringValue = "nesciunt";
                                        }}),
                                    }};
                                }}),
                                add(new MetricValueSet() {{
                                    metricName = "illum";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("facilis"),
                                                    add("non"),
                                                    add("mollitia"),
                                                    add("assumenda"),
                                                }};
                                                count = "recusandae";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("facere", "laborum");
                                                                put("eveniet", "laborum");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("maxime", "ipsam");
                                                                put("alias", "suscipit");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("molestias", "laborum");
                                                                put("est", "occaecati");
                                                                put("labore", "quo");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("fugit", "aliquid");
                                                            }}),
                                                        }};
                                                        timestamp = "magnam";
                                                        value = 3085.28;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("nostrum", "officiis");
                                                                put("unde", "nulla");
                                                                put("error", "mollitia");
                                                                put("magnam", "nostrum");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("corrupti", "fuga");
                                                                put("facere", "impedit");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("deserunt", "quod");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("doloremque", "voluptatem");
                                                                put("facere", "necessitatibus");
                                                            }}),
                                                        }};
                                                        timestamp = "maxime";
                                                        value = 93.75;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("similique", "porro");
                                                            }}),
                                                        }};
                                                        timestamp = "blanditiis";
                                                        value = 608.92;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(8857.97),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 1483.79;
                                                    numFiniteBuckets = 898111;
                                                    scale = 7732.59;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 55981;
                                                    offset = 5676.93;
                                                    width = 9509.56;
                                                }};
                                                maximum = 9830;
                                                mean = 5144.62;
                                                minimum = 9822.48;
                                                sumOfSquaredDeviation = 6.91;
                                            }};
                                            doubleValue = 9926.67;
                                            endTime = "rem";
                                            int64Value = "dicta";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("earum", "doloribus");
                                                put("velit", "eius");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "esse";
                                                nanos = 446547;
                                                units = "eligendi";
                                            }};
                                            startTime = "quasi";
                                            stringValue = "neque";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("excepturi"),
                                                    add("accusantium"),
                                                    add("qui"),
                                                    add("impedit"),
                                                }};
                                                count = "beatae";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("corporis", "rerum");
                                                            }}),
                                                        }};
                                                        timestamp = "alias";
                                                        value = 6244.98;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("id", "laboriosam");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quas", "veritatis");
                                                                put("ullam", "quae");
                                                            }}),
                                                        }};
                                                        timestamp = "similique";
                                                        value = 2781.16;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(1693.12),
                                                        add(6463.29),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 9650.95;
                                                    numFiniteBuckets = 609537;
                                                    scale = 1512.3;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 200950;
                                                    offset = 8054.63;
                                                    width = 3378.41;
                                                }};
                                                maximum = 5861.08;
                                                mean = 3032.53;
                                                minimum = 5692.87;
                                                sumOfSquaredDeviation = 9804.1;
                                            }};
                                            doubleValue = 5120.81;
                                            endTime = "velit";
                                            int64Value = "reiciendis";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("nemo", "ipsa");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "quisquam";
                                                nanos = 948444;
                                                units = "quas";
                                            }};
                                            startTime = "molestiae";
                                            stringValue = "aliquid";
                                        }}),
                                    }};
                                }}),
                            }};
                            operationId = "asperiores";
                            operationName = "a";
                            quotaProperties = new QuotaProperties() {{
                                quotaMode = QuotaPropertiesQuotaModeEnum.CHECK;
                            }};
                            resources = new org.openapis.openapi.models.shared.ResourceInfo[]{{
                                add(new ResourceInfo() {{
                                    permission = "accusantium";
                                    resourceContainer = "dicta";
                                    resourceLocation = "minus";
                                    resourceName = "commodi";
                                }}),
                                add(new ResourceInfo() {{
                                    permission = "eveniet";
                                    resourceContainer = "porro";
                                    resourceLocation = "tempore";
                                    resourceName = "quidem";
                                }}),
                                add(new ResourceInfo() {{
                                    permission = "modi";
                                    resourceContainer = "voluptates";
                                    resourceLocation = "fugit";
                                    resourceName = "eius";
                                }}),
                            }};
                            startTime = "sequi";
                            traceSpans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("esse", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "blanditiis";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 573610;
                                                    value = "repellat";
                                                }};
                                            }});
                                            put("a", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "animi";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 979287;
                                                    value = "itaque";
                                                }};
                                            }});
                                            put("nulla", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "deserunt";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 359097;
                                                    value = "velit";
                                                }};
                                            }});
                                            put("officiis", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "enim";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 638609;
                                                    value = "saepe";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 429997;
                                    }};
                                    childSpanCount = 922094;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 35742;
                                        value = "officia";
                                    }};
                                    endTime = "impedit";
                                    name = "Mattie Gibson";
                                    parentSpanId = "nobis";
                                    sameProcessAsParentSpan = false;
                                    spanId = "natus";
                                    spanKind = TraceSpanSpanKindEnum.PRODUCER;
                                    startTime = "quia";
                                    status = new Status() {{
                                        code = 300651;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quos", "corrupti");
                                                put("amet", "molestiae");
                                                put("amet", "laborum");
                                                put("modi", "perferendis");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("architecto", "molestias");
                                                put("dolore", "sunt");
                                                put("maiores", "neque");
                                                put("odit", "earum");
                                            }}),
                                        }};
                                        message = "veniam";
                                    }};
                                }}),
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("eaque", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "exercitationem";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 331269;
                                                    value = "nihil";
                                                }};
                                            }});
                                            put("ad", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "nisi";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 946808;
                                                    value = "quis";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 845154;
                                    }};
                                    childSpanCount = 366480;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 382764;
                                        value = "pariatur";
                                    }};
                                    endTime = "sit";
                                    name = "Levi Auer";
                                    parentSpanId = "sed";
                                    sameProcessAsParentSpan = false;
                                    spanId = "possimus";
                                    spanKind = TraceSpanSpanKindEnum.CONSUMER;
                                    startTime = "repudiandae";
                                    status = new Status() {{
                                        code = 100233;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("harum", "dolore");
                                                put("voluptatibus", "iure");
                                                put("explicabo", "minus");
                                                put("soluta", "dolorum");
                                            }}),
                                        }};
                                        message = "velit";
                                    }};
                                }}),
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("praesentium", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "error";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 252473;
                                                    value = "quasi";
                                                }};
                                            }});
                                            put("mollitia", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "accusamus";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 687589;
                                                    value = "cumque";
                                                }};
                                            }});
                                            put("doloremque", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "expedita";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 549237;
                                                    value = "eaque";
                                                }};
                                            }});
                                            put("deserunt", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "aliquid";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 570423;
                                                    value = "magni";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 273677;
                                    }};
                                    childSpanCount = 821904;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 220824;
                                        value = "rerum";
                                    }};
                                    endTime = "sed";
                                    name = "Earnest Wisoky";
                                    parentSpanId = "quos";
                                    sameProcessAsParentSpan = false;
                                    spanId = "asperiores";
                                    spanKind = TraceSpanSpanKindEnum.CLIENT;
                                    startTime = "iste";
                                    status = new Status() {{
                                        code = 361106;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("aut", "doloribus");
                                            }}),
                                        }};
                                        message = "nostrum";
                                    }};
                                }}),
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("possimus", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "neque";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 866135;
                                                    value = "vel";
                                                }};
                                            }});
                                            put("sapiente", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "mollitia";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 65121;
                                                    value = "quos";
                                                }};
                                            }});
                                            put("aperiam", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "non";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 913284;
                                                    value = "ad";
                                                }};
                                            }});
                                            put("aliquam", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "quisquam";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 557987;
                                                    value = "consequuntur";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 982445;
                                    }};
                                    childSpanCount = 81581;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 400448;
                                        value = "laudantium";
                                    }};
                                    endTime = "est";
                                    name = "Vicki Feeney";
                                    parentSpanId = "voluptatum";
                                    sameProcessAsParentSpan = false;
                                    spanId = "ducimus";
                                    spanKind = TraceSpanSpanKindEnum.INTERNAL;
                                    startTime = "recusandae";
                                    status = new Status() {{
                                        code = 271306;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("sequi", "voluptatum");
                                                put("sit", "rerum");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("tenetur", "autem");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("totam", "porro");
                                                put("deserunt", "magni");
                                                put("nihil", "voluptas");
                                            }}),
                                        }};
                                        message = "animi";
                                    }};
                                }}),
                            }};
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("alias", "fuga");
                                put("aut", "dolore");
                            }};
                        }}),
                        add(new Operation() {{
                            consumerId = "maxime";
                            endTime = "aliquam";
                            importance = OperationImportanceEnum.DEBUG;
                            labels = new java.util.HashMap<String, String>() {{
                                put("eligendi", "placeat");
                                put("voluptas", "occaecati");
                            }};
                            logEntries = new org.openapis.openapi.models.shared.LogEntry[]{{
                                add(new LogEntry() {{
                                    httpRequest = new HttpRequest() {{
                                        cacheFillBytes = "illo";
                                        cacheHit = false;
                                        cacheLookup = false;
                                        cacheValidatedWithOriginServer = false;
                                        latency = "nihil";
                                        protocol = "inventore";
                                        referer = "libero";
                                        remoteIp = "ipsam";
                                        requestMethod = "quasi";
                                        requestSize = "cumque";
                                        requestUrl = "dicta";
                                        responseSize = "harum";
                                        serverIp = "facere";
                                        status = 707983;
                                        userAgent = "beatae";
                                    }};
                                    insertId = "cumque";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("labore", "expedita");
                                        put("corrupti", "rem");
                                        put("atque", "officiis");
                                        put("cum", "pariatur");
                                    }};
                                    name = "Garrett Gottlieb";
                                    operation = new LogEntryOperation() {{
                                        first = false;
                                        id = "ca99bc7f-c0b2-4dce-9087-3e42b006d678";
                                        last = false;
                                        producer = "blanditiis";
                                    }};
                                    protoPayload = new java.util.HashMap<String, Object>() {{
                                        put("atque", "rerum");
                                        put("deserunt", "atque");
                                    }};
                                    severity = LogEntrySeverityEnum.NOTICE;
                                    sourceLocation = new LogEntrySourceLocation() {{
                                        file = "atque";
                                        function = "architecto";
                                        line = "est";
                                    }};
                                    structPayload = new java.util.HashMap<String, Object>() {{
                                        put("rem", "magni");
                                        put("quae", "quas");
                                    }};
                                    textPayload = "placeat";
                                    timestamp = "enim";
                                    trace = "labore";
                                }}),
                                add(new LogEntry() {{
                                    httpRequest = new HttpRequest() {{
                                        cacheFillBytes = "sapiente";
                                        cacheHit = false;
                                        cacheLookup = false;
                                        cacheValidatedWithOriginServer = false;
                                        latency = "saepe";
                                        protocol = "delectus";
                                        referer = "officia";
                                        remoteIp = "natus";
                                        requestMethod = "cumque";
                                        requestSize = "natus";
                                        requestUrl = "quaerat";
                                        responseSize = "doloribus";
                                        serverIp = "quia";
                                        status = 887284;
                                        userAgent = "mollitia";
                                    }};
                                    insertId = "cumque";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("enim", "eum");
                                        put("nemo", "illum");
                                    }};
                                    name = "Nancy Kuhlman";
                                    operation = new LogEntryOperation() {{
                                        first = false;
                                        id = "ee81206e-2813-4fa4-a41c-480d3f2132af";
                                        last = false;
                                        producer = "eaque";
                                    }};
                                    protoPayload = new java.util.HashMap<String, Object>() {{
                                        put("architecto", "aperiam");
                                    }};
                                    severity = LogEntrySeverityEnum.DEBUG;
                                    sourceLocation = new LogEntrySourceLocation() {{
                                        file = "nulla";
                                        function = "enim";
                                        line = "illo";
                                    }};
                                    structPayload = new java.util.HashMap<String, Object>() {{
                                        put("delectus", "numquam");
                                        put("optio", "nobis");
                                    }};
                                    textPayload = "ex";
                                    timestamp = "repellat";
                                    trace = "quae";
                                }}),
                                add(new LogEntry() {{
                                    httpRequest = new HttpRequest() {{
                                        cacheFillBytes = "deleniti";
                                        cacheHit = false;
                                        cacheLookup = false;
                                        cacheValidatedWithOriginServer = false;
                                        latency = "expedita";
                                        protocol = "hic";
                                        referer = "excepturi";
                                        remoteIp = "aliquid";
                                        requestMethod = "sed";
                                        requestSize = "beatae";
                                        requestUrl = "similique";
                                        responseSize = "ea";
                                        serverIp = "animi";
                                        status = 296128;
                                        userAgent = "tenetur";
                                    }};
                                    insertId = "dignissimos";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("animi", "laudantium");
                                        put("esse", "eveniet");
                                    }};
                                    name = "Melvin Torp";
                                    operation = new LogEntryOperation() {{
                                        first = false;
                                        id = "e752c65b-3441-48e3-bb91-c8d975e0e841";
                                        last = false;
                                        producer = "omnis";
                                    }};
                                    protoPayload = new java.util.HashMap<String, Object>() {{
                                        put("rem", "tenetur");
                                        put("deleniti", "modi");
                                        put("earum", "architecto");
                                        put("aliquam", "labore");
                                    }};
                                    severity = LogEntrySeverityEnum.EMERGENCY;
                                    sourceLocation = new LogEntrySourceLocation() {{
                                        file = "sequi";
                                        function = "saepe";
                                        line = "consequatur";
                                    }};
                                    structPayload = new java.util.HashMap<String, Object>() {{
                                        put("debitis", "facere");
                                        put("quisquam", "cumque");
                                    }};
                                    textPayload = "aliquam";
                                    timestamp = "dolorum";
                                    trace = "deserunt";
                                }}),
                            }};
                            metricValueSets = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                                add(new MetricValueSet() {{
                                    metricName = "reiciendis";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("laborum"),
                                                    add("nobis"),
                                                    add("quibusdam"),
                                                    add("omnis"),
                                                }};
                                                count = "aut";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("reprehenderit", "quia");
                                                                put("necessitatibus", "accusantium");
                                                                put("ad", "nisi");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quia", "laudantium");
                                                                put("sed", "odit");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("expedita", "eos");
                                                                put("repellendus", "nesciunt");
                                                            }}),
                                                        }};
                                                        timestamp = "ipsa";
                                                        value = 5751.39;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("accusantium", "distinctio");
                                                                put("sapiente", "quam");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("aliquam", "delectus");
                                                                put("culpa", "voluptatum");
                                                                put("iusto", "quod");
                                                            }}),
                                                        }};
                                                        timestamp = "voluptatibus";
                                                        value = 3744.14;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(3538.19),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 6750.58;
                                                    numFiniteBuckets = 378268;
                                                    scale = 9873.71;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 657862;
                                                    offset = 9259.94;
                                                    width = 3594.53;
                                                }};
                                                maximum = 2525.67;
                                                mean = 9003.68;
                                                minimum = 7194.69;
                                                sumOfSquaredDeviation = 9832.75;
                                            }};
                                            doubleValue = 3865.38;
                                            endTime = "voluptatem";
                                            int64Value = "optio";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("sunt", "vitae");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "voluptatibus";
                                                nanos = 42364;
                                                units = "sed";
                                            }};
                                            startTime = "amet";
                                            stringValue = "rerum";
                                        }}),
                                    }};
                                }}),
                                add(new MetricValueSet() {{
                                    metricName = "in";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("ratione"),
                                                    add("dolor"),
                                                    add("nisi"),
                                                    add("dignissimos"),
                                                }};
                                                count = "reiciendis";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("accusantium", "quod");
                                                                put("minus", "quos");
                                                                put("possimus", "maiores");
                                                            }}),
                                                        }};
                                                        timestamp = "odio";
                                                        value = 5886.62;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("similique", "nesciunt");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ex", "repellendus");
                                                                put("unde", "alias");
                                                                put("impedit", "sequi");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("labore", "expedita");
                                                                put("in", "quisquam");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("enim", "nulla");
                                                            }}),
                                                        }};
                                                        timestamp = "maiores";
                                                        value = 7156.22;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("accusamus", "et");
                                                                put("quas", "blanditiis");
                                                                put("cum", "dicta");
                                                                put("impedit", "tempora");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("repudiandae", "sed");
                                                                put("impedit", "quas");
                                                                put("impedit", "vel");
                                                                put("eligendi", "recusandae");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("beatae", "veritatis");
                                                                put("maiores", "itaque");
                                                            }}),
                                                        }};
                                                        timestamp = "vero";
                                                        value = 6943.94;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("dignissimos", "minus");
                                                                put("distinctio", "possimus");
                                                                put("cum", "suscipit");
                                                                put("saepe", "earum");
                                                            }}),
                                                        }};
                                                        timestamp = "quod";
                                                        value = 4695.88;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(2159.59),
                                                        add(4984.35),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 5146.25;
                                                    numFiniteBuckets = 701786;
                                                    scale = 6439.97;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 138436;
                                                    offset = 3194.19;
                                                    width = 1939.9;
                                                }};
                                                maximum = 1068.06;
                                                mean = 4810.42;
                                                minimum = 4568.65;
                                                sumOfSquaredDeviation = 2982.46;
                                            }};
                                            doubleValue = 4877.99;
                                            endTime = "nulla";
                                            int64Value = "impedit";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("illo", "exercitationem");
                                                put("laborum", "illum");
                                                put("fugit", "maxime");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "dolorum";
                                                nanos = 998355;
                                                units = "nostrum";
                                            }};
                                            startTime = "illum";
                                            stringValue = "quibusdam";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("esse"),
                                                    add("explicabo"),
                                                }};
                                                count = "consectetur";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("maiores", "exercitationem");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("repudiandae", "aspernatur");
                                                                put("sapiente", "neque");
                                                                put("officia", "suscipit");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ducimus", "doloremque");
                                                                put("perferendis", "laudantium");
                                                                put("iusto", "corrupti");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quis", "iure");
                                                                put("ab", "quaerat");
                                                            }}),
                                                        }};
                                                        timestamp = "amet";
                                                        value = 9569.42;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("iure", "quisquam");
                                                                put("provident", "laudantium");
                                                                put("nam", "nemo");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ipsam", "minima");
                                                                put("tempora", "perferendis");
                                                            }}),
                                                        }};
                                                        timestamp = "corrupti";
                                                        value = 408.74;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("doloremque", "cum");
                                                                put("nobis", "similique");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("impedit", "nisi");
                                                                put("cumque", "soluta");
                                                                put("fugiat", "laboriosam");
                                                                put("nam", "enim");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("consectetur", "necessitatibus");
                                                                put("maxime", "cupiditate");
                                                                put("voluptatem", "provident");
                                                                put("adipisci", "accusantium");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("repellat", "omnis");
                                                                put("explicabo", "vel");
                                                            }}),
                                                        }};
                                                        timestamp = "cum";
                                                        value = 6630.62;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ipsam", "nostrum");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("voluptatum", "quasi");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("nobis", "tempora");
                                                                put("voluptate", "eius");
                                                                put("expedita", "aperiam");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("possimus", "fugit");
                                                                put("voluptatem", "repudiandae");
                                                                put("corporis", "ea");
                                                                put("eos", "aliquam");
                                                            }}),
                                                        }};
                                                        timestamp = "blanditiis";
                                                        value = 9430.63;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(9906.52),
                                                        add(4209.85),
                                                        add(1988.92),
                                                        add(5856.28),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 6568.39;
                                                    numFiniteBuckets = 591171;
                                                    scale = 1064.95;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 56998;
                                                    offset = 6509.14;
                                                    width = 7211.38;
                                                }};
                                                maximum = 8273.14;
                                                mean = 7764.21;
                                                minimum = 6844.99;
                                                sumOfSquaredDeviation = 7337.63;
                                            }};
                                            doubleValue = 4173.33;
                                            endTime = "fugit";
                                            int64Value = "suscipit";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("nisi", "aliquid");
                                                put("provident", "laboriosam");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "accusamus";
                                                nanos = 68292;
                                                units = "itaque";
                                            }};
                                            startTime = "quisquam";
                                            stringValue = "eaque";
                                        }}),
                                    }};
                                }}),
                            }};
                            operationId = "alias";
                            operationName = "qui";
                            quotaProperties = new QuotaProperties() {{
                                quotaMode = QuotaPropertiesQuotaModeEnum.ACQUIRE;
                            }};
                            resources = new org.openapis.openapi.models.shared.ResourceInfo[]{{
                                add(new ResourceInfo() {{
                                    permission = "quidem";
                                    resourceContainer = "sequi";
                                    resourceLocation = "amet";
                                    resourceName = "exercitationem";
                                }}),
                            }};
                            startTime = "illum";
                            traceSpans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("similique", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "eligendi";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 732142;
                                                    value = "amet";
                                                }};
                                            }});
                                            put("debitis", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "nobis";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 989089;
                                                    value = "temporibus";
                                                }};
                                            }});
                                            put("id", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "atque";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 845365;
                                                    value = "sit";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 778039;
                                    }};
                                    childSpanCount = 329973;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 307532;
                                        value = "provident";
                                    }};
                                    endTime = "vero";
                                    name = "Mr. Anthony Emmerich";
                                    parentSpanId = "perspiciatis";
                                    sameProcessAsParentSpan = false;
                                    spanId = "quam";
                                    spanKind = TraceSpanSpanKindEnum.CLIENT;
                                    startTime = "officia";
                                    status = new Status() {{
                                        code = 406493;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("laborum", "veritatis");
                                                put("quod", "a");
                                                put("qui", "accusantium");
                                                put("commodi", "atque");
                                            }}),
                                        }};
                                        message = "totam";
                                    }};
                                }}),
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("voluptate", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "quam";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 799830;
                                                    value = "vitae";
                                                }};
                                            }});
                                            put("sapiente", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "reiciendis";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 798953;
                                                    value = "voluptate";
                                                }};
                                            }});
                                            put("inventore", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "facere";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 804936;
                                                    value = "fuga";
                                                }};
                                            }});
                                            put("ab", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "ex";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 235970;
                                                    value = "maiores";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 153097;
                                    }};
                                    childSpanCount = 657141;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 197519;
                                        value = "eligendi";
                                    }};
                                    endTime = "voluptatum";
                                    name = "Janie Monahan";
                                    parentSpanId = "sapiente";
                                    sameProcessAsParentSpan = false;
                                    spanId = "velit";
                                    spanKind = TraceSpanSpanKindEnum.INTERNAL;
                                    startTime = "non";
                                    status = new Status() {{
                                        code = 763140;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("tenetur", "molestias");
                                                put("ipsam", "esse");
                                                put("laborum", "perspiciatis");
                                                put("voluptates", "eum");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quas", "odio");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("porro", "aliquid");
                                                put("mollitia", "quidem");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("et", "nulla");
                                            }}),
                                        }};
                                        message = "magni";
                                    }};
                                }}),
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("illum", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "a";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 771078;
                                                    value = "unde";
                                                }};
                                            }});
                                            put("ut", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "facere";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 377269;
                                                    value = "doloribus";
                                                }};
                                            }});
                                            put("recusandae", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "quisquam";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 818078;
                                                    value = "dignissimos";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 614346;
                                    }};
                                    childSpanCount = 588473;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 221490;
                                        value = "sint";
                                    }};
                                    endTime = "aperiam";
                                    name = "Natalie Howe";
                                    parentSpanId = "assumenda";
                                    sameProcessAsParentSpan = false;
                                    spanId = "explicabo";
                                    spanKind = TraceSpanSpanKindEnum.CONSUMER;
                                    startTime = "doloremque";
                                    status = new Status() {{
                                        code = 32775;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ullam", "quis");
                                            }}),
                                        }};
                                        message = "velit";
                                    }};
                                }}),
                            }};
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("quas", "maxime");
                            }};
                        }}),
                        add(new Operation() {{
                            consumerId = "recusandae";
                            endTime = "cumque";
                            importance = OperationImportanceEnum.LOW;
                            labels = new java.util.HashMap<String, String>() {{
                                put("iure", "maiores");
                                put("est", "fugit");
                                put("veritatis", "necessitatibus");
                            }};
                            logEntries = new org.openapis.openapi.models.shared.LogEntry[]{{
                                add(new LogEntry() {{
                                    httpRequest = new HttpRequest() {{
                                        cacheFillBytes = "dicta";
                                        cacheHit = false;
                                        cacheLookup = false;
                                        cacheValidatedWithOriginServer = false;
                                        latency = "ipsam";
                                        protocol = "consequuntur";
                                        referer = "cumque";
                                        remoteIp = "quidem";
                                        requestMethod = "non";
                                        requestSize = "beatae";
                                        requestUrl = "sunt";
                                        responseSize = "molestias";
                                        serverIp = "beatae";
                                        status = 420233;
                                        userAgent = "ducimus";
                                    }};
                                    insertId = "libero";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("necessitatibus", "ipsum");
                                        put("impedit", "quos");
                                        put("illum", "distinctio");
                                    }};
                                    name = "Ms. Ethel Hagenes";
                                    operation = new LogEntryOperation() {{
                                        first = false;
                                        id = "6d364ffd-4559-406d-9263-d48e935c2c9e";
                                        last = false;
                                        producer = "quos";
                                    }};
                                    protoPayload = new java.util.HashMap<String, Object>() {{
                                        put("sapiente", "ipsum");
                                    }};
                                    severity = LogEntrySeverityEnum.DEFAULT_;
                                    sourceLocation = new LogEntrySourceLocation() {{
                                        file = "soluta";
                                        function = "necessitatibus";
                                        line = "sequi";
                                    }};
                                    structPayload = new java.util.HashMap<String, Object>() {{
                                        put("labore", "adipisci");
                                        put("magni", "aperiam");
                                        put("dolores", "illum");
                                        put("iusto", "magni");
                                    }};
                                    textPayload = "beatae";
                                    timestamp = "aliquid";
                                    trace = "ad";
                                }}),
                                add(new LogEntry() {{
                                    httpRequest = new HttpRequest() {{
                                        cacheFillBytes = "voluptate";
                                        cacheHit = false;
                                        cacheLookup = false;
                                        cacheValidatedWithOriginServer = false;
                                        latency = "vel";
                                        protocol = "minima";
                                        referer = "sit";
                                        remoteIp = "vel";
                                        requestMethod = "laboriosam";
                                        requestSize = "quaerat";
                                        requestUrl = "quasi";
                                        responseSize = "rem";
                                        serverIp = "dignissimos";
                                        status = 40017;
                                        userAgent = "assumenda";
                                    }};
                                    insertId = "provident";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("sed", "inventore");
                                        put("voluptatibus", "unde");
                                        put("deserunt", "repellendus");
                                        put("consequatur", "adipisci");
                                    }};
                                    name = "Kara Glover";
                                    operation = new LogEntryOperation() {{
                                        first = false;
                                        id = "c11a0836-4290-468b-8502-a55e7f73bc84";
                                        last = false;
                                        producer = "ipsam";
                                    }};
                                    protoPayload = new java.util.HashMap<String, Object>() {{
                                        put("sequi", "magni");
                                        put("voluptatem", "est");
                                        put("amet", "veritatis");
                                        put("error", "voluptatibus");
                                    }};
                                    severity = LogEntrySeverityEnum.INFO;
                                    sourceLocation = new LogEntrySourceLocation() {{
                                        file = "rerum";
                                        function = "dolorum";
                                        line = "quibusdam";
                                    }};
                                    structPayload = new java.util.HashMap<String, Object>() {{
                                        put("excepturi", "numquam");
                                        put("molestiae", "impedit");
                                        put("error", "animi");
                                        put("voluptatum", "aliquid");
                                    }};
                                    textPayload = "nihil";
                                    timestamp = "facilis";
                                    trace = "optio";
                                }}),
                                add(new LogEntry() {{
                                    httpRequest = new HttpRequest() {{
                                        cacheFillBytes = "incidunt";
                                        cacheHit = false;
                                        cacheLookup = false;
                                        cacheValidatedWithOriginServer = false;
                                        latency = "eos";
                                        protocol = "magnam";
                                        referer = "dolores";
                                        remoteIp = "aliquid";
                                        requestMethod = "eum";
                                        requestSize = "vel";
                                        requestUrl = "ad";
                                        responseSize = "quos";
                                        serverIp = "illo";
                                        status = 383381;
                                        userAgent = "quibusdam";
                                    }};
                                    insertId = "fugiat";
                                    labels = new java.util.HashMap<String, String>() {{
                                        put("culpa", "atque");
                                        put("voluptates", "maiores");
                                        put("nemo", "illo");
                                        put("doloribus", "cumque");
                                    }};
                                    name = "Edwin Runte";
                                    operation = new LogEntryOperation() {{
                                        first = false;
                                        id = "3ec12cda-ad0e-4c7a-bedb-d80df448a47f";
                                        last = false;
                                        producer = "iste";
                                    }};
                                    protoPayload = new java.util.HashMap<String, Object>() {{
                                        put("occaecati", "aut");
                                    }};
                                    severity = LogEntrySeverityEnum.CRITICAL;
                                    sourceLocation = new LogEntrySourceLocation() {{
                                        file = "minima";
                                        function = "quos";
                                        line = "blanditiis";
                                    }};
                                    structPayload = new java.util.HashMap<String, Object>() {{
                                        put("voluptatem", "provident");
                                        put("quas", "ipsum");
                                        put("vero", "fuga");
                                    }};
                                    textPayload = "facilis";
                                    timestamp = "maiores";
                                    trace = "error";
                                }}),
                            }};
                            metricValueSets = new org.openapis.openapi.models.shared.MetricValueSet[]{{
                                add(new MetricValueSet() {{
                                    metricName = "a";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("voluptatibus"),
                                                    add("assumenda"),
                                                    add("repellendus"),
                                                    add("omnis"),
                                                }};
                                                count = "delectus";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quam", "omnis");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("asperiores", "modi");
                                                                put("facere", "neque");
                                                                put("quis", "in");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("non", "porro");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("soluta", "ipsa");
                                                                put("reiciendis", "labore");
                                                                put("vero", "eos");
                                                                put("quas", "quasi");
                                                            }}),
                                                        }};
                                                        timestamp = "architecto";
                                                        value = 5097.99;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("enim", "iure");
                                                                put("laudantium", "modi");
                                                                put("magnam", "accusamus");
                                                                put("nulla", "repudiandae");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("praesentium", "enim");
                                                                put("animi", "unde");
                                                                put("quae", "eum");
                                                                put("nostrum", "eveniet");
                                                            }}),
                                                        }};
                                                        timestamp = "laboriosam";
                                                        value = 1873.61;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(6977.29),
                                                        add(8486.49),
                                                        add(9703.76),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 8095.67;
                                                    numFiniteBuckets = 175275;
                                                    scale = 97.77;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 201966;
                                                    offset = 1553.71;
                                                    width = 6937.24;
                                                }};
                                                maximum = 3771.61;
                                                mean = 7791.54;
                                                minimum = 5120.17;
                                                sumOfSquaredDeviation = 4905.49;
                                            }};
                                            doubleValue = 6069.89;
                                            endTime = "omnis";
                                            int64Value = "fugit";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("quidem", "molestiae");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "debitis";
                                                nanos = 112071;
                                                units = "dolor";
                                            }};
                                            startTime = "ad";
                                            stringValue = "atque";
                                        }}),
                                    }};
                                }}),
                                add(new MetricValueSet() {{
                                    metricName = "ut";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("deserunt"),
                                                    add("itaque"),
                                                }};
                                                count = "et";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("praesentium", "natus");
                                                                put("vitae", "tenetur");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("aspernatur", "eligendi");
                                                                put("repudiandae", "dicta");
                                                                put("inventore", "ullam");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("inventore", "voluptate");
                                                                put("sed", "dolorem");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("exercitationem", "amet");
                                                            }}),
                                                        }};
                                                        timestamp = "voluptate";
                                                        value = 4542.32;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(7914.21),
                                                        add(9550.65),
                                                        add(6863.01),
                                                        add(5189.26),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 5875.39;
                                                    numFiniteBuckets = 870100;
                                                    scale = 9865.94;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 608172;
                                                    offset = 4636.95;
                                                    width = 3490.87;
                                                }};
                                                maximum = 9151.45;
                                                mean = 1941.94;
                                                minimum = 3366.4;
                                                sumOfSquaredDeviation = 4131.35;
                                            }};
                                            doubleValue = 4264.81;
                                            endTime = "rem";
                                            int64Value = "aliquid";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("perspiciatis", "fugit");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "itaque";
                                                nanos = 600185;
                                                units = "cumque";
                                            }};
                                            startTime = "dolor";
                                            stringValue = "repellendus";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("minus"),
                                                    add("minima"),
                                                    add("a"),
                                                    add("beatae"),
                                                }};
                                                count = "vitae";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("laborum", "dicta");
                                                                put("voluptatem", "odit");
                                                                put("aliquid", "pariatur");
                                                                put("enim", "numquam");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("est", "quaerat");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("vitae", "omnis");
                                                                put("alias", "sapiente");
                                                                put("officiis", "expedita");
                                                                put("quia", "vitae");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quas", "ipsa");
                                                                put("distinctio", "placeat");
                                                            }}),
                                                        }};
                                                        timestamp = "quod";
                                                        value = 7560.74;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(8197.57),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 7188.79;
                                                    numFiniteBuckets = 714835;
                                                    scale = 8256.81;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 850406;
                                                    offset = 7468.34;
                                                    width = 2973.25;
                                                }};
                                                maximum = 5123.49;
                                                mean = 2726.35;
                                                minimum = 4580.21;
                                                sumOfSquaredDeviation = 421.51;
                                            }};
                                            doubleValue = 5494.19;
                                            endTime = "reiciendis";
                                            int64Value = "facilis";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("repudiandae", "amet");
                                                put("natus", "ab");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "officiis";
                                                nanos = 429823;
                                                units = "rerum";
                                            }};
                                            startTime = "placeat";
                                            stringValue = "ab";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("blanditiis"),
                                                    add("porro"),
                                                }};
                                                count = "labore";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ullam", "numquam");
                                                                put("enim", "cupiditate");
                                                                put("occaecati", "itaque");
                                                                put("fuga", "consectetur");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("aspernatur", "explicabo");
                                                                put("suscipit", "ipsa");
                                                            }}),
                                                        }};
                                                        timestamp = "eveniet";
                                                        value = 5757.53;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("accusantium", "consequatur");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("recusandae", "voluptate");
                                                                put("deleniti", "est");
                                                                put("et", "expedita");
                                                                put("quibusdam", "quos");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quidem", "in");
                                                                put("culpa", "doloremque");
                                                                put("fuga", "dicta");
                                                                put("architecto", "suscipit");
                                                            }}),
                                                        }};
                                                        timestamp = "eligendi";
                                                        value = 8855.23;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ratione", "possimus");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("aut", "natus");
                                                                put("esse", "delectus");
                                                            }}),
                                                        }};
                                                        timestamp = "deserunt";
                                                        value = 1880.81;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("iste", "deserunt");
                                                                put("hic", "ducimus");
                                                                put("consequuntur", "ipsam");
                                                                put("libero", "quia");
                                                            }}),
                                                        }};
                                                        timestamp = "omnis";
                                                        value = 1206.46;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(1309.34),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 62.03;
                                                    numFiniteBuckets = 228133;
                                                    scale = 92.84;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 852634;
                                                    offset = 5320.92;
                                                    width = 2451.16;
                                                }};
                                                maximum = 9427.8;
                                                mean = 3564.85;
                                                minimum = 6442.99;
                                                sumOfSquaredDeviation = 9319.53;
                                            }};
                                            doubleValue = 7143;
                                            endTime = "iusto";
                                            int64Value = "dignissimos";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("occaecati", "assumenda");
                                                put("sunt", "odit");
                                                put("vero", "deleniti");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "optio";
                                                nanos = 98805;
                                                units = "repellat";
                                            }};
                                            startTime = "atque";
                                            stringValue = "magnam";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("amet"),
                                                    add("corrupti"),
                                                    add("sunt"),
                                                }};
                                                count = "nemo";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quaerat", "magni");
                                                                put("cumque", "quos");
                                                                put("in", "commodi");
                                                                put("maxime", "sed");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("consequuntur", "possimus");
                                                                put("delectus", "harum");
                                                                put("aliquam", "eligendi");
                                                                put("hic", "quo");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("nobis", "esse");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("explicabo", "sequi");
                                                                put("alias", "reiciendis");
                                                            }}),
                                                        }};
                                                        timestamp = "quos";
                                                        value = 2563.1;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("nam", "architecto");
                                                                put("rerum", "assumenda");
                                                                put("eos", "dolorem");
                                                                put("hic", "repellendus");
                                                            }}),
                                                        }};
                                                        timestamp = "nam";
                                                        value = 691.84;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("expedita", "autem");
                                                                put("tempore", "recusandae");
                                                                put("nostrum", "officia");
                                                                put("voluptas", "laudantium");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("excepturi", "natus");
                                                                put("deleniti", "necessitatibus");
                                                            }}),
                                                        }};
                                                        timestamp = "aspernatur";
                                                        value = 1731.93;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("eos", "voluptatem");
                                                                put("temporibus", "id");
                                                                put("quae", "commodi");
                                                                put("a", "minus");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("nam", "quia");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ab", "deserunt");
                                                                put("sed", "blanditiis");
                                                            }}),
                                                        }};
                                                        timestamp = "sint";
                                                        value = 8115.19;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(4760.84),
                                                        add(9338.4),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 5231.56;
                                                    numFiniteBuckets = 366327;
                                                    scale = 2505.2;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 926142;
                                                    offset = 6050.43;
                                                    width = 585.67;
                                                }};
                                                maximum = 3029.05;
                                                mean = 2199.4;
                                                minimum = 5772.84;
                                                sumOfSquaredDeviation = 8426.78;
                                            }};
                                            doubleValue = 1696.78;
                                            endTime = "consequuntur";
                                            int64Value = "consequuntur";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("commodi", "ipsam");
                                                put("vel", "cupiditate");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "modi";
                                                nanos = 392311;
                                                units = "explicabo";
                                            }};
                                            startTime = "modi";
                                            stringValue = "doloremque";
                                        }}),
                                    }};
                                }}),
                                add(new MetricValueSet() {{
                                    metricName = "odio";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("tempora"),
                                                    add("delectus"),
                                                    add("quam"),
                                                }};
                                                count = "dolorum";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("optio", "saepe");
                                                                put("maiores", "accusantium");
                                                            }}),
                                                        }};
                                                        timestamp = "sed";
                                                        value = 1806.6;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("vitae", "occaecati");
                                                                put("labore", "fugiat");
                                                            }}),
                                                        }};
                                                        timestamp = "quidem";
                                                        value = 3502.02;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quasi", "quae");
                                                                put("similique", "possimus");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("suscipit", "ex");
                                                                put("sint", "est");
                                                                put("doloribus", "provident");
                                                                put("alias", "deserunt");
                                                            }}),
                                                        }};
                                                        timestamp = "fugit";
                                                        value = 4218.82;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(4770.99),
                                                        add(8051.28),
                                                        add(8149.5),
                                                        add(7692.47),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 5871.22;
                                                    numFiniteBuckets = 536999;
                                                    scale = 942.88;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 978857;
                                                    offset = 298.53;
                                                    width = 3961.84;
                                                }};
                                                maximum = 5112.52;
                                                mean = 6019.44;
                                                minimum = 5446.6;
                                                sumOfSquaredDeviation = 633.69;
                                            }};
                                            doubleValue = 8161.68;
                                            endTime = "ea";
                                            int64Value = "libero";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("amet", "adipisci");
                                                put("minus", "hic");
                                                put("similique", "fuga");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "consectetur";
                                                nanos = 287575;
                                                units = "laudantium";
                                            }};
                                            startTime = "cumque";
                                            stringValue = "adipisci";
                                        }}),
                                    }};
                                }}),
                                add(new MetricValueSet() {{
                                    metricName = "veritatis";
                                    metricValues = new org.openapis.openapi.models.shared.MetricValue[]{{
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("magnam"),
                                                    add("aperiam"),
                                                    add("ducimus"),
                                                    add("itaque"),
                                                }};
                                                count = "necessitatibus";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("sapiente", "alias");
                                                                put("impedit", "numquam");
                                                                put("aspernatur", "nobis");
                                                                put("nihil", "voluptatum");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("vitae", "ullam");
                                                                put("nisi", "consequuntur");
                                                                put("voluptas", "ratione");
                                                                put("excepturi", "corrupti");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("perferendis", "quibusdam");
                                                                put("impedit", "ducimus");
                                                                put("nisi", "nisi");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("fugit", "dolore");
                                                            }}),
                                                        }};
                                                        timestamp = "maxime";
                                                        value = 8031.44;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ea", "impedit");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("optio", "est");
                                                                put("inventore", "consequuntur");
                                                                put("repellendus", "sit");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("enim", "aspernatur");
                                                            }}),
                                                        }};
                                                        timestamp = "perspiciatis";
                                                        value = 1664.01;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(27.58),
                                                        add(6925.55),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 5334.57;
                                                    numFiniteBuckets = 819690;
                                                    scale = 3689.76;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 488442;
                                                    offset = 1432.53;
                                                    width = 1342.67;
                                                }};
                                                maximum = 8687.29;
                                                mean = 8506.28;
                                                minimum = 5062.02;
                                                sumOfSquaredDeviation = 5749.9;
                                            }};
                                            doubleValue = 3487.08;
                                            endTime = "cum";
                                            int64Value = "voluptatum";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("placeat", "reiciendis");
                                                put("dolores", "dolore");
                                                put("pariatur", "facilis");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "cupiditate";
                                                nanos = 365676;
                                                units = "natus";
                                            }};
                                            startTime = "nisi";
                                            stringValue = "provident";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("dolor"),
                                                }};
                                                count = "nostrum";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("dolore", "ullam");
                                                                put("velit", "adipisci");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("occaecati", "numquam");
                                                                put("fugiat", "molestiae");
                                                                put("quas", "repellendus");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("amet", "distinctio");
                                                                put("vel", "necessitatibus");
                                                                put("iste", "nesciunt");
                                                                put("corrupti", "cupiditate");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ullam", "dolorum");
                                                                put("soluta", "cum");
                                                                put("in", "delectus");
                                                                put("commodi", "commodi");
                                                            }}),
                                                        }};
                                                        timestamp = "fugit";
                                                        value = 3553.8;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(438.62),
                                                        add(6678.04),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 1842.04;
                                                    numFiniteBuckets = 508773;
                                                    scale = 2371.89;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 519132;
                                                    offset = 1835.04;
                                                    width = 6481.66;
                                                }};
                                                maximum = 7547.84;
                                                mean = 2758.37;
                                                minimum = 5358.83;
                                                sumOfSquaredDeviation = 2207.46;
                                            }};
                                            doubleValue = 6676.34;
                                            endTime = "reiciendis";
                                            int64Value = "possimus";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("consectetur", "inventore");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "minima";
                                                nanos = 703651;
                                                units = "facilis";
                                            }};
                                            startTime = "deserunt";
                                            stringValue = "nisi";
                                        }}),
                                        add(new MetricValue() {{
                                            boolValue = false;
                                            distributionValue = new Distribution() {{
                                                bucketCounts = new String[]{{
                                                    add("voluptatem"),
                                                    add("illo"),
                                                }};
                                                count = "iure";
                                                exemplars = new org.openapis.openapi.models.shared.Exemplar[]{{
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("ea", "asperiores");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("quidem", "asperiores");
                                                                put("eum", "deserunt");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("nemo", "molestias");
                                                                put("architecto", "expedita");
                                                                put("quisquam", "praesentium");
                                                                put("facilis", "assumenda");
                                                            }}),
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("maiores", "ipsum");
                                                                put("commodi", "vitae");
                                                                put("fugit", "nam");
                                                                put("ex", "neque");
                                                            }}),
                                                        }};
                                                        timestamp = "quod";
                                                        value = 1761.04;
                                                    }}),
                                                    add(new Exemplar() {{
                                                        attachments = new java.util.HashMap<String, Object>[]{{
                                                            add(new java.util.HashMap<String, Object>() {{
                                                                put("a", "facere");
                                                                put("id", "atque");
                                                            }}),
                                                        }};
                                                        timestamp = "quaerat";
                                                        value = 458.5;
                                                    }}),
                                                }};
                                                explicitBuckets = new ExplicitBuckets() {{
                                                    bounds = new Double[]{{
                                                        add(4638.95),
                                                        add(2640.73),
                                                    }};
                                                }};
                                                exponentialBuckets = new ExponentialBuckets() {{
                                                    growthFactor = 6839.8;
                                                    numFiniteBuckets = 435931;
                                                    scale = 5383.68;
                                                }};
                                                linearBuckets = new LinearBuckets() {{
                                                    numFiniteBuckets = 638219;
                                                    offset = 5724.5;
                                                    width = 6740.77;
                                                }};
                                                maximum = 2247.77;
                                                mean = 3227.73;
                                                minimum = 8477.4;
                                                sumOfSquaredDeviation = 229.66;
                                            }};
                                            doubleValue = 5613.99;
                                            endTime = "voluptas";
                                            int64Value = "expedita";
                                            labels = new java.util.HashMap<String, String>() {{
                                                put("maiores", "ea");
                                                put("vel", "delectus");
                                            }};
                                            moneyValue = new Money() {{
                                                currencyCode = "accusamus";
                                                nanos = 970097;
                                                units = "consequatur";
                                            }};
                                            startTime = "sed";
                                            stringValue = "accusantium";
                                        }}),
                                    }};
                                }}),
                            }};
                            operationId = "voluptates";
                            operationName = "provident";
                            quotaProperties = new QuotaProperties() {{
                                quotaMode = QuotaPropertiesQuotaModeEnum.CHECK;
                            }};
                            resources = new org.openapis.openapi.models.shared.ResourceInfo[]{{
                                add(new ResourceInfo() {{
                                    permission = "numquam";
                                    resourceContainer = "non";
                                    resourceLocation = "cum";
                                    resourceName = "incidunt";
                                }}),
                                add(new ResourceInfo() {{
                                    permission = "dolores";
                                    resourceContainer = "enim";
                                    resourceLocation = "nihil";
                                    resourceName = "libero";
                                }}),
                            }};
                            startTime = "omnis";
                            traceSpans = new org.openapis.openapi.models.shared.TraceSpan[]{{
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("quisquam", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "corrupti";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 830197;
                                                    value = "cum";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 842935;
                                    }};
                                    childSpanCount = 667418;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 414644;
                                        value = "similique";
                                    }};
                                    endTime = "autem";
                                    name = "Kate Will";
                                    parentSpanId = "inventore";
                                    sameProcessAsParentSpan = false;
                                    spanId = "iste";
                                    spanKind = TraceSpanSpanKindEnum.CLIENT;
                                    startTime = "explicabo";
                                    status = new Status() {{
                                        code = 356007;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("pariatur", "aut");
                                                put("similique", "iste");
                                                put("eveniet", "nam");
                                                put("animi", "labore");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptatibus", "quam");
                                                put("nulla", "dolorem");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("a", "perferendis");
                                                put("quaerat", "excepturi");
                                                put("aliquid", "dolore");
                                                put("voluptatem", "illum");
                                            }}),
                                        }};
                                        message = "laboriosam";
                                    }};
                                }}),
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("dicta", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "atque";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 191425;
                                                    value = "vitae";
                                                }};
                                            }});
                                            put("quisquam", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "atque";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 472190;
                                                    value = "culpa";
                                                }};
                                            }});
                                            put("temporibus", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "a";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 322849;
                                                    value = "cupiditate";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 383196;
                                    }};
                                    childSpanCount = 967401;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 832135;
                                        value = "delectus";
                                    }};
                                    endTime = "ab";
                                    name = "Rufus Lakin";
                                    parentSpanId = "animi";
                                    sameProcessAsParentSpan = false;
                                    spanId = "debitis";
                                    spanKind = TraceSpanSpanKindEnum.CLIENT;
                                    startTime = "voluptatem";
                                    status = new Status() {{
                                        code = 789286;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("architecto", "sint");
                                                put("eligendi", "occaecati");
                                                put("quis", "tempore");
                                                put("officia", "iste");
                                            }}),
                                        }};
                                        message = "unde";
                                    }};
                                }}),
                                add(new TraceSpan() {{
                                    attributes = new Attributes() {{
                                        attributeMap = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                            put("laboriosam", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "ducimus";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 531568;
                                                    value = "sapiente";
                                                }};
                                            }});
                                            put("deserunt", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "dolor";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 940951;
                                                    value = "iure";
                                                }};
                                            }});
                                            put("sint", new AttributeValue() {{
                                                boolValue = false;
                                                intValue = "autem";
                                                stringValue = new TruncatableString() {{
                                                    truncatedByteCount = 614368;
                                                    value = "cupiditate";
                                                }};
                                            }});
                                        }};
                                        droppedAttributesCount = 67855;
                                    }};
                                    childSpanCount = 683783;
                                    displayName = new TruncatableString() {{
                                        truncatedByteCount = 952216;
                                        value = "dolor";
                                    }};
                                    endTime = "voluptatum";
                                    name = "Mrs. Forrest Waelchi";
                                    parentSpanId = "vitae";
                                    sameProcessAsParentSpan = false;
                                    spanId = "numquam";
                                    spanKind = TraceSpanSpanKindEnum.INTERNAL;
                                    startTime = "modi";
                                    status = new Status() {{
                                        code = 552741;
                                        details = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("error", "reprehenderit");
                                                put("reprehenderit", "animi");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptates", "delectus");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("delectus", "exercitationem");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("laboriosam", "doloremque");
                                            }}),
                                        }};
                                        message = "sed";
                                    }};
                                }}),
                            }};
                            userLabels = new java.util.HashMap<String, String>() {{
                                put("debitis", "a");
                                put("itaque", "eveniet");
                                put("repellat", "cupiditate");
                            }};
                        }}),
                    }};
                    serviceConfigId = "adipisci";
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "veniam";
                fields = "sed";
                key = "necessitatibus";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "itaque";
                uploadProtocol = "explicabo";
            }};            

            ServicecontrolServicesReportResponse res = sdk.services.servicecontrolServicesReport(req, new ServicecontrolServicesReportSecurity() {{
                option1 = new ServicecontrolServicesReportSecurityOption1("ullam", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
