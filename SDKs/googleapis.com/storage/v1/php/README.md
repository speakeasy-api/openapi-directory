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
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketAccessControlsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketAccessControlsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'corrupti';
    $request->entity = 'provident';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'corrupti';
    $request->userIp = 'illum';
    $request->userProject = 'vel';

    $requestSecurity = new StorageBucketAccessControlsDeleteSecurity();
    $requestSecurity->option1 = new StorageBucketAccessControlsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bucketAccessControls->storageBucketAccessControlsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bucketAccessControls](docs/bucketaccesscontrols/README.md)

* [storageBucketAccessControlsDelete](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsGet](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified bucket.
* [storageBucketAccessControlsInsert](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsinsert) - Creates a new ACL entry on the specified bucket.
* [storageBucketAccessControlsList](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolslist) - Retrieves ACL entries on the specified bucket.
* [storageBucketAccessControlsPatch](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolspatch) - Patches an ACL entry on the specified bucket.
* [storageBucketAccessControlsUpdate](docs/bucketaccesscontrols/README.md#storagebucketaccesscontrolsupdate) - Updates an ACL entry on the specified bucket.

### [buckets](docs/buckets/README.md)

* [storageBucketsDelete](docs/buckets/README.md#storagebucketsdelete) - Permanently deletes an empty bucket.
* [storageBucketsGet](docs/buckets/README.md#storagebucketsget) - Returns metadata for the specified bucket.
* [storageBucketsGetIamPolicy](docs/buckets/README.md#storagebucketsgetiampolicy) - Returns an IAM policy for the specified bucket.
* [storageBucketsInsert](docs/buckets/README.md#storagebucketsinsert) - Creates a new bucket.
* [storageBucketsList](docs/buckets/README.md#storagebucketslist) - Retrieves a list of buckets for a given project.
* [storageBucketsLockRetentionPolicy](docs/buckets/README.md#storagebucketslockretentionpolicy) - Locks retention policy on a bucket.
* [storageBucketsPatch](docs/buckets/README.md#storagebucketspatch) - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* [storageBucketsSetIamPolicy](docs/buckets/README.md#storagebucketssetiampolicy) - Updates an IAM policy for the specified bucket.
* [storageBucketsTestIamPermissions](docs/buckets/README.md#storagebucketstestiampermissions) - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* [storageBucketsUpdate](docs/buckets/README.md#storagebucketsupdate) - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### [channels](docs/channels/README.md)

* [storageChannelsStop](docs/channels/README.md#storagechannelsstop) - Stop watching resources through this channel

### [defaultObjectAccessControls](docs/defaultobjectaccesscontrols/README.md)

* [storageDefaultObjectAccessControlsDelete](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsdelete) - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsGet](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsget) - Returns the default object ACL entry for the specified entity on the specified bucket.
* [storageDefaultObjectAccessControlsInsert](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsinsert) - Creates a new default object ACL entry on the specified bucket.
* [storageDefaultObjectAccessControlsList](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolslist) - Retrieves default object ACL entries on the specified bucket.
* [storageDefaultObjectAccessControlsPatch](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolspatch) - Patches a default object ACL entry on the specified bucket.
* [storageDefaultObjectAccessControlsUpdate](docs/defaultobjectaccesscontrols/README.md#storagedefaultobjectaccesscontrolsupdate) - Updates a default object ACL entry on the specified bucket.

### [notifications](docs/notifications/README.md)

* [storageNotificationsDelete](docs/notifications/README.md#storagenotificationsdelete) - Permanently deletes a notification subscription.
* [storageNotificationsGet](docs/notifications/README.md#storagenotificationsget) - View a notification configuration.
* [storageNotificationsInsert](docs/notifications/README.md#storagenotificationsinsert) - Creates a notification subscription for a given bucket.
* [storageNotificationsList](docs/notifications/README.md#storagenotificationslist) - Retrieves a list of notification subscriptions for a given bucket.

### [objectAccessControls](docs/objectaccesscontrols/README.md)

* [storageObjectAccessControlsDelete](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsdelete) - Permanently deletes the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsGet](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsget) - Returns the ACL entry for the specified entity on the specified object.
* [storageObjectAccessControlsInsert](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsinsert) - Creates a new ACL entry on the specified object.
* [storageObjectAccessControlsList](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolslist) - Retrieves ACL entries on the specified object.
* [storageObjectAccessControlsPatch](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolspatch) - Patches an ACL entry on the specified object.
* [storageObjectAccessControlsUpdate](docs/objectaccesscontrols/README.md#storageobjectaccesscontrolsupdate) - Updates an ACL entry on the specified object.

### [objects](docs/objects/README.md)

* [storageObjectsCompose](docs/objects/README.md#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [storageObjectsCopy](docs/objects/README.md#storageobjectscopy) - Copies a source object to a destination object. Optionally overrides metadata.
* [storageObjectsDelete](docs/objects/README.md#storageobjectsdelete) - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [storageObjectsGet](docs/objects/README.md#storageobjectsget) - Retrieves an object or its metadata.
* [storageObjectsGetIamPolicy](docs/objects/README.md#storageobjectsgetiampolicy) - Returns an IAM policy for the specified object.
* [storageObjectsInsert](docs/objects/README.md#storageobjectsinsert) - Stores a new object and metadata.
* [storageObjectsList](docs/objects/README.md#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [storageObjectsPatch](docs/objects/README.md#storageobjectspatch) - Patches an object's metadata.
* [storageObjectsRewrite](docs/objects/README.md#storageobjectsrewrite) - Rewrites a source object to a destination object. Optionally overrides metadata.
* [storageObjectsSetIamPolicy](docs/objects/README.md#storageobjectssetiampolicy) - Updates an IAM policy for the specified object.
* [storageObjectsTestIamPermissions](docs/objects/README.md#storageobjectstestiampermissions) - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* [storageObjectsUpdate](docs/objects/README.md#storageobjectsupdate) - Updates an object's metadata.
* [storageObjectsWatchAll](docs/objects/README.md#storageobjectswatchall) - Watch for changes on all objects in a bucket.

### [projects](docs/projects/README.md)

* [storageProjectsHmacKeysCreate](docs/projects/README.md#storageprojectshmackeyscreate) - Creates a new HMAC key for the specified service account.
* [storageProjectsHmacKeysDelete](docs/projects/README.md#storageprojectshmackeysdelete) - Deletes an HMAC key.
* [storageProjectsHmacKeysGet](docs/projects/README.md#storageprojectshmackeysget) - Retrieves an HMAC key's metadata
* [storageProjectsHmacKeysList](docs/projects/README.md#storageprojectshmackeyslist) - Retrieves a list of HMAC keys matching the criteria.
* [storageProjectsHmacKeysUpdate](docs/projects/README.md#storageprojectshmackeysupdate) - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* [storageProjectsServiceAccountGet](docs/projects/README.md#storageprojectsserviceaccountget) - Get the email address of this project's Google Cloud Storage service account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
