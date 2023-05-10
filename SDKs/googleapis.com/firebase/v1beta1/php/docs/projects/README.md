# projects

### Available Operations

* [firebaseProjectsAddFirebase](#firebaseprojectsaddfirebase) - Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
* [firebaseProjectsAddGoogleAnalytics](#firebaseprojectsaddgoogleanalytics) - Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
* [firebaseProjectsAndroidAppsCreate](#firebaseprojectsandroidappscreate) - Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [firebaseProjectsAndroidAppsList](#firebaseprojectsandroidappslist) - Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [firebaseProjectsAndroidAppsShaCreate](#firebaseprojectsandroidappsshacreate) - Adds a ShaCertificate to the specified AndroidApp.
* [firebaseProjectsAndroidAppsShaDelete](#firebaseprojectsandroidappsshadelete) - Removes a ShaCertificate from the specified AndroidApp.
* [firebaseProjectsAndroidAppsShaList](#firebaseprojectsandroidappsshalist) - Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.
* [firebaseProjectsAvailableLocationsList](#firebaseprojectsavailablelocationslist) - Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.
* [firebaseProjectsDefaultLocationFinalize](#firebaseprojectsdefaultlocationfinalize) - Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.
* [firebaseProjectsIosAppsCreate](#firebaseprojectsiosappscreate) - Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [firebaseProjectsIosAppsList](#firebaseprojectsiosappslist) - Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [firebaseProjectsList](#firebaseprojectslist) - Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.
* [firebaseProjectsRemoveAnalytics](#firebaseprojectsremoveanalytics) - Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.
* [firebaseProjectsSearchApps](#firebaseprojectssearchapps) - Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
* [firebaseProjectsWebAppsCreate](#firebaseprojectswebappscreate) - Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [firebaseProjectsWebAppsGetConfig](#firebaseprojectswebappsgetconfig) - Gets the configuration artifact associated with the specified WebApp.
* [firebaseProjectsWebAppsList](#firebaseprojectswebappslist) - Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [firebaseProjectsWebAppsPatch](#firebaseprojectswebappspatch) - Updates the attributes of the specified WebApp.
* [firebaseProjectsWebAppsRemove](#firebaseprojectswebappsremove) - Removes the specified WebApp from the FirebaseProject.
* [firebaseProjectsWebAppsUndelete](#firebaseprojectswebappsundelete) - Restores the specified WebApp to the FirebaseProject.

## firebaseProjectsAddFirebase

Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddFirebaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddFirebaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddFirebaseSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddFirebaseSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddFirebaseSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAddFirebaseRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addFirebaseRequest = new AddFirebaseRequest();
    $request->addFirebaseRequest->locationId = 'nisi';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new FirebaseProjectsAddFirebaseSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAddFirebaseSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAddFirebase($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsAddGoogleAnalytics

Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddGoogleAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddGoogleAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddGoogleAnalyticsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddGoogleAnalyticsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAddGoogleAnalyticsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAddGoogleAnalyticsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addGoogleAnalyticsRequest = new AddGoogleAnalyticsRequest();
    $request->addGoogleAnalyticsRequest->analyticsAccountId = 'odit';
    $request->addGoogleAnalyticsRequest->analyticsPropertyId = 'at';
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->oauthToken = 'esse';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new FirebaseProjectsAddGoogleAnalyticsSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAddGoogleAnalyticsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAddGoogleAnalytics($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsAndroidAppsCreate

Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AndroidAppInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAndroidAppsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->androidAppInput = new AndroidAppInput();
    $request->androidAppInput->apiKeyId = 'officia';
    $request->androidAppInput->displayName = 'occaecati';
    $request->androidAppInput->etag = 'fugit';
    $request->androidAppInput->name = 'Irvin Rosenbaum III';
    $request->androidAppInput->packageName = 'molestiae';
    $request->androidAppInput->sha1Hashes = [
        'qui',
        'impedit',
    ];
    $request->androidAppInput->sha256Hashes = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new FirebaseProjectsAndroidAppsCreateSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAndroidAppsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAndroidAppsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsAndroidAppsList

Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAndroidAppsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->pageSize = 697631;
    $request->pageToken = 'architecto';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->showDeleted = false;
    $request->uploadType = 'est';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new FirebaseProjectsAndroidAppsListSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAndroidAppsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAndroidAppsList($request, $requestSecurity);

    if ($response->listAndroidAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsAndroidAppsShaCreate

Adds a ShaCertificate to the specified AndroidApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShaCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ShaCertificateCertTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAndroidAppsShaCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->shaCertificate = new ShaCertificate();
    $request->shaCertificate->certType = ShaCertificateCertTypeEnum::SHA_CERTIFICATE_TYPE_UNSPECIFIED;
    $request->shaCertificate->name = 'Stacy Champlin';
    $request->shaCertificate->shaHash = 'omnis';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new FirebaseProjectsAndroidAppsShaCreateSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAndroidAppsShaCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAndroidAppsShaCreate($request, $requestSecurity);

    if ($response->shaCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsAndroidAppsShaDelete

Removes a ShaCertificate from the specified AndroidApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAndroidAppsShaDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellat';
    $request->fields = 'mollitia';
    $request->key = 'occaecati';
    $request->name = 'Lucy Konopelski';
    $request->oauthToken = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'quia';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new FirebaseProjectsAndroidAppsShaDeleteSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAndroidAppsShaDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAndroidAppsShaDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsAndroidAppsShaList

Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAndroidAppsShaListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAndroidAppsShaListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->oauthToken = 'tenetur';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new FirebaseProjectsAndroidAppsShaListSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAndroidAppsShaListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAndroidAppsShaList($request, $requestSecurity);

    if ($response->listShaCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsAvailableLocationsList

Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAvailableLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAvailableLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAvailableLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAvailableLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAvailableLocationsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsAvailableLocationsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsAvailableLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 878194;
    $request->pageToken = 'nihil';
    $request->parent = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new FirebaseProjectsAvailableLocationsListSecurity();
    $requestSecurity->option1 = new FirebaseProjectsAvailableLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsAvailableLocationsList($request, $requestSecurity);

    if ($response->listAvailableLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsDefaultLocationFinalize

Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsDefaultLocationFinalizeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FinalizeDefaultLocationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsDefaultLocationFinalizeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsDefaultLocationFinalizeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsDefaultLocationFinalizeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsDefaultLocationFinalizeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->finalizeDefaultLocationRequest = new FinalizeDefaultLocationRequest();
    $request->finalizeDefaultLocationRequest->locationId = 'cum';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->oauthToken = 'dicta';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new FirebaseProjectsDefaultLocationFinalizeSecurity();
    $requestSecurity->option1 = new FirebaseProjectsDefaultLocationFinalizeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsDefaultLocationFinalize($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsIosAppsCreate

Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\IosAppInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsIosAppsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->iosAppInput = new IosAppInput();
    $request->iosAppInput->apiKeyId = 'enim';
    $request->iosAppInput->appStoreId = 'accusamus';
    $request->iosAppInput->bundleId = 'commodi';
    $request->iosAppInput->displayName = 'repudiandae';
    $request->iosAppInput->etag = 'quae';
    $request->iosAppInput->name = 'Alison Mann';
    $request->iosAppInput->teamId = 'modi';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->parent = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new FirebaseProjectsIosAppsCreateSecurity();
    $requestSecurity->option1 = new FirebaseProjectsIosAppsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsIosAppsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsIosAppsList

Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsIosAppsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsIosAppsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->oauthToken = 'quibusdam';
    $request->pageSize = 289406;
    $request->pageToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->showDeleted = false;
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new FirebaseProjectsIosAppsListSecurity();
    $requestSecurity->option1 = new FirebaseProjectsIosAppsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsIosAppsList($request, $requestSecurity);

    if ($response->listIosAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsList

Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'alias';
    $request->key = 'fugit';
    $request->oauthToken = 'dolorum';
    $request->pageSize = 569618;
    $request->pageToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->showDeleted = false;
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new FirebaseProjectsListSecurity();
    $requestSecurity->option1 = new FirebaseProjectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsList($request, $requestSecurity);

    if ($response->listFirebaseProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsRemoveAnalytics

Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsRemoveAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsRemoveAnalyticsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsRemoveAnalyticsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsRemoveAnalyticsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsRemoveAnalyticsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->removeAnalyticsRequest = new RemoveAnalyticsRequest();
    $request->removeAnalyticsRequest->analyticsPropertyId = 'eum';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new FirebaseProjectsRemoveAnalyticsSecurity();
    $requestSecurity->option1 = new FirebaseProjectsRemoveAnalyticsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsRemoveAnalytics($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsSearchApps

Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsSearchAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsSearchAppsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsSearchAppsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsSearchAppsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsSearchAppsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsSearchAppsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsSearchAppsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->filter = 'maiores';
    $request->key = 'rerum';
    $request->oauthToken = 'dicta';
    $request->pageSize = 297437;
    $request->pageToken = 'cumque';
    $request->parent = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->showDeleted = false;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new FirebaseProjectsSearchAppsSecurity();
    $requestSecurity->option1 = new FirebaseProjectsSearchAppsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsSearchApps($request, $requestSecurity);

    if ($response->searchFirebaseAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsWebAppsCreate

Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebAppInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsWebAppsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->webAppInput = new WebAppInput();
    $request->webAppInput->apiKeyId = 'non';
    $request->webAppInput->appUrls = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->webAppInput->displayName = 'quidem';
    $request->webAppInput->etag = 'provident';
    $request->webAppInput->name = 'Lynn Kuvalis';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->key = 'natus';
    $request->oauthToken = 'omnis';
    $request->parent = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new FirebaseProjectsWebAppsCreateSecurity();
    $requestSecurity->option1 = new FirebaseProjectsWebAppsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsWebAppsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsWebAppsGetConfig

Gets the configuration artifact associated with the specified WebApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsGetConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsGetConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsGetConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsGetConfigSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsGetConfigSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsGetConfigSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsWebAppsGetConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->name = 'Duane Thiel II';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new FirebaseProjectsWebAppsGetConfigSecurity();
    $requestSecurity->option1 = new FirebaseProjectsWebAppsGetConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsWebAppsGetConfig($request, $requestSecurity);

    if ($response->webAppConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsWebAppsList

Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsWebAppsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->oauthToken = 'ad';
    $request->pageSize = 431418;
    $request->pageToken = 'dolor';
    $request->parent = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->showDeleted = false;
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new FirebaseProjectsWebAppsListSecurity();
    $requestSecurity->option1 = new FirebaseProjectsWebAppsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsWebAppsList($request, $requestSecurity);

    if ($response->listWebAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsWebAppsPatch

Updates the attributes of the specified WebApp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebAppInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsWebAppsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->webAppInput = new WebAppInput();
    $request->webAppInput->apiKeyId = 'doloribus';
    $request->webAppInput->appUrls = [
        'eius',
        'maxime',
        'deleniti',
        'facilis',
    ];
    $request->webAppInput->displayName = 'in';
    $request->webAppInput->etag = 'architecto';
    $request->webAppInput->name = 'Elvira Herman';
    $request->accessToken = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sed';
    $request->fields = 'saepe';
    $request->key = 'pariatur';
    $request->name = 'Kathryn Lang';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->updateMask = 'illum';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new FirebaseProjectsWebAppsPatchSecurity();
    $requestSecurity->option1 = new FirebaseProjectsWebAppsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsWebAppsPatch($request, $requestSecurity);

    if ($response->webApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsWebAppsRemove

Removes the specified WebApp from the FirebaseProject.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveWebAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsRemoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsRemoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsRemoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsWebAppsRemoveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeWebAppRequest = new RemoveWebAppRequest();
    $request->removeWebAppRequest->allowMissing = false;
    $request->removeWebAppRequest->etag = 'excepturi';
    $request->removeWebAppRequest->immediate = false;
    $request->removeWebAppRequest->validateOnly = false;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ab';
    $request->key = 'maiores';
    $request->name = 'Clyde Kling';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new FirebaseProjectsWebAppsRemoveSecurity();
    $requestSecurity->option1 = new FirebaseProjectsWebAppsRemoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsWebAppsRemove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebaseProjectsWebAppsUndelete

Restores the specified WebApp to the FirebaseProject.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UndeleteWebAppRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsUndeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsUndeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebaseProjectsWebAppsUndeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebaseProjectsWebAppsUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->undeleteWebAppRequest = new UndeleteWebAppRequest();
    $request->undeleteWebAppRequest->etag = 'fugiat';
    $request->undeleteWebAppRequest->validateOnly = false;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'corporis';
    $request->key = 'hic';
    $request->name = 'Robin D'Amore';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new FirebaseProjectsWebAppsUndeleteSecurity();
    $requestSecurity->option1 = new FirebaseProjectsWebAppsUndeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebaseProjectsWebAppsUndelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
