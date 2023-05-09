# accounts

### Available Operations

* [mybusinessAccountsCreate](#mybusinessaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 
* [mybusinessAccountsGenerateAccountNumber](#mybusinessaccountsgenerateaccountnumber) - Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
* [mybusinessAccountsInvitationsAccept](#mybusinessaccountsinvitationsaccept) - Accepts the specified invitation.
* [mybusinessAccountsInvitationsDecline](#mybusinessaccountsinvitationsdecline) - Declines the specified invitation.
* [mybusinessAccountsInvitationsList](#mybusinessaccountsinvitationslist) - Lists pending invitations for the specified account.
* [mybusinessAccountsList](#mybusinessaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
* [mybusinessAccountsListRecommendGoogleLocations](#mybusinessaccountslistrecommendgooglelocations) - List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
* [mybusinessAccountsLocationsAdminsCreate](#mybusinessaccountslocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [mybusinessAccountsLocationsAdminsList](#mybusinessaccountslocationsadminslist) - Lists all of the admins for the specified location.
* [mybusinessAccountsLocationsAssociate](#mybusinessaccountslocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
* [mybusinessAccountsLocationsBatchGet](#mybusinessaccountslocationsbatchget) - Gets all of the specified locations in the given account.
* [mybusinessAccountsLocationsBatchGetReviews](#mybusinessaccountslocationsbatchgetreviews) - Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
* [mybusinessAccountsLocationsClearAssociation](#mybusinessaccountslocationsclearassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [mybusinessAccountsLocationsCreate](#mybusinessaccountslocationscreate) - Creates a new location owned by the specified account, and returns it.
* [mybusinessAccountsLocationsFetchVerificationOptions](#mybusinessaccountslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [mybusinessAccountsLocationsFindMatches](#mybusinessaccountslocationsfindmatches) - Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
* [mybusinessAccountsLocationsGetGoogleUpdated](#mybusinessaccountslocationsgetgoogleupdated) - Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
* [mybusinessAccountsLocationsInsuranceNetworksList](#mybusinessaccountslocationsinsurancenetworkslist) - Returns a list of all insurance networks supported by Google.
* [mybusinessAccountsLocationsList](#mybusinessaccountslocationslist) - Lists the locations for the specified account.
* [mybusinessAccountsLocationsLocalPostsCreate](#mybusinessaccountslocationslocalpostscreate) - Creates a new local post associated with the specified location, and returns it.
* [mybusinessAccountsLocationsLocalPostsList](#mybusinessaccountslocationslocalpostslist) - Returns a list of local posts associated with a location.
* [mybusinessAccountsLocationsLocalPostsReportInsights](#mybusinessaccountslocationslocalpostsreportinsights) - Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
* [mybusinessAccountsLocationsLodgingGetGoogleUpdated](#mybusinessaccountslocationslodginggetgoogleupdated) - Returns the Google updated Lodging of a specific location.
* [mybusinessAccountsLocationsMediaCreate](#mybusinessaccountslocationsmediacreate) - Creates a new media item for the location.
* [mybusinessAccountsLocationsMediaCustomersList](#mybusinessaccountslocationsmediacustomerslist) - Returns a list of media items associated with a location that have been contributed by customers.
* [mybusinessAccountsLocationsMediaList](#mybusinessaccountslocationsmedialist) - Returns a list of media items associated with a location.
* [mybusinessAccountsLocationsMediaStartUpload](#mybusinessaccountslocationsmediastartupload) - Generates a `MediaItemDataRef` for media item uploading.
* [mybusinessAccountsLocationsQuestionsAnswersDelete](#mybusinessaccountslocationsquestionsanswersdelete) - Deletes the answer written by the current user to a question.
* [mybusinessAccountsLocationsQuestionsAnswersList](#mybusinessaccountslocationsquestionsanswerslist) - Returns the paginated list of answers for a specified question.
* [mybusinessAccountsLocationsQuestionsAnswersUpsert](#mybusinessaccountslocationsquestionsanswersupsert) - Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
* [mybusinessAccountsLocationsQuestionsCreate](#mybusinessaccountslocationsquestionscreate) - Adds a question for the specified location.
* [mybusinessAccountsLocationsQuestionsDelete](#mybusinessaccountslocationsquestionsdelete) - Deletes a specific question written by the current user.
* [mybusinessAccountsLocationsQuestionsList](#mybusinessaccountslocationsquestionslist) - Returns the paginated list of questions and some of its answers for a specified location.
* [mybusinessAccountsLocationsQuestionsPatch](#mybusinessaccountslocationsquestionspatch) - Updates a specific question written by the current user.
* [mybusinessAccountsLocationsReportInsights](#mybusinessaccountslocationsreportinsights) - Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
* [mybusinessAccountsLocationsReviewsDeleteReply](#mybusinessaccountslocationsreviewsdeletereply) - Deletes the response to the specified review. This operation is only valid if the specified location is verified.
* [mybusinessAccountsLocationsReviewsList](#mybusinessaccountslocationsreviewslist) - Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
* [mybusinessAccountsLocationsReviewsUpdateReply](#mybusinessaccountslocationsreviewsupdatereply) - Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
* [mybusinessAccountsLocationsTransfer](#mybusinessaccountslocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
* [mybusinessAccountsLocationsVerificationsComplete](#mybusinessaccountslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [mybusinessAccountsLocationsVerificationsList](#mybusinessaccountslocationsverificationslist) - List verifications of a location, ordered by create time.
* [mybusinessAccountsLocationsVerify](#mybusinessaccountslocationsverify) - Starts the verification process for a location.
* [mybusinessAccountsUpdateNotifications](#mybusinessaccountsupdatenotifications) - Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

## mybusinessAccountsCreate

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsCreateResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountPermissionLevelEnum;
import org.openapis.openapi.models.shared.AccountRoleEnum;
import org.openapis.openapi.models.shared.AccountState;
import org.openapis.openapi.models.shared.AccountStateStatusEnum;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OrganizationInfo;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsCreateRequest req = new MybusinessAccountsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                account = new Account() {{
                    accountName = "porro";
                    accountNumber = "dolorum";
                    name = "Antoinette Nikolaus";
                    organizationInfo = new OrganizationInfo() {{
                        phoneNumber = "deleniti";
                        postalAddress = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("optio"),
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                            }};
                            administrativeArea = "molestiae";
                            languageCode = "modi";
                            locality = "qui";
                            organization = "impedit";
                            postalCode = "42510-3616";
                            recipients = new String[]{{
                                add("natus"),
                            }};
                            regionCode = "laboriosam";
                            revision = 943749;
                            sortingCode = "saepe";
                            sublocality = "fuga";
                        }};;
                        registeredDomain = "in";
                    }};;
                    permissionLevel = AccountPermissionLevelEnum.OWNER_LEVEL;
                    role = AccountRoleEnum.MANAGER;
                    state = new AccountState() {{
                        status = AccountStateStatusEnum.VERIFIED;
                    }};;
                    type = AccountTypeEnum.ORGANIZATION;
                }};;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                prettyPrint = false;
                primaryOwner = "laborum";
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }};            

            MybusinessAccountsCreateResponse res = sdk.accounts.mybusinessAccountsCreate(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsGenerateAccountNumber

Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsGenerateAccountNumberRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsGenerateAccountNumberResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsGenerateAccountNumberRequest req = new MybusinessAccountsGenerateAccountNumberRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "nemo");
                    put("minima", "excepturi");
                }};
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "doloribus";
                key = "sapiente";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
            }};            

            MybusinessAccountsGenerateAccountNumberResponse res = sdk.accounts.mybusinessAccountsGenerateAccountNumber(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsInvitationsAccept

Accepts the specified invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsInvitationsAcceptRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsInvitationsAcceptResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsInvitationsAcceptRequest req = new MybusinessAccountsInvitationsAcceptRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("occaecati", "numquam");
                    put("commodi", "quam");
                    put("molestiae", "velit");
                }};
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            MybusinessAccountsInvitationsAcceptResponse res = sdk.accounts.mybusinessAccountsInvitationsAccept(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsInvitationsDecline

Declines the specified invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsInvitationsDeclineRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsInvitationsDeclineResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsInvitationsDeclineRequest req = new MybusinessAccountsInvitationsDeclineRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("id", "possimus");
                    put("aut", "quasi");
                }};
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            MybusinessAccountsInvitationsDeclineResponse res = sdk.accounts.mybusinessAccountsInvitationsDecline(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsInvitationsList

Lists pending invitations for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsInvitationsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsInvitationsListResponse;
import org.openapis.openapi.models.operations.MybusinessAccountsInvitationsListTargetTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsInvitationsListRequest req = new MybusinessAccountsInvitationsListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ut";
                targetType = MybusinessAccountsInvitationsListTargetTypeEnum.LOCATIONS_ONLY;
                uploadType = "dicta";
                uploadProtocol = "corporis";
            }};            

            MybusinessAccountsInvitationsListResponse res = sdk.accounts.mybusinessAccountsInvitationsList(req);

            if (res.listInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsList

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsListRequest req = new MybusinessAccountsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "enim";
                filter = "accusamus";
                key = "commodi";
                name = "Eric Emmerich";
                oauthToken = "excepturi";
                pageSize = 865103L;
                pageToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "rem";
                uploadProtocol = "voluptates";
            }};            

            MybusinessAccountsListResponse res = sdk.accounts.mybusinessAccountsList(req);

            if (res.listAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsListRecommendGoogleLocations

List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsListRecommendGoogleLocationsRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsListRecommendGoogleLocationsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsListRecommendGoogleLocationsRequest req = new MybusinessAccountsListRecommendGoogleLocationsRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                pageSize = 667411L;
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
            }};            

            MybusinessAccountsListRecommendGoogleLocationsResponse res = sdk.accounts.mybusinessAccountsListRecommendGoogleLocations(req);

            if (res.listRecommendedGoogleLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsAdminsCreate

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsAdminsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsAdminsCreateResponse;
import org.openapis.openapi.models.shared.Admin;
import org.openapis.openapi.models.shared.AdminRoleEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsAdminsCreateRequest req = new MybusinessAccountsLocationsAdminsCreateRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                admin = new Admin() {{
                    adminName = "modi";
                    name = "Beth McGlynn Sr.";
                    pendingInvitation = false;
                    role = AdminRoleEnum.COMMUNITY_MANAGER;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            MybusinessAccountsLocationsAdminsCreateResponse res = sdk.accounts.mybusinessAccountsLocationsAdminsCreate(req);

            if (res.admin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsAdminsList

Lists all of the admins for the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsAdminsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsAdminsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsAdminsListRequest req = new MybusinessAccountsLocationsAdminsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "aliquid";
                key = "provident";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "officia";
                uploadProtocol = "dolor";
            }};            

            MybusinessAccountsLocationsAdminsListResponse res = sdk.accounts.mybusinessAccountsLocationsAdminsList(req);

            if (res.listLocationAdminsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsAssociate

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsAssociateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsAssociateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssociateLocationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsAssociateRequest req = new MybusinessAccountsLocationsAssociateRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                associateLocationRequest = new AssociateLocationRequest() {{
                    placeId = "dolorum";
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "maiores";
                key = "rerum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "cumque";
                uploadProtocol = "facere";
            }};            

            MybusinessAccountsLocationsAssociateResponse res = sdk.accounts.mybusinessAccountsLocationsAssociate(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsBatchGet

Gets all of the specified locations in the given account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsBatchGetRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsBatchGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchGetLocationsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsBatchGetRequest req = new MybusinessAccountsLocationsBatchGetRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                batchGetLocationsRequest = new BatchGetLocationsRequest() {{
                    locationNames = new String[]{{
                        add("accusamus"),
                        add("non"),
                        add("occaecati"),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quidem";
                key = "provident";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "blanditiis";
                uploadProtocol = "deleniti";
            }};            

            MybusinessAccountsLocationsBatchGetResponse res = sdk.accounts.mybusinessAccountsLocationsBatchGet(req);

            if (res.batchGetLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsBatchGetReviews

Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsBatchGetReviewsRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsBatchGetReviewsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchGetReviewsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsBatchGetReviewsRequest req = new MybusinessAccountsLocationsBatchGetReviewsRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                batchGetReviewsRequest = new BatchGetReviewsRequest() {{
                    ignoreRatingOnlyReviews = false;
                    locationNames = new String[]{{
                        add("nisi"),
                        add("vel"),
                        add("natus"),
                    }};
                    orderBy = "omnis";
                    pageSize = 474867;
                    pageToken = "perferendis";
                }};;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "id";
                key = "labore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "natus";
                uploadProtocol = "nobis";
            }};            

            MybusinessAccountsLocationsBatchGetReviewsResponse res = sdk.accounts.mybusinessAccountsLocationsBatchGetReviews(req);

            if (res.batchGetReviewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsClearAssociation

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsClearAssociationRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsClearAssociationResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsClearAssociationRequest req = new MybusinessAccountsLocationsClearAssociationRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("architecto", "magnam");
                }};
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "provident";
                key = "quos";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "mollitia";
                uploadProtocol = "reiciendis";
            }};            

            MybusinessAccountsLocationsClearAssociationResponse res = sdk.accounts.mybusinessAccountsLocationsClearAssociation(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsCreate

Creates a new location owned by the specified account, and returns it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsCreateResponse;
import org.openapis.openapi.models.shared.AdWordsLocationExtensions;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.AttributeValueTypeEnum;
import org.openapis.openapi.models.shared.BusinessHours;
import org.openapis.openapi.models.shared.CategoryInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.Duplicate;
import org.openapis.openapi.models.shared.DuplicateAccessEnum;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.LocationKey;
import org.openapis.openapi.models.shared.LocationStateInput;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.MoreHours;
import org.openapis.openapi.models.shared.OpenInfo;
import org.openapis.openapi.models.shared.OpenInfoStatusEnum;
import org.openapis.openapi.models.shared.PlaceInfo;
import org.openapis.openapi.models.shared.Places;
import org.openapis.openapi.models.shared.PointRadius;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.PriceList;
import org.openapis.openapi.models.shared.Profile;
import org.openapis.openapi.models.shared.RelationshipData;
import org.openapis.openapi.models.shared.RepeatedEnumAttributeValue;
import org.openapis.openapi.models.shared.Section;
import org.openapis.openapi.models.shared.SectionSectionTypeEnum;
import org.openapis.openapi.models.shared.ServiceAreaBusiness;
import org.openapis.openapi.models.shared.ServiceAreaBusinessBusinessTypeEnum;
import org.openapis.openapi.models.shared.SpecialHourPeriod;
import org.openapis.openapi.models.shared.SpecialHours;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.TimePeriodCloseDayEnum;
import org.openapis.openapi.models.shared.TimePeriodOpenDayEnum;
import org.openapis.openapi.models.shared.UrlAttributeValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsCreateRequest req = new MybusinessAccountsLocationsCreateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                locationInput = new LocationInput() {{
                    adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                        adPhone = "eum";
                    }};;
                    additionalCategories = new org.openapis.openapi.models.shared.CategoryInput[]{{
                        add(new CategoryInput() {{
                            categoryId = "necessitatibus";
                            displayName = "odit";
                        }}),
                    }};
                    additionalPhones = new String[]{{
                        add("quasi"),
                        add("iure"),
                    }};
                    address = new PostalAddress() {{
                        addressLines = new String[]{{
                            add("debitis"),
                            add("eius"),
                            add("maxime"),
                            add("deleniti"),
                        }};
                        administrativeArea = "facilis";
                        languageCode = "in";
                        locality = "architecto";
                        organization = "architecto";
                        postalCode = "37498-1980";
                        recipients = new String[]{{
                            add("praesentium"),
                        }};
                        regionCode = "natus";
                        revision = 166847;
                        sortingCode = "sunt";
                        sublocality = "quo";
                    }};;
                    attributes = new org.openapis.openapi.models.shared.Attribute[]{{
                        add(new Attribute() {{
                            attributeId = "pariatur";
                            repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                setValues = new String[]{{
                                    add("ea"),
                                    add("excepturi"),
                                    add("odit"),
                                    add("ea"),
                                }};
                                unsetValues = new String[]{{
                                    add("ab"),
                                }};
                            }};
                            urlValues = new org.openapis.openapi.models.shared.UrlAttributeValue[]{{
                                add(new UrlAttributeValue() {{
                                    url = "quidem";
                                }}),
                                add(new UrlAttributeValue() {{
                                    url = "ipsam";
                                }}),
                                add(new UrlAttributeValue() {{
                                    url = "voluptate";
                                }}),
                                add(new UrlAttributeValue() {{
                                    url = "autem";
                                }}),
                            }};
                            valueType = AttributeValueTypeEnum.URL;
                            values = new Object[]{{
                                add("pariatur"),
                            }};
                        }}),
                        add(new Attribute() {{
                            attributeId = "nemo";
                            repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                setValues = new String[]{{
                                    add("perferendis"),
                                    add("fugiat"),
                                    add("amet"),
                                    add("aut"),
                                }};
                                unsetValues = new String[]{{
                                    add("corporis"),
                                    add("hic"),
                                    add("libero"),
                                    add("nobis"),
                                }};
                            }};
                            urlValues = new org.openapis.openapi.models.shared.UrlAttributeValue[]{{
                                add(new UrlAttributeValue() {{
                                    url = "quis";
                                }}),
                            }};
                            valueType = AttributeValueTypeEnum.ENUM_;
                            values = new Object[]{{
                                add("eaque"),
                                add("quis"),
                            }};
                        }}),
                        add(new Attribute() {{
                            attributeId = "nesciunt";
                            repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                setValues = new String[]{{
                                    add("perferendis"),
                                }};
                                unsetValues = new String[]{{
                                    add("minus"),
                                }};
                            }};
                            urlValues = new org.openapis.openapi.models.shared.UrlAttributeValue[]{{
                                add(new UrlAttributeValue() {{
                                    url = "dolor";
                                }}),
                                add(new UrlAttributeValue() {{
                                    url = "vero";
                                }}),
                            }};
                            valueType = AttributeValueTypeEnum.BOOL;
                            values = new Object[]{{
                                add("recusandae"),
                                add("omnis"),
                                add("facilis"),
                                add("perspiciatis"),
                            }};
                        }}),
                        add(new Attribute() {{
                            attributeId = "voluptatem";
                            repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                setValues = new String[]{{
                                    add("consequuntur"),
                                    add("blanditiis"),
                                    add("error"),
                                    add("eaque"),
                                }};
                                unsetValues = new String[]{{
                                    add("rerum"),
                                    add("adipisci"),
                                    add("asperiores"),
                                }};
                            }};
                            urlValues = new org.openapis.openapi.models.shared.UrlAttributeValue[]{{
                                add(new UrlAttributeValue() {{
                                    url = "modi";
                                }}),
                                add(new UrlAttributeValue() {{
                                    url = "iste";
                                }}),
                                add(new UrlAttributeValue() {{
                                    url = "dolorum";
                                }}),
                                add(new UrlAttributeValue() {{
                                    url = "deleniti";
                                }}),
                            }};
                            valueType = AttributeValueTypeEnum.REPEATED_ENUM;
                            values = new Object[]{{
                                add("nobis"),
                                add("libero"),
                                add("delectus"),
                            }};
                        }}),
                    }};
                    labels = new String[]{{
                        add("quos"),
                        add("aliquid"),
                    }};
                    languageCode = "dolorem";
                    latlng = new LatLng() {{
                        latitude = 2098.43;
                        longitude = 2224.43;
                    }};;
                    locationKey = new LocationKey() {{
                        explicitNoPlaceId = false;
                        placeId = "qui";
                        plusPageId = "ipsum";
                        requestId = "hic";
                    }};;
                    locationName = "excepturi";
                    locationState = new LocationStateInput() {{
                        canDelete = false;
                        canUpdate = false;
                        hasPendingEdits = false;
                        hasPendingVerification = false;
                        isDisabled = false;
                        isDisconnected = false;
                        isDuplicate = false;
                        isGoogleUpdated = false;
                        isLocalPostApiDisabled = false;
                        isPendingReview = false;
                        isPublished = false;
                        isSuspended = false;
                        isVerified = false;
                        needsReverification = false;
                    }};;
                    metadata = new Metadata() {{
                        duplicate = new Duplicate() {{
                            access = DuplicateAccessEnum.ALLOWED;
                            locationName = "voluptate";
                            placeId = "dignissimos";
                        }};;
                        mapsUrl = "reiciendis";
                        newReviewUrl = "amet";
                    }};;
                    moreHours = new org.openapis.openapi.models.shared.MoreHours[]{{
                        add(new MoreHours() {{
                            hoursTypeId = "numquam";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    closeTime = "ipsa";
                                    openDay = TimePeriodOpenDayEnum.WEDNESDAY;
                                    openTime = "odio";
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "quaerat";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                    closeTime = "voluptatibus";
                                    openDay = TimePeriodOpenDayEnum.WEDNESDAY;
                                    openTime = "natus";
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.MONDAY;
                                    closeTime = "atque";
                                    openDay = TimePeriodOpenDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    openTime = "fugiat";
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    closeTime = "soluta";
                                    openDay = TimePeriodOpenDayEnum.FRIDAY;
                                    openTime = "iusto";
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.WEDNESDAY;
                                    closeTime = "dolorum";
                                    openDay = TimePeriodOpenDayEnum.THURSDAY;
                                    openTime = "omnis";
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "necessitatibus";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.SUNDAY;
                                    closeTime = "nihil";
                                    openDay = TimePeriodOpenDayEnum.MONDAY;
                                    openTime = "voluptate";
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                    closeTime = "saepe";
                                    openDay = TimePeriodOpenDayEnum.TUESDAY;
                                    openTime = "aspernatur";
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    closeTime = "amet";
                                    openDay = TimePeriodOpenDayEnum.SATURDAY;
                                    openTime = "accusamus";
                                }}),
                            }};
                        }}),
                    }};
                    name = "Jenna Hoppe";
                    openInfo = new OpenInfo() {{
                        canReopen = false;
                        openingDate = new Date() {{
                            day = 324683;
                            month = 831049;
                            year = 519711;
                        }};;
                        status = OpenInfoStatusEnum.CLOSED_PERMANENTLY;
                    }};;
                    priceLists = new org.openapis.openapi.models.shared.PriceList[]{{
                        add(new PriceList() {{
                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                add(new Label() {{
                                    description = "quaerat";
                                    displayName = "tempora";
                                    languageCode = "vel";
                                }}),
                                add(new Label() {{
                                    description = "quod";
                                    displayName = "officiis";
                                    languageCode = "qui";
                                }}),
                                add(new Label() {{
                                    description = "dolorum";
                                    displayName = "a";
                                    languageCode = "esse";
                                }}),
                                add(new Label() {{
                                    description = "harum";
                                    displayName = "iusto";
                                    languageCode = "ipsum";
                                }}),
                            }};
                            priceListId = "quisquam";
                            sections = new org.openapis.openapi.models.shared.Section[]{{
                                add(new Section() {{
                                    items = new org.openapis.openapi.models.shared.Item[]{{
                                        add(new Item() {{
                                            itemId = "tempore";
                                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                                add(new Label() {{
                                                    description = "numquam";
                                                    displayName = "enim";
                                                    languageCode = "dolorem";
                                                }}),
                                                add(new Label() {{
                                                    description = "sapiente";
                                                    displayName = "totam";
                                                    languageCode = "nihil";
                                                }}),
                                                add(new Label() {{
                                                    description = "sit";
                                                    displayName = "expedita";
                                                    languageCode = "neque";
                                                }}),
                                                add(new Label() {{
                                                    description = "sed";
                                                    displayName = "vel";
                                                    languageCode = "libero";
                                                }}),
                                            }};
                                            price = new Money() {{
                                                currencyCode = "voluptas";
                                                nanos = 646265;
                                                units = "quam";
                                            }};
                                        }}),
                                    }};
                                    labels = new org.openapis.openapi.models.shared.Label[]{{
                                        add(new Label() {{
                                            description = "incidunt";
                                            displayName = "qui";
                                            languageCode = "cupiditate";
                                        }}),
                                    }};
                                    sectionId = "maxime";
                                    sectionType = SectionSectionTypeEnum.SERVICES;
                                }}),
                                add(new Section() {{
                                    items = new org.openapis.openapi.models.shared.Item[]{{
                                        add(new Item() {{
                                            itemId = "dicta";
                                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                                add(new Label() {{
                                                    description = "totam";
                                                    displayName = "incidunt";
                                                    languageCode = "aspernatur";
                                                }}),
                                                add(new Label() {{
                                                    description = "dolores";
                                                    displayName = "distinctio";
                                                    languageCode = "facilis";
                                                }}),
                                                add(new Label() {{
                                                    description = "aliquid";
                                                    displayName = "quam";
                                                    languageCode = "molestias";
                                                }}),
                                            }};
                                            price = new Money() {{
                                                currencyCode = "temporibus";
                                                nanos = 183280;
                                                units = "neque";
                                            }};
                                        }}),
                                        add(new Item() {{
                                            itemId = "fugit";
                                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                                add(new Label() {{
                                                    description = "odio";
                                                    displayName = "sunt";
                                                    languageCode = "ullam";
                                                }}),
                                            }};
                                            price = new Money() {{
                                                currencyCode = "nam";
                                                nanos = 940432;
                                                units = "voluptatem";
                                            }};
                                        }}),
                                        add(new Item() {{
                                            itemId = "cumque";
                                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                                add(new Label() {{
                                                    description = "nobis";
                                                    displayName = "et";
                                                    languageCode = "saepe";
                                                }}),
                                                add(new Label() {{
                                                    description = "ipsum";
                                                    displayName = "veritatis";
                                                    languageCode = "nobis";
                                                }}),
                                                add(new Label() {{
                                                    description = "quos";
                                                    displayName = "tempore";
                                                    languageCode = "cupiditate";
                                                }}),
                                            }};
                                            price = new Money() {{
                                                currencyCode = "aperiam";
                                                nanos = 961937;
                                                units = "dolorem";
                                            }};
                                        }}),
                                    }};
                                    labels = new org.openapis.openapi.models.shared.Label[]{{
                                        add(new Label() {{
                                            description = "labore";
                                            displayName = "adipisci";
                                            languageCode = "dolorum";
                                        }}),
                                        add(new Label() {{
                                            description = "architecto";
                                            displayName = "quae";
                                            languageCode = "aut";
                                        }}),
                                    }};
                                    sectionId = "quas";
                                    sectionType = SectionSectionTypeEnum.SERVICES;
                                }}),
                                add(new Section() {{
                                    items = new org.openapis.openapi.models.shared.Item[]{{
                                        add(new Item() {{
                                            itemId = "est";
                                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                                add(new Label() {{
                                                    description = "porro";
                                                    displayName = "doloribus";
                                                    languageCode = "ut";
                                                }}),
                                                add(new Label() {{
                                                    description = "facilis";
                                                    displayName = "cupiditate";
                                                    languageCode = "qui";
                                                }}),
                                                add(new Label() {{
                                                    description = "quae";
                                                    displayName = "laudantium";
                                                    languageCode = "odio";
                                                }}),
                                                add(new Label() {{
                                                    description = "occaecati";
                                                    displayName = "voluptatibus";
                                                    languageCode = "quisquam";
                                                }}),
                                            }};
                                            price = new Money() {{
                                                currencyCode = "vero";
                                                nanos = 606476;
                                                units = "quis";
                                            }};
                                        }}),
                                    }};
                                    labels = new org.openapis.openapi.models.shared.Label[]{{
                                        add(new Label() {{
                                            description = "delectus";
                                            displayName = "voluptate";
                                            languageCode = "consectetur";
                                        }}),
                                    }};
                                    sectionId = "vero";
                                    sectionType = SectionSectionTypeEnum.SERVICES;
                                }}),
                                add(new Section() {{
                                    items = new org.openapis.openapi.models.shared.Item[]{{
                                        add(new Item() {{
                                            itemId = "hic";
                                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                                add(new Label() {{
                                                    description = "quod";
                                                    displayName = "odio";
                                                    languageCode = "similique";
                                                }}),
                                                add(new Label() {{
                                                    description = "facilis";
                                                    displayName = "vero";
                                                    languageCode = "ducimus";
                                                }}),
                                                add(new Label() {{
                                                    description = "dolore";
                                                    displayName = "quibusdam";
                                                    languageCode = "illum";
                                                }}),
                                            }};
                                            price = new Money() {{
                                                currencyCode = "sequi";
                                                nanos = 617877;
                                                units = "impedit";
                                            }};
                                        }}),
                                        add(new Item() {{
                                            itemId = "aut";
                                            labels = new org.openapis.openapi.models.shared.Label[]{{
                                                add(new Label() {{
                                                    description = "exercitationem";
                                                    displayName = "nulla";
                                                    languageCode = "fugit";
                                                }}),
                                                add(new Label() {{
                                                    description = "porro";
                                                    displayName = "maiores";
                                                    languageCode = "doloribus";
                                                }}),
                                                add(new Label() {{
                                                    description = "iusto";
                                                    displayName = "eligendi";
                                                    languageCode = "ducimus";
                                                }}),
                                                add(new Label() {{
                                                    description = "alias";
                                                    displayName = "officia";
                                                    languageCode = "tempora";
                                                }}),
                                            }};
                                            price = new Money() {{
                                                currencyCode = "ipsam";
                                                nanos = 410492;
                                                units = "aspernatur";
                                            }};
                                        }}),
                                    }};
                                    labels = new org.openapis.openapi.models.shared.Label[]{{
                                        add(new Label() {{
                                            description = "possimus";
                                            displayName = "magnam";
                                            languageCode = "ratione";
                                        }}),
                                        add(new Label() {{
                                            description = "ex";
                                            displayName = "laudantium";
                                            languageCode = "dicta";
                                        }}),
                                    }};
                                    sectionId = "dolor";
                                    sectionType = SectionSectionTypeEnum.SERVICES;
                                }}),
                            }};
                            sourceUrl = "quasi";
                        }}),
                    }};
                    primaryCategory = new CategoryInput() {{
                        categoryId = "ex";
                        displayName = "nulla";
                    }};;
                    primaryPhone = "excepturi";
                    profile = new Profile() {{
                        description = "voluptatibus";
                    }};;
                    regularHours = new BusinessHours() {{
                        periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                            add(new TimePeriod() {{
                                closeDay = TimePeriodCloseDayEnum.SUNDAY;
                                closeTime = "quisquam";
                                openDay = TimePeriodOpenDayEnum.SUNDAY;
                                openTime = "ea";
                            }}),
                            add(new TimePeriod() {{
                                closeDay = TimePeriodCloseDayEnum.SATURDAY;
                                closeTime = "corporis";
                                openDay = TimePeriodOpenDayEnum.TUESDAY;
                                openTime = "aliquid";
                            }}),
                        }};
                    }};;
                    relationshipData = new RelationshipData() {{
                        parentChain = "inventore";
                    }};;
                    serviceArea = new ServiceAreaBusiness() {{
                        businessType = ServiceAreaBusinessBusinessTypeEnum.BUSINESS_TYPE_UNSPECIFIED;
                        places = new Places() {{
                            placeInfos = new org.openapis.openapi.models.shared.PlaceInfo[]{{
                                add(new PlaceInfo() {{
                                    name = "Glenn Walter";
                                    placeId = "eaque";
                                }}),
                                add(new PlaceInfo() {{
                                    name = "Ms. Marco Ankunding";
                                    placeId = "aliquam";
                                }}),
                            }};
                        }};;
                        radius = new PointRadius() {{
                            latlng = new LatLng() {{
                                latitude = 1469.46;
                                longitude = 8828.6;
                            }};;
                            radiusKm = 795.22;
                        }};;
                    }};;
                    specialHours = new SpecialHours() {{
                        specialHourPeriods = new org.openapis.openapi.models.shared.SpecialHourPeriod[]{{
                            add(new SpecialHourPeriod() {{
                                closeTime = "et";
                                endDate = new Date() {{
                                    day = 677412;
                                    month = 672048;
                                    year = 810424;
                                }};
                                isClosed = false;
                                openTime = "velit";
                                startDate = new Date() {{
                                    day = 432148;
                                    month = 420539;
                                    year = 752135;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = "quas";
                                endDate = new Date() {{
                                    day = 829603;
                                    month = 860552;
                                    year = 379034;
                                }};
                                isClosed = false;
                                openTime = "libero";
                                startDate = new Date() {{
                                    day = 96549;
                                    month = 270328;
                                    year = 256139;
                                }};
                            }}),
                        }};
                    }};;
                    storeCode = "explicabo";
                    websiteUrl = "provident";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "odio";
                key = "eius";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "rem";
                uploadType = "fuga";
                uploadProtocol = "reprehenderit";
                validateOnly = false;
            }};            

            MybusinessAccountsLocationsCreateResponse res = sdk.accounts.mybusinessAccountsLocationsCreate(req);

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsFetchVerificationOptions

