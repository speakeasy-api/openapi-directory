# team

### Available Operations

* [bulkCreateTeamMembers](#bulkcreateteammembers) - BulkCreateTeamMembers
* [bulkUpdateTeamMembers](#bulkupdateteammembers) - BulkUpdateTeamMembers
* [createTeamMember](#createteammember) - CreateTeamMember
* [retrieveTeamMember](#retrieveteammember) - RetrieveTeamMember
* [retrieveWageSetting](#retrievewagesetting) - RetrieveWageSetting
* [searchTeamMembers](#searchteammembers) - SearchTeamMembers
* [updateTeamMember](#updateteammember) - UpdateTeamMember
* [updateWageSetting](#updatewagesetting) - UpdateWageSetting

## bulkCreateTeamMembers

Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates.
This process is non-transactional and processes as much of the request as possible. If one of the creates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed create.

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BulkCreateTeamMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamMember;
use \OpenAPI\OpenAPI\Models\Shared\TeamMemberAssignedLocations;
use \OpenAPI\OpenAPI\Models\Operations\BulkCreateTeamMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkCreateTeamMembersRequest();
    $request->teamMembers = [
        'odio' => new CreateTeamMemberRequest(),
        'nulla' => new CreateTeamMemberRequest(),
    ];

    $requestSecurity = new BulkCreateTeamMembersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->bulkCreateTeamMembers($request, $requestSecurity);

    if ($response->bulkCreateTeamMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## bulkUpdateTeamMembers

Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates.
This process is non-transactional and processes as much of the request as possible. If one of the updates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BulkUpdateTeamMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamMember;
use \OpenAPI\OpenAPI\Models\Shared\TeamMemberAssignedLocations;
use \OpenAPI\OpenAPI\Models\Operations\BulkUpdateTeamMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkUpdateTeamMembersRequest();
    $request->teamMembers = [
        'cupiditate' => new UpdateTeamMemberRequest(),
        'illo' => new UpdateTeamMemberRequest(),
        'exercitationem' => new UpdateTeamMemberRequest(),
        'laborum' => new UpdateTeamMemberRequest(),
    ];

    $requestSecurity = new BulkUpdateTeamMembersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->bulkUpdateTeamMembers($request, $requestSecurity);

    if ($response->bulkUpdateTeamMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTeamMember

Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
You must provide the following values in your request to this endpoint:
- `given_name`
- `family_name`

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamMember;
use \OpenAPI\OpenAPI\Models\Shared\TeamMemberAssignedLocations;
use \OpenAPI\OpenAPI\Models\Operations\CreateTeamMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTeamMemberRequest();
    $request->idempotencyKey = 'illum';
    $request->teamMember = new TeamMember();
    $request->teamMember->assignedLocations = new TeamMemberAssignedLocations();
    $request->teamMember->assignedLocations->assignmentType = 'fugit';
    $request->teamMember->assignedLocations->locationIds = [
        'dolorum',
        'repellat',
        'nostrum',
        'illum',
    ];
    $request->teamMember->createdAt = 'quibusdam';
    $request->teamMember->emailAddress = 'commodi';
    $request->teamMember->familyName = 'esse';
    $request->teamMember->givenName = 'explicabo';
    $request->teamMember->id = '3dc0f5ae-2f3a-46b7-8087-8756143f5a6c';
    $request->teamMember->isOwner = false;
    $request->teamMember->phoneNumber = 'provident';
    $request->teamMember->referenceId = 'laudantium';
    $request->teamMember->status = 'nam';
    $request->teamMember->updatedAt = 'nemo';

    $requestSecurity = new CreateTeamMemberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->createTeamMember($request, $requestSecurity);

    if ($response->createTeamMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveTeamMember

Retrieves a `TeamMember` object for the given `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveTeamMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveTeamMemberRequest();
    $request->teamMemberId = 'enim';

    $requestSecurity = new RetrieveTeamMemberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->retrieveTeamMember($request, $requestSecurity);

    if ($response->retrieveTeamMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retrieveWageSetting

Retrieves a `WageSetting` object for a team member specified
by `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveWageSettingRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetrieveWageSettingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetrieveWageSettingRequest();
    $request->teamMemberId = 'ipsam';

    $requestSecurity = new RetrieveWageSettingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->retrieveWageSetting($request, $requestSecurity);

    if ($response->retrieveWageSettingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTeamMembers

Returns a paginated list of `TeamMember` objects for a business.
The list can be filtered by the following:
- location IDs
- `status`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchTeamMembersRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchTeamMembersQuery;
use \OpenAPI\OpenAPI\Models\Shared\SearchTeamMembersFilter;
use \OpenAPI\OpenAPI\Models\Operations\SearchTeamMembersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTeamMembersRequest();
    $request->cursor = 'minima';
    $request->limit = 273383;
    $request->query = new SearchTeamMembersQuery();
    $request->query->filter = new SearchTeamMembersFilter();
    $request->query->filter->locationIds = [
        'corrupti',
    ];
    $request->query->filter->status = 'doloremque';

    $requestSecurity = new SearchTeamMembersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->searchTeamMembers($request, $requestSecurity);

    if ($response->searchTeamMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTeamMember

Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\TeamMember;
use \OpenAPI\OpenAPI\Models\Shared\TeamMemberAssignedLocations;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTeamMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTeamMemberRequest();
    $request->updateTeamMemberRequest = new UpdateTeamMemberRequest();
    $request->updateTeamMemberRequest->teamMember = new TeamMember();
    $request->updateTeamMemberRequest->teamMember->assignedLocations = new TeamMemberAssignedLocations();
    $request->updateTeamMemberRequest->teamMember->assignedLocations->assignmentType = 'fugiat';
    $request->updateTeamMemberRequest->teamMember->assignedLocations->locationIds = [
        'doloremque',
        'cum',
    ];
    $request->updateTeamMemberRequest->teamMember->createdAt = 'nobis';
    $request->updateTeamMemberRequest->teamMember->emailAddress = 'similique';
    $request->updateTeamMemberRequest->teamMember->familyName = 'porro';
    $request->updateTeamMemberRequest->teamMember->givenName = 'impedit';
    $request->updateTeamMemberRequest->teamMember->id = '6cbd6b5f-3ec9-4093-84f9-26bad2553819';
    $request->updateTeamMemberRequest->teamMember->isOwner = false;
    $request->updateTeamMemberRequest->teamMember->phoneNumber = 'nobis';
    $request->updateTeamMemberRequest->teamMember->referenceId = 'tempora';
    $request->updateTeamMemberRequest->teamMember->status = 'voluptate';
    $request->updateTeamMemberRequest->teamMember->updatedAt = 'eius';
    $request->teamMemberId = 'expedita';

    $requestSecurity = new UpdateTeamMemberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->updateTeamMember($request, $requestSecurity);

    if ($response->updateTeamMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWageSetting

Creates or updates a `WageSetting` object. The object is created if a
`WageSetting` with the specified `team_member_id` does not exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWageSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWageSettingRequest;
use \OpenAPI\OpenAPI\Models\Shared\WageSetting;
use \OpenAPI\OpenAPI\Models\Shared\JobAssignment;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWageSettingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWageSettingRequest();
    $request->updateWageSettingRequest = new UpdateWageSettingRequest();
    $request->updateWageSettingRequest->wageSetting = new WageSetting();
    $request->updateWageSettingRequest->wageSetting->createdAt = 'aperiam';
    $request->updateWageSettingRequest->wageSetting->isOvertimeExempt = false;
    $request->updateWageSettingRequest->wageSetting->jobAssignments = [
        new JobAssignment(),
        new JobAssignment(),
        new JobAssignment(),
        new JobAssignment(),
    ];
    $request->updateWageSettingRequest->wageSetting->teamMemberId = 'possimus';
    $request->updateWageSettingRequest->wageSetting->updatedAt = 'fugit';
    $request->updateWageSettingRequest->wageSetting->version = 27946;
    $request->teamMemberId = 'repudiandae';

    $requestSecurity = new UpdateWageSettingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->team->updateWageSetting($request, $requestSecurity);

    if ($response->updateWageSettingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
