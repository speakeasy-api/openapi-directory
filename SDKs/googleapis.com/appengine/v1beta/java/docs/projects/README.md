# projects

### Available Operations

* [appengineProjectsLocationsApplicationsCreate](#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [appengineProjectsLocationsApplicationsGet](#appengineprojectslocationsapplicationsget) - Gets information about an application.
* [appengineProjectsLocationsApplicationsRepair](#appengineprojectslocationsapplicationsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [appengineProjectsLocationsGet](#appengineprojectslocationsget) - Gets information about a location.
* [appengineProjectsLocationsList](#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [appengineProjectsLocationsOperationsGet](#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineProjectsLocationsOperationsList](#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## appengineProjectsLocationsApplicationsCreate

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsCreateRequest;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsCreateResponse;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationDatabaseTypeEnum;
import org.openapis.openapi.models.shared.ApplicationInput;
import org.openapis.openapi.models.shared.ApplicationServingStatusEnum;
import org.openapis.openapi.models.shared.FeatureSettings;
import org.openapis.openapi.models.shared.IdentityAwareProxyInput;
import org.openapis.openapi.models.shared.UrlDispatchRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineProjectsLocationsApplicationsCreateRequest req = new AppengineProjectsLocationsApplicationsCreateRequest("placeat", "perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                applicationInput = new ApplicationInput() {{
                    authDomain = "deleniti";
                    databaseType = ApplicationDatabaseTypeEnum.CLOUD_DATASTORE_COMPATIBILITY;
                    defaultCookieExpiration = "voluptate";
                    dispatchRules = new org.openapis.openapi.models.shared.UrlDispatchRule[]{{
                        add(new UrlDispatchRule() {{
                            domain = "unde";
                            path = "necessitatibus";
                            service = "animi";
                        }}),
                        add(new UrlDispatchRule() {{
                            domain = "impedit";
                            path = "ipsam";
                            service = "corporis";
                        }}),
                    }};
                    featureSettings = new FeatureSettings() {{
                        splitHealthChecks = false;
                        useContainerOptimizedOs = false;
                    }};;
                    iap = new IdentityAwareProxyInput() {{
                        enabled = false;
                        oauth2ClientId = "est";
                        oauth2ClientSecret = "error";
                    }};;
                    id = "741d3113-5296-45bb-8a72-02611435e139";
                    locationId = "nulla";
                    serviceAccount = "distinctio";
                    servingStatus = ApplicationServingStatusEnum.SYSTEM_DISABLED;
                }};;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "nostrum";
                fields = "omnis";
                key = "libero";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "libero";
                uploadProtocol = "fugiat";
            }};            

            AppengineProjectsLocationsApplicationsCreateResponse res = sdk.projects.appengineProjectsLocationsApplicationsCreate(req, new AppengineProjectsLocationsApplicationsCreateSecurity("officia", "quos") {{
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

## appengineProjectsLocationsApplicationsGet

Gets information about an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsGetRequest;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsGetResponse;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsGetSecurity;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineProjectsLocationsApplicationsGetRequest req = new AppengineProjectsLocationsApplicationsGetRequest("placeat", "sit", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "totam";
                key = "dolore";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "voluptatem";
                uploadProtocol = "autem";
            }};            

            AppengineProjectsLocationsApplicationsGetResponse res = sdk.projects.appengineProjectsLocationsApplicationsGet(req, new AppengineProjectsLocationsApplicationsGetSecurity() {{
                option1 = new AppengineProjectsLocationsApplicationsGetSecurityOption1("esse", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineProjectsLocationsApplicationsRepair

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsRepairRequest;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsRepairResponse;
import org.openapis.openapi.models.operations.AppengineProjectsLocationsApplicationsRepairSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineProjectsLocationsApplicationsRepairRequest req = new AppengineProjectsLocationsApplicationsRepairRequest("assumenda", "beatae", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "provident");
                    put("accusamus", "necessitatibus");
                    put("tempore", "sint");
                }};
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "rerum";
                key = "laudantium";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "voluptatibus";
                uploadProtocol = "cum";
            }};            

            AppengineProjectsLocationsApplicationsRepairResponse res = sdk.projects.appengineProjectsLocationsApplicationsRepair(req, new AppengineProjectsLocationsApplicationsRepairSecurity("at", "alias") {{
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

            AppengineProjectsLocationsGetRequest req = new AppengineProjectsLocationsGetRequest("quia", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "expedita";
                fields = "officiis";
                key = "eos";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "praesentium";
                uploadProtocol = "odit";
            }};            

            AppengineProjectsLocationsGetResponse res = sdk.projects.appengineProjectsLocationsGet(req, new AppengineProjectsLocationsGetSecurity() {{
                option1 = new AppengineProjectsLocationsGetSecurityOption1("explicabo", "corporis") {{
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

            AppengineProjectsLocationsListRequest req = new AppengineProjectsLocationsListRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "similique";
                fields = "ut";
                filter = "quidem";
                key = "quis";
                oauthToken = "beatae";
                pageSize = 600213L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "cupiditate";
                uploadProtocol = "fugit";
            }};            

            AppengineProjectsLocationsListResponse res = sdk.projects.appengineProjectsLocationsList(req, new AppengineProjectsLocationsListSecurity() {{
                option1 = new AppengineProjectsLocationsListSecurityOption1("numquam", "numquam") {{
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

            AppengineProjectsLocationsOperationsGetRequest req = new AppengineProjectsLocationsOperationsGetRequest("nesciunt", "at", "officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "qui";
                key = "expedita";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "minima";
                uploadProtocol = "placeat";
            }};            

            AppengineProjectsLocationsOperationsGetResponse res = sdk.projects.appengineProjectsLocationsOperationsGet(req, new AppengineProjectsLocationsOperationsGetSecurity() {{
                option1 = new AppengineProjectsLocationsOperationsGetSecurityOption1("enim", "neque") {{
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

            AppengineProjectsLocationsOperationsListRequest req = new AppengineProjectsLocationsOperationsListRequest("in", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "voluptates";
                filter = "maiores";
                key = "tempore";
                oauthToken = "aperiam";
                pageSize = 727547L;
                pageToken = "ratione";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "totam";
                uploadProtocol = "occaecati";
            }};            

            AppengineProjectsLocationsOperationsListResponse res = sdk.projects.appengineProjectsLocationsOperationsList(req, new AppengineProjectsLocationsOperationsListSecurity() {{
                option1 = new AppengineProjectsLocationsOperationsListSecurityOption1("voluptas", "quo") {{
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
