# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\PeopleContactGroupsBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PeopleContactGroupsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->groupFields = 'nulla';
    $request->key = 'corrupti';
    $request->maxMembers = 847252;
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->resourceNames = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new PeopleContactGroupsBatchGetSecurity();
    $requestSecurity->option1 = new PeopleContactGroupsBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contactGroups->peopleContactGroupsBatchGet($request, $requestSecurity);

    if ($response->batchGetContactGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [contactGroups](docs/contactgroups/README.md)

* [peopleContactGroupsBatchGet](docs/contactgroups/README.md#peoplecontactgroupsbatchget) - Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
* [peopleContactGroupsCreate](docs/contactgroups/README.md#peoplecontactgroupscreate) - Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleContactGroupsDelete](docs/contactgroups/README.md#peoplecontactgroupsdelete) - Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleContactGroupsList](docs/contactgroups/README.md#peoplecontactgroupslist) - List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
* [peopleContactGroupsMembersModify](docs/contactgroups/README.md#peoplecontactgroupsmembersmodify) - Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.
* [peopleContactGroupsUpdate](docs/contactgroups/README.md#peoplecontactgroupsupdate) - Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### [otherContacts](docs/othercontacts/README.md)

* [peopleOtherContactsCopyOtherContactToMyContactsGroup](docs/othercontacts/README.md#peopleothercontactscopyothercontacttomycontactsgroup) - Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleOtherContactsList](docs/othercontacts/README.md#peopleothercontactslist) - List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).
* [peopleOtherContactsSearch](docs/othercontacts/README.md#peopleothercontactssearch) - Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

### [people](docs/people/README.md)

* [peoplePeopleBatchCreateContacts](docs/people/README.md#peoplepeoplebatchcreatecontacts) - Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleBatchDeleteContacts](docs/people/README.md#peoplepeoplebatchdeletecontacts) - Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleBatchUpdateContacts](docs/people/README.md#peoplepeoplebatchupdatecontacts) - Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleConnectionsList](docs/people/README.md#peoplepeopleconnectionslist) - Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).
* [peoplePeopleCreateContact](docs/people/README.md#peoplepeoplecreatecontact) - Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleDeleteContact](docs/people/README.md#peoplepeopledeletecontact) - Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleDeleteContactPhoto](docs/people/README.md#peoplepeopledeletecontactphoto) - Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.
* [peoplePeopleGet](docs/people/README.md#peoplepeopleget) - Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [peoplePeopleGetBatchGet](docs/people/README.md#peoplepeoplegetbatchget) - Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [peoplePeopleListDirectoryPeople](docs/people/README.md#peoplepeoplelistdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).
* [peoplePeopleSearchContacts](docs/people/README.md#peoplepeoplesearchcontacts) - Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts
* [peoplePeopleSearchDirectoryPeople](docs/people/README.md#peoplepeoplesearchdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
* [peoplePeopleUpdateContact](docs/people/README.md#peoplepeopleupdatecontact) - Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleUpdateContactPhoto](docs/people/README.md#peoplepeopleupdatecontactphoto) - Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
