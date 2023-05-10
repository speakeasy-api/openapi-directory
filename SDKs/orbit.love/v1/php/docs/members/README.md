# members

### Available Operations

* [deleteWorkspaceSlugMembersMemberSlug](#deleteworkspaceslugmembersmemberslug) - Delete a member
* [deleteWorkspaceSlugMembersMemberSlugIdentities](#deleteworkspaceslugmembersmemberslugidentities) - Remove identity from a member
* [getWorkspaceSlugMembers](#getworkspaceslugmembers) - List members in a workspace
* [getWorkspaceSlugMembersFind](#getworkspaceslugmembersfind) - Find a member by an identity
* [getWorkspaceSlugMembersMemberSlug](#getworkspaceslugmembersmemberslug) - Get a member
* [getWorkspaceSlugOrganizationsOrganizationIdMembers](#getworkspaceslugorganizationsorganizationidmembers) - List members in an organization
* [postWorkspaceSlugMembers](#postworkspaceslugmembers) - Create or update a member
* [postWorkspaceSlugMembersMemberSlugIdentities](#postworkspaceslugmembersmemberslugidentities) - Add identity to a member
* [putWorkspaceSlugMembersMemberSlug](#putworkspaceslugmembersmemberslug) - Update a member

## deleteWorkspaceSlugMembersMemberSlug

Delete a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceSlugMembersMemberSlugRequest();
    $request->memberSlug = 'delectus';
    $request->workspaceSlug = 'quidem';

    $requestSecurity = new DeleteWorkspaceSlugMembersMemberSlugSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->deleteWorkspaceSlugMembersMemberSlug($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspaceSlugMembersMemberSlugIdentities

Remove identity from a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Identity;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugIdentitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest();
    $request->identity = new Identity();
    $request->identity->email = 'Mohammad_Olson@yahoo.com';
    $request->identity->name = 'Vincent Nolan';
    $request->identity->source = 'natus';
    $request->identity->sourceHost = 'omnis';
    $request->identity->uid = 'molestiae';
    $request->identity->url = 'perferendis';
    $request->identity->username = 'Janice_Gutkowski28';
    $request->memberSlug = 'labore';
    $request->workspaceSlug = 'suscipit';

    $requestSecurity = new DeleteWorkspaceSlugMembersMemberSlugIdentitiesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->deleteWorkspaceSlugMembersMemberSlugIdentities($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugMembers

List members in a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersAffiliationEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersIdentityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersItemsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugMembersRequest();
    $request->activitiesCountMax = 'natus';
    $request->activitiesCountMin = 'nobis';
    $request->activityType = GetWorkspaceSlugMembersActivityTypeEnum::INSIDED_CONVERSATION_STARTED;
    $request->affiliation = GetWorkspaceSlugMembersAffiliationEnum::TEAMMATE;
    $request->cities = 'aspernatur';
    $request->company = 'architecto';
    $request->countries = 'magnam';
    $request->direction = GetWorkspaceSlugMembersDirectionEnum::ASC;
    $request->endDate = 'excepturi';
    $request->identity = GetWorkspaceSlugMembersIdentityEnum::EMAIL;
    $request->items = GetWorkspaceSlugMembersItemsEnum::FIFTY;
    $request->memberTags = 'quos';
    $request->orbit = 'sint';
    $request->page = 'accusantium';
    $request->query = 'mollitia';
    $request->regions = 'reiciendis';
    $request->relative = 'mollitia';
    $request->sort = GetWorkspaceSlugMembersSortEnum::GITHUB_FOLLOWERS;
    $request->startDate = 'eum';
    $request->title = 'dolor';
    $request->type = 'necessitatibus';
    $request->workspaceSlug = 'odit';

    $requestSecurity = new GetWorkspaceSlugMembersSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->getWorkspaceSlugMembers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugMembersFind

Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersFindRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersFindSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugMembersFindRequest();
    $request->email = 'Avis_Kertzmann26@yahoo.com';
    $request->github = 'maxime';
    $request->source = 'deleniti';
    $request->sourceHost = 'facilis';
    $request->uid = 'in';
    $request->username = 'Barbara.Bradtke71';
    $request->workspaceSlug = 'nihil';

    $requestSecurity = new GetWorkspaceSlugMembersFindSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->getWorkspaceSlugMembersFind($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugMembersMemberSlug

Get a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugMembersMemberSlugSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugMembersMemberSlugRequest();
    $request->memberSlug = 'repellat';
    $request->workspaceSlug = 'quibusdam';

    $requestSecurity = new GetWorkspaceSlugMembersMemberSlugSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->getWorkspaceSlugMembersMemberSlug($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceSlugOrganizationsOrganizationIdMembers

List members in an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdMembersItemsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkspaceSlugOrganizationsOrganizationIdMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkspaceSlugOrganizationsOrganizationIdMembersRequest();
    $request->items = GetWorkspaceSlugOrganizationsOrganizationIdMembersItemsEnum::TEN;
    $request->organizationId = 'saepe';
    $request->page = 'pariatur';
    $request->workspaceSlug = 'accusantium';

    $requestSecurity = new GetWorkspaceSlugOrganizationsOrganizationIdMembersSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->getWorkspaceSlugOrganizationsOrganizationIdMembers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspaceSlugMembers

This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\MemberAndIdentity;
use \OpenAPI\OpenAPI\Models\Shared\Identity;
use \OpenAPI\OpenAPI\Models\Shared\Member;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspaceSlugMembersRequest();
    $request->memberAndIdentity = new MemberAndIdentity();
    $request->memberAndIdentity->identity = new Identity();
    $request->memberAndIdentity->identity->email = 'Johan12@gmail.com';
    $request->memberAndIdentity->identity->name = 'Gilberto Streich';
    $request->memberAndIdentity->identity->source = 'excepturi';
    $request->memberAndIdentity->identity->sourceHost = 'odit';
    $request->memberAndIdentity->identity->uid = 'ea';
    $request->memberAndIdentity->identity->url = 'accusantium';
    $request->memberAndIdentity->identity->username = 'Annie.Wunsch45';
    $request->memberAndIdentity->member = new Member();
    $request->memberAndIdentity->member->bio = 'autem';
    $request->memberAndIdentity->member->birthday = 'nam';
    $request->memberAndIdentity->member->company = 'Streich and Sons';
    $request->memberAndIdentity->member->devto = 'voluptatibus';
    $request->memberAndIdentity->member->email = 'Russ76@gmail.com';
    $request->memberAndIdentity->member->github = 'corporis';
    $request->memberAndIdentity->member->linkedin = 'hic';
    $request->memberAndIdentity->member->location = 'libero';
    $request->memberAndIdentity->member->name = 'Ernest Hayes';
    $request->memberAndIdentity->member->pronouns = 'eaque';
    $request->memberAndIdentity->member->shippingAddress = 'quis';
    $request->memberAndIdentity->member->slug = 'nesciunt';
    $request->memberAndIdentity->member->tagList = 'eos';
    $request->memberAndIdentity->member->tags = 'perferendis';
    $request->memberAndIdentity->member->tagsToAdd = 'dolores';
    $request->memberAndIdentity->member->teammate = false;
    $request->memberAndIdentity->member->title = 'Miss';
    $request->memberAndIdentity->member->tshirt = 'quam';
    $request->memberAndIdentity->member->twitter = 'dolor';
    $request->memberAndIdentity->member->url = 'vero';
    $request->workspaceSlug = 'nostrum';

    $requestSecurity = new PostWorkspaceSlugMembersSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->postWorkspaceSlugMembers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWorkspaceSlugMembersMemberSlugIdentities

Add identity to a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersMemberSlugIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Identity;
use \OpenAPI\OpenAPI\Models\Operations\PostWorkspaceSlugMembersMemberSlugIdentitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWorkspaceSlugMembersMemberSlugIdentitiesRequest();
    $request->identity = new Identity();
    $request->identity->email = 'Timothy_Mohr3@hotmail.com';
    $request->identity->name = 'Bobby Kutch V';
    $request->identity->source = 'rerum';
    $request->identity->sourceHost = 'adipisci';
    $request->identity->uid = 'asperiores';
    $request->identity->url = 'earum';
    $request->identity->username = 'Dolly_Morar86';
    $request->memberSlug = 'provident';
    $request->workspaceSlug = 'nobis';

    $requestSecurity = new PostWorkspaceSlugMembersMemberSlugIdentitiesSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->postWorkspaceSlugMembersMemberSlugIdentities($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkspaceSlugMembersMemberSlug

Update a member

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugMembersMemberSlugRequest;
use \OpenAPI\OpenAPI\Models\Shared\Member;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkspaceSlugMembersMemberSlugSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkspaceSlugMembersMemberSlugRequest();
    $request->member = new Member();
    $request->member->bio = 'libero';
    $request->member->birthday = 'delectus';
    $request->member->company = 'Luettgen and Sons';
    $request->member->devto = 'dolorem';
    $request->member->email = 'Dameon94@gmail.com';
    $request->member->github = 'excepturi';
    $request->member->linkedin = 'cum';
    $request->member->location = 'voluptate';
    $request->member->name = 'Johanna Farrell';
    $request->member->pronouns = 'veritatis';
    $request->member->shippingAddress = 'ipsa';
    $request->member->slug = 'ipsa';
    $request->member->tagList = 'iure';
    $request->member->tags = 'odio';
    $request->member->tagsToAdd = 'quaerat';
    $request->member->teammate = false;
    $request->member->title = 'Dr.';
    $request->member->tshirt = 'quidem';
    $request->member->twitter = 'voluptatibus';
    $request->member->url = 'voluptas';
    $request->memberSlug = 'natus';
    $request->workspaceSlug = 'eos';

    $requestSecurity = new PutWorkspaceSlugMembersMemberSlugSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->members->putWorkspaceSlugMembersMemberSlug($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
