# User

## Overview

The *user* resource contains the [Standard Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) defined in the [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) specifications. It also includes some PhantAuth-specific property.

To use PhantAuth as an OpenID Connect provider, you don't need to carry out the user-related operations described here.
You don't need to generate users in advance. If PhantAuth requires a piece of data that belongs to a specific user, it will be generated in runtime.
The deterministic nature of the generators guarantee that the same user object will be generated to the same user name.
The only exception is selfie token generation, when the provided user data are used to create a so-called selfie token, which can later be used as a login name.

### Available Operations

* [GetUserUsername](#getuserusername) - Get a User
* [GetUserUsernameTokenKind](#getuserusernametokenkind) - Get a User Token
* [PostUser](#postuser) - Create a User Selfie

## GetUserUsername

Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
In lack of a user name, all calls generate a different user object to the randomly generated user name.

By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.

If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`

The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
The members of a team are users randomly generated from the team name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.GetUserUsername(ctx, operations.GetUserUsernameRequest{
        Username: "Sarah_Wolff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserUsername200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserUsernameTokenKind

It is used to generate OpenID Connect tokens as path parameters to a user of a given name.

This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.GetUserUsernameTokenKind(ctx, operations.GetUserUsernameTokenKindRequest{
        Kind: operations.GetUserUsernameTokenKindKindEnumSelfie,
        Scope: sdk.String("esse"),
        Username: "Jovan.Sauer72",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUser

To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
By the use of a selfie token, you can use your own user objects during the authentication process.

Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.User.PostUser(ctx, operations.PostUserRequestBody{
        AtID: sdk.String("officia"),
        Address: &operations.PostUserRequestBodyAddress{
            Country: sdk.String("Monaco"),
            Formatted: sdk.String("fugit"),
            Locality: sdk.String("deleniti"),
            PostalCode: sdk.String("75144-2177"),
            Region: sdk.String("esse"),
            StreetAddress: sdk.String("ipsum"),
        },
        Birthdate: sdk.String("excepturi"),
        Email: sdk.String("Aiden.Hane@gmail.com"),
        EmailVerified: sdk.Bool(false),
        FamilyName: sdk.String("iste"),
        Gender: sdk.String("female"),
        GivenName: sdk.String("natus"),
        Locale: sdk.String("laboriosam"),
        Me: sdk.String("hic"),
        MiddleName: sdk.String("saepe"),
        Name: sdk.String("Harvey Hessel"),
        Nickname: sdk.String("saepe"),
        Password: sdk.String("quidem"),
        PhoneNumber: sdk.String("architecto"),
        PhoneNumberVerified: sdk.Bool(false),
        Picture: sdk.String("ipsa"),
        PreferredUsername: sdk.String("reiciendis"),
        Profile: sdk.String("est"),
        Sub: "mollitia",
        UID: sdk.String("laborum"),
        UpdatedAt: sdk.Float64(1709.09),
        Webmail: sdk.String("dolorem"),
        Website: sdk.String("corporis"),
        Zoneinfo: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
