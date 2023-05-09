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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePredictionRequest req = new DeletePredictionRequest(                new String[]{{
                                add("31870cf6-8b03-4ad4-a1bd-43d1f0cb0a00"),
                                add("03eb22d9-b3a7-40d9-8faa-741c57d1fedc"),
                            }}, "2050d38d-c3ce-4185-872f-9ee69166a8be");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryPredictionsFormRequest req = new QueryPredictionsFormRequest(                new PredictionQueryToken() {{
                                application = "dolore";
                                continuation = "tempora";
                                endTime = OffsetDateTime.parse("2022-02-09T06:59:30.365Z");
                                iterationId = "ac8b3a28-75c6-4c1f-a606-d07d2a9c87ae";
                                maxCount = 365771;
                                orderBy = PredictionQueryTokenOrderByEnum.NEWEST;
                                session = "quod";
                                startTime = OffsetDateTime.parse("2022-07-28T16:41:08.535Z");
                                tags = new org.openapis.openapi.models.shared.PredictionQueryTag[]{{
                                    add(new PredictionQueryTag() {{
                                        id = "61a1d913-6a7e-48d5-b213-f3f658752db7";
                                        maxThreshold = 4218.34;
                                        minThreshold = 3058.33;
                                    }}),
                                    add(new PredictionQueryTag() {{
                                        id = "c59f0a56-cebc-4ada-a9ca-79181c956716";
                                        maxThreshold = 4363.67;
                                        minThreshold = 2092.1;
                                    }}),
                                }};
                            }};, "c530b566-5163-4a36-b851-2ab2521b9f2e");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryPredictionsJsonRequest req = new QueryPredictionsJsonRequest(                new PredictionQueryToken() {{
                                application = "esse";
                                continuation = "consequuntur";
                                endTime = OffsetDateTime.parse("2022-07-31T16:50:43.022Z");
                                iterationId = "7b8a40bc-05fa-4b0d-a50e-df22a94d20ec";
                                maxCount = 595025;
                                orderBy = PredictionQueryTokenOrderByEnum.NEWEST;
                                session = "debitis";
                                startTime = OffsetDateTime.parse("2022-05-22T04:22:41.480Z");
                                tags = new org.openapis.openapi.models.shared.PredictionQueryTag[]{{
                                    add(new PredictionQueryTag() {{
                                        id = "d1f465e8-5156-4fff-b3fd-f54fdd5ea954";
                                        maxThreshold = 1966.76;
                                        minThreshold = 1975.25;
                                    }}),
                                }};
                            }};, "98dafb42-a8d6-4338-8e4d-8039ea5f9b18");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryPredictionsRawRequest req = new QueryPredictionsRawRequest("qui".getBytes(), "44fd6190-39da-4cd3-8ed0-dc671dc7f1e3");            

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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuickTestImageRequest req = new QuickTestImageRequest(                new QuickTestImageRequestBody(                new QuickTestImageRequestBodyImageData("asperiores".getBytes(), "quasi"););, "5920c90d-1b49-401f-abd8-9c8a32639da5") {{
                iterationId = "b7b6902b-881a-494f-a436-64a8f0af8c69";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuickTestImageUrlFormRequest req = new QuickTestImageUrlFormRequest(                new ImageUrl("placeat");, "732d9fba-f947-46a2-ae8d-cc50c8a3512c") {{
                iterationId = "73784893-0750-4a00-a966-ec736d431943";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuickTestImageUrlJsonRequest req = new QuickTestImageUrlJsonRequest(                new ImageUrl("corrupti");, "c783c923-98ed-43d3-ab7c-a3c5ca8649a7") {{
                iterationId = "0cfd5d69-89b7-4206-8510-77d19ea83d49";
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
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            QuickTestImageUrlRawRequest req = new QuickTestImageUrlRawRequest("earum".getBytes(), "d14b8a2c-1954-4545-a955-dcc185ea4901") {{
                iterationId = "c7c43ad2-daa7-484a-ba3d-230edf73811a";
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