Reports all eligible verification options for a location in a specific language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsFetchVerificationOptionsRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsFetchVerificationOptionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FetchVerificationOptionsRequest;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.ServiceBusinessContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsFetchVerificationOptionsRequest req = new MybusinessAccountsLocationsFetchVerificationOptionsRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                fetchVerificationOptionsRequest = new FetchVerificationOptionsRequest() {{
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("eum"),
                                add("suscipit"),
                            }};
                            administrativeArea = "assumenda";
                            languageCode = "eos";
                            locality = "praesentium";
                            organization = "quisquam";
                            postalCode = "06627";
                            recipients = new String[]{{
                                add("quo"),
                                add("fuga"),
                                add("eius"),
                                add("eos"),
                            }};
                            regionCode = "voluptas";
                            revision = 69859;
                            sortingCode = "cupiditate";
                            sublocality = "consequatur";
                        }};;
                    }};;
                    languageCode = "tempora";
                }};;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "sequi";
                key = "quo";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "aperiam";
                uploadProtocol = "distinctio";
            }};            

            MybusinessAccountsLocationsFetchVerificationOptionsResponse res = sdk.accounts.mybusinessAccountsLocationsFetchVerificationOptions(req);

            if (res.fetchVerificationOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsFindMatches

Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsFindMatchesRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsFindMatchesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FindMatchingLocationsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsFindMatchesRequest req = new MybusinessAccountsLocationsFindMatchesRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                findMatchingLocationsRequest = new FindMatchingLocationsRequest() {{
                    languageCode = "inventore";
                    maxCacheDuration = "nihil";
                    numResults = 518835;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "occaecati";
                key = "commodi";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "deserunt";
                uploadProtocol = "molestiae";
            }};            

            MybusinessAccountsLocationsFindMatchesResponse res = sdk.accounts.mybusinessAccountsLocationsFindMatches(req);

            if (res.findMatchingLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsGetGoogleUpdated

Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsGetGoogleUpdatedRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsGetGoogleUpdatedResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsGetGoogleUpdatedRequest req = new MybusinessAccountsLocationsGetGoogleUpdatedRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "consequuntur";
                key = "deleniti";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "mollitia";
                uploadProtocol = "incidunt";
            }};            

            MybusinessAccountsLocationsGetGoogleUpdatedResponse res = sdk.accounts.mybusinessAccountsLocationsGetGoogleUpdated(req);

            if (res.googleUpdatedLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsInsuranceNetworksList

Returns a list of all insurance networks supported by Google.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsInsuranceNetworksListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsInsuranceNetworksListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsInsuranceNetworksListRequest req = new MybusinessAccountsLocationsInsuranceNetworksListRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "sapiente";
                key = "consequuntur";
                languageCode = "ratione";
                oauthToken = "explicabo";
                pageSize = 903984L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "et";
                uploadProtocol = "esse";
            }};            

            MybusinessAccountsLocationsInsuranceNetworksListResponse res = sdk.accounts.mybusinessAccountsLocationsInsuranceNetworksList(req);

            if (res.listInsuranceNetworksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsList

Lists the locations for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsListRequest req = new MybusinessAccountsLocationsListRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "nam";
                filter = "vero";
                key = "aliquid";
                languageCode = "quasi";
                oauthToken = "saepe";
                orderBy = "vel";
                pageSize = 690025L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "occaecati";
                uploadProtocol = "minima";
            }};            

            MybusinessAccountsLocationsListResponse res = sdk.accounts.mybusinessAccountsLocationsList(req);

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsLocalPostsCreate

