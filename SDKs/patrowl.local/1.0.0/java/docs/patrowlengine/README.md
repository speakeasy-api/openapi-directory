# patrowlEngine

## Overview

SSLScan API documentation

Find out more
<https://github.com/Patrowl/PatrowlDocs>
### Available Operations

* [cleanScanPage](#cleanscanpage) - Clean scan
* [cleanScansPage](#cleanscanspage) - Clean all scans
* [getFindingPage](#getfindingpage) - Get findings on finished scans
* [startScanPage](#startscanpage) - Start a new scan
* [statusScanPage](#statusscanpage) - Status of a scan
* [statusScansPage](#statusscanspage) - Status on all scans
* [stopScanPage](#stopscanpage) - Stop a scan
* [stopScansPage](#stopscanspage) - Stop all scans
* [getDefaultPage](#getdefaultpage) - Index page
* [getInfoPage](#getinfopage) - Engine info page
* [getLivenessPage](#getlivenesspage) - Liveness page
* [getReadinessPage](#getreadinesspage) - Readiness page
* [getTestPage](#gettestpage) - Test page
* [reloadConfigurationPage](#reloadconfigurationpage) - Configuration reloading page

## cleanScanPage

Clean scan identified by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CleanScanPageRequest;
import org.openapis.openapi.models.operations.CleanScanPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CleanScanPageRequest req = new CleanScanPageRequest(592845L);            

            CleanScanPageResponse res = sdk.patrowlEngine.cleanScanPage(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cleanScansPage

Clean all current scans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CleanScansPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CleanScansPageResponse res = sdk.patrowlEngine.cleanScansPage();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindingPage

Get findings on finished scans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindingPageRequest;
import org.openapis.openapi.models.operations.GetFindingPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFindingPageRequest req = new GetFindingPageRequest(715190L);            

            GetFindingPageResponse res = sdk.patrowlEngine.getFindingPage(req);

            if (res.findings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startScanPage

Start a new scan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartScanPageResponse;
import org.openapis.openapi.models.shared.ScanDefinition;
import org.openapis.openapi.models.shared.ScanDefinitionAssets;
import org.openapis.openapi.models.shared.ScanDefinitionAssetsCriticityEnum;
import org.openapis.openapi.models.shared.ScanDefinitionAssetsDatatypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScanDefinition req = new ScanDefinition() {{
                assets = new org.openapis.openapi.models.shared.ScanDefinitionAssets[]{{
                    add(new ScanDefinitionAssets() {{
                        criticity = ScanDefinitionAssetsCriticityEnum.MEDIUM;
                        datatype = ScanDefinitionAssetsDatatypeEnum.PATH;
                        id = "3";
                        value = "8.8.8.8";
                    }}),
                    add(new ScanDefinitionAssets() {{
                        criticity = ScanDefinitionAssetsCriticityEnum.MEDIUM;
                        datatype = ScanDefinitionAssetsDatatypeEnum.PATH;
                        id = "3";
                        value = "8.8.8.8";
                    }}),
                    add(new ScanDefinitionAssets() {{
                        criticity = ScanDefinitionAssetsCriticityEnum.MEDIUM;
                        datatype = ScanDefinitionAssetsDatatypeEnum.KEYWORD;
                        id = "3";
                        value = "8.8.8.8";
                    }}),
                    add(new ScanDefinitionAssets() {{
                        criticity = ScanDefinitionAssetsCriticityEnum.MEDIUM;
                        datatype = ScanDefinitionAssetsDatatypeEnum.DOMAIN;
                        id = "3";
                        value = "8.8.8.8";
                    }}),
                }};
                options = new java.util.HashMap<String, Object>() {{
                    put("magnam", "debitis");
                    put("ipsa", "delectus");
                }};
                scanId = 1L;
            }};            

            StartScanPageResponse res = sdk.patrowlEngine.startScanPage(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## statusScanPage

Status of a scan identified by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusScanPageRequest;
import org.openapis.openapi.models.operations.StatusScanPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StatusScanPageRequest req = new StatusScanPageRequest(272656L);            

            StatusScanPageResponse res = sdk.patrowlEngine.statusScanPage(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## statusScansPage

Status all current scans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusScansPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StatusScansPageResponse res = sdk.patrowlEngine.statusScansPage();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopScanPage

Stop a scan identified by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopScanPageRequest;
import org.openapis.openapi.models.operations.StopScanPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopScanPageRequest req = new StopScanPageRequest(383441L);            

            StopScanPageResponse res = sdk.patrowlEngine.stopScanPage(req);

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopScansPage

Stop all current scans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopScansPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopScansPageResponse res = sdk.patrowlEngine.stopScansPage();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDefaultPage

Return index page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDefaultPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDefaultPageResponse res = sdk.patrowlEngine.getDefaultPage();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInfoPage

Return information on engine.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfoPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInfoPageResponse res = sdk.patrowlEngine.getInfoPage();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLivenessPage

Return liveness page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLivenessPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLivenessPageResponse res = sdk.patrowlEngine.getLivenessPage();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReadinessPage

Return liveness page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadinessPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReadinessPageResponse res = sdk.patrowlEngine.getReadinessPage();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTestPage

Return test page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTestPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTestPageResponse res = sdk.patrowlEngine.getTestPage();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reloadConfigurationPage

Reload the configuration file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReloadConfigurationPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReloadConfigurationPageResponse res = sdk.patrowlEngine.reloadConfigurationPage();

            if (res.apiResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
