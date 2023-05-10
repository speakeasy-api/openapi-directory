# properties

### Available Operations

* [analyticsadminPropertiesAccessBindingsBatchCreate](#analyticsadminpropertiesaccessbindingsbatchcreate) - Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
* [analyticsadminPropertiesAccessBindingsBatchDelete](#analyticsadminpropertiesaccessbindingsbatchdelete) - Deletes information about multiple users' links to an account or property.
* [analyticsadminPropertiesAccessBindingsBatchGet](#analyticsadminpropertiesaccessbindingsbatchget) - Gets information about multiple access bindings to an account or property.
* [analyticsadminPropertiesAccessBindingsBatchUpdate](#analyticsadminpropertiesaccessbindingsbatchupdate) - Updates information about multiple access bindings to an account or property.
* [analyticsadminPropertiesAccessBindingsCreate](#analyticsadminpropertiesaccessbindingscreate) - Creates an access binding on an account or property.
* [analyticsadminPropertiesAccessBindingsList](#analyticsadminpropertiesaccessbindingslist) - Lists all access bindings on an account or property.
* [analyticsadminPropertiesAcknowledgeUserDataCollection](#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [analyticsadminPropertiesAudiencesCreate](#analyticsadminpropertiesaudiencescreate) - Creates an Audience.
* [analyticsadminPropertiesAudiencesList](#analyticsadminpropertiesaudienceslist) - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* [analyticsadminPropertiesBigQueryLinksList](#analyticsadminpropertiesbigquerylinkslist) - Lists BigQuery Links on a property.
* [analyticsadminPropertiesChannelGroupsCreate](#analyticsadminpropertieschannelgroupscreate) - Creates a ChannelGroup.
* [analyticsadminPropertiesChannelGroupsList](#analyticsadminpropertieschannelgroupslist) - Lists ChannelGroups on a property.
* [analyticsadminPropertiesConversionEventsCreate](#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [analyticsadminPropertiesConversionEventsList](#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [analyticsadminPropertiesCreate](#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [analyticsadminPropertiesCreateConnectedSiteTag](#analyticsadminpropertiescreateconnectedsitetag) - Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
* [analyticsadminPropertiesCustomDimensionsCreate](#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [analyticsadminPropertiesCustomDimensionsList](#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [analyticsadminPropertiesCustomMetricsArchive](#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [analyticsadminPropertiesCustomMetricsCreate](#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [analyticsadminPropertiesCustomMetricsList](#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [analyticsadminPropertiesDataStreamsCreate](#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [analyticsadminPropertiesDataStreamsEventCreateRulesCreate](#analyticsadminpropertiesdatastreamseventcreaterulescreate) - Creates an EventCreateRule.
* [analyticsadminPropertiesDataStreamsEventCreateRulesList](#analyticsadminpropertiesdatastreamseventcreateruleslist) - Lists EventCreateRules on a web data stream.
* [analyticsadminPropertiesDataStreamsList](#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [analyticsadminPropertiesDeleteConnectedSiteTag](#analyticsadminpropertiesdeleteconnectedsitetag) - Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalsapprove) - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscancel) - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscreate) - Creates a DisplayVideo360AdvertiserLinkProposal.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList](#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalslist) - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate](#analyticsadminpropertiesdisplayvideo360advertiserlinkscreate) - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinksList](#analyticsadminpropertiesdisplayvideo360advertiserlinkslist) - Lists all DisplayVideo360AdvertiserLinks on a property.
* [analyticsadminPropertiesExpandedDataSetsCreate](#analyticsadminpropertiesexpandeddatasetscreate) - Creates a ExpandedDataSet.
* [analyticsadminPropertiesExpandedDataSetsList](#analyticsadminpropertiesexpandeddatasetslist) - Lists ExpandedDataSets on a property.
* [analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut](#analyticsadminpropertiesfetchautomatedga4configurationoptout) - Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesFetchConnectedGa4Property](#analyticsadminpropertiesfetchconnectedga4property) - Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.
* [analyticsadminPropertiesFirebaseLinksCreate](#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesFirebaseLinksList](#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesGoogleAdsLinksCreate](#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [analyticsadminPropertiesGoogleAdsLinksList](#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [analyticsadminPropertiesList](#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [analyticsadminPropertiesListConnectedSiteTags](#analyticsadminpropertieslistconnectedsitetags) - Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesRunAccessReport](#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* [analyticsadminPropertiesSearchAds360LinksCreate](#analyticsadminpropertiessearchads360linkscreate) - Creates a SearchAds360Link.
* [analyticsadminPropertiesSearchAds360LinksList](#analyticsadminpropertiessearchads360linkslist) - Lists all SearchAds360Links on a property.
* [analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut](#analyticsadminpropertiessetautomatedga4configurationoptout) - Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesUserLinksAudit](#analyticsadminpropertiesuserlinksaudit) - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* [analyticsadminPropertiesUserLinksBatchCreate](#analyticsadminpropertiesuserlinksbatchcreate) - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* [analyticsadminPropertiesUserLinksBatchDelete](#analyticsadminpropertiesuserlinksbatchdelete) - Deletes information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksBatchGet](#analyticsadminpropertiesuserlinksbatchget) - Gets information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksBatchUpdate](#analyticsadminpropertiesuserlinksbatchupdate) - Updates information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksCreate](#analyticsadminpropertiesuserlinkscreate) - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* [analyticsadminPropertiesUserLinksDelete](#analyticsadminpropertiesuserlinksdelete) - Deletes a user link on an account or property.
* [analyticsadminPropertiesUserLinksGet](#analyticsadminpropertiesuserlinksget) - Gets information about a user's link to an account or property.
* [analyticsadminPropertiesUserLinksList](#analyticsadminpropertiesuserlinkslist) - Lists all user links on an account or property.
* [analyticsadminPropertiesUserLinksPatch](#analyticsadminpropertiesuserlinkspatch) - Updates a user link on an account or property.

## analyticsadminPropertiesAccessBindingsBatchCreate

Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAccessBindingsBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput = new GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput();
    $request->googleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput->requests = [
        new GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput(),
        new GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput(),
        new GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput(),
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'iure';
    $request->key = 'saepe';
    $request->oauthToken = 'quidem';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'est';

    $requestSecurity = new AnalyticsadminPropertiesAccessBindingsBatchCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAccessBindingsBatchCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAccessBindingsBatchDelete

Deletes information about multiple users' links to an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAccessBindingsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest = new GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest();
    $request->googleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest->requests = [
        new GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest(),
        new GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest(),
        new GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest(),
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corporis';
    $request->fields = 'explicabo';
    $request->key = 'nobis';
    $request->oauthToken = 'enim';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new AnalyticsadminPropertiesAccessBindingsBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAccessBindingsBatchDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAccessBindingsBatchGet

Gets information about multiple access bindings to an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAccessBindingsBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->names = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->oauthToken = 'repellat';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new AnalyticsadminPropertiesAccessBindingsBatchGetSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesAccessBindingsBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAccessBindingsBatchGet($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAccessBindingsBatchUpdate

Updates information about multiple access bindings to an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsBatchUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAccessBindingsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput = new GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput();
    $request->googleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput->requests = [
        new GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput(),
        new GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput(),
    ];
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->parent = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new AnalyticsadminPropertiesAccessBindingsBatchUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAccessBindingsBatchUpdate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAccessBindingsCreate

Creates an access binding on an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessBindingInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAccessBindingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaAccessBindingInput = new GoogleAnalyticsAdminV1alphaAccessBindingInput();
    $request->googleAnalyticsAdminV1alphaAccessBindingInput->roles = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];
    $request->googleAnalyticsAdminV1alphaAccessBindingInput->user = 'quasi';
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new AnalyticsadminPropertiesAccessBindingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAccessBindingsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaAccessBinding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAccessBindingsList

Lists all access bindings on an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAccessBindingsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAccessBindingsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cum';
    $request->fields = 'perferendis';
    $request->key = 'doloremque';
    $request->oauthToken = 'reprehenderit';
    $request->pageSize = 282807;
    $request->pageToken = 'maiores';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new AnalyticsadminPropertiesAccessBindingsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesAccessBindingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAccessBindingsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListAccessBindingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAcknowledgeUserDataCollection

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest = new GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest();
    $request->googleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionRequest->acknowledgement = 'harum';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->property = 'quidem';
    $request->quotaUser = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new AnalyticsadminPropertiesAcknowledgeUserDataCollectionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAcknowledgeUserDataCollection($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAudiencesCreate

Creates an Audience.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAudiencesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceEventTrigger;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceFilterClause;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceEventFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceSimpleFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAudiencesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAudiencesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaAudienceInput = new GoogleAnalyticsAdminV1alphaAudienceInput();
    $request->googleAnalyticsAdminV1alphaAudienceInput->description = 'praesentium';
    $request->googleAnalyticsAdminV1alphaAudienceInput->displayName = 'rem';
    $request->googleAnalyticsAdminV1alphaAudienceInput->eventTrigger = new GoogleAnalyticsAdminV1alphaAudienceEventTrigger();
    $request->googleAnalyticsAdminV1alphaAudienceInput->eventTrigger->eventName = 'voluptates';
    $request->googleAnalyticsAdminV1alphaAudienceInput->eventTrigger->logCondition = GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum::LOG_CONDITION_UNSPECIFIED;
    $request->googleAnalyticsAdminV1alphaAudienceInput->exclusionDurationMode = GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum::EXCLUDE_PERMANENTLY;
    $request->googleAnalyticsAdminV1alphaAudienceInput->filterClauses = [
        new GoogleAnalyticsAdminV1alphaAudienceFilterClause(),
        new GoogleAnalyticsAdminV1alphaAudienceFilterClause(),
        new GoogleAnalyticsAdminV1alphaAudienceFilterClause(),
    ];
    $request->googleAnalyticsAdminV1alphaAudienceInput->membershipDurationDays = 83112;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'quibusdam';
    $request->parent = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new AnalyticsadminPropertiesAudiencesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAudiencesCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaAudience !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesAudiencesList

Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAudiencesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAudiencesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAudiencesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesAudiencesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesAudiencesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 164940;
    $request->pageToken = 'assumenda';
    $request->parent = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AnalyticsadminPropertiesAudiencesListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesAudiencesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesAudiencesList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListAudiencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesBigQueryLinksList

Lists BigQuery Links on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesBigQueryLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesBigQueryLinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesBigQueryLinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesBigQueryLinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesBigQueryLinksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->pageSize = 248753;
    $request->pageToken = 'eligendi';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new AnalyticsadminPropertiesBigQueryLinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesBigQueryLinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesBigQueryLinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListBigQueryLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesChannelGroupsCreate

Creates a ChannelGroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesChannelGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaChannelGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaGroupingRule;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaChannelGroupFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaChannelGroupFilterInListFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaChannelGroupFilterStringFilterMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesChannelGroupsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesChannelGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaChannelGroupInput = new GoogleAnalyticsAdminV1alphaChannelGroupInput();
    $request->googleAnalyticsAdminV1alphaChannelGroupInput->description = 'officia';
    $request->googleAnalyticsAdminV1alphaChannelGroupInput->displayName = 'dolor';
    $request->googleAnalyticsAdminV1alphaChannelGroupInput->groupingRule = [
        new GoogleAnalyticsAdminV1alphaGroupingRule(),
        new GoogleAnalyticsAdminV1alphaGroupingRule(),
        new GoogleAnalyticsAdminV1alphaGroupingRule(),
        new GoogleAnalyticsAdminV1alphaGroupingRule(),
    ];
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->parent = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new AnalyticsadminPropertiesChannelGroupsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesChannelGroupsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaChannelGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesChannelGroupsList

Lists ChannelGroups on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesChannelGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesChannelGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesChannelGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesChannelGroupsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesChannelGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 313218;
    $request->pageToken = 'accusamus';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new AnalyticsadminPropertiesChannelGroupsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesChannelGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesChannelGroupsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListChannelGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesConversionEventsCreate

Creates a conversion event with the specified attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaConversionEventInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesConversionEventsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaConversionEventInput = new GoogleAnalyticsAdminV1alphaConversionEventInput();
    $request->googleAnalyticsAdminV1alphaConversionEventInput->eventName = 'blanditiis';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'deserunt';
    $request->key = 'nisi';
    $request->oauthToken = 'vel';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new AnalyticsadminPropertiesConversionEventsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesConversionEventsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaConversionEvent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesConversionEventsList

Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesConversionEventsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesConversionEventsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->oauthToken = 'suscipit';
    $request->pageSize = 618016;
    $request->pageToken = 'nobis';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new AnalyticsadminPropertiesConversionEventsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesConversionEventsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesConversionEventsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListConversionEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCreate

Creates an "GA4" property with the specified location and attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaPropertyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaPropertyInput = new GoogleAnalyticsAdminV1alphaPropertyInput();
    $request->googleAnalyticsAdminV1alphaPropertyInput->account = 'et';
    $request->googleAnalyticsAdminV1alphaPropertyInput->currencyCode = 'excepturi';
    $request->googleAnalyticsAdminV1alphaPropertyInput->displayName = 'ullam';
    $request->googleAnalyticsAdminV1alphaPropertyInput->industryCategory = GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum::INTERNET_AND_TELECOM;
    $request->googleAnalyticsAdminV1alphaPropertyInput->parent = 'quos';
    $request->googleAnalyticsAdminV1alphaPropertyInput->propertyType = GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum::PROPERTY_TYPE_SUBPROPERTY;
    $request->googleAnalyticsAdminV1alphaPropertyInput->timeZone = 'accusantium';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new AnalyticsadminPropertiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaProperty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCreateConnectedSiteTag

Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCreateConnectedSiteTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaConnectedSiteTag;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCreateConnectedSiteTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCreateConnectedSiteTagRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest = new GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest();
    $request->googleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest->connectedSiteTag = new GoogleAnalyticsAdminV1alphaConnectedSiteTag();
    $request->googleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest->connectedSiteTag->displayName = 'iure';
    $request->googleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest->connectedSiteTag->tagId = 'doloribus';
    $request->googleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest->property = 'debitis';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new AnalyticsadminPropertiesCreateConnectedSiteTagSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCreateConnectedSiteTag($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaCreateConnectedSiteTagResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomDimensionsCreate

Creates a CustomDimension.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCustomDimensionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomDimensionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaCustomDimensionInput = new GoogleAnalyticsAdminV1alphaCustomDimensionInput();
    $request->googleAnalyticsAdminV1alphaCustomDimensionInput->description = 'nihil';
    $request->googleAnalyticsAdminV1alphaCustomDimensionInput->disallowAdsPersonalization = false;
    $request->googleAnalyticsAdminV1alphaCustomDimensionInput->displayName = 'repellat';
    $request->googleAnalyticsAdminV1alphaCustomDimensionInput->parameterName = 'quibusdam';
    $request->googleAnalyticsAdminV1alphaCustomDimensionInput->scope = GoogleAnalyticsAdminV1alphaCustomDimensionScopeEnum::DIMENSION_SCOPE_UNSPECIFIED;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'consequuntur';
    $request->key = 'praesentium';
    $request->oauthToken = 'natus';
    $request->parent = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $requestSecurity = new AnalyticsadminPropertiesCustomDimensionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomDimensionsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaCustomDimension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomDimensionsList

Lists CustomDimensions on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomDimensionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomDimensionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'odit';
    $request->key = 'ea';
    $request->oauthToken = 'accusantium';
    $request->pageSize = 69167;
    $request->pageToken = 'maiores';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new AnalyticsadminPropertiesCustomDimensionsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesCustomDimensionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomDimensionsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListCustomDimensionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomMetricsArchive

Archives a CustomMetric on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsArchiveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomMetricsArchiveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'pariatur' => 'nemo',
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->key = 'aut';
    $request->name = 'Lewis Welch';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new AnalyticsadminPropertiesCustomMetricsArchiveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomMetricsArchive($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomMetricsCreate

Creates a CustomMetric.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCustomMetricInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomMetricsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaCustomMetricInput = new GoogleAnalyticsAdminV1alphaCustomMetricInput();
    $request->googleAnalyticsAdminV1alphaCustomMetricInput->description = 'quis';
    $request->googleAnalyticsAdminV1alphaCustomMetricInput->displayName = 'nesciunt';
    $request->googleAnalyticsAdminV1alphaCustomMetricInput->measurementUnit = GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum::STANDARD;
    $request->googleAnalyticsAdminV1alphaCustomMetricInput->parameterName = 'perferendis';
    $request->googleAnalyticsAdminV1alphaCustomMetricInput->restrictedMetricType = [
        GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum::REVENUE_DATA,
    ];
    $request->googleAnalyticsAdminV1alphaCustomMetricInput->scope = GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum::METRIC_SCOPE_UNSPECIFIED;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nostrum';
    $request->fields = 'hic';
    $request->key = 'recusandae';
    $request->oauthToken = 'omnis';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'perspiciatis';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new AnalyticsadminPropertiesCustomMetricsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomMetricsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaCustomMetric !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesCustomMetricsList

Lists CustomMetrics on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesCustomMetricsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesCustomMetricsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->fields = 'occaecati';
    $request->key = 'rerum';
    $request->oauthToken = 'adipisci';
    $request->pageSize = 992397;
    $request->pageToken = 'earum';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new AnalyticsadminPropertiesCustomMetricsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesCustomMetricsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesCustomMetricsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListCustomMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsCreate

Creates a DataStream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDataStreamInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDataStreamTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaDataStreamInput = new GoogleAnalyticsAdminV1alphaDataStreamInput();
    $request->googleAnalyticsAdminV1alphaDataStreamInput->androidAppStreamData = new GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput();
    $request->googleAnalyticsAdminV1alphaDataStreamInput->androidAppStreamData->packageName = 'provident';
    $request->googleAnalyticsAdminV1alphaDataStreamInput->displayName = 'nobis';
    $request->googleAnalyticsAdminV1alphaDataStreamInput->iosAppStreamData = new GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput();
    $request->googleAnalyticsAdminV1alphaDataStreamInput->iosAppStreamData->bundleId = 'libero';
    $request->googleAnalyticsAdminV1alphaDataStreamInput->type = GoogleAnalyticsAdminV1alphaDataStreamTypeEnum::IOS_APP_DATA_STREAM;
    $request->googleAnalyticsAdminV1alphaDataStreamInput->webStreamData = new GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput();
    $request->googleAnalyticsAdminV1alphaDataStreamInput->webStreamData->defaultUri = 'quaerat';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->key = 'dolor';
    $request->oauthToken = 'qui';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaDataStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsEventCreateRulesCreate

Creates an EventCreateRule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaEventCreateRuleInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaMatchingCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaMatchingConditionComparisonTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaParameterMutation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaEventCreateRuleInput = new GoogleAnalyticsAdminV1alphaEventCreateRuleInput();
    $request->googleAnalyticsAdminV1alphaEventCreateRuleInput->destinationEvent = 'dignissimos';
    $request->googleAnalyticsAdminV1alphaEventCreateRuleInput->eventConditions = [
        new GoogleAnalyticsAdminV1alphaMatchingCondition(),
        new GoogleAnalyticsAdminV1alphaMatchingCondition(),
        new GoogleAnalyticsAdminV1alphaMatchingCondition(),
        new GoogleAnalyticsAdminV1alphaMatchingCondition(),
    ];
    $request->googleAnalyticsAdminV1alphaEventCreateRuleInput->parameterMutations = [
        new GoogleAnalyticsAdminV1alphaParameterMutation(),
    ];
    $request->googleAnalyticsAdminV1alphaEventCreateRuleInput->sourceCopyParameters = false;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'ipsa';
    $request->oauthToken = 'iure';
    $request->parent = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsEventCreateRulesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsEventCreateRulesCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaEventCreateRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsEventCreateRulesList

Lists EventCreateRules on a web data stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsEventCreateRulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsEventCreateRulesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'atque';
    $request->key = 'sit';
    $request->oauthToken = 'fugiat';
    $request->pageSize = 67249;
    $request->pageToken = 'soluta';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDataStreamsEventCreateRulesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsEventCreateRulesList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListEventCreateRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsList

Lists DataStreams on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'asperiores';
    $request->key = 'nihil';
    $request->oauthToken = 'ipsum';
    $request->pageSize = 456015;
    $request->pageToken = 'id';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDataStreamsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListDataStreamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate

Creates a measurement protocol secret.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaMeasurementProtocolSecretInput = new GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput();
    $request->googleAnalyticsAdminV1alphaMeasurementProtocolSecretInput->displayName = 'optio';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->oauthToken = 'provident';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'similique';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaMeasurementProtocolSecret !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList

Returns child MeasurementProtocolSecrets under the specified parent Property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'vel';
    $request->key = 'quod';
    $request->oauthToken = 'officiis';
    $request->pageSize = 185636;
    $request->pageToken = 'dolorum';
    $request->parent = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDeleteConnectedSiteTag

Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDeleteConnectedSiteTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDeleteConnectedSiteTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDeleteConnectedSiteTagRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest = new GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest();
    $request->googleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest->property = 'quisquam';
    $request->googleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest->tagId = 'tenetur';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'numquam';
    $request->key = 'enim';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new AnalyticsadminPropertiesDeleteConnectedSiteTagSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDeleteConnectedSiteTag($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove

Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'neque' => 'sed',
        'vel' => 'libero',
        'voluptas' => 'deserunt',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'qui';
    $request->key = 'cupiditate';
    $request->name = 'Miss Jody Rogahn';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel

Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'quam' => 'molestias',
        'temporibus' => 'qui',
    ];
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magni';
    $request->fields = 'odio';
    $request->key = 'sunt';
    $request->name = 'Miss Candice Weimann';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate

Creates a DisplayVideo360AdvertiserLinkProposal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput = new GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput();
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput->adsPersonalizationEnabled = false;
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput->advertiserId = 'nobis';
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput->campaignDataSharingEnabled = false;
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput->costDataSharingEnabled = false;
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput->validationEmail = 'quos';
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolore';
    $request->parent = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList

Lists DisplayVideo360AdvertiserLinkProposals on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'itaque';
    $request->fields = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'repellendus';
    $request->pageSize = 785153;
    $request->pageToken = 'doloribus';
    $request->parent = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate

Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput = new GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput();
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput->adsPersonalizationEnabled = false;
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput->advertiserId = 'laudantium';
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput->campaignDataSharingEnabled = false;
    $request->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput->costDataSharingEnabled = false;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quisquam';
    $request->key = 'vero';
    $request->oauthToken = 'omnis';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesDisplayVideo360AdvertiserLinksList

Lists all DisplayVideo360AdvertiserLinks on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'hic';
    $request->key = 'distinctio';
    $request->oauthToken = 'quod';
    $request->pageSize = 486160;
    $request->pageToken = 'similique';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesDisplayVideo360AdvertiserLinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesExpandedDataSetsCreate

Creates a ExpandedDataSet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesExpandedDataSetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaExpandedDataSetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesExpandedDataSetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesExpandedDataSetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput = new GoogleAnalyticsAdminV1alphaExpandedDataSetInput();
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->description = 'illum';
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression();
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->andGroup = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList();
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->andGroup->filterExpressions = [
        new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilter();
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->fieldName = 'natus';
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->inListFilter = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter();
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->inListFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->inListFilter->values = [
        'aut',
        'voluptatibus',
        'exercitationem',
        'nulla',
    ];
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->stringFilter = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter();
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->stringFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->stringFilter->matchType = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum::MATCH_TYPE_UNSPECIFIED;
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->filter->stringFilter->value = 'porro';
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionFilterExpression->notExpression = new GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression();
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->dimensionNames = [
        'doloribus',
        'iusto',
        'eligendi',
        'ducimus',
    ];
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->displayName = 'alias';
    $request->googleAnalyticsAdminV1alphaExpandedDataSetInput->metricNames = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'magnam';
    $request->key = 'ratione';
    $request->oauthToken = 'ex';
    $request->parent = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new AnalyticsadminPropertiesExpandedDataSetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesExpandedDataSetsCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaExpandedDataSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesExpandedDataSetsList

Lists ExpandedDataSets on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesExpandedDataSetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesExpandedDataSetsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesExpandedDataSetsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesExpandedDataSetsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesExpandedDataSetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'voluptatibus';
    $request->key = 'nostrum';
    $request->oauthToken = 'sapiente';
    $request->pageSize = 788873;
    $request->pageToken = 'saepe';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new AnalyticsadminPropertiesExpandedDataSetsListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesExpandedDataSetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesExpandedDataSetsList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListExpandedDataSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut

Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest = new GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest();
    $request->googleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutRequest->property = 'inventore';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quo';
    $request->fields = 'consectetur';
    $request->key = 'recusandae';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';

    $requestSecurity = new AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOutSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesFetchConnectedGa4Property

Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchConnectedGa4PropertyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchConnectedGa4PropertySecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchConnectedGa4PropertySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFetchConnectedGa4PropertySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesFetchConnectedGa4PropertyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'impedit';
    $request->key = 'aliquam';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->property = 'accusamus';
    $request->quotaUser = 'inventore';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'et';

    $requestSecurity = new AnalyticsadminPropertiesFetchConnectedGa4PropertySecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesFetchConnectedGa4PropertySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesFetchConnectedGa4Property($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesFirebaseLinksCreate

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaFirebaseLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesFirebaseLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaFirebaseLinkInput = new GoogleAnalyticsAdminV1alphaFirebaseLinkInput();
    $request->googleAnalyticsAdminV1alphaFirebaseLinkInput->project = 'laborum';
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'autem';
    $request->key = 'nobis';
    $request->oauthToken = 'quas';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new AnalyticsadminPropertiesFirebaseLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesFirebaseLinksCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaFirebaseLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesFirebaseLinksList

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesFirebaseLinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesFirebaseLinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'provident';
    $request->key = 'ipsa';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 301598;
    $request->pageToken = 'odio';
    $request->parent = 'eius';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new AnalyticsadminPropertiesFirebaseLinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesFirebaseLinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesFirebaseLinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListFirebaseLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesGoogleAdsLinksCreate

Creates a GoogleAdsLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesGoogleAdsLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaGoogleAdsLinkInput = new GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput();
    $request->googleAnalyticsAdminV1alphaGoogleAdsLinkInput->adsPersonalizationEnabled = false;
    $request->googleAnalyticsAdminV1alphaGoogleAdsLinkInput->customerId = 'reprehenderit';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->fields = 'eum';
    $request->key = 'suscipit';
    $request->oauthToken = 'assumenda';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new AnalyticsadminPropertiesGoogleAdsLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesGoogleAdsLinksCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaGoogleAdsLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesGoogleAdsLinksList

Lists GoogleAdsLinks on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesGoogleAdsLinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'quo';
    $request->pageSize = 681359;
    $request->pageToken = 'eius';
    $request->parent = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new AnalyticsadminPropertiesGoogleAdsLinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesGoogleAdsLinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListGoogleAdsLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesList

Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'aspernatur';
    $request->filter = 'sequi';
    $request->key = 'quo';
    $request->oauthToken = 'esse';
    $request->pageSize = 925164;
    $request->pageToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->showDeleted = false;
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new AnalyticsadminPropertiesListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListPropertiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesListConnectedSiteTags

Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListConnectedSiteTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListConnectedSiteTagsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListConnectedSiteTagsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesListConnectedSiteTagsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesListConnectedSiteTagsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaListConnectedSiteTagsRequest = new GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest();
    $request->googleAnalyticsAdminV1alphaListConnectedSiteTagsRequest->property = 'nihil';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new AnalyticsadminPropertiesListConnectedSiteTagsSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesListConnectedSiteTagsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesListConnectedSiteTags($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListConnectedSiteTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesRunAccessReport

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaRunAccessReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessDateRange;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessFilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessBetweenFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaNumericValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessInListFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessNumericFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessStringFilter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessDimension;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessMetric;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderByOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesRunAccessReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesRunAccessReportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest = new GoogleAnalyticsAdminV1alphaRunAccessReportRequest();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dateRanges = [
        new GoogleAnalyticsAdminV1alphaAccessDateRange(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter = new GoogleAnalyticsAdminV1alphaAccessFilterExpression();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter = new GoogleAnalyticsAdminV1alphaAccessFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter = new GoogleAnalyticsAdminV1alphaAccessBetweenFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->fromValue = new GoogleAnalyticsAdminV1alphaNumericValue();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->fromValue->doubleValue = 7836.48;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->fromValue->int64Value = 'eum';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->toValue = new GoogleAnalyticsAdminV1alphaNumericValue();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->toValue->doubleValue = 5564.29;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->betweenFilter->toValue->int64Value = 'praesentium';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->fieldName = 'consequuntur';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->inListFilter = new GoogleAnalyticsAdminV1alphaAccessInListFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->inListFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->inListFilter->values = [
        'fugit',
        'fuga',
        'mollitia',
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter = new GoogleAnalyticsAdminV1alphaAccessNumericFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->operation = GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum::EQUAL;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->value = new GoogleAnalyticsAdminV1alphaNumericValue();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->value->doubleValue = 5392.24;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->numericFilter->value->int64Value = 'explicabo';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter = new GoogleAnalyticsAdminV1alphaAccessStringFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter->matchType = GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum::BEGINS_WITH;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->accessFilter->stringFilter->value = 'nisi';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->andGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->andGroup->expressions = [
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->notExpression = new GoogleAnalyticsAdminV1alphaAccessFilterExpression();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->orGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensionFilter->orGroup->expressions = [
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->dimensions = [
        new GoogleAnalyticsAdminV1alphaAccessDimension(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->limit = 'ratione';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter = new GoogleAnalyticsAdminV1alphaAccessFilterExpression();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter = new GoogleAnalyticsAdminV1alphaAccessFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter = new GoogleAnalyticsAdminV1alphaAccessBetweenFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->fromValue = new GoogleAnalyticsAdminV1alphaNumericValue();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->fromValue->doubleValue = 1294.12;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->fromValue->int64Value = 'saepe';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->toValue = new GoogleAnalyticsAdminV1alphaNumericValue();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->toValue->doubleValue = 5789.22;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->betweenFilter->toValue->int64Value = 'atque';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->fieldName = 'et';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->inListFilter = new GoogleAnalyticsAdminV1alphaAccessInListFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->inListFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->inListFilter->values = [
        'eveniet',
        'accusamus',
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->numericFilter = new GoogleAnalyticsAdminV1alphaAccessNumericFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->operation = GoogleAnalyticsAdminV1alphaAccessNumericFilterOperationEnum::OPERATION_UNSPECIFIED;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->value = new GoogleAnalyticsAdminV1alphaNumericValue();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->value->doubleValue = 4586.04;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->numericFilter->value->int64Value = 'quod';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->stringFilter = new GoogleAnalyticsAdminV1alphaAccessStringFilter();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->stringFilter->caseSensitive = false;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->stringFilter->matchType = GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum::FULL_REGEXP;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->accessFilter->stringFilter->value = 'vero';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->andGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->andGroup->expressions = [
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->notExpression = new GoogleAnalyticsAdminV1alphaAccessFilterExpression();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->orGroup = new GoogleAnalyticsAdminV1alphaAccessFilterExpressionList();
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metricFilter->orGroup->expressions = [
        new GoogleAnalyticsAdminV1alphaAccessFilterExpression(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->metrics = [
        new GoogleAnalyticsAdminV1alphaAccessMetric(),
        new GoogleAnalyticsAdminV1alphaAccessMetric(),
        new GoogleAnalyticsAdminV1alphaAccessMetric(),
        new GoogleAnalyticsAdminV1alphaAccessMetric(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->offset = 'vel';
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->orderBys = [
        new GoogleAnalyticsAdminV1alphaAccessOrderBy(),
        new GoogleAnalyticsAdminV1alphaAccessOrderBy(),
        new GoogleAnalyticsAdminV1alphaAccessOrderBy(),
    ];
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->returnEntityQuota = false;
    $request->googleAnalyticsAdminV1alphaRunAccessReportRequest->timeZone = 'molestiae';
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->entity = 'distinctio';
    $request->fields = 'eligendi';
    $request->key = 'sit';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new AnalyticsadminPropertiesRunAccessReportSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesRunAccessReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesRunAccessReport($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaRunAccessReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesSearchAds360LinksCreate

Creates a SearchAds360Link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSearchAds360LinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaSearchAds360LinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSearchAds360LinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesSearchAds360LinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaSearchAds360LinkInput = new GoogleAnalyticsAdminV1alphaSearchAds360LinkInput();
    $request->googleAnalyticsAdminV1alphaSearchAds360LinkInput->adsPersonalizationEnabled = false;
    $request->googleAnalyticsAdminV1alphaSearchAds360LinkInput->advertiserId = 'consequatur';
    $request->googleAnalyticsAdminV1alphaSearchAds360LinkInput->campaignDataSharingEnabled = false;
    $request->googleAnalyticsAdminV1alphaSearchAds360LinkInput->costDataSharingEnabled = false;
    $request->googleAnalyticsAdminV1alphaSearchAds360LinkInput->siteStatsSharingEnabled = false;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'consectetur';
    $request->key = 'esse';
    $request->oauthToken = 'blanditiis';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new AnalyticsadminPropertiesSearchAds360LinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesSearchAds360LinksCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaSearchAds360Link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesSearchAds360LinksList

Lists all SearchAds360Links on a property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSearchAds360LinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSearchAds360LinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesSearchAds360LinksListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'error';
    $request->fields = 'sint';
    $request->key = 'pariatur';
    $request->oauthToken = 'possimus';
    $request->pageSize = 157632;
    $request->pageToken = 'eveniet';
    $request->parent = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new AnalyticsadminPropertiesSearchAds360LinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesSearchAds360LinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListSearchAds360LinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut

Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest = new GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest();
    $request->googleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest->optOut = false;
    $request->googleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest->property = 'similique';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tenetur';
    $request->fields = 'quae';
    $request->key = 'earum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOutSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksAudit

Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksAuditRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaAuditUserLinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksAuditSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksAuditSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksAuditSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksAuditRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaAuditUserLinksRequest = new GoogleAnalyticsAdminV1alphaAuditUserLinksRequest();
    $request->googleAnalyticsAdminV1alphaAuditUserLinksRequest->pageSize = 742238;
    $request->googleAnalyticsAdminV1alphaAuditUserLinksRequest->pageToken = 'accusantium';
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'ullam';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ullam';
    $request->parent = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksAuditSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesUserLinksAuditSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksAudit($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaAuditUserLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksBatchCreate

Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaUserLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput = new GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput();
    $request->googleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput->notifyNewUsers = false;
    $request->googleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput->requests = [
        new GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput(),
        new GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput(),
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'omnis';
    $request->oauthToken = 'tenetur';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksBatchCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksBatchCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaBatchCreateUserLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksBatchDelete

Deletes information about multiple users' links to an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest = new GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest();
    $request->googleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest->requests = [
        new GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest(),
        new GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest(),
    ];
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'iste';
    $request->key = 'temporibus';
    $request->oauthToken = 'accusantium';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksBatchDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksBatchGet

Gets information about multiple users' links to an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksBatchGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'voluptatem';
    $request->key = 'dolor';
    $request->names = [
        'numquam',
        'impedit',
        'explicabo',
    ];
    $request->oauthToken = 'voluptas';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksBatchGetSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesUserLinksBatchGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksBatchGet($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaBatchGetUserLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksBatchUpdate

Updates information about multiple users' links to an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaUserLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksBatchUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput = new GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput();
    $request->googleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput->requests = [
        new GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput(),
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'aperiam';
    $request->key = 'ea';
    $request->oauthToken = 'quaerat';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'maxime';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksBatchUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksBatchUpdate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksCreate

Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaUserLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAnalyticsAdminV1alphaUserLinkInput = new GoogleAnalyticsAdminV1alphaUserLinkInput();
    $request->googleAnalyticsAdminV1alphaUserLinkInput->directRoles = [
        'asperiores',
        'nemo',
        'quae',
    ];
    $request->googleAnalyticsAdminV1alphaUserLinkInput->emailAddress = 'quaerat';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'ab';
    $request->key = 'adipisci';
    $request->notifyNewUser = false;
    $request->oauthToken = 'fuga';
    $request->parent = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksCreate($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaUserLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksDelete

Deletes a user link on an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'vel';
    $request->key = 'ducimus';
    $request->name = 'Cecil Grant';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'corporis';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksGet

Gets information about a user's link to an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'aliquid';
    $request->key = 'aperiam';
    $request->name = 'Glenn Kirlin';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksGetSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesUserLinksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksGet($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaUserLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksList

Lists all user links on an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'dolore';
    $request->key = 'sunt';
    $request->oauthToken = 'asperiores';
    $request->pageSize = 241545;
    $request->pageToken = 'non';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'a';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksListSecurity();
    $requestSecurity->option1 = new AnalyticsadminPropertiesUserLinksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListUserLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyticsadminPropertiesUserLinksPatch

Updates a user link on an account or property.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalyticsAdminV1alphaUserLinkInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminPropertiesUserLinksPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminPropertiesUserLinksPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAnalyticsAdminV1alphaUserLinkInput = new GoogleAnalyticsAdminV1alphaUserLinkInput();
    $request->googleAnalyticsAdminV1alphaUserLinkInput->directRoles = [
        'corporis',
    ];
    $request->googleAnalyticsAdminV1alphaUserLinkInput->emailAddress = 'harum';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptates';
    $request->fields = 'libero';
    $request->key = 'vitae';
    $request->name = 'Otis Goldner';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->updateMask = 'minima';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AnalyticsadminPropertiesUserLinksPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->properties->analyticsadminPropertiesUserLinksPatch($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaUserLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