Creates a new local post associated with the specified location, and returns it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLocalPostsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLocalPostsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attribution;
import org.openapis.openapi.models.shared.CallToAction;
import org.openapis.openapi.models.shared.CallToActionActionTypeEnum;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.LocalPost;
import org.openapis.openapi.models.shared.LocalPostAlertTypeEnum;
import org.openapis.openapi.models.shared.LocalPostEvent;
import org.openapis.openapi.models.shared.LocalPostOffer;
import org.openapis.openapi.models.shared.LocalPostStateEnum;
import org.openapis.openapi.models.shared.LocalPostTopicTypeEnum;
import org.openapis.openapi.models.shared.LocationAssociation;
import org.openapis.openapi.models.shared.LocationAssociationCategoryEnum;
import org.openapis.openapi.models.shared.MediaInsights;
import org.openapis.openapi.models.shared.MediaItem;
import org.openapis.openapi.models.shared.MediaItemDataRef;
import org.openapis.openapi.models.shared.MediaItemMediaFormatEnum;
import org.openapis.openapi.models.shared.TimeInterval;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsLocalPostsCreateRequest req = new MybusinessAccountsLocationsLocalPostsCreateRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                localPost = new LocalPost() {{
                    alertType = LocalPostAlertTypeEnum.ALERT_TYPE_UNSPECIFIED;
                    callToAction = new CallToAction() {{
                        actionType = CallToActionActionTypeEnum.SIGN_UP;
                        url = "tempore";
                    }};;
                    createTime = "adipisci";
                    event = new LocalPostEvent() {{
                        schedule = new TimeInterval() {{
                            endDate = new Date() {{
                                day = 766964;
                                month = 160538;
                                year = 9766;
                            }};;
                            endTime = new TimeOfDay() {{
                                hours = 796392;
                                minutes = 308286;
                                nanos = 959167;
                                seconds = 232865;
                            }};;
                            startDate = new Date() {{
                                day = 458139;
                                month = 503427;
                                year = 590984;
                            }};;
                            startTime = new TimeOfDay() {{
                                hours = 953722;
                                minutes = 857723;
                                nanos = 557811;
                                seconds = 457223;
                            }};;
                        }};;
                        title = "Mr.";
                    }};;
                    languageCode = "a";
                    media = new org.openapis.openapi.models.shared.MediaItem[]{{
                        add(new MediaItem() {{
                            attribution = new Attribution() {{
                                profileName = "sint";
                                profilePhotoUrl = "pariatur";
                                profileUrl = "possimus";
                                takedownUrl = "quia";
                            }};
                            createTime = "eveniet";
                            dataRef = new MediaItemDataRef() {{
                                resourceName = "asperiores";
                            }};
                            description = "facere";
                            dimensions = new Dimensions() {{
                                heightPixels = 85001;
                                widthPixels = 159414;
                            }};
                            googleUrl = "quasi";
                            insights = new MediaInsights() {{
                                viewCount = "similique";
                            }};
                            locationAssociation = new LocationAssociation() {{
                                category = LocationAssociationCategoryEnum.FOOD_AND_DRINK;
                                priceListItemId = "aliquid";
                            }};
                            mediaFormat = MediaItemMediaFormatEnum.VIDEO;
                            name = "Lila Kassulke";
                            sourceUrl = "libero";
                            thumbnailUrl = "illum";
                        }}),
                        add(new MediaItem() {{
                            attribution = new Attribution() {{
                                profileName = "soluta";
                                profilePhotoUrl = "accusantium";
                                profileUrl = "aliquam";
                                takedownUrl = "sapiente";
                            }};
                            createTime = "dicta";
                            dataRef = new MediaItemDataRef() {{
                                resourceName = "ullam";
                            }};
                            description = "reprehenderit";
                            dimensions = new Dimensions() {{
                                heightPixels = 356707;
                                widthPixels = 391774;
                            }};
                            googleUrl = "aut";
                            insights = new MediaInsights() {{
                                viewCount = "voluptatum";
                            }};
                            locationAssociation = new LocationAssociation() {{
                                category = LocationAssociationCategoryEnum.PROFILE;
                                priceListItemId = "quibusdam";
                            }};
                            mediaFormat = MediaItemMediaFormatEnum.PHOTO;
                            name = "Miss Percy Parisian";
                            sourceUrl = "quasi";
                            thumbnailUrl = "at";
                        }}),
                        add(new MediaItem() {{
                            attribution = new Attribution() {{
                                profileName = "et";
                                profilePhotoUrl = "voluptate";
                                profileUrl = "ipsa";
                                takedownUrl = "minima";
                            }};
                            createTime = "veritatis";
                            dataRef = new MediaItemDataRef() {{
                                resourceName = "consectetur";
                            }};
                            description = "adipisci";
                            dimensions = new Dimensions() {{
                                heightPixels = 614465;
                                widthPixels = 839513;
                            }};
                            googleUrl = "accusantium";
                            insights = new MediaInsights() {{
                                viewCount = "rem";
                            }};
                            locationAssociation = new LocationAssociation() {{
                                category = LocationAssociationCategoryEnum.CATEGORY_UNSPECIFIED;
                                priceListItemId = "laudantium";
                            }};
                            mediaFormat = MediaItemMediaFormatEnum.PHOTO;
                            name = "Andrew Little I";
                            sourceUrl = "occaecati";
                            thumbnailUrl = "numquam";
                        }}),
                    }};
                    name = "Ms. Benjamin Hirthe DVM";
                    offer = new LocalPostOffer() {{
                        couponCode = "natus";
                        redeemOnlineUrl = "velit";
                        termsConditions = "voluptatibus";
                    }};;
                    searchUrl = "voluptas";
                    state = LocalPostStateEnum.PROCESSING;
                    summary = "aperiam";
                    topicType = LocalPostTopicTypeEnum.EVENT;
                    updateTime = "quaerat";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "maxime";
                key = "dignissimos";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "nemo";
                uploadProtocol = "quae";
            }};            

            MybusinessAccountsLocationsLocalPostsCreateResponse res = sdk.accounts.mybusinessAccountsLocationsLocalPostsCreate(req);

            if (res.localPost != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsLocalPostsList

Returns a list of local posts associated with a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLocalPostsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLocalPostsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsLocalPostsListRequest req = new MybusinessAccountsLocationsLocalPostsListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "adipisci";
                key = "fuga";
                oauthToken = "id";
                pageSize = 380729L;
                pageToken = "velit";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "est";
                uploadProtocol = "recusandae";
            }};            

            MybusinessAccountsLocationsLocalPostsListResponse res = sdk.accounts.mybusinessAccountsLocationsLocalPostsList(req);

            if (res.listLocalPostsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsLocalPostsReportInsights

Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLocalPostsReportInsightsRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLocalPostsReportInsightsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BasicMetricsRequest;
import org.openapis.openapi.models.shared.MetricRequest;
import org.openapis.openapi.models.shared.MetricRequestMetricEnum;
import org.openapis.openapi.models.shared.MetricRequestOptionsEnum;
import org.openapis.openapi.models.shared.ReportLocalPostInsightsRequest;
import org.openapis.openapi.models.shared.TimeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsLocalPostsReportInsightsRequest req = new MybusinessAccountsLocationsLocalPostsReportInsightsRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                reportLocalPostInsightsRequest = new ReportLocalPostInsightsRequest() {{
                    basicRequest = new BasicMetricsRequest() {{
                        metricRequests = new org.openapis.openapi.models.shared.MetricRequest[]{{
                            add(new MetricRequest() {{
                                metric = MetricRequestMetricEnum.ACTIONS_WEBSITE;
                                options = new org.openapis.openapi.models.shared.MetricRequestOptionsEnum[]{{
                                    add(MetricRequestOptionsEnum.AGGREGATED_DAILY),
                                    add(MetricRequestOptionsEnum.AGGREGATED_TOTAL),
                                    add(MetricRequestOptionsEnum.BREAKDOWN_HOUR_OF_DAY),
                                }};
                            }}),
                            add(new MetricRequest() {{
                                metric = MetricRequestMetricEnum.PHOTOS_VIEWS_CUSTOMERS;
                                options = new org.openapis.openapi.models.shared.MetricRequestOptionsEnum[]{{
                                    add(MetricRequestOptionsEnum.AGGREGATED_DAILY),
                                    add(MetricRequestOptionsEnum.AGGREGATED_DAILY),
                                    add(MetricRequestOptionsEnum.AGGREGATED_TOTAL),
                                }};
                            }}),
                        }};
                        timeRange = new TimeRange() {{
                            endTime = "reiciendis";
                            startTime = "assumenda";
                        }};;
                    }};;
                    localPostNames = new String[]{{
                        add("recusandae"),
                        add("aliquid"),
                    }};
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "in";
                key = "exercitationem";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "numquam";
                uploadProtocol = "doloribus";
            }};            

            MybusinessAccountsLocationsLocalPostsReportInsightsResponse res = sdk.accounts.mybusinessAccountsLocationsLocalPostsReportInsights(req);

            if (res.reportLocalPostInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsLodgingGetGoogleUpdated

Returns the Google updated Lodging of a specific location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest req = new MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "necessitatibus";
                fields = "dolore";
                key = "sunt";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "adipisci";
                readMask = "non";
                uploadType = "amet";
                uploadProtocol = "beatae";
            }};            

            MybusinessAccountsLocationsLodgingGetGoogleUpdatedResponse res = sdk.accounts.mybusinessAccountsLocationsLodgingGetGoogleUpdated(req);

            if (res.getGoogleUpdatedLodgingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsMediaCreate

Creates a new media item for the location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attribution;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.LocationAssociation;
import org.openapis.openapi.models.shared.LocationAssociationCategoryEnum;
import org.openapis.openapi.models.shared.MediaInsights;
import org.openapis.openapi.models.shared.MediaItem;
import org.openapis.openapi.models.shared.MediaItemDataRef;
import org.openapis.openapi.models.shared.MediaItemMediaFormatEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsMediaCreateRequest req = new MybusinessAccountsLocationsMediaCreateRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                mediaItem = new MediaItem() {{
                    attribution = new Attribution() {{
                        profileName = "debitis";
                        profilePhotoUrl = "consectetur";
                        profileUrl = "corporis";
                        takedownUrl = "harum";
                    }};;
                    createTime = "laboriosam";
                    dataRef = new MediaItemDataRef() {{
                        resourceName = "ipsa";
                    }};;
                    description = "voluptates";
                    dimensions = new Dimensions() {{
                        heightPixels = 730709;
                        widthPixels = 113816;
                    }};;
                    googleUrl = "accusamus";
                    insights = new MediaInsights() {{
                        viewCount = "similique";
                    }};;
                    locationAssociation = new LocationAssociation() {{
                        category = LocationAssociationCategoryEnum.LOGO;
                        priceListItemId = "aspernatur";
                    }};;
                    mediaFormat = MediaItemMediaFormatEnum.PHOTO;
                    name = "Melanie Hane";
                    sourceUrl = "adipisci";
                    thumbnailUrl = "minus";
                }};;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "dolore";
                key = "aliquam";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ullam";
                uploadProtocol = "adipisci";
            }};            

            MybusinessAccountsLocationsMediaCreateResponse res = sdk.accounts.mybusinessAccountsLocationsMediaCreate(req);

            if (res.mediaItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsMediaCustomersList

Returns a list of media items associated with a location that have been contributed by customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaCustomersListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaCustomersListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsMediaCustomersListRequest req = new MybusinessAccountsLocationsMediaCustomersListRequest("cum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "culpa";
                key = "corrupti";
                oauthToken = "pariatur";
                pageSize = 519643L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "nobis";
                uploadProtocol = "sit";
            }};            

            MybusinessAccountsLocationsMediaCustomersListResponse res = sdk.accounts.mybusinessAccountsLocationsMediaCustomersList(req);

            if (res.listCustomerMediaItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsMediaList

Returns a list of media items associated with a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsMediaListRequest req = new MybusinessAccountsLocationsMediaListRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "facilis";
                key = "voluptate";
                oauthToken = "expedita";
                pageSize = 70869L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "laborum";
                uploadProtocol = "sed";
            }};            

            MybusinessAccountsLocationsMediaListResponse res = sdk.accounts.mybusinessAccountsLocationsMediaList(req);

            if (res.listMediaItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsMediaStartUpload

Generates a `MediaItemDataRef` for media item uploading.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaStartUploadRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsMediaStartUploadResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsMediaStartUploadRequest req = new MybusinessAccountsLocationsMediaStartUploadRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("explicabo", "voluptas");
                    put("unde", "architecto");
                    put("suscipit", "sapiente");
                }};
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "perferendis";
                key = "corrupti";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "sed";
                uploadProtocol = "provident";
            }};            

            MybusinessAccountsLocationsMediaStartUploadResponse res = sdk.accounts.mybusinessAccountsLocationsMediaStartUpload(req);

            if (res.mediaItemDataRef != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsQuestionsAnswersDelete

Deletes the answer written by the current user to a question.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsAnswersDeleteRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsAnswersDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsQuestionsAnswersDeleteRequest req = new MybusinessAccountsLocationsQuestionsAnswersDeleteRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "quos";
                key = "voluptatibus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "voluptate";
                uploadProtocol = "reiciendis";
            }};            

            MybusinessAccountsLocationsQuestionsAnswersDeleteResponse res = sdk.accounts.mybusinessAccountsLocationsQuestionsAnswersDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsQuestionsAnswersList

