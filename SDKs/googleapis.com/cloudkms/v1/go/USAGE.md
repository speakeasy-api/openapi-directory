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
            Parent: "sit",
        },
        QueryParams: operations.CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            EkmConnectionID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.EkmConnectionInput{
            Etag: "debitis",
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: "et",
                    Hostname: "ut",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "et",
                        },
                        shared.CertificateInput{
                            RawDer: "voluptate",
                        },
                        shared.CertificateInput{
                            RawDer: "iste",
                        },
                    },
                    ServiceDirectoryService: "vitae",
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