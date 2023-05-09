# apiSpecification

### Available Operations

* [deleteAPISpecification](#deleteapispecification) - Delete an API specification in ReadMe
* [getAPISpecification](#getapispecification) - Get API specification metadata
* [updateAPISpecification](#updateapispecification) - Update an API specification in ReadMe
* [uploadAPISpecification](#uploadapispecification) - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

## deleteAPISpecification

Delete an API specification in ReadMe

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAPISpecificationRequest;
import org.openapis.openapi.models.operations.DeleteAPISpecificationResponse;
import org.openapis.openapi.models.operations.DeleteAPISpecificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAPISpecificationRequest req = new DeleteAPISpecificationRequest("quibusdam");            

            DeleteAPISpecificationResponse res = sdk.apiSpecification.deleteAPISpecification(req, new DeleteAPISpecificationSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAPISpecification

Get API specification metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAPISpecificationRequest;
import org.openapis.openapi.models.operations.GetAPISpecificationResponse;
import org.openapis.openapi.models.operations.GetAPISpecificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAPISpecificationRequest req = new GetAPISpecificationRequest("corrupti") {{
                page = 847252L;
                perPage = 423655L;
            }};            

            GetAPISpecificationResponse res = sdk.apiSpecification.getAPISpecification(req, new GetAPISpecificationSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAPISpecification

Update an API specification in ReadMe

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAPISpecificationRequest;
import org.openapis.openapi.models.operations.UpdateAPISpecificationRequestBody;
import org.openapis.openapi.models.operations.UpdateAPISpecificationRequestBodySpec;
import org.openapis.openapi.models.operations.UpdateAPISpecificationResponse;
import org.openapis.openapi.models.operations.UpdateAPISpecificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAPISpecificationRequest req = new UpdateAPISpecificationRequest(                new UpdateAPISpecificationRequestBody() {{
                                spec = new UpdateAPISpecificationRequestBodySpec("suscipit".getBytes(), "iure");;
                            }};, "magnam");            

            UpdateAPISpecificationResponse res = sdk.apiSpecification.updateAPISpecification(req, new UpdateAPISpecificationSecurity("debitis", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadAPISpecification

Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadAPISpecificationRequest;
import org.openapis.openapi.models.operations.UploadAPISpecificationRequestBody;
import org.openapis.openapi.models.operations.UploadAPISpecificationRequestBodySpec;
import org.openapis.openapi.models.operations.UploadAPISpecificationResponse;
import org.openapis.openapi.models.operations.UploadAPISpecificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadAPISpecificationRequest req = new UploadAPISpecificationRequest(                new UploadAPISpecificationRequestBody() {{
                                spec = new UploadAPISpecificationRequestBodySpec("delectus".getBytes(), "tempora");;
                            }};, "suscipit");            

            UploadAPISpecificationResponse res = sdk.apiSpecification.uploadAPISpecification(req, new UploadAPISpecificationSecurity("molestiae", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
