# groups

### Available Operations

* [groupsSettingsGroupsGet](#groupssettingsgroupsget) - Gets one resource by id.
* [groupsSettingsGroupsPatch](#groupssettingsgroupspatch) - Updates an existing resource. This method supports patch semantics.
* [groupsSettingsGroupsUpdate](#groupssettingsgroupsupdate) - Updates an existing resource.

## groupsSettingsGroupsGet

Gets one resource by id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupsSettingsGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsSettingsGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsSettingsGroupsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'vel';
    $request->groupUniqueId = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->userIp = 'magnam';

    $requestSecurity = new GroupsSettingsGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->groupsSettingsGroupsGet($request, $requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsSettingsGroupsPatch

Updates an existing resource. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupsSettingsGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Groups;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsSettingsGroupsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsSettingsGroupsPatchRequest();
    $request->groups = new Groups();
    $request->groups->allowExternalMembers = 'debitis';
    $request->groups->allowGoogleCommunication = 'ipsa';
    $request->groups->allowWebPosting = 'delectus';
    $request->groups->archiveOnly = 'tempora';
    $request->groups->customFooterText = 'suscipit';
    $request->groups->customReplyTo = 'molestiae';
    $request->groups->customRolesEnabledForSettingsToBeMerged = 'minus';
    $request->groups->defaultMessageDenyNotificationText = 'placeat';
    $request->groups->defaultSender = 'voluptatum';
    $request->groups->description = 'iusto';
    $request->groups->email = 'Glen.Walsh33@yahoo.com';
    $request->groups->enableCollaborativeInbox = 'veritatis';
    $request->groups->favoriteRepliesOnTop = 'deserunt';
    $request->groups->includeCustomFooter = 'perferendis';
    $request->groups->includeInGlobalAddressList = 'ipsam';
    $request->groups->isArchived = 'repellendus';
    $request->groups->kind = 'sapiente';
    $request->groups->maxMessageBytes = 778157;
    $request->groups->membersCanPostAsTheGroup = 'odit';
    $request->groups->messageDisplayFont = 'at';
    $request->groups->messageModerationLevel = 'at';
    $request->groups->name = 'Javier Schmidt';
    $request->groups->primaryLanguage = 'totam';
    $request->groups->replyTo = 'porro';
    $request->groups->sendMessageDenyNotification = 'dolorum';
    $request->groups->showInGroupDirectory = 'dicta';
    $request->groups->spamModerationLevel = 'nam';
    $request->groups->whoCanAdd = 'officia';
    $request->groups->whoCanAddReferences = 'occaecati';
    $request->groups->whoCanApproveMembers = 'fugit';
    $request->groups->whoCanApproveMessages = 'deleniti';
    $request->groups->whoCanAssignTopics = 'hic';
    $request->groups->whoCanAssistContent = 'optio';
    $request->groups->whoCanBanUsers = 'totam';
    $request->groups->whoCanContactOwner = 'beatae';
    $request->groups->whoCanDeleteAnyPost = 'commodi';
    $request->groups->whoCanDeleteTopics = 'molestiae';
    $request->groups->whoCanDiscoverGroup = 'modi';
    $request->groups->whoCanEnterFreeFormTags = 'qui';
    $request->groups->whoCanHideAbuse = 'impedit';
    $request->groups->whoCanInvite = 'cum';
    $request->groups->whoCanJoin = 'esse';
    $request->groups->whoCanLeaveGroup = 'ipsum';
    $request->groups->whoCanLockTopics = 'excepturi';
    $request->groups->whoCanMakeTopicsSticky = 'aspernatur';
    $request->groups->whoCanMarkDuplicate = 'perferendis';
    $request->groups->whoCanMarkFavoriteReplyOnAnyTopic = 'ad';
    $request->groups->whoCanMarkFavoriteReplyOnOwnTopic = 'natus';
    $request->groups->whoCanMarkNoResponseNeeded = 'sed';
    $request->groups->whoCanModerateContent = 'iste';
    $request->groups->whoCanModerateMembers = 'dolor';
    $request->groups->whoCanModifyMembers = 'natus';
    $request->groups->whoCanModifyTagsAndCategories = 'laboriosam';
    $request->groups->whoCanMoveTopicsIn = 'hic';
    $request->groups->whoCanMoveTopicsOut = 'saepe';
    $request->groups->whoCanPostAnnouncements = 'fuga';
    $request->groups->whoCanPostMessage = 'in';
    $request->groups->whoCanTakeTopics = 'corporis';
    $request->groups->whoCanUnassignTopic = 'iste';
    $request->groups->whoCanUnmarkFavoriteReplyOnAnyTopic = 'iure';
    $request->groups->whoCanViewGroup = 'saepe';
    $request->groups->whoCanViewMembership = 'quidem';
    $request->alt = AltEnum::ATOM;
    $request->fields = 'ipsa';
    $request->groupUniqueId = 'reiciendis';
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->userIp = 'dolores';

    $requestSecurity = new GroupsSettingsGroupsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->groupsSettingsGroupsPatch($request, $requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupsSettingsGroupsUpdate

Updates an existing resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupsSettingsGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Groups;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GroupsSettingsGroupsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupsSettingsGroupsUpdateRequest();
    $request->groups = new Groups();
    $request->groups->allowExternalMembers = 'dolorem';
    $request->groups->allowGoogleCommunication = 'corporis';
    $request->groups->allowWebPosting = 'explicabo';
    $request->groups->archiveOnly = 'nobis';
    $request->groups->customFooterText = 'enim';
    $request->groups->customReplyTo = 'omnis';
    $request->groups->customRolesEnabledForSettingsToBeMerged = 'nemo';
    $request->groups->defaultMessageDenyNotificationText = 'minima';
    $request->groups->defaultSender = 'excepturi';
    $request->groups->description = 'accusantium';
    $request->groups->email = 'Lorenza.Yundt65@yahoo.com';
    $request->groups->enableCollaborativeInbox = 'dolorem';
    $request->groups->favoriteRepliesOnTop = 'culpa';
    $request->groups->includeCustomFooter = 'consequuntur';
    $request->groups->includeInGlobalAddressList = 'repellat';
    $request->groups->isArchived = 'mollitia';
    $request->groups->kind = 'occaecati';
    $request->groups->maxMessageBytes = 253291;
    $request->groups->membersCanPostAsTheGroup = 'commodi';
    $request->groups->messageDisplayFont = 'quam';
    $request->groups->messageModerationLevel = 'molestiae';
    $request->groups->name = 'Sabrina Cronin MD';
    $request->groups->primaryLanguage = 'animi';
    $request->groups->replyTo = 'enim';
    $request->groups->sendMessageDenyNotification = 'odit';
    $request->groups->showInGroupDirectory = 'quo';
    $request->groups->spamModerationLevel = 'sequi';
    $request->groups->whoCanAdd = 'tenetur';
    $request->groups->whoCanAddReferences = 'ipsam';
    $request->groups->whoCanApproveMembers = 'id';
    $request->groups->whoCanApproveMessages = 'possimus';
    $request->groups->whoCanAssignTopics = 'aut';
    $request->groups->whoCanAssistContent = 'quasi';
    $request->groups->whoCanBanUsers = 'error';
    $request->groups->whoCanContactOwner = 'temporibus';
    $request->groups->whoCanDeleteAnyPost = 'laborum';
    $request->groups->whoCanDeleteTopics = 'quasi';
    $request->groups->whoCanDiscoverGroup = 'reiciendis';
    $request->groups->whoCanEnterFreeFormTags = 'voluptatibus';
    $request->groups->whoCanHideAbuse = 'vero';
    $request->groups->whoCanInvite = 'nihil';
    $request->groups->whoCanJoin = 'praesentium';
    $request->groups->whoCanLeaveGroup = 'voluptatibus';
    $request->groups->whoCanLockTopics = 'ipsa';
    $request->groups->whoCanMakeTopicsSticky = 'omnis';
    $request->groups->whoCanMarkDuplicate = 'voluptate';
    $request->groups->whoCanMarkFavoriteReplyOnAnyTopic = 'cum';
    $request->groups->whoCanMarkFavoriteReplyOnOwnTopic = 'perferendis';
    $request->groups->whoCanMarkNoResponseNeeded = 'doloremque';
    $request->groups->whoCanModerateContent = 'reprehenderit';
    $request->groups->whoCanModerateMembers = 'ut';
    $request->groups->whoCanModifyMembers = 'maiores';
    $request->groups->whoCanModifyTagsAndCategories = 'dicta';
    $request->groups->whoCanMoveTopicsIn = 'corporis';
    $request->groups->whoCanMoveTopicsOut = 'dolore';
    $request->groups->whoCanPostAnnouncements = 'iusto';
    $request->groups->whoCanPostMessage = 'dicta';
    $request->groups->whoCanTakeTopics = 'harum';
    $request->groups->whoCanUnassignTopic = 'enim';
    $request->groups->whoCanUnmarkFavoriteReplyOnAnyTopic = 'accusamus';
    $request->groups->whoCanViewGroup = 'commodi';
    $request->groups->whoCanViewMembership = 'repudiandae';
    $request->alt = AltEnum::ATOM;
    $request->fields = 'ipsum';
    $request->groupUniqueId = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->userIp = 'modi';

    $requestSecurity = new GroupsSettingsGroupsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groups->groupsSettingsGroupsUpdate($request, $requestSecurity);

    if ($response->groups !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
