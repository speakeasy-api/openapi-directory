# user

### Available Operations

* [approveVendorApplication](#approvevendorapplication)
* [createUser](#createuser) - Create a new user
* [deleteAccount](#deleteaccount) - Delete your account
* [deleteUserAccount](#deleteuseraccount) - Delete requester account
* [downgradeProofreader](#downgradeproofreader)
* [downgradeUserProofreader](#downgradeuserproofreader)
* [freezeAccount](#freezeaccount) - Freeze account
* [freezeUserAccount](#freezeuseraccount) - Freeze requester account for project notifications
* [getAllVendorTags](#getallvendortags) - Returns all vendor tags for vendors filter
* [getEarnings](#getearnings) - View your vendor earnings
* [getFilteredVendors](#getfilteredvendors) - Filter vendors based on provided parameters
* [getMe](#getme) - View your account info
* [getPaymentInfo](#getpaymentinfo) - View your payment and billing info
* [getPermissions](#getpermissions) - View your permissions
* [getResponsivity](#getresponsivity) - View your vendor responsiveness
* [getStats](#getstats) - View your account statistics
* [getThisUserGroups](#getthisusergroups) - Returns a list of user groups that this user belongs to.
* [getUser](#getuser) - Get user information, including client or vendor specific info.
* [getUserEarnings](#getuserearnings) - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* [getUserGroups](#getusergroups) - View your user groups
* [getUserPaymentInfo](#getuserpaymentinfo) - View user's payment and billing info
* [getUserPermissions](#getuserpermissions) - Returns a list of permissions that this user is authorized for.
* [getUserPopularPairs](#getuserpopularpairs) - Returns the language pairs that the user has ordered most.
* [getUserProjectStats](#getuserprojectstats) - Returns a user's project statistics.
* [getUserResponsivity](#getuserresponsivity) - Returns a user's vendor responsivity stats
* [getUserStats](#getuserstats) - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* [getUsers](#getusers) - Get a list of platform users
* [logLocation](#loglocation) - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* [makeProofreader](#makeproofreader)
* [makeUserProofreader](#makeuserproofreader)
* [rejectVendorApplication](#rejectvendorapplication)
* [sendEmailConfirmation](#sendemailconfirmation) - Sends email confirmation email for current user
* [sendPasswordReminder](#sendpasswordreminder) - Sends password reset email to the user's registered email address
* [sendUserEmailConfirmation](#senduseremailconfirmation) - Sends email confirmation email for a user
* [subscribeNotification](#subscribenotification) - Subscribe to push notifications
* [subscribeUserNotification](#subscribeusernotification)
* [suspendUser](#suspenduser)
* [unfreezeAccount](#unfreezeaccount) - Defreeze your account
* [unfreezeUserAccount](#unfreezeuseraccount) - Unfreeze requester account for project notifications
* [unsubscribeNotification](#unsubscribenotification)
* [unsubscribeUserNotification](#unsubscribeusernotification)
* [updateMe](#updateme) - Update your account info
* [updatePassword](#updatepassword) - Update your account password
* [updatePaymentInfo](#updatepaymentinfo) - Update payment info
* [updateUser](#updateuser)
* [updateUserGroup](#updateusergroup)
* [updateUserPaymentInfo](#updateuserpaymentinfo) - Update user payment info
* [uploadProfilePictureJson](#uploadprofilepicturejson) - Upload profile picture
* [uploadProfilePictureMultipart](#uploadprofilepicturemultipart) - Upload profile picture
* [uploadUserProfilePictureJson](#uploaduserprofilepicturejson)
* [uploadUserProfilePictureMultipart](#uploaduserprofilepicturemultipart)

## approveVendorApplication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApproveVendorApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApproveVendorApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApproveVendorApplicationRequest();
    $request->userId = 33074;

    $requestSecurity = new ApproveVendorApplicationSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->approveVendorApplication($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

Create a new platform user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\BillingAddress;
use \OpenAPI\OpenAPI\Models\Shared\UserClient;
use \OpenAPI\OpenAPI\Models\Shared\UserClientCorporate;
use \OpenAPI\OpenAPI\Models\Shared\LanguagePair;
use \OpenAPI\OpenAPI\Models\Shared\UserLinks;
use \OpenAPI\OpenAPI\Models\Shared\Href;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\SocialMedia;
use \OpenAPI\OpenAPI\Models\Shared\UserGroup;
use \OpenAPI\OpenAPI\Models\Shared\UserVendor;
use \OpenAPI\OpenAPI\Models\Shared\ProfileSurvey;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->user = new User();
    $request->user->billing = new BillingAddress();
    $request->user->billing->city = 'Adriennemouth';
    $request->user->billing->country = 'Israel';
    $request->user->billing->name = 'Andrew Little I';
    $request->user->billing->phone = '(471) 504-1962 x9390';
    $request->user->billing->state = 'ea';
    $request->user->billing->street = '18684 Yundt Haven';
    $request->user->billing->zip = 'quae';
    $request->user->birthday = DateTime::createFromFormat('Y-m-d', '2022-03-21');
    $request->user->canWorkManualFiles = false;
    $request->user->city = 'Enid';
    $request->user->client = new UserClient();
    $request->user->client->corporate = new UserClientCorporate();
    $request->user->client->corporate->email = 'Dayton.Paucek@gmail.com';
    $request->user->client->corporate->id = 246063;
    $request->user->client->corporate->logo = 'culpa';
    $request->user->client->corporate->name = 'Clay Larson';
    $request->user->client->corporate->phoneNumber = 'ducimus';
    $request->user->client->nps = 5546.88;
    $request->user->client->subjects = [
        'labore' => 822560,
        'facilis' => 738227,
    ];
    $request->user->corporateId = 414857;
    $request->user->country = 'Jordan';
    $request->user->createdAt = 360545;
    $request->user->doNotContact = false;
    $request->user->email = 'Rhoda.Hettinger4@hotmail.com';
    $request->user->firstName = 'Myrtice';
    $request->user->hasPwd = false;
    $request->user->id = 232627;
    $request->user->isClient = false;
    $request->user->isDeveloper = false;
    $request->user->isProofreader = false;
    $request->user->isProspect = false;
    $request->user->isSalesPerson = false;
    $request->user->isVendor = false;
    $request->user->languagePairs = [
        new LanguagePair(),
        new LanguagePair(),
    ];
    $request->user->lastName = 'Heidenreich';
    $request->user->lastSeenOnlineAt = 937285;
    $request->user->links = new UserLinks();
    $request->user->links->loginAs = new Href();
    $request->user->links->loginAs->href = 'facere';
    $request->user->links->projects = new Href();
    $request->user->links->projects->href = 'numquam';
    $request->user->links->responsivity = new Href();
    $request->user->links->responsivity->href = 'doloribus';
    $request->user->links->self = new Href();
    $request->user->links->self->href = 'suscipit';
    $request->user->links->stats = new Href();
    $request->user->links->stats->href = 'reiciendis';
    $request->user->locale = 'quidem';
    $request->user->mailing = new Address();
    $request->user->mailing->city = 'Thousand Oaks';
    $request->user->mailing->country = 'French Guiana';
    $request->user->mailing->phone = '(922) 314-9823';
    $request->user->mailing->state = 'harum';
    $request->user->mailing->street = '0971 Murray Forest';
    $request->user->mailing->zip = 'aspernatur';
    $request->user->name = 'Melanie Hirthe';
    $request->user->nativeLanguage = 'dolorum';
    $request->user->nps = 2378.07;
    $request->user->phoneNumber = 'minus';
    $request->user->profilePicturePath = 'dolores';
    $request->user->socialMedia = new SocialMedia();
    $request->user->socialMedia->facebookUrl = 'blanditiis';
    $request->user->socialMedia->linkedInUrl = 'in';
    $request->user->socialMedia->twitterUrl = 'dolore';
    $request->user->state = 'aliquam';
    $request->user->status = 'officiis';
    $request->user->street = '327 Luettgen Views';
    $request->user->timezone = 'nesciunt';
    $request->user->tmsUserName = 'culpa';
    $request->user->userGroups = [
        new UserGroup(),
        new UserGroup(),
        new UserGroup(),
    ];
    $request->user->vendor = new UserVendor();
    $request->user->vendor->canWorkManualFiles = false;
    $request->user->vendor->emailOpenRate = 8672.9;
    $request->user->vendor->isFrozen = false;
    $request->user->vendor->isProofreader = false;
    $request->user->vendor->languagePairs = [
        new LanguagePair(),
        new LanguagePair(),
        new LanguagePair(),
    ];
    $request->user->vendor->nativeLanguage = 'hic';
    $request->user->vendor->pamTqs = 3487.83;
    $request->user->vendor->paypalEmail = 'nobis';
    $request->user->vendor->profileSurvey = new ProfileSurvey();
    $request->user->vendor->profileSurvey->currentServices = 'sit';
    $request->user->vendor->profileSurvey->dailyProofreadingCapacity = 'rerum';
    $request->user->vendor->profileSurvey->dailyTranslationCapacity = 'sed';
    $request->user->vendor->profileSurvey->dtpSoftware = 'reiciendis';
    $request->user->vendor->profileSurvey->experience = 'explicabo';
    $request->user->vendor->profileSurvey->isCertifiedTranslator = 'asperiores';
    $request->user->vendor->profileSurvey->isSwornTranslator = 'facilis';
    $request->user->vendor->profileSurvey->memoq = 'voluptate';
    $request->user->vendor->profileSurvey->memsource = 'expedita';
    $request->user->vendor->profileSurvey->omegat = 'ab';
    $request->user->vendor->profileSurvey->proofreaderExperience = 'iste';
    $request->user->vendor->profileSurvey->providesCreativeWritingService = 'dolore';
    $request->user->vendor->profileSurvey->providesPosteditService = 'laborum';
    $request->user->vendor->profileSurvey->reference = 'sed';
    $request->user->vendor->profileSurvey->sdlTrados = 'in';
    $request->user->vendor->profileSurvey->skypeId = 'commodi';
    $request->user->vendor->profileSurvey->smartcat = 'quidem';
    $request->user->vendor->profileSurvey->smartling = 'explicabo';
    $request->user->vendor->profileSurvey->software = 'voluptas';
    $request->user->vendor->profileSurvey->specialization = 'unde';
    $request->user->vendor->profileSurvey->subtitleEdit = 'architecto';
    $request->user->vendor->profileSurvey->subtitleWorkshop = 'suscipit';
    $request->user->vendor->profileSurvey->translatorAssociation = 'sapiente';
    $request->user->vendor->profileSurvey->transsuite2000 = 'debitis';
    $request->user->vendor->profileSurvey->vendorProfileLsp = 'illo';
    $request->user->vendor->profileSurvey->wordbee = 'reiciendis';
    $request->user->vendor->profileSurvey->wordfast = 'perferendis';
    $request->user->vendor->profileSurvey->workType = 'corrupti';
    $request->user->vendor->profileSurvey->workWith = 'maiores';
    $request->user->vendor->profileSurvey->workingAs = 'incidunt';
    $request->user->vendor->profileSurvey->workingTimezone = 'sed';
    $request->user->vendor->profileSurvey->xbench = 'provident';
    $request->user->vendor->profileSurvey->xtm = 'eius';
    $request->user->vendor->require1099 = false;
    $request->user->vendor->tags = [
        'ipsum',
        'ea',
        'occaecati',
        'quos',
    ];
    $request->user->vendor->tmsUserName = 'voluptatibus';
    $request->user->vendor->vendorType = 'tempora';
    $request->user->zipCode = '49402';
    $request->notify = false;

    $response = $sdk->user->createUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccount

Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->deleteAccount();

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserAccount

Delete requester account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserAccountRequest();
    $request->userId = 888044;

    $response = $sdk->user->deleteUserAccount($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downgradeProofreader

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->downgradeProofreader();

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downgradeUserProofreader

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DowngradeUserProofreaderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DowngradeUserProofreaderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DowngradeUserProofreaderRequest();
    $request->userId = 505866;

    $requestSecurity = new DowngradeUserProofreaderSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->downgradeUserProofreader($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## freezeAccount

Freeze your account temporarily, especially to stop receiving project notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->freezeAccount();

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## freezeUserAccount

Freeze requester account for project notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FreezeUserAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FreezeUserAccountRequest();
    $request->userId = 708609;

    $response = $sdk->user->freezeUserAccount($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllVendorTags

Returns all vendor tags for vendors filter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->getAllVendorTags();

    if ($response->vendorTags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEarnings

View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->getEarnings();

    if ($response->earnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFilteredVendors

Get a list of vendors available for the criteria given

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFilteredVendorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FilterVendorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFilteredVendorsRequest();
    $request->filterVendorRequest = new FilterVendorRequest();
    $request->filterVendorRequest->clients = [
        277773,
        373035,
    ];
    $request->filterVendorRequest->communicationChannel = [
        'rem',
        'sit',
        'nobis',
        'error',
    ];
    $request->filterVendorRequest->corporateIdsForAuth = [
        329543,
        924159,
    ];
    $request->filterVendorRequest->corporates = [
        862319,
        168576,
        48690,
        901483,
    ];
    $request->filterVendorRequest->country = [
        'veniam',
        'in',
    ];
    $request->filterVendorRequest->createdAt = 'officiis';
    $request->filterVendorRequest->currentServices = [
        'laudantium',
    ];
    $request->filterVendorRequest->dailyProofreadingCapacity = 348476;
    $request->filterVendorRequest->dailyTranslationCapacity = 510629;
    $request->filterVendorRequest->destinationLanguages = [
        386827,
        680515,
        530089,
    ];
    $request->filterVendorRequest->dtpSoftware = [
        'hic',
        'expedita',
        'debitis',
    ];
    $request->filterVendorRequest->emailAddress = 'neque';
    $request->filterVendorRequest->experience = [
        'nostrum',
        'officia',
        'dolorum',
    ];
    $request->filterVendorRequest->firstName = 'Katelyn';
    $request->filterVendorRequest->id = [
        272683,
        543678,
        148268,
        282699,
    ];
    $request->filterVendorRequest->isCertifiedTranslator = false;
    $request->filterVendorRequest->isSwornTranslator = false;
    $request->filterVendorRequest->languagePairs = [
        [
            635057,
        ],
        [
            299643,
            7884,
            460220,
        ],
        [
            24527,
            530537,
        ],
        [
            922112,
            361151,
            89494,
        ],
    ];
    $request->filterVendorRequest->lastName = 'Kuvalis';
    $request->filterVendorRequest->lastOnline = 'ex';
    $request->filterVendorRequest->lastWorked = 'sed';
    $request->filterVendorRequest->memoq = 24313;
    $request->filterVendorRequest->memsource = 425508;
    $request->filterVendorRequest->minTqs = 3426.11;
    $request->filterVendorRequest->omegat = 906172;
    $request->filterVendorRequest->projectCount = 622231;
    $request->filterVendorRequest->proofreaderExperience = 8511;
    $request->filterVendorRequest->providesCreativeWritingService = false;
    $request->filterVendorRequest->providesPosteditService = false;
    $request->filterVendorRequest->quoteFileSubjects = [
        'reiciendis',
        'dolorem',
    ];
    $request->filterVendorRequest->reference = 'harum';
    $request->filterVendorRequest->sdlTrados = 115703;
    $request->filterVendorRequest->search = 'architecto';
    $request->filterVendorRequest->skypeId = 'occaecati';
    $request->filterVendorRequest->smartcat = 289776;
    $request->filterVendorRequest->smartling = 695270;
    $request->filterVendorRequest->sourceLanguages = [
        671957,
        724148,
        948861,
    ];
    $request->filterVendorRequest->specialization = [
        'alias',
        'amet',
    ];
    $request->filterVendorRequest->status = [
        'voluptate',
        'unde',
        'reiciendis',
    ];
    $request->filterVendorRequest->subtitleEdit = 588740;
    $request->filterVendorRequest->subtitleWorkshop = 833819;
    $request->filterVendorRequest->translatorAssociation = 'delectus';
    $request->filterVendorRequest->transsuite2000 = 914791;
    $request->filterVendorRequest->userWorkingTimezone = [
        'est',
    ];
    $request->filterVendorRequest->vendorProfileLsp = 'quidem';
    $request->filterVendorRequest->vendorTags = [
        'facere',
        'fuga',
    ];
    $request->filterVendorRequest->vendorType = [
        'mollitia',
        'veniam',
        'voluptatem',
    ];
    $request->filterVendorRequest->vendorWorkingTimezone = [
        'repudiandae',
        'quasi',
        'atque',
        'reprehenderit',
    ];
    $request->filterVendorRequest->wordCount = 991142;
    $request->filterVendorRequest->wordbee = 519952;
    $request->filterVendorRequest->wordfast = 383103;
    $request->filterVendorRequest->workType = 'quidem';
    $request->filterVendorRequest->workWith = 'maxime';
    $request->filterVendorRequest->workingAs = [
        'esse',
    ];
    $request->filterVendorRequest->xbench = 227759;
    $request->filterVendorRequest->xtm = 826825;
    $request->order = 'ea';
    $request->orderBy = 'atque';
    $request->page = 623295;
    $request->perPage = 887265;

    $response = $sdk->user->getFilteredVendors($request);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMe

Get your user information, including client, corporate account and vendor account information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->getMe();

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInfo

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->getPaymentInfo();

    if ($response->paymentInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissions

View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->getPermissions();

    if ($response->permissionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResponsivity

View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResponsivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResponsivityPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResponsivityRequest();
    $request->period = GetResponsivityPeriodEnum::WEEKLY;

    $response = $sdk->user->getResponsivity($request);

    if ($response->responsivityList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStats

View your client and vendor statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->getStats();

    if ($response->stats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThisUserGroups

Returns a list of user groups that this user belongs to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetThisUserGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThisUserGroupsRequest();
    $request->userId = 880107;

    $response = $sdk->user->getThisUserGroups($request);

    if ($response->userGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Get user information, including client or vendor specific info.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->userId = 618826;

    $requestSecurity = new GetUserSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUser($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserEarnings

Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEarningsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserEarningsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserEarningsRequest();
    $request->userId = 328303;

    $requestSecurity = new GetUserEarningsSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUserEarnings($request, $requestSecurity);

    if ($response->earnings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserGroups

View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->getUserGroups();

    if ($response->userGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPaymentInfo

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPaymentInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPaymentInfoRequest();
    $request->userId = 133461;

    $response = $sdk->user->getUserPaymentInfo($request);

    if ($response->paymentInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPermissions

Returns a list of permissions that this user is authorized for.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPermissionsRequest();
    $request->userId = 404425;

    $response = $sdk->user->getUserPermissions($request);

    if ($response->permissionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPopularPairs

Returns the language pairs that the user has ordered most.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPopularPairsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPopularPairsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPopularPairsRequest();
    $request->userId = 980581;

    $requestSecurity = new GetUserPopularPairsSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUserPopularPairs($request, $requestSecurity);

    if ($response->popularLanguagePairs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserProjectStats

Returns a user's project statistics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserProjectStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserProjectStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserProjectStatsRequest();
    $request->userId = 544647;

    $requestSecurity = new GetUserProjectStatsSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUserProjectStats($request, $requestSecurity);

    if ($response->clientProjectStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserResponsivity

Returns a user's vendor responsivity stats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserResponsivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserResponsivityPeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUserResponsivitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserResponsivityRequest();
    $request->period = GetUserResponsivityPeriodEnum::WEEKLY;
    $request->userId = 621693;

    $requestSecurity = new GetUserResponsivitySecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUserResponsivity($request, $requestSecurity);

    if ($response->responsivityList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserStats

Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserStatsRequest();
    $request->userId = 502721;

    $requestSecurity = new GetUserStatsSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->getUserStats($request, $requestSecurity);

    if ($response->stats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Get a list of platform users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersUserTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->email = 'Theodore.Littel@yahoo.com';
    $request->page = 923306;
    $request->perPage = 680697;
    $request->search = 'repellendus';
    $request->userType = GetUsersUserTypeEnum::VENDOR;

    $response = $sdk->user->getUsers($request);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## logLocation

Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\LocationUpdateContent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LocationUpdateContent();
    $request->lat = 9682.87;
    $request->lon = 429.76;
    $request->timestamp = 919783;

    $response = $sdk->user->logLocation($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## makeProofreader

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->makeProofreader();

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## makeUserProofreader

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MakeUserProofreaderRequest;
use \OpenAPI\OpenAPI\Models\Operations\MakeUserProofreaderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MakeUserProofreaderRequest();
    $request->userId = 116098;

    $requestSecurity = new MakeUserProofreaderSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->makeUserProofreader($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectVendorApplication

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectVendorApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectVendorApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectVendorApplicationRequest();
    $request->userId = 36033;

    $requestSecurity = new RejectVendorApplicationSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->rejectVendorApplication($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendEmailConfirmation

Sends email confirmation email for current user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->sendEmailConfirmation();

    if ($response->sendEmailConfirmation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendPasswordReminder

Sends password reset email to the user's registered email address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Email;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Email();
    $request->email = 'Chandler.Halvorson@gmail.com';

    $response = $sdk->user->sendPasswordReminder($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendUserEmailConfirmation

Sends email confirmation email for a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendUserEmailConfirmationRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendUserEmailConfirmationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendUserEmailConfirmationRequest();
    $request->userId = 952143;

    $requestSecurity = new SendUserEmailConfirmationSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->sendUserEmailConfirmation($request, $requestSecurity);

    if ($response->sendUserEmailConfirmation200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeNotification

Subscribe to push notifications to receive project and platform notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscription;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionDeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotificationSubscription();
    $request->device = NotificationSubscriptionDeviceEnum::EDGE;
    $request->endpoint = 'magnam';
    $request->type = NotificationSubscriptionTypeEnum::ONE_SIGNAL;

    $response = $sdk->user->subscribeNotification($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeUserNotification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeUserNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscription;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionDeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeUserNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribeUserNotificationRequest();
    $request->notificationSubscription = new NotificationSubscription();
    $request->notificationSubscription->device = NotificationSubscriptionDeviceEnum::MAC_OS;
    $request->notificationSubscription->endpoint = 'consequuntur';
    $request->notificationSubscription->type = NotificationSubscriptionTypeEnum::ONE_SIGNAL;
    $request->userId = 580107;

    $requestSecurity = new SubscribeUserNotificationSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->subscribeUserNotification($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suspendUser

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuspendUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuspendUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\SuspendUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuspendUserRequest();
    $request->suspendUserRequest = new SuspendUserRequest();
    $request->suspendUserRequest->reason = 'officiis';
    $request->userId = 597937;

    $requestSecurity = new SuspendUserSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->suspendUser($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unfreezeAccount

Reactive your account to start receiving notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->user->unfreezeAccount();

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unfreezeUserAccount

Unfreeze requester account for project notifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnfreezeUserAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnfreezeUserAccountRequest();
    $request->userId = 446394;

    $response = $sdk->user->unfreezeUserAccount($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeNotification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscription;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionDeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotificationSubscription();
    $request->device = NotificationSubscriptionDeviceEnum::CHROME;
    $request->endpoint = 'eveniet';
    $request->type = NotificationSubscriptionTypeEnum::ONE_SIGNAL;

    $response = $sdk->user->unsubscribeNotification($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeUserNotification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeUserNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscription;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionDeviceEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSubscriptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeUserNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsubscribeUserNotificationRequest();
    $request->notificationSubscription = new NotificationSubscription();
    $request->notificationSubscription->device = NotificationSubscriptionDeviceEnum::EDGE;
    $request->notificationSubscription->endpoint = 'consequuntur';
    $request->notificationSubscription->type = NotificationSubscriptionTypeEnum::ONE_SIGNAL;
    $request->userId = 145870;

    $requestSecurity = new UnsubscribeUserNotificationSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->unsubscribeUserNotification($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMe

Update your account info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UserUpdateContent;
use \OpenAPI\OpenAPI\Models\Shared\UserUpdateContentNotifications;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UserUpdateContent();
    $request->birthday = DateTime::createFromFormat('Y-m-d', '2022-04-30');
    $request->city = 'Lionelton';
    $request->country = 'Guinea';
    $request->email = 'Tamara.Franey43@hotmail.com';
    $request->firstName = 'Andy';
    $request->id = 517612;
    $request->lastName = 'Beier';
    $request->notifications = new UserUpdateContentNotifications();
    $request->notifications->phoneNumber = 'molestiae';
    $request->notifications->smsEnabled = false;
    $request->notify = false;
    $request->paypalEmail = 'eveniet';
    $request->phone = '1-748-367-5533';
    $request->require1099 = false;
    $request->state = 'repellat';
    $request->street = '35463 Wilfrid Walks';
    $request->userGroups = [
        663866,
    ];
    $request->zip = 'minima';

    $response = $sdk->user->updateMe($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePassword

Password should contain at least one uppercase, lowercase character and one number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PasswordUpdateContent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PasswordUpdateContent();
    $request->password = 'dolore';

    $response = $sdk->user->updatePassword($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePaymentInfo

Update your billing and saved credit card information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePaymentInfo;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentInfo();
    $request->bin = 'dolorum';
    $request->city = 'North Tianna';
    $request->country = 'Myanmar';
    $request->phone = '542-728-5439 x453';
    $request->saveAsCorporatePrimary = false;
    $request->shareWithCorporateUsers = false;
    $request->state = 'eum';
    $request->street = '513 Madonna Greens';
    $request->stripeToken = 'mollitia';
    $request->zip = 'provident';

    $response = $sdk->user->updatePaymentInfo($request);

    if ($response->paymentInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserUpdateContent;
use \OpenAPI\OpenAPI\Models\Shared\UserUpdateContentNotifications;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->userUpdateContent = new UserUpdateContent();
    $request->userUpdateContent->birthday = DateTime::createFromFormat('Y-m-d', '2021-01-09');
    $request->userUpdateContent->city = 'Gradytown';
    $request->userUpdateContent->country = 'Zimbabwe';
    $request->userUpdateContent->email = 'Felipe_King63@hotmail.com';
    $request->userUpdateContent->firstName = 'Margarett';
    $request->userUpdateContent->id = 813054;
    $request->userUpdateContent->lastName = 'Gleichner';
    $request->userUpdateContent->notifications = new UserUpdateContentNotifications();
    $request->userUpdateContent->notifications->phoneNumber = 'voluptatibus';
    $request->userUpdateContent->notifications->smsEnabled = false;
    $request->userUpdateContent->notify = false;
    $request->userUpdateContent->paypalEmail = 'molestias';
    $request->userUpdateContent->phone = '1-971-723-0170 x02142';
    $request->userUpdateContent->require1099 = false;
    $request->userUpdateContent->state = 'rem';
    $request->userUpdateContent->street = '719 Bianka Glen';
    $request->userUpdateContent->userGroups = [
        583404,
    ];
    $request->userUpdateContent->zip = 'provident';
    $request->userId = 936469;

    $response = $sdk->user->updateUser($request);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserGroup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActiveWidget;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserGroupRequest();
    $request->activeWidget = new ActiveWidget();
    $request->activeWidget->adminMode = false;
    $request->activeWidget->allowHashInUrl = false;
    $request->activeWidget->allowQueryInUrl = false;
    $request->activeWidget->autoDetectSourceLanguage = false;
    $request->activeWidget->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-13T05:30:19.145Z');
    $request->activeWidget->debugMode = false;
    $request->activeWidget->elements = 'illum';
    $request->activeWidget->followUser = false;
    $request->activeWidget->forceCacheRefreshInterval = false;
    $request->activeWidget->hitBackendForExisting = false;
    $request->activeWidget->id = 52508;
    $request->activeWidget->languageMappings = 'earum';
    $request->activeWidget->live = false;
    $request->activeWidget->modifyLinks = false;
    $request->activeWidget->name = 'Cary Toy';
    $request->activeWidget->optimizePerPage = false;
    $request->activeWidget->pages = 'suscipit';
    $request->activeWidget->pathRegex = 'dolorem';
    $request->activeWidget->position = 'fugit';
    $request->activeWidget->queryName = 'cumque';
    $request->activeWidget->rebootOnUrlChange = false;
    $request->activeWidget->restrictedDomains = 'fuga';
    $request->activeWidget->sections = 'ratione';
    $request->activeWidget->testMode = false;
    $request->activeWidget->theme = 'animi';
    $request->activeWidget->token = 'necessitatibus';
    $request->activeWidget->urlChangeMode = 'nulla';
    $request->activeWidget->urlMode = 'consequatur';
    $request->activeWidget->useCache = false;
    $request->activeWidget->useDummyTranslations = false;
    $request->activeWidget->variables = 'quasi';
    $request->userId = 90233;

    $requestSecurity = new UpdateUserGroupSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->updateUserGroup($request, $requestSecurity);

    if ($response->userGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserPaymentInfo

Update user's billing and saved credit card information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserPaymentInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInfo;
use \OpenAPI\OpenAPI\Models\Shared\BillingAddress;
use \OpenAPI\OpenAPI\Models\Shared\CreditCard;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInfoCorporate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserPaymentInfoRequest();
    $request->paymentInfo = new PaymentInfo();
    $request->paymentInfo->billing = new BillingAddress();
    $request->paymentInfo->billing->city = 'Lilastead';
    $request->paymentInfo->billing->country = 'Holy See (Vatican City State)';
    $request->paymentInfo->billing->name = 'Joyce Cummings';
    $request->paymentInfo->billing->phone = '1-224-514-4599 x40801';
    $request->paymentInfo->billing->state = 'odio';
    $request->paymentInfo->billing->street = '44230 Casper Grove';
    $request->paymentInfo->billing->zip = 'fugiat';
    $request->paymentInfo->card = new CreditCard();
    $request->paymentInfo->card->bin = 'expedita';
    $request->paymentInfo->card->id = 399667;
    $request->paymentInfo->card->isDefault = false;
    $request->paymentInfo->card->paymentCode = 'officia';
    $request->paymentInfo->cards = [
        new CreditCard(),
        new CreditCard(),
    ];
    $request->paymentInfo->corporate = new PaymentInfoCorporate();
    $request->paymentInfo->corporate->allowApiInvoicing = false;
    $request->paymentInfo->corporate->allowPaymentCode = false;
    $request->paymentInfo->corporate->autoCharge = false;
    $request->paymentInfo->corporate->billing = new BillingAddress();
    $request->paymentInfo->corporate->billing->city = 'North Hollie';
    $request->paymentInfo->corporate->billing->country = 'Haiti';
    $request->paymentInfo->corporate->billing->name = 'Alfonso Bernier';
    $request->paymentInfo->corporate->billing->phone = '1-767-453-1847 x42370';
    $request->paymentInfo->corporate->billing->state = 'molestias';
    $request->paymentInfo->corporate->billing->street = '315 Bogan Ranch';
    $request->paymentInfo->corporate->billing->zip = 'est';
    $request->paymentInfo->corporate->card = new CreditCard();
    $request->paymentInfo->corporate->card->bin = 'culpa';
    $request->paymentInfo->corporate->card->id = 29634;
    $request->paymentInfo->corporate->card->isDefault = false;
    $request->paymentInfo->corporate->card->paymentCode = 'sapiente';
    $request->paymentInfo->corporate->contactEmailAddress = 'officiis';
    $request->paymentInfo->corporate->paymentCode = 'architecto';
    $request->paymentInfo->sharedCard = new CreditCard();
    $request->paymentInfo->sharedCard->bin = 'fuga';
    $request->paymentInfo->sharedCard->id = 867168;
    $request->paymentInfo->sharedCard->isDefault = false;
    $request->paymentInfo->sharedCard->paymentCode = 'debitis';
    $request->userId = 29190;

    $response = $sdk->user->updateUserPaymentInfo($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadProfilePictureJson

Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureUpload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProfilePictureUpload();
    $request->profilePicture = 'alias';

    $response = $sdk->user->uploadProfilePictureJson($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadProfilePictureMultipart

Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureUpload1;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureUploadProfilePicture;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProfilePictureUpload1();
    $request->profilePicture = new ProfilePictureUploadProfilePicture();
    $request->profilePicture->content = 'deleniti';
    $request->profilePicture->profilePicture = 'earum';

    $response = $sdk->user->uploadProfilePictureMultipart($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadUserProfilePictureJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadUserProfilePictureJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureUpload;
use \OpenAPI\OpenAPI\Models\Operations\UploadUserProfilePictureJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadUserProfilePictureJsonRequest();
    $request->profilePictureUpload = new ProfilePictureUpload();
    $request->profilePictureUpload->profilePicture = 'ex';
    $request->userId = 958308;

    $requestSecurity = new UploadUserProfilePictureJsonSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->uploadUserProfilePictureJson($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadUserProfilePictureMultipart

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UploadUserProfilePictureMultipartRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureUpload1;
use \OpenAPI\OpenAPI\Models\Shared\ProfilePictureUploadProfilePicture;
use \OpenAPI\OpenAPI\Models\Operations\UploadUserProfilePictureMultipartSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadUserProfilePictureMultipartRequest();
    $request->profilePictureUpload1 = new ProfilePictureUpload1();
    $request->profilePictureUpload1->profilePicture = new ProfilePictureUploadProfilePicture();
    $request->profilePictureUpload1->profilePicture->content = 'rem';
    $request->profilePictureUpload1->profilePicture->profilePicture = 'minus';
    $request->userId = 365100;

    $requestSecurity = new UploadUserProfilePictureMultipartSecurity();
    $requestSecurity->mwoAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->user->uploadUserProfilePictureMultipart($request, $requestSecurity);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
