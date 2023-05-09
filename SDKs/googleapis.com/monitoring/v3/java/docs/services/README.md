# services

### Available Operations

* [monitoringServicesCreate](#monitoringservicescreate) - Create a Service.
* [monitoringServicesList](#monitoringserviceslist) - List Services for this Metrics Scope.
* [monitoringServicesServiceLevelObjectivesCreate](#monitoringservicesservicelevelobjectivescreate) - Create a ServiceLevelObjective for the given Service.
* [monitoringServicesServiceLevelObjectivesDelete](#monitoringservicesservicelevelobjectivesdelete) - Delete the given ServiceLevelObjective.
* [monitoringServicesServiceLevelObjectivesGet](#monitoringservicesservicelevelobjectivesget) - Get a ServiceLevelObjective by name.
* [monitoringServicesServiceLevelObjectivesList](#monitoringservicesservicelevelobjectiveslist) - List the ServiceLevelObjectives for the given Service.
* [monitoringServicesServiceLevelObjectivesPatch](#monitoringservicesservicelevelobjectivespatch) - Update the given ServiceLevelObjective.

## monitoringServicesCreate

Create a Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringServicesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringServicesCreateResponse;
import org.openapis.openapi.models.operations.MonitoringServicesCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringServicesCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringServicesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEngine;
import org.openapis.openapi.models.shared.BasicService;
import org.openapis.openapi.models.shared.CloudEndpoints;
import org.openapis.openapi.models.shared.CloudRun;
import org.openapis.openapi.models.shared.ClusterIstio;
import org.openapis.openapi.models.shared.GkeNamespaceInput;
import org.openapis.openapi.models.shared.GkeServiceInput;
import org.openapis.openapi.models.shared.GkeWorkloadInput;
import org.openapis.openapi.models.shared.IstioCanonicalService;
import org.openapis.openapi.models.shared.MeshIstio;
import org.openapis.openapi.models.shared.ServiceInput;
import org.openapis.openapi.models.shared.Telemetry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringServicesCreateRequest req = new MonitoringServicesCreateRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceInput = new ServiceInput() {{
                    appEngine = new AppEngine() {{
                        moduleId = "provident";
                    }};;
                    basicService = new BasicService() {{
                        serviceLabels = new java.util.HashMap<String, String>() {{
                            put("doloribus", "facilis");
                            put("quidem", "itaque");
                            put("laboriosam", "unde");
                        }};
                        serviceType = "modi";
                    }};;
                    cloudEndpoints = new CloudEndpoints() {{
                        service = "perspiciatis";
                    }};;
                    cloudRun = new CloudRun() {{
                        location = "hic";
                        serviceName = "cum";
                    }};;
                    clusterIstio = new ClusterIstio() {{
                        clusterName = "aspernatur";
                        location = "libero";
                        serviceName = "nam";
                        serviceNamespace = "incidunt";
                    }};;
                    custom = new java.util.HashMap<String, Object>() {{
                        put("quod", "id");
                        put("saepe", "autem");
                        put("quo", "nesciunt");
                        put("illum", "nemo");
                    }};
                    displayName = "illum";
                    gkeNamespace = new GkeNamespaceInput() {{
                        clusterName = "facilis";
                        location = "non";
                        namespaceName = "mollitia";
                    }};;
                    gkeService = new GkeServiceInput() {{
                        clusterName = "assumenda";
                        location = "recusandae";
                        namespaceName = "distinctio";
                        serviceName = "pariatur";
                    }};;
                    gkeWorkload = new GkeWorkloadInput() {{
                        clusterName = "ad";
                        location = "facere";
                        namespaceName = "laborum";
                        topLevelControllerName = "eveniet";
                        topLevelControllerType = "laborum";
                    }};;
                    istioCanonicalService = new IstioCanonicalService() {{
                        canonicalService = "incidunt";
                        canonicalServiceNamespace = "maxime";
                        meshUid = "ipsam";
                    }};;
                    meshIstio = new MeshIstio() {{
                        meshUid = "alias";
                        serviceName = "suscipit";
                        serviceNamespace = "deserunt";
                    }};;
                    name = "Neal Ortiz";
                    telemetry = new Telemetry() {{
                        resourceName = "quo";
                    }};;
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("fugit", "aliquid");
                    }};
                }};;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "hic";
                key = "nostrum";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "unde";
                serviceId = "nulla";
                uploadType = "error";
                uploadProtocol = "mollitia";
            }};            

            MonitoringServicesCreateResponse res = sdk.services.monitoringServicesCreate(req, new MonitoringServicesCreateSecurity() {{
                option1 = new MonitoringServicesCreateSecurityOption1("magnam", "nostrum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringServicesList

List Services for this Metrics Scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringServicesListRequest;
import org.openapis.openapi.models.operations.MonitoringServicesListResponse;
import org.openapis.openapi.models.operations.MonitoringServicesListSecurity;
import org.openapis.openapi.models.operations.MonitoringServicesListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringServicesListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringServicesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringServicesListRequest req = new MonitoringServicesListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "quasi";
                filter = "deserunt";
                key = "quod";
                oauthToken = "laboriosam";
                pageSize = 41179L;
                pageToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "necessitatibus";
                uploadProtocol = "maxime";
            }};            

            MonitoringServicesListResponse res = sdk.services.monitoringServicesList(req, new MonitoringServicesListSecurity() {{
                option1 = new MonitoringServicesListSecurityOption1("consequatur", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringServicesServiceLevelObjectivesCreate

Create a ServiceLevelObjective for the given Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesCreateRequest;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesCreateResponse;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesCreateSecurity;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesCreateSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BasicSli;
import org.openapis.openapi.models.shared.DistributionCut;
import org.openapis.openapi.models.shared.GoogleMonitoringV3Range;
import org.openapis.openapi.models.shared.LatencyCriteria;
import org.openapis.openapi.models.shared.MetricRange;
import org.openapis.openapi.models.shared.PerformanceThreshold;
import org.openapis.openapi.models.shared.RequestBasedSli;
import org.openapis.openapi.models.shared.ServiceLevelIndicator;
import org.openapis.openapi.models.shared.ServiceLevelObjective;
import org.openapis.openapi.models.shared.ServiceLevelObjectiveCalendarPeriodEnum;
import org.openapis.openapi.models.shared.TimeSeriesRatio;
import org.openapis.openapi.models.shared.WindowsBasedSli;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringServicesServiceLevelObjectivesCreateRequest req = new MonitoringServicesServiceLevelObjectivesCreateRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceLevelObjective = new ServiceLevelObjective() {{
                    calendarPeriod = ServiceLevelObjectiveCalendarPeriodEnum.HALF;
                    displayName = "blanditiis";
                    goal = 608.92;
                    name = "Rochelle Cormier";
                    rollingPeriod = "ipsa";
                    serviceLevelIndicator = new ServiceLevelIndicator() {{
                        basicSli = new BasicSli() {{
                            availability = new java.util.HashMap<String, Object>() {{
                                put("a", "maiores");
                                put("laudantium", "maiores");
                                put("alias", "asperiores");
                            }};
                            latency = new LatencyCriteria() {{
                                threshold = "rem";
                            }};;
                            location = new String[]{{
                                add("suscipit"),
                            }};
                            method = new String[]{{
                                add("doloribus"),
                                add("velit"),
                                add("eius"),
                                add("esse"),
                            }};
                            version = new String[]{{
                                add("eligendi"),
                                add("quasi"),
                            }};
                        }};;
                        requestBased = new RequestBasedSli() {{
                            distributionCut = new DistributionCut() {{
                                distributionFilter = "neque";
                                range = new GoogleMonitoringV3Range() {{
                                    max = 8766.49;
                                    min = 5663.12;
                                }};;
                            }};;
                            goodTotalRatio = new TimeSeriesRatio() {{
                                badServiceFilter = "accusantium";
                                goodServiceFilter = "qui";
                                totalServiceFilter = "impedit";
                            }};;
                        }};;
                        windowsBased = new WindowsBasedSli() {{
                            goodBadMetricFilter = "beatae";
                            goodTotalRatioThreshold = new PerformanceThreshold() {{
                                basicSliPerformance = new BasicSli() {{
                                    availability = new java.util.HashMap<String, Object>() {{
                                        put("dicta", "odit");
                                        put("corporis", "rerum");
                                    }};
                                    latency = new LatencyCriteria() {{
                                        threshold = "alias";
                                    }};;
                                    location = new String[]{{
                                        add("vel"),
                                        add("accusantium"),
                                        add("id"),
                                    }};
                                    method = new String[]{{
                                        add("ex"),
                                        add("quas"),
                                    }};
                                    version = new String[]{{
                                        add("ullam"),
                                    }};
                                }};;
                                performance = new RequestBasedSli() {{
                                    distributionCut = new DistributionCut() {{
                                        distributionFilter = "quae";
                                        range = new GoogleMonitoringV3Range() {{
                                            max = 6317.19;
                                            min = 2781.16;
                                        }};;
                                    }};;
                                    goodTotalRatio = new TimeSeriesRatio() {{
                                        badServiceFilter = "quam";
                                        goodServiceFilter = "magni";
                                        totalServiceFilter = "deserunt";
                                    }};;
                                }};;
                                threshold = 9650.95;
                            }};;
                            metricMeanInRange = new MetricRange() {{
                                range = new GoogleMonitoringV3Range() {{
                                    max = 6095.37;
                                    min = 1512.3;
                                }};;
                                timeSeries = "nesciunt";
                            }};;
                            metricSumInRange = new MetricRange() {{
                                range = new GoogleMonitoringV3Range() {{
                                    max = 8054.63;
                                    min = 3378.41;
                                }};;
                                timeSeries = "cupiditate";
                            }};;
                            windowPeriod = "aliquam";
                        }};;
                    }};;
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("maiores", "laudantium");
                        put("velit", "reiciendis");
                        put("amet", "nemo");
                    }};
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "quas";
                key = "molestiae";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "asperiores";
                serviceLevelObjectiveId = "a";
                uploadType = "nobis";
                uploadProtocol = "perspiciatis";
            }};            

            MonitoringServicesServiceLevelObjectivesCreateResponse res = sdk.services.monitoringServicesServiceLevelObjectivesCreate(req, new MonitoringServicesServiceLevelObjectivesCreateSecurity() {{
                option1 = new MonitoringServicesServiceLevelObjectivesCreateSecurityOption1("accusantium", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serviceLevelObjective != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringServicesServiceLevelObjectivesDelete

Delete the given ServiceLevelObjective.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesDeleteRequest;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesDeleteResponse;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesDeleteSecurity;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringServicesServiceLevelObjectivesDeleteRequest req = new MonitoringServicesServiceLevelObjectivesDeleteRequest("minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "quidem";
                force = false;
                key = "modi";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "eius";
                uploadProtocol = "sequi";
            }};            

            MonitoringServicesServiceLevelObjectivesDeleteResponse res = sdk.services.monitoringServicesServiceLevelObjectivesDelete(req, new MonitoringServicesServiceLevelObjectivesDeleteSecurity() {{
                option1 = new MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1("eligendi", "asperiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringServicesServiceLevelObjectivesGet

Get a ServiceLevelObjective by name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetRequest;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetResponse;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetSecurity;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetSecurityOption3;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetSecurityOption4;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringServicesServiceLevelObjectivesGetRequest req = new MonitoringServicesServiceLevelObjectivesGetRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "animi";
                key = "maiores";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "deserunt";
                uploadProtocol = "corporis";
                view = MonitoringServicesServiceLevelObjectivesGetViewEnum.VIEW_UNSPECIFIED;
            }};            

            MonitoringServicesServiceLevelObjectivesGetResponse res = sdk.services.monitoringServicesServiceLevelObjectivesGet(req, new MonitoringServicesServiceLevelObjectivesGetSecurity() {{
                option1 = new MonitoringServicesServiceLevelObjectivesGetSecurityOption1("officiis", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serviceLevelObjective != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringServicesServiceLevelObjectivesList

List the ServiceLevelObjectives for the given Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesListRequest;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesListResponse;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesListSecurity;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesListSecurityOption3;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringServicesServiceLevelObjectivesListRequest req = new MonitoringServicesServiceLevelObjectivesListRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "officia";
                filter = "impedit";
                key = "quasi";
                oauthToken = "blanditiis";
                pageSize = 260911L;
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "nobis";
                uploadProtocol = "natus";
                view = MonitoringServicesServiceLevelObjectivesListViewEnum.EXPLICIT;
            }};            

            MonitoringServicesServiceLevelObjectivesListResponse res = sdk.services.monitoringServicesServiceLevelObjectivesList(req, new MonitoringServicesServiceLevelObjectivesListSecurity() {{
                option1 = new MonitoringServicesServiceLevelObjectivesListSecurityOption1("quia", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServiceLevelObjectivesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## monitoringServicesServiceLevelObjectivesPatch

Update the given ServiceLevelObjective.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesPatchRequest;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesPatchResponse;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesPatchSecurity;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesPatchSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringServicesServiceLevelObjectivesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BasicSli;
import org.openapis.openapi.models.shared.DistributionCut;
import org.openapis.openapi.models.shared.GoogleMonitoringV3Range;
import org.openapis.openapi.models.shared.LatencyCriteria;
import org.openapis.openapi.models.shared.MetricRange;
import org.openapis.openapi.models.shared.PerformanceThreshold;
import org.openapis.openapi.models.shared.RequestBasedSli;
import org.openapis.openapi.models.shared.ServiceLevelIndicator;
import org.openapis.openapi.models.shared.ServiceLevelObjective;
import org.openapis.openapi.models.shared.ServiceLevelObjectiveCalendarPeriodEnum;
import org.openapis.openapi.models.shared.TimeSeriesRatio;
import org.openapis.openapi.models.shared.WindowsBasedSli;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringServicesServiceLevelObjectivesPatchRequest req = new MonitoringServicesServiceLevelObjectivesPatchRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceLevelObjective = new ServiceLevelObjective() {{
                    calendarPeriod = ServiceLevelObjectiveCalendarPeriodEnum.MONTH;
                    displayName = "corrupti";
                    goal = 2278.7;
                    name = "Grace Padberg PhD";
                    rollingPeriod = "architecto";
                    serviceLevelIndicator = new ServiceLevelIndicator() {{
                        basicSli = new BasicSli() {{
                            availability = new java.util.HashMap<String, Object>() {{
                                put("dolore", "sunt");
                                put("maiores", "neque");
                                put("odit", "earum");
                            }};
                            latency = new LatencyCriteria() {{
                                threshold = "veniam";
                            }};;
                            location = new String[]{{
                                add("eaque"),
                                add("exercitationem"),
                            }};
                            method = new String[]{{
                                add("nihil"),
                                add("ad"),
                            }};
                            version = new String[]{{
                                add("tenetur"),
                                add("quis"),
                            }};
                        }};;
                        requestBased = new RequestBasedSli() {{
                            distributionCut = new DistributionCut() {{
                                distributionFilter = "quibusdam";
                                range = new GoogleMonitoringV3Range() {{
                                    max = 3664.8;
                                    min = 3827.64;
                                }};;
                            }};;
                            goodTotalRatio = new TimeSeriesRatio() {{
                                badServiceFilter = "pariatur";
                                goodServiceFilter = "sit";
                                totalServiceFilter = "quidem";
                            }};;
                        }};;
                        windowsBased = new WindowsBasedSli() {{
                            goodBadMetricFilter = "repellendus";
                            goodTotalRatioThreshold = new PerformanceThreshold() {{
                                basicSliPerformance = new BasicSli() {{
                                    availability = new java.util.HashMap<String, Object>() {{
                                        put("id", "sapiente");
                                    }};
                                    latency = new LatencyCriteria() {{
                                        threshold = "sed";
                                    }};;
                                    location = new String[]{{
                                        add("repellat"),
                                        add("repudiandae"),
                                        add("architecto"),
                                        add("adipisci"),
                                    }};
                                    method = new String[]{{
                                        add("harum"),
                                        add("dolore"),
                                        add("voluptatibus"),
                                        add("iure"),
                                    }};
                                    version = new String[]{{
                                        add("minus"),
                                    }};
                                }};;
                                performance = new RequestBasedSli() {{
                                    distributionCut = new DistributionCut() {{
                                        distributionFilter = "soluta";
                                        range = new GoogleMonitoringV3Range() {{
                                            max = 6775.09;
                                            min = 2425.31;
                                        }};;
                                    }};;
                                    goodTotalRatio = new TimeSeriesRatio() {{
                                        badServiceFilter = "earum";
                                        goodServiceFilter = "praesentium";
                                        totalServiceFilter = "error";
                                    }};;
                                }};;
                                threshold = 2524.73;
                            }};;
                            metricMeanInRange = new MetricRange() {{
                                range = new GoogleMonitoringV3Range() {{
                                    max = 978.1;
                                    min = 6490.32;
                                }};;
                                timeSeries = "accusamus";
                            }};;
                            metricSumInRange = new MetricRange() {{
                                range = new GoogleMonitoringV3Range() {{
                                    max = 6875.89;
                                    min = 7691.56;
                                }};;
                                timeSeries = "doloremque";
                            }};;
                            windowPeriod = "expedita";
                        }};;
                    }};;
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("eaque", "deserunt");
                        put("aliquid", "excepturi");
                        put("magni", "tempora");
                    }};
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "sed";
                key = "accusamus";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "delectus";
                updateMask = "minus";
                uploadType = "quo";
                uploadProtocol = "quos";
            }};            

            MonitoringServicesServiceLevelObjectivesPatchResponse res = sdk.services.monitoringServicesServiceLevelObjectivesPatch(req, new MonitoringServicesServiceLevelObjectivesPatchSecurity() {{
                option1 = new MonitoringServicesServiceLevelObjectivesPatchSecurityOption1("asperiores", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.serviceLevelObjective != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
