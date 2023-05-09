# projects

### Available Operations

* [appengineProjectsLocationsGet](#appengineprojectslocationsget) - Gets information about a location.
* [appengineProjectsLocationsList](#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [appengineProjectsLocationsOperationsGet](#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineProjectsLocationsOperationsList](#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## appengineProjectsLocationsGet

Gets information about a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsGetRequest;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsGetResponse;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsGetSecurity;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineProjectsLocationsGetRequest req = new AppengineProjectsLocationsGetRequest("facilis", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "neque";
                key = "fugit";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "sunt";
                uploadProtocol = "ullam";
            }};            

            AppengineProjectsLocationsGetResponse res = sdk.projects.appengineProjectsLocationsGet(req, new AppengineProjectsLocationsGetSecurity() {{
                option1 = new AppengineProjectsLocationsGetSecurityOption1("nam", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineProjectsLocationsListRequest req = new AppengineProjectsLocationsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "saepe";
                filter = "ipsum";
                key = "veritatis";
                oauthToken = "nobis";
                pageSize = 552193L;
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "aperiam";
                uploadProtocol = "delectus";
            }};            

            AppengineProjectsLocationsListResponse res = sdk.projects.appengineProjectsLocationsList(req, new AppengineProjectsLocationsListSecurity() {{
                option1 = new AppengineProjectsLocationsListSecurityOption1("dolorem", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineProjectsLocationsOperationsGetRequest req = new AppengineProjectsLocationsOperationsGetRequest("labore", "adipisci", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "itaque";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "porro";
                uploadProtocol = "doloribus";
            }};            

            AppengineProjectsLocationsOperationsGetResponse res = sdk.projects.appengineProjectsLocationsOperationsGet(req, new AppengineProjectsLocationsOperationsGetSecurity() {{
                option1 = new AppengineProjectsLocationsOperationsGetSecurityOption1("ut", "facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## appengineProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsOperationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineProjectsLocationsOperationsListRequest req = new AppengineProjectsLocationsOperationsListRequest("cupiditate", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "voluptatibus";
                filter = "quisquam";
                key = "vero";
                oauthToken = "omnis";
                pageSize = 338159L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "voluptate";
                uploadProtocol = "consectetur";
            }};            

            AppengineProjectsLocationsOperationsListResponse res = sdk.projects.appengineProjectsLocationsOperationsList(req, new AppengineProjectsLocationsOperationsListSecurity() {{
                option1 = new AppengineProjectsLocationsOperationsListSecurityOption1("vero", "tenetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
