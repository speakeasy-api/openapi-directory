# meterFolderInformation

### Available Operations

* [meterFolderInformationGet](#meterfolderinformationget) - Beta: Gets the General Information for a Meter or a Folder
* [meterFolderInformationPostForm](#meterfolderinformationpostform) - Sets the Name of a Meter or a Folder
* [meterFolderInformationPostJson](#meterfolderinformationpostjson) - Sets the Name of a Meter or a Folder
* [meterFolderInformationPostRaw](#meterfolderinformationpostraw) - Sets the Name of a Meter or a Folder

## meterFolderInformationGet

Beta: Gets the General Information for a Meter or a Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeterFolderInformationGetRequest;
import org.openapis.openapi.models.operations.MeterFolderInformationGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MeterFolderInformationGetRequest req = new MeterFolderInformationGetRequest("laudantium");            

            MeterFolderInformationGetResponse res = sdk.meterFolderInformation.meterFolderInformationGet(req);

            if (res.meterFolderInformation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## meterFolderInformationPostForm

Sets the Name of a Meter or a Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeterFolderInformationPostFormResponse;
import org.openapis.openapi.models.shared.MeterFolderInformationToPost;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.MeterFolderInformationToPost req = new MeterFolderInformationToPost() {{
                id = "13f16d9f-5fce-46c5-9614-6c3e250fb008";
                name = "Jim Corkery I";
            }};            

            MeterFolderInformationPostFormResponse res = sdk.meterFolderInformation.meterFolderInformationPostForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## meterFolderInformationPostJson

Sets the Name of a Meter or a Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeterFolderInformationPostJsonResponse;
import org.openapis.openapi.models.shared.MeterFolderInformationToPost;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.MeterFolderInformationToPost req = new MeterFolderInformationToPost() {{
                id = "1aac366c-8dd6-4b14-8290-7474778a7bd4";
                name = "Yolanda Shields";
            }};            

            MeterFolderInformationPostJsonResponse res = sdk.meterFolderInformation.meterFolderInformationPostJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## meterFolderInformationPostRaw

Sets the Name of a Meter or a Folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeterFolderInformationPostRawResponse;
import org.openapis.openapi.models.shared.MeterFolderInformationToPost;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "quisquam".getBytes()            

            MeterFolderInformationPostRawResponse res = sdk.meterFolderInformation.meterFolderInformationPostRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