Returns the paginated list of answers for a specified question.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsAnswersListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsAnswersListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsQuestionsAnswersListRequest req = new MybusinessAccountsLocationsQuestionsAnswersListRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "facilis";
                key = "quaerat";
                oauthToken = "incidunt";
                orderBy = "ipsam";
                pageSize = 894864L;
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "nobis";
                uploadProtocol = "error";
            }};            

            MybusinessAccountsLocationsQuestionsAnswersListResponse res = sdk.accounts.mybusinessAccountsLocationsQuestionsAnswersList(req);

            if (res.listAnswersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsQuestionsAnswersUpsert

Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsAnswersUpsertRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsAnswersUpsertResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Answer;
import org.openapis.openapi.models.shared.Author;
import org.openapis.openapi.models.shared.AuthorTypeEnum;
import org.openapis.openapi.models.shared.UpsertAnswerRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsQuestionsAnswersUpsertRequest req = new MybusinessAccountsLocationsQuestionsAnswersUpsertRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                upsertAnswerRequest = new UpsertAnswerRequest() {{
                    answer = new Answer() {{
                        author = new Author() {{
                            displayName = "recusandae";
                            profilePhotoUrl = "reiciendis";
                            type = AuthorTypeEnum.MERCHANT;
                        }};;
                        createTime = "magni";
                        name = "Gwen Fritsch";
                        text = "officiis";
                        updateTime = "beatae";
                        upvoteCount = 512452;
                    }};;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "laboriosam";
                key = "dolorum";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "hic";
                uploadProtocol = "expedita";
            }};            

            MybusinessAccountsLocationsQuestionsAnswersUpsertResponse res = sdk.accounts.mybusinessAccountsLocationsQuestionsAnswersUpsert(req);

            if (res.answer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsQuestionsCreate

Adds a question for the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Answer;
import org.openapis.openapi.models.shared.Author;
import org.openapis.openapi.models.shared.AuthorTypeEnum;
import org.openapis.openapi.models.shared.Question;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsQuestionsCreateRequest req = new MybusinessAccountsLocationsQuestionsCreateRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                question = new Question() {{
                    author = new Author() {{
                        displayName = "dolorum";
                        profilePhotoUrl = "nostrum";
                        type = AuthorTypeEnum.LOCAL_GUIDE;
                    }};;
                    createTime = "dolorum";
                    name = "Caleb Goldner";
                    text = "ut";
                    topAnswers = new org.openapis.openapi.models.shared.Answer[]{{
                        add(new Answer() {{
                            author = new Author() {{
                                displayName = "voluptatem";
                                profilePhotoUrl = "culpa";
                                type = AuthorTypeEnum.LOCAL_GUIDE;
                            }};
                            createTime = "magnam";
                            name = "Ms. Georgia Hintz";
                            text = "repudiandae";
                            updateTime = "corporis";
                            upvoteCount = 89494;
                        }}),
                        add(new Answer() {{
                            author = new Author() {{
                                displayName = "blanditiis";
                                profilePhotoUrl = "ex";
                                type = AuthorTypeEnum.AUTHOR_TYPE_UNSPECIFIED;
                            }};
                            createTime = "sit";
                            name = "Bernice Ullrich II";
                            text = "reiciendis";
                            updateTime = "dolorem";
                            upvoteCount = 690894;
                        }}),
                        add(new Answer() {{
                            author = new Author() {{
                                displayName = "dicta";
                                profilePhotoUrl = "architecto";
                                type = AuthorTypeEnum.LOCAL_GUIDE;
                            }};
                            createTime = "labore";
                            name = "Alberto Osinski";
                            text = "laboriosam";
                            updateTime = "alias";
                            upvoteCount = 227084;
                        }}),
                        add(new Answer() {{
                            author = new Author() {{
                                displayName = "deserunt";
                                profilePhotoUrl = "voluptate";
                                type = AuthorTypeEnum.LOCAL_GUIDE;
                            }};
                            createTime = "reiciendis";
                            name = "Marcos Windler MD";
                            text = "quidem";
                            updateTime = "reprehenderit";
                            upvoteCount = 813679;
                        }}),
                    }};
                    totalAnswerCount = 685092;
                    updateTime = "praesentium";
                    upvoteCount = 648598;
                }};;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "repudiandae";
                key = "quasi";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "asperiores";
                uploadProtocol = "totam";
            }};            

            MybusinessAccountsLocationsQuestionsCreateResponse res = sdk.accounts.mybusinessAccountsLocationsQuestionsCreate(req);

            if (res.question != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsQuestionsDelete

Deletes a specific question written by the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsDeleteRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsQuestionsDeleteRequest req = new MybusinessAccountsLocationsQuestionsDeleteRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "amet";
                key = "assumenda";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "error";
                uploadProtocol = "officiis";
            }};            

            MybusinessAccountsLocationsQuestionsDeleteResponse res = sdk.accounts.mybusinessAccountsLocationsQuestionsDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsQuestionsList

