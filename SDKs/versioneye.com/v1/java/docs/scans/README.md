# scans

### Available Operations

* [getApiV1Scans](#getapiv1scans) - Retrieves all scans
* [getApiV1ScansId](#getapiv1scansid) - Retrieves a project scan result
* [getApiV1ScansIdFilesFileId](#getapiv1scansidfilesfileid) - Retrieves a file object, containing information about dependencies in the file

## getApiV1Scans

Retrieves all scans

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ScansRequest;
import org.openapis.openapi.models.operations.GetApiV1ScansResponse;
import org.openapis.openapi.models.operations.GetApiV1ScansSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ScansRequest req = new GetApiV1ScansRequest() {{
                name = "Ben Mueller";
                perPage = "iure";
            }};            

            GetApiV1ScansResponse res = sdk.scans.getApiV1Scans(req, new GetApiV1ScansSecurity("magnam") {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getApiV1ScansId

Retrieves a project scan result

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ScansIdRequest;
import org.openapis.openapi.models.operations.GetApiV1ScansIdResponse;
import org.openapis.openapi.models.operations.GetApiV1ScansIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ScansIdRequest req = new GetApiV1ScansIdRequest("debitis");            

            GetApiV1ScansIdResponse res = sdk.scans.getApiV1ScansId(req, new GetApiV1ScansIdSecurity("ipsa") {{
                apiKey = "YOUR_API_KEY_HERE";
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

## getApiV1ScansIdFilesFileId

Retrieves a file object, containing information about dependencies in the file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1ScansIdFilesFileIdRequest;
import org.openapis.openapi.models.operations.GetApiV1ScansIdFilesFileIdResponse;
import org.openapis.openapi.models.operations.GetApiV1ScansIdFilesFileIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1ScansIdFilesFileIdRequest req = new GetApiV1ScansIdFilesFileIdRequest("delectus", "tempora") {{
                perPage = "suscipit";
            }};            

            GetApiV1ScansIdFilesFileIdResponse res = sdk.scans.getApiV1ScansIdFilesFileId(req, new GetApiV1ScansIdFilesFileIdSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
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
