# user

## Overview

The *user* resource contains the [Standard Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) defined in the [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) specifications. It also includes some PhantAuth-specific property.

To use PhantAuth as an OpenID Connect provider, you don't need to carry out the user-related operations described here.
You don't need to generate users in advance. If PhantAuth requires a piece of data that belongs to a specific user, it will be generated in runtime.
The deterministic nature of the generators guarantee that the same user object will be generated to the same user name.
The only exception is selfie token generation, when the provided user data are used to create a so-called selfie token, which can later be used as a login name.

### Available Operations

* [getUserUsername](#getuserusername) - Get a User
* [getUserUsernameTokenKind](#getuserusernametokenkind) - Get a User Token
* [postUser](#postuser) - Create a User Selfie

## getUserUsername

Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
In lack of a user name, all calls generate a different user object to the randomly generated user name.

By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.

If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`

The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
The members of a team are users randomly generated from the team name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserUsernameRequest;
import org.openapis.openapi.models.operations.GetUserUsernameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserUsernameRequest req = new GetUserUsernameRequest("at");            

            GetUserUsernameResponse res = sdk.user.getUserUsername(req);

            if (res.getUserUsername200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserUsernameTokenKind

It is used to generate OpenID Connect tokens as path parameters to a user of a given name.

This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserUsernameTokenKindKindEnum;
import org.openapis.openapi.models.operations.GetUserUsernameTokenKindRequest;
import org.openapis.openapi.models.operations.GetUserUsernameTokenKindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserUsernameTokenKindRequest req = new GetUserUsernameTokenKindRequest(GetUserUsernameTokenKindKindEnum.PLAIN, "molestiae") {{
                scope = "quod";
            }};            

            GetUserUsernameTokenKindResponse res = sdk.user.getUserUsernameTokenKind(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUser

To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
By the use of a selfie token, you can use your own user objects during the authentication process.

Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserRequestBody;
import org.openapis.openapi.models.operations.PostUserRequestBodyAddress;
import org.openapis.openapi.models.operations.PostUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUserRequestBody req = new PostUserRequestBody("quod") {{
                atId = "esse";
                address = new PostUserRequestBodyAddress() {{
                    country = "Macao";
                    formatted = "porro";
                    locality = "dolorum";
                    postalCode = "76515";
                    region = "hic";
                    streetAddress = "optio";
                }};;
                birthdate = "totam";
                email = "Haskell18@gmail.com";
                emailVerified = false;
                familyName = "impedit";
                gender = "male";
                givenName = "esse";
                locale = "ipsum";
                me = "excepturi";
                middleName = "aspernatur";
                name = "Cathy Mosciski";
                nickname = "dolor";
                password = "natus";
                phoneNumber = "laboriosam";
                phoneNumberVerified = false;
                picture = "hic";
                preferredUsername = "saepe";
                profile = "fuga";
                uid = "in";
                updatedAt = 3595.08;
                webmail = "iste";
                website = "iure";
                zoneinfo = "saepe";
            }};            

            PostUserResponse res = sdk.user.postUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