Returns the paginated list of questions and some of its answers for a specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsQuestionsListRequest req = new MybusinessAccountsLocationsQuestionsListRequest("officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "natus";
                alt = AltEnum.JSON;
                answersPerQuestion = 133461L;
                callback = "ex";
                fields = "maiores";
                filter = "corrupti";
                key = "at";
                oauthToken = "error";
                orderBy = "blanditiis";
                pageSize = 379356L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "atque";
                uploadProtocol = "sunt";
            }};            

            MybusinessAccountsLocationsQuestionsListResponse res = sdk.accounts.mybusinessAccountsLocationsQuestionsList(req);

            if (res.listQuestionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsQuestionsPatch

Updates a specific question written by the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsPatchRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsQuestionsPatchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Answer;
import org.openapis.openapi.models.shared.Author;
import org.openapis.openapi.models.shared.AuthorTypeEnum;
import org.openapis.openapi.models.shared.Question;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsQuestionsPatchRequest req = new MybusinessAccountsLocationsQuestionsPatchRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                question = new Question() {{
                    author = new Author() {{
                        displayName = "repellendus";
                        profilePhotoUrl = "labore";
                        type = AuthorTypeEnum.MERCHANT;
                    }};;
                    createTime = "doloremque";
                    name = "Mr. Keith Bashirian";
                    text = "laboriosam";
                    topAnswers = new org.openapis.openapi.models.shared.Answer[]{{
                        add(new Answer() {{
                            author = new Author() {{
                                displayName = "a";
                                profilePhotoUrl = "molestias";
                                type = AuthorTypeEnum.REGULAR_USER;
                            }};
                            createTime = "saepe";
                            name = "Toni Torphy";
                            text = "adipisci";
                            updateTime = "eveniet";
                            upvoteCount = 580887;
                        }}),
                    }};
                    totalAnswerCount = 160230;
                    updateTime = "fugit";
                    upvoteCount = 661118;
                }};;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "illo";
                key = "corporis";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "eveniet";
                updateMask = "non";
                uploadType = "vero";
                uploadProtocol = "doloremque";
            }};            

            MybusinessAccountsLocationsQuestionsPatchResponse res = sdk.accounts.mybusinessAccountsLocationsQuestionsPatch(req);

            if (res.question != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsReportInsights

Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReportInsightsRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReportInsightsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BasicMetricsRequest;
import org.openapis.openapi.models.shared.DrivingDirectionMetricsRequest;
import org.openapis.openapi.models.shared.DrivingDirectionMetricsRequestNumDaysEnum;
import org.openapis.openapi.models.shared.MetricRequest;
import org.openapis.openapi.models.shared.MetricRequestMetricEnum;
import org.openapis.openapi.models.shared.MetricRequestOptionsEnum;
import org.openapis.openapi.models.shared.ReportLocationInsightsRequest;
import org.openapis.openapi.models.shared.TimeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsReportInsightsRequest req = new MybusinessAccountsLocationsReportInsightsRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                reportLocationInsightsRequest = new ReportLocationInsightsRequest() {{
                    basicRequest = new BasicMetricsRequest() {{
                        metricRequests = new org.openapis.openapi.models.shared.MetricRequest[]{{
                            add(new MetricRequest() {{
                                metric = MetricRequestMetricEnum.METRIC_UNSPECIFIED;
                                options = new org.openapis.openapi.models.shared.MetricRequestOptionsEnum[]{{
                                    add(MetricRequestOptionsEnum.BREAKDOWN_HOUR_OF_DAY),
                                    add(MetricRequestOptionsEnum.METRIC_OPTION_UNSPECIFIED),
                                }};
                            }}),
                            add(new MetricRequest() {{
                                metric = MetricRequestMetricEnum.PHOTOS_VIEWS_CUSTOMERS;
                                options = new org.openapis.openapi.models.shared.MetricRequestOptionsEnum[]{{
                                    add(MetricRequestOptionsEnum.BREAKDOWN_HOUR_OF_DAY),
                                    add(MetricRequestOptionsEnum.METRIC_OPTION_UNSPECIFIED),
                                }};
                            }}),
                            add(new MetricRequest() {{
                                metric = MetricRequestMetricEnum.PHOTOS_VIEWS_MERCHANT;
                                options = new org.openapis.openapi.models.shared.MetricRequestOptionsEnum[]{{
                                    add(MetricRequestOptionsEnum.AGGREGATED_DAILY),
                                    add(MetricRequestOptionsEnum.AGGREGATED_DAILY),
                                    add(MetricRequestOptionsEnum.AGGREGATED_TOTAL),
                                }};
                            }}),
                        }};
                        timeRange = new TimeRange() {{
                            endTime = "ad";
                            startTime = "repellat";
                        }};;
                    }};;
                    drivingDirectionsRequest = new DrivingDirectionMetricsRequest() {{
                        languageCode = "alias";
                        numDays = DrivingDirectionMetricsRequestNumDaysEnum.THIRTY;
                    }};;
                    locationNames = new String[]{{
                        add("nihil"),
                        add("mollitia"),
                        add("voluptas"),
                    }};
                }};;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "dolores";
                key = "id";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "dolorum";
                uploadProtocol = "nesciunt";
            }};            

            MybusinessAccountsLocationsReportInsightsResponse res = sdk.accounts.mybusinessAccountsLocationsReportInsights(req);

            if (res.reportLocationInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsReviewsDeleteReply

Deletes the response to the specified review. This operation is only valid if the specified location is verified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReviewsDeleteReplyRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReviewsDeleteReplyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsReviewsDeleteReplyRequest req = new MybusinessAccountsLocationsReviewsDeleteReplyRequest("quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "ex";
                key = "ut";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "debitis";
                uploadProtocol = "laudantium";
            }};            

            MybusinessAccountsLocationsReviewsDeleteReplyResponse res = sdk.accounts.mybusinessAccountsLocationsReviewsDeleteReply(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsReviewsList

Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReviewsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReviewsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsReviewsListRequest req = new MybusinessAccountsLocationsReviewsListRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quis";
                key = "eum";
                oauthToken = "reiciendis";
                orderBy = "provident";
                pageSize = 133439L;
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "animi";
                uploadProtocol = "nostrum";
            }};            

            MybusinessAccountsLocationsReviewsListResponse res = sdk.accounts.mybusinessAccountsLocationsReviewsList(req);

            if (res.listReviewsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsReviewsUpdateReply

Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReviewsUpdateReplyRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsReviewsUpdateReplyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReviewReply;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsReviewsUpdateReplyRequest req = new MybusinessAccountsLocationsReviewsUpdateReplyRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                reviewReply = new ReviewReply() {{
                    comment = "possimus";
                    updateTime = "animi";
                }};;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "repellat";
                key = "doloribus";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "nam";
                uploadProtocol = "earum";
            }};            

            MybusinessAccountsLocationsReviewsUpdateReplyResponse res = sdk.accounts.mybusinessAccountsLocationsReviewsUpdateReply(req);

            if (res.reviewReply != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsTransfer

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsTransferRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsTransferResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TransferLocationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsTransferRequest req = new MybusinessAccountsLocationsTransferRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                transferLocationRequest = new TransferLocationRequest() {{
                    toAccount = "placeat";
                }};;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "officiis";
                key = "sapiente";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "rerum";
                uploadProtocol = "tempora";
            }};            

            MybusinessAccountsLocationsTransferResponse res = sdk.accounts.mybusinessAccountsLocationsTransfer(req);

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsVerificationsComplete

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsVerificationsCompleteRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsVerificationsCompleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompleteVerificationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsVerificationsCompleteRequest req = new MybusinessAccountsLocationsVerificationsCompleteRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                completeVerificationRequest = new CompleteVerificationRequest() {{
                    pin = "fugit";
                }};;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "velit";
                key = "aspernatur";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "rem";
                uploadProtocol = "at";
            }};            

            MybusinessAccountsLocationsVerificationsCompleteResponse res = sdk.accounts.mybusinessAccountsLocationsVerificationsComplete(req);

            if (res.completeVerificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsVerificationsList

List verifications of a location, ordered by create time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsVerificationsListRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsVerificationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsVerificationsListRequest req = new MybusinessAccountsLocationsVerificationsListRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "minima";
                key = "beatae";
                oauthToken = "cupiditate";
                pageSize = 589695L;
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "hic";
                uploadProtocol = "illum";
            }};            

            MybusinessAccountsLocationsVerificationsListResponse res = sdk.accounts.mybusinessAccountsLocationsVerificationsList(req);

            if (res.listVerificationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsLocationsVerify

Starts the verification process for a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsVerifyRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsLocationsVerifyResponse;
import org.openapis.openapi.models.shared.AddressInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EmailInput;
import org.openapis.openapi.models.shared.PhoneInput;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.ServiceBusinessContext;
import org.openapis.openapi.models.shared.VerifyLocationRequest;
import org.openapis.openapi.models.shared.VerifyLocationRequestMethodEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsLocationsVerifyRequest req = new MybusinessAccountsLocationsVerifyRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                verifyLocationRequest = new VerifyLocationRequest() {{
                    addressInput = new AddressInput() {{
                        mailerContactName = "perspiciatis";
                    }};;
                    context = new ServiceBusinessContext() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("debitis"),
                                add("aliquid"),
                                add("porro"),
                                add("suscipit"),
                            }};
                            administrativeArea = "dolorem";
                            languageCode = "fugit";
                            locality = "cumque";
                            organization = "fuga";
                            postalCode = "68800";
                            recipients = new String[]{{
                                add("ducimus"),
                            }};
                            regionCode = "natus";
                            revision = 581082;
                            sortingCode = "suscipit";
                            sublocality = "adipisci";
                        }};;
                    }};;
                    emailInput = new EmailInput() {{
                        emailAddress = "quasi";
                    }};;
                    languageCode = "magni";
                    method = VerifyLocationRequestMethodEnum.AUTO;
                    phoneInput = new PhoneInput() {{
                        phoneNumber = "nulla";
                    }};;
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "tempora";
                fields = "nihil";
                key = "molestiae";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "esse";
                uploadProtocol = "praesentium";
            }};            

            MybusinessAccountsLocationsVerifyResponse res = sdk.accounts.mybusinessAccountsLocationsVerify(req);

            if (res.verifyLocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessAccountsUpdateNotifications

Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAccountsUpdateNotificationsRequest;
import org.openapis.openapi.models.operations.MybusinessAccountsUpdateNotificationsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Notifications;
import org.openapis.openapi.models.shared.NotificationsNotificationTypesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAccountsUpdateNotificationsRequest req = new MybusinessAccountsUpdateNotificationsRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                notifications = new Notifications() {{
                    name = "Mr. Diane Stiedemann";
                    notificationTypes = new org.openapis.openapi.models.shared.NotificationsNotificationTypesEnum[]{{
                        add(NotificationsNotificationTypesEnum.NEW_CUSTOMER_MEDIA),
                        add(NotificationsNotificationTypesEnum.NEW_CUSTOMER_MEDIA),
                    }};
                    topicName = "consectetur";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "sunt";
                key = "nostrum";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "aliquid";
                uploadProtocol = "officia";
            }};            

            MybusinessAccountsUpdateNotificationsResponse res = sdk.accounts.mybusinessAccountsUpdateNotifications(req);

            if (res.notifications != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
