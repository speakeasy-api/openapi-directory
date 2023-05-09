# predictionsApi

### Available Operations

* [deletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results
* [queryPredictionResultsForm](#querypredictionresultsform) - Get images that were sent to your prediction endpoint
* [queryPredictionResultsJson](#querypredictionresultsjson) - Get images that were sent to your prediction endpoint
* [queryPredictionResultsRaw](#querypredictionresultsraw) - Get images that were sent to your prediction endpoint
* [quickTestImage](#quicktestimage) - Quick test an image
* [quickTestImageUrlForm](#quicktestimageurlform) - Quick test an image url
* [quickTestImageUrlJson](#quicktestimageurljson) - Quick test an image url
* [quickTestImageUrlRaw](#quicktestimageurlraw) - Quick test an image url

## deletePrediction

Delete a set of predicted images and their associated prediction results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePredictionRequest;
import org.openapis.openapi.models.operations.DeletePredictionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePredictionRequest req = new DeletePredictionRequest("nesciunt",                 new String[]{{
                                add("sint"),
                            }}, "470bf7a4-fa87-4cf5-b5a6-fae54ebf60c3");            

            DeletePredictionResponse res = sdk.predictionsApi.deletePrediction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryPredictionResultsForm

Get images that were sent to your prediction endpoint

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryPredictionResultsFormRequest;
import org.openapis.openapi.models.operations.QueryPredictionResultsFormResponse;
import org.openapis.openapi.models.shared.PredictionQueryTokenInput;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionResultsFormRequest req = new QueryPredictionResultsFormRequest(                new PredictionQueryTokenInput() {{
                                application = "sunt";
                                continuation = "vitae";
                                endTime = OffsetDateTime.parse("2022-11-15T14:40:21.227Z");
                                iterationId = "23b75d23-67fe-41a0-8c8d-f79f0a396d90";
                                maxCount = 771931;
                                orderBy = PredictionQueryTokenOrderByEnum.NEWEST;
                                session = "commodi";
                                startTime = OffsetDateTime.parse("2022-04-16T19:53:20.939Z");
                            }};, "in", "c15dfbac-e188-4b1c-8ee2-c8c6ce611fee");            

            QueryPredictionResultsFormResponse res = sdk.predictionsApi.queryPredictionResultsForm(req);

            if (res.predictionQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryPredictionResultsJson

Get images that were sent to your prediction endpoint

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryPredictionResultsJsonRequest;
import org.openapis.openapi.models.operations.QueryPredictionResultsJsonResponse;
import org.openapis.openapi.models.shared.PredictionQueryTokenInput;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionResultsJsonRequest req = new QueryPredictionResultsJsonRequest(                new PredictionQueryTokenInput() {{
                                application = "quidem";
                                continuation = "illo";
                                endTime = OffsetDateTime.parse("2021-07-12T09:24:12.136Z");
                                iterationId = "cbdb6eec-7437-48ba-a531-7747dc915ad2";
                                maxCount = 804879;
                                orderBy = PredictionQueryTokenOrderByEnum.SUGGESTED;
                                session = "repellat";
                                startTime = OffsetDateTime.parse("2022-02-25T17:35:04.595Z");
                            }};, "quibusdam", "6723dc0f-5ae2-4f3a-ab70-0878756143f5");            

            QueryPredictionResultsJsonResponse res = sdk.predictionsApi.queryPredictionResultsJson(req);

            if (res.predictionQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryPredictionResultsRaw

Get images that were sent to your prediction endpoint

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryPredictionResultsRawRequest;
import org.openapis.openapi.models.operations.QueryPredictionResultsRawResponse;
import org.openapis.openapi.models.shared.PredictionQueryTokenInput;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionResultsRawRequest req = new QueryPredictionResultsRawRequest("est".getBytes(), "iure", "c98b5555-4080-4d40-bcac-c6cbd6b5f3ec");            

            QueryPredictionResultsRawResponse res = sdk.predictionsApi.queryPredictionResultsRaw(req);

            if (res.predictionQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImage

Quick test an image

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuickTestImageRequest;
import org.openapis.openapi.models.operations.QuickTestImageRequestBody;
import org.openapis.openapi.models.operations.QuickTestImageRequestBodyImageData;
import org.openapis.openapi.models.operations.QuickTestImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuickTestImageRequest req = new QuickTestImageRequest(                new QuickTestImageRequestBody(                new QuickTestImageRequestBodyImageData("cupiditate".getBytes(), "voluptatem"););, "provident", "304f926b-ad25-4538-99b4-74b0ed20e562") {{
                iterationId = "48fff639-a910-4abd-8ab6-2676696e1ec0";
            }};            

            QuickTestImageResponse res = sdk.predictionsApi.quickTestImage(req);

            if (res.imagePredictionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImageUrlForm

Quick test an image url

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuickTestImageUrlFormRequest;
import org.openapis.openapi.models.operations.QuickTestImageUrlFormResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuickTestImageUrlFormRequest req = new QuickTestImageUrlFormRequest(                new ImageUrl() {{
                                url = "alias";
                            }};, "qui", "21b335d8-9acb-43ec-bda8-d0c549ef0300") {{
                iterationId = "4978a61f-a1cf-4206-88f7-7c1ffc71dca1";
            }};            

            QuickTestImageUrlFormResponse res = sdk.predictionsApi.quickTestImageUrlForm(req);

            if (res.imagePredictionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImageUrlJson

Quick test an image url

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuickTestImageUrlJsonRequest;
import org.openapis.openapi.models.operations.QuickTestImageUrlJsonResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuickTestImageUrlJsonRequest req = new QuickTestImageUrlJsonRequest(                new ImageUrl() {{
                                url = "ex";
                            }};, "consectetur", "f2a3c80a-97ff-4334-8ddf-857a9e61876c") {{
                iterationId = "6ab21d29-dfc9-44d6-becd-799390066a6d";
            }};            

            QuickTestImageUrlJsonResponse res = sdk.predictionsApi.quickTestImageUrlJson(req);

            if (res.imagePredictionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImageUrlRaw

Quick test an image url

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuickTestImageUrlRawRequest;
import org.openapis.openapi.models.operations.QuickTestImageUrlRawResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuickTestImageUrlRawRequest req = new QuickTestImageUrlRawRequest("explicabo".getBytes(), "fugiat", "00035533-8cec-4086-ba21-e9152cb31191") {{
                iterationId = "67b8e3c8-db03-4408-96d3-64ffd455906d";
            }};            

            QuickTestImageUrlRawResponse res = sdk.predictionsApi.quickTestImageUrlRaw(req);

            if (res.imagePredictionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
