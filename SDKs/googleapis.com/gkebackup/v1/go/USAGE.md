<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "explicabo",
        },
        QueryParams: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "corporis",
            Alt: "media",
            BackupID: "laboriosam",
            Callback: "sed",
            Fields: "blanditiis",
            Key: "et",
            OauthToken: "voluptatum",
            PrettyPrint: true,
            QuotaUser: "inventore",
            UploadType: "dolores",
            UploadProtocol: "ut",
        },
        Request: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: "inventore",
                BackupCrdVersions: map[string]string{
                    "ipsum": "consequatur",
                    "ut": "quibusdam",
                    "repellat": "odio",
                },
                Cluster: "et",
                GkeVersion: "nobis",
                K8sVersion: "quia",
            },
            DeleteLockDays: 3054520383972741130,
            Description: "ipsa",
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: "enim",
            },
            Labels: map[string]string{
                "quibusdam": "qui",
                "omnis": "quae",
                "voluptatem": "nesciunt",
            },
            RetainDays: 8947363127042062471,
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: "qui",
                        Namespace: "dolores",
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "quod",
                    "quia",
                },
            },
        },
    }
    
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->