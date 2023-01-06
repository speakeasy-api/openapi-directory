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
            Parent: "dignissimos",
        },
        QueryParams: operations.CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "esse",
            Alt: "proto",
            Callback: "eum",
            EkmConnectionID: "aspernatur",
            Fields: "molestiae",
            Key: "minima",
            OauthToken: "modi",
            PrettyPrint: true,
            QuotaUser: "molestiae",
            UploadType: "porro",
            UploadProtocol: "provident",
        },
        Request: &shared.EkmConnectionInput{
            Etag: "sequi",
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: "dolor",
                    Hostname: "pariatur",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "sed",
                        },
                        shared.CertificateInput{
                            RawDer: "dolores",
                        },
                        shared.CertificateInput{
                            RawDer: "quae",
                        },
                    },
                    ServiceDirectoryService: "aut",
                },
                shared.ServiceResolverInput{
                    EndpointFilter: "hic",
                    Hostname: "reprehenderit",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "nesciunt",
                        },
                        shared.CertificateInput{
                            RawDer: "quia",
                        },
                        shared.CertificateInput{
                            RawDer: "dolores",
                        },
                    },
                    ServiceDirectoryService: "dicta",
                },
            },
        },
    }
    
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EkmConnection != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->