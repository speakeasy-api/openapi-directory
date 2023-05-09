# authentication

## Overview

Authenticate KumpeApps users (required to get apiKey)

### Available Operations

* [~~appkeyPatch~~](#appkeypatch) - Compromise app key :warning: **Deprecated**
* [~~appkeyPost~~](#appkeypost) - Request app key :warning: **Deprecated**
* [~~appkeyPut~~](#appkeyput) - Deactivate app key :warning: **Deprecated**
* [authAppkeyPatch](#authappkeypatch) - Compromise app key
* [authAppkeyPost](#authappkeypost) - Request app key
* [authAppkeyPut](#authappkeyput) - Deactivate app key
* [authAuthkeyGet](#authauthkeyget) - Request auth key for user (login user)
* [authAuthkeyPatch](#authauthkeypatch) - Compromise auth key
* [authAuthkeyPost](#authauthkeypost) - Request auth key for user (login user)
* [authAuthkeyPut](#authauthkeyput) - Deactivate auth key (logout)
* [authVerifyotpGet](#authverifyotpget) - Verifies YubiKey OTP for authenticated user
* [~~authkeyGet~~](#authkeyget) - Request auth key for user (login user) :warning: **Deprecated**
* [~~authkeyPatch~~](#authkeypatch) - Compromise auth key :warning: **Deprecated**
* [~~authkeyPost~~](#authkeypost) - Request auth key for user (login user) :warning: **Deprecated**
* [~~authkeyPut~~](#authkeyput) - Deactivate auth key (logout) :warning: **Deprecated**

## ~~appkeyPatch~~

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppkeyPatchRequest;
import org.openapis.openapi.models.operations.AppkeyPatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppkeyPatchRequest req = new AppkeyPatchRequest("mollitia") {{
                comments = "occaecati";
            }};            

            AppkeyPatchResponse res = sdk.authentication.appkeyPatch(req);

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~appkeyPost~~

Request a new app key by passing username and password for app account

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppkeyPostRequest;
import org.openapis.openapi.models.operations.AppkeyPostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AppkeyPostRequest req = new AppkeyPostRequest("commodi", false, "quam");            

            AppkeyPostResponse res = sdk.authentication.appkeyPost(req);

            if (res.inlineResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~appkeyPut~~

Pass your app key to deactivate the key

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppkeyPutRequest;
import org.openapis.openapi.models.operations.AppkeyPutResponse;
import org.openapis.openapi.models.operations.AppkeyPutSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppkeyPutRequest req = new AppkeyPutRequest("molestiae");            

            AppkeyPutResponse res = sdk.authentication.appkeyPut(req, new AppkeyPutSecurity("velit") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authAppkeyPatch

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAppkeyPatchRequest;
import org.openapis.openapi.models.operations.AuthAppkeyPatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AuthAppkeyPatchRequest req = new AuthAppkeyPatchRequest("quia") {{
                comments = "quis";
            }};            

            AuthAppkeyPatchResponse res = sdk.authentication.authAppkeyPatch(req);

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authAppkeyPost

Request a new app key by passing username and password for app account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAppkeyPostRequest;
import org.openapis.openapi.models.operations.AuthAppkeyPostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AuthAppkeyPostRequest req = new AuthAppkeyPostRequest("laborum", false, "animi");            

            AuthAppkeyPostResponse res = sdk.authentication.authAppkeyPost(req);

            if (res.inlineResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authAppkeyPut

Pass your app key to deactivate the key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAppkeyPutRequest;
import org.openapis.openapi.models.operations.AuthAppkeyPutResponse;
import org.openapis.openapi.models.operations.AuthAppkeyPutSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAppkeyPutRequest req = new AuthAppkeyPutRequest("enim");            

            AuthAppkeyPutResponse res = sdk.authentication.authAppkeyPut(req, new AuthAppkeyPutSecurity("odit") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authAuthkeyGet

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAuthkeyGetRequest;
import org.openapis.openapi.models.operations.AuthAuthkeyGetResponse;
import org.openapis.openapi.models.operations.AuthAuthkeyGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAuthkeyGetRequest req = new AuthAuthkeyGetRequest("quo", "sequi") {{
                deviceName = "tenetur";
                identifierForVendor = "ipsam";
                otp = "id";
            }};            

            AuthAuthkeyGetResponse res = sdk.authentication.authAuthkeyGet(req, new AuthAuthkeyGetSecurity("possimus") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse2011 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authAuthkeyPatch

Mark user auth key as compromised

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAuthkeyPatchRequest;
import org.openapis.openapi.models.operations.AuthAuthkeyPatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AuthAuthkeyPatchRequest req = new AuthAuthkeyPatchRequest("quasi") {{
                comments = "error";
            }};            

            AuthAuthkeyPatchResponse res = sdk.authentication.authAuthkeyPatch(req);

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authAuthkeyPost

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAuthkeyPostRequest;
import org.openapis.openapi.models.operations.AuthAuthkeyPostResponse;
import org.openapis.openapi.models.operations.AuthAuthkeyPostSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAuthkeyPostRequest req = new AuthAuthkeyPostRequest("temporibus", "laborum") {{
                otp = "quasi";
            }};            

            AuthAuthkeyPostResponse res = sdk.authentication.authAuthkeyPost(req, new AuthAuthkeyPostSecurity("reiciendis") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse2011 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authAuthkeyPut

Deactivate auth key for user logging them out of your application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAuthkeyPutRequest;
import org.openapis.openapi.models.operations.AuthAuthkeyPutResponse;
import org.openapis.openapi.models.operations.AuthAuthkeyPutSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAuthkeyPutRequest req = new AuthAuthkeyPutRequest("voluptatibus");            

            AuthAuthkeyPutResponse res = sdk.authentication.authAuthkeyPut(req, new AuthAuthkeyPutSecurity("vero") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authVerifyotpGet

Verifies YubiKey OTP for authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthVerifyotpGetRequest;
import org.openapis.openapi.models.operations.AuthVerifyotpGetResponse;
import org.openapis.openapi.models.operations.AuthVerifyotpGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthVerifyotpGetRequest req = new AuthVerifyotpGetRequest("nihil");            

            AuthVerifyotpGetResponse res = sdk.authentication.authVerifyotpGet(req, new AuthVerifyotpGetSecurity("praesentium") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~authkeyGet~~

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthkeyGetRequest;
import org.openapis.openapi.models.operations.AuthkeyGetResponse;
import org.openapis.openapi.models.operations.AuthkeyGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthkeyGetRequest req = new AuthkeyGetRequest("voluptatibus", "ipsa") {{
                otp = "omnis";
            }};            

            AuthkeyGetResponse res = sdk.authentication.authkeyGet(req, new AuthkeyGetSecurity("voluptate") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse2011 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~authkeyPatch~~

Mark user auth key as compromised

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthkeyPatchRequest;
import org.openapis.openapi.models.operations.AuthkeyPatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AuthkeyPatchRequest req = new AuthkeyPatchRequest("perferendis") {{
                comments = "doloremque";
            }};            

            AuthkeyPatchResponse res = sdk.authentication.authkeyPatch(req);

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~authkeyPost~~

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthkeyPostRequest;
import org.openapis.openapi.models.operations.AuthkeyPostResponse;
import org.openapis.openapi.models.operations.AuthkeyPostSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthkeyPostRequest req = new AuthkeyPostRequest("reprehenderit", "ut") {{
                otp = "maiores";
            }};            

            AuthkeyPostResponse res = sdk.authentication.authkeyPost(req, new AuthkeyPostSecurity("dicta") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse2011 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~authkeyPut~~

Deactivate auth key for user logging them out of your application

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthkeyPutRequest;
import org.openapis.openapi.models.operations.AuthkeyPutResponse;
import org.openapis.openapi.models.operations.AuthkeyPutSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthkeyPutRequest req = new AuthkeyPutRequest("corporis");            

            AuthkeyPutResponse res = sdk.authentication.authkeyPut(req, new AuthkeyPutSecurity("dolore") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.inlineResponse202 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
