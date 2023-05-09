# utils

## Overview

Utility methods.

### Available Operations

* [getDataMetrics](#getdatametrics) - Get metrics about the current data release
* [getDataStats](#getdatastats) - Get statistics about the current data release
* [getPing](#getping) - Ping service
* [getTherapeuticAreas](#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [getVersion](#getversion) - Get API version

## getDataMetrics

Returns the metrics about associations and evidences, divided by datasource, genes and so on.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataMetricsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDataMetricsResponse res = sdk.utils.getDataMetrics();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataStats

Returns the number of associations and evidences, divided by datasource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataStatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDataStatsResponse res = sdk.utils.getDataStats();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPing

Check if the API is up


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPingResponse res = sdk.utils.getPing();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTherapeuticAreas

Returns the list of therapeutic areas for the current data release


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTherapeuticAreasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTherapeuticAreasResponse res = sdk.utils.getTherapeuticAreas();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersion

Returns current API version.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVersionResponse res = sdk.utils.getVersion();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
