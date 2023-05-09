# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                    accountName = "provident";
                    accountNumber = "distinctio";
                    name = "Stuart Stiedemann";
                    organizationInfo = new OrganizationInfo() {{
                        phoneNumber = "vel";
                        postalAddress = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }};
                            administrativeArea = "magnam";
                            languageCode = "debitis";
                            locality = "ipsa";
                            organization = "delectus";
                            postalCode = "34785";
                            recipients = new String[]{{
                                add("excepturi"),
                                add("nisi"),
                            }};
                            regionCode = "recusandae";
                            revision = 836079;
                            sortingCode = "ab";
                            sublocality = "quis";
                        }};;
                        registeredDomain = "veritatis";
                    }};;
                    permissionLevel = AccountPermissionLevelEnum.OWNER_LEVEL;
                    role = AccountRoleEnum.ACCOUNT_ROLE_UNSPECIFIED;
                    state = new AccountState() {{
                        status = AccountStateStatusEnum.VERIFIED;
                    }};;
                    type = AccountTypeEnum.ORGANIZATION;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                primaryOwner = "molestiae";
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [mybusinessAccountsCreate](docs/accounts/README.md#mybusinessaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 
* [mybusinessAccountsGenerateAccountNumber](docs/accounts/README.md#mybusinessaccountsgenerateaccountnumber) - Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
* [mybusinessAccountsInvitationsAccept](docs/accounts/README.md#mybusinessaccountsinvitationsaccept) - Accepts the specified invitation.
* [mybusinessAccountsInvitationsDecline](docs/accounts/README.md#mybusinessaccountsinvitationsdecline) - Declines the specified invitation.
* [mybusinessAccountsInvitationsList](docs/accounts/README.md#mybusinessaccountsinvitationslist) - Lists pending invitations for the specified account.
* [mybusinessAccountsList](docs/accounts/README.md#mybusinessaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
* [mybusinessAccountsListRecommendGoogleLocations](docs/accounts/README.md#mybusinessaccountslistrecommendgooglelocations) - List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
* [mybusinessAccountsLocationsAdminsCreate](docs/accounts/README.md#mybusinessaccountslocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [mybusinessAccountsLocationsAdminsList](docs/accounts/README.md#mybusinessaccountslocationsadminslist) - Lists all of the admins for the specified location.
* [mybusinessAccountsLocationsAssociate](docs/accounts/README.md#mybusinessaccountslocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
* [mybusinessAccountsLocationsBatchGet](docs/accounts/README.md#mybusinessaccountslocationsbatchget) - Gets all of the specified locations in the given account.
* [mybusinessAccountsLocationsBatchGetReviews](docs/accounts/README.md#mybusinessaccountslocationsbatchgetreviews) - Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
* [mybusinessAccountsLocationsClearAssociation](docs/accounts/README.md#mybusinessaccountslocationsclearassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [mybusinessAccountsLocationsCreate](docs/accounts/README.md#mybusinessaccountslocationscreate) - Creates a new location owned by the specified account, and returns it.
* [mybusinessAccountsLocationsFetchVerificationOptions](docs/accounts/README.md#mybusinessaccountslocationsfetchverificationoptions) - Reports all eligible verification options for a location in a specific language.
* [mybusinessAccountsLocationsFindMatches](docs/accounts/README.md#mybusinessaccountslocationsfindmatches) - Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
* [mybusinessAccountsLocationsGetGoogleUpdated](docs/accounts/README.md#mybusinessaccountslocationsgetgoogleupdated) - Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
* [mybusinessAccountsLocationsInsuranceNetworksList](docs/accounts/README.md#mybusinessaccountslocationsinsurancenetworkslist) - Returns a list of all insurance networks supported by Google.
* [mybusinessAccountsLocationsList](docs/accounts/README.md#mybusinessaccountslocationslist) - Lists the locations for the specified account.
* [mybusinessAccountsLocationsLocalPostsCreate](docs/accounts/README.md#mybusinessaccountslocationslocalpostscreate) - Creates a new local post associated with the specified location, and returns it.
* [mybusinessAccountsLocationsLocalPostsList](docs/accounts/README.md#mybusinessaccountslocationslocalpostslist) - Returns a list of local posts associated with a location.
* [mybusinessAccountsLocationsLocalPostsReportInsights](docs/accounts/README.md#mybusinessaccountslocationslocalpostsreportinsights) - Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
* [mybusinessAccountsLocationsLodgingGetGoogleUpdated](docs/accounts/README.md#mybusinessaccountslocationslodginggetgoogleupdated) - Returns the Google updated Lodging of a specific location.
* [mybusinessAccountsLocationsMediaCreate](docs/accounts/README.md#mybusinessaccountslocationsmediacreate) - Creates a new media item for the location.
* [mybusinessAccountsLocationsMediaCustomersList](docs/accounts/README.md#mybusinessaccountslocationsmediacustomerslist) - Returns a list of media items associated with a location that have been contributed by customers.
* [mybusinessAccountsLocationsMediaList](docs/accounts/README.md#mybusinessaccountslocationsmedialist) - Returns a list of media items associated with a location.
* [mybusinessAccountsLocationsMediaStartUpload](docs/accounts/README.md#mybusinessaccountslocationsmediastartupload) - Generates a `MediaItemDataRef` for media item uploading.
* [mybusinessAccountsLocationsQuestionsAnswersDelete](docs/accounts/README.md#mybusinessaccountslocationsquestionsanswersdelete) - Deletes the answer written by the current user to a question.
* [mybusinessAccountsLocationsQuestionsAnswersList](docs/accounts/README.md#mybusinessaccountslocationsquestionsanswerslist) - Returns the paginated list of answers for a specified question.
* [mybusinessAccountsLocationsQuestionsAnswersUpsert](docs/accounts/README.md#mybusinessaccountslocationsquestionsanswersupsert) - Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
* [mybusinessAccountsLocationsQuestionsCreate](docs/accounts/README.md#mybusinessaccountslocationsquestionscreate) - Adds a question for the specified location.
* [mybusinessAccountsLocationsQuestionsDelete](docs/accounts/README.md#mybusinessaccountslocationsquestionsdelete) - Deletes a specific question written by the current user.
* [mybusinessAccountsLocationsQuestionsList](docs/accounts/README.md#mybusinessaccountslocationsquestionslist) - Returns the paginated list of questions and some of its answers for a specified location.
* [mybusinessAccountsLocationsQuestionsPatch](docs/accounts/README.md#mybusinessaccountslocationsquestionspatch) - Updates a specific question written by the current user.
* [mybusinessAccountsLocationsReportInsights](docs/accounts/README.md#mybusinessaccountslocationsreportinsights) - Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
* [mybusinessAccountsLocationsReviewsDeleteReply](docs/accounts/README.md#mybusinessaccountslocationsreviewsdeletereply) - Deletes the response to the specified review. This operation is only valid if the specified location is verified.
* [mybusinessAccountsLocationsReviewsList](docs/accounts/README.md#mybusinessaccountslocationsreviewslist) - Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
* [mybusinessAccountsLocationsReviewsUpdateReply](docs/accounts/README.md#mybusinessaccountslocationsreviewsupdatereply) - Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
* [mybusinessAccountsLocationsTransfer](docs/accounts/README.md#mybusinessaccountslocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
* [mybusinessAccountsLocationsVerificationsComplete](docs/accounts/README.md#mybusinessaccountslocationsverificationscomplete) - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* [mybusinessAccountsLocationsVerificationsList](docs/accounts/README.md#mybusinessaccountslocationsverificationslist) - List verifications of a location, ordered by create time.
* [mybusinessAccountsLocationsVerify](docs/accounts/README.md#mybusinessaccountslocationsverify) - Starts the verification process for a location.
* [mybusinessAccountsUpdateNotifications](docs/accounts/README.md#mybusinessaccountsupdatenotifications) - Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

### [attributes](docs/attributes/README.md)

* [mybusinessAttributesList](docs/attributes/README.md#mybusinessattributeslist) - Returns the list of available attributes that would be available for a location with the given primary category and country.

### [categories](docs/categories/README.md)

* [mybusinessCategoriesBatchGet](docs/categories/README.md#mybusinesscategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [mybusinessCategoriesList](docs/categories/README.md#mybusinesscategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### [chains](docs/chains/README.md)

* [mybusinessChainsGet](docs/chains/README.md#mybusinesschainsget) - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
* [mybusinessChainsSearch](docs/chains/README.md#mybusinesschainssearch) - Searches the chain based on chain name.

### [googleLocations](docs/googlelocations/README.md)

* [mybusinessGoogleLocationsReport](docs/googlelocations/README.md#mybusinessgooglelocationsreport) - Report a GoogleLocation.
* [mybusinessGoogleLocationsSearch](docs/googlelocations/README.md#mybusinessgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
