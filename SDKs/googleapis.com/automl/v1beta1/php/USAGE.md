<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dataset;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ImageClassificationDatasetMetadataClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TablesDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\CorrelationStats;
use \OpenAPI\OpenAPI\Models\Shared\TextClassificationDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\TextClassificationDatasetMetadataClassificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextSentimentDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\TranslationDatasetMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AutomlProjectsLocationsDatasetsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutomlProjectsLocationsDatasetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dataset = new Dataset();
    $request->dataset->createTime = 'provident';
    $request->dataset->description = 'distinctio';
    $request->dataset->displayName = 'quibusdam';
    $request->dataset->etag = 'unde';
    $request->dataset->exampleCount = 857946;
    $request->dataset->imageClassificationDatasetMetadata = new ImageClassificationDatasetMetadata();
    $request->dataset->imageClassificationDatasetMetadata->classificationType = ImageClassificationDatasetMetadataClassificationTypeEnum::MULTICLASS;
    $request->dataset->imageObjectDetectionDatasetMetadata = [
        'vel' => 'error',
        'deserunt' => 'suscipit',
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ];
    $request->dataset->name = 'Ricky Hoppe';
    $request->dataset->tablesDatasetMetadata = new TablesDatasetMetadata();
    $request->dataset->tablesDatasetMetadata->mlUseColumnSpecId = 'placeat';
    $request->dataset->tablesDatasetMetadata->primaryTableSpecId = 'voluptatum';
    $request->dataset->tablesDatasetMetadata->statsUpdateTime = 'iusto';
    $request->dataset->tablesDatasetMetadata->targetColumnCorrelations = [
        'nisi' => new CorrelationStats(),
        'recusandae' => new CorrelationStats(),
        'temporibus' => new CorrelationStats(),
    ];
    $request->dataset->tablesDatasetMetadata->targetColumnSpecId = 'ab';
    $request->dataset->tablesDatasetMetadata->weightColumnSpecId = 'quis';
    $request->dataset->textClassificationDatasetMetadata = new TextClassificationDatasetMetadata();
    $request->dataset->textClassificationDatasetMetadata->classificationType = TextClassificationDatasetMetadataClassificationTypeEnum::CLASSIFICATION_TYPE_UNSPECIFIED;
    $request->dataset->textExtractionDatasetMetadata = [
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->dataset->textSentimentDatasetMetadata = new TextSentimentDatasetMetadata();
    $request->dataset->textSentimentDatasetMetadata->sentimentMax = 870013;
    $request->dataset->translationDatasetMetadata = new TranslationDatasetMetadata();
    $request->dataset->translationDatasetMetadata->sourceLanguageCode = 'at';
    $request->dataset->translationDatasetMetadata->targetLanguageCode = 'maiores';
    $request->dataset->videoClassificationDatasetMetadata = [
        'quod' => 'quod',
        'esse' => 'totam',
    ];
    $request->dataset->videoObjectTrackingDatasetMetadata = [
        'dolorum' => 'dicta',
        'nam' => 'officia',
        'occaecati' => 'fugit',
        'deleniti' => 'hic',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new AutomlProjectsLocationsDatasetsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->automlProjectsLocationsDatasetsCreate($request, $requestSecurity);

    if ($response->dataset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->