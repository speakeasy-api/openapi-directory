# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `connectorsProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `connectorsProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `connectorsProjectsLocationsConnectionsPatch` - Updates the parameters of a single Connection.
* `connectorsProjectsLocationsConnectionsRuntimeActionSchemasList` - List schema of a runtime actions filtered by action name.
* `connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList` - List schema of a runtime entities filtered by entity name.
* `connectorsProjectsLocationsList` - Lists information about the supported locations for this service.
* `connectorsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `connectorsProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `connectorsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `connectorsProjectsLocationsProvidersConnectorsList` - Lists Connectors in a given project and location.
* `connectorsProjectsLocationsProvidersConnectorsVersionsGet` - Gets details of a single connector version.
* `connectorsProjectsLocationsProvidersConnectorsVersionsList` - Lists Connector Versions in a given project and location.
* `connectorsProjectsLocationsProvidersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `connectorsProjectsLocationsProvidersList` - Lists Providers in a given project and location.
* `connectorsProjectsLocationsProvidersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `connectorsProjectsLocationsProvidersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
