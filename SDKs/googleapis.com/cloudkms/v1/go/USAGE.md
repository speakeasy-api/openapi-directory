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
    res, err := s.Projects.CloudkmsProjectsLocationsEkmConnectionsCreate(ctx, operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EkmConnectionInput: &shared.EkmConnectionInput{
            CryptoSpacePath: sdk.String("provident"),
            Etag: sdk.String("distinctio"),
            KeyManagementMode: shared.EkmConnectionKeyManagementModeEnumCloudKms.ToPointer(),
            ServiceResolvers: []shared.ServiceResolverInput{
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("nulla"),
                    Hostname: sdk.String("moral-star.info"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("deserunt"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("suscipit"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("iure"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("magnam"),
                },
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("debitis"),
                    Hostname: sdk.String("awesome-voter.biz"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("molestiae"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("minus"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("placeat"),
                },
                shared.ServiceResolverInput{
                    EndpointFilter: sdk.String("voluptatum"),
                    Hostname: sdk.String("lawful-missionary.info"),
                    ServerCertificates: []shared.CertificateInput{
                        shared.CertificateInput{
                            RawDer: sdk.String("temporibus"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("ab"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("quis"),
                        },
                        shared.CertificateInput{
                            RawDer: sdk.String("veritatis"),
                        },
                    },
                    ServiceDirectoryService: sdk.String("deserunt"),
                },
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        EkmConnectionID: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity{
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