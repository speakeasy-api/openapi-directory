# installs

### Available Operations

* [androidenterpriseInstallsDelete](#androidenterpriseinstallsdelete) - Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
* [androidenterpriseInstallsGet](#androidenterpriseinstallsget) - Retrieves details of an installation of an app on a device.
* [androidenterpriseInstallsList](#androidenterpriseinstallslist) - Retrieves the details of all apps installed on the specified device.
* [androidenterpriseInstallsUpdate](#androidenterpriseinstallsupdate) - Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

## androidenterpriseInstallsDelete

Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseInstallsDeleteRequest req = new AndroidenterpriseInstallsDeleteRequest("iste", "temporibus", "accusantium", "rem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "ab";
                key = "corrupti";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "dolor";
                uploadProtocol = "occaecati";
            }};            

            AndroidenterpriseInstallsDeleteResponse res = sdk.installs.androidenterpriseInstallsDelete(req, new AndroidenterpriseInstallsDeleteSecurity("numquam", "impedit") {{
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

## androidenterpriseInstallsGet

Retrieves details of an installation of an app on a device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseInstallsGetRequest req = new AndroidenterpriseInstallsGetRequest("explicabo", "voluptas", "aut", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "voluptatibus";
                key = "voluptas";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "ea";
                uploadProtocol = "quaerat";
            }};            

            AndroidenterpriseInstallsGetResponse res = sdk.installs.androidenterpriseInstallsGet(req, new AndroidenterpriseInstallsGetSecurity("consequuntur", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.install != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseInstallsList

Retrieves the details of all apps installed on the specified device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseInstallsListRequest req = new AndroidenterpriseInstallsListRequest("officia", "maxime", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "quaerat";
                key = "porro";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "ab";
                uploadProtocol = "adipisci";
            }};            

            AndroidenterpriseInstallsListResponse res = sdk.installs.androidenterpriseInstallsList(req, new AndroidenterpriseInstallsListSecurity("fuga", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.installsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseInstallsUpdate

Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseInstallsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Install;
import org.openapis.openapi.models.shared.InstallInstallStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseInstallsUpdateRequest req = new AndroidenterpriseInstallsUpdateRequest("suscipit", "velit", "culpa", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                install = new Install() {{
                    installState = InstallInstallStateEnum.INSTALL_PENDING;
                    productId = "fugiat";
                    versionCode = 424089;
                }};;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "labore";
                key = "possimus";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "commodi";
                uploadProtocol = "in";
            }};            

            AndroidenterpriseInstallsUpdateResponse res = sdk.installs.androidenterpriseInstallsUpdate(req, new AndroidenterpriseInstallsUpdateSecurity("corporis", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.install != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
