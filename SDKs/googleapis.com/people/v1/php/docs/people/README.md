# people

### Available Operations

* [peoplePeopleBatchCreateContacts](#peoplepeoplebatchcreatecontacts) - Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleBatchDeleteContacts](#peoplepeoplebatchdeletecontacts) - Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleBatchUpdateContacts](#peoplepeoplebatchupdatecontacts) - Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleConnectionsList](#peoplepeopleconnectionslist) - Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).
* [peoplePeopleCreateContact](#peoplepeoplecreatecontact) - Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleDeleteContact](#peoplepeopledeletecontact) - Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleDeleteContactPhoto](#peoplepeopledeletecontactphoto) - Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.
* [peoplePeopleGet](#peoplepeopleget) - Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [peoplePeopleGetBatchGet](#peoplepeoplegetbatchget) - Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [peoplePeopleListDirectoryPeople](#peoplepeoplelistdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).
* [peoplePeopleSearchContacts](#peoplepeoplesearchcontacts) - Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts
* [peoplePeopleSearchDirectoryPeople](#peoplepeoplesearchdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
* [peoplePeopleUpdateContact](#peoplepeopleupdatecontact) - Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleUpdateContactPhoto](#peoplepeopleupdatecontactphoto) - Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

## peoplePeopleBatchCreateContacts

Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleBatchCreateContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreateContactsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactToCreateInput;
use \OpenAPI\OpenAPI\Models\Shared\PersonInput;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;
use \OpenAPI\OpenAPI\Models\Shared\FieldMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BiographyInput;
use \OpenAPI\OpenAPI\Models\Shared\BiographyContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BirthdayInput;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\BraggingRightsInput;
use \OpenAPI\OpenAPI\Models\Shared\CalendarUrlInput;
use \OpenAPI\OpenAPI\Models\Shared\ClientDataInput;
use \OpenAPI\OpenAPI\Models\Shared\EmailAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\EventInput;
use \OpenAPI\OpenAPI\Models\Shared\ExternalIdInput;
use \OpenAPI\OpenAPI\Models\Shared\FileAsInput;
use \OpenAPI\OpenAPI\Models\Shared\GenderInput;
use \OpenAPI\OpenAPI\Models\Shared\ImClientInput;
use \OpenAPI\OpenAPI\Models\Shared\InterestInput;
use \OpenAPI\OpenAPI\Models\Shared\LocaleInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactGroupMembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\DomainMembership;
use \OpenAPI\OpenAPI\Models\Shared\PersonMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OccupationInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberInput;
use \OpenAPI\OpenAPI\Models\Shared\RelationInput;
use \OpenAPI\OpenAPI\Models\Shared\ResidenceInput;
use \OpenAPI\OpenAPI\Models\Shared\SipAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\SkillInput;
use \OpenAPI\OpenAPI\Models\Shared\UrlInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreateContactsRequestSourcesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleBatchCreateContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleBatchCreateContactsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchCreateContactsRequestInput = new BatchCreateContactsRequestInput();
    $request->batchCreateContactsRequestInput->contacts = [
        new ContactToCreateInput(),
    ];
    $request->batchCreateContactsRequestInput->readMask = 'ipsum';
    $request->batchCreateContactsRequestInput->sources = [
        BatchCreateContactsRequestSourcesEnum::READ_SOURCE_TYPE_CONTACT,
        BatchCreateContactsRequestSourcesEnum::READ_SOURCE_TYPE_CONTACT,
        BatchCreateContactsRequestSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'voluptates';
    $request->key = 'quasi';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new PeoplePeopleBatchCreateContactsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleBatchCreateContacts($request, $requestSecurity);

    if ($response->batchCreateContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleBatchDeleteContacts

Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleBatchDeleteContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleBatchDeleteContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleBatchDeleteContactsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchDeleteContactsRequest = new BatchDeleteContactsRequest();
    $request->batchDeleteContactsRequest->resourceNames = [
        'consequatur',
        'est',
    ];
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new PeoplePeopleBatchDeleteContactsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleBatchDeleteContacts($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleBatchUpdateContacts

Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleBatchUpdateContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateContactsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PersonInput;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;
use \OpenAPI\OpenAPI\Models\Shared\FieldMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BiographyInput;
use \OpenAPI\OpenAPI\Models\Shared\BiographyContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BirthdayInput;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\BraggingRightsInput;
use \OpenAPI\OpenAPI\Models\Shared\CalendarUrlInput;
use \OpenAPI\OpenAPI\Models\Shared\ClientDataInput;
use \OpenAPI\OpenAPI\Models\Shared\EmailAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\EventInput;
use \OpenAPI\OpenAPI\Models\Shared\ExternalIdInput;
use \OpenAPI\OpenAPI\Models\Shared\FileAsInput;
use \OpenAPI\OpenAPI\Models\Shared\GenderInput;
use \OpenAPI\OpenAPI\Models\Shared\ImClientInput;
use \OpenAPI\OpenAPI\Models\Shared\InterestInput;
use \OpenAPI\OpenAPI\Models\Shared\LocaleInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactGroupMembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\DomainMembership;
use \OpenAPI\OpenAPI\Models\Shared\PersonMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OccupationInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberInput;
use \OpenAPI\OpenAPI\Models\Shared\RelationInput;
use \OpenAPI\OpenAPI\Models\Shared\ResidenceInput;
use \OpenAPI\OpenAPI\Models\Shared\SipAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\SkillInput;
use \OpenAPI\OpenAPI\Models\Shared\UrlInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateContactsRequestSourcesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleBatchUpdateContactsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleBatchUpdateContactsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->batchUpdateContactsRequestInput = new BatchUpdateContactsRequestInput();
    $request->batchUpdateContactsRequestInput->contacts = [
        'perferendis' => new PersonInput(),
        'magni' => new PersonInput(),
        'assumenda' => new PersonInput(),
    ];
    $request->batchUpdateContactsRequestInput->readMask = 'ipsam';
    $request->batchUpdateContactsRequestInput->sources = [
        BatchUpdateContactsRequestSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
    ];
    $request->batchUpdateContactsRequestInput->updateMask = 'dolorum';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->key = 'labore';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new PeoplePeopleBatchUpdateContactsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleBatchUpdateContacts($request, $requestSecurity);

    if ($response->batchUpdateContactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleConnectionsList

Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleConnectionsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleConnectionsListSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleConnectionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleConnectionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleConnectionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->pageSize = 891555;
    $request->pageToken = 'a';
    $request->personFields = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->requestMaskIncludeField = 'in';
    $request->requestSyncToken = false;
    $request->resourceName = 'illum';
    $request->sortOrder = PeoplePeopleConnectionsListSortOrderEnum::LAST_NAME_ASCENDING;
    $request->sources = [
        PeoplePeopleConnectionsListSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
        PeoplePeopleConnectionsListSourcesEnum::READ_SOURCE_TYPE_PROFILE,
        PeoplePeopleConnectionsListSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
    ];
    $request->syncToken = 'facere';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new PeoplePeopleConnectionsListSecurity();
    $requestSecurity->option1 = new PeoplePeopleConnectionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleConnectionsList($request, $requestSecurity);

    if ($response->listConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleCreateContact

Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleCreateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PersonInput;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;
use \OpenAPI\OpenAPI\Models\Shared\FieldMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BiographyInput;
use \OpenAPI\OpenAPI\Models\Shared\BiographyContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BirthdayInput;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\BraggingRightsInput;
use \OpenAPI\OpenAPI\Models\Shared\CalendarUrlInput;
use \OpenAPI\OpenAPI\Models\Shared\ClientDataInput;
use \OpenAPI\OpenAPI\Models\Shared\EmailAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\EventInput;
use \OpenAPI\OpenAPI\Models\Shared\ExternalIdInput;
use \OpenAPI\OpenAPI\Models\Shared\FileAsInput;
use \OpenAPI\OpenAPI\Models\Shared\GenderInput;
use \OpenAPI\OpenAPI\Models\Shared\ImClientInput;
use \OpenAPI\OpenAPI\Models\Shared\InterestInput;
use \OpenAPI\OpenAPI\Models\Shared\LocaleInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactGroupMembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\DomainMembership;
use \OpenAPI\OpenAPI\Models\Shared\PersonMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OccupationInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberInput;
use \OpenAPI\OpenAPI\Models\Shared\RelationInput;
use \OpenAPI\OpenAPI\Models\Shared\ResidenceInput;
use \OpenAPI\OpenAPI\Models\Shared\SipAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\SkillInput;
use \OpenAPI\OpenAPI\Models\Shared\UrlInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleCreateContactSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleCreateContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleCreateContactRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->personInput = new PersonInput();
    $request->personInput->addresses = [
        new AddressInput(),
        new AddressInput(),
        new AddressInput(),
        new AddressInput(),
    ];
    $request->personInput->biographies = [
        new BiographyInput(),
    ];
    $request->personInput->birthdays = [
        new BirthdayInput(),
        new BirthdayInput(),
        new BirthdayInput(),
    ];
    $request->personInput->braggingRights = [
        new BraggingRightsInput(),
        new BraggingRightsInput(),
    ];
    $request->personInput->calendarUrls = [
        new CalendarUrlInput(),
        new CalendarUrlInput(),
        new CalendarUrlInput(),
        new CalendarUrlInput(),
    ];
    $request->personInput->clientData = [
        new ClientDataInput(),
        new ClientDataInput(),
        new ClientDataInput(),
        new ClientDataInput(),
    ];
    $request->personInput->emailAddresses = [
        new EmailAddressInput(),
        new EmailAddressInput(),
        new EmailAddressInput(),
    ];
    $request->personInput->etag = 'provident';
    $request->personInput->events = [
        new EventInput(),
        new EventInput(),
        new EventInput(),
    ];
    $request->personInput->externalIds = [
        new ExternalIdInput(),
        new ExternalIdInput(),
        new ExternalIdInput(),
    ];
    $request->personInput->fileAses = [
        new FileAsInput(),
        new FileAsInput(),
        new FileAsInput(),
    ];
    $request->personInput->genders = [
        new GenderInput(),
        new GenderInput(),
        new GenderInput(),
    ];
    $request->personInput->imClients = [
        new ImClientInput(),
        new ImClientInput(),
        new ImClientInput(),
        new ImClientInput(),
    ];
    $request->personInput->interests = [
        new InterestInput(),
    ];
    $request->personInput->locales = [
        new LocaleInput(),
        new LocaleInput(),
        new LocaleInput(),
    ];
    $request->personInput->locations = [
        new LocationInput(),
        new LocationInput(),
    ];
    $request->personInput->memberships = [
        new MembershipInput(),
        new MembershipInput(),
    ];
    $request->personInput->metadata = new PersonMetadataInput();
    $request->personInput->metadata->sources = [
        new SourceInput(),
        new SourceInput(),
        new SourceInput(),
    ];
    $request->personInput->miscKeywords = [
        new MiscKeywordInput(),
        new MiscKeywordInput(),
        new MiscKeywordInput(),
    ];
    $request->personInput->names = [
        new NameInput(),
        new NameInput(),
    ];
    $request->personInput->nicknames = [
        new NicknameInput(),
    ];
    $request->personInput->occupations = [
        new OccupationInput(),
        new OccupationInput(),
    ];
    $request->personInput->organizations = [
        new OrganizationInput(),
        new OrganizationInput(),
    ];
    $request->personInput->phoneNumbers = [
        new PhoneNumberInput(),
        new PhoneNumberInput(),
        new PhoneNumberInput(),
    ];
    $request->personInput->relations = [
        new RelationInput(),
        new RelationInput(),
        new RelationInput(),
    ];
    $request->personInput->residences = [
        new ResidenceInput(),
        new ResidenceInput(),
    ];
    $request->personInput->resourceName = 'labore';
    $request->personInput->sipAddresses = [
        new SipAddressInput(),
        new SipAddressInput(),
    ];
    $request->personInput->skills = [
        new SkillInput(),
        new SkillInput(),
        new SkillInput(),
    ];
    $request->personInput->urls = [
        new UrlInput(),
        new UrlInput(),
        new UrlInput(),
    ];
    $request->personInput->userDefined = [
        new UserDefinedInput(),
        new UserDefinedInput(),
    ];
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->key = 'et';
    $request->oauthToken = 'excepturi';
    $request->personFields = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->sources = [
        PeoplePeopleCreateContactSourcesEnum::READ_SOURCE_TYPE_CONTACT,
        PeoplePeopleCreateContactSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
        PeoplePeopleCreateContactSourcesEnum::READ_SOURCE_TYPE_CONTACT,
    ];
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new PeoplePeopleCreateContactSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleCreateContact($request, $requestSecurity);

    if ($response->person !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleDeleteContact

Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleDeleteContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleDeleteContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleDeleteContactRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'odit';
    $request->key = 'nemo';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->resourceName = 'doloribus';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new PeoplePeopleDeleteContactSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleDeleteContact($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleDeleteContactPhoto

Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleDeleteContactPhotoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleDeleteContactPhotoSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleDeleteContactPhotoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleDeleteContactPhotoRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->oauthToken = 'repudiandae';
    $request->personFields = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->resourceName = 'nihil';
    $request->sources = [
        PeoplePeopleDeleteContactPhotoSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
        PeoplePeopleDeleteContactPhotoSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
        PeoplePeopleDeleteContactPhotoSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
        PeoplePeopleDeleteContactPhotoSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
    ];
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new PeoplePeopleDeleteContactPhotoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleDeleteContactPhoto($request, $requestSecurity);

    if ($response->deleteContactPhotoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleGet

Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption10;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption11;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption7;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption8;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetSecurityOption9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->personFields = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->requestMaskIncludeField = 'excepturi';
    $request->resourceName = 'odit';
    $request->sources = [
        PeoplePeopleGetSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
        PeoplePeopleGetSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
    ];
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new PeoplePeopleGetSecurity();
    $requestSecurity->option1 = new PeoplePeopleGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleGet($request, $requestSecurity);

    if ($response->person !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleGetBatchGet

Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption10;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption11;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption5;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption6;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption7;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption8;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleGetBatchGetSecurityOption9;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleGetBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'eaque';
    $request->key = 'pariatur';
    $request->oauthToken = 'nemo';
    $request->personFields = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->requestMaskIncludeField = 'fugiat';
    $request->resourceNames = [
        'aut',
    ];
    $request->sources = [
        PeoplePeopleGetBatchGetSourcesEnum::READ_SOURCE_TYPE_PROFILE,
        PeoplePeopleGetBatchGetSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
        PeoplePeopleGetBatchGetSourcesEnum::READ_SOURCE_TYPE_CONTACT,
        PeoplePeopleGetBatchGetSourcesEnum::READ_SOURCE_TYPE_CONTACT,
    ];
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new PeoplePeopleGetBatchGetSecurity();
    $requestSecurity->option1 = new PeoplePeopleGetBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleGetBatchGet($request, $requestSecurity);

    if ($response->getPeopleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleListDirectoryPeople

Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleListDirectoryPeopleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleListDirectoryPeopleMergeSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleListDirectoryPeopleSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleListDirectoryPeopleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleListDirectoryPeopleRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'nesciunt';
    $request->key = 'eos';
    $request->mergeSources = [
        PeoplePeopleListDirectoryPeopleMergeSourcesEnum::DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED,
    ];
    $request->oauthToken = 'minus';
    $request->pageSize = 463451;
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->readMask = 'nostrum';
    $request->requestSyncToken = false;
    $request->sources = [
        PeoplePeopleListDirectoryPeopleSourcesEnum::DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE,
        PeoplePeopleListDirectoryPeopleSourcesEnum::DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT,
        PeoplePeopleListDirectoryPeopleSourcesEnum::DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE,
        PeoplePeopleListDirectoryPeopleSourcesEnum::DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT,
    ];
    $request->syncToken = 'voluptatem';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new PeoplePeopleListDirectoryPeopleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleListDirectoryPeople($request, $requestSecurity);

    if ($response->listDirectoryPeopleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleSearchContacts

Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchContactsSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchContactsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchContactsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchContactsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleSearchContactsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'rerum';
    $request->key = 'adipisci';
    $request->oauthToken = 'asperiores';
    $request->pageSize = 934214;
    $request->prettyPrint = false;
    $request->query = 'modi';
    $request->quotaUser = 'iste';
    $request->readMask = 'dolorum';
    $request->sources = [
        PeoplePeopleSearchContactsSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
        PeoplePeopleSearchContactsSourcesEnum::READ_SOURCE_TYPE_CONTACT,
        PeoplePeopleSearchContactsSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
    ];
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new PeoplePeopleSearchContactsSecurity();
    $requestSecurity->option1 = new PeoplePeopleSearchContactsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleSearchContacts($request, $requestSecurity);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleSearchDirectoryPeople

Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchDirectoryPeopleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchDirectoryPeopleSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleSearchDirectoryPeopleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleSearchDirectoryPeopleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->key = 'dolor';
    $request->mergeSources = [
        PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum::DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED,
    ];
    $request->oauthToken = 'hic';
    $request->pageSize = 569574;
    $request->pageToken = 'cum';
    $request->prettyPrint = false;
    $request->query = 'voluptate';
    $request->quotaUser = 'dignissimos';
    $request->readMask = 'reiciendis';
    $request->sources = [
        PeoplePeopleSearchDirectoryPeopleSourcesEnum::DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE,
    ];
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new PeoplePeopleSearchDirectoryPeopleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleSearchDirectoryPeople($request, $requestSecurity);

    if ($response->searchDirectoryPeopleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleUpdateContact

Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleUpdateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PersonInput;
use \OpenAPI\OpenAPI\Models\Shared\AddressInput;
use \OpenAPI\OpenAPI\Models\Shared\FieldMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceInput;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BiographyInput;
use \OpenAPI\OpenAPI\Models\Shared\BiographyContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BirthdayInput;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\BraggingRightsInput;
use \OpenAPI\OpenAPI\Models\Shared\CalendarUrlInput;
use \OpenAPI\OpenAPI\Models\Shared\ClientDataInput;
use \OpenAPI\OpenAPI\Models\Shared\EmailAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\EventInput;
use \OpenAPI\OpenAPI\Models\Shared\ExternalIdInput;
use \OpenAPI\OpenAPI\Models\Shared\FileAsInput;
use \OpenAPI\OpenAPI\Models\Shared\GenderInput;
use \OpenAPI\OpenAPI\Models\Shared\ImClientInput;
use \OpenAPI\OpenAPI\Models\Shared\InterestInput;
use \OpenAPI\OpenAPI\Models\Shared\LocaleInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationInput;
use \OpenAPI\OpenAPI\Models\Shared\MembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactGroupMembershipInput;
use \OpenAPI\OpenAPI\Models\Shared\DomainMembership;
use \OpenAPI\OpenAPI\Models\Shared\PersonMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordInput;
use \OpenAPI\OpenAPI\Models\Shared\MiscKeywordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameInput;
use \OpenAPI\OpenAPI\Models\Shared\NicknameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OccupationInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberInput;
use \OpenAPI\OpenAPI\Models\Shared\RelationInput;
use \OpenAPI\OpenAPI\Models\Shared\ResidenceInput;
use \OpenAPI\OpenAPI\Models\Shared\SipAddressInput;
use \OpenAPI\OpenAPI\Models\Shared\SkillInput;
use \OpenAPI\OpenAPI\Models\Shared\UrlInput;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleUpdateContactSourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleUpdateContactSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleUpdateContactRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->personInput = new PersonInput();
    $request->personInput->addresses = [
        new AddressInput(),
    ];
    $request->personInput->biographies = [
        new BiographyInput(),
        new BiographyInput(),
    ];
    $request->personInput->birthdays = [
        new BirthdayInput(),
        new BirthdayInput(),
    ];
    $request->personInput->braggingRights = [
        new BraggingRightsInput(),
        new BraggingRightsInput(),
    ];
    $request->personInput->calendarUrls = [
        new CalendarUrlInput(),
        new CalendarUrlInput(),
        new CalendarUrlInput(),
        new CalendarUrlInput(),
    ];
    $request->personInput->clientData = [
        new ClientDataInput(),
        new ClientDataInput(),
        new ClientDataInput(),
    ];
    $request->personInput->emailAddresses = [
        new EmailAddressInput(),
        new EmailAddressInput(),
        new EmailAddressInput(),
        new EmailAddressInput(),
    ];
    $request->personInput->etag = 'voluptas';
    $request->personInput->events = [
        new EventInput(),
        new EventInput(),
        new EventInput(),
    ];
    $request->personInput->externalIds = [
        new ExternalIdInput(),
    ];
    $request->personInput->fileAses = [
        new FileAsInput(),
        new FileAsInput(),
        new FileAsInput(),
    ];
    $request->personInput->genders = [
        new GenderInput(),
    ];
    $request->personInput->imClients = [
        new ImClientInput(),
        new ImClientInput(),
        new ImClientInput(),
        new ImClientInput(),
    ];
    $request->personInput->interests = [
        new InterestInput(),
    ];
    $request->personInput->locales = [
        new LocaleInput(),
        new LocaleInput(),
        new LocaleInput(),
    ];
    $request->personInput->locations = [
        new LocationInput(),
        new LocationInput(),
        new LocationInput(),
    ];
    $request->personInput->memberships = [
        new MembershipInput(),
        new MembershipInput(),
    ];
    $request->personInput->metadata = new PersonMetadataInput();
    $request->personInput->metadata->sources = [
        new SourceInput(),
        new SourceInput(),
    ];
    $request->personInput->miscKeywords = [
        new MiscKeywordInput(),
        new MiscKeywordInput(),
        new MiscKeywordInput(),
    ];
    $request->personInput->names = [
        new NameInput(),
        new NameInput(),
        new NameInput(),
    ];
    $request->personInput->nicknames = [
        new NicknameInput(),
        new NicknameInput(),
        new NicknameInput(),
    ];
    $request->personInput->occupations = [
        new OccupationInput(),
        new OccupationInput(),
        new OccupationInput(),
        new OccupationInput(),
    ];
    $request->personInput->organizations = [
        new OrganizationInput(),
        new OrganizationInput(),
        new OrganizationInput(),
    ];
    $request->personInput->phoneNumbers = [
        new PhoneNumberInput(),
        new PhoneNumberInput(),
        new PhoneNumberInput(),
        new PhoneNumberInput(),
    ];
    $request->personInput->relations = [
        new RelationInput(),
        new RelationInput(),
    ];
    $request->personInput->residences = [
        new ResidenceInput(),
    ];
    $request->personInput->resourceName = 'voluptate';
    $request->personInput->sipAddresses = [
        new SipAddressInput(),
        new SipAddressInput(),
        new SipAddressInput(),
    ];
    $request->personInput->skills = [
        new SkillInput(),
        new SkillInput(),
        new SkillInput(),
        new SkillInput(),
    ];
    $request->personInput->urls = [
        new UrlInput(),
        new UrlInput(),
    ];
    $request->personInput->userDefined = [
        new UserDefinedInput(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'accusamus';
    $request->key = 'ad';
    $request->oauthToken = 'saepe';
    $request->personFields = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->resourceName = 'provident';
    $request->sources = [
        PeoplePeopleUpdateContactSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
        PeoplePeopleUpdateContactSourcesEnum::READ_SOURCE_TYPE_CONTACT,
    ];
    $request->updatePersonFields = 'similique';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'at';

    $requestSecurity = new PeoplePeopleUpdateContactSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleUpdateContact($request, $requestSecurity);

    if ($response->person !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## peoplePeopleUpdateContactPhoto

Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleUpdateContactPhotoRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContactPhotoRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContactPhotoRequestSourcesEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeoplePeopleUpdateContactPhotoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeoplePeopleUpdateContactPhotoRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateContactPhotoRequest = new UpdateContactPhotoRequest();
    $request->updateContactPhotoRequest->personFields = 'tempora';
    $request->updateContactPhotoRequest->photoBytes = 'vel';
    $request->updateContactPhotoRequest->sources = [
        UpdateContactPhotoRequestSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
        UpdateContactPhotoRequestSourcesEnum::READ_SOURCE_TYPE_UNSPECIFIED,
        UpdateContactPhotoRequestSourcesEnum::READ_SOURCE_TYPE_CONTACT,
        UpdateContactPhotoRequestSourcesEnum::READ_SOURCE_TYPE_DOMAIN_CONTACT,
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'ipsum';
    $request->key = 'quisquam';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->resourceName = 'tempore';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new PeoplePeopleUpdateContactPhotoSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->people->peoplePeopleUpdateContactPhoto($request, $requestSecurity);

    if ($response->updateContactPhotoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
