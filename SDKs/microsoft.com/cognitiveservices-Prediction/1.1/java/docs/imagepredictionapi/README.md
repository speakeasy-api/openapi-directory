# imagePredictionApi

### Available Operations

* [predictImage](#predictimage) - Predict an image and saves the result
* [predictImageUrlWithNoStoreForm](#predictimageurlwithnostoreform) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreJson](#predictimageurlwithnostorejson) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreRaw](#predictimageurlwithnostoreraw) - Predict an image url without saving the result
* [predictImageUrlForm](#predictimageurlform) - Predict an image url and saves the result
* [predictImageUrlJson](#predictimageurljson) - Predict an image url and saves the result
* [predictImageUrlRaw](#predictimageurlraw) - Predict an image url and saves the result
* [predictImageWithNoStore](#predictimagewithnostore) - Predict an image without saving the result

## predictImage

Predict an image and saves the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageRequest;
import org.openapis.openapi.models.operations.PredictImageRequestBody;
import org.openapis.openapi.models.operations.PredictImageRequestBodyImageData;
import org.openapis.openapi.models.operations.PredictImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageRequest req = new PredictImageRequest("excepturi",                 new PredictImageRequestBody(                new PredictImageRequestBodyImageData("aspernatur".getBytes(), "perferendis"););, "5929396f-ea75-496e-b10f-aaa2352c5955") {{
                application = "excepturi";
                iterationId = "07aff1a3-a2fa-4946-b739-251aa52c3f5a";
            }};            

            PredictImageResponse res = sdk.imagePredictionApi.predictImage(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictImageUrlWithNoStoreForm

Predict an image url without saving the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageUrlWithNoStoreFormRequest;
import org.openapis.openapi.models.operations.PredictImageUrlWithNoStoreFormResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageUrlWithNoStoreFormRequest req = new PredictImageUrlWithNoStoreFormRequest(                new ImageUrl() {{
                                url = "possimus";
                            }};, "aut", "19da1ffe-78f0-497b-8074-f15471b5e6e1") {{
                application = "ipsum";
                iterationId = "b99d488e-1e91-4e45-8ad2-abd44269802d";
            }};            

            PredictImageUrlWithNoStoreFormResponse res = sdk.imagePredictionApi.predictImageUrlWithNoStoreForm(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictImageUrlWithNoStoreJson

Predict an image url without saving the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageUrlWithNoStoreJsonRequest;
import org.openapis.openapi.models.operations.PredictImageUrlWithNoStoreJsonResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageUrlWithNoStoreJsonRequest req = new PredictImageUrlWithNoStoreJsonRequest(                new ImageUrl() {{
                                url = "ipsam";
                            }};, "alias", "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6") {{
                application = "aliquid";
                iterationId = "ae395efb-9ba8-48f3-a669-97074ba4469b";
            }};            

            PredictImageUrlWithNoStoreJsonResponse res = sdk.imagePredictionApi.predictImageUrlWithNoStoreJson(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictImageUrlWithNoStoreRaw

Predict an image url without saving the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageUrlWithNoStoreRawRequest;
import org.openapis.openapi.models.operations.PredictImageUrlWithNoStoreRawResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageUrlWithNoStoreRawRequest req = new PredictImageUrlWithNoStoreRawRequest("eum", "vero".getBytes(), "21419598-90af-4a56-be25-16fe4c8b711e") {{
                application = "ullam";
                iterationId = "b7fd2ed0-2892-41cd-9c69-2601fb576b0d";
            }};            

            PredictImageUrlWithNoStoreRawResponse res = sdk.imagePredictionApi.predictImageUrlWithNoStoreRaw(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictImageUrlForm

Predict an image url and saves the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageUrlFormRequest;
import org.openapis.openapi.models.operations.PredictImageUrlFormResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageUrlFormRequest req = new PredictImageUrlFormRequest(                new ImageUrl() {{
                                url = "nemo";
                            }};, "voluptatibus", "0d30c5fb-b258-4705-b202-c73d5fe9b90c") {{
                application = "consequuntur";
                iterationId = "8909b3fe-49a8-4d9c-bf48-633323f9b77f";
            }};            

            PredictImageUrlFormResponse res = sdk.imagePredictionApi.predictImageUrlForm(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictImageUrlJson

Predict an image url and saves the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageUrlJsonRequest;
import org.openapis.openapi.models.operations.PredictImageUrlJsonResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageUrlJsonRequest req = new PredictImageUrlJsonRequest(                new ImageUrl() {{
                                url = "amet";
                            }};, "dolorum", "4100674e-bf69-4280-91ba-77a89ebf737a") {{
                application = "saepe";
                iterationId = "4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf";
            }};            

            PredictImageUrlJsonResponse res = sdk.imagePredictionApi.predictImageUrlJson(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictImageUrlRaw

Predict an image url and saves the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageUrlRawRequest;
import org.openapis.openapi.models.operations.PredictImageUrlRawResponse;
import org.openapis.openapi.models.shared.ImageUrl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageUrlRawRequest req = new PredictImageUrlRawRequest("amet", "tempore".getBytes(), "e453f870-b326-4b5a-b342-9cdb1a8422bb") {{
                application = "aliquid";
                iterationId = "79d23227-15bf-40cb-b1e3-1b8b90f3443a";
            }};            

            PredictImageUrlRawResponse res = sdk.imagePredictionApi.predictImageUrlRaw(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictImageWithNoStore

Predict an image without saving the result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictImageWithNoStoreRequest;
import org.openapis.openapi.models.operations.PredictImageWithNoStoreRequestBody;
import org.openapis.openapi.models.operations.PredictImageWithNoStoreRequestBodyImageData;
import org.openapis.openapi.models.operations.PredictImageWithNoStoreResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PredictImageWithNoStoreRequest req = new PredictImageWithNoStoreRequest("architecto",                 new PredictImageWithNoStoreRequestBody(                new PredictImageWithNoStoreRequestBodyImageData("quae".getBytes(), "aut"););, "8e0adcf4-b921-4879-bce9-53f73ef7fbc7") {{
                application = "similique";
                iterationId = "bd74dd39-c0f5-4d2c-bf7c-70a45626d436";
            }};            

            PredictImageWithNoStoreResponse res = sdk.imagePredictionApi.predictImageWithNoStore(req);

            if (res.imagePredictionResultModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
