<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.GkebackupProjectsLocationsBackupPlansBackupsCreate(ctx, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupInput: &shared.BackupInput{
            ClusterMetadata: &shared.ClusterMetadata{
                AnthosVersion: sdk.String("provident"),
                BackupCrdVersions: map[string]string{
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                    "illum": "vel",
                },
                Cluster: sdk.String("error"),
                GkeVersion: sdk.String("deserunt"),
                K8sVersion: sdk.String("suscipit"),
            },
            DeleteLockDays: sdk.Int(437587),
            Description: sdk.String("magnam"),
            EncryptionKey: &shared.EncryptionKey{
                GcpKmsEncryptionKey: sdk.String("debitis"),
            },
            Labels: map[string]string{
                "delectus": "tempora",
            },
            RetainDays: sdk.Int(383441),
            SelectedApplications: &shared.NamespacedNames{
                NamespacedNames: []shared.NamespacedName{
                    shared.NamespacedName{
                        Name: sdk.String("Irving Lehner"),
                        Namespace: sdk.String("nisi"),
                    },
                    shared.NamespacedName{
                        Name: sdk.String("Jake Bernier MD"),
                        Namespace: sdk.String("perferendis"),
                    },
                },
            },
            SelectedNamespaces: &shared.Namespaces{
                Namespaces: []string{
                    "repellendus",
                    "sapiente",
                },
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BackupID: sdk.String("at"),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        Parent: "quod",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("porro"),
    }, operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity{
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