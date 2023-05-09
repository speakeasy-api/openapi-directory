# RootHost

## Overview

Linux hosts and Windows hosts.

### Available Operations

* [BulkRegisterHostAsync](#bulkregisterhostasync) - Register hosts
* [DeleteHost](#deletehost) - Delete a registered host
* [DiscoverNasShares](#discovernasshares) - Discover and return all shares on a NAS host
* [GetHost](#gethost) - Get summary information for a host
* [GetRbsHostInfo](#getrbshostinfo) - Get the Rubrik Backup Service details for a host
* [HostMakePrimary](#hostmakeprimary) - Make this cluster the primary for agents on a set of hosts
* [QueryHost](#queryhost) - Get summary information for hosts
* [QueryHostVolume](#queryhostvolume) - Get list of Volume Group volumes
* [RbsInstall](#rbsinstall) - Install Rubrik Backup Service on a host
* [RbsUninstall](#rbsuninstall) - Uninstall Rubrik Backup Service from a host
* [RbsUpgrade](#rbsupgrade) - Upgrade Rubrik Backup Service on a host
* [RefreshHost](#refreshhost) - Refresh a host
* [RegisterHost](#registerhost) - Register a host
* [RegisterHostAsync](#registerhostasync) - Register a host
* [SearchHost](#searchhost) - Search for a file within the host
* [UpdateCertificateHost](#updatecertificatehost) - Update certificate
* [UpdateHost](#updatehost) - Modify information for a registered host

## BulkRegisterHostAsync

Register multiple hosts and perform discovery for databases and Microsoft SQL Server instances. When called, this API returns a success message, but completes the host registration in the background. Monitor the status of the background host discovery with the "status" field in GET API on /hosts. The POST API on /hosts can take longer for discovery, depending on the number of hosts on the system. POST on this API can be used instead to perform the discovery in the background and quickly register the host. Doing this requires that you install RBS for Linux and Windows hosts, similar to regular register using POST on /hosts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.BulkRegisterHostAsync(ctx, []shared.HostRegister{
        shared.HostRegister{
            Alias: sdk.String("eius"),
            HasAgent: sdk.Bool(false),
            HdfsConfig: &shared.HdfsBaseConfig{
                APIToken: sdk.String("commodi"),
                Hosts: []shared.HdfsHost{
                    shared.HdfsHost{
                        Hostname: "incomparable-musician.biz",
                        Port: 392311,
                    },
                    shared.HdfsHost{
                        Hostname: "compassionate-discussion.com",
                        Port: 486944,
                    },
                },
                KerberosTicket: sdk.String("sit"),
                Nameservices: sdk.String("voluptatum"),
                Username: sdk.String("Donna_Windler"),
            },
            Hostname: "scratchy-concentration.info",
            IsOracleHost: sdk.Bool(false),
            NasConfig: &shared.NasConfig{
                APICertificate: sdk.String("optio"),
                APIEndpoint: sdk.String("saepe"),
                APIHostname: sdk.String("maiores"),
                APIPassword: sdk.String("accusantium"),
                APIToken: sdk.String("sed"),
                APIUsername: sdk.String("eos"),
                IsIsilonChangelistEnabled: sdk.Bool(false),
                IsNetAppSnapDiffEnabled: sdk.Bool(false),
                IsShareAutoDiscoveryEnabled: sdk.Bool(false),
                VendorType: "consequuntur",
                ZoneName: sdk.String("quis"),
            },
            OracleQueryUser: sdk.String("vitae"),
            OracleSysDbaUser: sdk.String("occaecati"),
            OrganizationID: sdk.String("labore"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostDetails != nil {
        // handle response
    }
}
```

## DeleteHost

Delete host by specifying the host ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.DeleteHost(ctx, operations.DeleteHostRequest{
        ID: "db55410a-dc66-49af-90a2-6c7cdc981f06",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DiscoverNasShares

Discover and return all shares on the identified NAS host.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.DiscoverNasShares(ctx, operations.DiscoverNasSharesRequest{
        ID: "8981d6bb-33cf-4aa3-88c3-1bf407ee4fcf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DiscoveredNasShares != nil {
        // handle response
    }
}
```

## GetHost

Retrieve summary information for a registered host.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.GetHost(ctx, operations.GetHostRequest{
        ID: "0c42b78f-1562-4639-8a0d-c766324ccb06",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostDetail != nil {
        // handle response
    }
}
```

## GetRbsHostInfo

Get the details of the Rubrik Backup Service (RBS) installed on a specific host. Specify the details of the host to check whether RBS is installed on the host or not. If RBS is installed, the response will include the RBS details.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.GetRbsHostInfo(ctx, operations.GetRbsHostInfoRequest{
        Name: "Jimmie Ruecker Sr.",
        OperationTimeout: sdk.Int64(831037),
        Password: "sit",
        Username: "Celestino59",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RbsHostSummary != nil {
        // handle response
    }
}
```

## HostMakePrimary

Migrate the primary cluster with which the agent is able to perform regular operations (backup, restore etc). This can be done on a specified set of hosts or for all hosts that currently have a specified primary cluster for disaster recovery. Specify exactly one of `ids` or `oldPrimaryClusterUuid`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.HostMakePrimary(ctx, shared.HostMakePrimaryRequest{
        Ids: []string{
            "odio",
        },
        OldPrimaryClusterUUID: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## QueryHost

Retrieve summary information for all hosts that are registered with a Rubrik cluster.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.QueryHost(ctx, operations.QueryHostRequest{
        Hostname: sdk.String("repentant-mainland.net"),
        Name: sdk.String("Courtney Conroy"),
        OperatingSystem: sdk.String("illum"),
        OperatingSystemType: operations.QueryHostOperatingSystemTypeEnumUnixLike.ToPointer(),
        PrimaryClusterID: sdk.String("sint"),
        SnappableStatus: operations.QueryHostSnappableStatusEnumProtectable.ToPointer(),
        SortBy: operations.QueryHostSortByEnumHostname.ToPointer(),
        SortOrder: operations.QueryHostSortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryHostVolume

Retrieve summary information for each volume on a specified Volume Group host.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.QueryHostVolume(ctx, operations.QueryHostVolumeRequest{
        ID: "b8bcf24d-b959-4693-b52f-74533994d78d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostVolumeSummaryListResponse != nil {
        // handle response
    }
}
```

## RbsInstall

Install Rubrik Backup Service on a host.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.RbsInstall(ctx, shared.RbsHostOperationRequest{
        Name: "Vincent Raynor",
        OperationMode: shared.OperationModeEnumAsynchronous.ToPointer(),
        OperationTimeout: sdk.Int64(201710),
        Password: "corrupti",
        Username: "Kyra_Wolf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RbsHostOperationResponse != nil {
        // handle response
    }
}
```

## RbsUninstall

Uninstall Rubrik Backup Service from a host.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.RbsUninstall(ctx, shared.RbsHostOperationRequest{
        Name: "Felipe Kirlin",
        OperationMode: shared.OperationModeEnumSynchronous.ToPointer(),
        OperationTimeout: sdk.Int64(142978),
        Password: "ullam",
        Username: "Filiberto.Baumbach50",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RbsHostOperationResponse != nil {
        // handle response
    }
}
```

## RbsUpgrade

Upgrade Rubrik Backup Service on a host.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.RbsUpgrade(ctx, shared.RbsHostOperationRequest{
        Name: "Christy Deckow",
        OperationMode: shared.OperationModeEnumSynchronous.ToPointer(),
        OperationTimeout: sdk.Int64(535883),
        Password: "dolor",
        Username: "Marcel.Wisoky23",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RbsHostOperationResponse != nil {
        // handle response
    }
}
```

## RefreshHost

Refresh the properties of a host object when changes on the host are not seen in the Rubrik web UI.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.RefreshHost(ctx, operations.RefreshHostRequest{
        ID: "15bba650-164e-406f-9bf6-ae591bc8bdef",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostDetail != nil {
        // handle response
    }
}
```

## RegisterHost

Register a host.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.RegisterHost(ctx, shared.HostRegister{
        Alias: sdk.String("ipsum"),
        HasAgent: sdk.Bool(false),
        HdfsConfig: &shared.HdfsBaseConfig{
            APIToken: sdk.String("commodi"),
            Hosts: []shared.HdfsHost{
                shared.HdfsHost{
                    Hostname: "courageous-reach.info",
                    Port: 203396,
                },
            },
            KerberosTicket: sdk.String("quod"),
            Nameservices: sdk.String("eos"),
            Username: sdk.String("Aaliyah_Hammes66"),
        },
        Hostname: "mixed-entree.com",
        IsOracleHost: sdk.Bool(false),
        NasConfig: &shared.NasConfig{
            APICertificate: sdk.String("dignissimos"),
            APIEndpoint: sdk.String("quam"),
            APIHostname: sdk.String("modi"),
            APIPassword: sdk.String("fuga"),
            APIToken: sdk.String("iure"),
            APIUsername: sdk.String("deleniti"),
            IsIsilonChangelistEnabled: sdk.Bool(false),
            IsNetAppSnapDiffEnabled: sdk.Bool(false),
            IsShareAutoDiscoveryEnabled: sdk.Bool(false),
            VendorType: "officia",
            ZoneName: sdk.String("sint"),
        },
        OracleQueryUser: sdk.String("laborum"),
        OracleSysDbaUser: sdk.String("dolor"),
        OrganizationID: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostDetail != nil {
        // handle response
    }
}
```

## RegisterHostAsync

Register a host and perform discovery for databases and Microsoft SQL Server instances. When called, this API returns a success message, but completes the host registration in the background. Monitor the status of the background host discovery with the "status" field in GET API on /hosts. The POST API on /hosts can take longer for discovery, depending on the number of hosts on the system. POST on this API can be used instead to perform the discovery in the background and quickly register the host. Doing this requires that you install RBS for Linux and Windows hosts, similar to regular register using POST on /hosts.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.RegisterHostAsync(ctx, shared.HostRegister{
        Alias: sdk.String("illum"),
        HasAgent: sdk.Bool(false),
        HdfsConfig: &shared.HdfsBaseConfig{
            APIToken: sdk.String("sit"),
            Hosts: []shared.HdfsHost{
                shared.HdfsHost{
                    Hostname: "heartfelt-quiche.info",
                    Port: 981865,
                },
                shared.HdfsHost{
                    Hostname: "imaginative-hill.org",
                    Port: 881067,
                },
                shared.HdfsHost{
                    Hostname: "wiggly-act.com",
                    Port: 33407,
                },
            },
            KerberosTicket: sdk.String("voluptates"),
            Nameservices: sdk.String("provident"),
            Username: sdk.String("Wilford24"),
        },
        Hostname: "shameful-door.biz",
        IsOracleHost: sdk.Bool(false),
        NasConfig: &shared.NasConfig{
            APICertificate: sdk.String("enim"),
            APIEndpoint: sdk.String("nihil"),
            APIHostname: sdk.String("libero"),
            APIPassword: sdk.String("omnis"),
            APIToken: sdk.String("excepturi"),
            APIUsername: sdk.String("eos"),
            IsIsilonChangelistEnabled: sdk.Bool(false),
            IsNetAppSnapDiffEnabled: sdk.Bool(false),
            IsShareAutoDiscoveryEnabled: sdk.Bool(false),
            VendorType: "quisquam",
            ZoneName: sdk.String("corrupti"),
        },
        OracleQueryUser: sdk.String("repellendus"),
        OracleSysDbaUser: sdk.String("cum"),
        OrganizationID: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostDetail != nil {
        // handle response
    }
}
```

## SearchHost

Search for a file within the host. Search via full path prefix or filename prefix.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.SearchHost(ctx, operations.SearchHostRequest{
        ID: "a6a61efa-2198-4258-bd0a-9eba47f7d3ef",
        Path: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponseListResponse != nil {
        // handle response
    }
}
```

## UpdateCertificateHost

Provide an updated certificate for a specified host.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.UpdateCertificateHost(ctx, operations.UpdateCertificateHostRequest{
        ID: "49640d6a-1831-4c87-adf5-96fdf1ad837a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostDetail != nil {
        // handle response
    }
}
```

## UpdateHost

Change the FQDN and IPv4 address that is assigned to a host object. Enable or disable pre-transfer data compression. Enable or disable change block tracking (CBT) for backups of SQL Server databases on Windows hosts. Enable or disable volume filter driver (VFD) for volume backups on Windows hosts. Set an Oracle user with sysdba privileges to permit Oracle discovery queries.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHost.UpdateHost(ctx, operations.UpdateHostRequest{
        HostUpdate: shared.HostUpdate{
            Alias: sdk.String("debitis"),
            CompressionEnabled: sdk.Bool(false),
            HdfsConfig: &shared.HdfsBaseConfig{
                APIToken: sdk.String("voluptatum"),
                Hosts: []shared.HdfsHost{
                    shared.HdfsHost{
                        Hostname: "spirited-bull.net",
                        Port: 102071,
                    },
                },
                KerberosTicket: sdk.String("sint"),
                Nameservices: sdk.String("eligendi"),
                Username: sdk.String("Kris_Hayes61"),
            },
            HostVfdDriverInstalled: sdk.Bool(false),
            HostVfdEnabled: shared.HostVfdInstallConfigEnumDisabled.ToPointer(),
            Hostname: sdk.String("nautical-gladiolus.info"),
            IsOracleHost: sdk.Bool(false),
            MssqlCbtDriverInstalled: sdk.Bool(false),
            MssqlCbtEnabled: shared.MssqlCbtStatusTypeEnumDisabled.ToPointer(),
            NasConfig: &shared.NasConfig{
                APICertificate: sdk.String("sapiente"),
                APIEndpoint: sdk.String("deserunt"),
                APIHostname: sdk.String("dolor"),
                APIPassword: sdk.String("hic"),
                APIToken: sdk.String("iure"),
                APIUsername: sdk.String("sint"),
                IsIsilonChangelistEnabled: sdk.Bool(false),
                IsNetAppSnapDiffEnabled: sdk.Bool(false),
                IsShareAutoDiscoveryEnabled: sdk.Bool(false),
                VendorType: "autem",
                ZoneName: sdk.String("iste"),
            },
            OracleQueryUser: sdk.String("cupiditate"),
            OracleSysDbaUser: sdk.String("ab"),
        },
        ID: "af388ce0-3614-4448-8797-7a0ef2f53602",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostDetail != nil {
        // handle response
    }
}
```
