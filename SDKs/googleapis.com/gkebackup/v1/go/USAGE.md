<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest{
        DollarXgafv: "2",
        BackupInput: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: "provident",
                BackupCrdVersions: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                Cluster: "error",
                GkeVersion: "deserunt",
                K8sVersion: "suscipit",
            },
            DeleteLockDays: 437587,
            Description: "magnam",
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: "debitis",
            },
            Labels: map[string]string{
                "delectus": "tempora",
            },
            RetainDays: 383441,
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: "minus",
                        Namespace: "placeat",
                    },
                    shared.NamespacedName{
                        Name: "voluptatum",
                        Namespace: "iusto",
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
            },
        },
        AccessToken: "ab",
        Alt: "media",
        BackupID: "veritatis",
        Callback: "deserunt",
        Fields: "perferendis",
        Key: "ipsam",
        OauthToken: "repellendus",
        Parent: "sapiente",
        PrettyPrint: false,
        QuotaUser: "quo",
        UploadType: "odit",
        UploadProtocol: "at",
    }

    ctx := context.Background()
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, req, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->