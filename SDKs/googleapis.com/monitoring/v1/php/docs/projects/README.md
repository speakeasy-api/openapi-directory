# projects

### Available Operations

* [monitoringProjectsDashboardsCreate](#monitoringprojectsdashboardscreate) - Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsDelete](#monitoringprojectsdashboardsdelete) - Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsGet](#monitoringprojectsdashboardsget) - Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsList](#monitoringprojectsdashboardslist) - Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsDashboardsPatch](#monitoringprojectsdashboardspatch) - Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
* [monitoringProjectsLocationPrometheusApiV1LabelValues](#monitoringprojectslocationprometheusapiv1labelvalues) - Lists possible values for a given label name.
* [monitoringProjectsLocationPrometheusApiV1Labels](#monitoringprojectslocationprometheusapiv1labels) - Lists labels for metrics.
* [monitoringProjectsLocationPrometheusApiV1LabelsList](#monitoringprojectslocationprometheusapiv1labelslist) - Lists labels for metrics.
* [monitoringProjectsLocationPrometheusApiV1MetadataList](#monitoringprojectslocationprometheusapiv1metadatalist) - Lists metadata for metrics.
* [monitoringProjectsLocationPrometheusApiV1Query](#monitoringprojectslocationprometheusapiv1query) - Evaluate a PromQL query at a single point in time.
* [monitoringProjectsLocationPrometheusApiV1QueryExemplars](#monitoringprojectslocationprometheusapiv1queryexemplars) - Lists exemplars relevant to a given PromQL query,
* [monitoringProjectsLocationPrometheusApiV1QueryRange](#monitoringprojectslocationprometheusapiv1queryrange) - Evaluate a PromQL query with start, end time range.
* [monitoringProjectsLocationPrometheusApiV1Series](#monitoringprojectslocationprometheusapiv1series) - Lists metadata for metrics.

## monitoringProjectsDashboardsCreate

Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dashboard;
use \OpenAPI\OpenAPI\Models\Shared\ColumnLayout;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\Widget;
use \OpenAPI\OpenAPI\Models\Shared\AlertChart;
use \OpenAPI\OpenAPI\Models\Shared\CollapsibleGroup;
use \OpenAPI\OpenAPI\Models\Shared\IncidentList;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResource;
use \OpenAPI\OpenAPI\Models\Shared\LogsPanel;
use \OpenAPI\OpenAPI\Models\Shared\Scorecard;
use \OpenAPI\OpenAPI\Models\Shared\GaugeView;
use \OpenAPI\OpenAPI\Models\Shared\SparkChartView;
use \OpenAPI\OpenAPI\Models\Shared\SparkChartViewSparkChartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Threshold;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTargetAxisEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesQuery;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesFilter;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationCrossSeriesReducerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregationPerSeriesAlignerEnum;
use \OpenAPI\OpenAPI\Models\Shared\PickTimeSeriesFilter;
use \OpenAPI\OpenAPI\Models\Shared\PickTimeSeriesFilterDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PickTimeSeriesFilterRankingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatisticalTimeSeriesFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatisticalTimeSeriesFilterRankingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesFilterRatio;
use \OpenAPI\OpenAPI\Models\Shared\RatioPart;
use \OpenAPI\OpenAPI\Models\Shared\Text;
use \OpenAPI\OpenAPI\Models\Shared\TextFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesTable;
use \OpenAPI\OpenAPI\Models\Shared\ColumnSettings;
use \OpenAPI\OpenAPI\Models\Shared\TableDataSet;
use \OpenAPI\OpenAPI\Models\Shared\TableDisplayOptions;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesTableMetricVisualizationEnum;
use \OpenAPI\OpenAPI\Models\Shared\XyChart;
use \OpenAPI\OpenAPI\Models\Shared\ChartOptions;
use \OpenAPI\OpenAPI\Models\Shared\ChartOptionsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSet;
use \OpenAPI\OpenAPI\Models\Shared\DataSetPlotTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSetTargetAxisEnum;
use \OpenAPI\OpenAPI\Models\Shared\Axis;
use \OpenAPI\OpenAPI\Models\Shared\AxisScaleEnum;
use \OpenAPI\OpenAPI\Models\Shared\DashboardFilter;
use \OpenAPI\OpenAPI\Models\Shared\DashboardFilterFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridLayout;
use \OpenAPI\OpenAPI\Models\Shared\MosaicLayout;
use \OpenAPI\OpenAPI\Models\Shared\Tile;
use \OpenAPI\OpenAPI\Models\Shared\RowLayout;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsDashboardsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dashboard = new Dashboard();
    $request->dashboard->columnLayout = new ColumnLayout();
    $request->dashboard->columnLayout->columns = [
        new Column(),
        new Column(),
        new Column(),
        new Column(),
    ];
    $request->dashboard->dashboardFilters = [
        new DashboardFilter(),
        new DashboardFilter(),
        new DashboardFilter(),
        new DashboardFilter(),
    ];
    $request->dashboard->displayName = 'molestiae';
    $request->dashboard->etag = 'quod';
    $request->dashboard->gridLayout = new GridLayout();
    $request->dashboard->gridLayout->columns = 'quod';
    $request->dashboard->gridLayout->widgets = [
        new Widget(),
        new Widget(),
    ];
    $request->dashboard->labels = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->dashboard->mosaicLayout = new MosaicLayout();
    $request->dashboard->mosaicLayout->columns = 143353;
    $request->dashboard->mosaicLayout->tiles = [
        new Tile(),
        new Tile(),
        new Tile(),
    ];
    $request->dashboard->name = 'Ms. Earnest Lebsack';
    $request->dashboard->rowLayout = new RowLayout();
    $request->dashboard->rowLayout->rows = [
        new Row(),
        new Row(),
    ];
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'esse';
    $request->key = 'ipsum';
    $request->oauthToken = 'excepturi';
    $request->parent = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'natus';
    $request->validateOnly = false;

    $requestSecurity = new MonitoringProjectsDashboardsCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsDashboardsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsDashboardsCreate($request, $requestSecurity);

    if ($response->dashboard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsDashboardsDelete

Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsDashboardsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->name = 'Wilbur Kirlin';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new MonitoringProjectsDashboardsDeleteSecurity();
    $requestSecurity->option1 = new MonitoringProjectsDashboardsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsDashboardsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsDashboardsGet

Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsDashboardsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->name = 'Stacy Champlin';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new MonitoringProjectsDashboardsGetSecurity();
    $requestSecurity->option1 = new MonitoringProjectsDashboardsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsDashboardsGet($request, $requestSecurity);

    if ($response->dashboard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsDashboardsList

Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsDashboardsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->pageSize = 208876;
    $request->pageToken = 'culpa';
    $request->parent = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new MonitoringProjectsDashboardsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsDashboardsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsDashboardsList($request, $requestSecurity);

    if ($response->listDashboardsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsDashboardsPatch

Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dashboard;
use \OpenAPI\OpenAPI\Models\Shared\ColumnLayout;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\Widget;
use \OpenAPI\OpenAPI\Models\Shared\AlertChart;
use \OpenAPI\OpenAPI\Models\Shared\CollapsibleGroup;
use \OpenAPI\OpenAPI\Models\Shared\IncidentList;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResource;
use \OpenAPI\OpenAPI\Models\Shared\LogsPanel;
use \OpenAPI\OpenAPI\Models\Shared\Scorecard;
use \OpenAPI\OpenAPI\Models\Shared\GaugeView;
use \OpenAPI\OpenAPI\Models\Shared\SparkChartView;
use \OpenAPI\OpenAPI\Models\Shared\SparkChartViewSparkChartTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Threshold;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThresholdTargetAxisEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesQuery;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesFilter;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationCrossSeriesReducerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregationPerSeriesAlignerEnum;
use \OpenAPI\OpenAPI\Models\Shared\PickTimeSeriesFilter;
use \OpenAPI\OpenAPI\Models\Shared\PickTimeSeriesFilterDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PickTimeSeriesFilterRankingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatisticalTimeSeriesFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatisticalTimeSeriesFilterRankingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesFilterRatio;
use \OpenAPI\OpenAPI\Models\Shared\RatioPart;
use \OpenAPI\OpenAPI\Models\Shared\Text;
use \OpenAPI\OpenAPI\Models\Shared\TextFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesTable;
use \OpenAPI\OpenAPI\Models\Shared\ColumnSettings;
use \OpenAPI\OpenAPI\Models\Shared\TableDataSet;
use \OpenAPI\OpenAPI\Models\Shared\TableDisplayOptions;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesTableMetricVisualizationEnum;
use \OpenAPI\OpenAPI\Models\Shared\XyChart;
use \OpenAPI\OpenAPI\Models\Shared\ChartOptions;
use \OpenAPI\OpenAPI\Models\Shared\ChartOptionsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSet;
use \OpenAPI\OpenAPI\Models\Shared\DataSetPlotTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataSetTargetAxisEnum;
use \OpenAPI\OpenAPI\Models\Shared\Axis;
use \OpenAPI\OpenAPI\Models\Shared\AxisScaleEnum;
use \OpenAPI\OpenAPI\Models\Shared\DashboardFilter;
use \OpenAPI\OpenAPI\Models\Shared\DashboardFilterFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GridLayout;
use \OpenAPI\OpenAPI\Models\Shared\MosaicLayout;
use \OpenAPI\OpenAPI\Models\Shared\Tile;
use \OpenAPI\OpenAPI\Models\Shared\RowLayout;
use \OpenAPI\OpenAPI\Models\Shared\Row;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsPatchSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsDashboardsPatchSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsDashboardsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->dashboard = new Dashboard();
    $request->dashboard->columnLayout = new ColumnLayout();
    $request->dashboard->columnLayout->columns = [
        new Column(),
        new Column(),
    ];
    $request->dashboard->dashboardFilters = [
        new DashboardFilter(),
        new DashboardFilter(),
    ];
    $request->dashboard->displayName = 'molestiae';
    $request->dashboard->etag = 'velit';
    $request->dashboard->gridLayout = new GridLayout();
    $request->dashboard->gridLayout->columns = 'error';
    $request->dashboard->gridLayout->widgets = [
        new Widget(),
    ];
    $request->dashboard->labels = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->dashboard->mosaicLayout = new MosaicLayout();
    $request->dashboard->mosaicLayout->columns = 138183;
    $request->dashboard->mosaicLayout->tiles = [
        new Tile(),
        new Tile(),
        new Tile(),
        new Tile(),
    ];
    $request->dashboard->name = 'Mandy Hills';
    $request->dashboard->rowLayout = new RowLayout();
    $request->dashboard->rowLayout->rows = [
        new Row(),
    ];
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'laborum';
    $request->key = 'quasi';
    $request->name = 'Jan Thiel';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';
    $request->validateOnly = false;

    $requestSecurity = new MonitoringProjectsDashboardsPatchSecurity();
    $requestSecurity->option1 = new MonitoringProjectsDashboardsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsDashboardsPatch($request, $requestSecurity);

    if ($response->dashboard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1LabelValues

Lists possible values for a given label name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->end = 'ut';
    $request->fields = 'maiores';
    $request->key = 'dicta';
    $request->label = 'corporis';
    $request->location = 'dolore';
    $request->match = 'iusto';
    $request->name = 'Maryann Hamill';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->start = 'ipsum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'molestias';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1LabelValues($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1Labels

Lists labels for metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1LabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->listLabelsRequest = new ListLabelsRequest();
    $request->listLabelsRequest->end = 'pariatur';
    $request->listLabelsRequest->match = 'modi';
    $request->listLabelsRequest->start = 'praesentium';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->location = 'veritatis';
    $request->name = 'Miss Randall Hamill';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1LabelsSecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1Labels($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1LabelsList

Lists labels for metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1LabelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->end = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->location = 'magni';
    $request->match = 'assumenda';
    $request->name = 'Linda Corkery';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->start = 'tempore';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1LabelsList($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1MetadataList

Lists metadata for metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1MetadataListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1MetadataListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1MetadataListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->limit = 'necessitatibus';
    $request->location = 'sint';
    $request->metric = 'officia';
    $request->name = 'Raquel Wilderman';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1MetadataListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1MetadataList($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1Query

Evaluate a PromQL query at a single point in time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryInstantRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1QueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->queryInstantRequest = new QueryInstantRequest();
    $request->queryInstantRequest->query = 'magnam';
    $request->queryInstantRequest->time = 'cumque';
    $request->queryInstantRequest->timeout = 'facere';
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->location = 'occaecati';
    $request->name = 'Sophia Wintheiser';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1QuerySecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1Query($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1QueryExemplars

Lists exemplars relevant to a given PromQL query,

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryExemplarsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryExemplarsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1QueryExemplarsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryExemplarsRequest = new QueryExemplarsRequest();
    $request->queryExemplarsRequest->end = 'amet';
    $request->queryExemplarsRequest->query = 'deserunt';
    $request->queryExemplarsRequest->start = 'nisi';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->location = 'nihil';
    $request->name = 'Verna Olson';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1QueryExemplars($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1QueryRange

Evaluate a PromQL query with start, end time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryRangeRequest = new QueryRangeRequest();
    $request->queryRangeRequest->end = 'aspernatur';
    $request->queryRangeRequest->query = 'architecto';
    $request->queryRangeRequest->start = 'magnam';
    $request->queryRangeRequest->step = 'et';
    $request->queryRangeRequest->timeout = 'excepturi';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'sint';
    $request->key = 'accusantium';
    $request->location = 'mollitia';
    $request->name = 'Shaun Hammes';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1QueryRange($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsLocationPrometheusApiV1Series

Lists metadata for metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1SeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuerySeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1SeriesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsLocationPrometheusApiV1SeriesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->querySeriesRequest = new QuerySeriesRequest();
    $request->querySeriesRequest->end = 'doloribus';
    $request->querySeriesRequest->start = 'debitis';
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->location = 'architecto';
    $request->name = 'Elvira Herman';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new MonitoringProjectsLocationPrometheusApiV1SeriesSecurity();
    $requestSecurity->option1 = new MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsLocationPrometheusApiV1Series($request, $requestSecurity);

    if ($response->httpBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
