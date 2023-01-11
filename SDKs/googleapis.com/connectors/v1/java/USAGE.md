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
                    parent = "similique";
                }};
                queryParams = new ConnectorsProjectsLocationsConnectionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "soluta";
                    alt = "media";
                    callback = "voluptas";
                    connectionId = "et";
                    fields = "ipsum";
                    key = "consequatur";
                    oauthToken = "facilis";
                    prettyPrint = true;
                    quotaUser = "quas";
                    uploadType = "autem";
                    uploadProtocol = "natus";
                }};
                request = new ConnectionInput() {{
                    authConfig = new AuthConfig() {{
                        additionalVariables = new openapisdk.models.shared.ConfigVariable[]() {{
                            add(new ConfigVariable() {{
                                boolValue = true;
                                intValue = "incidunt";
                                key = "qui";
                                secretValue = new Secret() {{
                                    secretVersion = "nobis";
                                }};
                                stringValue = "reprehenderit";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = false;
                                intValue = "aliquid";
                                key = "et";
                                secretValue = new Secret() {{
                                    secretVersion = "et";
                                }};
                                stringValue = "quia";
                            }}),
                            add(new ConfigVariable() {{
                                boolValue = true;
                                intValue = "maiores";
                                key = "qui";
                                secretValue = new Secret() {{
                                    secretVersion = "velit";
                                }};
                                stringValue = "in";
                            }}),
                        }};
                        authType = "OAUTH2_AUTH_CODE_FLOW";
                        oauth2ClientCredentials = new Oauth2ClientCredentials() {{
                            clientId = "in";
                            clientSecret = new Secret() {{
                                secretVersion = "accusamus";
                            }};
                        }};
                        oauth2JwtBearer = new Oauth2JwtBearer() {{
                            clientKey = new Secret() {{
                                secretVersion = "atque";
                            }};
                            jwtClaims = new JwtClaims() {{
                                audience = "quo";
                                issuer = "esse";
                                subject = "consequatur";
                            }};
                        }};
                        sshPublicKey = new SshPublicKey() {{
                            certType = "nostrum";
                            sshClientCert = new Secret() {{
                                secretVersion = "laboriosam";
                            }};
                            sshClientCertPass = new Secret() {{
                                secretVersion = "debitis";
                            }};
                            username = "facere";
                        }};
                        userPassword = new UserPassword() {{
                            password = new Secret() {{
                                secretVersion = "nihil";
                            }};
                            username = "repellendus";
                        }};
                    }};
                    configVariables = new openapisdk.models.shared.ConfigVariable[]() {{
                        add(new ConfigVariable() {{
                            boolValue = false;
                            intValue = "rerum";
                            key = "qui";
                            secretValue = new Secret() {{
                                secretVersion = "recusandae";
                            }};
                            stringValue = "quibusdam";
                        }}),
                        add(new ConfigVariable() {{
                            boolValue = false;
                            intValue = "aperiam";
                            key = "numquam";
                            secretValue = new Secret() {{
                                secretVersion = "enim";
                            }};
                            stringValue = "enim";
                        }}),
                    }};
                    connectorVersion = "voluptates";
                    description = "dolore";
                    destinationConfigs = new openapisdk.models.shared.DestinationConfig[]() {{
                        add(new DestinationConfig() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    host = "sequi";
                                    port = 6630950261055481298;
                                    serviceAttachment = "nemo";
                                }}),
                            }};
                            key = "nisi";
                        }}),
                        add(new DestinationConfig() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    host = "ratione";
                                    port = 6232683837770868619;
                                    serviceAttachment = "dolorem";
                                }}),
                            }};
                            key = "facilis";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("similique", "ut");
                    }};
                    lockConfig = new LockConfig() {{
                        locked = true;
                        reason = "eum";
                    }};
                    nodeConfig = new NodeConfig() {{
                        maxNodeCount = 5473733748643851380;
                        minNodeCount = 4544853136902690256;
                    }};
                    serviceAccount = "voluptatum";
                    status = new ConnectionStatus() {{
                        description = "quaerat";
                        state = "ERROR";
                        status = "molestiae";
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