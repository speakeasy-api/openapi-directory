# metric

## Overview

A metric is a quantitative result for a patient. For example, vital signs, lab results, etc. are all metrics.

### Available Operations

* [createPatientHealthMetric](#createpatienthealthmetric) - Create patient health metrics
* [fetchPatientHealthMetric](#fetchpatienthealthmetric) - Get a patient health metric
* [fetchPatientHealthMetrics](#fetchpatienthealthmetrics) - List patient health metrics

## createPatientHealthMetric

Create one or more patient health metrics.

Example for creating a patient health result with a patient specified using `meta.query` instead of `id`:

```JSON
  {
    "data": {
      "type": "patient_health_metric",
       "attributes": {
         "code": {
           "system": "LOINC",
           "value": "13457-7"
         },
         "type": "ldl_cholesterol",
         "occurred_at": "2017-03-14T11:00:57.000Z",
         "value": 121,
         "unit": "mg/dl"
      },
      "relationships": {
        "patient": {
          "data": {
            "type": "patient",
            "meta": {
              "query": {
                "identifier": {
                  "system": "medical-record-number",
                  "value": "121212"
                },
                "organization": "58c4554710123c5c40dbab81"
              }
            }
          }
        }
      }
    }
  }
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreatePatientHealthMetricRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResource;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceAttributes;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceAttributesCode;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceAttributesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationships;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationshipsPatient;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationshipsPatientData;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationshipsPatientDataMeta;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQuery;
use \OpenAPI\OpenAPI\Models\Shared\PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQueryIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\CreatePatientHealthMetricRequestMeta;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePatientHealthMetricRequest();
    $request->data = new PatientHealthMetricCreateResource();
    $request->data->attributes = new PatientHealthMetricCreateResourceAttributes();
    $request->data->attributes->code = new PatientHealthMetricCreateResourceAttributesCode();
    $request->data->attributes->code->system = 'qui';
    $request->data->attributes->code->value = 'cum';
    $request->data->attributes->diastolic = 4347.61;
    $request->data->attributes->occurredAt = 'necessitatibus';
    $request->data->attributes->systolic = 1875.52;
    $request->data->attributes->type = PatientHealthMetricCreateResourceAttributesTypeEnum::HEART_RATE;
    $request->data->attributes->unit = 'distinctio';
    $request->data->attributes->value = 'voluptatum';
    $request->data->id = '845f0597-a60f-4f2a-94a3-1e94764a3e86';
    $request->data->relationships = new PatientHealthMetricCreateResourceRelationships();
    $request->data->relationships->patient = new PatientHealthMetricCreateResourceRelationshipsPatient();
    $request->data->relationships->patient->data = new PatientHealthMetricCreateResourceRelationshipsPatientData();
    $request->data->relationships->patient->data->id = '5817ead56f5316c0d05ba8bf';
    $request->data->relationships->patient->data->meta = new PatientHealthMetricCreateResourceRelationshipsPatientDataMeta();
    $request->data->relationships->patient->data->meta->query = new PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQuery();
    $request->data->relationships->patient->data->meta->query->groups = [
        'recusandae',
        'esse',
    ];
    $request->data->relationships->patient->data->meta->query->identifier = new PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQueryIdentifier();
    $request->data->relationships->patient->data->meta->query->identifier->system = 'provident';
    $request->data->relationships->patient->data->meta->query->identifier->value = 'quis';
    $request->data->relationships->patient->data->meta->query->organization = 'eum';
    $request->data->relationships->patient->data->type = 'reiciendis';
    $request->data->relationships->patient->links = [
        'aspernatur' => 'ullam',
        'quasi' => 'animi',
        'nostrum' => 'mollitia',
    ];
    $request->data->type = 'provident';
    $request->meta = new CreatePatientHealthMetricRequestMeta();
    $request->meta->ignoreDuplicates = false;

    $response = $sdk->metric->createPatientHealthMetric($request);

    if ($response->createPatientHealthMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatientHealthMetric

Get the plan summary for a patient.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientHealthMetricRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientHealthMetricRequest();
    $request->id = 'da660ff5-7bfa-4ad4-b9ef-c1b4512c1032';

    $response = $sdk->metric->fetchPatientHealthMetric($request);

    if ($response->fetchPatientHealthMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchPatientHealthMetrics

Get a list of patient health metrics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchPatientHealthMetricsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchPatientHealthMetricsRequest();
    $request->filterGroups = 'eum';
    $request->filterOrganization = 'eius';
    $request->filterPatient = 'rem';
    $request->pageCursor = 'at';
    $request->pageLimit = 773084;
    $request->pageNumber = 179410;
    $request->pageSize = 958741;

    $response = $sdk->metric->fetchPatientHealthMetrics($request);

    if ($response->fetchPatientHealthMetricResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
