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

            DeletePredictionRequest req = new DeletePredictionRequest("alias",                 new String[]{{
                                add("8c3e951a-1e30-4fda-9664-89d7b78673e1"),
                            }}, "3a12a6b9-9249-4459-8487-f5c843836b86");            

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
import org.openapis.openapi.models.shared.PredictionQueryTag;
import org.openapis.openapi.models.shared.PredictionQueryToken;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionsFormRequest req = new QueryPredictionsFormRequest(                new PredictionQueryToken() {{
                                application = "harum";
                                continuation = "consectetur";
                                endTime = OffsetDateTime.parse("2020-06-05T00:42:42.990Z");
                                iterationId = "f6415b04-49f9-4df1-bf4e-edbe78bf6068";
                                maxCount = 156416;
                                orderBy = PredictionQueryTokenOrderByEnum.OLDEST;
                                session = "rem";
                                startTime = OffsetDateTime.parse("2022-06-23T06:07:09.695Z");
                                tags = new org.openapis.openapi.models.shared.PredictionQueryTag[]{{
                                    add(new PredictionQueryTag() {{
                                        id = "a763d5c7-2795-4b78-9148-d6d549e5635b";
                                        maxThreshold = 2143.94;
                                        minThreshold = 2133.71;
                                    }}),
                                    add(new PredictionQueryTag() {{
                                        id = "bc0f970c-42fc-49f4-8442-25e75b796065";
                                        maxThreshold = 7652.59;
                                        minThreshold = 509.98;
                                    }}),
                                    add(new PredictionQueryTag() {{
                                        id = "efa6f93b-90a1-4b8c-95be-1254b739f4fe";
                                        maxThreshold = 4855.06;
                                        minThreshold = 4518.47;
                                    }}),
                                    add(new PredictionQueryTag() {{
                                        id = "210d1f65-58c9-49c7-a2d2-bc0f94087d9c";
                                        maxThreshold = 6348.8;
                                        minThreshold = 6428.58;
                                    }}),
                                }};
                            }};, "recusandae", "042dd7ca-ac9b-44ca-a1cf-e9e15df90390");            

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
import org.openapis.openapi.models.shared.PredictionQueryTag;
import org.openapis.openapi.models.shared.PredictionQueryToken;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionsJsonRequest req = new QueryPredictionsJsonRequest(                new PredictionQueryToken() {{
                                application = "ducimus";
                                continuation = "doloribus";
                                endTime = OffsetDateTime.parse("2022-07-04T06:14:12.318Z");
                                iterationId = "831983d4-2e54-4a85-8665-97c50233c147";
                                maxCount = 112399;
                                orderBy = PredictionQueryTokenOrderByEnum.SUGGESTED;
                                session = "veniam";
                                startTime = OffsetDateTime.parse("2022-04-27T20:05:16.678Z");
                                tags = new org.openapis.openapi.models.shared.PredictionQueryTag[]{{
                                    add(new PredictionQueryTag() {{
                                        id = "a6ddf5ab-d648-47c5-bc2b-862a00bef69e";
                                        maxThreshold = 724.32;
                                        minThreshold = 455.36;
                                    }}),
                                    add(new PredictionQueryTag() {{
                                        id = "0157630b-da7a-4fde-984a-35a41238e1a7";
                                        maxThreshold = 1964.95;
                                        minThreshold = 3217.24;
                                    }}),
                                    add(new PredictionQueryTag() {{
                                        id = "ac26ae33-bef9-471a-8f46-bca1106fe965";
                                        maxThreshold = 7436.31;
                                        minThreshold = 4565.91;
                                    }}),
                                }};
                            }};, "vitae", "1d08cf88-ec9f-47b9-9a55-0a656ed333bb");            

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
import org.openapis.openapi.models.shared.PredictionQueryTag;
import org.openapis.openapi.models.shared.PredictionQueryToken;
import org.openapis.openapi.models.shared.PredictionQueryTokenOrderByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryPredictionsRawRequest req = new QueryPredictionsRawRequest("accusantium".getBytes(), "quo", "e8aa6543-2a98-46eb-be14-ca5640891500");            

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

            QuickTestImageRequest req = new QuickTestImageRequest(                new QuickTestImageRequestBody(                new QuickTestImageRequestBodyImageData("natus".getBytes(), "nihil"););, "accusantium", "19a48f88-ece7-4bf9-84e0-1105d3890816") {{
                iterationId = "2c6beb68-a0f6-457b-bd03-a1480f8de30f";
                store = false;
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

            QuickTestImageUrlFormRequest req = new QuickTestImageUrlFormRequest(                new ImageUrl("aut");, "ex", "9d810618-d97e-4152-a975-10da80312292") {{
                iterationId = "cc61c2a7-02bb-497e-a102-da2de35f8e01";
                store = false;
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

            QuickTestImageUrlJsonRequest req = new QuickTestImageUrlJsonRequest(                new ImageUrl("libero");, "tenetur", "33eaab45-402a-4c17-84bf-1cc9fc61aae5") {{
                iterationId = "eb5f0c49-2b57-444d-88a2-267aaee79e3c";
                store = false;
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

            QuickTestImageUrlRawRequest req = new QuickTestImageUrlRawRequest("molestiae".getBytes(), "illo", "ad31becb-83d2-4378-ae3b-fc23d9450a98") {{
                iterationId = "6a495bac-707f-406b-a8ec-c86492386f62";
                store = false;
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
