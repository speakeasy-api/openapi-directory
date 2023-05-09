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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePatientHealthMetricResponse;
import org.openapis.openapi.models.shared.CreatePatientHealthMetricRequest;
import org.openapis.openapi.models.shared.CreatePatientHealthMetricRequestMeta;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResource;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceAttributes;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceAttributesCode;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceAttributesTypeEnum;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceRelationships;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceRelationshipsPatient;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceRelationshipsPatientData;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceRelationshipsPatientDataMeta;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQuery;
import org.openapis.openapi.models.shared.PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQueryIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatePatientHealthMetricRequest req = new CreatePatientHealthMetricRequest(                new PatientHealthMetricCreateResource("ipsa", "minima") {{
                                attributes = new PatientHealthMetricCreateResourceAttributes() {{
                                    code = new PatientHealthMetricCreateResourceAttributesCode("veritatis", "consectetur");;
                                    diastolic = 2371.73;
                                    occurredAt = "iste";
                                    systolic = 8395.13;
                                    type = PatientHealthMetricCreateResourceAttributesTypeEnum.BLOOD_PRESSURE_DIASTOLIC;
                                    unit = "rem";
                                    value = "aut";
                                }};;
                                relationships = new PatientHealthMetricCreateResourceRelationships() {{
                                    patient = new PatientHealthMetricCreateResourceRelationshipsPatient() {{
                                        data = new PatientHealthMetricCreateResourceRelationshipsPatientData() {{
                                            id = "5817ead56f5316c0d05ba8bf";
                                            meta = new PatientHealthMetricCreateResourceRelationshipsPatientDataMeta(                new PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQuery(                new PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQueryIdentifier("laudantium", "eum");) {{
                                                                groups = new String[]{{
                                                                    add("ab"),
                                                                    add("corrupti"),
                                                                    add("non"),
                                                                }};
                                                                organization = "voluptatem";
                                                            }};);;
                                            type = "dolor";
                                        }};;
                                        links = new java.util.HashMap<String, Object>() {{
                                            put("numquam", "impedit");
                                            put("explicabo", "voluptas");
                                            put("aut", "dignissimos");
                                        }};
                                    }};;
                                }};;
                            }};) {{
                meta = new CreatePatientHealthMetricRequestMeta() {{
                    ignoreDuplicates = false;
                }};;
            }};            

            CreatePatientHealthMetricResponse res = sdk.metric.createPatientHealthMetric(req);

            if (res.createPatientHealthMetricResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatientHealthMetric

Get the plan summary for a patient.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientHealthMetricRequest;
import org.openapis.openapi.models.operations.FetchPatientHealthMetricResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientHealthMetricRequest req = new FetchPatientHealthMetricRequest("dicta");            

            FetchPatientHealthMetricResponse res = sdk.metric.fetchPatientHealthMetric(req);

            if (res.fetchPatientHealthMetricResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatientHealthMetrics

Get a list of patient health metrics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientHealthMetricsRequest;
import org.openapis.openapi.models.operations.FetchPatientHealthMetricsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientHealthMetricsRequest req = new FetchPatientHealthMetricsRequest() {{
                filterGroups = "maiores";
                filterOrganization = "natus";
                filterPatient = "velit";
                pageCursor = "voluptatibus";
                pageLimit = 374323L;
                pageNumber = 990345L;
                pageSize = 45659L;
            }};            

            FetchPatientHealthMetricsResponse res = sdk.metric.fetchPatientHealthMetrics(req);

            if (res.fetchPatientHealthMetricResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
