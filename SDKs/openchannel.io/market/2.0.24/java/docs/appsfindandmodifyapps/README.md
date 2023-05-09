# appsFindAndModifyApps

### Available Operations

* [deleteAppsAppId](#deleteappsappid) - Removes app and all versions
* [deleteAppsAppIdVersionsVersion](#deleteappsappidversionsversion) - Removes AppVersion
* [getApps](#getapps) - Returns a paginated list of APPROVED or SUSPENDED apps
* [getAppsBySafeNameSafeName](#getappsbysafenamesafename) - Returns a single APPROVED or SUSPENDED app
* [getAppsTextSearch](#getappstextsearch) - Searches through the text of fields to find APPROVED or SUSPENDED apps
* [getAppsVersions](#getappsversions) - Returns a paginated list of AppVersions
* [getAppsAppId](#getappsappid) - Returns a single APPROVED or SUSPENDED app
* [getAppsAppIdVersionsVersion](#getappsappidversionsversion) - Returns a single AppVersion
* [patchAppsAppIdVersionsVersion](#patchappsappidversionsversion) - Updates the app fields or creates a new version
* [postApps](#postapps) - Adds a new app for this developer
* [postAppsAppIdLive](#postappsappidlive) - Change the live app to another, previously approved version
* [postAppsAppIdPublish](#postappsappidpublish) - Publishes the current working version of the app to the marketplace
* [postAppsAppIdVersionsVersion](#postappsappidversionsversion) - Updates the app or creates a new version
* [postAppsAppIdVersionsVersionStatus](#postappsappidversionsversionstatus) - Allows a developer or administrator to change the status of apps

## deleteAppsAppId

- This method is called on behalf of a developer.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsAppIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsAppIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteAppsAppIdRequest req = new DeleteAppsAppIdRequest("corrupti", "illum");            

            DeleteAppsAppIdResponse res = sdk.appsFindAndModifyApps.deleteAppsAppId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppsAppIdVersionsVersion

- This method is called on behalf of a developer.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsAppIdVersionsVersionRequest;
import org.openapis.openapi.models.operations.DeleteAppsAppIdVersionsVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteAppsAppIdVersionsVersionRequest req = new DeleteAppsAppIdVersionsVersionRequest("deserunt", "suscipit", "iure");            

            DeleteAppsAppIdVersionsVersionResponse res = sdk.appsFindAndModifyApps.deleteAppsAppIdVersionsVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApps

- Results are paginated and the default is value is 1000 if no limit is provided
- If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsRequest;
import org.openapis.openapi.models.operations.GetAppsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAppsRequest req = new GetAppsRequest() {{
                isOwner = false;
                limit = 56713L;
                pageNumber = 963663L;
                query = "tempora";
                sort = "suscipit";
                userId = "molestiae";
            }};            

            GetAppsResponse res = sdk.appsFindAndModifyApps.getApps(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsBySafeNameSafeName

- A 'view' event is recorded when trackViews is set to true


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsBySafeNameSafeNameRequest;
import org.openapis.openapi.models.operations.GetAppsBySafeNameSafeNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "placeat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAppsBySafeNameSafeNameRequest req = new GetAppsBySafeNameSafeNameRequest("voluptatum") {{
                trackViews = false;
                userId = "iusto";
            }};            

            GetAppsBySafeNameSafeNameResponse res = sdk.appsFindAndModifyApps.getAppsBySafeNameSafeName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsTextSearch

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsTextSearchRequest;
import org.openapis.openapi.models.operations.GetAppsTextSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "nisi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAppsTextSearchRequest req = new GetAppsTextSearchRequest("recusandae", "temporibus") {{
                isOwned = false;
                limit = 71036L;
                pageNumber = 337396L;
                query = "veritatis";
                userId = "deserunt";
            }};            

            GetAppsTextSearchResponse res = sdk.appsFindAndModifyApps.getAppsTextSearch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsVersions

- Results are paginated when limit is set, otherwise all results are returned
- If no query is specified, returns all AppVersions within the marketplace
- Only returns AppVersions owned by this developer


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsVersionsRequest;
import org.openapis.openapi.models.operations.GetAppsVersionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ipsam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAppsVersionsRequest req = new GetAppsVersionsRequest() {{
                developerId = "repellendus";
                limit = 957156L;
                pageNumber = 778157L;
                query = "odit";
                sort = "at";
            }};            

            GetAppsVersionsResponse res = sdk.appsFindAndModifyApps.getAppsVersions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsAppId

- A 'view' event is recorded when trackViews is set to true


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAppIdRequest;
import org.openapis.openapi.models.operations.GetAppsAppIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAppsAppIdRequest req = new GetAppsAppIdRequest("molestiae") {{
                trackViews = false;
                userId = "quod";
            }};            

            GetAppsAppIdResponse res = sdk.appsFindAndModifyApps.getAppsAppId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsAppIdVersionsVersion

- Only returns AppVersions owned by this developer


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAppIdVersionsVersionRequest;
import org.openapis.openapi.models.operations.GetAppsAppIdVersionsVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAppsAppIdVersionsVersionRequest req = new GetAppsAppIdVersionsVersionRequest("totam", 780529L) {{
                developerId = "dolorum";
            }};            

            GetAppsAppIdVersionsVersionResponse res = sdk.appsFindAndModifyApps.getAppsAppIdVersionsVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAppsAppIdVersionsVersion

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update). 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAppsAppIdVersionsVersionRequest;
import org.openapis.openapi.models.operations.PatchAppsAppIdVersionsVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "nam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchAppsAppIdVersionsVersionRequest req = new PatchAppsAppIdVersionsVersionRequest("officia", "occaecati", "fugit") {{
                access = "deleniti";
                allow = "hic";
                approvalRequired = "optio";
                attributes = "totam";
                customData = "beatae";
                model = "commodi";
                name = "Pauline Dibbert";
                restrict = "esse";
                type = "ipsum";
            }};            

            PatchAppsAppIdVersionsVersionResponse res = sdk.appsFindAndModifyApps.patchAppsAppIdVersionsVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApps

- This method is called on behalf of a developer.
- Price is required if the model is 'single' or 'recurring'
- Returns the newly created app


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsRequest;
import org.openapis.openapi.models.operations.PostAppsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "aspernatur") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAppsRequest req = new PostAppsRequest("perferendis", "ad") {{
                access = "natus";
                allow = "sed";
                attributes = "iste";
                customData = "dolor";
                model = "natus";
                restrict = "laboriosam";
                type = "hic";
            }};            

            PostAppsResponse res = sdk.appsFindAndModifyApps.postApps(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdLive

- This method is called on behalf of a developer.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdLiveRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdLiveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "fuga") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAppsAppIdLiveRequest req = new PostAppsAppIdLiveRequest("in", "corporis", "iste");            

            PostAppsAppIdLiveResponse res = sdk.appsFindAndModifyApps.postAppsAppIdLive(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdPublish

- This method is called on behalf of a developer. 
- Only effects the current working version of the app.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdPublishRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdPublishResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAppsAppIdPublishRequest req = new PostAppsAppIdPublishRequest("quidem", "architecto", 60225L) {{
                autoApprove = false;
            }};            

            PostAppsAppIdPublishResponse res = sdk.appsFindAndModifyApps.postAppsAppIdPublish(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdVersionsVersion

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdVersionsVersionRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdVersionsVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "est") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAppsAppIdVersionsVersionRequest req = new PostAppsAppIdVersionsVersionRequest("mollitia", "laborum", "dolores") {{
                access = "dolorem";
                allow = "corporis";
                approvalRequired = "explicabo";
                attributes = "nobis";
                customData = "enim";
                model = "omnis";
                name = "Ms. Cathy Marks";
                restrict = "doloribus";
                type = "sapiente";
            }};            

            PostAppsAppIdVersionsVersionResponse res = sdk.appsFindAndModifyApps.postAppsAppIdVersionsVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdVersionsVersionStatus

Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdVersionsVersionStatusModifiedByEnum;
import org.openapis.openapi.models.operations.PostAppsAppIdVersionsVersionStatusRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdVersionsVersionStatusResponse;
import org.openapis.openapi.models.operations.PostAppsAppIdVersionsVersionStatusStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "mollitia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostAppsAppIdVersionsVersionStatusRequest req = new PostAppsAppIdVersionsVersionStatusRequest("dolorem", 635059L) {{
                developerId = "consequuntur";
                modifiedBy = PostAppsAppIdVersionsVersionStatusModifiedByEnum.ADMINISTRATOR;
                reason = "mollitia";
                status = PostAppsAppIdVersionsVersionStatusStatusEnum.SUSPENDED;
            }};            

            PostAppsAppIdVersionsVersionStatusResponse res = sdk.appsFindAndModifyApps.postAppsAppIdVersionsVersionStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
