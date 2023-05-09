# accounts

### Available Operations

* [mybusinessaccountmanagementAccountsCreate](#mybusinessaccountmanagementaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
* [mybusinessaccountmanagementAccountsGet](#mybusinessaccountmanagementaccountsget) - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
* [mybusinessaccountmanagementAccountsInvitationsAccept](#mybusinessaccountmanagementaccountsinvitationsaccept) - Accepts the specified invitation.
* [mybusinessaccountmanagementAccountsInvitationsDecline](#mybusinessaccountmanagementaccountsinvitationsdecline) - Declines the specified invitation.
* [mybusinessaccountmanagementAccountsInvitationsList](#mybusinessaccountmanagementaccountsinvitationslist) - Lists pending invitations for the specified account.
* [mybusinessaccountmanagementAccountsList](#mybusinessaccountmanagementaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

## mybusinessaccountmanagementAccountsCreate

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateResponse;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrganizationInfoInput;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsCreateRequest req = new MybusinessaccountmanagementAccountsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accountInput = new AccountInput() {{
                    accountName = "dolorum";
                    name = "Antoinette Nikolaus";
                    organizationInfo = new OrganizationInfoInput() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("hic"),
                                add("optio"),
                                add("totam"),
                            }};
                            administrativeArea = "beatae";
                            languageCode = "commodi";
                            locality = "molestiae";
                            organization = "modi";
                            postalCode = "77425";
                            recipients = new String[]{{
                                add("perferendis"),
                            }};
                            regionCode = "ad";
                            revision = 617636;
                            sortingCode = "sed";
                            sublocality = "iste";
                        }};;
                    }};;
                    primaryOwner = "dolor";
                    type = AccountTypeEnum.USER_GROUP;
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            MybusinessaccountmanagementAccountsCreateResponse res = sdk.accounts.mybusinessaccountmanagementAccountsCreate(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementAccountsGet

Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsGetRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsGetRequest req = new MybusinessaccountmanagementAccountsGetRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "mollitia";
                key = "laborum";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            MybusinessaccountmanagementAccountsGetResponse res = sdk.accounts.mybusinessaccountmanagementAccountsGet(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementAccountsInvitationsAccept

Accepts the specified invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsInvitationsAcceptRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsInvitationsAcceptResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsInvitationsAcceptRequest req = new MybusinessaccountmanagementAccountsInvitationsAcceptRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nemo", "minima");
                    put("excepturi", "accusantium");
                    put("iure", "culpa");
                }};
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            MybusinessaccountmanagementAccountsInvitationsAcceptResponse res = sdk.accounts.mybusinessaccountmanagementAccountsInvitationsAccept(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementAccountsInvitationsDecline

Declines the specified invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsInvitationsDeclineRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsInvitationsDeclineResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsInvitationsDeclineRequest req = new MybusinessaccountmanagementAccountsInvitationsDeclineRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quam", "molestiae");
                    put("velit", "error");
                }};
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            MybusinessaccountmanagementAccountsInvitationsDeclineResponse res = sdk.accounts.mybusinessaccountmanagementAccountsInvitationsDecline(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementAccountsInvitationsList

Lists pending invitations for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsInvitationsListRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsInvitationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsInvitationsListRequest req = new MybusinessaccountmanagementAccountsInvitationsListRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                filter = "error";
                key = "temporibus";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "reiciendis";
                uploadProtocol = "voluptatibus";
            }};            

            MybusinessaccountmanagementAccountsInvitationsListResponse res = sdk.accounts.mybusinessaccountmanagementAccountsInvitationsList(req);

            if (res.listInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessaccountmanagementAccountsList

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsListRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsListRequest req = new MybusinessaccountmanagementAccountsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "ipsa";
                filter = "omnis";
                key = "voluptate";
                oauthToken = "cum";
                pageSize = 19987L;
                pageToken = "doloremque";
                parentAccount = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "maiores";
                uploadProtocol = "dicta";
            }};            

            MybusinessaccountmanagementAccountsListResponse res = sdk.accounts.mybusinessaccountmanagementAccountsList(req);

            if (res.listAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
