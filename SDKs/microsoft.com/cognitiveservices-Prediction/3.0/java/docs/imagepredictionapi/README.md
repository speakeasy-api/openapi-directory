# imagePredictionApi

### Available Operations

* [classifyImage](#classifyimage) - Classify an image and saves the result.
* [classifyImageUrlWithNoStoreForm](#classifyimageurlwithnostoreform) - Classify an image url without saving the result.
* [classifyImageUrlWithNoStoreJson](#classifyimageurlwithnostorejson) - Classify an image url without saving the result.
* [classifyImageUrlWithNoStoreRaw](#classifyimageurlwithnostoreraw) - Classify an image url without saving the result.
* [classifyImageUrlForm](#classifyimageurlform) - Classify an image url and saves the result.
* [classifyImageUrlJson](#classifyimageurljson) - Classify an image url and saves the result.
* [classifyImageUrlRaw](#classifyimageurlraw) - Classify an image url and saves the result.
* [classifyImageWithNoStore](#classifyimagewithnostore) - Classify an image without saving the result.
* [detectImage](#detectimage) - Detect objects in an image and saves the result.
* [detectImageUrlWithNoStoreForm](#detectimageurlwithnostoreform) - Detect objects in an image url without saving the result.
* [detectImageUrlWithNoStoreJson](#detectimageurlwithnostorejson) - Detect objects in an image url without saving the result.
* [detectImageUrlWithNoStoreRaw](#detectimageurlwithnostoreraw) - Detect objects in an image url without saving the result.
* [detectImageUrlForm](#detectimageurlform) - Detect objects in an image url and saves the result.
* [detectImageUrlJson](#detectimageurljson) - Detect objects in an image url and saves the result.
* [detectImageUrlRaw](#detectimageurlraw) - Detect objects in an image url and saves the result.
* [detectImageWithNoStore](#detectimagewithnostore) - Detect objects in an image without saving the result.

## classifyImage

Classify an image and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageRequest;
import org.openapis.openapi.models.operations.ClassifyImageRequestBody;
import org.openapis.openapi.models.operations.ClassifyImageRequestBodyImageData;
import org.openapis.openapi.models.operations.ClassifyImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageRequest req = new ClassifyImageRequest(                new ClassifyImageRequestBody(                new ClassifyImageRequestBodyImageData("odit".getBytes(), "at"););, "df7cc78c-a1ba-4928-bc81-6742cb739205", "natus") {{
                application = "sed";
            }};            

            ClassifyImageResponse res = sdk.imagePredictionApi.classifyImage(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyImageUrlWithNoStoreForm

Classify an image url without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageUrlWithNoStoreFormRequest;
import org.openapis.openapi.models.operations.ClassifyImageUrlWithNoStoreFormResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageUrlWithNoStoreFormRequest req = new ClassifyImageUrlWithNoStoreFormRequest(                new ImageUrl("dolor");, "96fea759-6eb1-40fa-aa23-52c5955907af", "sapiente") {{
                application = "architecto";
            }};            

            ClassifyImageUrlWithNoStoreFormResponse res = sdk.imagePredictionApi.classifyImageUrlWithNoStoreForm(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyImageUrlWithNoStoreJson

Classify an image url without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageUrlWithNoStoreJsonRequest;
import org.openapis.openapi.models.operations.ClassifyImageUrlWithNoStoreJsonResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageUrlWithNoStoreJsonRequest req = new ClassifyImageUrlWithNoStoreJsonRequest(                new ImageUrl("dolorem");, "a2fa9467-7392-451a-a52c-3f5ad019da1f", "voluptatibus") {{
                application = "vero";
            }};            

            ClassifyImageUrlWithNoStoreJsonResponse res = sdk.imagePredictionApi.classifyImageUrlWithNoStoreJson(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyImageUrlWithNoStoreRaw

Classify an image url without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageUrlWithNoStoreRawRequest;
import org.openapis.openapi.models.operations.ClassifyImageUrlWithNoStoreRawResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageUrlWithNoStoreRawRequest req = new ClassifyImageUrlWithNoStoreRawRequest("praesentium".getBytes(), "f097b007-4f15-4471-b5e6-e13b99d488e1", "repudiandae") {{
                application = "sint";
            }};            

            ClassifyImageUrlWithNoStoreRawResponse res = sdk.imagePredictionApi.classifyImageUrlWithNoStoreRaw(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyImageUrlForm

Classify an image url and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageUrlFormRequest;
import org.openapis.openapi.models.operations.ClassifyImageUrlFormResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageUrlFormRequest req = new ClassifyImageUrlFormRequest(                new ImageUrl("itaque");, "450ad2ab-d442-4698-82d5-02a94bb4f63c", "sint") {{
                application = "aliquid";
            }};            

            ClassifyImageUrlFormResponse res = sdk.imagePredictionApi.classifyImageUrlForm(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyImageUrlJson

Classify an image url and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageUrlJsonRequest;
import org.openapis.openapi.models.operations.ClassifyImageUrlJsonResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageUrlJsonRequest req = new ClassifyImageUrlJsonRequest(                new ImageUrl("necessitatibus");, "9a3efa77-dfb1-44cd-a6ae-395efb9ba88f", "amet") {{
                application = "deserunt";
            }};            

            ClassifyImageUrlJsonResponse res = sdk.imagePredictionApi.classifyImageUrlJson(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyImageUrlRaw

Classify an image url and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageUrlRawRequest;
import org.openapis.openapi.models.operations.ClassifyImageUrlRawResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageUrlRawRequest req = new ClassifyImageUrlRawRequest("vel".getBytes(), "997074ba-4469-4b6e-a141-959890afa563", "necessitatibus") {{
                application = "odit";
            }};            

            ClassifyImageUrlRawResponse res = sdk.imagePredictionApi.classifyImageUrlRaw(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyImageWithNoStore

Classify an image without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyImageWithNoStoreRequest;
import org.openapis.openapi.models.operations.ClassifyImageWithNoStoreRequestBody;
import org.openapis.openapi.models.operations.ClassifyImageWithNoStoreRequestBodyImageData;
import org.openapis.openapi.models.operations.ClassifyImageWithNoStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyImageWithNoStoreRequest req = new ClassifyImageWithNoStoreRequest(                new ClassifyImageWithNoStoreRequestBody(                new ClassifyImageWithNoStoreRequestBodyImageData("quasi".getBytes(), "iure"););, "fe4c8b71-1e5b-47fd-aed0-28921cddc692", "ea") {{
                application = "accusantium";
            }};            

            ClassifyImageWithNoStoreResponse res = sdk.imagePredictionApi.classifyImageWithNoStore(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImage

Detect objects in an image and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageRequest;
import org.openapis.openapi.models.operations.DetectImageRequestBody;
import org.openapis.openapi.models.operations.DetectImageRequestBodyImageData;
import org.openapis.openapi.models.operations.DetectImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageRequest req = new DetectImageRequest(                new DetectImageRequestBody(                new DetectImageRequestBodyImageData("maiores".getBytes(), "quidem"););, "576b0d5f-0d30-4c5f-bb25-87053202c73d", "nostrum") {{
                application = "hic";
            }};            

            DetectImageResponse res = sdk.imagePredictionApi.detectImage(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImageUrlWithNoStoreForm

Detect objects in an image url without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageUrlWithNoStoreFormRequest;
import org.openapis.openapi.models.operations.DetectImageUrlWithNoStoreFormResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageUrlWithNoStoreFormRequest req = new DetectImageUrlWithNoStoreFormRequest(                new ImageUrl("omnis");, "b90c2890-9b3f-4e49-a8d9-cbf48633323f", "excepturi") {{
                application = "cum";
            }};            

            DetectImageUrlWithNoStoreFormResponse res = sdk.imagePredictionApi.detectImageUrlWithNoStoreForm(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImageUrlWithNoStoreJson

Detect objects in an image url without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageUrlWithNoStoreJsonRequest;
import org.openapis.openapi.models.operations.DetectImageUrlWithNoStoreJsonResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageUrlWithNoStoreJsonRequest req = new DetectImageUrlWithNoStoreJsonRequest(                new ImageUrl("dignissimos");, "f3a41006-74eb-4f69-a80d-1ba77a89ebf7", "ipsum") {{
                application = "voluptate";
            }};            

            DetectImageUrlWithNoStoreJsonResponse res = sdk.imagePredictionApi.detectImageUrlWithNoStoreJson(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImageUrlWithNoStoreRaw

Detect objects in an image url without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageUrlWithNoStoreRawRequest;
import org.openapis.openapi.models.operations.DetectImageUrlWithNoStoreRawResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageUrlWithNoStoreRawRequest req = new DetectImageUrlWithNoStoreRawRequest("saepe".getBytes(), "4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf", "amet") {{
                application = "tempore";
            }};            

            DetectImageUrlWithNoStoreRawResponse res = sdk.imagePredictionApi.detectImageUrlWithNoStoreRaw(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImageUrlForm

Detect objects in an image url and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageUrlFormRequest;
import org.openapis.openapi.models.operations.DetectImageUrlFormResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageUrlFormRequest req = new DetectImageUrlFormRequest(                new ImageUrl("numquam");, "53f870b3-26b5-4a73-829c-db1a8422bb67", "molestias") {{
                application = "temporibus";
            }};            

            DetectImageUrlFormResponse res = sdk.imagePredictionApi.detectImageUrlForm(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImageUrlJson

Detect objects in an image url and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageUrlJsonRequest;
import org.openapis.openapi.models.operations.DetectImageUrlJsonResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageUrlJsonRequest req = new DetectImageUrlJsonRequest(                new ImageUrl("neque");, "22715bf0-cbb1-4e31-b8b9-0f3443a1108e", "consequatur") {{
                application = "est";
            }};            

            DetectImageUrlJsonResponse res = sdk.imagePredictionApi.detectImageUrlJson(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImageUrlRaw

Detect objects in an image url and saves the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageUrlRawRequest;
import org.openapis.openapi.models.operations.DetectImageUrlRawResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageUrlRawRequest req = new DetectImageUrlRawRequest("porro".getBytes(), "f4b92187-9fce-4953-b73e-f7fbc7abd74d", "illum") {{
                application = "sequi";
            }};            

            DetectImageUrlRawResponse res = sdk.imagePredictionApi.detectImageUrlRaw(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectImageWithNoStore

Detect objects in an image without saving the result.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectImageWithNoStoreRequest;
import org.openapis.openapi.models.operations.DetectImageWithNoStoreRequestBody;
import org.openapis.openapi.models.operations.DetectImageWithNoStoreRequestBodyImageData;
import org.openapis.openapi.models.operations.DetectImageWithNoStoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectImageWithNoStoreRequest req = new DetectImageWithNoStoreRequest(                new DetectImageWithNoStoreRequestBody(                new DetectImageWithNoStoreRequestBodyImageData("impedit".getBytes(), "aut"););, "f5d2cff7-c70a-4456-a6d4-36813f16d9f5", "sapiente") {{
                application = "quisquam";
            }};            

            DetectImageWithNoStoreResponse res = sdk.imagePredictionApi.detectImageWithNoStore(req);

            if (res.imagePrediction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
