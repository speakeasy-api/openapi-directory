# mobiledevices

### Available Operations

* [directoryMobiledevicesAction](#directorymobiledevicesaction) - Takes an action that affects a mobile device. For example, remotely wiping a device.
* [directoryMobiledevicesDelete](#directorymobiledevicesdelete) - Removes a mobile device.
* [directoryMobiledevicesGet](#directorymobiledevicesget) - Retrieves a mobile device's properties.
* [directoryMobiledevicesList](#directorymobiledeviceslist) - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

## directoryMobiledevicesAction

Takes an action that affects a mobile device. For example, remotely wiping a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesActionRequest;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesActionResponse;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesActionSecurity;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesActionSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesActionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MobileDeviceAction;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMobiledevicesActionRequest req = new DirectoryMobiledevicesActionRequest("laborum", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                mobileDeviceAction = new MobileDeviceAction() {{
                    action = "qui";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "explicabo";
                key = "exercitationem";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "ab";
                uploadProtocol = "illo";
            }};            

            DirectoryMobiledevicesActionResponse res = sdk.mobiledevices.directoryMobiledevicesAction(req, new DirectoryMobiledevicesActionSecurity() {{
                option1 = new DirectoryMobiledevicesActionSecurityOption1("hic", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## directoryMobiledevicesDelete

Removes a mobile device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMobiledevicesDeleteRequest req = new DirectoryMobiledevicesDeleteRequest("delectus", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "numquam";
                key = "repudiandae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "explicabo";
                uploadProtocol = "accusamus";
            }};            

            DirectoryMobiledevicesDeleteResponse res = sdk.mobiledevices.directoryMobiledevicesDelete(req, new DirectoryMobiledevicesDeleteSecurity("rem", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## directoryMobiledevicesGet

Retrieves a mobile device's properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesGetProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesGetRequest;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesGetResponse;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesGetSecurity;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesGetSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMobiledevicesGetRequest req = new DirectoryMobiledevicesGetRequest("odit", "deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "libero";
                key = "magnam";
                oauthToken = "sit";
                prettyPrint = false;
                projection = DirectoryMobiledevicesGetProjectionEnum.BASIC;
                quotaUser = "eum";
                uploadType = "nesciunt";
                uploadProtocol = "mollitia";
            }};            

            DirectoryMobiledevicesGetResponse res = sdk.mobiledevices.directoryMobiledevicesGet(req, new DirectoryMobiledevicesGetSecurity() {{
                option1 = new DirectoryMobiledevicesGetSecurityOption1("dignissimos", "fugiat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.mobileDevice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryMobiledevicesList

Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListOrderByEnum;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListProjectionEnum;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListRequest;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListResponse;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListSecurity;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListSecurityOption2;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListSecurityOption3;
import org.openapis.openapi.models.operations.DirectoryMobiledevicesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryMobiledevicesListRequest req = new DirectoryMobiledevicesListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "modi";
                key = "aut";
                maxResults = 13508L;
                oauthToken = "eveniet";
                orderBy = DirectoryMobiledevicesListOrderByEnum.MODEL;
                pageToken = "commodi";
                prettyPrint = false;
                projection = DirectoryMobiledevicesListProjectionEnum.BASIC;
                query = "dolorum";
                quotaUser = "possimus";
                sortOrder = DirectoryMobiledevicesListSortOrderEnum.ASCENDING;
                uploadType = "consectetur";
                uploadProtocol = "nesciunt";
            }};            

            DirectoryMobiledevicesListResponse res = sdk.mobiledevices.directoryMobiledevicesList(req, new DirectoryMobiledevicesListSecurity() {{
                option1 = new DirectoryMobiledevicesListSecurityOption1("quaerat", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.mobileDevices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
