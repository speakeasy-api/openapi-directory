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
                    serviceName = "quia";
                }};
                queryParams = new ServicecontrolServicesAllocateQuotaQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "assumenda";
                    alt = "media";
                    callback = "ea";
                    fields = "distinctio";
                    key = "fugiat";
                    oauthToken = "aperiam";
                    prettyPrint = false;
                    quotaUser = "aut";
                    uploadType = "eos";
                    uploadProtocol = "sit";
                }};
                request = new AllocateQuotaRequest() {{
                    allocateOperation = new QuotaOperation() {{
                        consumerId = "quisquam";
                        labels = new java.util.HashMap<String, String>() {{
                            put("et", "reiciendis");
                        }};
                        methodName = "et";
                        operationId = "est";
                        quotaMetrics = new openapisdk.models.shared.MetricValueSet[]() {{
                            add(new MetricValueSet() {{
                                metricName = "similique";
                                metricValues = new openapisdk.models.shared.MetricValue[]() {{
                                    add(new MetricValue() {{
                                        boolValue = false;
                                        distributionValue = new Distribution() {{
                                            bucketCounts = new String[]() {{
                                                add("dolor"),
                                            }};
                                            count = "minima";
                                            exemplars = new openapisdk.models.shared.Exemplar[]() {{
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("exercitationem", "libero");
                                                            put("laborum", "corrupti");
                                                            put("nisi", "sunt");
                                                        }}),
                                                    }};
                                                    timestamp = "et";
                                                    value = 7.100000;
                                                }}),
                                                add(new Exemplar() {{
                                                    attachments = new java.util.HashMap<String, Object>[]() {{
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("dolorum", "qui");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("odit", "non");
                                                            put("voluptas", "consequatur");
                                                        }}),
                                                        add(new java.util.HashMap<String, Object>() {{
                                                            put("vitae", "pariatur");
                                                            put("praesentium", "eius");
                                                        }}),
                                                    }};
                                                    timestamp = "laborum";
                                                    value = 83.199997;
                                                }}),
                                            }};
                                            explicitBuckets = new ExplicitBuckets() {{
                                                bounds = new Double[]() {{
                                                    add(76.199997),
                                                    add(75.199997),
                                                    add(30.200001),
                                                }};
                                            }};
                                            exponentialBuckets = new ExponentialBuckets() {{
                                                growthFactor = 26.200001;
                                                numFiniteBuckets = 7662859523418495733;
                                                scale = 16.200001;
                                            }};
                                            linearBuckets = new LinearBuckets() {{
                                                numFiniteBuckets = 2638820139410388575;
                                                offset = 67.199997;
                                                width = 40.099998;
                                            }};
                                            maximum = 97.199997;
                                            mean = 29.100000;
                                            minimum = 0.200000;
                                            sumOfSquaredDeviation = 13.100000;
                                        }};
                                        doubleValue = 11.100000;
                                        endTime = "incidunt";
                                        int64Value = "et";
                                        labels = new java.util.HashMap<String, String>() {{
                                            put("fugiat", "iusto");
                                        }};
                                        moneyValue = new Money() {{
                                            currencyCode = "repellendus";
                                            nanos = 7177607459405748483;
                                            units = "in";
                                        }};
                                        startTime = "rem";
                                        stringValue = "adipisci";
                                    }}),
                                }};
                            }}),
                        }};
                        quotaMode = "CHECK_ONLY";
                    }};
                    serviceConfigId = "in";
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