<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ConnectorsProjectsLocationsConnectionsCreateRequest req = new ConnectorsProjectsLocationsConnectionsCreateRequest() {{
                security = new ConnectorsProjectsLocationsConnectionsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ConnectorsProjectsLocationsConnectionsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new ConnectorsProjectsLocationsConnectionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    connectionId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new ConnectionInput() {{
                    authConfig = new AuthConfig() {{
                        additionalVariables = new openapisdk.models.shared.ConfigVariable[]() {{
                            add(new ConfigVariable() {{
                                boolValue = true;
                                intValue = "et";
                                key = "ut";
                                secretValue = new Secret() {{
                                    secretVersion = "dolorem";
                                }};
                                stringValue = "et";
                            }}),
                        }};
                        authType = "AUTH_TYPE_UNSPECIFIED";
                        oauth2ClientCredentials = new Oauth2ClientCredentials() {{
                            clientId = "iste";
                            clientSecret = new Secret() {{
                                secretVersion = "vitae";
                            }};
                        }};
                        oauth2JwtBearer = new Oauth2JwtBearer() {{
                            clientKey = new Secret() {{
                                secretVersion = "totam";
                            }};
                            jwtClaims = new JwtClaims() {{
                                audience = "dolores";
                                issuer = "illum";
                                subject = "debitis";
                            }};
                        }};
                        sshPublicKey = new SshPublicKey() {{
                            certType = "vel";
                            sshClientCert = new Secret() {{
                                secretVersion = "odio";
                            }};
                            sshClientCertPass = new Secret() {{
                                secretVersion = "dolore";
                            }};
                            username = "id";
                        }};
                        userPassword = new UserPassword() {{
                            password = new Secret() {{
                                secretVersion = "aspernatur";
                            }};
                            username = "accusantium";
                        }};
                    }};
                    configVariables = new openapisdk.models.shared.ConfigVariable[]() {{
                        add(new ConfigVariable() {{
                            boolValue = false;
                            intValue = "quis";
                            key = "est";
                            secretValue = new Secret() {{
                                secretVersion = "aut";
                            }};
                            stringValue = "odit";
                        }}),
                        add(new ConfigVariable() {{
                            boolValue = true;
                            intValue = "voluptas";
                            key = "omnis";
                            secretValue = new Secret() {{
                                secretVersion = "aut";
                            }};
                            stringValue = "illo";
                        }}),
                        add(new ConfigVariable() {{
                            boolValue = false;
                            intValue = "officiis";
                            key = "autem";
                            secretValue = new Secret() {{
                                secretVersion = "consectetur";
                            }};
                            stringValue = "nobis";
                        }}),
                    }};
                    connectorVersion = "odio";
                    description = "qui";
                    destinationConfigs = new openapisdk.models.shared.DestinationConfig[]() {{
                        add(new DestinationConfig() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    host = "ipsum";
                                    port = 8902041070398994519;
                                    serviceAttachment = "modi";
                                }}),
                                add(new Destination() {{
                                    host = "sint";
                                    port = 5392504858645185670;
                                    serviceAttachment = "ut";
                                }}),
                            }};
                            key = "exercitationem";
                        }}),
                        add(new DestinationConfig() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    host = "reprehenderit";
                                    port = 4736217237333769909;
                                    serviceAttachment = "maiores";
                                }}),
                                add(new Destination() {{
                                    host = "incidunt";
                                    port = 7242748068272024738;
                                    serviceAttachment = "beatae";
                                }}),
                                add(new Destination() {{
                                    host = "veritatis";
                                    port = 2671030200101705776;
                                    serviceAttachment = "et";
                                }}),
                            }};
                            key = "omnis";
                        }}),
                        add(new DestinationConfig() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    host = "ex";
                                    port = 7014402135919778893;
                                    serviceAttachment = "placeat";
                                }}),
                            }};
                            key = "vel";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("mollitia", "voluptas");
                        put("quam", "reprehenderit");
                        put("qui", "qui");
                    }};
                    lockConfig = new LockConfig() {{
                        locked = false;
                        reason = "in";
                    }};
                    nodeConfig = new NodeConfig() {{
                        maxNodeCount = 7132033595893905170;
                        minNodeCount = 8086159467323165929;
                    }};
                    serviceAccount = "ut";
                    status = new ConnectionStatus() {{
                        description = "itaque";
                        state = "DELETING";
                        status = "neque";
                    }};
                    suspended = true;
                }};
            }};

            ConnectorsProjectsLocationsConnectionsCreateResponse res = sdk.projects.connectorsProjectsLocationsConnectionsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->