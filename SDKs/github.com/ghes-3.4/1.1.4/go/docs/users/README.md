# Users

## Overview

Interact with and view information about users and also current user.

### Available Operations

* [UsersAddEmailForAuthenticatedUser](#usersaddemailforauthenticateduser) - Add an email address for the authenticated user
* [UsersCheckFollowingForUser](#userscheckfollowingforuser) - Check if a user follows another user
* [UsersCheckPersonIsFollowedByAuthenticated](#userscheckpersonisfollowedbyauthenticated) - Check if a person is followed by the authenticated user
* [UsersCreateGpgKeyForAuthenticatedUser](#userscreategpgkeyforauthenticateduser) - Create a GPG key for the authenticated user
* [UsersCreatePublicSSHKeyForAuthenticatedUser](#userscreatepublicsshkeyforauthenticateduser) - Create a public SSH key for the authenticated user
* [UsersDeleteEmailForAuthenticatedUser](#usersdeleteemailforauthenticateduser) - Delete an email address for the authenticated user
* [UsersDeleteGpgKeyForAuthenticatedUser](#usersdeletegpgkeyforauthenticateduser) - Delete a GPG key for the authenticated user
* [UsersDeletePublicSSHKeyForAuthenticatedUser](#usersdeletepublicsshkeyforauthenticateduser) - Delete a public SSH key for the authenticated user
* [UsersFollow](#usersfollow) - Follow a user
* [UsersGetAuthenticated](#usersgetauthenticated) - Get the authenticated user
* [UsersGetByUsername](#usersgetbyusername) - Get a user
* [UsersGetContextForUser](#usersgetcontextforuser) - Get contextual information for a user
* [UsersGetGpgKeyForAuthenticatedUser](#usersgetgpgkeyforauthenticateduser) - Get a GPG key for the authenticated user
* [UsersGetPublicSSHKeyForAuthenticatedUser](#usersgetpublicsshkeyforauthenticateduser) - Get a public SSH key for the authenticated user
* [UsersList](#userslist) - List users
* [UsersListEmailsForAuthenticatedUser](#userslistemailsforauthenticateduser) - List email addresses for the authenticated user
* [UsersListFollowedByAuthenticatedUser](#userslistfollowedbyauthenticateduser) - List the people the authenticated user follows
* [UsersListFollowersForAuthenticatedUser](#userslistfollowersforauthenticateduser) - List followers of the authenticated user
* [UsersListFollowersForUser](#userslistfollowersforuser) - List followers of a user
* [UsersListFollowingForUser](#userslistfollowingforuser) - List the people a user follows
* [UsersListGpgKeysForAuthenticatedUser](#userslistgpgkeysforauthenticateduser) - List GPG keys for the authenticated user
* [UsersListGpgKeysForUser](#userslistgpgkeysforuser) - List GPG keys for a user
* [UsersListPublicEmailsForAuthenticatedUser](#userslistpublicemailsforauthenticateduser) - List public email addresses for the authenticated user
* [UsersListPublicKeysForUser](#userslistpublickeysforuser) - List public keys for a user
* [UsersListPublicSSHKeysForAuthenticatedUser](#userslistpublicsshkeysforauthenticateduser) - List public SSH keys for the authenticated user
* [UsersUnfollow](#usersunfollow) - Unfollow a user
* [UsersUpdateAuthenticated](#usersupdateauthenticated) - Update the authenticated user

## UsersAddEmailForAuthenticatedUser

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#add-an-email-address-for-the-authenticated-user>

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
    res, err := s.Users.UsersAddEmailForAuthenticatedUser(ctx, operations.UsersAddEmailForAuthenticatedUserRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersCheckFollowingForUser

Check if a user follows another user

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#check-if-a-user-follows-another-user>

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
    res, err := s.Users.UsersCheckFollowingForUser(ctx, operations.UsersCheckFollowingForUserRequest{
        TargetUser: "voluptate",
        Username: "Devin91",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersCheckPersonIsFollowedByAuthenticated

Check if a person is followed by the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user>

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
    res, err := s.Users.UsersCheckPersonIsFollowedByAuthenticated(ctx, operations.UsersCheckPersonIsFollowedByAuthenticatedRequest{
        Username: "Rene91",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersCreateGpgKeyForAuthenticatedUser

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#create-a-gpg-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersCreateGpgKeyForAuthenticatedUser(ctx, operations.UsersCreateGpgKeyForAuthenticatedUserRequestBody{
        ArmoredPublicKey: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKey != nil {
        // handle response
    }
}
```

## UsersCreatePublicSSHKeyForAuthenticatedUser

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersCreatePublicSSHKeyForAuthenticatedUser(ctx, operations.UsersCreatePublicSSHKeyForAuthenticatedUserRequestBody{
        Key: "ea",
        Title: sdk.String("Personal MacBook Air"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## UsersDeleteEmailForAuthenticatedUser

This endpoint is accessible with the `user` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#delete-an-email-address-for-the-authenticated-user>

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
    res, err := s.Users.UsersDeleteEmailForAuthenticatedUser(ctx, operations.UsersDeleteEmailForAuthenticatedUserRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeleteGpgKeyForAuthenticatedUser

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersDeleteGpgKeyForAuthenticatedUser(ctx, operations.UsersDeleteGpgKeyForAuthenticatedUserRequest{
        GpgKeyID: 179906,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersDeletePublicSSHKeyForAuthenticatedUser

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersDeletePublicSSHKeyForAuthenticatedUser(ctx, operations.UsersDeletePublicSSHKeyForAuthenticatedUserRequest{
        KeyID: 305267,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersFollow

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#follow-a-user>

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
    res, err := s.Users.UsersFollow(ctx, operations.UsersFollowRequest{
        Username: "Jillian_Welch42",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersGetAuthenticated

If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#get-the-authenticated-user>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Users.UsersGetAuthenticated(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetAuthenticated200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## UsersGetByUsername

Provides publicly available information about someone with a GitHub account.

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@3.4/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below"

The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-server@3.4/rest/reference/users#emails)".

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#get-a-user>

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
    res, err := s.Users.UsersGetByUsername(ctx, operations.UsersGetByUsernameRequest{
        Username: "Cloyd_McGlynn",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetByUsername200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## UsersGetContextForUser

Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:

```shell
 curl -u username:token
  https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
```

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#get-contextual-information-for-a-user>

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
    res, err := s.Users.UsersGetContextForUser(ctx, operations.UsersGetContextForUserRequest{
        SubjectID: sdk.String("beatae"),
        SubjectType: operations.UsersGetContextForUserSubjectTypeEnumOrganization.ToPointer(),
        Username: "Mac_Reichert68",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hovercard != nil {
        // handle response
    }
}
```

## UsersGetGpgKeyForAuthenticatedUser

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#get-a-gpg-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersGetGpgKeyForAuthenticatedUser(ctx, operations.UsersGetGpgKeyForAuthenticatedUserRequest{
        GpgKeyID: 733763,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKey != nil {
        // handle response
    }
}
```

## UsersGetPublicSSHKeyForAuthenticatedUser

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user>

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
    res, err := s.Users.UsersGetPublicSSHKeyForAuthenticatedUser(ctx, operations.UsersGetPublicSSHKeyForAuthenticatedUserRequest{
        KeyID: 417333,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Key != nil {
        // handle response
    }
}
```

## UsersList

Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.4/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-users>

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
    res, err := s.Users.UsersList(ctx, operations.UsersListRequest{
        PerPage: sdk.Int64(146742),
        Since: sdk.Int64(383066),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListEmailsForAuthenticatedUser

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-email-addresses-for-the-authenticated-user>

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
    res, err := s.Users.UsersListEmailsForAuthenticatedUser(ctx, operations.UsersListEmailsForAuthenticatedUserRequest{
        Page: sdk.Int64(453880),
        PerPage: sdk.Int64(393122),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersListFollowedByAuthenticatedUser

Lists the people who the authenticated user follows.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-the-people-the-authenticated-user-follows>

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
    res, err := s.Users.UsersListFollowedByAuthenticatedUser(ctx, operations.UsersListFollowedByAuthenticatedUserRequest{
        Page: sdk.Int64(397160),
        PerPage: sdk.Int64(589712),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListFollowersForAuthenticatedUser

Lists the people following the authenticated user.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-followers-of-the-authenticated-user>

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
    res, err := s.Users.UsersListFollowersForAuthenticatedUser(ctx, operations.UsersListFollowersForAuthenticatedUserRequest{
        Page: sdk.Int64(385760),
        PerPage: sdk.Int64(881568),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListFollowersForUser

Lists the people following the specified user.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-followers-of-a-user>

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
    res, err := s.Users.UsersListFollowersForUser(ctx, operations.UsersListFollowersForUserRequest{
        Page: sdk.Int64(68292),
        PerPage: sdk.Int64(929067),
        Username: "Patsy18",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListFollowingForUser

Lists the people who the specified user follows.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-the-people-a-user-follows>

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
    res, err := s.Users.UsersListFollowingForUser(ctx, operations.UsersListFollowingForUserRequest{
        Page: sdk.Int64(163263),
        PerPage: sdk.Int64(112224),
        Username: "Maverick34",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SimpleUsers != nil {
        // handle response
    }
}
```

## UsersListGpgKeysForAuthenticatedUser

Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-gpg-keys-for-the-authenticated-user>

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
    res, err := s.Users.UsersListGpgKeysForAuthenticatedUser(ctx, operations.UsersListGpgKeysForAuthenticatedUserRequest{
        Page: sdk.Int64(847018),
        PerPage: sdk.Int64(506532),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKeys != nil {
        // handle response
    }
}
```

## UsersListGpgKeysForUser

Lists the GPG keys for a user. This information is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-gpg-keys-for-a-user>

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
    res, err := s.Users.UsersListGpgKeysForUser(ctx, operations.UsersListGpgKeysForUserRequest{
        Page: sdk.Int64(601626),
        PerPage: sdk.Int64(629461),
        Username: "Nichole89",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GpgKeys != nil {
        // handle response
    }
}
```

## UsersListPublicEmailsForAuthenticatedUser

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@3.4/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-public-email-addresses-for-the-authenticated-user>

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
    res, err := s.Users.UsersListPublicEmailsForAuthenticatedUser(ctx, operations.UsersListPublicEmailsForAuthenticatedUserRequest{
        Page: sdk.Int64(751381),
        PerPage: sdk.Int64(989089),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Emails != nil {
        // handle response
    }
}
```

## UsersListPublicKeysForUser

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-public-keys-for-a-user>

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
    res, err := s.Users.UsersListPublicKeysForUser(ctx, operations.UsersListPublicKeysForUserRequest{
        Page: sdk.Int64(836053),
        PerPage: sdk.Int64(662857),
        Username: "Karelle77",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeySimples != nil {
        // handle response
    }
}
```

## UsersListPublicSSHKeysForAuthenticatedUser

Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@3.4/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user>

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
    res, err := s.Users.UsersListPublicSSHKeysForAuthenticatedUser(ctx, operations.UsersListPublicSSHKeysForAuthenticatedUserRequest{
        Page: sdk.Int64(329973),
        PerPage: sdk.Int64(307532),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Keys != nil {
        // handle response
    }
}
```

## UsersUnfollow

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users#unfollow-a-user>

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
    res, err := s.Users.UsersUnfollow(ctx, operations.UsersUnfollowRequest{
        Username: "Lane.Terry21",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersUpdateAuthenticated

**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

API method documentation
<https://docs.github.com/enterprise-server@3.4/rest/reference/users/#update-the-authenticated-user>

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
    res, err := s.Users.UsersUpdateAuthenticated(ctx, operations.UsersUpdateAuthenticatedRequestBody{
        Bio: sdk.String("alias"),
        Blog: sdk.String("blog.example.com"),
        Company: sdk.String("Acme corporation"),
        Email: sdk.String("omar@example.com"),
        Hireable: sdk.Bool(false),
        Location: sdk.String("Berlin, Germany"),
        Name: sdk.String("Omar Jahandar"),
        TwitterUsername: sdk.String("therealomarj"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrivateUser != nil {
        // handle response
    }
}
```
