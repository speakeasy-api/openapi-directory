# client

## Overview

The client object contains standard OAuth2/OpenID Connect client properties. To use an OpenID Connect flow, you need a client_id. Certain flows also require a client_secret. The client object contains the client_id and client_secret values, as well as some properties to be displayed to the user (e.g. logo, client name, version).

### Available Operations

* [getClientClientId](#getclientclientid) - Get a Client
* [getClientClientIdTokenKind](#getclientclientidtokenkind) - Get a Client Token
* [postClient](#postclient) - Create a Client Selfie

## getClientClientId

Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
In lack of a client ID, all calls generate a different client object to the randomly generated client ID.

By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.

If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`

The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
The members of a fleet are clients randomly generated from the fleet name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientClientIdRequest;
import org.openapis.openapi.models.operations.GetClientClientIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientClientIdRequest req = new GetClientClientIdRequest("provident");            

            GetClientClientIdResponse res = sdk.client.getClientClientId(req);

            if (res.getClientClientId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClientClientIdTokenKind

It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.

It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientClientIdTokenKindKindEnum;
import org.openapis.openapi.models.operations.GetClientClientIdTokenKindRequest;
import org.openapis.openapi.models.operations.GetClientClientIdTokenKindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientClientIdTokenKindRequest req = new GetClientClientIdTokenKindRequest("distinctio", GetClientClientIdTokenKindKindEnum.PLAIN);            

            GetClientClientIdTokenKindResponse res = sdk.client.getClientClientIdTokenKind(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postClient

To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
By the use of a selfie token, you can use your own client objects in the authentication process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostClientRequestBody;
import org.openapis.openapi.models.operations.PostClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostClientRequestBody req = new PostClientRequestBody("unde") {{
                atId = "nulla";
                clientName = "corrupti";
                clientSecret = "illum";
                clientUri = "vel";
                contacts = new Object[]{{
                    add("deserunt"),
                    add("suscipit"),
                    add("iure"),
                }};
                grantTypes = new Object[]{{
                    add("debitis"),
                    add("ipsa"),
                }};
                jwks = new Object[]{{
                    add("tempora"),
                    add("suscipit"),
                    add("molestiae"),
                    add("minus"),
                }};
                jwksUri = "placeat";
                logoEmail = "voluptatum";
                logoUri = "iusto";
                policyUri = "excepturi";
                redirectUris = new Object[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                responseTypes = new Object[]{{
                    add("quis"),
                }};
                scope = "veritatis";
                softwareId = "deserunt";
                softwareVersion = "perferendis";
                tokenEndpointAuthMethod = "ipsam";
                tosUri = "repellendus";
            }};            

            PostClientResponse res = sdk.client.postClient(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
