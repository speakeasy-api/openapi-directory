# OauthAuthorizations

### Available Operations

* [~~OauthAuthorizationsCreateAuthorization~~](#oauthauthorizationscreateauthorization) - Create a new authorization :warning: **Deprecated**
* [~~OauthAuthorizationsDeleteAuthorization~~](#oauthauthorizationsdeleteauthorization) - Delete an authorization :warning: **Deprecated**
* [~~OauthAuthorizationsDeleteGrant~~](#oauthauthorizationsdeletegrant) - Delete a grant :warning: **Deprecated**
* [~~OauthAuthorizationsGetAuthorization~~](#oauthauthorizationsgetauthorization) - Get a single authorization :warning: **Deprecated**
* [~~OauthAuthorizationsGetGrant~~](#oauthauthorizationsgetgrant) - Get a single grant :warning: **Deprecated**
* [~~OauthAuthorizationsGetOrCreateAuthorizationForApp~~](#oauthauthorizationsgetorcreateauthorizationforapp) - Get-or-create an authorization for a specific app :warning: **Deprecated**
* [~~OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint~~](#oauthauthorizationsgetorcreateauthorizationforappandfingerprint) - Get-or-create an authorization for a specific app and fingerprint :warning: **Deprecated**
* [~~OauthAuthorizationsListAuthorizations~~](#oauthauthorizationslistauthorizations) - List your authorizations :warning: **Deprecated**
* [~~OauthAuthorizationsListGrants~~](#oauthauthorizationslistgrants) - List your grants :warning: **Deprecated**
* [~~OauthAuthorizationsUpdateAuthorization~~](#oauthauthorizationsupdateauthorization) - Update an existing authorization :warning: **Deprecated**

## ~~OauthAuthorizationsCreateAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.7/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

Creates OAuth tokens using [Basic Authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.

You can also create tokens on GitHub Enterprise Server from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://docs.github.com/enterprise-server@3.7/articles/creating-an-access-token-for-command-line-use).

Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://docs.github.com/enterprise-server@3.7/articles/about-identity-and-access-management-with-saml-single-sign-on).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#create-a-new-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsCreateAuthorization(ctx, operations.OauthAuthorizationsCreateAuthorizationRequestBody{
        ClientID: sdk.String("sequi"),
        ClientSecret: sdk.String("repudiandae"),
        Fingerprint: sdk.String("cum"),
        Note: sdk.String("Update all gems"),
        NoteURL: sdk.String("dicta"),
        Scopes: []string{
            "veniam",
            "animi",
            "dolores",
            "nam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## ~~OauthAuthorizationsDeleteAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#delete-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsDeleteAuthorization(ctx, operations.OauthAuthorizationsDeleteAuthorizationRequest{
        AuthorizationID: 115898,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~OauthAuthorizationsDeleteGrant~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#delete-a-grant>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsDeleteGrant(ctx, operations.OauthAuthorizationsDeleteGrantRequest{
        GrantID: 164488,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~OauthAuthorizationsGetAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#get-a-single-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsGetAuthorization(ctx, operations.OauthAuthorizationsGetAuthorizationRequest{
        AuthorizationID: 899867,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## ~~OauthAuthorizationsGetGrant~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#get-a-single-grant>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsGetGrant(ctx, operations.OauthAuthorizationsGetGrantRequest{
        GrantID: 748224,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationGrant != nil {
        // handle response
    }
}
```

## ~~OauthAuthorizationsGetOrCreateAuthorizationForApp~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.7/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsGetOrCreateAuthorizationForApp(ctx, operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequest{
        RequestBody: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody{
            ClientSecret: "ipsa",
            Fingerprint: sdk.String("ducimus"),
            Note: sdk.String("Update all gems"),
            NoteURL: sdk.String("maiores"),
            Scopes: []string{
                "quasi",
            },
        },
        ClientID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## ~~OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.7/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(ctx, operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest{
        RequestBody: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody{
            ClientSecret: "pariatur",
            Note: sdk.String("Update all gems"),
            NoteURL: sdk.String("libero"),
            Scopes: []string{
                "occaecati",
                "nemo",
                "aliquam",
            },
        },
        ClientID: "nostrum",
        Fingerprint: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```

## ~~OauthAuthorizationsListAuthorizations~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#list-your-authorizations>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsListAuthorizations(ctx, operations.OauthAuthorizationsListAuthorizationsRequest{
        ClientID: sdk.String("eligendi"),
        Page: sdk.Int64(574032),
        PerPage: sdk.Int64(314573),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorizations != nil {
        // handle response
    }
}
```

## ~~OauthAuthorizationsListGrants~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#list-your-grants>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsListGrants(ctx, operations.OauthAuthorizationsListGrantsRequest{
        ClientID: sdk.String("hic"),
        Page: sdk.Int64(657319),
        PerPage: sdk.Int64(559774),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationGrants != nil {
        // handle response
    }
}
```

## ~~OauthAuthorizationsUpdateAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.7/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.7/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

You can only send one of these scope keys at a time.

API method documentation
<https://docs.github.com/enterprise-server@3.7/rest/reference/oauth-authorizations#update-an-existing-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.OauthAuthorizations.OauthAuthorizationsUpdateAuthorization(ctx, operations.OauthAuthorizationsUpdateAuthorizationRequest{
        RequestBody: &operations.OauthAuthorizationsUpdateAuthorizationRequestBody{
            AddScopes: []string{
                "molestias",
                "odio",
                "eaque",
            },
            Fingerprint: sdk.String("saepe"),
            Note: sdk.String("Update all gems"),
            NoteURL: sdk.String("architecto"),
            RemoveScopes: []string{
                "iste",
                "assumenda",
                "tempore",
            },
            Scopes: []string{
                "velit",
                "doloremque",
                "delectus",
            },
        },
        AuthorizationID: 773110,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Authorization != nil {
        // handle response
    }
}
```
