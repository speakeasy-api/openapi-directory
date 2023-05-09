# devices

### Available Operations

* [cloudidentityDevicesCreate](#cloudidentitydevicescreate) - Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
* [cloudidentityDevicesDeviceUsersApprove](#cloudidentitydevicesdeviceusersapprove) - Approves device to access user data.
* [cloudidentityDevicesDeviceUsersBlock](#cloudidentitydevicesdeviceusersblock) - Blocks device from accessing user data
* [cloudidentityDevicesDeviceUsersCancelWipe](#cloudidentitydevicesdeviceuserscancelwipe) - Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
* [cloudidentityDevicesDeviceUsersClientStatesList](#cloudidentitydevicesdeviceusersclientstateslist) - Lists the client states for the given search query.
* [cloudidentityDevicesDeviceUsersList](#cloudidentitydevicesdeviceuserslist) - Lists/Searches DeviceUsers.
* [cloudidentityDevicesDeviceUsersLookup](#cloudidentitydevicesdeviceuserslookup) - Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
* [cloudidentityDevicesDeviceUsersWipe](#cloudidentitydevicesdeviceuserswipe) - Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.
* [cloudidentityDevicesList](#cloudidentitydeviceslist) - Lists/Searches devices.

## cloudidentityDevicesCreate

Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesCreateRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesCreateResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1AndroidAttributes;
import org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum;
import org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1DeviceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesCreateRequest req = new CloudidentityDevicesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleAppsCloudidentityDevicesV1DeviceInput = new GoogleAppsCloudidentityDevicesV1DeviceInput() {{
                    androidSpecificAttributes = new GoogleAppsCloudidentityDevicesV1AndroidAttributes() {{
                        enabledUnknownSources = false;
                        ownerProfileAccount = false;
                        ownershipPrivilege = GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum.DEVICE_OWNER;
                        supportsWorkProfile = false;
                    }};;
                    assetTag = "quidem";
                    deviceId = "architecto";
                    lastSyncTime = "ipsa";
                    serialNumber = "reiciendis";
                    wifiMacAddresses = new String[]{{
                        add("mollitia"),
                        add("laborum"),
                        add("dolores"),
                    }};
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                customer = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            CloudidentityDevicesCreateResponse res = sdk.devices.cloudidentityDevicesCreate(req, new CloudidentityDevicesCreateSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesDeviceUsersApprove

Approves device to access user data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersApproveRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersApproveResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesDeviceUsersApproveRequest req = new CloudidentityDevicesDeviceUsersApproveRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsCloudidentityDevicesV1ApproveDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest() {{
                    customer = "architecto";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            CloudidentityDevicesDeviceUsersApproveResponse res = sdk.devices.cloudidentityDevicesDeviceUsersApprove(req, new CloudidentityDevicesDeviceUsersApproveSecurity("quam", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesDeviceUsersBlock

Blocks device from accessing user data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersBlockRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersBlockResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersBlockSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesDeviceUsersBlockRequest req = new CloudidentityDevicesDeviceUsersBlockRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsCloudidentityDevicesV1BlockDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest() {{
                    customer = "quia";
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                key = "enim";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            CloudidentityDevicesDeviceUsersBlockResponse res = sdk.devices.cloudidentityDevicesDeviceUsersBlock(req, new CloudidentityDevicesDeviceUsersBlockSecurity("ipsam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesDeviceUsersCancelWipe

Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersCancelWipeRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersCancelWipeResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersCancelWipeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesDeviceUsersCancelWipeRequest req = new CloudidentityDevicesDeviceUsersCancelWipeRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest() {{
                    customer = "quasi";
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            CloudidentityDevicesDeviceUsersCancelWipeResponse res = sdk.devices.cloudidentityDevicesDeviceUsersCancelWipe(req, new CloudidentityDevicesDeviceUsersCancelWipeSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesDeviceUsersClientStatesList

Lists the client states for the given search query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersClientStatesListRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersClientStatesListResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersClientStatesListSecurity;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesDeviceUsersClientStatesListRequest req = new CloudidentityDevicesDeviceUsersClientStatesListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                customer = "reprehenderit";
                fields = "ut";
                filter = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                orderBy = "dolore";
                pageToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            CloudidentityDevicesDeviceUsersClientStatesListResponse res = sdk.devices.cloudidentityDevicesDeviceUsersClientStatesList(req, new CloudidentityDevicesDeviceUsersClientStatesListSecurity() {{
                option1 = new CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1("accusamus", "commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAppsCloudidentityDevicesV1ListClientStatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesDeviceUsersList

Lists/Searches DeviceUsers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersListRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersListResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersListSecurity;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersListSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesDeviceUsersListRequest req = new CloudidentityDevicesDeviceUsersListRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                customer = "excepturi";
                fields = "pariatur";
                filter = "modi";
                key = "praesentium";
                oauthToken = "rem";
                orderBy = "voluptates";
                pageSize = 93940L;
                pageToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            CloudidentityDevicesDeviceUsersListResponse res = sdk.devices.cloudidentityDevicesDeviceUsersList(req, new CloudidentityDevicesDeviceUsersListSecurity() {{
                option1 = new CloudidentityDevicesDeviceUsersListSecurityOption1("incidunt", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAppsCloudidentityDevicesV1ListDeviceUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesDeviceUsersLookup

Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersLookupRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersLookupResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersLookupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesDeviceUsersLookupRequest req = new CloudidentityDevicesDeviceUsersLookupRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                androidId = "deserunt";
                callback = "distinctio";
                fields = "quibusdam";
                key = "labore";
                oauthToken = "modi";
                pageSize = 183191L;
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "cupiditate";
                rawResourceId = "quos";
                uploadType = "perferendis";
                uploadProtocol = "magni";
                userId = "assumenda";
            }};            

            CloudidentityDevicesDeviceUsersLookupResponse res = sdk.devices.cloudidentityDevicesDeviceUsersLookup(req, new CloudidentityDevicesDeviceUsersLookupSecurity("ipsam", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesDeviceUsersWipe

Wipes the user's account on a device. Other data on the device that is not associated with the user's work account is not affected. For example, if a Gmail app is installed on a device that is used for personal and work purposes, and the user is logged in to the Gmail app with their personal account as well as their work account, wiping the "deviceUser" by their work administrator will not affect their personal account within Gmail or other apps such as Photos.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersWipeRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersWipeResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesDeviceUsersWipeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesDeviceUsersWipeRequest req = new CloudidentityDevicesDeviceUsersWipeRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsCloudidentityDevicesV1WipeDeviceUserRequest = new GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest() {{
                    customer = "excepturi";
                }};;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            CloudidentityDevicesDeviceUsersWipeResponse res = sdk.devices.cloudidentityDevicesDeviceUsersWipe(req, new CloudidentityDevicesDeviceUsersWipeSecurity("aliquid", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityDevicesList

Lists/Searches devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityDevicesListRequest;
import org.openapis.openapi.models.operations.CloudidentityDevicesListResponse;
import org.openapis.openapi.models.operations.CloudidentityDevicesListSecurity;
import org.openapis.openapi.models.operations.CloudidentityDevicesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityDevicesListSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityDevicesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityDevicesListRequest req = new CloudidentityDevicesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                customer = "debitis";
                fields = "a";
                filter = "dolorum";
                key = "in";
                oauthToken = "in";
                orderBy = "illum";
                pageSize = 978571L;
                pageToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
                view = CloudidentityDevicesListViewEnum.USER_ASSIGNED_DEVICES;
            }};            

            CloudidentityDevicesListResponse res = sdk.devices.cloudidentityDevicesList(req, new CloudidentityDevicesListSecurity() {{
                option1 = new CloudidentityDevicesListSecurityOption1("ea", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleAppsCloudidentityDevicesV1ListDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
