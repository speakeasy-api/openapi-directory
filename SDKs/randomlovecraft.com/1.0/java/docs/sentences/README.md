# sentences

### Available Operations

* [getSentences](#getsentences) - A random sentence
* [getSentencesFromBook](#getsentencesfrombook) - Random sentences from a specific book
* [getSpecificSentence](#getspecificsentence) - A specific sentence

## getSentences

A random sentence

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSentencesRequest;
import org.openapis.openapi.models.operations.GetSentencesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSentencesRequest req = new GetSentencesRequest() {{
                limit = 548814L;
            }};            

            GetSentencesResponse res = sdk.sentences.getSentences(req);

            if (res.getSentences200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSentencesFromBook

Random sentences from a specific book

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSentencesFromBookRequest;
import org.openapis.openapi.models.operations.GetSentencesFromBookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSentencesFromBookRequest req = new GetSentencesFromBookRequest("provident") {{
                limit = 715190L;
            }};            

            GetSentencesFromBookResponse res = sdk.sentences.getSentencesFromBook(req);

            if (res.getSentencesFromBook200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpecificSentence

A specific sentence

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecificSentenceRequest;
import org.openapis.openapi.models.operations.GetSpecificSentenceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecificSentenceRequest req = new GetSpecificSentenceRequest("quibusdam");            

            GetSpecificSentenceResponse res = sdk.sentences.getSpecificSentence(req);

            if (res.getSpecificSentence200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
