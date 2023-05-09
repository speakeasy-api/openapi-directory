# wirelessProfiles

### Available Operations

* [createNetworkCameraWirelessProfile](#createnetworkcamerawirelessprofile) - Creates a new camera wireless profile for this network.
* [deleteNetworkCameraWirelessProfile](#deletenetworkcamerawirelessprofile) - Delete an existing camera wireless profile for this network.
* [getDeviceCameraWirelessProfiles](#getdevicecamerawirelessprofiles) - Returns wireless profile assigned to the given camera
* [getNetworkCameraWirelessProfile](#getnetworkcamerawirelessprofile) - Retrieve a single camera wireless profile.
* [getNetworkCameraWirelessProfiles](#getnetworkcamerawirelessprofiles) - List the camera wireless profiles for this network.
* [updateDeviceCameraWirelessProfiles](#updatedevicecamerawirelessprofiles) - Assign wireless profiles to the given camera
* [updateNetworkCameraWirelessProfile](#updatenetworkcamerawirelessprofile) - Update an existing camera wireless profile in this network.

## createNetworkCameraWirelessProfile

Creates a new camera wireless profile for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBodyIdentity;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBodySsid;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
import org.openapis.openapi.models.operations.CreateNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkCameraWirelessProfileRequest req = new CreateNetworkCameraWirelessProfileRequest(                new CreateNetworkCameraWirelessProfileRequestBody("iusto",                 new CreateNetworkCameraWirelessProfileRequestBodySsid() {{
                                                authMode = CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum.PSK;
                                                encryptionMode = "eum";
                                                name = "Shannon Thompson";
                                                psk = "temporibus";
                                            }};) {{
                                identity = new CreateNetworkCameraWirelessProfileRequestBodyIdentity() {{
                                    password = "esse";
                                    username = "Katelynn6";
                                }};;
                            }};, "quisquam");            

            CreateNetworkCameraWirelessProfileResponse res = sdk.wirelessProfiles.createNetworkCameraWirelessProfile(req);

            if (res.createNetworkCameraWirelessProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkCameraWirelessProfile

Delete an existing camera wireless profile for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.DeleteNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkCameraWirelessProfileRequest req = new DeleteNetworkCameraWirelessProfileRequest("beatae", "minus");            

            DeleteNetworkCameraWirelessProfileResponse res = sdk.wirelessProfiles.deleteNetworkCameraWirelessProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCameraWirelessProfiles

Returns wireless profile assigned to the given camera

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraWirelessProfilesRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraWirelessProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraWirelessProfilesRequest req = new GetDeviceCameraWirelessProfilesRequest("delectus");            

            GetDeviceCameraWirelessProfilesResponse res = sdk.wirelessProfiles.getDeviceCameraWirelessProfiles(req);

            if (res.getDeviceCameraWirelessProfiles200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraWirelessProfile

Retrieve a single camera wireless profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraWirelessProfileRequest req = new GetNetworkCameraWirelessProfileRequest("similique", "voluptatum");            

            GetNetworkCameraWirelessProfileResponse res = sdk.wirelessProfiles.getNetworkCameraWirelessProfile(req);

            if (res.getNetworkCameraWirelessProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCameraWirelessProfiles

List the camera wireless profiles for this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfilesRequest;
import org.openapis.openapi.models.operations.GetNetworkCameraWirelessProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCameraWirelessProfilesRequest req = new GetNetworkCameraWirelessProfilesRequest("dolore");            

            GetNetworkCameraWirelessProfilesResponse res = sdk.wirelessProfiles.getNetworkCameraWirelessProfiles(req);

            if (res.getNetworkCameraWirelessProfiles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceCameraWirelessProfiles

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesRequest;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesRequestBody;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesRequestBodyIds;
import org.openapis.openapi.models.operations.UpdateDeviceCameraWirelessProfilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceCameraWirelessProfilesRequest req = new UpdateDeviceCameraWirelessProfilesRequest(                new UpdateDeviceCameraWirelessProfilesRequestBody(                new UpdateDeviceCameraWirelessProfilesRequestBodyIds() {{
                                                backup = "fuga";
                                                primary = "non";
                                                secondary = "quibusdam";
                                            }};);, "accusantium");            

            UpdateDeviceCameraWirelessProfilesResponse res = sdk.wirelessProfiles.updateDeviceCameraWirelessProfiles(req);

            if (res.updateDeviceCameraWirelessProfiles200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCameraWirelessProfile

Update an existing camera wireless profile in this network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBodyIdentity;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBodySsid;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkCameraWirelessProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCameraWirelessProfileRequest req = new UpdateNetworkCameraWirelessProfileRequest("ex", "nobis") {{
                requestBody = new UpdateNetworkCameraWirelessProfileRequestBody() {{
                    identity = new UpdateNetworkCameraWirelessProfileRequestBodyIdentity() {{
                        password = "aliquid";
                        username = "Dedrick_Bednar92";
                    }};;
                    name = "Miss Jeanne Muller";
                    ssid = new UpdateNetworkCameraWirelessProfileRequestBodySsid() {{
                        authMode = UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum.PSK;
                        encryptionMode = "ipsam";
                        name = "Max Luettgen";
                        psk = "vero";
                    }};;
                }};;
            }};            

            UpdateNetworkCameraWirelessProfileResponse res = sdk.wirelessProfiles.updateNetworkCameraWirelessProfile(req);

            if (res.updateNetworkCameraWirelessProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
