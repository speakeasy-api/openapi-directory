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
        DollarXgafv: "2",
        EkmConnectionInput: &shared.EkmConnectionInput{
            CryptoSpacePath: "provident",
            Etag: "distinctio",
            KeyManagementMode: "CLOUD_KMS",
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: "nulla",
                    Hostname: "moral-star.info",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "deserunt",
                        },
                        shared.CertificateInput{
                            RawDer: "suscipit",
                        },
                        shared.CertificateInput{
                            RawDer: "iure",
                        },
                    },
                    ServiceDirectoryService: "magnam",
                },
                shared.ServiceResolverInput{
                    EndpointFilter: "debitis",
                    Hostname: "awesome-voter.biz",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "molestiae",
                        },
                        shared.CertificateInput{
                            RawDer: "minus",
                        },
                    },
                    ServiceDirectoryService: "placeat",
                },
                shared.ServiceResolverInput{
                    EndpointFilter: "voluptatum",
                    Hostname: "lawful-missionary.info",
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: "temporibus",
                        },
                        shared.CertificateInput{
                            RawDer: "ab",
                        },
                        shared.CertificateInput{
                            RawDer: "quis",
                        },
                        shared.CertificateInput{
                            RawDer: "veritatis",
                        },
                    },
                    ServiceDirectoryService: "deserunt",
                },
            },
        },
        AccessToken: "perferendis",
        Alt: "media",
        Callback: "repellendus",
        EkmConnectionID: "sapiente",
        Fields: "quo",
        Key: "odit",
        OauthToken: "at",
        Parent: "at",
        PrettyPrint: false,
        QuotaUser: "maiores",
        UploadType: "molestiae",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsCreate(ctx, req, operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity{
        Option1: &operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EkmConnection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->