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
            Parent: "laborum",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "media",
            Callback: "voluptatibus",
            ConnectionID: "debitis",
            Fields: "voluptates",
            Key: "et",
            OauthToken: "iure",
            PrettyPrint: false,
            QuotaUser: "asperiores",
            UploadType: "ea",
            UploadProtocol: "consectetur",
        },
        Request: &shared.ConnectionInput{
            AuthConfig: &shared.AuthConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: false,
                        IntValue: "suscipit",
                        Key: "maiores",
                        SecretValue: &shared.Secret{
                            SecretVersion: "iusto",
                        },
                        StringValue: "eos",
                    },
                    shared.ConfigVariable{
                        BoolValue: false,
                        IntValue: "repellat",
                        Key: "eligendi",
                        SecretValue: &shared.Secret{
                            SecretVersion: "ut",
                        },
                        StringValue: "et",
                    },
                },
                AuthType: "OAUTH2_CLIENT_CREDENTIALS",
                Oauth2ClientCredentials: &shared.Oauth2ClientCredentials{
                    ClientID: "odit",
                    ClientSecret: &shared.Secret{
                        SecretVersion: "aut",
                    },
                },
                Oauth2JwtBearer: &shared.Oauth2JwtBearer{
                    ClientKey: &shared.Secret{
                        SecretVersion: "rerum",
                    },
                    JwtClaims: &shared.JwtClaims{
                        Audience: "repudiandae",
                        Issuer: "quos",
                        Subject: "consequatur",
                    },
                },
                SSHPublicKey: &shared.SSHPublicKey{
                    CertType: "accusamus",
                    SSHClientCert: &shared.Secret{
                        SecretVersion: "rerum",
                    },
                    SSHClientCertPass: &shared.Secret{
                        SecretVersion: "eos",
                    },
                    Username: "est",
                },
                UserPassword: &shared.UserPassword{
                    Password: &shared.Secret{
                        SecretVersion: "qui",
                    },
                    Username: "enim",
                },
            },
            ConfigVariables: []shared.ConfigVariable{
                shared.ConfigVariable{
                    BoolValue: true,
                    IntValue: "nobis",
                    Key: "reiciendis",
                    SecretValue: &shared.Secret{
                        SecretVersion: "minus",
                    },
                    StringValue: "doloremque",
                },
                shared.ConfigVariable{
                    BoolValue: true,
                    IntValue: "voluptas",
                    Key: "autem",
                    SecretValue: &shared.Secret{
                        SecretVersion: "ut",
                    },
                    StringValue: "dicta",
                },
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "culpa",
                    Key: "et",
                    SecretValue: &shared.Secret{
                        SecretVersion: "provident",
                    },
                    StringValue: "id",
                },
            },
            ConnectorVersion: "dolorem",
            Description: "rerum",
            DestinationConfigs: []shared.DestinationConfig{
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "dolor",
                            Port: 6236403914782054328,
                            ServiceAttachment: "ab",
                        },
                        shared.Destination{
                            Host: "vel",
                            Port: 4094679320341630421,
                            ServiceAttachment: "et",
                        },
                        shared.Destination{
                            Host: "enim",
                            Port: 8623464447008361335,
                            ServiceAttachment: "corporis",
                        },
                    },
                    Key: "facere",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "assumenda",
                            Port: 4352521914877300365,
                            ServiceAttachment: "et",
                        },
                        shared.Destination{
                            Host: "minus",
                            Port: 6512242709642800696,
                            ServiceAttachment: "similique",
                        },
                    },
                    Key: "omnis",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "sunt",
                            Port: 1624115472900005299,
                            ServiceAttachment: "qui",
                        },
                        shared.Destination{
                            Host: "occaecati",
                            Port: 6185666323245807780,
                            ServiceAttachment: "alias",
                        },
                    },
                    Key: "eum",
                },
            },
            Labels: map[string]string{
                "quod": "quis",
                "accusantium": "magni",
            },
            LockConfig: &shared.LockConfig{
                Locked: false,
                Reason: "est",
            },
            NodeConfig: &shared.NodeConfig{
                MaxNodeCount: 8456589800173565241,
                MinNodeCount: 3490050072483158353,
            },
            ServiceAccount: "id",
            Status: &shared.ConnectionStatus{
                Description: "excepturi",
                State: "ERROR",
                Status: "labore",
            },
            Suspended: false,
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