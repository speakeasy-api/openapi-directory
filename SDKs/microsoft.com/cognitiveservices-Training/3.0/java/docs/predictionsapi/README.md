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

            DeletePredictionRequest req = new DeletePredictionRequest("culpa",                 new String[]{{
                                add("a29ca791-81c9-4567-9663-c530b5665163"),
                                add("a3638512-ab25-421b-9f2e-072467b8a40b"),
                                add("c05fab0d-650e-4df2-aa94-d20ec90ea41d"),
                                add("1f465e85-156f-4ff7-bfdf-54fdd5ea9543"),
                            }}, "398dafb4-2a8d-4633-88e4-d8039ea5f9b1");            

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
                                application = "atque";
                                continuation = "similique";
                                endTime = OffsetDateTime.parse("2022-09-23T16:55:35.004Z");
                                iterationId = "4fd61903-9dac-4d38-ad0d-c671dc7f1e3a";
                                maxCount = 994375;
                                orderBy = PredictionQueryTokenOrderByEnum.NEWEST;
                                session = "veniam";
                                startTime = OffsetDateTime.parse("2022-09-05T23:27:08.167Z");
                            }};, "aut", "c90d1b49-01f2-4bd8-9c8a-32639da5b7b6");            

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
                                application = "natus";
                                continuation = "eaque";
                                endTime = OffsetDateTime.parse("2022-04-18T19:56:02.907Z");
                                iterationId = "881a94f6-4366-44a8-b0af-8c691d732d9f";
                                maxCount = 730247;
                                orderBy = PredictionQueryTokenOrderByEnum.OLDEST;
                                session = "tenetur";
                                startTime = OffsetDateTime.parse("2022-05-29T07:08:15.233Z");
                            }};, "voluptate", "6a2ae8dc-c50c-48a3-912c-737848930750");            

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

            QueryPredictionsRawRequest req = new QueryPredictionsRawRequest("mollitia".getBytes(), "alias", "0e966ec7-36d4-4319-8398-c783c92398ed");            

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

            QuickTestImageRequest req = new QuickTestImageRequest(                new QuickTestImageRequestBody(                new QuickTestImageRequestBodyImageData("ipsum".getBytes(), "pariatur"););, "amet", "ab7ca3c5-ca86-449a-b0cf-d5d6989b7206") {{
                iterationId = "451077d1-9ea8-43d4-92ed-14b8a2c19545";
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

            QuickTestImageUrlFormRequest req = new QuickTestImageUrlFormRequest(                new ImageUrl("quaerat");, "minima", "e955dcc1-85ea-4490-9c7c-43ad2daa784a") {{
                iterationId = "ba3d230e-df73-4811-a115-382bd7ed5650";
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

            QuickTestImageUrlJsonRequest req = new QuickTestImageUrlJsonRequest(                new ImageUrl("quam");, "vel", "21c58f4d-7396-4564-820a-0711a961d24a") {{
                iterationId = "7dbb8f53-2d89-42cf-b812-cb512c878240";
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

            QuickTestImageUrlRawRequest req = new QuickTestImageUrlRawRequest("nobis".getBytes(), "asperiores", "548f88f8-f1bf-40bc-8e1f-206d5d831d00") {{
                iterationId = "81090f67-0667-43f3-a681-c5768dce7424";
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
