# query

### Available Operations

* [cloudsearchQuerySearch](#cloudsearchquerysearch) - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [cloudsearchQuerySourcesList](#cloudsearchquerysourceslist) - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [cloudsearchQuerySuggest](#cloudsearchquerysuggest) - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

## cloudsearchQuerySearch

The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContextAttribute;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceRestriction;
use \OpenAPI\OpenAPI\Models\Shared\FilterOptions;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterLogicOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueFilter;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourcePredefinedSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetOptions;
use \OpenAPI\OpenAPI\Models\Shared\IntegerFacetingOptions;
use \OpenAPI\OpenAPI\Models\Shared\QueryInterpretationOptions;
use \OpenAPI\OpenAPI\Models\Shared\RequestOptions;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptions;
use \OpenAPI\OpenAPI\Models\Shared\SortOptionsSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchQuerySearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchRequest = new SearchRequest();
    $request->searchRequest->contextAttributes = [
        new ContextAttribute(),
        new ContextAttribute(),
        new ContextAttribute(),
        new ContextAttribute(),
    ];
    $request->searchRequest->dataSourceRestrictions = [
        new DataSourceRestriction(),
    ];
    $request->searchRequest->facetOptions = [
        new FacetOptions(),
        new FacetOptions(),
        new FacetOptions(),
    ];
    $request->searchRequest->pageSize = 254356;
    $request->searchRequest->query = 'veritatis';
    $request->searchRequest->queryInterpretationOptions = new QueryInterpretationOptions();
    $request->searchRequest->queryInterpretationOptions->disableNlInterpretation = false;
    $request->searchRequest->queryInterpretationOptions->disableSupplementalResults = false;
    $request->searchRequest->queryInterpretationOptions->enableVerbatimMode = false;
    $request->searchRequest->requestOptions = new RequestOptions();
    $request->searchRequest->requestOptions->debugOptions = new DebugOptions();
    $request->searchRequest->requestOptions->debugOptions->enableDebugging = false;
    $request->searchRequest->requestOptions->languageCode = 'ipsa';
    $request->searchRequest->requestOptions->searchApplicationId = 'ipsa';
    $request->searchRequest->requestOptions->timeZone = 'iure';
    $request->searchRequest->sortOptions = new SortOptions();
    $request->searchRequest->sortOptions->operatorName = 'odio';
    $request->searchRequest->sortOptions->sortOrder = SortOptionsSortOrderEnum::ASCENDING;
    $request->searchRequest->start = 881005;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'natus';
    $request->key = 'eos';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new CloudsearchQuerySearchSecurity();
    $requestSecurity->option1 = new CloudsearchQuerySearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->query->cloudsearchQuerySearch($request, $requestSecurity);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchQuerySourcesList

Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySourcesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySourcesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySourcesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySourcesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchQuerySourcesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'omnis';
    $request->pageToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->requestOptionsDebugOptionsEnableDebugging = false;
    $request->requestOptionsLanguageCode = 'asperiores';
    $request->requestOptionsSearchApplicationId = 'nihil';
    $request->requestOptionsTimeZone = 'ipsum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'id';

    $requestSecurity = new CloudsearchQuerySourcesListSecurity();
    $requestSecurity->option1 = new CloudsearchQuerySourcesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->query->cloudsearchQuerySourcesList($request, $requestSecurity);

    if ($response->listQuerySourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudsearchQuerySuggest

Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySuggestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SuggestRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSourceRestriction;
use \OpenAPI\OpenAPI\Models\Shared\FilterOptions;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterLogicOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueFilter;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\Source;
use \OpenAPI\OpenAPI\Models\Shared\SourcePredefinedSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequestOptions;
use \OpenAPI\OpenAPI\Models\Shared\DebugOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySuggestSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySuggestSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudsearchQuerySuggestSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudsearchQuerySuggestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->suggestRequest = new SuggestRequest();
    $request->suggestRequest->dataSourceRestrictions = [
        new DataSourceRestriction(),
        new DataSourceRestriction(),
    ];
    $request->suggestRequest->query = 'aspernatur';
    $request->suggestRequest->requestOptions = new RequestOptions();
    $request->suggestRequest->requestOptions->debugOptions = new DebugOptions();
    $request->suggestRequest->requestOptions->debugOptions->enableDebugging = false;
    $request->suggestRequest->requestOptions->languageCode = 'perferendis';
    $request->suggestRequest->requestOptions->searchApplicationId = 'amet';
    $request->suggestRequest->requestOptions->timeZone = 'optio';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new CloudsearchQuerySuggestSecurity();
    $requestSecurity->option1 = new CloudsearchQuerySuggestSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->query->cloudsearchQuerySuggest($request, $requestSecurity);

    if ($response->suggestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
