# translate

### Available Operations

* [getLanguages](#getlanguages) - Retrieve list of supported languages
* [postDetect](#postdetect) - Detect the language of a single text
* [postTranslate](#posttranslate) - Translate text from a language to another
* [postTranslateFile](#posttranslatefile) - Translate file from a language to another

## getLanguages

Retrieve list of supported languages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLanguagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLanguagesResponse res = sdk.translate.getLanguages();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDetect

Detect the language of a single text

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDetectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"            

            PostDetectResponse res = sdk.translate.postDetect(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTranslate

Translate text from a language to another

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTranslateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"            

            PostTranslateResponse res = sdk.translate.postTranslate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTranslateFile

Translate file from a language to another

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTranslateFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"            

            PostTranslateFileResponse res = sdk.translate.postTranslateFile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
