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

    req := operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest{
        Security: operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity{
            Option1: &operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudkmsProjectsLocationsEkmConnectionsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            EkmConnectionID: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.EkmConnectionInput{
            CryptoSpacePath: "iure",
            Etag: "magnam",
            KeyManagementMode: "CLOUD_KMS",
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: "delectus",
                    Hostname: "fatherly-geyser.info",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "placeat",
                        },
                        shared.CertificateInput{
                            RawDer: "voluptatum",
                        },
                        shared.CertificateInput{
                            RawDer: "iusto",
                        },
                        shared.CertificateInput{
                            RawDer: "excepturi",
                        },
                    },
                    ServiceDirectoryService: "nisi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EkmConnection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->