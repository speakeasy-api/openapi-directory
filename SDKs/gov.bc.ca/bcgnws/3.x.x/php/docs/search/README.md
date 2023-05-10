# search

### Available Operations

* [getNamesChanges](#getnameschanges) - Search for names with metadata changes in a given period
* [getNamesDecisionsRecent](#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [getNamesDecisionsYear](#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [getNamesInside](#getnamesinside) - Search in a geographic area
* [getNamesNear](#getnamesnear) - Search near to a geographic point
* [getNamesNotOfficialSearch](#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [getNamesOfficialSearch](#getnamesofficialsearch) - Search by name, limit to official names only
* [getNamesSearch](#getnamessearch) - Search by name

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
    $request->featureCategory = 'numquam';
    $request->featureClass = 'commodi';
    $request->featureType = 'quam';
    $request->fromDate = 474697;
    $request->itemsPerPage = 244425;
    $request->outputFormat = GetNamesChangesOutputFormatEnum::KML;
    $request->outputSRS = GetNamesChangesOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->outputStyle = GetNamesChangesOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesChangesSortByEnum::NAME;
    $request->startIndex = 674752;
    $request->toDate = 656330;

    $response = $sdk->search->getNamesChanges($request);

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
    $request->days = 317202;
    $request->embed = GetNamesDecisionsRecentEmbedEnum::ZERO;
    $request->featureCategory = 'quo';
    $request->featureClass = 'sequi';
    $request->featureType = 'tenetur';
    $request->itemsPerPage = 368725;
    $request->outputFormat = GetNamesDecisionsRecentOutputFormatEnum::KML;
    $request->outputSRS = GetNamesDecisionsRecentOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
    $request->outputStyle = GetNamesDecisionsRecentOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesDecisionsRecentSortByEnum::NAME;
    $request->startIndex = 622846;

    $response = $sdk->search->getNamesDecisionsRecent($request);

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
    $request->embed = GetNamesDecisionsYearEmbedEnum::ONE;
    $request->featureCategory = 'laborum';
    $request->featureClass = 'quasi';
    $request->featureType = 'reiciendis';
    $request->itemsPerPage = 976460;
    $request->outputFormat = GetNamesDecisionsYearOutputFormatEnum::CSV;
    $request->outputSRS = GetNamesDecisionsYearOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
    $request->outputStyle = GetNamesDecisionsYearOutputStyleEnum::DETAIL;
    $request->sortBy = GetNamesDecisionsYearSortByEnum::DECISION_DATE;
    $request->startIndex = 55714;
    $request->year = 604846;

    $response = $sdk->search->getNamesDecisionsYear($request);

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
    $request->bbox = 'voluptate';
    $request->embed = GetNamesInsideEmbedEnum::ONE;
    $request->featureCategory = 'perferendis';
    $request->featureClass = 'doloremque';
    $request->featureType = 'reprehenderit';
    $request->itemsPerPage = 282807;
    $request->outputFormat = GetNamesInsideOutputFormatEnum::CSV;
    $request->outputSRS = GetNamesInsideOutputSrsEnum::FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
    $request->outputStyle = GetNamesInsideOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesInsideSortByEnum::NAME;
    $request->startIndex = 480894;

    $response = $sdk->search->getNamesInside($request);

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
    $request->distance = 'dicta';
    $request->embed = GetNamesNearEmbedEnum::ONE;
    $request->featureCategory = 'enim';
    $request->featureClass = 'accusamus';
    $request->featurePoint = 'commodi';
    $request->featureType = 'repudiandae';
    $request->itemsPerPage = 64147;
    $request->outputFormat = GetNamesNearOutputFormatEnum::JSON;
    $request->outputSRS = GetNamesNearOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
    $request->outputStyle = GetNamesNearOutputStyleEnum::DETAIL;
    $request->sortBy = GetNamesNearSortByEnum::FEATURE_TYPE;
    $request->startIndex = 865103;

    $response = $sdk->search->getNamesNear($request);

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
    $request->embed = GetNamesNotOfficialSearchEmbedEnum::ZERO;
    $request->exactSpelling = GetNamesNotOfficialSearchExactSpellingEnum::ONE;
    $request->featureCategory = 'rem';
    $request->featureClass = 'voluptates';
    $request->featureType = 'quasi';
    $request->itemsPerPage = 921158;
    $request->name = 'Patrick Ward';
    $request->outputFormat = GetNamesNotOfficialSearchOutputFormatEnum::JSON;
    $request->outputSRS = GetNamesNotOfficialSearchOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
    $request->outputStyle = GetNamesNotOfficialSearchOutputStyleEnum::DETAIL;
    $request->sortBy = GetNamesNotOfficialSearchSortByEnum::RELEVANCE;
    $request->startIndex = 647174;

    $response = $sdk->search->getNamesNotOfficialSearch($request);

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
    $request->exactSpelling = GetNamesOfficialSearchExactSpellingEnum::ONE;
    $request->featureCategory = 'labore';
    $request->featureClass = 'modi';
    $request->featureType = 'qui';
    $request->itemsPerPage = 397821;
    $request->name = 'Isaac Aufderhar';
    $request->outputFormat = GetNamesOfficialSearchOutputFormatEnum::XML;
    $request->outputSRS = GetNamesOfficialSearchOutputSrsEnum::FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
    $request->outputStyle = GetNamesOfficialSearchOutputStyleEnum::SUMMARY;
    $request->sortBy = GetNamesOfficialSearchSortByEnum::FEATURE_TYPE;
    $request->startIndex = 569618;

    $response = $sdk->search->getNamesOfficialSearch($request);

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
    $request->featureCategory = 'tempore';
    $request->featureClass = 'labore';
    $request->featureType = 'delectus';
    $request->itemsPerPage = 433288;
    $request->name = 'Sheri Mayer';
    $request->outputFormat = GetNamesSearchOutputFormatEnum::CSV;
    $request->outputSRS = GetNamesSearchOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->outputStyle = GetNamesSearchOutputStyleEnum::DETAIL;
    $request->sortBy = GetNamesSearchSortByEnum::RELEVANCE;
    $request->startIndex = 891555;

    $response = $sdk->search->getNamesSearch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
