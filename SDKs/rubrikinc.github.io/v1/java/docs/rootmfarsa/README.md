# rootMfaRsa

### Available Operations

* [createRsaMfaServer](#creatersamfaserver) - Register a new RSA server
* [deleteRsaMfaServer](#deletersamfaserver) - Delete RSA server
* [getRsaMfaServer](#getrsamfaserver) - Get RSA server configuration
* [queryRsaMfaServers](#queryrsamfaservers) - Get RSA server configuration
* [updateRsaMfaServer](#updatersamfaserver) - Update RSA server configuration

## createRsaMfaServer

Register a new RSA server using specified configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRsaMfaServerResponse;
import org.openapis.openapi.models.shared.RsaMfaServerConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolores", "nam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RsaMfaServerConfig req = new RsaMfaServerConfig("dicta", "consequuntur", "necessitatibus") {{
                assurancePolicyName = "nobis";
                certificateId = "ipsa";
                clientId = "ducimus";
                ldapUsernameAttribute = "maiores";
                restApiAccessId = "veritatis";
                timeout = 96450;
            }};            

            CreateRsaMfaServerResponse res = sdk.rootMfaRsa.createRsaMfaServer(req);

            if (res.rsaMfaServerDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRsaMfaServer

Delete RSA server configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRsaMfaServerRequest;
import org.openapis.openapi.models.operations.DeleteRsaMfaServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laboriosam", "pariatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteRsaMfaServerRequest req = new DeleteRsaMfaServerRequest("libero");            

            DeleteRsaMfaServerResponse res = sdk.rootMfaRsa.deleteRsaMfaServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRsaMfaServer

Get RSA server configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRsaMfaServerRequest;
import org.openapis.openapi.models.operations.GetRsaMfaServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("excepturi", "occaecati") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRsaMfaServerRequest req = new GetRsaMfaServerRequest("nemo");            

            GetRsaMfaServerResponse res = sdk.rootMfaRsa.getRsaMfaServer(req);

            if (res.rsaMfaServerDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryRsaMfaServers

Get RSA server configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryRsaMfaServersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aliquam", "nostrum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryRsaMfaServersResponse res = sdk.rootMfaRsa.queryRsaMfaServers();

            if (res.rsaMfaServerDetailListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRsaMfaServer

Update an existing RSA server using specified configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRsaMfaServerRequest;
import org.openapis.openapi.models.operations.UpdateRsaMfaServerRequestBody;
import org.openapis.openapi.models.operations.UpdateRsaMfaServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("doloribus", "eligendi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateRsaMfaServerRequest req = new UpdateRsaMfaServerRequest(                new UpdateRsaMfaServerRequestBody() {{
                                assurancePolicyName = "sint";
                                baseUrl = "enim";
                                certificateId = "hic";
                                clientId = "animi";
                                ldapUsernameAttribute = "quas";
                                name = "Dr. Virgil Kuhic V";
                                restApiAccessId = "iste";
                                restApiKey = "assumenda";
                                timeout = 731634;
                            }};, "libero");            

            UpdateRsaMfaServerResponse res = sdk.rootMfaRsa.updateRsaMfaServer(req);

            if (res.rsaMfaServerDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
