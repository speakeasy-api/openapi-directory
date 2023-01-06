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
    
    req := operations.ConnectorsProjectsLocationsConnectionsCreateRequest{
        Security: operations.ConnectorsProjectsLocationsConnectionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ConnectorsProjectsLocationsConnectionsCreatePathParams{
            Parent: "dolor",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "media",
            Callback: "rerum",
            ConnectionID: "dolorem",
            Fields: "sapiente",
            Key: "optio",
            OauthToken: "occaecati",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "et",
            UploadProtocol: "odit",
        },
        Request: &shared.ConnectionInput{
            AuthConfig: &shared.AuthConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: true,
                        IntValue: "sed",
                        Key: "earum",
                        SecretValue: &shared.Secret{
                            SecretVersion: "aut",
                        },
                        StringValue: "corrupti",
                    },
                    shared.ConfigVariable{
                        BoolValue: false,
                        IntValue: "soluta",
                        Key: "nam",
                        SecretValue: &shared.Secret{
                            SecretVersion: "corrupti",
                        },
                        StringValue: "minima",
                    },
                },
                AuthType: "AUTH_TYPE_UNSPECIFIED",
                Oauth2ClientCredentials: &shared.Oauth2ClientCredentials{
                    ClientID: "aperiam",
                    ClientSecret: &shared.Secret{
                        SecretVersion: "excepturi",
                    },
                },
                Oauth2JwtBearer: &shared.Oauth2JwtBearer{
                    ClientKey: &shared.Secret{
                        SecretVersion: "debitis",
                    },
                    JwtClaims: &shared.JwtClaims{
                        Audience: "omnis",
                        Issuer: "illum",
                        Subject: "minima",
                    },
                },
                SSHPublicKey: &shared.SSHPublicKey{
                    CertType: "voluptas",
                    SSHClientCert: &shared.Secret{
                        SecretVersion: "laudantium",
                    },
                    SSHClientCertPass: &shared.Secret{
                        SecretVersion: "ut",
                    },
                    Username: "recusandae",
                },
                UserPassword: &shared.UserPassword{
                    Password: &shared.Secret{
                        SecretVersion: "tempore",
                    },
                    Username: "itaque",
                },
            },
            ConfigVariables: []shared.ConfigVariable{
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "sint",
                    Key: "aut",
                    SecretValue: &shared.Secret{
                        SecretVersion: "temporibus",
                    },
                    StringValue: "ea",
                },
            },
            ConnectorVersion: "ducimus",
            Description: "necessitatibus",
            DestinationConfigs: []shared.DestinationConfig{
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "ea",
                            Port: 6850399738405605986,
                            ServiceAttachment: "sint",
                        },
                        shared.Destination{
                            Host: "voluptatem",
                            Port: 3003290611676134007,
                            ServiceAttachment: "in",
                        },
                    },
                    Key: "libero",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "aut",
                            Port: 5542383823497440249,
                            ServiceAttachment: "est",
                        },
                    },
                    Key: "aut",
                },
            },
            Labels: map[string]string{
                "consequuntur": "placeat",
                "optio": "illo",
            },
            LockConfig: &shared.LockConfig{
                Locked: false,
                Reason: "est",
            },
            NodeConfig: &shared.NodeConfig{
                MaxNodeCount: 4403239330009925815,
                MinNodeCount: 6813042753866779208,
            },
            ServiceAccount: "vitae",
            Status: &shared.ConnectionStatus{
                Description: "nihil",
                State: "STATE_UNSPECIFIED",
                Status: "porro",
            },
            Suspended: true,
        },
    }
    
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->