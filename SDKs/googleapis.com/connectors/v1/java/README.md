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
