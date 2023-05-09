# admin

## Overview

Administrative, system management.

### Available Operations

* [anonymize](#anonymize) - Activate/deactivate anonymization for a source.
* [apiKeyInfo](#apikeyinfo) - Read API Key info.
* [apiStatus](#apistatus) - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* [apiUsage](#apiusage) - Print current API usage.
* [apiUsageHistory](#apiusagehistory) - Print historical API usage.
* [apiUsageHistoryAggregate](#apiusagehistoryaggregate) - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* [availableServices](#availableservices) - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* [learnable](#learnable) - Activate/deactivate learning from a source.
* [regions](#regions) - Print basic source statistics.
* [softwareVersion](#softwareversion) - Get the current software version
* [taxonomyClasses](#taxonomyclasses) - Print the taxonomy classes valid for the given classifier.

## anonymize

Activate/deactivate anonymization for a source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnonymizeRequest;
import org.openapis.openapi.models.operations.AnonymizeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnonymizeRequest req = new AnonymizeRequest(false, "unde", "nulla");            

            AnonymizeResponse res = sdk.admin.anonymize(req);

            if (res.apiKeyOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeyInfo

Read API Key info.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ApiKeyInfoResponse res = sdk.admin.apiKeyInfo();

            if (res.apiKeyOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiStatus

Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ApiStatusResponse res = sdk.admin.apiStatus();

            if (res.apiClassifiersStatusOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiUsage

Print current API usage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiUsageResponse;
import org.openapis.openapi.models.operations.ApiUsageSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiUsageResponse res = sdk.admin.apiUsage(new ApiUsageSecurity("vel") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.apiPeriodUsageOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiUsageHistory

Print historical API usage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiUsageHistoryResponse;
import org.openapis.openapi.models.operations.ApiUsageHistorySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiUsageHistoryResponse res = sdk.admin.apiUsageHistory(new ApiUsageHistorySecurity("error") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.apiUsageHistoryOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiUsageHistoryAggregate

Print historical API usage (in an aggregated view, by service, by day/hour/min).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiUsageHistoryAggregateResponse;
import org.openapis.openapi.models.operations.ApiUsageHistoryAggregateSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiUsageHistoryAggregateResponse res = sdk.admin.apiUsageHistoryAggregate(new ApiUsageHistoryAggregateSecurity("deserunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.apiUsageAggregatedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## availableServices

List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvailableServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AvailableServicesResponse res = sdk.admin.availableServices();

            if (res.apiServicesOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## learnable

Activate/deactivate learning from a source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LearnableRequest;
import org.openapis.openapi.models.operations.LearnableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            LearnableRequest req = new LearnableRequest(false, "magnam", "debitis");            

            LearnableResponse res = sdk.admin.learnable(req);

            if (res.apiKeyOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## regions

Print basic source statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegionsResponse res = sdk.admin.regions();

            if (res.regionOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## softwareVersion

Get the current software version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SoftwareVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SoftwareVersionResponse res = sdk.admin.softwareVersion();

            if (res.softwareVersionOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxonomyClasses

Print the taxonomy classes valid for the given classifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxonomyClassesRequest;
import org.openapis.openapi.models.operations.TaxonomyClassesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TaxonomyClassesRequest req = new TaxonomyClassesRequest("suscipit");            

            TaxonomyClassesResponse res = sdk.admin.taxonomyClasses(req);

            if (res.apiClassifierTaxonomyOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
