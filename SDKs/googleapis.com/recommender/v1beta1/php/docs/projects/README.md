# projects

### Available Operations

* [recommenderProjectsLocationsInsightTypesInsightsList](#recommenderprojectslocationsinsighttypesinsightslist) - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
* [recommenderProjectsLocationsInsightTypesInsightsMarkAccepted](#recommenderprojectslocationsinsighttypesinsightsmarkaccepted) - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
* [recommenderProjectsLocationsRecommendersRecommendationsGet](#recommenderprojectslocationsrecommendersrecommendationsget) - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsList](#recommenderprojectslocationsrecommendersrecommendationslist) - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed](#recommenderprojectslocationsrecommendersrecommendationsmarkclaimed) - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkDismissed](#recommenderprojectslocationsrecommendersrecommendationsmarkdismissed) - Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkFailed](#recommenderprojectslocationsrecommendersrecommendationsmarkfailed) - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded](#recommenderprojectslocationsrecommendersrecommendationsmarksucceeded) - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
* [recommenderProjectsLocationsRecommendersUpdateConfig](#recommenderprojectslocationsrecommendersupdateconfig) - Updates a Recommender Config. This will create a new revision of the config.

## recommenderProjectsLocationsInsightTypesInsightsList

Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsInsightTypesInsightsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsInsightTypesInsightsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsInsightTypesInsightsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->pageSize = 528895;
    $request->pageToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new RecommenderProjectsLocationsInsightTypesInsightsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsInsightTypesInsightsList($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1ListInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsInsightTypesInsightsMarkAccepted

Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommenderV1beta1MarkInsightAcceptedRequest = new GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest();
    $request->googleCloudRecommenderV1beta1MarkInsightAcceptedRequest->etag = 'quis';
    $request->googleCloudRecommenderV1beta1MarkInsightAcceptedRequest->stateMetadata = [
        'deserunt' => 'perferendis',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->key = 'odit';
    $request->name = 'Wilfred Wolff';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsInsightTypesInsightsMarkAccepted($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1Insight !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsRecommendersRecommendationsGet

Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsRecommendersRecommendationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->name = 'Irvin Rosenbaum III';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new RecommenderProjectsLocationsRecommendersRecommendationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsRecommendersRecommendationsGet($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1Recommendation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsRecommendersRecommendationsList

Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsRecommendersRecommendationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->filter = 'perferendis';
    $request->key = 'ad';
    $request->oauthToken = 'natus';
    $request->pageSize = 149675;
    $request->pageToken = 'iste';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new RecommenderProjectsLocationsRecommendersRecommendationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsRecommendersRecommendationsList($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1ListRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed

Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecommenderV1beta1MarkRecommendationClaimedRequest = new GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest();
    $request->googleCloudRecommenderV1beta1MarkRecommendationClaimedRequest->etag = 'fuga';
    $request->googleCloudRecommenderV1beta1MarkRecommendationClaimedRequest->stateMetadata = [
        'corporis' => 'iste',
        'iure' => 'saepe',
    ];
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->name = 'Cameron Dach';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1Recommendation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkDismissed

Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommenderV1beta1MarkRecommendationDismissedRequest = new GoogleCloudRecommenderV1beta1MarkRecommendationDismissedRequest();
    $request->googleCloudRecommenderV1beta1MarkRecommendationDismissedRequest->etag = 'minima';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'culpa';
    $request->key = 'doloribus';
    $request->name = 'Juan O'Hara';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new RecommenderProjectsLocationsRecommendersRecommendationsMarkDismissedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsRecommendersRecommendationsMarkDismissed($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1Recommendation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkFailed

Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommenderV1beta1MarkRecommendationFailedRequest = new GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest();
    $request->googleCloudRecommenderV1beta1MarkRecommendationFailedRequest->etag = 'commodi';
    $request->googleCloudRecommenderV1beta1MarkRecommendationFailedRequest->stateMetadata = [
        'molestiae' => 'velit',
        'error' => 'quia',
    ];
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->name = 'Angelica Dietrich';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsRecommendersRecommendationsMarkFailed($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1Recommendation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded

Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudRecommenderV1beta1MarkRecommendationSucceededRequest = new GoogleCloudRecommenderV1beta1MarkRecommendationSucceededRequest();
    $request->googleCloudRecommenderV1beta1MarkRecommendationSucceededRequest->etag = 'temporibus';
    $request->googleCloudRecommenderV1beta1MarkRecommendationSucceededRequest->stateMetadata = [
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
        'nihil' => 'praesentium',
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'voluptate';
    $request->key = 'cum';
    $request->name = 'Sharon Kiehn';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1Recommendation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recommenderProjectsLocationsRecommendersUpdateConfig

Updates a Recommender Config. This will create a new revision of the config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersUpdateConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommenderV1beta1RecommenderConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudRecommenderV1beta1RecommenderGenerationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RecommenderProjectsLocationsRecommendersUpdateConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecommenderProjectsLocationsRecommendersUpdateConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput = new GoogleCloudRecommenderV1beta1RecommenderConfigInput();
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput->annotations = [
        'enim' => 'accusamus',
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
    ];
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput->displayName = 'quidem';
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput->etag = 'molestias';
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput->name = 'Ervin Gleason';
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput->recommenderGenerationConfig = new GoogleCloudRecommenderV1beta1RecommenderGenerationConfig();
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput->recommenderGenerationConfig->params = [
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
        'itaque' => 'incidunt',
        'enim' => 'consequatur',
    ];
    $request->googleCloudRecommenderV1beta1RecommenderConfigInput->updateTime = 'est';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->name = 'Pauline Deckow';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->updateMask = 'magni';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'ipsam';
    $request->validateOnly = false;

    $requestSecurity = new RecommenderProjectsLocationsRecommendersUpdateConfigSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->recommenderProjectsLocationsRecommendersUpdateConfig($request, $requestSecurity);

    if ($response->googleCloudRecommenderV1beta1RecommenderConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
