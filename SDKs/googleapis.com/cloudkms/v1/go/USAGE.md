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
            Parent: "unde",
        },
        QueryParams: operations.CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            EkmConnectionID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.EkmConnectionInput{
            Etag: "iusto",
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: "saepe",
                    Hostname: "anahi.org",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "eum",
                        },
                        shared.CertificateInput{
                            RawDer: "voluptatum",
                        },
                    },
                    ServiceDirectoryService: "autem",
                },
                shared.ServiceResolverInput{
                    EndpointFilter: "vel",
                    Hostname: "june.info",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "reprehenderit",
                        },
                        shared.CertificateInput{
                            RawDer: "molestiae",
                        },
                        shared.CertificateInput{
                            RawDer: "quo",
                        },
                    },
                    ServiceDirectoryService: "quasi",
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