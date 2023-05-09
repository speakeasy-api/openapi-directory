# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createDeviceCode](#createdevicecode) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [createToken](#createtoken) - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* [fetchCerts](#fetchcerts) - Fetches public JWKs
* [fetchOpenidDiscovery](#fetchopeniddiscovery) - Fetch configuration details about the OpenID Connect Authorization Server
* [fetchUserInfo](#fetchuserinfo) - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).

## createDeviceCode

Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceCodeCreateDeviceCodeRequest;
import org.openapis.openapi.models.operations.CreateDeviceCodeResponse;
import org.openapis.openapi.models.operations.CreateDeviceCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeviceCodeCreateDeviceCodeRequest req = new CreateDeviceCodeCreateDeviceCodeRequest("iure",                 new String[]{{
                                add("debitis"),
                                add("ipsa"),
                            }}) {{
                audiences = new String[]{{
                    add("tempora"),
                    add("suscipit"),
                    add("molestiae"),
                    add("minus"),
                }};
            }};            

            CreateDeviceCodeResponse res = sdk.sdk.createDeviceCode(req, new CreateDeviceCodeSecurity("placeat", "voluptatum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.oauthV1DeviceCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createToken

Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenCreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.operations.CreateTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTokenCreateTokenRequest req = new CreateTokenCreateTokenRequest("iusto", "excepturi") {{
                clientSecret = "nisi";
                code = "recusandae";
                codeVerifier = "temporibus";
                deviceCode = "ab";
                deviceId = "quis";
                refreshToken = "veritatis";
            }};            

            CreateTokenResponse res = sdk.sdk.createToken(req, new CreateTokenSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.oauthV1Token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCerts

Fetches public JWKs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCertsResponse;
import org.openapis.openapi.models.operations.FetchCertsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCertsResponse res = sdk.sdk.fetchCerts(new FetchCertsSecurity("ipsam", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.oauthV1Certs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchOpenidDiscovery

Fetch configuration details about the OpenID Connect Authorization Server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchOpenidDiscoveryResponse;
import org.openapis.openapi.models.operations.FetchOpenidDiscoverySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchOpenidDiscoveryResponse res = sdk.sdk.fetchOpenidDiscovery(new FetchOpenidDiscoverySecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.oauthV1OpenidDiscovery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUserInfo

Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUserInfoResponse;
import org.openapis.openapi.models.operations.FetchUserInfoSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUserInfoResponse res = sdk.sdk.fetchUserInfo(new FetchUserInfoSecurity("odit", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.oauthV1UserInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
