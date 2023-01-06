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
            Parent: "ut",
        },
        QueryParams: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nam",
            Alt: "media",
            BackupID: "et",
            Callback: "et",
            Fields: "velit",
            Key: "quas",
            OauthToken: "nostrum",
            PrettyPrint: false,
            QuotaUser: "veritatis",
            UploadType: "quis",
            UploadProtocol: "quidem",
        },
        Request: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: "ratione",
                BackupCrdVersions: map[string]string{
                    "perferendis": "enim",
                    "natus": "repudiandae",
                    "aperiam": "minus",
                },
                Cluster: "esse",
                GkeVersion: "molestias",
                K8sVersion: "id",
            },
            DeleteLockDays: 3787620476912475370,
            Description: "neque",
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: "sed",
            },
            Labels: map[string]string{
                "reprehenderit": "est",
                "velit": "dolores",
                "officia": "consequatur",
            },
            RetainDays: 8850273851812276247,
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: "et",
                        Namespace: "iure",
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "modi",
                    "voluptatem",
                    "iusto",
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