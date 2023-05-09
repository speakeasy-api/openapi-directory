# RootHostShare

## Overview

Network shares.

### Available Operations

* [BulkAddHostShares](#bulkaddhostshares) - Add NAS shares in bulk
* [BulkUpdateHostShare](#bulkupdatehostshare) - Update network shares

## BulkAddHostShares

Add NAS shares for a NAS host to the Rubrik cluster in bulk. This operation does not validate share credentials. If the default share credentials are incorrect, the share status on shares UI displays as "Wrong credential". Use the PATCH /v1/host/share/bulk endpoint to enter the correct credentials when this status displays.

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
    res, err := s.RootHostShare.BulkAddHostShares(ctx, shared.NasSharesToAdd{
        HostID: "odio",
        NasShares: []shared.DiscoveredNasShare{
            shared.DiscoveredNasShare{
                ExportPoint: "minus",
                ShareType: shared.DiscoveredNasShareShareTypeEnumNfs,
            },
            shared.DiscoveredNasShare{
                ExportPoint: "distinctio",
                ShareType: shared.DiscoveredNasShareShareTypeEnumNfs,
            },
            shared.DiscoveredNasShare{
                ExportPoint: "eos",
                ShareType: shared.DiscoveredNasShareShareTypeEnumNfs,
            },
            shared.DiscoveredNasShare{
                ExportPoint: "repudiandae",
                ShareType: shared.DiscoveredNasShareShareTypeEnumSmb,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkShareAddResponse != nil {
        // handle response
    }
}
```

## BulkUpdateHostShare

Update the properties of the objects that represent the specified network share.

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
    res, err := s.RootHostShare.BulkUpdateHostShare(ctx, []shared.HostShareUpdate{
        shared.HostShareUpdate{
            ShareID: "debitis",
            UpdateProperties: shared.HostSharePatch{
                Domain: sdk.String("laboriosam"),
                ExportPoint: sdk.String("eos"),
                HostShareParameters: &shared.HostShareParameters{
                    IsIsilonChangelistEnabled: sdk.Bool(false),
                    IsNetAppSnapDiffEnabled: sdk.Bool(false),
                    IsOnNetAppSnapMirrorDestVolume: sdk.Bool(false),
                },
                Password: sdk.String("amet"),
                Username: sdk.String("Dustin_Sawayn"),
            },
        },
        shared.HostShareUpdate{
            ShareID: "voluptate",
            UpdateProperties: shared.HostSharePatch{
                Domain: sdk.String("tempore"),
                ExportPoint: sdk.String("in"),
                HostShareParameters: &shared.HostShareParameters{
                    IsIsilonChangelistEnabled: sdk.Bool(false),
                    IsNetAppSnapDiffEnabled: sdk.Bool(false),
                    IsOnNetAppSnapMirrorDestVolume: sdk.Bool(false),
                },
                Password: sdk.String("omnis"),
                Username: sdk.String("Reginald_Wiegand48"),
            },
        },
        shared.HostShareUpdate{
            ShareID: "esse",
            UpdateProperties: shared.HostSharePatch{
                Domain: sdk.String("harum"),
                ExportPoint: sdk.String("ad"),
                HostShareParameters: &shared.HostShareParameters{
                    IsIsilonChangelistEnabled: sdk.Bool(false),
                    IsNetAppSnapDiffEnabled: sdk.Bool(false),
                    IsOnNetAppSnapMirrorDestVolume: sdk.Bool(false),
                },
                Password: sdk.String("quod"),
                Username: sdk.String("Clair.Leannon72"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HostShareDetails != nil {
        // handle response
    }
}
```
