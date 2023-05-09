# predictionsApi

### Available Operations

* [deletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results.
* [queryPredictionsForm](#querypredictionsform) - Get images that were sent to your prediction endpoint.
* [queryPredictionsJson](#querypredictionsjson) - Get images that were sent to your prediction endpoint.
* [queryPredictionsRaw](#querypredictionsraw) - Get images that were sent to your prediction endpoint.
* [quickTestImage](#quicktestimage) - Quick test an image.
* [quickTestImageUrlForm](#quicktestimageurlform) - Quick test an image url.
* [quickTestImageUrlJson](#quicktestimageurljson) - Quick test an image url.
* [quickTestImageUrlRaw](#quicktestimageurlraw) - Quick test an image url.

## deletePrediction

Delete a set of predicted images and their associated prediction results.

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

            DeletePredictionRequest req = new DeletePredictionRequest("tenetur",                 new String[]{{
                                add("deserunt"),
                            }}, "cab58b99-1c92-46dd-b589-461e7421cbe6");            

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

## queryPredictionsForm

Get images that were sent to your prediction endpoint.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryPredictionsFormRequest;
import org.openapis.openapi.models.operations.QueryPredictionsFormResponse;
import org.openapis.openapi.models.shared.PredictionQueryTokenInput;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionsFormRequest req = new QueryPredictionsFormRequest(                new PredictionQueryTokenInput() {{
                                application = "possimus";
                                continuation = "provident";
                                endTime = OffsetDateTime.parse("2022-12-22T08:49:45.030Z");
                                iterationId = "2f0ea930-b69f-47ac-af72-f88500904911";
                                maxCount = 402908;
                                orderBy = PredictionQueryTokenOrderByEnum.NEWEST;
                                session = "quas";
                                startTime = OffsetDateTime.parse("2022-12-25T18:43:22.990Z");
                            }};, "esse", "888ec661-83bf-4e96-99eb-40ec16faf75b");            

            QueryPredictionsFormResponse res = sdk.predictionsApi.queryPredictionsForm(req);

            if (res.predictionQueryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryPredictionsJson

Get images that were sent to your prediction endpoint.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryPredictionsJsonRequest;
import org.openapis.openapi.models.operations.QueryPredictionsJsonResponse;
import org.openapis.openapi.models.shared.PredictionQueryTokenInput;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionsJsonRequest req = new QueryPredictionsJsonRequest(                new PredictionQueryTokenInput() {{
                                application = "perferendis";
                                continuation = "nam";
                                endTime = OffsetDateTime.parse("2022-10-23T01:50:15.716Z");
                                iterationId = "2a4da37c-baaf-4445-ac48-42c9b2ad32da";
                                maxCount = 956572;
                                orderBy = PredictionQueryTokenOrderByEnum.SUGGESTED;
                                session = "voluptatum";
                                startTime = OffsetDateTime.parse("2022-05-08T23:29:41.319Z");
                            }};, "voluptatum", "8f444457-3fec-4d47-b53f-63c8209379aa");            

            QueryPredictionsJsonResponse res = sdk.predictionsApi.queryPredictionsJson(req);

            if (res.predictionQueryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryPredictionsRaw

Get images that were sent to your prediction endpoint.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryPredictionsRawRequest;
import org.openapis.openapi.models.operations.QueryPredictionsRawResponse;
import org.openapis.openapi.models.shared.PredictionQueryTokenInput;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionsRawRequest req = new QueryPredictionsRawRequest("ex".getBytes(), "occaecati", "cd5fbcf7-9da1-48a7-822b-f95894e6861a");            

            QueryPredictionsRawResponse res = sdk.predictionsApi.queryPredictionsRaw(req);

            if (res.predictionQueryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImage

Quick test an image.

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

            QuickTestImageRequest req = new QuickTestImageRequest(                new QuickTestImageRequestBody(                new QuickTestImageRequestBodyImageData("possimus".getBytes(), "libero"););, "ullam", "5f9e5d75-1c9f-4e8f-b502-bfdc3450841f") {{
                iterationId = "17644563-79f3-4fb2-be21-f862657b36fc";
            }};            

            QuickTestImageResponse res = sdk.predictionsApi.quickTestImage(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImageUrlForm

Quick test an image url.

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
                                url = "vel";
                            }};, "distinctio", "9f587ce5-25c6-4764-9a83-12e5047b4c21") {{
                iterationId = "ccb423ab-cdc9-41fa-abdd-88e71f6c4825";
            }};            

            QuickTestImageUrlFormResponse res = sdk.predictionsApi.quickTestImageUrlForm(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImageUrlJson

Quick test an image url.

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
                                url = "sed";
                            }};, "quibusdam", "7771e7fd-0740-409e-b8d2-9de1dd7097b5") {{
                iterationId = "da08c57f-a6c7-48a2-96e1-9bafeca61914";
            }};            

            QuickTestImageUrlJsonResponse res = sdk.predictionsApi.quickTestImageUrlJson(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quickTestImageUrlRaw

Quick test an image url.

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

            QuickTestImageUrlRawRequest req = new QuickTestImageUrlRawRequest("excepturi".getBytes(), "atque", "140b64ff-8ae1-470e-b03b-5f37e4aa8685") {{
                iterationId = "55966732-aa5d-4cb6-a82c-b70f8cfd5fb6";
            }};            

            QuickTestImageUrlRawResponse res = sdk.predictionsApi.quickTestImageUrlRaw(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
