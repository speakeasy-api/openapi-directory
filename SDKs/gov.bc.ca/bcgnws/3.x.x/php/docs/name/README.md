# name

### Available Operations

* [getNamesChanges](#getnameschanges) - Search for names with metadata changes in a given period
* [getNamesDecisionsRecent](#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [getNamesDecisionsYear](#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [getNamesInside](#getnamesinside) - Search in a geographic area
* [getNamesNear](#getnamesnear) - Search near to a geographic point
* [getNamesNotOfficialSearch](#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [getNamesOfficialSearch](#getnamesofficialsearch) - Search by name, limit to official names only
* [getNamesSearch](#getnamessearch) - Search by name
* [getNamesNameIdOutputFormat](#getnamesnameidoutputformat) - Get a name by its nameId

## getNamesChanges

Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesChangesEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesChangesOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesChangesOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesChangesOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesChangesSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesChangesRequest();
    $request->embed = GetNamesChangesEmbedEnum::ONE;
    $request->featureCategory = 'corrupti';
    $request->featureClass = 'illum';
    $request->featureType = 'vel';
    $request->fromDate = 623564;
    $request->itemsPerPage = 645894;
    $request->outputFormat = GetNamesChangesOutputFormatEnum::XML;
    $request->outputSRS = GetNamesChangesOutputSrsEnum::THREE_THOUSAND_EIGHT_HUNDRED_AND_FIFTY_SEVEN;
    $request->outputStyle = GetNamesChangesOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesChangesSortByEnum::DECISION_DATE;
    $request->startIndex = 56713;
    $request->toDate = 963663;

    $response = $sdk->name->getNamesChanges($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesDecisionsRecent

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsRecentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsRecentEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsRecentOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsRecentOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsRecentOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsRecentSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesDecisionsRecentRequest();
    $request->days = 272656;
    $request->embed = GetNamesDecisionsRecentEmbedEnum::ZERO;
    $request->featureCategory = 'molestiae';
    $request->featureClass = 'minus';
    $request->featureType = 'placeat';
    $request->itemsPerPage = 528895;
    $request->outputFormat = GetNamesDecisionsRecentOutputFormatEnum::XML;
    $request->outputSRS = GetNamesDecisionsRecentOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->outputStyle = GetNamesDecisionsRecentOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesDecisionsRecentSortByEnum::DECISION_DATE;
    $request->startIndex = 836079;

    $response = $sdk->name->getNamesDecisionsRecent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesDecisionsYear

Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsYearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsYearEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsYearOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsYearOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsYearOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesDecisionsYearSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesDecisionsYearRequest();
    $request->embed = GetNamesDecisionsYearEmbedEnum::ZERO;
    $request->featureCategory = 'quis';
    $request->featureClass = 'veritatis';
    $request->featureType = 'deserunt';
    $request->itemsPerPage = 20218;
    $request->outputFormat = GetNamesDecisionsYearOutputFormatEnum::XML;
    $request->outputSRS = GetNamesDecisionsYearOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->outputStyle = GetNamesDecisionsYearOutputStyleEnum::DETAIL;
    $request->sortBy = GetNamesDecisionsYearSortByEnum::DECISION_DATE;
    $request->startIndex = 140350;
    $request->year = 870013;

    $response = $sdk->name->getNamesDecisionsYear($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesInside

Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesInsideRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesInsideEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesInsideOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesInsideOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesInsideOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesInsideSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesInsideRequest();
    $request->bbox = 'at';
    $request->embed = GetNamesInsideEmbedEnum::ONE;
    $request->featureCategory = 'molestiae';
    $request->featureClass = 'quod';
    $request->featureType = 'quod';
    $request->itemsPerPage = 461479;
    $request->outputFormat = GetNamesInsideOutputFormatEnum::KML;
    $request->outputSRS = GetNamesInsideOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->outputStyle = GetNamesInsideOutputStyleEnum::DETAIL;
    $request->sortBy = GetNamesInsideSortByEnum::NAME;
    $request->startIndex = 720633;

    $response = $sdk->name->getNamesInside($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesNear

Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNearRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNearEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNearOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNearOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNearOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNearSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesNearRequest();
    $request->distance = 'officia';
    $request->embed = GetNamesNearEmbedEnum::ONE;
    $request->featureCategory = 'fugit';
    $request->featureClass = 'deleniti';
    $request->featurePoint = 'hic';
    $request->featureType = 'optio';
    $request->itemsPerPage = 521848;
    $request->outputFormat = GetNamesNearOutputFormatEnum::JSON;
    $request->outputSRS = GetNamesNearOutputSrsEnum::THREE_THOUSAND_EIGHT_HUNDRED_AND_FIFTY_SEVEN;
    $request->outputStyle = GetNamesNearOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesNearSortByEnum::NAME;
    $request->startIndex = 186332;

    $response = $sdk->name->getNamesNear($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesNotOfficialSearch

Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNotOfficialSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNotOfficialSearchEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNotOfficialSearchExactSpellingEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNotOfficialSearchOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNotOfficialSearchOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNotOfficialSearchOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNotOfficialSearchSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesNotOfficialSearchRequest();
    $request->embed = GetNamesNotOfficialSearchEmbedEnum::ONE;
    $request->exactSpelling = GetNamesNotOfficialSearchExactSpellingEnum::ONE;
    $request->featureCategory = 'esse';
    $request->featureClass = 'ipsum';
    $request->featureType = 'excepturi';
    $request->itemsPerPage = 135218;
    $request->name = 'Cathy Mosciski';
    $request->outputFormat = GetNamesNotOfficialSearchOutputFormatEnum::JSON;
    $request->outputSRS = GetNamesNotOfficialSearchOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->outputStyle = GetNamesNotOfficialSearchOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesNotOfficialSearchSortByEnum::DECISION_DATE;
    $request->startIndex = 902599;

    $response = $sdk->name->getNamesNotOfficialSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesOfficialSearch

Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesOfficialSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesOfficialSearchEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesOfficialSearchExactSpellingEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesOfficialSearchOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesOfficialSearchOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesOfficialSearchOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesOfficialSearchSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesOfficialSearchRequest();
    $request->embed = GetNamesOfficialSearchEmbedEnum::ONE;
    $request->exactSpelling = GetNamesOfficialSearchExactSpellingEnum::ZERO;
    $request->featureCategory = 'corporis';
    $request->featureClass = 'iste';
    $request->featureType = 'iure';
    $request->itemsPerPage = 902349;
    $request->name = 'Roger Beier';
    $request->outputFormat = GetNamesOfficialSearchOutputFormatEnum::KML;
    $request->outputSRS = GetNamesOfficialSearchOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
    $request->outputStyle = GetNamesOfficialSearchOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesOfficialSearchSortByEnum::RELEVANCE;
    $request->startIndex = 358152;

    $response = $sdk->name->getNamesOfficialSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesSearch

Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSearchEmbedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSearchExactSpellingEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSearchOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSearchOutputSrsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSearchOutputStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesSearchSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesSearchRequest();
    $request->embed = GetNamesSearchEmbedEnum::ZERO;
    $request->exactSpelling = GetNamesSearchExactSpellingEnum::ONE;
    $request->featureCategory = 'enim';
    $request->featureClass = 'omnis';
    $request->featureType = 'nemo';
    $request->itemsPerPage = 325047;
    $request->name = 'Brian Kessler';
    $request->outputFormat = GetNamesSearchOutputFormatEnum::CSV;
    $request->outputSRS = GetNamesSearchOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->outputStyle = GetNamesSearchOutputStyleEnum::DETAIL;
    $request->sortBy = GetNamesSearchSortByEnum::RELEVANCE;
    $request->startIndex = 635059;

    $response = $sdk->name->getNamesSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesNameIdOutputFormat

Get information about the geographical name with the specified nameId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNameIdOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesNameIdOutputFormatOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesNameIdOutputFormatRequest();
    $request->nameId = 161309;
    $request->outputFormat = GetNamesNameIdOutputFormatOutputFormatEnum::HTML;

    $response = $sdk->name->getNamesNameIdOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
