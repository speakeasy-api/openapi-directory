# orgs

## Overview

Interact with GitHub Orgs.

### Available Operations

* [orgsCheckMembershipForUser](#orgscheckmembershipforuser) - Check organization membership for a user
* [orgsCheckPublicMembershipForUser](#orgscheckpublicmembershipforuser) - Check public organization membership for a user
* [orgsConvertMemberToOutsideCollaborator](#orgsconvertmembertooutsidecollaborator) - Convert an organization member to outside collaborator
* [orgsCreateWebhook](#orgscreatewebhook) - Create an organization webhook
* [orgsDeleteWebhook](#orgsdeletewebhook) - Delete an organization webhook
* [orgsGet](#orgsget) - Get an organization
* [orgsGetMembershipForAuthenticatedUser](#orgsgetmembershipforauthenticateduser) - Get an organization membership for the authenticated user
* [orgsGetMembershipForUser](#orgsgetmembershipforuser) - Get organization membership for a user
* [orgsGetWebhook](#orgsgetwebhook) - Get an organization webhook
* [orgsGetWebhookConfigForOrg](#orgsgetwebhookconfigfororg) - Get a webhook configuration for an organization
* [orgsGetWebhookDelivery](#orgsgetwebhookdelivery) - Get a webhook delivery for an organization webhook
* [orgsList](#orgslist) - List organizations
* [orgsListAppInstallations](#orgslistappinstallations) - List app installations for an organization
* [orgsListForAuthenticatedUser](#orgslistforauthenticateduser) - List organizations for the authenticated user
* [orgsListForUser](#orgslistforuser) - List organizations for a user
* [orgsListMembers](#orgslistmembers) - List organization members
* [orgsListMembershipsForAuthenticatedUser](#orgslistmembershipsforauthenticateduser) - List organization memberships for the authenticated user
* [orgsListOutsideCollaborators](#orgslistoutsidecollaborators) - List outside collaborators for an organization
* [orgsListPublicMembers](#orgslistpublicmembers) - List public organization members
* [orgsListWebhookDeliveries](#orgslistwebhookdeliveries) - List deliveries for an organization webhook
* [orgsListWebhooks](#orgslistwebhooks) - List organization webhooks
* [orgsPingWebhook](#orgspingwebhook) - Ping an organization webhook
* [orgsRedeliverWebhookDelivery](#orgsredeliverwebhookdelivery) - Redeliver a delivery for an organization webhook
* [orgsRemoveMember](#orgsremovemember) - Remove an organization member
* [orgsRemoveMembershipForUser](#orgsremovemembershipforuser) - Remove organization membership for a user
* [orgsRemoveOutsideCollaborator](#orgsremoveoutsidecollaborator) - Remove outside collaborator from an organization
* [orgsRemovePublicMembershipForAuthenticatedUser](#orgsremovepublicmembershipforauthenticateduser) - Remove public organization membership for the authenticated user
* [orgsSetMembershipForUser](#orgssetmembershipforuser) - Set organization membership for a user
* [orgsSetPublicMembershipForAuthenticatedUser](#orgssetpublicmembershipforauthenticateduser) - Set public organization membership for the authenticated user
* [orgsUpdate](#orgsupdate) - Update an organization
* [orgsUpdateMembershipForAuthenticatedUser](#orgsupdatemembershipforauthenticateduser) - Update an organization membership for the authenticated user
* [orgsUpdateWebhook](#orgsupdatewebhook) - Update an organization webhook
* [orgsUpdateWebhookConfigForOrg](#orgsupdatewebhookconfigfororg) - Update a webhook configuration for an organization

## orgsCheckMembershipForUser

Check if a user is, publicly or privately, a member of the organization.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#check-organization-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsCheckMembershipForUserRequest;
import org.openapis.openapi.models.operations.OrgsCheckMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsCheckMembershipForUserRequest req = new OrgsCheckMembershipForUserRequest("voluptatem", "alias");            

            OrgsCheckMembershipForUserResponse res = sdk.orgs.orgsCheckMembershipForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsCheckPublicMembershipForUser

Check public organization membership for a user

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#check-public-organization-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsCheckPublicMembershipForUserRequest;
import org.openapis.openapi.models.operations.OrgsCheckPublicMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsCheckPublicMembershipForUserRequest req = new OrgsCheckPublicMembershipForUserRequest("deleniti", "earum");            

            OrgsCheckPublicMembershipForUserResponse res = sdk.orgs.orgsCheckPublicMembershipForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsConvertMemberToOutsideCollaborator

When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/enterprise-server@3.2/articles/converting-an-organization-member-to-an-outside-collaborator/)".

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsConvertMemberToOutsideCollaboratorRequest;
import org.openapis.openapi.models.operations.OrgsConvertMemberToOutsideCollaboratorRequestBody;
import org.openapis.openapi.models.operations.OrgsConvertMemberToOutsideCollaboratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsConvertMemberToOutsideCollaboratorRequest req = new OrgsConvertMemberToOutsideCollaboratorRequest("ex", "sapiente") {{
                requestBody = new OrgsConvertMemberToOutsideCollaboratorRequestBody() {{
                    async = false;
                }};;
            }};            

            OrgsConvertMemberToOutsideCollaboratorResponse res = sdk.orgs.orgsConvertMemberToOutsideCollaborator(req);

            if (res.orgsConvertMemberToOutsideCollaborator202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsCreateWebhook

Here's how you can create a hook that posts payloads in JSON format:

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#create-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsCreateWebhookRequest;
import org.openapis.openapi.models.operations.OrgsCreateWebhookRequestBody;
import org.openapis.openapi.models.operations.OrgsCreateWebhookRequestBodyConfig;
import org.openapis.openapi.models.operations.OrgsCreateWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsCreateWebhookRequest req = new OrgsCreateWebhookRequest(                new OrgsCreateWebhookRequestBody(                new OrgsCreateWebhookRequestBodyConfig("https://example.com/webhook") {{
                                                contentType = ""json"";
                                                insecureSsl = 7963.2;
                                                password = ""password"";
                                                secret = ""********"";
                                                username = ""kdaigle"";
                                            }};, "nemo") {{
                                active = false;
                                events = new String[]{{
                                    add("ratione"),
                                    add("ullam"),
                                    add("perferendis"),
                                    add("illum"),
                                }};
                            }};, "totam");            

            OrgsCreateWebhookResponse res = sdk.orgs.orgsCreateWebhook(req);

            if (res.orgHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsDeleteWebhook

Delete an organization webhook

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#delete-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsDeleteWebhookRequest;
import org.openapis.openapi.models.operations.OrgsDeleteWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsDeleteWebhookRequest req = new OrgsDeleteWebhookRequest(770675L, "quibusdam");            

            OrgsDeleteWebhookResponse res = sdk.orgs.orgsDeleteWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsGet

To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@3.2/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#get-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsGetRequest;
import org.openapis.openapi.models.operations.OrgsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsGetRequest req = new OrgsGetRequest("nam");            

            OrgsGetResponse res = sdk.orgs.orgsGet(req);

            if (res.organizationFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsGetMembershipForAuthenticatedUser

Get an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsGetMembershipForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.OrgsGetMembershipForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsGetMembershipForAuthenticatedUserRequest req = new OrgsGetMembershipForAuthenticatedUserRequest("ipsam");            

            OrgsGetMembershipForAuthenticatedUserResponse res = sdk.orgs.orgsGetMembershipForAuthenticatedUser(req);

            if (res.orgMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsGetMembershipForUser

In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#get-organization-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsGetMembershipForUserRequest;
import org.openapis.openapi.models.operations.OrgsGetMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsGetMembershipForUserRequest req = new OrgsGetMembershipForUserRequest("culpa", "dolor");            

            OrgsGetMembershipForUserResponse res = sdk.orgs.orgsGetMembershipForUser(req);

            if (res.orgMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsGetWebhook

Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#get-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsGetWebhookRequest;
import org.openapis.openapi.models.operations.OrgsGetWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsGetWebhookRequest req = new OrgsGetWebhookRequest(307376L, "inventore");            

            OrgsGetWebhookResponse res = sdk.orgs.orgsGetWebhook(req);

            if (res.orgHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsGetWebhookConfigForOrg

Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#get-a-webhook-configuration-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsGetWebhookConfigForOrgRequest;
import org.openapis.openapi.models.operations.OrgsGetWebhookConfigForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsGetWebhookConfigForOrgRequest req = new OrgsGetWebhookConfigForOrgRequest(537279L, "veritatis");            

            OrgsGetWebhookConfigForOrgResponse res = sdk.orgs.orgsGetWebhookConfigForOrg(req);

            if (res.webhookConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsGetWebhookDelivery

Returns a delivery for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsGetWebhookDeliveryRequest;
import org.openapis.openapi.models.operations.OrgsGetWebhookDeliveryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsGetWebhookDeliveryRequest req = new OrgsGetWebhookDeliveryRequest(274575L, 221396L, "consequatur");            

            OrgsGetWebhookDeliveryResponse res = sdk.orgs.orgsGetWebhookDelivery(req);

            if (res.hookDelivery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsList

Lists all organizations, in the order that they were created on GitHub Enterprise Server.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-organizations>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListRequest;
import org.openapis.openapi.models.operations.OrgsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListRequest req = new OrgsListRequest() {{
                perPage = 100014L;
                since = 24944L;
            }};            

            OrgsListResponse res = sdk.orgs.orgsList(req);

            if (res.organizationSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListAppInstallations

Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-app-installations-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListAppInstallationsRequest;
import org.openapis.openapi.models.operations.OrgsListAppInstallationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListAppInstallationsRequest req = new OrgsListAppInstallationsRequest("modi") {{
                page = 144286L;
                perPage = 66149L;
            }};            

            OrgsListAppInstallationsResponse res = sdk.orgs.orgsListAppInstallations(req);

            if (res.orgsListAppInstallations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListForAuthenticatedUser

List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-organizations-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.OrgsListForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListForAuthenticatedUserRequest req = new OrgsListForAuthenticatedUserRequest() {{
                page = 513760L;
                perPage = 65604L;
            }};            

            OrgsListForAuthenticatedUserResponse res = sdk.orgs.orgsListForAuthenticatedUser(req);

            if (res.organizationSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListForUser

List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-organizations-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListForUserRequest;
import org.openapis.openapi.models.operations.OrgsListForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListForUserRequest req = new OrgsListForUserRequest("dolor") {{
                page = 856277L;
                perPage = 369490L;
            }};            

            OrgsListForUserResponse res = sdk.orgs.orgsListForUser(req);

            if (res.organizationSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListMembers

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-organization-members>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListMembersFilterEnum;
import org.openapis.openapi.models.operations.OrgsListMembersRequest;
import org.openapis.openapi.models.operations.OrgsListMembersResponse;
import org.openapis.openapi.models.operations.OrgsListMembersRoleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListMembersRequest req = new OrgsListMembersRequest("consequuntur") {{
                filter = OrgsListMembersFilterEnum.TWOFA_DISABLED;
                page = 559682L;
                perPage = 911198L;
                role = OrgsListMembersRoleEnum.MEMBER;
            }};            

            OrgsListMembersResponse res = sdk.orgs.orgsListMembers(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListMembershipsForAuthenticatedUser

List organization memberships for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListMembershipsForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.OrgsListMembershipsForAuthenticatedUserResponse;
import org.openapis.openapi.models.operations.OrgsListMembershipsForAuthenticatedUserStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListMembershipsForAuthenticatedUserRequest req = new OrgsListMembershipsForAuthenticatedUserRequest() {{
                page = 884952L;
                perPage = 456410L;
                state = OrgsListMembershipsForAuthenticatedUserStateEnum.PENDING;
            }};            

            OrgsListMembershipsForAuthenticatedUserResponse res = sdk.orgs.orgsListMembershipsForAuthenticatedUser(req);

            if (res.orgMemberships != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListOutsideCollaborators

List all users who are outside collaborators of an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-outside-collaborators-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListOutsideCollaboratorsFilterEnum;
import org.openapis.openapi.models.operations.OrgsListOutsideCollaboratorsRequest;
import org.openapis.openapi.models.operations.OrgsListOutsideCollaboratorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListOutsideCollaboratorsRequest req = new OrgsListOutsideCollaboratorsRequest("sed") {{
                filter = OrgsListOutsideCollaboratorsFilterEnum.TWOFA_DISABLED;
                page = 199596L;
                perPage = 712927L;
            }};            

            OrgsListOutsideCollaboratorsResponse res = sdk.orgs.orgsListOutsideCollaborators(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListPublicMembers

Members of an organization can choose to have their membership publicized or not.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-public-organization-members>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListPublicMembersRequest;
import org.openapis.openapi.models.operations.OrgsListPublicMembersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListPublicMembersRequest req = new OrgsListPublicMembersRequest("eum") {{
                page = 426943L;
                perPage = 528234L;
            }};            

            OrgsListPublicMembersResponse res = sdk.orgs.orgsListPublicMembers(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListWebhookDeliveries

Returns a list of webhook deliveries for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-deliveries-for-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListWebhookDeliveriesRequest;
import org.openapis.openapi.models.operations.OrgsListWebhookDeliveriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListWebhookDeliveriesRequest req = new OrgsListWebhookDeliveriesRequest(301692L, "exercitationem") {{
                cursor = "ab";
                perPage = 781480L;
            }};            

            OrgsListWebhookDeliveriesResponse res = sdk.orgs.orgsListWebhookDeliveries(req);

            if (res.hookDeliveryItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsListWebhooks

List organization webhooks

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#list-organization-webhooks>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsListWebhooksRequest;
import org.openapis.openapi.models.operations.OrgsListWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsListWebhooksRequest req = new OrgsListWebhooksRequest("autem") {{
                page = 751022L;
                perPage = 388319L;
            }};            

            OrgsListWebhooksResponse res = sdk.orgs.orgsListWebhooks(req);

            if (res.orgHooks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsPingWebhook

This will trigger a [ping event](https://docs.github.com/enterprise-server@3.2/webhooks/#ping-event) to be sent to the hook.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#ping-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsPingWebhookRequest;
import org.openapis.openapi.models.operations.OrgsPingWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsPingWebhookRequest req = new OrgsPingWebhookRequest(927212L, "consequuntur");            

            OrgsPingWebhookResponse res = sdk.orgs.orgsPingWebhook(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsRedeliverWebhookDelivery

Redeliver a delivery for a webhook configured in an organization.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsRedeliverWebhookDeliveryRequest;
import org.openapis.openapi.models.operations.OrgsRedeliverWebhookDeliveryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsRedeliverWebhookDeliveryRequest req = new OrgsRedeliverWebhookDeliveryRequest(28952L, 350207L, "necessitatibus");            

            OrgsRedeliverWebhookDeliveryResponse res = sdk.orgs.orgsRedeliverWebhookDelivery(req);

            if (res.orgsRedeliverWebhookDelivery202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsRemoveMember

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#remove-an-organization-member>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsRemoveMemberRequest;
import org.openapis.openapi.models.operations.OrgsRemoveMemberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsRemoveMemberRequest req = new OrgsRemoveMemberRequest("quasi", "nisi");            

            OrgsRemoveMemberResponse res = sdk.orgs.orgsRemoveMember(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsRemoveMembershipForUser

In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#remove-organization-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsRemoveMembershipForUserRequest;
import org.openapis.openapi.models.operations.OrgsRemoveMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsRemoveMembershipForUserRequest req = new OrgsRemoveMembershipForUserRequest("at", "vero");            

            OrgsRemoveMembershipForUserResponse res = sdk.orgs.orgsRemoveMembershipForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsRemoveOutsideCollaborator

Removing a user from this list will remove them from all the organization's repositories.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#remove-outside-collaborator-from-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsRemoveOutsideCollaboratorRequest;
import org.openapis.openapi.models.operations.OrgsRemoveOutsideCollaboratorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsRemoveOutsideCollaboratorRequest req = new OrgsRemoveOutsideCollaboratorRequest("est", "harum");            

            OrgsRemoveOutsideCollaboratorResponse res = sdk.orgs.orgsRemoveOutsideCollaborator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsRemovePublicMembershipForAuthenticatedUser

Remove public organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsRemovePublicMembershipForAuthenticatedUserRequest req = new OrgsRemovePublicMembershipForAuthenticatedUserRequest("sequi", "doloribus");            

            OrgsRemovePublicMembershipForAuthenticatedUserResponse res = sdk.orgs.orgsRemovePublicMembershipForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsSetMembershipForUser

Only authenticated organization owners can add a member to the organization or update the member's role.

*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
    
*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#set-organization-membership-for-a-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsSetMembershipForUserRequest;
import org.openapis.openapi.models.operations.OrgsSetMembershipForUserRequestBody;
import org.openapis.openapi.models.operations.OrgsSetMembershipForUserRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.OrgsSetMembershipForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsSetMembershipForUserRequest req = new OrgsSetMembershipForUserRequest("repudiandae", "optio") {{
                requestBody = new OrgsSetMembershipForUserRequestBody() {{
                    role = OrgsSetMembershipForUserRequestBodyRoleEnum.MEMBER;
                }};;
            }};            

            OrgsSetMembershipForUserResponse res = sdk.orgs.orgsSetMembershipForUser(req);

            if (res.orgMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsSetPublicMembershipForAuthenticatedUser

The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsSetPublicMembershipForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.OrgsSetPublicMembershipForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsSetPublicMembershipForAuthenticatedUserRequest req = new OrgsSetPublicMembershipForAuthenticatedUserRequest("nemo", "voluptate");            

            OrgsSetPublicMembershipForAuthenticatedUserResponse res = sdk.orgs.orgsSetPublicMembershipForAuthenticatedUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsUpdate

**Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs/#update-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsUpdateRequest;
import org.openapis.openapi.models.operations.OrgsUpdateRequestBody;
import org.openapis.openapi.models.operations.OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum;
import org.openapis.openapi.models.operations.OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;
import org.openapis.openapi.models.operations.OrgsUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsUpdateRequest req = new OrgsUpdateRequest("blanditiis") {{
                requestBody = new OrgsUpdateRequestBody() {{
                    billingEmail = "officia";
                    blog = ""http://github.blog"";
                    company = "Funk - Hickle";
                    defaultRepositoryPermission = OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum.ADMIN;
                    description = "eius";
                    email = "Jerrell_Dooley27@gmail.com";
                    hasOrganizationProjects = false;
                    hasRepositoryProjects = false;
                    location = "quasi";
                    membersAllowedRepositoryCreationType = OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum.PRIVATE_;
                    membersCanCreateInternalRepositories = false;
                    membersCanCreatePages = false;
                    membersCanCreatePrivateRepositories = false;
                    membersCanCreatePublicRepositories = false;
                    membersCanCreateRepositories = false;
                    name = "Keith Hyatt";
                    twitterUsername = "aperiam";
                }};;
            }};            

            OrgsUpdateResponse res = sdk.orgs.orgsUpdate(req);

            if (res.organizationFull != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsUpdateMembershipForAuthenticatedUser

Update an organization membership for the authenticated user

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsUpdateMembershipForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.OrgsUpdateMembershipForAuthenticatedUserRequestBody;
import org.openapis.openapi.models.operations.OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum;
import org.openapis.openapi.models.operations.OrgsUpdateMembershipForAuthenticatedUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsUpdateMembershipForAuthenticatedUserRequest req = new OrgsUpdateMembershipForAuthenticatedUserRequest(                new OrgsUpdateMembershipForAuthenticatedUserRequestBody(OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum.ACTIVE);, "cupiditate");            

            OrgsUpdateMembershipForAuthenticatedUserResponse res = sdk.orgs.orgsUpdateMembershipForAuthenticatedUser(req);

            if (res.orgMembership != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsUpdateWebhook

Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#update-an-organization-webhook>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsUpdateWebhookRequest;
import org.openapis.openapi.models.operations.OrgsUpdateWebhookRequestBody;
import org.openapis.openapi.models.operations.OrgsUpdateWebhookRequestBodyConfig;
import org.openapis.openapi.models.operations.OrgsUpdateWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsUpdateWebhookRequest req = new OrgsUpdateWebhookRequest(970732L, "soluta") {{
                requestBody = new OrgsUpdateWebhookRequestBody() {{
                    active = false;
                    config = new OrgsUpdateWebhookRequestBodyConfig("https://example.com/webhook") {{
                        contentType = ""json"";
                        insecureSsl = ""0"";
                        secret = ""********"";
                    }};;
                    events = new String[]{{
                        add("eos"),
                        add("occaecati"),
                        add("iste"),
                    }};
                    name = ""web"";
                }};;
            }};            

            OrgsUpdateWebhookResponse res = sdk.orgs.orgsUpdateWebhook(req);

            if (res.orgHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgsUpdateWebhookConfigForOrg

Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/orgs#update-a-webhook-configuration-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgsUpdateWebhookConfigForOrgRequest;
import org.openapis.openapi.models.operations.OrgsUpdateWebhookConfigForOrgRequestBody;
import org.openapis.openapi.models.operations.OrgsUpdateWebhookConfigForOrgResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgsUpdateWebhookConfigForOrgRequest req = new OrgsUpdateWebhookConfigForOrgRequest(170099L, "inventore") {{
                requestBody = new OrgsUpdateWebhookConfigForOrgRequestBody() {{
                    contentType = ""json"";
                    insecureSsl = 8818.97;
                    secret = ""********"";
                    url = "https://example.com/webhook";
                }};;
            }};            

            OrgsUpdateWebhookConfigForOrgResponse res = sdk.orgs.orgsUpdateWebhookConfigForOrg(req);

            if (res.webhookConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
