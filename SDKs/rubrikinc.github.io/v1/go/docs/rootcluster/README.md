# RootCluster

## Overview

Cluster configuration and health.

### Available Operations

* [AddKmipServer](#addkmipserver) - Add a KMIP server
* [AddSyslogExportRule](#addsyslogexportrule) - Add a new syslog export rule
* [AvailableVersion](#availableversion) - Retrieve CDM versions available for upgrade
* [ChangeClusterNodeHostnames](#changeclusternodehostnames) - Change hostname for nodes in a Rubrik cluster
* [DeleteKmipServer](#deletekmipserver) - Remove the specified KMIP server
* [DeleteSyslogExportRule](#deletesyslogexportrule) - Delete the specified syslog export rule
* [GetAsyncRequestStatusForUpgrade](#getasyncrequeststatusforupgrade) - Get asynchronous request details
* [GetClusterAPIVersion](#getclusterapiversion) - Get cluster REST API version
* [GetClusterCertificate](#getclustercertificate) - Get the cluster certificate
* [GetClusterNodeHostnames](#getclusternodehostnames) - Get the node ID to hostname mapping for all the nodes in a Rubrik cluster

* [GetClusterNodeIds](#getclusternodeids) - Get the name of the nodes in the cluster
* [GetClusterVersion](#getclusterversion) - Get cluster software version
* [GetCorsConfiguration](#getcorsconfiguration) - Get CORS configuration
* [GetEncryptionStatus](#getencryptionstatus) - Get encryption at rest status
* [GetFips](#getfips) - Get FIPS enablement status
* [GetKmipClient](#getkmipclient) - Get the KMIP client configuration
* [GetKmipServer](#getkmipserver) - Get KMIP server information
* [GetPeriodicUpgradePrechecksStatus](#getperiodicupgradeprechecksstatus) - Get the result of the latest run of the upgrade prechecks
* [GetPublicClusterInfo](#getpublicclusterinfo) - Get cluster details
* [GetRubrikSnmpMibDownloadLink](#getrubriksnmpmibdownloadlink) - Get the link for Rubrik SNMP MIB file
* [GetSyslogExportRule](#getsyslogexportrule) - Get the specified syslog export rule
* [GetSyslogExportRules](#getsyslogexportrules) - Get the configured syslog export rules
* [GetSyslogMsgSnmpMibDownloadLink](#getsyslogmsgsnmpmibdownloadlink) - Get the link for SYSLOG-MSG-MIB file
* [GetSyslogTcSnmpMibDownloadLink](#getsyslogtcsnmpmibdownloadlink) - Get the link for SYSLOG-TC-MIB file
* [GetTotpGlobalSetting](#gettotpglobalsetting) - Get global TOTP setting
* [GetTruststores](#gettruststores) - Get summary of all truststores
* [GetWebSignedCertificate](#getwebsignedcertificate) - Get the signed certificate for Web server
* [HasRubrikSupportPortalCredentials](#hasrubriksupportportalcredentials) - Check credentials to the Rubrik support portal
* [ManualDiscover](#manualdiscover) - Manually discover nodes
* [ManualDiscoverIpv4](#manualdiscoveripv4) - Manually discover nodes over IPv4 address
* [MonitorEvents](#monitorevents) - Get event notifications
* [PatchPasswordRequirements](#patchpasswordrequirements) - Set password requirements
* [QueryPasswordRequirements](#querypasswordrequirements) - Get password requirements
* [ResetWebSignedCertificate](#resetwebsignedcertificate) - Reset the signed certificate for Web server
* [RunPeriodicUpgradePrechecks](#runperiodicupgradeprechecks) - Start an on demand run of the prechecks
* [SetKmipClient](#setkmipclient) - Specify KMIP client credentials for nodes
* [SetTruststoreCertificate](#settruststorecertificate) - Set certificates for one or more truststores
* [SetWebSignedCertificate](#setwebsignedcertificate) - Set a signed certificate for Web server
* [StageCdmSoftware](#stagecdmsoftware) - Stage software on CDM for upgrade
* [TestSyslogExportRule](#testsyslogexportrule) - Test the specified syslog export rule
* [UnsetTruststoreCertificate](#unsettruststorecertificate) - Remove certificate associated with specified truststore
* [UpdateCluster](#updatecluster) - Change Rubrik cluster properties
* [UpdateCorsConfiguration](#updatecorsconfiguration) - Update CORS configuration
* [UpdateFips](#updatefips) - Update FIPS enablement status
* [UpdateRubrikSupportPortalCredentials](#updaterubriksupportportalcredentials) - Update credentials to the Rubrik support portal
* [UpdateSyslogExportRule](#updatesyslogexportrule) - Update the specified syslog export rule
* [UpdateTotpGlobalSetting](#updatetotpglobalsetting) - Update TOTP global setting

## AddKmipServer

Add the specified KMIP server to the set of active KMIP servers.

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
    res, err := s.RootCluster.AddKmipServer(ctx, operations.AddKmipServerRequest{
        KmipServerConfiguration: shared.KmipServerConfiguration{
            ServerAddress: "ipsa",
            ServerCertificateID: "ipsa",
            ServerPort: sdk.Int(434417),
        },
        ID: "74ebf692-80d1-4ba7-ba89-ebf737ae4203",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## AddSyslogExportRule

Adds a new rule specifying where to export the specified syslog information.


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
    res, err := s.RootCluster.AddSyslogExportRule(ctx, shared.SyslogExportRuleFull{
        CertificateID: sdk.String("optio"),
        EnableTLS: false,
        Facility: shared.SyslogFacilityEnumRubrikSSH,
        Hostname: "fumbling-throne.info",
        Port: 645785,
        Protocol: shared.TransportLayerProtocolEnumUDP,
        Severity: shared.SyslogSeverityEnumCritical,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogExportRuleSummary != nil {
        // handle response
    }
}
```

## AvailableVersion

Retrieve a list of Rubrik CDM versions available to upgrade the Rubrik cluster.

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
    res, err := s.RootCluster.AvailableVersion(ctx, operations.AvailableVersionRequest{
        DownloadJobInstanceID: sdk.String("repellendus"),
        FetchLinks: sdk.Bool(false),
        FilterUpgradable: sdk.Bool(false),
        FilterVersion: sdk.String("totam"),
        ID: "a0d446ce-2af7-4a73-8f3b-e453f870b326",
        IgnoreDownloading: sdk.Bool(false),
        IgnoreLocal: sdk.Bool(false),
        IgnoreRemote: sdk.Bool(false),
        ShowAll: sdk.Bool(false),
        SourceVersion: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AvailableVersionInfos != nil {
        // handle response
    }
}
```

## ChangeClusterNodeHostnames

Change hostnames for multiple nodes at a time, for a specified Rubrik cluster.


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
    res, err := s.RootCluster.ChangeClusterNodeHostnames(ctx, operations.ChangeClusterNodeHostnamesRequest{
        RequestBody: []shared.NodeHostnameInfo{
            shared.NodeHostnameInfo{
                Hostname: "prestigious-inquiry.biz",
                ID: "429cdb1a-8422-4bb6-b9d2-322715bf0cbb",
            },
            shared.NodeHostnameInfo{
                Hostname: "brisk-threat.biz",
                ID: "1b8b90f3-443a-4110-8e0a-dcf4b921879f",
            },
        },
        ID: "ce953f73-ef7f-4bc7-abd7-4dd39c0f5d2c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteKmipServer

Remove the server with the specified server address from the set of active KMIP servers.

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
    res, err := s.RootCluster.DeleteKmipServer(ctx, operations.DeleteKmipServerRequest{
        ID: "ff7c70a4-5626-4d43-a813-f16d9f5fce6c",
        ServerAddress: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteSyslogExportRule

Delete the syslog export rule specified by the given id.

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
    res, err := s.RootCluster.DeleteSyslogExportRule(ctx, operations.DeleteSyslogExportRuleRequest{
        ID: "56146c3e-250f-4b00-8c42-e141aac366c8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAsyncRequestStatusForUpgrade

Get asynchronous request details for an upgrade request.

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
    res, err := s.RootCluster.GetAsyncRequestStatusForUpgrade(ctx, operations.GetAsyncRequestStatusForUpgradeRequest{
        ID: "dd6b1442-9074-4747-b8a7-bd466d28c10a",
        RequestID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetClusterAPIVersion

Retrieves software version of the Rubrik cluster.

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
    res, err := s.RootCluster.GetClusterAPIVersion(ctx, operations.GetClusterAPIVersionRequest{
        ID: "3cdca425-1904-4e52-bc7e-0bc7178e4796",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClusterAPIVersion != nil {
        // handle response
    }
}
```

## GetClusterCertificate

Returns the cluster certificate.

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
    res, err := s.RootCluster.GetClusterCertificate(ctx, operations.GetClusterCertificateRequest{
        ID: "f2a70c68-8282-4aa4-8256-2f222e9817ee",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClusterCertificate != nil {
        // handle response
    }
}
```

## GetClusterNodeHostnames

Retrieve the ID to hostname mapping for all the nodes that belong to a specified Rubrik cluster.


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
    res, err := s.RootCluster.GetClusterNodeHostnames(ctx, operations.GetClusterNodeHostnamesRequest{
        ID: "17cbe61e-6b7b-495b-80ab-3c20c4f3789f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeHostnameInfoListResponse != nil {
        // handle response
    }
}
```

## GetClusterNodeIds

Retrieve the list of node IDs for the nodes in this Rubrik CDM cluster.

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
    res, err := s.RootCluster.GetClusterNodeIds(ctx, operations.GetClusterNodeIdsRequest{
        ID: "d871f99d-d2ef-4d12-9aa6-f1e674bdb04f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodeIds != nil {
        // handle response
    }
}
```

## GetClusterVersion

Retrieves software version of the Rubrik cluster.

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
    res, err := s.RootCluster.GetClusterVersion(ctx, operations.GetClusterVersionRequest{
        ID: "15756082-d68e-4a19-b1d1-7051339d0808",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClusterVersion != nil {
        // handle response
    }
}
```

## GetCorsConfiguration

Get the current CORS support configuration for a web server.

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
    res, err := s.RootCluster.GetCorsConfiguration(ctx, operations.GetCorsConfigurationRequest{
        ID: "6a184039-4c26-4071-b93f-5f0642dac7af",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CorsConfiguration != nil {
        // handle response
    }
}
```

## GetEncryptionStatus

Get the current encryption at rest status of the cluster.

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
    res, err := s.RootCluster.GetEncryptionStatus(ctx, operations.GetEncryptionStatusRequest{
        ID: "515cc413-aa63-4aae-8d67-864dbb675fd5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EncryptionStatus != nil {
        // handle response
    }
}
```

## GetFips

Returns the current status of FIPS on the specified cluster. When the status is true, FIPS is enabled.

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
    res, err := s.RootCluster.GetFips(ctx, operations.GetFipsRequest{
        ID: "e60b375e-d4f6-4fbe-a41f-33317fe35b60",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FipsStatus != nil {
        // handle response
    }
}
```

## GetKmipClient

Return the currently configured KMIP client information. The response object contains empty fields when KMIP is not configured.

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
    res, err := s.RootCluster.GetKmipClient(ctx, operations.GetKmipClientRequest{
        ID: "eb1ea426-555b-4a3c-a874-4ed53b88f3a8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KmipClientDetail != nil {
        // handle response
    }
}
```

## GetKmipServer

Returns the KMIP server information for the specified server address. When no server address is specified, this call returns information on all active KMIP servers. The response array is empty when KMIP is not configured or when the server address cannot be found.

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
    res, err := s.RootCluster.GetKmipServer(ctx, operations.GetKmipServerRequest{
        ID: "d8f5c0b2-f2fb-47b1-94a2-76b26916fe1f",
        ServerAddress: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KmipServerDetails != nil {
        // handle response
    }
}
```

## GetPeriodicUpgradePrechecksStatus

Get the result of the latest run of the upgrade prechecks.


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
    res, err := s.RootCluster.GetPeriodicUpgradePrechecksStatus(ctx, operations.GetPeriodicUpgradePrechecksStatusRequest{
        FetchNextRunInfo: sdk.Bool(false),
        ID: "8f4294e3-698f-4447-b603-e8b445e80ca5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrecheckStatusResponse != nil {
        // handle response
    }
}
```

## GetPublicClusterInfo

Retrieve public information about the Rubrik cluster.

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
    res, err := s.RootCluster.GetPublicClusterInfo(ctx, operations.GetPublicClusterInfoRequest{
        ID: "5efd20e4-57e1-4858-b6a8-9fbe3a5aa8e4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClusterInfo != nil {
        // handle response
    }
}
```

## GetRubrikSnmpMibDownloadLink

Retrieve the download link for the Rubrik SNMP MIB file. The retrieval is a synchronous operation.

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
    res, err := s.RootCluster.GetRubrikSnmpMibDownloadLink(ctx, operations.GetRubrikSnmpMibDownloadLinkRequest{
        ID: "824d0ab4-0750-488e-9186-2065e904f3b1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RubrikMibFileDownloadLink != nil {
        // handle response
    }
}
```

## GetSyslogExportRule

Get the summary of the syslog export rule specified by the given id.


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
    res, err := s.RootCluster.GetSyslogExportRule(ctx, operations.GetSyslogExportRuleRequest{
        ID: "194b8abf-603a-479f-9dfe-0ab7da8a50ce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogExportRuleSummary != nil {
        // handle response
    }
}
```

## GetSyslogExportRules

Return the list of all configured syslog export rules.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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
    res, err := s.RootCluster.GetSyslogExportRules(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogExportRuleSummaryListResponse != nil {
        // handle response
    }
}
```

## GetSyslogMsgSnmpMibDownloadLink

Retrieve the download link for the SYSLOG-MSG-MIB file. The retrieval is a synchronous operation.

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
    res, err := s.RootCluster.GetSyslogMsgSnmpMibDownloadLink(ctx, operations.GetSyslogMsgSnmpMibDownloadLinkRequest{
        ID: "187f86bc-173d-4689-aee9-526f8d986e88",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogMsgMibFileDownloadLink != nil {
        // handle response
    }
}
```

## GetSyslogTcSnmpMibDownloadLink

Retrieve the download link for the SYSLOG-TC-MIB file. The retrieval is a synchronous operation.

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
    res, err := s.RootCluster.GetSyslogTcSnmpMibDownloadLink(ctx, operations.GetSyslogTcSnmpMibDownloadLinkRequest{
        ID: "1ead4f0e-1012-4563-b94e-29e973e922a5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogTcMibFileDownloadLink != nil {
        // handle response
    }
}
```

## GetTotpGlobalSetting

Returns TOTP global setting, including whether TOTP is enforced or not.

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
    res, err := s.RootCluster.GetTotpGlobalSetting(ctx, operations.GetTotpGlobalSettingRequest{
        ID: "7a15be3e-0608-407e-ab6e-3ab8845f0597",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TotpGlobalSetting != nil {
        // handle response
    }
}
```

## GetTruststores

Get summary of all truststores.

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
    res, err := s.RootCluster.GetTruststores(ctx, operations.GetTruststoresRequest{
        ID: "a60ff2a5-4a31-4e94-b64a-3e865e7956f9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TruststoreSummaryListResponse != nil {
        // handle response
    }
}
```

## GetWebSignedCertificate

If the web server uses a signed certificate, fetch it.

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
    res, err := s.RootCluster.GetWebSignedCertificate(ctx, operations.GetWebSignedCertificateRequest{
        ID: "251a5a9d-a660-4ff5-bbfa-ad4f9efc1b45",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebServerCertificateSummary != nil {
        // handle response
    }
}
```

## HasRubrikSupportPortalCredentials

Check whether the specified Rubrik cluster has an existing set of credentials for the Rubrik support portal.


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
    res, err := s.RootCluster.HasRubrikSupportPortalCredentials(ctx, operations.HasRubrikSupportPortalCredentialsRequest{
        ID: "12c10326-48dc-42f6-9519-9ebfd0e9fe6c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BooleanResponse != nil {
        // handle response
    }
}
```

## ManualDiscover

Manually specifies mDNS discovery data. Output for this endpoint is identical to the output of the 'discover' endpoint.

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
    res, err := s.RootCluster.ManualDiscover(ctx, operations.ManualDiscoverRequest{
        ManualDiscoveryNodeInfo: shared.ManualDiscoveryNodeInfo{
            NodeInfo: []shared.BootstrappableNodeInfoV1{
                shared.BootstrappableNodeInfoV1{
                    Hostname: "drab-chap.net",
                    Ipv6: "a3ae:d011:7996:312f:de04:7717:78ff:61d0",
                },
                shared.BootstrappableNodeInfoV1{
                    Hostname: "circular-jumper.biz",
                    Ipv6: "7636:0a15:db6a:6606:59a1:adea:ab58:51d6",
                },
            },
        },
        ID: "c645b08b-6189-41ba-a0fe-1ade008e6f8c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManualDiscoveryNodeInfo != nil {
        // handle response
    }
}
```

## ManualDiscoverIpv4

Manually specifies discovery data. This endpoint output is identical to the output of the 'discover' endpoint.

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
    res, err := s.RootCluster.ManualDiscoverIpv4(ctx, operations.ManualDiscoverIpv4Request{
        ManualDiscoveryNodeIpv4Info: shared.ManualDiscoveryNodeIpv4Info{
            NodeInfo: []shared.BootstrappableNodeIpv4Info{
                shared.BootstrappableNodeIpv4Info{
                    Hostname: "yawning-composition.info",
                    Ipv4: "4.217.132.197",
                },
                shared.BootstrappableNodeIpv4Info{
                    Hostname: "tense-ramie.info",
                    Ipv4: "162.57.78.20",
                },
            },
        },
        ID: "81430104-2181-43d5-a08e-ce7e253b6684",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManualDiscoveryNodeIpv4Info != nil {
        // handle response
    }
}
```

## MonitorEvents

Gets notifications about events from a specified set of possible events.


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
    res, err := s.RootCluster.MonitorEvents(ctx, operations.MonitorEventsRequest{
        EventNotificationQuery: []string{
            "ab",
            "porro",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventNotifications != nil {
        // handle response
    }
}
```

## PatchPasswordRequirements

Update user password requirements for a cluster.

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
    res, err := s.RootCluster.PatchPasswordRequirements(ctx, operations.PatchPasswordRequirementsRequest{
        PasswordRequirementsPatchRequest: shared.PasswordRequirementsPatchRequest{
            BlockPreviousPasswords: sdk.Bool(false),
            ClearAPITokens: sdk.Bool(false),
            ClearWebSessions: sdk.Bool(false),
            MinLength: sdk.Int(421844),
            MinLowerCase: sdk.Int(751022),
            MinNumerics: sdk.Int(388319),
            MinSpecial: sdk.Int(927212),
            MinUpperCase: sdk.Int(160393),
            UseZxcvbn: sdk.Bool(false),
        },
        ID: "05e16dea-b3fe-4c95-b8a6-4584273a8418",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PasswordRequirementsSummary != nil {
        // handle response
    }
}
```

## QueryPasswordRequirements

Query user password requirements for a cluster.

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
    res, err := s.RootCluster.QueryPasswordRequirements(ctx, operations.QueryPasswordRequirementsRequest{
        ID: "d162309f-b092-4992-9aef-b9f58c4d86e6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PasswordRequirementsSummary != nil {
        // handle response
    }
}
```

## ResetWebSignedCertificate

Resetting the customer-given certificate for each node's web server.

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
    res, err := s.RootCluster.ResetWebSignedCertificate(ctx, operations.ResetWebSignedCertificateRequest{
        ID: "8e4be056-013f-459d-a757-a59ecfef66ef",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## RunPeriodicUpgradePrechecks

Start an on demand run of the prechecks.


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
    res, err := s.RootCluster.RunPeriodicUpgradePrechecks(ctx, operations.RunPeriodicUpgradePrechecksRequest{
        ID: "1caa3383-c2be-4b47-b373-c8d72f64d1db",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## SetKmipClient

Specify KMIP client credentials for each of the Rubrik cluster nodes.

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
    res, err := s.RootCluster.SetKmipClient(ctx, operations.SetKmipClientRequest{
        KmipClientConfiguration: shared.KmipClientConfiguration{
            ClientCertificateID: sdk.String("architecto"),
            Password: sdk.String("voluptatibus"),
            Username: "Carli24",
        },
        ID: "10661e96-349e-41cf-9e06-e3a437000ae6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## SetTruststoreCertificate

Setting the given certificate for each node's truststores.

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
    res, err := s.RootCluster.SetTruststoreCertificate(ctx, operations.SetTruststoreCertificateRequest{
        RequestBody: []shared.TruststorePayload{
            shared.TruststorePayload{
                CertIds: []string{
                    "facilis",
                    "placeat",
                },
                TruststoreType: shared.TruststoreTypeEnumGcp,
            },
            shared.TruststorePayload{
                CertIds: []string{
                    "deleniti",
                    "a",
                    "voluptate",
                },
                TruststoreType: shared.TruststoreTypeEnumSystem,
            },
            shared.TruststorePayload{
                CertIds: []string{
                    "necessitatibus",
                    "animi",
                    "impedit",
                },
                TruststoreType: shared.TruststoreTypeEnumSystem,
            },
        },
        ID: "5a9741d3-1135-4296-9bb8-a7202611435e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetWebSignedCertificate

Setting the given certificate for each node's web server to use.

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
    res, err := s.RootCluster.SetWebSignedCertificate(ctx, operations.SetWebSignedCertificateRequest{
        WebServerCertificatePayload: shared.WebServerCertificatePayload{
            CertificateID: "et",
        },
        ID: "39dbc225-9b1a-4bda-8c07-0e1084cb0672",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## StageCdmSoftware

Stage software corresponding to a given CDM version on the cluster, in preparation for an upgrade.

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
    res, err := s.RootCluster.StageCdmSoftware(ctx, operations.StageCdmSoftwareRequest{
        StageCdmSoftwareInfo: shared.StageCdmSoftwareInfo{
            Md5sum: "assumenda",
            PackageURL: "beatae",
            Size: sdk.Int64(668606),
            SkipDownload: sdk.Bool(false),
            Version: sdk.String("facere"),
        },
        ID: "879eeb96-65b8-45ef-bd02-bae0be2d7822",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## TestSyslogExportRule

Send a test message using the syslog export rule specified by the given id.


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
    res, err := s.RootCluster.TestSyslogExportRule(ctx, shared.SyslogExportRuleFull{
        CertificateID: sdk.String("corporis"),
        EnableTLS: false,
        Facility: shared.SyslogFacilityEnumLogAudit,
        Hostname: "vital-darkness.org",
        Port: 630871,
        Protocol: shared.TransportLayerProtocolEnumTCP,
        Severity: shared.SyslogSeverityEnumInformational,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogServerTestResult != nil {
        // handle response
    }
}
```

## UnsetTruststoreCertificate

Remove certificate associated with specified truststore.

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
    res, err := s.RootCluster.UnsetTruststoreCertificate(ctx, operations.UnsetTruststoreCertificateRequest{
        ID: "5197f924-43da-47ce-92b8-95c537c6454e",
        Truststores: []UnsetTruststoreCertificateTruststoresEnum{
            operations.UnsetTruststoreCertificateTruststoresEnumGcp,
            operations.UnsetTruststoreCertificateTruststoresEnumSystem,
            operations.UnsetTruststoreCertificateTruststoresEnumGcp,
            operations.UnsetTruststoreCertificateTruststoresEnumSystem,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCluster

Change the properties of a specified Rubrik cluster. Changes to cluster name could take upto 10 minutes to be propagated to all nodes.

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
    res, err := s.RootCluster.UpdateCluster(ctx, operations.UpdateClusterRequest{
        ClusterUpdate: shared.ClusterUpdate{
            AcceptedEulaVersion: sdk.String("labore"),
            Geolocation: &shared.ClusterGeolocation{
                Address: "5372 Paucek Grove",
            },
            Name: sdk.String("Myron Windler"),
            Timezone: &shared.ClusterTimezone{
                Timezone: shared.ClusterTimezoneTimezoneEnumAmericaChicago,
            },
        },
        ID: "fd570757-7929-4177-9eac-646ecb573409",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClusterInfo != nil {
        // handle response
    }
}
```

## UpdateCorsConfiguration

Update the CORS support configuration for a web server.

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
    res, err := s.RootCluster.UpdateCorsConfiguration(ctx, operations.UpdateCorsConfigurationRequest{
        CorsConfigurationPatch: shared.CorsConfigurationPatch{
            AllowedHeaders: sdk.String("vero"),
            AllowedOrigins: sdk.String("sequi"),
            IsEnabled: sdk.Bool(false),
        },
        ID: "eb1e5a2b-12eb-407f-916d-b99545fc95fa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CorsConfiguration != nil {
        // handle response
    }
}
```

## UpdateFips

Update the current FIPS enablement status for a cluster.

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
    res, err := s.RootCluster.UpdateFips(ctx, operations.UpdateFipsRequest{
        FipsStatusPatch: shared.FipsStatusPatch{
            IsEnabledInFlight: sdk.Bool(false),
        },
        ID: "88970e18-9dbb-430f-8b33-ea055b197cd4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FipsStatus != nil {
        // handle response
    }
}
```

## UpdateRubrikSupportPortalCredentials

Update credentials for the specified Rubrik cluster to connect to the Rubrik support portal.


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
    res, err := s.RootCluster.UpdateRubrikSupportPortalCredentials(ctx, operations.UpdateRubrikSupportPortalCredentialsRequest{
        CommunityUserCredentials: shared.CommunityUserCredentials{
            Password: "magnam",
            Username: "Tony.Corwin16",
        },
        ID: "d82d3513-bb6f-448b-a56b-cdb35ff2e4b2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSyslogExportRule

Update the syslog export rule specified by the given id.

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
    res, err := s.RootCluster.UpdateSyslogExportRule(ctx, operations.UpdateSyslogExportRuleRequest{
        SyslogExportRulePartial: shared.SyslogExportRulePartial{
            CertificateID: sdk.String("reprehenderit"),
            EnableTLS: sdk.Bool(false),
            Facility: shared.SyslogFacilityEnumNews.ToPointer(),
            Hostname: sdk.String("distinct-jewelry.name"),
            Port: sdk.Int(522176),
            Protocol: shared.TransportLayerProtocolEnumUDP.ToPointer(),
            Severity: shared.SyslogSeverityEnumDebug.ToPointer(),
        },
        ID: "9e7319c1-77d5-425f-b7b1-14eeb52ff785",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyslogExportRuleSummary != nil {
        // handle response
    }
}
```

## UpdateTotpGlobalSetting

Update TOTP global setting, including whether TOTP is enforced or not.

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
    res, err := s.RootCluster.UpdateTotpGlobalSetting(ctx, operations.UpdateTotpGlobalSettingRequest{
        TotpGlobalSettingUpdate: shared.TotpGlobalSettingUpdate{
            IsEnforced: false,
        },
        ID: "fc37814d-4c98-4e0c-abb8-9eb75dad636c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TotpGlobalSetting != nil {
        // handle response
    }
}
```
