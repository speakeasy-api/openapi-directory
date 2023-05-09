# Organization

## Overview

Requires Organization Key

### Available Operations

* [ClearBulkAssetTags](#clearbulkassettags) - Clear all tags across multiple assets based on a search query
* [CreateScan](#createscan) - Create a scan task for a given site
* [CreateSite](#createsite) - Create a new site
* [GetAgent](#getagent) - Get details for a single agent
* [GetAgents](#getagents) - Get all agents
* [GetAsset](#getasset) - Get asset details
* [GetAssets](#getassets) - Get all assets
* [GetKey](#getkey) - Get API key details
* [GetOrganization](#getorganization) - Get organization details
* [GetService](#getservice) - Get service details
* [GetServices](#getservices) - Get all services
* [GetSite](#getsite) - Get site details
* [GetSites](#getsites) - Get all sites
* [GetTask](#gettask) - Get task details
* [GetTaskChangeReport](#gettaskchangereport) - Returns a temporary task change report data url
* [GetTaskLog](#gettasklog) - Returns a temporary task log data url
* [GetTaskScanData](#gettaskscandata) - Returns a temporary task scan data url
* [GetTasks](#gettasks) - Get all tasks (last 1000)
* [GetWirelessLAN](#getwirelesslan) - Get wireless LAN details
* [GetWirelessLANs](#getwirelesslans) - Get all wireless LANs
* [HideTask](#hidetask) - Signal that a completed task should be hidden
* [ImportNessusScanData](#importnessusscandata) - Import a Nessus scan data file into a site
* [ImportScanData](#importscandata) - Import a scan data file into a site
* [RemoveAgent](#removeagent) - Remove and uninstall an agent
* [RemoveAsset](#removeasset) - Remove an asset
* [RemoveKey](#removekey) - Remove the current API key
* [RemoveService](#removeservice) - Remove a service
* [RemoveSite](#removesite) - Remove a site and associated assets
* [RemoveWirelessLAN](#removewirelesslan) - Remove a wireless LAN
* [RotateKey](#rotatekey) - Rotate the API key secret and return the updated key
* [StopTask](#stoptask) - Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
* [UpdateAgentSite](#updateagentsite) - Update the site associated with agent
* [UpdateAssetComments](#updateassetcomments) - Update asset comments
* [UpdateAssetTags](#updateassettags) - Update asset tags
* [UpdateBulkAssetTags](#updatebulkassettags) - Update tags across multiple assets based on a search query
* [UpdateOrganization](#updateorganization) - Update organization details
* [UpdateSite](#updatesite) - Update a site definition
* [UpdateTask](#updatetask) - Update task parameters
* [UpgradeAgent](#upgradeagent) - Force an agent to update and restart

## ClearBulkAssetTags

Clear all tags across multiple assets based on a search query

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.ClearBulkAssetTags(ctx, shared.Search{
        Search: "alive:true and os:windows",
    }, operations.ClearBulkAssetTagsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusMessage != nil {
        // handle response
    }
}
```

## CreateScan

Create a scan task for a given site

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.CreateScan(ctx, operations.CreateScanRequest{
        ScanOptions: &shared.ScanOptions{
            Agent: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            Excludes: sdk.String("voluptatum"),
            HostPing: sdk.String("false"),
            MaxAttempts: sdk.String("3"),
            MaxGroupSize: sdk.String("4096"),
            MaxHostRate: sdk.String("100"),
            MaxSockets: sdk.String("500"),
            MaxTTL: sdk.String("255"),
            Nameservers: sdk.String("8.8.8.8"),
            Passes: sdk.String("3"),
            Probes: sdk.String("arp,bacnet,connect,dns,echo,ike,ipmi,mdns,memcache,mssql,natpmp,netbios,pca,rdns,rpcbind,sip,snmp,ssdp,syn,ubnt,wlan-list,wsd"),
            Rate: sdk.String("10000"),
            ScanDescription: sdk.String("Scan of Wireless"),
            ScanFrequency: shared.ScanOptionsScanFrequencyEnumHourly.ToPointer(),
            ScanGracePeriod: sdk.String("4"),
            ScanName: sdk.String("My Scan"),
            ScanStart: sdk.String("0"),
            ScanTags: sdk.String("owner=IT location=Texas"),
            Screenshots: sdk.String("true"),
            SubnetPing: sdk.String("true"),
            SubnetPingNetSize: sdk.String("256"),
            SubnetPingSampleRate: sdk.String("3"),
            Targets: "defaults",
            TCPExcludes: sdk.String("9500"),
            TCPPorts: sdk.String("1-1000,5000-6000"),
        },
        SiteID: "d68ea19f-1d17-4051-b39d-08086a184039",
    }, operations.CreateScanSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## CreateSite

Create a new site

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.CreateSite(ctx, shared.SiteOptions{
        Description: sdk.String("County Office"),
        Excludes: sdk.String("192.168.10.1"),
        Name: "New Site",
        Scope: sdk.String("192.168.10.0/24"),
    }, operations.CreateSiteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## GetAgent

Get details for a single agent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetAgent(ctx, operations.GetAgentRequest{
        AgentID: "4c26071f-93f5-4f06-82da-c7af515cc413",
    }, operations.GetAgentSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Agent != nil {
        // handle response
    }
}
```

## GetAgents

Get all agents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetAgents(ctx, operations.GetAgentsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Agents != nil {
        // handle response
    }
}
```

## GetAsset

Get asset details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetAsset(ctx, operations.GetAssetRequest{
        AssetID: "aa63aae8-d678-464d-bb67-5fd5e60b375e",
    }, operations.GetAssetSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```

## GetAssets

Get all assets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetAssets(ctx, operations.GetAssetsRequest{
        Search: sdk.String("facere"),
    }, operations.GetAssetsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assets != nil {
        // handle response
    }
}
```

## GetKey

Get API key details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetKey(ctx, operations.GetKeySecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## GetOrganization

Get organization details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetOrganization(ctx, operations.GetOrganizationSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## GetService

Get service details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetService(ctx, operations.GetServiceRequest{
        ServiceID: "4f6fbee4-1f33-4317-be35-b60eb1ea4265",
    }, operations.GetServiceSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## GetServices

Get all services

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetServices(ctx, operations.GetServicesRequest{
        Search: sdk.String("voluptas"),
    }, operations.GetServicesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Services != nil {
        // handle response
    }
}
```

## GetSite

Get site details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetSite(ctx, operations.GetSiteRequest{
        SiteID: "5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2",
    }, operations.GetSiteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## GetSites

Get all sites

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetSites(ctx, operations.GetSitesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sites != nil {
        // handle response
    }
}
```

## GetTask

Get task details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetTask(ctx, operations.GetTaskRequest{
        TaskID: "fb7b194a-276b-4269-96fe-1f08f4294e36",
    }, operations.GetTaskSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## GetTaskChangeReport

Returns a temporary task change report data url

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetTaskChangeReport(ctx, operations.GetTaskChangeReportRequest{
        TaskID: "98f447f6-03e8-4b44-9e80-ca55efd20e45",
    }, operations.GetTaskChangeReportSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTaskLog

Returns a temporary task log data url

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetTaskLog(ctx, operations.GetTaskLogRequest{
        TaskID: "7e1858b6-a89f-4be3-a5aa-8e4824d0ab40",
    }, operations.GetTaskLogSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTaskScanData

Returns a temporary task scan data url

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetTaskScanData(ctx, operations.GetTaskScanDataRequest{
        TaskID: "75088e51-8620-465e-904f-3b1194b8abf6",
    }, operations.GetTaskScanDataSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTasks

Get all tasks (last 1000)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetTasks(ctx, operations.GetTasksRequest{
        Search: sdk.String("alias"),
        Status: sdk.String("amet"),
    }, operations.GetTasksSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tasks != nil {
        // handle response
    }
}
```

## GetWirelessLAN

Get wireless LAN details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetWirelessLAN(ctx, operations.GetWirelessLANRequest{
        WirelessID: "a79f9dfe-0ab7-4da8-a50c-e187f86bc173",
    }, operations.GetWirelessLANSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wireless != nil {
        // handle response
    }
}
```

## GetWirelessLANs

Get all wireless LANs

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.GetWirelessLANs(ctx, operations.GetWirelessLANsRequest{
        Search: sdk.String("assumenda"),
    }, operations.GetWirelessLANsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Wirelesses != nil {
        // handle response
    }
}
```

## HideTask

Signal that a completed task should be hidden

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.HideTask(ctx, operations.HideTaskRequest{
        TaskID: "689eee95-26f8-4d98-ae88-1ead4f0e1012",
    }, operations.HideTaskSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ImportNessusScanData

Import a Nessus scan data file into a site

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.ImportNessusScanData(ctx, operations.ImportNessusScanDataRequest{
        RequestBody: []byte("enim"),
        SiteID: "63f94e29-e973-4e92-aa57-a15be3e06080",
    }, operations.ImportNessusScanDataSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## ImportScanData

Import a scan data file into a site

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.ImportScanData(ctx, operations.ImportScanDataRequest{
        RequestBody: []byte("molestiae"),
        SiteID: "e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9",
    }, operations.ImportScanDataSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## RemoveAgent

Remove and uninstall an agent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.RemoveAgent(ctx, operations.RemoveAgentRequest{
        AgentID: "4764a3e8-65e7-4956-b925-1a5a9da660ff",
    }, operations.RemoveAgentSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveAsset

Remove an asset

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.RemoveAsset(ctx, operations.RemoveAssetRequest{
        AssetID: "57bfaad4-f9ef-4c1b-8512-c1032648dc2f",
    }, operations.RemoveAssetSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveKey

Remove the current API key

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.RemoveKey(ctx, operations.RemoveKeySecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveService

Remove a service

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.RemoveService(ctx, operations.RemoveServiceRequest{
        ServiceID: "615199eb-fd0e-49fe-ac63-2ca3aed01179",
    }, operations.RemoveServiceSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveSite

Remove a site and associated assets

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.RemoveSite(ctx, operations.RemoveSiteRequest{
        SiteID: "96312fde-0477-4177-8ff6-1d017476360a",
    }, operations.RemoveSiteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveWirelessLAN

Remove a wireless LAN

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.RemoveWirelessLAN(ctx, operations.RemoveWirelessLANRequest{
        WirelessID: "15db6a66-0659-4a1a-9eaa-b5851d6c645b",
    }, operations.RemoveWirelessLANSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RotateKey

Rotate the API key secret and return the updated key

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.RotateKey(ctx, operations.RotateKeySecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## StopTask

Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.StopTask(ctx, operations.StopTaskRequest{
        TaskID: "08b61891-baa0-4fe1-ade0-08e6f8c5f350",
    }, operations.StopTaskSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateAgentSite

Update the site associated with agent

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateAgentSite(ctx, operations.UpdateAgentSiteRequest{
        AgentSiteID: shared.AgentSiteID{
            SiteID: "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
        },
        AgentID: "d8cdb5a3-4181-4430-9042-1813d5208ece",
    }, operations.UpdateAgentSiteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Agent != nil {
        // handle response
    }
}
```

## UpdateAssetComments

Update asset comments

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateAssetComments(ctx, operations.UpdateAssetCommentsRequest{
        AssetComments: shared.AssetComments{
            Comments: "Sales Laptop",
        },
        AssetID: "7e253b66-8451-4c6c-ae20-5e16deab3fec",
    }, operations.UpdateAssetCommentsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```

## UpdateAssetTags

Update asset tags

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateAssetTags(ctx, operations.UpdateAssetTagsRequest{
        AssetTags: shared.AssetTags{
            Tags: "ThisTag=Value -OldTag",
        },
        AssetID: "9578a645-8427-43a8-818d-162309fb0929",
    }, operations.UpdateAssetTagsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```

## UpdateBulkAssetTags

Update tags across multiple assets based on a search query

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateBulkAssetTags(ctx, shared.AssetTagsWithSearch{
        Search: "alive:true and os:windows",
        Tags: "ThisTag=Value -OldTag",
    }, operations.UpdateBulkAssetTagsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusMessage != nil {
        // handle response
    }
}
```

## UpdateOrganization

Update organization details

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateOrganization(ctx, shared.OrgOptions{
        Description: sdk.String("Wobbly Widgets, Inc."),
        ExpirationAssetsOffline: sdk.String("365"),
        ExpirationAssetsStale: sdk.String("365"),
        ExpirationScans: sdk.String("365"),
        ExportToken: sdk.String("ETXXXXXXXXXXXXXXXX"),
        Name: sdk.String("My Organization"),
        ParentID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
        Project: sdk.String("iste"),
    }, operations.UpdateOrganizationSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```

## UpdateSite

Update a site definition

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateSite(ctx, operations.UpdateSiteRequest{
        SiteOptions: shared.SiteOptions{
            Description: sdk.String("County Office"),
            Excludes: sdk.String("192.168.10.1"),
            Name: "New Site",
            Scope: sdk.String("192.168.10.0/24"),
        },
        SiteID: "21aefb9f-58c4-4d86-a68e-4be056013f59",
    }, operations.UpdateSiteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## UpdateTask

Update task parameters

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateTask(ctx, operations.UpdateTaskRequest{
        Task: shared.Task{
            AgentID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            ClientID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            CreatedAt: sdk.Int64(1576300370),
            CreatedBy: sdk.String("user@example.com"),
            CreatedByUserID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            CruncherID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            Description: sdk.String("Scan the headquarters hourly"),
            Error: sdk.String("agent unavailable"),
            Hidden: sdk.Bool(false),
            ID: "e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8",
            Name: sdk.String("Hourly Scan"),
            OrganizationID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            Params: map[string]string{
                "deserunt": "esse",
                "nemo": "reprehenderit",
                "est": "quis",
                "sint": "accusamus",
            },
            ParentID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            Recur: sdk.Bool(false),
            RecurFrequency: sdk.String("hour"),
            RecurLast: sdk.Int64(1576300370),
            RecurLastTaskID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            RecurNext: sdk.Int64(1576300370),
            SiteID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            StartTime: sdk.Int64(1576300370),
            Stats: map[string]interface{}{
                "hic": "necessitatibus",
                "asperiores": "ex",
                "voluptas": "debitis",
                "delectus": "quae",
            },
            Status: sdk.String("processed"),
            TemplateID: sdk.String("e77602e0-3fb8-4734-aef9-fbc6fdcb0fa8"),
            Type: sdk.String("scan"),
            UpdatedAt: sdk.Int64(1576300370),
        },
        TaskID: "caa3383c-2beb-4477-b73c-8d72f64d1db1",
    }, operations.UpdateTaskSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Task != nil {
        // handle response
    }
}
```

## UpgradeAgent

Force an agent to update and restart

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpgradeAgent(ctx, operations.UpgradeAgentRequest{
        AgentID: "f2c43106-61e9-4634-9e1c-f9e06e3a4370",
    }, operations.UpgradeAgentSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
