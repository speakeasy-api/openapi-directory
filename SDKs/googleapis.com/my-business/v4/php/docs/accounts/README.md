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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInfo;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AccountPermissionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountState;
use \OpenAPI\OpenAPI\Models\Shared\AccountStateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->account = new Account();
    $request->account->accountName = 'porro';
    $request->account->accountNumber = 'dolorum';
    $request->account->name = 'Antoinette Nikolaus';
    $request->account->organizationInfo = new OrganizationInfo();
    $request->account->organizationInfo->phoneNumber = 'deleniti';
    $request->account->organizationInfo->postalAddress = new PostalAddress();
    $request->account->organizationInfo->postalAddress->addressLines = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->account->organizationInfo->postalAddress->administrativeArea = 'molestiae';
    $request->account->organizationInfo->postalAddress->languageCode = 'modi';
    $request->account->organizationInfo->postalAddress->locality = 'qui';
    $request->account->organizationInfo->postalAddress->organization = 'impedit';
    $request->account->organizationInfo->postalAddress->postalCode = '42510-3616';
    $request->account->organizationInfo->postalAddress->recipients = [
        'natus',
    ];
    $request->account->organizationInfo->postalAddress->regionCode = 'laboriosam';
    $request->account->organizationInfo->postalAddress->revision = 943749;
    $request->account->organizationInfo->postalAddress->sortingCode = 'saepe';
    $request->account->organizationInfo->postalAddress->sublocality = 'fuga';
    $request->account->organizationInfo->registeredDomain = 'in';
    $request->account->permissionLevel = AccountPermissionLevelEnum::OWNER_LEVEL;
    $request->account->role = AccountRoleEnum::MANAGER;
    $request->account->state = new AccountState();
    $request->account->state->status = AccountStateStatusEnum::VERIFIED;
    $request->account->type = AccountTypeEnum::ORGANIZATION;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->primaryOwner = 'laborum';
    $request->quotaUser = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

    $response = $sdk->accounts->mybusinessAccountsCreate($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsGenerateAccountNumber

Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsGenerateAccountNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsGenerateAccountNumberRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'enim' => 'omnis',
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->name = 'Carlos Ziemann';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'molestiae';

    $response = $sdk->accounts->mybusinessAccountsGenerateAccountNumber($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsInvitationsAccept

Accepts the specified invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsInvitationsAcceptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsInvitationsAcceptRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sequi';
    $request->fields = 'tenetur';
    $request->key = 'ipsam';
    $request->name = 'Miss Rufus Ankunding';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'voluptatibus';

    $response = $sdk->accounts->mybusinessAccountsInvitationsAccept($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsInvitationsDecline

Declines the specified invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsInvitationsDeclineRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsInvitationsDeclineRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->name = 'Shawna Carter';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'enim';

    $response = $sdk->accounts->mybusinessAccountsInvitationsDecline($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsInvitationsList

Lists pending invitations for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsInvitationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsInvitationsListTargetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsInvitationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->key = 'quidem';
    $request->oauthToken = 'molestias';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->targetType = MybusinessAccountsInvitationsListTargetTypeEnum::ALL;
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $response = $sdk->accounts->mybusinessAccountsInvitationsList($request);

    if ($response->listInvitationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsList

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->filter = 'itaque';
    $request->key = 'incidunt';
    $request->name = 'Elizabeth Orn';
    $request->oauthToken = 'deserunt';
    $request->pageSize = 716327;
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $response = $sdk->accounts->mybusinessAccountsList($request);

    if ($response->listAccountsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsListRecommendGoogleLocations

List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsListRecommendGoogleLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsListRecommendGoogleLocationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'magni';
    $request->key = 'assumenda';
    $request->name = 'Linda Corkery';
    $request->oauthToken = 'tempora';
    $request->pageSize = 703737;
    $request->pageToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $response = $sdk->accounts->mybusinessAccountsListRecommendGoogleLocations($request);

    if ($response->listRecommendedGoogleLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsAdminsCreate

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsAdminsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Admin;
use \OpenAPI\OpenAPI\Models\Shared\AdminRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsAdminsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->admin = new Admin();
    $request->admin->adminName = 'eligendi';
    $request->admin->name = 'Gilbert Medhurst';
    $request->admin->pendingInvitation = false;
    $request->admin->role = AdminRoleEnum::MANAGER;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->key = 'in';
    $request->oauthToken = 'in';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $response = $sdk->accounts->mybusinessAccountsLocationsAdminsCreate($request);

    if ($response->admin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsAdminsList

Lists all of the admins for the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsAdminsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsAdminsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->oauthToken = 'accusamus';
    $request->parent = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'accusamus';

    $response = $sdk->accounts->mybusinessAccountsLocationsAdminsList($request);

    if ($response->listLocationAdminsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsAssociate

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsAssociateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssociateLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsAssociateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->associateLocationRequest = new AssociateLocationRequest();
    $request->associateLocationRequest->placeId = 'quidem';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'blanditiis';
    $request->key = 'deleniti';
    $request->name = 'Vincent Nolan';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'perferendis';

    $response = $sdk->accounts->mybusinessAccountsLocationsAssociate($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsBatchGet

Gets all of the specified locations in the given account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchGetLocationsRequest = new BatchGetLocationsRequest();
    $request->batchGetLocationsRequest->locationNames = [
        'distinctio',
        'id',
    ];
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'natus';
    $request->key = 'nobis';
    $request->name = 'Mrs. Meghan Collins V';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $response = $sdk->accounts->mybusinessAccountsLocationsBatchGet($request);

    if ($response->batchGetLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsBatchGetReviews

Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsBatchGetReviewsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetReviewsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsBatchGetReviewsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchGetReviewsRequest = new BatchGetReviewsRequest();
    $request->batchGetReviewsRequest->ignoreRatingOnlyReviews = false;
    $request->batchGetReviewsRequest->locationNames = [
        'reiciendis',
        'mollitia',
        'ad',
    ];
    $request->batchGetReviewsRequest->orderBy = 'eum';
    $request->batchGetReviewsRequest->pageSize = 221262;
    $request->batchGetReviewsRequest->pageToken = 'necessitatibus';
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quasi';
    $request->fields = 'iure';
    $request->key = 'doloribus';
    $request->name = 'Frederick Schoen';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'repudiandae';

    $response = $sdk->accounts->mybusinessAccountsLocationsBatchGetReviews($request);

    if ($response->batchGetReviewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsClearAssociation

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsClearAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsClearAssociationRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'natus';
    $request->key = 'magni';
    $request->name = 'Angelica Stanton';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'ea';

    $response = $sdk->accounts->mybusinessAccountsLocationsClearAssociation($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsCreate

Creates a new location owned by the specified account, and returns it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\AdWordsLocationExtensions;
use \OpenAPI\OpenAPI\Models\Shared\CategoryInput;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\RepeatedEnumAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\UrlAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\LocationKey;
use \OpenAPI\OpenAPI\Models\Shared\LocationStateInput;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\Duplicate;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\MoreHours;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriod;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodCloseDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodOpenDayEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpenInfo;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\OpenInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PriceList;
use \OpenAPI\OpenAPI\Models\Shared\Label;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\Item;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\SectionSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Profile;
use \OpenAPI\OpenAPI\Models\Shared\BusinessHours;
use \OpenAPI\OpenAPI\Models\Shared\RelationshipData;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAreaBusiness;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAreaBusinessBusinessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Places;
use \OpenAPI\OpenAPI\Models\Shared\PlaceInfo;
use \OpenAPI\OpenAPI\Models\Shared\PointRadius;
use \OpenAPI\OpenAPI\Models\Shared\SpecialHours;
use \OpenAPI\OpenAPI\Models\Shared\SpecialHourPeriod;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->locationInput = new LocationInput();
    $request->locationInput->adWordsLocationExtensions = new AdWordsLocationExtensions();
    $request->locationInput->adWordsLocationExtensions->adPhone = 'ab';
    $request->locationInput->additionalCategories = [
        new CategoryInput(),
        new CategoryInput(),
        new CategoryInput(),
        new CategoryInput(),
    ];
    $request->locationInput->additionalPhones = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->locationInput->address = new PostalAddress();
    $request->locationInput->address->addressLines = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->locationInput->address->administrativeArea = 'voluptatibus';
    $request->locationInput->address->languageCode = 'perferendis';
    $request->locationInput->address->locality = 'fugiat';
    $request->locationInput->address->organization = 'amet';
    $request->locationInput->address->postalCode = '73977';
    $request->locationInput->address->recipients = [
        'quis',
    ];
    $request->locationInput->address->regionCode = 'totam';
    $request->locationInput->address->revision = 489549;
    $request->locationInput->address->sortingCode = 'eaque';
    $request->locationInput->address->sublocality = 'quis';
    $request->locationInput->attributes = [
        new Attribute(),
    ];
    $request->locationInput->labels = [
        'perferendis',
    ];
    $request->locationInput->languageCode = 'dolores';
    $request->locationInput->latlng = new LatLng();
    $request->locationInput->latlng->latitude = 7936.98;
    $request->locationInput->latlng->longitude = 4634.51;
    $request->locationInput->locationKey = new LocationKey();
    $request->locationInput->locationKey->explicitNoPlaceId = false;
    $request->locationInput->locationKey->placeId = 'dolor';
    $request->locationInput->locationKey->plusPageId = 'vero';
    $request->locationInput->locationKey->requestId = 'nostrum';
    $request->locationInput->locationName = 'hic';
    $request->locationInput->locationState = new LocationStateInput();
    $request->locationInput->locationState->canDelete = false;
    $request->locationInput->locationState->canUpdate = false;
    $request->locationInput->locationState->hasPendingEdits = false;
    $request->locationInput->locationState->hasPendingVerification = false;
    $request->locationInput->locationState->isDisabled = false;
    $request->locationInput->locationState->isDisconnected = false;
    $request->locationInput->locationState->isDuplicate = false;
    $request->locationInput->locationState->isGoogleUpdated = false;
    $request->locationInput->locationState->isLocalPostApiDisabled = false;
    $request->locationInput->locationState->isPendingReview = false;
    $request->locationInput->locationState->isPublished = false;
    $request->locationInput->locationState->isSuspended = false;
    $request->locationInput->locationState->isVerified = false;
    $request->locationInput->locationState->needsReverification = false;
    $request->locationInput->metadata = new Metadata();
    $request->locationInput->metadata->duplicate = new Duplicate();
    $request->locationInput->metadata->duplicate->access = DuplicateAccessEnum::INSUFFICIENT;
    $request->locationInput->metadata->duplicate->locationName = 'omnis';
    $request->locationInput->metadata->duplicate->placeId = 'facilis';
    $request->locationInput->metadata->mapsUrl = 'perspiciatis';
    $request->locationInput->metadata->newReviewUrl = 'voluptatem';
    $request->locationInput->moreHours = [
        new MoreHours(),
        new MoreHours(),
        new MoreHours(),
        new MoreHours(),
    ];
    $request->locationInput->name = 'Ms. Vickie Mraz';
    $request->locationInput->openInfo = new OpenInfo();
    $request->locationInput->openInfo->canReopen = false;
    $request->locationInput->openInfo->openingDate = new Date();
    $request->locationInput->openInfo->openingDate->day = 237893;
    $request->locationInput->openInfo->openingDate->month = 992397;
    $request->locationInput->openInfo->openingDate->year = 934214;
    $request->locationInput->openInfo->status = OpenInfoStatusEnum::OPEN;
    $request->locationInput->priceLists = [
        new PriceList(),
        new PriceList(),
        new PriceList(),
    ];
    $request->locationInput->primaryCategory = new CategoryInput();
    $request->locationInput->primaryCategory->categoryId = 'dolorum';
    $request->locationInput->primaryCategory->displayName = 'deleniti';
    $request->locationInput->primaryPhone = 'pariatur';
    $request->locationInput->profile = new Profile();
    $request->locationInput->profile->description = 'provident';
    $request->locationInput->regularHours = new BusinessHours();
    $request->locationInput->regularHours->periods = [
        new TimePeriod(),
        new TimePeriod(),
        new TimePeriod(),
        new TimePeriod(),
    ];
    $request->locationInput->relationshipData = new RelationshipData();
    $request->locationInput->relationshipData->parentChain = 'libero';
    $request->locationInput->serviceArea = new ServiceAreaBusiness();
    $request->locationInput->serviceArea->businessType = ServiceAreaBusinessBusinessTypeEnum::CUSTOMER_AND_BUSINESS_LOCATION;
    $request->locationInput->serviceArea->places = new Places();
    $request->locationInput->serviceArea->places->placeInfos = [
        new PlaceInfo(),
        new PlaceInfo(),
    ];
    $request->locationInput->serviceArea->radius = new PointRadius();
    $request->locationInput->serviceArea->radius->latlng = new LatLng();
    $request->locationInput->serviceArea->radius->latlng->latitude = 5542.42;
    $request->locationInput->serviceArea->radius->latlng->longitude = 3982.21;
    $request->locationInput->serviceArea->radius->radiusKm = 2123.9;
    $request->locationInput->specialHours = new SpecialHours();
    $request->locationInput->specialHours->specialHourPeriods = [
        new SpecialHourPeriod(),
    ];
    $request->locationInput->storeCode = 'dolor';
    $request->locationInput->websiteUrl = 'qui';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'cum';
    $request->key = 'voluptate';
    $request->oauthToken = 'dignissimos';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->requestId = 'dolorum';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'veritatis';
    $request->validateOnly = false;

    $response = $sdk->accounts->mybusinessAccountsLocationsCreate($request);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsFetchVerificationOptions

Reports all eligible verification options for a location in a specific language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsFetchVerificationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FetchVerificationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBusinessContext;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsFetchVerificationOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->fetchVerificationOptionsRequest = new FetchVerificationOptionsRequest();
    $request->fetchVerificationOptionsRequest->context = new ServiceBusinessContext();
    $request->fetchVerificationOptionsRequest->context->address = new PostalAddress();
    $request->fetchVerificationOptionsRequest->context->address->addressLines = [
        'iure',
    ];
    $request->fetchVerificationOptionsRequest->context->address->administrativeArea = 'odio';
    $request->fetchVerificationOptionsRequest->context->address->languageCode = 'quaerat';
    $request->fetchVerificationOptionsRequest->context->address->locality = 'accusamus';
    $request->fetchVerificationOptionsRequest->context->address->organization = 'quidem';
    $request->fetchVerificationOptionsRequest->context->address->postalCode = '36150-8076';
    $request->fetchVerificationOptionsRequest->context->address->recipients = [
        'voluptate',
        'dolorum',
    ];
    $request->fetchVerificationOptionsRequest->context->address->regionCode = 'deleniti';
    $request->fetchVerificationOptionsRequest->context->address->revision = 607045;
    $request->fetchVerificationOptionsRequest->context->address->sortingCode = 'necessitatibus';
    $request->fetchVerificationOptionsRequest->context->address->sublocality = 'distinctio';
    $request->fetchVerificationOptionsRequest->languageCode = 'asperiores';
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptate';
    $request->fields = 'id';
    $request->key = 'saepe';
    $request->name = 'Judy Aufderhar';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'suscipit';

    $response = $sdk->accounts->mybusinessAccountsLocationsFetchVerificationOptions($request);

    if ($response->fetchVerificationOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsFindMatches

Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsFindMatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FindMatchingLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsFindMatchesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->findMatchingLocationsRequest = new FindMatchingLocationsRequest();
    $request->findMatchingLocationsRequest->languageCode = 'provident';
    $request->findMatchingLocationsRequest->maxCacheDuration = 'minima';
    $request->findMatchingLocationsRequest->numResults = 831049;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'at';
    $request->key = 'quaerat';
    $request->name = 'Gina Schmeler';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'harum';

    $response = $sdk->accounts->mybusinessAccountsLocationsFindMatches($request);

    if ($response->findMatchingLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsGetGoogleUpdated

Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsGetGoogleUpdatedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsGetGoogleUpdatedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'amet';
    $request->key = 'tempore';
    $request->name = 'Francis Haley';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'expedita';

    $response = $sdk->accounts->mybusinessAccountsLocationsGetGoogleUpdated($request);

    if ($response->googleUpdatedLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsInsuranceNetworksList

Returns a list of all insurance networks supported by Google.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsInsuranceNetworksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsInsuranceNetworksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'libero';
    $request->fields = 'voluptas';
    $request->key = 'deserunt';
    $request->languageCode = 'quam';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 277628;
    $request->pageToken = 'qui';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'soluta';

    $response = $sdk->accounts->mybusinessAccountsLocationsInsuranceNetworksList($request);

    if ($response->listInsuranceNetworksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsList

Lists the locations for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->filter = 'dolores';
    $request->key = 'distinctio';
    $request->languageCode = 'facilis';
    $request->oauthToken = 'aliquid';
    $request->orderBy = 'quam';
    $request->pageSize = 565421;
    $request->pageToken = 'temporibus';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'magni';

    $response = $sdk->accounts->mybusinessAccountsLocationsList($request);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsLocalPostsCreate

Creates a new local post associated with the specified location, and returns it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsLocalPostsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalPost;
use \OpenAPI\OpenAPI\Models\Shared\LocalPostAlertTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallToAction;
use \OpenAPI\OpenAPI\Models\Shared\CallToActionActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalPostEvent;
use \OpenAPI\OpenAPI\Models\Shared\TimeInterval;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\TimeOfDay;
use \OpenAPI\OpenAPI\Models\Shared\MediaItem;
use \OpenAPI\OpenAPI\Models\Shared\Attribution;
use \OpenAPI\OpenAPI\Models\Shared\MediaItemDataRef;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\MediaInsights;
use \OpenAPI\OpenAPI\Models\Shared\LocationAssociation;
use \OpenAPI\OpenAPI\Models\Shared\LocationAssociationCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaItemMediaFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalPostOffer;
use \OpenAPI\OpenAPI\Models\Shared\LocalPostStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalPostTopicTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsLocalPostsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->localPost = new LocalPost();
    $request->localPost->alertType = LocalPostAlertTypeEnum::ALERT_TYPE_UNSPECIFIED;
    $request->localPost->callToAction = new CallToAction();
    $request->localPost->callToAction->actionType = CallToActionActionTypeEnum::ORDER;
    $request->localPost->callToAction->url = 'nam';
    $request->localPost->createTime = 'hic';
    $request->localPost->event = new LocalPostEvent();
    $request->localPost->event->schedule = new TimeInterval();
    $request->localPost->event->schedule->endDate = new Date();
    $request->localPost->event->schedule->endDate->day = 30452;
    $request->localPost->event->schedule->endDate->month = 765326;
    $request->localPost->event->schedule->endDate->year = 746994;
    $request->localPost->event->schedule->endTime = new TimeOfDay();
    $request->localPost->event->schedule->endTime->hours = 748664;
    $request->localPost->event->schedule->endTime->minutes = 92596;
    $request->localPost->event->schedule->endTime->nanos = 903720;
    $request->localPost->event->schedule->endTime->seconds = 217450;
    $request->localPost->event->schedule->startDate = new Date();
    $request->localPost->event->schedule->startDate->day = 83422;
    $request->localPost->event->schedule->startDate->month = 749255;
    $request->localPost->event->schedule->startDate->year = 552193;
    $request->localPost->event->schedule->startTime = new TimeOfDay();
    $request->localPost->event->schedule->startTime->hours = 731694;
    $request->localPost->event->schedule->startTime->minutes = 584476;
    $request->localPost->event->schedule->startTime->nanos = 45614;
    $request->localPost->event->schedule->startTime->seconds = 961937;
    $request->localPost->event->title = 'Mrs.';
    $request->localPost->languageCode = 'dolore';
    $request->localPost->media = [
        new MediaItem(),
        new MediaItem(),
    ];
    $request->localPost->name = 'Mr. Sonya Bradtke';
    $request->localPost->offer = new LocalPostOffer();
    $request->localPost->offer->couponCode = 'itaque';
    $request->localPost->offer->redeemOnlineUrl = 'consequatur';
    $request->localPost->offer->termsConditions = 'est';
    $request->localPost->searchUrl = 'repellendus';
    $request->localPost->state = LocalPostStateEnum::PROCESSING;
    $request->localPost->summary = 'doloribus';
    $request->localPost->topicType = LocalPostTopicTypeEnum::STANDARD;
    $request->localPost->updateTime = 'facilis';
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'laudantium';
    $request->key = 'odio';
    $request->oauthToken = 'occaecati';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'omnis';

    $response = $sdk->accounts->mybusinessAccountsLocationsLocalPostsCreate($request);

    if ($response->localPost !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsLocalPostsList

Returns a list of local posts associated with a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsLocalPostsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsLocalPostsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptate';
    $request->fields = 'consectetur';
    $request->key = 'vero';
    $request->oauthToken = 'tenetur';
    $request->pageSize = 492268;
    $request->pageToken = 'hic';
    $request->parent = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'similique';

    $response = $sdk->accounts->mybusinessAccountsLocationsLocalPostsList($request);

    if ($response->listLocalPostsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsLocalPostsReportInsights

Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsLocalPostsReportInsightsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportLocalPostInsightsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BasicMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricRequestMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricRequestOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsLocalPostsReportInsightsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reportLocalPostInsightsRequest = new ReportLocalPostInsightsRequest();
    $request->reportLocalPostInsightsRequest->basicRequest = new BasicMetricsRequest();
    $request->reportLocalPostInsightsRequest->basicRequest->metricRequests = [
        new MetricRequest(),
        new MetricRequest(),
        new MetricRequest(),
        new MetricRequest(),
    ];
    $request->reportLocalPostInsightsRequest->basicRequest->timeRange = new TimeRange();
    $request->reportLocalPostInsightsRequest->basicRequest->timeRange->endTime = 'ducimus';
    $request->reportLocalPostInsightsRequest->basicRequest->timeRange->startTime = 'dolore';
    $request->reportLocalPostInsightsRequest->localPostNames = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'exercitationem';
    $request->fields = 'nulla';
    $request->key = 'fugit';
    $request->name = 'Elijah Wyman';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'tempora';

    $response = $sdk->accounts->mybusinessAccountsLocationsLocalPostsReportInsights($request);

    if ($response->reportLocalPostInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsLodgingGetGoogleUpdated

Returns the Google updated Lodging of a specific location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'possimus';
    $request->key = 'magnam';
    $request->name = 'Mrs. Vicki Langosh';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->readMask = 'nulla';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'voluptatibus';

    $response = $sdk->accounts->mybusinessAccountsLocationsLodgingGetGoogleUpdated($request);

    if ($response->getGoogleUpdatedLodgingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsMediaCreate

Creates a new media item for the location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsMediaCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaItem;
use \OpenAPI\OpenAPI\Models\Shared\Attribution;
use \OpenAPI\OpenAPI\Models\Shared\MediaItemDataRef;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\MediaInsights;
use \OpenAPI\OpenAPI\Models\Shared\LocationAssociation;
use \OpenAPI\OpenAPI\Models\Shared\LocationAssociationCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaItemMediaFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsMediaCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->mediaItem = new MediaItem();
    $request->mediaItem->attribution = new Attribution();
    $request->mediaItem->attribution->profileName = 'sapiente';
    $request->mediaItem->attribution->profilePhotoUrl = 'quisquam';
    $request->mediaItem->attribution->profileUrl = 'saepe';
    $request->mediaItem->attribution->takedownUrl = 'ea';
    $request->mediaItem->createTime = 'impedit';
    $request->mediaItem->dataRef = new MediaItemDataRef();
    $request->mediaItem->dataRef->resourceName = 'corporis';
    $request->mediaItem->description = 'veniam';
    $request->mediaItem->dimensions = new Dimensions();
    $request->mediaItem->dimensions->heightPixels = 399499;
    $request->mediaItem->dimensions->widthPixels = 81101;
    $request->mediaItem->googleUrl = 'magnam';
    $request->mediaItem->insights = new MediaInsights();
    $request->mediaItem->insights->viewCount = 'ea';
    $request->mediaItem->locationAssociation = new LocationAssociation();
    $request->mediaItem->locationAssociation->category = LocationAssociationCategoryEnum::COMMON_AREA;
    $request->mediaItem->locationAssociation->priceListItemId = 'consectetur';
    $request->mediaItem->mediaFormat = MediaItemMediaFormatEnum::VIDEO;
    $request->mediaItem->name = 'Cathy Becker';
    $request->mediaItem->sourceUrl = 'aut';
    $request->mediaItem->thumbnailUrl = 'aut';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'fugit';
    $request->key = 'accusamus';
    $request->oauthToken = 'inventore';
    $request->parent = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'laborum';

    $response = $sdk->accounts->mybusinessAccountsLocationsMediaCreate($request);

    if ($response->mediaItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsMediaCustomersList

Returns a list of media items associated with a location that have been contributed by customers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsMediaCustomersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsMediaCustomersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nobis';
    $request->key = 'quas';
    $request->oauthToken = 'assumenda';
    $request->pageSize = 860552;
    $request->pageToken = 'voluptas';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'numquam';

    $response = $sdk->accounts->mybusinessAccountsLocationsMediaCustomersList($request);

    if ($response->listCustomerMediaItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsMediaList

Returns a list of media items associated with a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsMediaListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsMediaListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestiae';
    $request->fields = 'magnam';
    $request->key = 'odio';
    $request->oauthToken = 'eius';
    $request->pageSize = 458515;
    $request->pageToken = 'esse';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'quidem';

    $response = $sdk->accounts->mybusinessAccountsLocationsMediaList($request);

    if ($response->listMediaItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsMediaStartUpload

Generates a `MediaItemDataRef` for media item uploading.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsMediaStartUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsMediaStartUploadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'eum' => 'suscipit',
        'assumenda' => 'eos',
    ];
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'id';
    $request->oauthToken = 'quidem';
    $request->parent = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'quo';

    $response = $sdk->accounts->mybusinessAccountsLocationsMediaStartUpload($request);

    if ($response->mediaItemDataRef !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsQuestionsAnswersDelete

Deletes the answer written by the current user to a question.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsQuestionsAnswersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsQuestionsAnswersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptas';
    $request->fields = 'ab';
    $request->key = 'cupiditate';
    $request->oauthToken = 'consequatur';
    $request->parent = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'aspernatur';

    $response = $sdk->accounts->mybusinessAccountsLocationsQuestionsAnswersDelete($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsQuestionsAnswersList

Returns the paginated list of answers for a specified question.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsQuestionsAnswersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsQuestionsAnswersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'aperiam';
    $request->key = 'distinctio';
    $request->oauthToken = 'quod';
    $request->orderBy = 'dignissimos';
    $request->pageSize = 76956;
    $request->pageToken = 'nihil';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'odio';

    $response = $sdk->accounts->mybusinessAccountsLocationsQuestionsAnswersList($request);

    if ($response->listAnswersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsQuestionsAnswersUpsert

Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsQuestionsAnswersUpsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpsertAnswerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Answer;
use \OpenAPI\OpenAPI\Models\Shared\Author;
use \OpenAPI\OpenAPI\Models\Shared\AuthorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsQuestionsAnswersUpsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->upsertAnswerRequest = new UpsertAnswerRequest();
    $request->upsertAnswerRequest->answer = new Answer();
    $request->upsertAnswerRequest->answer->author = new Author();
    $request->upsertAnswerRequest->answer->author->displayName = 'commodi';
    $request->upsertAnswerRequest->answer->author->profilePhotoUrl = 'sapiente';
    $request->upsertAnswerRequest->answer->author->type = AuthorTypeEnum::AUTHOR_TYPE_UNSPECIFIED;
    $request->upsertAnswerRequest->answer->createTime = 'deserunt';
    $request->upsertAnswerRequest->answer->name = 'Carol Sawayn';
    $request->upsertAnswerRequest->answer->text = 'praesentium';
    $request->upsertAnswerRequest->answer->updateTime = 'consequuntur';
    $request->upsertAnswerRequest->answer->upvoteCount = 536178;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'incidunt';
    $request->key = 'atque';
    $request->oauthToken = 'explicabo';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'sapiente';

    $response = $sdk->accounts->mybusinessAccountsLocationsQuestionsAnswersUpsert($request);

    if ($response->answer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsQuestionsCreate

Adds a question for the specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsQuestionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Question;
use \OpenAPI\OpenAPI\Models\Shared\Author;
use \OpenAPI\OpenAPI\Models\Shared\AuthorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Answer;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsQuestionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->question = new Question();
    $request->question->author = new Author();
    $request->question->author->displayName = 'ratione';
    $request->question->author->profilePhotoUrl = 'explicabo';
    $request->question->author->type = AuthorTypeEnum::MERCHANT;
    $request->question->createTime = 'occaecati';
    $request->question->name = 'Carl Koch';
    $request->question->text = 'veritatis';
    $request->question->topAnswers = [
        new Answer(),
        new Answer(),
    ];
    $request->question->totalAnswerCount = 800379;
    $request->question->updateTime = 'nam';
    $request->question->upvoteCount = 877131;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'vel';
    $request->key = 'harum';
    $request->oauthToken = 'molestiae';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'distinctio';

    $response = $sdk->accounts->mybusinessAccountsLocationsQuestionsCreate($request);

    if ($response->question !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsQuestionsDelete

Deletes a specific question written by the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsQuestionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsQuestionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'adipisci';
    $request->key = 'cumque';
    $request->name = 'Elizabeth Schinner';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'provident';

    $response = $sdk->accounts->mybusinessAccountsLocationsQuestionsDelete($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsQuestionsList

Returns the paginated list of questions and some of its answers for a specified location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsQuestionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsQuestionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->answersPerQuestion = 457223;
    $request->callback = 'quasi';
    $request->fields = 'a';
    $request->filter = 'error';
    $request->key = 'sint';
    $request->oauthToken = 'pariatur';
    $request->orderBy = 'possimus';
    $request->pageSize = 157632;
    $request->pageToken = 'eveniet';
    $request->parent = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'consequuntur';

    $response = $sdk->accounts->mybusinessAccountsLocationsQuestionsList($request);

    if ($response->listQuestionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsQuestionsPatch

Updates a specific question written by the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsQuestionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Question;
use \OpenAPI\OpenAPI\Models\Shared\Author;
use \OpenAPI\OpenAPI\Models\Shared\AuthorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Answer;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsQuestionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->question = new Question();
    $request->question->author = new Author();
    $request->question->author->displayName = 'similique';
    $request->question->author->profilePhotoUrl = 'culpa';
    $request->question->author->type = AuthorTypeEnum::REGULAR_USER;
    $request->question->createTime = 'tenetur';
    $request->question->name = 'Lila Kassulke';
    $request->question->text = 'libero';
    $request->question->topAnswers = [
        new Answer(),
        new Answer(),
        new Answer(),
        new Answer(),
    ];
    $request->question->totalAnswerCount = 742238;
    $request->question->updateTime = 'accusantium';
    $request->question->upvoteCount = 306986;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'reprehenderit';
    $request->key = 'ullam';
    $request->name = 'Margaret Lemke';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->updateMask = 'itaque';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'architecto';

    $response = $sdk->accounts->mybusinessAccountsLocationsQuestionsPatch($request);

    if ($response->question !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsReportInsights

Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsReportInsightsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportLocationInsightsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BasicMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricRequest;
use \OpenAPI\OpenAPI\Models\Shared\MetricRequestMetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricRequestOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Shared\DrivingDirectionMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DrivingDirectionMetricsRequestNumDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsReportInsightsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reportLocationInsightsRequest = new ReportLocationInsightsRequest();
    $request->reportLocationInsightsRequest->basicRequest = new BasicMetricsRequest();
    $request->reportLocationInsightsRequest->basicRequest->metricRequests = [
        new MetricRequest(),
        new MetricRequest(),
        new MetricRequest(),
        new MetricRequest(),
    ];
    $request->reportLocationInsightsRequest->basicRequest->timeRange = new TimeRange();
    $request->reportLocationInsightsRequest->basicRequest->timeRange->endTime = 'quasi';
    $request->reportLocationInsightsRequest->basicRequest->timeRange->startTime = 'at';
    $request->reportLocationInsightsRequest->drivingDirectionsRequest = new DrivingDirectionMetricsRequest();
    $request->reportLocationInsightsRequest->drivingDirectionsRequest->languageCode = 'et';
    $request->reportLocationInsightsRequest->drivingDirectionsRequest->numDays = DrivingDirectionMetricsRequestNumDaysEnum::THIRTY;
    $request->reportLocationInsightsRequest->locationNames = [
        'minima',
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'iste';
    $request->key = 'temporibus';
    $request->name = 'Patsy Armstrong';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'non';

    $response = $sdk->accounts->mybusinessAccountsLocationsReportInsights($request);

    if ($response->reportLocationInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsReviewsDeleteReply

Deletes the response to the specified review. This operation is only valid if the specified location is verified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsReviewsDeleteReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsReviewsDeleteReplyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'impedit';
    $request->key = 'explicabo';
    $request->name = 'Dr. Maria Kulas';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'asperiores';

    $response = $sdk->accounts->mybusinessAccountsLocationsReviewsDeleteReply($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsReviewsList

Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsReviewsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsReviewsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'repellendus';
    $request->key = 'officia';
    $request->oauthToken = 'maxime';
    $request->orderBy = 'dignissimos';
    $request->pageSize = 640024;
    $request->pageToken = 'asperiores';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'porro';

    $response = $sdk->accounts->mybusinessAccountsLocationsReviewsList($request);

    if ($response->listReviewsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsReviewsUpdateReply

Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsReviewsUpdateReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReviewReply;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsReviewsUpdateReplyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reviewReply = new ReviewReply();
    $request->reviewReply->comment = 'labore';
    $request->reviewReply->updateTime = 'ab';
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'suscipit';
    $request->key = 'velit';
    $request->name = 'Rex Walter';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'vel';

    $response = $sdk->accounts->mybusinessAccountsLocationsReviewsUpdateReply($request);

    if ($response->reviewReply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsTransfer

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsTransferRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->transferLocationRequest = new TransferLocationRequest();
    $request->transferLocationRequest->toAccount = 'possimus';
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'in';
    $request->key = 'corporis';
    $request->name = 'Mack Hettinger';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'in';

    $response = $sdk->accounts->mybusinessAccountsLocationsTransfer($request);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsVerificationsComplete

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsVerificationsCompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompleteVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsVerificationsCompleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->completeVerificationRequest = new CompleteVerificationRequest();
    $request->completeVerificationRequest->pin = 'earum';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloribus';
    $request->fields = 'suscipit';
    $request->key = 'reiciendis';
    $request->name = 'Bert Treutel DVM';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'beatae';

    $response = $sdk->accounts->mybusinessAccountsLocationsVerificationsComplete($request);

    if ($response->completeVerificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsVerificationsList

List verifications of a location, ordered by create time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsVerificationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsVerificationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'corporis';
    $request->key = 'harum';
    $request->oauthToken = 'laboriosam';
    $request->pageSize = 58356;
    $request->pageToken = 'voluptates';
    $request->parent = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'similique';

    $response = $sdk->accounts->mybusinessAccountsLocationsVerificationsList($request);

    if ($response->listVerificationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsLocationsVerify

Starts the verification process for a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsLocationsVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceBusinessContext;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\EmailInput;
use \OpenAPI\OpenAPI\Models\Shared\VerifyLocationRequestMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsLocationsVerifyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->verifyLocationRequest = new VerifyLocationRequest();
    $request->verifyLocationRequest->addressInput = new AddressInput();
    $request->verifyLocationRequest->addressInput->mailerContactName = 'aspernatur';
    $request->verifyLocationRequest->context = new ServiceBusinessContext();
    $request->verifyLocationRequest->context->address = new PostalAddress();
    $request->verifyLocationRequest->context->address->addressLines = [
        'voluptas',
        'voluptas',
    ];
    $request->verifyLocationRequest->context->address->administrativeArea = 'minima';
    $request->verifyLocationRequest->context->address->languageCode = 'nobis';
    $request->verifyLocationRequest->context->address->locality = 'dolorum';
    $request->verifyLocationRequest->context->address->organization = 'adipisci';
    $request->verifyLocationRequest->context->address->postalCode = '15423-8832';
    $request->verifyLocationRequest->context->address->recipients = [
        'blanditiis',
        'quas',
        'hic',
    ];
    $request->verifyLocationRequest->context->address->regionCode = 'nesciunt';
    $request->verifyLocationRequest->context->address->revision = 633998;
    $request->verifyLocationRequest->context->address->sortingCode = 'corrupti';
    $request->verifyLocationRequest->context->address->sublocality = 'pariatur';
    $request->verifyLocationRequest->emailInput = new EmailInput();
    $request->verifyLocationRequest->emailInput->emailAddress = 'totam';
    $request->verifyLocationRequest->languageCode = 'hic';
    $request->verifyLocationRequest->method = VerifyLocationRequestMethodEnum::EMAIL;
    $request->verifyLocationRequest->phoneInput = new PhoneInput();
    $request->verifyLocationRequest->phoneInput->phoneNumber = 'nobis';
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'reiciendis';
    $request->key = 'explicabo';
    $request->name = 'Johnathan Klein V';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'in';

    $response = $sdk->accounts->mybusinessAccountsLocationsVerify($request);

    if ($response->verifyLocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mybusinessAccountsUpdateNotifications

Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MybusinessAccountsUpdateNotificationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Notifications;
use \OpenAPI\OpenAPI\Models\Shared\NotificationsNotificationTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MybusinessAccountsUpdateNotificationsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->notifications = new Notifications();
    $request->notifications->name = 'Benjamin Hodkiewicz III';
    $request->notifications->notificationTypes = [
        NotificationsNotificationTypesEnum::UPDATED_ANSWER,
        NotificationsNotificationTypesEnum::NOTIFICATION_TYPE_UNSPECIFIED,
        NotificationsNotificationTypesEnum::UPDATED_LOCATION_STATE,
        NotificationsNotificationTypesEnum::NOTIFICATION_TYPE_UNSPECIFIED,
    ];
    $request->notifications->topicName = 'corrupti';
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sed';
    $request->fields = 'provident';
    $request->key = 'eius';
    $request->name = 'Nathan Jaskolski';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempora';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'voluptate';

    $response = $sdk->accounts->mybusinessAccountsUpdateNotifications($request);

    if ($response->notifications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
