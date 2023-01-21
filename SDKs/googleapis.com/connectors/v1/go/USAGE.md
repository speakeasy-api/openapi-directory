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
            Parent: "sit",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ConnectionID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.ConnectionInput{
            AuthConfig: &shared.AuthConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: true,
                        IntValue: "et",
                        Key: "ut",
                        SecretValue: &shared.Secret{
                            SecretVersion: "dolorem",
                        },
                        StringValue: "et",
                    },
                },
                AuthType: "AUTH_TYPE_UNSPECIFIED",
                Oauth2ClientCredentials: &shared.Oauth2ClientCredentials{
                    ClientID: "iste",
                    ClientSecret: &shared.Secret{
                        SecretVersion: "vitae",
                    },
                },
                Oauth2JwtBearer: &shared.Oauth2JwtBearer{
                    ClientKey: &shared.Secret{
                        SecretVersion: "totam",
                    },
                    JwtClaims: &shared.JwtClaims{
                        Audience: "dolores",
                        Issuer: "illum",
                        Subject: "debitis",
                    },
                },
                SSHPublicKey: &shared.SSHPublicKey{
                    CertType: "vel",
                    SSHClientCert: &shared.Secret{
                        SecretVersion: "odio",
                    },
                    SSHClientCertPass: &shared.Secret{
                        SecretVersion: "dolore",
                    },
                    Username: "id",
                },
                UserPassword: &shared.UserPassword{
                    Password: &shared.Secret{
                        SecretVersion: "aspernatur",
                    },
                    Username: "accusantium",
                },
            },
            ConfigVariables: []shared.ConfigVariable{
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "quis",
                    Key: "est",
                    SecretValue: &shared.Secret{
                        SecretVersion: "aut",
                    },
                    StringValue: "odit",
                },
                shared.ConfigVariable{
                    BoolValue: true,
                    IntValue: "voluptas",
                    Key: "omnis",
                    SecretValue: &shared.Secret{
                        SecretVersion: "aut",
                    },
                    StringValue: "illo",
                },
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "officiis",
                    Key: "autem",
                    SecretValue: &shared.Secret{
                        SecretVersion: "consectetur",
                    },
                    StringValue: "nobis",
                },
            },
            ConnectorVersion: "odio",
            Description: "qui",
            DestinationConfigs: []shared.DestinationConfig{
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "ipsum",
                            Port: 8902041070398994519,
                            ServiceAttachment: "modi",
                        },
                        shared.Destination{
                            Host: "sint",
                            Port: 5392504858645185670,
                            ServiceAttachment: "ut",
                        },
                    },
                    Key: "exercitationem",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "reprehenderit",
                            Port: 4736217237333769909,
                            ServiceAttachment: "maiores",
                        },
                        shared.Destination{
                            Host: "incidunt",
                            Port: 7242748068272024738,
                            ServiceAttachment: "beatae",
                        },
                        shared.Destination{
                            Host: "veritatis",
                            Port: 2671030200101705776,
                            ServiceAttachment: "et",
                        },
                    },
                    Key: "omnis",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "ex",
                            Port: 7014402135919778893,
                            ServiceAttachment: "placeat",
                        },
                    },
                    Key: "vel",
                },
            },
            Labels: map[string]string{
                "mollitia": "voluptas",
                "quam": "reprehenderit",
                "qui": "qui",
            },
            LockConfig: &shared.LockConfig{
                Locked: false,
                Reason: "in",
            },
            NodeConfig: &shared.NodeConfig{
                MaxNodeCount: 7132033595893905170,
                MinNodeCount: 8086159467323165929,
            },
            ServiceAccount: "ut",
            Status: &shared.ConnectionStatus{
                Description: "itaque",
                State: "DELETING",
                Status: "neque",
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