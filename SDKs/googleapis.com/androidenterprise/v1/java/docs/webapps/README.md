# webapps

### Available Operations

* [androidenterpriseWebappsDelete](#androidenterprisewebappsdelete) - Deletes an existing web app.
* [androidenterpriseWebappsGet](#androidenterprisewebappsget) - Gets an existing web app.
* [androidenterpriseWebappsInsert](#androidenterprisewebappsinsert) - Creates a new web app for the enterprise.
* [androidenterpriseWebappsList](#androidenterprisewebappslist) - Retrieves the details of all web apps for a given enterprise.
* [androidenterpriseWebappsUpdate](#androidenterprisewebappsupdate) - Updates an existing web app.

## androidenterpriseWebappsDelete

Deletes an existing web app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseWebappsDeleteRequest req = new AndroidenterpriseWebappsDeleteRequest("commodi", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "dolorem";
                key = "modi";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "vero";
                uploadProtocol = "sequi";
            }};            

            AndroidenterpriseWebappsDeleteResponse res = sdk.webapps.androidenterpriseWebappsDelete(req, new AndroidenterpriseWebappsDeleteSecurity("repudiandae", "cum") {{
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

## androidenterpriseWebappsGet

Gets an existing web app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseWebappsGetRequest req = new AndroidenterpriseWebappsGetRequest("dicta", "earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "dicta";
                key = "consequuntur";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "ipsa";
                uploadProtocol = "ducimus";
            }};            

            AndroidenterpriseWebappsGetResponse res = sdk.webapps.androidenterpriseWebappsGet(req, new AndroidenterpriseWebappsGetSecurity("maiores", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseWebappsInsert

Creates a new web app for the enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsInsertRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsInsertResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WebApp;
import org.openapis.openapi.models.shared.WebAppDisplayModeEnum;
import org.openapis.openapi.models.shared.WebAppIcon;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseWebappsInsertRequest req = new AndroidenterpriseWebappsInsertRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                webApp = new WebApp() {{
                    displayMode = WebAppDisplayModeEnum.FULL_SCREEN;
                    icons = new org.openapis.openapi.models.shared.WebAppIcon[]{{
                        add(new WebAppIcon() {{
                            imageData = "excepturi";
                        }}),
                        add(new WebAppIcon() {{
                            imageData = "occaecati";
                        }}),
                        add(new WebAppIcon() {{
                            imageData = "nemo";
                        }}),
                    }};
                    isPublished = false;
                    startUrl = "aliquam";
                    title = "Mrs.";
                    versionCode = "doloribus";
                    webAppId = "eligendi";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "animi";
                key = "quas";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "odio";
                uploadProtocol = "eaque";
            }};            

            AndroidenterpriseWebappsInsertResponse res = sdk.webapps.androidenterpriseWebappsInsert(req, new AndroidenterpriseWebappsInsertSecurity("saepe", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseWebappsList

Retrieves the details of all web apps for a given enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseWebappsListRequest req = new AndroidenterpriseWebappsListRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "velit";
                key = "doloremque";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cum";
                uploadProtocol = "ipsum";
            }};            

            AndroidenterpriseWebappsListResponse res = sdk.webapps.androidenterpriseWebappsList(req, new AndroidenterpriseWebappsListSecurity("adipisci", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webAppsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseWebappsUpdate

Updates an existing web app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseWebappsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WebApp;
import org.openapis.openapi.models.shared.WebAppDisplayModeEnum;
import org.openapis.openapi.models.shared.WebAppIcon;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseWebappsUpdateRequest req = new AndroidenterpriseWebappsUpdateRequest("deserunt", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                webApp = new WebApp() {{
                    displayMode = WebAppDisplayModeEnum.MINIMAL_UI;
                    icons = new org.openapis.openapi.models.shared.WebAppIcon[]{{
                        add(new WebAppIcon() {{
                            imageData = "architecto";
                        }}),
                        add(new WebAppIcon() {{
                            imageData = "cupiditate";
                        }}),
                        add(new WebAppIcon() {{
                            imageData = "molestiae";
                        }}),
                    }};
                    isPublished = false;
                    startUrl = "eligendi";
                    title = "Dr.";
                    versionCode = "non";
                    webAppId = "magnam";
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "veniam";
                key = "consequuntur";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "odit";
                uploadProtocol = "pariatur";
            }};            

            AndroidenterpriseWebappsUpdateResponse res = sdk.webapps.androidenterpriseWebappsUpdate(req, new AndroidenterpriseWebappsUpdateSecurity("amet", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
