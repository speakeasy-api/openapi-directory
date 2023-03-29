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
        Security: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            BackupID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: "iusto",
                BackupCrdVersions: map[string]string{
                    "saepe": "inventore",
                    "sapiente": "enim",
                },
                Cluster: "eum",
                GkeVersion: "voluptatum",
                K8sVersion: "autem",
            },
            DeleteLockDays: 812169,
            Description: "non",
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: "deleniti",
            },
            Labels: map[string]string{
                "reprehenderit": "molestiae",
                "quo": "quasi",
                "laboriosam": "dicta",
            },
            RetainDays: 648172,
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: "consequatur",
                        Namespace: "fugiat",
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "omnis",
                    "eos",
                    "accusamus",
                    "accusamus",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->