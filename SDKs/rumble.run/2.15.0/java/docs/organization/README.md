# organization

## Overview

Requires Organization Key

### Available Operations

* [clearBulkAssetTags](#clearbulkassettags) - Clear all tags across multiple assets based on a search query
* [createScan](#createscan) - Create a scan task for a given site
* [createSite](#createsite) - Create a new site
* [getAgent](#getagent) - Get details for a single agent
* [getAgents](#getagents) - Get all agents
* [getAsset](#getasset) - Get asset details
* [getAssets](#getassets) - Get all assets
* [getKey](#getkey) - Get API key details
* [getOrganization](#getorganization) - Get organization details
* [getService](#getservice) - Get service details
* [getServices](#getservices) - Get all services
* [getSite](#getsite) - Get site details
* [getSites](#getsites) - Get all sites
* [getTask](#gettask) - Get task details
* [getTaskChangeReport](#gettaskchangereport) - Returns a temporary task change report data url
* [getTaskLog](#gettasklog) - Returns a temporary task log data url
* [getTaskScanData](#gettaskscandata) - Returns a temporary task scan data url
* [getTasks](#gettasks) - Get all tasks (last 1000)
* [getWirelessLAN](#getwirelesslan) - Get wireless LAN details
* [getWirelessLANs](#getwirelesslans) - Get all wireless LANs
* [hideTask](#hidetask) - Signal that a completed task should be hidden
* [importNessusScanData](#importnessusscandata) - Import a Nessus scan data file into a site
* [importScanData](#importscandata) - Import a scan data file into a site
* [removeAgent](#removeagent) - Remove and uninstall an agent
* [removeAsset](#removeasset) - Remove an asset
* [removeKey](#removekey) - Remove the current API key
* [removeService](#removeservice) - Remove a service
* [removeSite](#removesite) - Remove a site and associated assets
* [removeWirelessLAN](#removewirelesslan) - Remove a wireless LAN
* [rotateKey](#rotatekey) - Rotate the API key secret and return the updated key
* [stopTask](#stoptask) - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* [updateAgentSite](#updateagentsite) - Update the site associated with agent
* [updateAssetComments](#updateassetcomments) - Update asset comments
* [updateAssetTags](#updateassettags) - Update asset tags
* [updateBulkAssetTags](#updatebulkassettags) - Update tags across multiple assets based on a search query
* [updateOrganization](#updateorganization) - Update organization details
* [updateSite](#updatesite) - Update a site definition
* [updateTask](#updatetask) - Update task parameters
* [upgradeAgent](#upgradeagent) - Force an agent to update and restart

## clearBulkAssetTags

Clear all tags across multiple assets based on a search query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearBulkAssetTagsResponse;
import org.openapis.openapi.models.operations.ClearBulkAssetTagsSecurity;
import org.openapis.openapi.models.shared.Search;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Search req = new Search("alive:true and os:windows");            

            ClearBulkAssetTagsResponse res = sdk.organization.clearBulkAssetTags(req, new ClearBulkAssetTagsSecurity("culpa") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScan

Create a scan task for a given site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScanRequest;
import org.openapis.openapi.models.operations.CreateScanResponse;
import org.openapis.openapi.models.operations.CreateScanSecurity;
import org.openapis.openapi.models.shared.ScanOptions;
import org.openapis.openapi.models.shared.ScanOptionsScanFrequencyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateScanRequest req = new CreateScanRequest("ae8d6786-4dbb-4675-bd5e-60b375ed4f6f") {{
                scanOptions = new ScanOptions("defaults") {{
                    agent = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                    excludes = "quidem";
                    hostPing = "false";
                    maxAttempts = "3";
                    maxGroupSize = "4096";
                    maxHostRate = "100";
                    maxSockets = "500";
                    maxTtl = "255";
                    nameservers = "8.8.8.8";
                    passes = "3";
                    probes = "arp,bacnet,connect,dns,echo,ike,ipmi,mdns,memcache,mssql,natpmp,netbios,pca,rdns,rpcbind,sip,snmp,ssdp,syn,ubnt,wlan-list,wsd";
                    rate = "10000";
                    scanDescription = "Scan of Wireless";
                    scanFrequency = ScanOptionsScanFrequencyEnum.CONTINUOUS;
                    scanGracePeriod = "4";
                    scanName = "My Scan";
                    scanStart = "0";
                    scanTags = "owner=IT location=Texas";
                    screenshots = "true";
                    subnetPing = "true";
                    subnetPingNetSize = "256";
                    subnetPingSampleRate = "3";
                    tcpExcludes = "9500";
                    tcpPorts = "1-1000,5000-6000";
                }};;
            }};            

            CreateScanResponse res = sdk.organization.createScan(req, new CreateScanSecurity("necessitatibus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSite

Create a new site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSiteResponse;
import org.openapis.openapi.models.operations.CreateSiteSecurity;
import org.openapis.openapi.models.shared.SiteOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SiteOptions req = new SiteOptions("New Site") {{
                description = "County Office";
                excludes = "192.168.10.1";
                scope = "192.168.10.0/24";
            }};            

            CreateSiteResponse res = sdk.organization.createSite(req, new CreateSiteSecurity("dolore") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAgent

Get details for a single agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgentRequest;
import org.openapis.openapi.models.operations.GetAgentResponse;
import org.openapis.openapi.models.operations.GetAgentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAgentRequest req = new GetAgentRequest("1f33317f-e35b-460e-b1ea-426555ba3c28");            

            GetAgentResponse res = sdk.organization.getAgent(req, new GetAgentSecurity("in") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.agent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAgents

Get all agents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAgentsResponse;
import org.openapis.openapi.models.operations.GetAgentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAgentsResponse res = sdk.organization.getAgents(new GetAgentsSecurity("dolore") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.agents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAsset

Get asset details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetRequest;
import org.openapis.openapi.models.operations.GetAssetResponse;
import org.openapis.openapi.models.operations.GetAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetRequest req = new GetAssetRequest("4ed53b88-f3a8-4d8f-9c0b-2f2fb7b194a2");            

            GetAssetResponse res = sdk.organization.getAsset(req, new GetAssetSecurity("in") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.asset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssets

Get all assets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetsRequest;
import org.openapis.openapi.models.operations.GetAssetsResponse;
import org.openapis.openapi.models.operations.GetAssetsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetsRequest req = new GetAssetsRequest() {{
                search = "commodi";
            }};            

            GetAssetsResponse res = sdk.organization.getAssets(req, new GetAssetsSecurity("quidem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.assets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKey

Get API key details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeyResponse;
import org.openapis.openapi.models.operations.GetKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeyResponse res = sdk.organization.getKey(new GetKeySecurity("explicabo") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganization

Get organization details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationResponse;
import org.openapis.openapi.models.operations.GetOrganizationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganizationResponse res = sdk.organization.getOrganization(new GetOrganizationSecurity("voluptas") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getService

Get service details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceRequest;
import org.openapis.openapi.models.operations.GetServiceResponse;
import org.openapis.openapi.models.operations.GetServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServiceRequest req = new GetServiceRequest("916fe1f0-8f42-494e-b698-f447f603e8b4");            

            GetServiceResponse res = sdk.organization.getService(req, new GetServiceSecurity("incidunt") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## getServices

Get all services

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesRequest;
import org.openapis.openapi.models.operations.GetServicesResponse;
import org.openapis.openapi.models.operations.GetServicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetServicesRequest req = new GetServicesRequest() {{
                search = "ipsam";
            }};            

            GetServicesResponse res = sdk.organization.getServices(req, new GetServicesSecurity("debitis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.services != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSite

Get site details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteRequest;
import org.openapis.openapi.models.operations.GetSiteResponse;
import org.openapis.openapi.models.operations.GetSiteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSiteRequest req = new GetSiteRequest("80ca55ef-d20e-4457-a185-8b6a89fbe3a5");            

            GetSiteResponse res = sdk.organization.getSite(req, new GetSiteSecurity("officia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSites

Get all sites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitesResponse;
import org.openapis.openapi.models.operations.GetSitesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSitesResponse res = sdk.organization.getSites(new GetSitesSecurity("dolorum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.sites != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTask

Get task details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskRequest;
import org.openapis.openapi.models.operations.GetTaskResponse;
import org.openapis.openapi.models.operations.GetTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskRequest req = new GetTaskRequest("8e4824d0-ab40-4750-88e5-1862065e904f");            

            GetTaskResponse res = sdk.organization.getTask(req, new GetTaskSecurity("dolorem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskChangeReport

Returns a temporary task change report data url

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskChangeReportRequest;
import org.openapis.openapi.models.operations.GetTaskChangeReportResponse;
import org.openapis.openapi.models.operations.GetTaskChangeReportSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskChangeReportRequest req = new GetTaskChangeReportRequest("b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50");            

            GetTaskChangeReportResponse res = sdk.organization.getTaskChangeReport(req, new GetTaskChangeReportSecurity("quisquam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskLog

Returns a temporary task log data url

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskLogRequest;
import org.openapis.openapi.models.operations.GetTaskLogResponse;
import org.openapis.openapi.models.operations.GetTaskLogSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskLogRequest req = new GetTaskLogRequest("e187f86b-c173-4d68-9eee-9526f8d986e8");            

            GetTaskLogResponse res = sdk.organization.getTaskLog(req, new GetTaskLogSecurity("atque") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaskScanData

Returns a temporary task scan data url

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaskScanDataRequest;
import org.openapis.openapi.models.operations.GetTaskScanDataResponse;
import org.openapis.openapi.models.operations.GetTaskScanDataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaskScanDataRequest req = new GetTaskScanDataRequest("1ead4f0e-1012-4563-b94e-29e973e922a5");            

            GetTaskScanDataResponse res = sdk.organization.getTaskScanData(req, new GetTaskScanDataSecurity("reprehenderit") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTasks

Get all tasks (last 1000)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTasksRequest;
import org.openapis.openapi.models.operations.GetTasksResponse;
import org.openapis.openapi.models.operations.GetTasksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTasksRequest req = new GetTasksRequest() {{
                search = "error";
                status = "illo";
            }};            

            GetTasksResponse res = sdk.organization.getTasks(req, new GetTasksSecurity("corporis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.tasks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWirelessLAN

Get wireless LAN details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWirelessLANRequest;
import org.openapis.openapi.models.operations.GetWirelessLANResponse;
import org.openapis.openapi.models.operations.GetWirelessLANSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWirelessLANRequest req = new GetWirelessLANRequest("be3e0608-07e2-4b6e-bab8-845f0597a60f");            

            GetWirelessLANResponse res = sdk.organization.getWirelessLAN(req, new GetWirelessLANSecurity("reiciendis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.wireless != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWirelessLANs

Get all wireless LANs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWirelessLANsRequest;
import org.openapis.openapi.models.operations.GetWirelessLANsResponse;
import org.openapis.openapi.models.operations.GetWirelessLANsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWirelessLANsRequest req = new GetWirelessLANsRequest() {{
                search = "dolores";
            }};            

            GetWirelessLANsResponse res = sdk.organization.getWirelessLANs(req, new GetWirelessLANsSecurity("id") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.wirelesses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hideTask

Signal that a completed task should be hidden

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HideTaskRequest;
import org.openapis.openapi.models.operations.HideTaskResponse;
import org.openapis.openapi.models.operations.HideTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HideTaskRequest req = new HideTaskRequest("54a31e94-764a-43e8-a5e7-956f9251a5a9");            

            HideTaskResponse res = sdk.organization.hideTask(req, new HideTaskSecurity("possimus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importNessusScanData

Import a Nessus scan data file into a site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportNessusScanDataRequest;
import org.openapis.openapi.models.operations.ImportNessusScanDataResponse;
import org.openapis.openapi.models.operations.ImportNessusScanDataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportNessusScanDataRequest req = new ImportNessusScanDataRequest("a660ff57-bfaa-4d4f-9efc-1b4512c10326") {{
                requestBody = "eius".getBytes();
            }};            

            ImportNessusScanDataResponse res = sdk.organization.importNessusScanData(req, new ImportNessusScanDataSecurity("rem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importScanData

Import a scan data file into a site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportScanDataRequest;
import org.openapis.openapi.models.operations.ImportScanDataResponse;
import org.openapis.openapi.models.operations.ImportScanDataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportScanDataRequest req = new ImportScanDataRequest("dc2f6151-99eb-4fd0-a9fe-6c632ca3aed0") {{
                requestBody = "quasi".getBytes();
            }};            

            ImportScanDataResponse res = sdk.organization.importScanData(req, new ImportScanDataSecurity("et") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAgent

Remove and uninstall an agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAgentRequest;
import org.openapis.openapi.models.operations.RemoveAgentResponse;
import org.openapis.openapi.models.operations.RemoveAgentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAgentRequest req = new RemoveAgentRequest("7996312f-de04-4771-b78f-f61d01747636");            

            RemoveAgentResponse res = sdk.organization.removeAgent(req, new RemoveAgentSecurity("ipsa") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeAsset

Remove an asset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveAssetRequest;
import org.openapis.openapi.models.operations.RemoveAssetResponse;
import org.openapis.openapi.models.operations.RemoveAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveAssetRequest req = new RemoveAssetRequest("a15db6a6-6065-49a1-adea-ab5851d6c645");            

            RemoveAssetResponse res = sdk.organization.removeAsset(req, new RemoveAssetSecurity("expedita") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeKey

Remove the current API key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveKeyResponse;
import org.openapis.openapi.models.operations.RemoveKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveKeyResponse res = sdk.organization.removeKey(new RemoveKeySecurity("voluptatem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeService

Remove a service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveServiceRequest;
import org.openapis.openapi.models.operations.RemoveServiceResponse;
import org.openapis.openapi.models.operations.RemoveServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveServiceRequest req = new RemoveServiceRequest("8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d");            

            RemoveServiceResponse res = sdk.organization.removeService(req, new RemoveServiceSecurity("totam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeSite

Remove a site and associated assets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveSiteRequest;
import org.openapis.openapi.models.operations.RemoveSiteResponse;
import org.openapis.openapi.models.operations.RemoveSiteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveSiteRequest req = new RemoveSiteRequest("cdb5a341-8143-4010-8218-13d5208ece7e");            

            RemoveSiteResponse res = sdk.organization.removeSite(req, new RemoveSiteSecurity("sed") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeWirelessLAN

Remove a wireless LAN

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveWirelessLANRequest;
import org.openapis.openapi.models.operations.RemoveWirelessLANResponse;
import org.openapis.openapi.models.operations.RemoveWirelessLANSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveWirelessLANRequest req = new RemoveWirelessLANRequest("53b66845-1c6c-46e2-85e1-6deab3fec957");            

            RemoveWirelessLANResponse res = sdk.organization.removeWirelessLAN(req, new RemoveWirelessLANSecurity("blanditiis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rotateKey

Rotate the API key secret and return the updated key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotateKeyResponse;
import org.openapis.openapi.models.operations.RotateKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RotateKeyResponse res = sdk.organization.rotateKey(new RotateKeySecurity("officia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTask

Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTaskRequest;
import org.openapis.openapi.models.operations.StopTaskResponse;
import org.openapis.openapi.models.operations.StopTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopTaskRequest req = new StopTaskRequest("64584273-a841-48d1-a230-9fb0929921ae");            

            StopTaskResponse res = sdk.organization.stopTask(req, new StopTaskSecurity("voluptatibus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAgentSite

Update the site associated with agent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAgentSiteRequest;
import org.openapis.openapi.models.operations.UpdateAgentSiteResponse;
import org.openapis.openapi.models.operations.UpdateAgentSiteSecurity;
import org.openapis.openapi.models.shared.AgentSiteID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAgentSiteRequest req = new UpdateAgentSiteRequest(                new AgentSiteID("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8");, "b9f58c4d-86e6-48e4-be05-6013f59da757");            

            UpdateAgentSiteResponse res = sdk.organization.updateAgentSite(req, new UpdateAgentSiteSecurity("est") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.agent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssetComments

Update asset comments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssetCommentsRequest;
import org.openapis.openapi.models.operations.UpdateAssetCommentsResponse;
import org.openapis.openapi.models.operations.UpdateAssetCommentsSecurity;
import org.openapis.openapi.models.shared.AssetComments;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAssetCommentsRequest req = new UpdateAssetCommentsRequest(                new AssetComments("Sales Laptop");, "59ecfef6-6ef1-4caa-b383-c2beb477373c");            

            UpdateAssetCommentsResponse res = sdk.organization.updateAssetComments(req, new UpdateAssetCommentsSecurity("deleniti") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.asset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssetTags

Update asset tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssetTagsRequest;
import org.openapis.openapi.models.operations.UpdateAssetTagsResponse;
import org.openapis.openapi.models.operations.UpdateAssetTagsSecurity;
import org.openapis.openapi.models.shared.AssetTags;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAssetTagsRequest req = new UpdateAssetTagsRequest(                new AssetTags("ThisTag=Value -OldTag");, "d72f64d1-db1f-42c4-b106-61e96349e1cf");            

            UpdateAssetTagsResponse res = sdk.organization.updateAssetTags(req, new UpdateAssetTagsSecurity("iste") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.asset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBulkAssetTags

Update tags across multiple assets based on a search query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBulkAssetTagsResponse;
import org.openapis.openapi.models.operations.UpdateBulkAssetTagsSecurity;
import org.openapis.openapi.models.shared.AssetTagsWithSearch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AssetTagsWithSearch req = new AssetTagsWithSearch("alive:true and os:windows", "ThisTag=Value -OldTag");            

            UpdateBulkAssetTagsResponse res = sdk.organization.updateBulkAssetTags(req, new UpdateBulkAssetTagsSecurity("itaque") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganization

Update organization details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationResponse;
import org.openapis.openapi.models.operations.UpdateOrganizationSecurity;
import org.openapis.openapi.models.shared.OrgOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OrgOptions req = new OrgOptions() {{
                description = "Wobbly Widgets, Inc.";
                expirationAssetsOffline = "365";
                expirationAssetsStale = "365";
                expirationScans = "365";
                exportToken = "ETXXXXXXXXXXXXXXXX";
                name = "My Organization";
                parentId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                project = "alias";
            }};            

            UpdateOrganizationResponse res = sdk.organization.updateOrganization(req, new UpdateOrganizationSecurity("nisi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.organization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSite

Update a site definition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSiteRequest;
import org.openapis.openapi.models.operations.UpdateSiteResponse;
import org.openapis.openapi.models.operations.UpdateSiteSecurity;
import org.openapis.openapi.models.shared.SiteOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSiteRequest req = new UpdateSiteRequest(                new SiteOptions("New Site") {{
                                description = "County Office";
                                excludes = "192.168.10.1";
                                scope = "192.168.10.0/24";
                            }};, "e3a43700-0ae6-4b6b-89b8-f759eac55a97");            

            UpdateSiteResponse res = sdk.organization.updateSite(req, new UpdateSiteSecurity("labore") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTask

Update task parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaskRequest;
import org.openapis.openapi.models.operations.UpdateTaskResponse;
import org.openapis.openapi.models.operations.UpdateTaskSecurity;
import org.openapis.openapi.models.shared.Task;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaskRequest req = new UpdateTaskRequest(                new Task("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8") {{
                                agentId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                clientId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                createdAt = 1576300370L;
                                createdBy = "user@example.com";
                                createdByUserId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                cruncherId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                description = "Scan the headquarters hourly";
                                error = "agent unavailable";
                                hidden = false;
                                name = "Hourly Scan";
                                organizationId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                params = new java.util.HashMap<String, String>() {{
                                    put("vero", "consectetur");
                                }};
                                parentId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                recur = false;
                                recurFrequency = "hour";
                                recurLast = 1576300370L;
                                recurLastTaskId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                recurNext = 1576300370L;
                                siteId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                startTime = 1576300370L;
                                stats = new java.util.HashMap<String, Object>() {{
                                    put("inventore", "dolorem");
                                }};
                                status = "processed";
                                templateId = "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8";
                                type = "scan";
                                updatedAt = 1576300370L;
                            }};, "52965bb8-a720-4261-9435-e139dbc2259b");            

            UpdateTaskResponse res = sdk.organization.updateTask(req, new UpdateTaskSecurity("dicta") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.task != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upgradeAgent

Force an agent to update and restart

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpgradeAgentRequest;
import org.openapis.openapi.models.operations.UpgradeAgentResponse;
import org.openapis.openapi.models.operations.UpgradeAgentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpgradeAgentRequest req = new UpgradeAgentRequest("abda8c07-0e10-484c-b067-2d1ad879eeb9");            

            UpgradeAgentResponse res = sdk.organization.upgradeAgent(req, new UpgradeAgentSecurity("ea") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
