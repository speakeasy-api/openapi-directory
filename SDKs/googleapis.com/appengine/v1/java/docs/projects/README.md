# projects

### Available Operations

* [appengineProjectsLocationsApplicationsCreate](#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [appengineProjectsLocationsApplicationsGet](#appengineprojectslocationsapplicationsget) - Gets information about an application.

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

            AppengineProjectsLocationsApplicationsCreateRequest req = new AppengineProjectsLocationsApplicationsCreateRequest("vero", "voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                applicationInput = new ApplicationInput() {{
                    authDomain = "vel";
                    databaseType = ApplicationDatabaseTypeEnum.DATABASE_TYPE_UNSPECIFIED;
                    defaultCookieExpiration = "quasi";
                    dispatchRules = new org.openapis.openapi.models.shared.UrlDispatchRule[]{{
                        add(new UrlDispatchRule() {{
                            domain = "maiores";
                            path = "enim";
                            service = "sint";
                        }}),
                    }};
                    featureSettings = new FeatureSettings() {{
                        splitHealthChecks = false;
                        useContainerOptimizedOs = false;
                    }};;
                    iap = new IdentityAwareProxyInput() {{
                        enabled = false;
                        oauth2ClientId = "nulla";
                        oauth2ClientSecret = "deserunt";
                    }};;
                    id = "757a59ec-fef6-46ef-9caa-3383c2beb477";
                    locationId = "sequi";
                    serviceAccount = "dignissimos";
                    servingStatus = ApplicationServingStatusEnum.UNSPECIFIED;
                }};;
                accessToken = "quo";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "iure";
                key = "odit";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "magnam";
                uploadProtocol = "quibusdam";
            }};            

            AppengineProjectsLocationsApplicationsCreateResponse res = sdk.projects.appengineProjectsLocationsApplicationsCreate(req, new AppengineProjectsLocationsApplicationsCreateSecurity("inventore", "facere") {{
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

            AppengineProjectsLocationsApplicationsGetRequest req = new AppengineProjectsLocationsApplicationsGetRequest("libero", "architecto", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "illo";
                key = "accusantium";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "beatae";
                uploadProtocol = "vero";
            }};            

            AppengineProjectsLocationsApplicationsGetResponse res = sdk.projects.appengineProjectsLocationsApplicationsGet(req, new AppengineProjectsLocationsApplicationsGetSecurity() {{
                option1 = new AppengineProjectsLocationsApplicationsGetSecurityOption1("excepturi", "eum") {{
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
