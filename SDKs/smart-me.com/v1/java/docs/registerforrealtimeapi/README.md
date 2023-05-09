# registerForRealtimeApi

### Available Operations

* [registerForRealtimeApiDelete](#registerforrealtimeapidelete) - Deletes a realtime API registration.
* [registerForRealtimeApiGet](#registerforrealtimeapiget) - Gets all registrations for the Realtime API.
* [registerForRealtimeApiPostForm](#registerforrealtimeapipostform) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [registerForRealtimeApiPostJson](#registerforrealtimeapipostjson) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
* [registerForRealtimeApiPostRaw](#registerforrealtimeapipostraw) - Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
             More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

## registerForRealtimeApiDelete

Deletes a realtime API registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterForRealtimeApiDeleteRequest;
import org.openapis.openapi.models.operations.RegisterForRealtimeApiDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegisterForRealtimeApiDeleteRequest req = new RegisterForRealtimeApiDeleteRequest("quo");            

            RegisterForRealtimeApiDeleteResponse res = sdk.registerForRealtimeApi.registerForRealtimeApiDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerForRealtimeApiGet

Gets all registrations for the Realtime API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterForRealtimeApiGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegisterForRealtimeApiGetResponse res = sdk.registerForRealtimeApi.registerForRealtimeApiGet();

            if (res.registerRealtimeApiData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerForRealtimeApiPostForm

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterForRealtimeApiPostFormResponse;
import org.openapis.openapi.models.shared.RegisterRealtimeApiData;
import org.openapis.openapi.models.shared.RegisterRealtimeApiDataRegistrationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegisterRealtimeApiData req = new RegisterRealtimeApiData() {{
                apiUrl = "esse";
                basicAuthPassword = "recusandae";
                basicAuthUsername = "aperiam";
                id = "bc7178e4-796f-42a7-8c68-8282aa482562";
                meterId = "sapiente";
                registrationType = RegisterRealtimeApiDataRegistrationTypeEnum.DISABLED;
                serialNumber = "ratione";
            }};            

            RegisterForRealtimeApiPostFormResponse res = sdk.registerForRealtimeApi.registerForRealtimeApiPostForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerForRealtimeApiPostJson

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterForRealtimeApiPostJsonResponse;
import org.openapis.openapi.models.shared.RegisterRealtimeApiData;
import org.openapis.openapi.models.shared.RegisterRealtimeApiDataRegistrationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegisterRealtimeApiData req = new RegisterRealtimeApiData() {{
                apiUrl = "explicabo";
                basicAuthPassword = "saepe";
                basicAuthUsername = "occaecati";
                id = "817ee17c-be61-4e6b-bb95-bc0ab3c20c4f";
                meterId = "consectetur";
                registrationType = RegisterRealtimeApiDataRegistrationTypeEnum.SINGLE_METER_REGISTRATION;
                serialNumber = "blanditiis";
            }};            

            RegisterForRealtimeApiPostJsonResponse res = sdk.registerForRealtimeApi.registerForRealtimeApiPostJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerForRealtimeApiPostRaw

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterForRealtimeApiPostRawResponse;
import org.openapis.openapi.models.shared.RegisterRealtimeApiData;
import org.openapis.openapi.models.shared.RegisterRealtimeApiDataRegistrationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "provident".getBytes()            

            RegisterForRealtimeApiPostRawResponse res = sdk.registerForRealtimeApi.registerForRealtimeApiPostRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
