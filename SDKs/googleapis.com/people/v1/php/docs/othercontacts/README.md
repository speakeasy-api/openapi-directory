# otherContacts

### Available Operations

* [peopleOtherContactsCopyOtherContactToMyContactsGroup](#peopleothercontactscopyothercontacttomycontactsgroup) - Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleOtherContactsList](#peopleothercontactslist) - List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).
* [peopleOtherContactsSearch](#peopleothercontactssearch) - Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

## peopleOtherContactsCopyOtherContactToMyContactsGroup

Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CopyOtherContactToMyContactsGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyOtherContactToMyContactsGroupRequestSourcesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->copyOtherContactToMyContactsGroupRequest = new CopyOtherContactToMyContactsGroupRequest();
    $request->copyOtherContactToMyContactsGroupRequest->copyMask = 'velit';
    $request->copyOtherContactToMyContactsGroupRequest->readMask = 'error';
    $request->copyOtherContactToMyContactsGroupRequest->sources = [
        CopyOtherContactToMyContactsGroupRequestSourcesEnum::READ_SOURCE_TYPE_PROFILE,
    ];
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'enim';
    $request->key = 'odit';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->resourceName = 'tenetur';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity();
    $requestSecurity->option1 = new PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->otherContacts->peopleOtherContactsCopyOtherContactToMyContactsGroup($request, $requestSecurity);

    if ($response->person !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peopleOtherContactsList

List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsListSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleOtherContactsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'temporibus';
    $request->key = 'laborum';
    $request->oauthToken = 'quasi';
    $request->pageSize = 971945;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->readMask = 'nihil';
    $request->requestSyncToken = false;
    $request->sources = [
        PeopleOtherContactsListSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
        PeopleOtherContactsListSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
        PeopleOtherContactsListSourcesEnum::READ_SOURCE_TYPE_CONTACT,
    ];
    $request->syncToken = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new PeopleOtherContactsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->otherContacts->peopleOtherContactsList($request, $requestSecurity);

    if ($response->listOtherContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peopleOtherContactsSearch

Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleOtherContactsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleOtherContactsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'dicta';
    $request->key = 'corporis';
    $request->oauthToken = 'dolore';
    $request->pageSize = 480894;
    $request->prettyPrint = false;
    $request->query = 'dicta';
    $request->quotaUser = 'harum';
    $request->readMask = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new PeopleOtherContactsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->otherContacts->peopleOtherContactsSearch($request, $requestSecurity);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
