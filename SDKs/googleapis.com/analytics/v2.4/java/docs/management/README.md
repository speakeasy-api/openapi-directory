# management

### Available Operations

* [analyticsManagementAccountsList](#analyticsmanagementaccountslist) - Lists all accounts to which the user has access.
* [analyticsManagementGoalsList](#analyticsmanagementgoalslist) - Lists goals to which the user has access.
* [analyticsManagementProfilesList](#analyticsmanagementprofileslist) - Lists views (profiles) to which the user has access.
* [analyticsManagementSegmentsList](#analyticsmanagementsegmentslist) - Lists advanced segments to which the user has access.
* [analyticsManagementWebpropertiesList](#analyticsmanagementwebpropertieslist) - Lists web properties to which the user has access.

## analyticsManagementAccountsList

Lists all accounts to which the user has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsManagementAccountsListRequest;
import org.openapis.openapi.models.operations.AnalyticsManagementAccountsListResponse;
import org.openapis.openapi.models.operations.AnalyticsManagementAccountsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsManagementAccountsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsManagementAccountsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsManagementAccountsListRequest req = new AnalyticsManagementAccountsListRequest() {{
                alt = AltEnum.ATOM;
                fields = "repellendus";
                key = "sapiente";
                maxResults = 778157L;
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                startIndex = 870088L;
                userIp = "maiores";
            }};            

            AnalyticsManagementAccountsListResponse res = sdk.management.analyticsManagementAccountsList(req, new AnalyticsManagementAccountsListSecurity() {{
                option1 = new AnalyticsManagementAccountsListSecurityOption1("molestiae", "quod") {{
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

## analyticsManagementGoalsList

Lists goals to which the user has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsManagementGoalsListRequest;
import org.openapis.openapi.models.operations.AnalyticsManagementGoalsListResponse;
import org.openapis.openapi.models.operations.AnalyticsManagementGoalsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsManagementGoalsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsManagementGoalsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsManagementGoalsListRequest req = new AnalyticsManagementGoalsListRequest("quod", "esse", "totam") {{
                alt = AltEnum.ATOM;
                fields = "porro";
                key = "dolorum";
                maxResults = 118274L;
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                startIndex = 582020L;
                userIp = "fugit";
            }};            

            AnalyticsManagementGoalsListResponse res = sdk.management.analyticsManagementGoalsList(req, new AnalyticsManagementGoalsListSecurity() {{
                option1 = new AnalyticsManagementGoalsListSecurityOption1("deleniti", "hic") {{
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

## analyticsManagementProfilesList

Lists views (profiles) to which the user has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsManagementProfilesListRequest;
import org.openapis.openapi.models.operations.AnalyticsManagementProfilesListResponse;
import org.openapis.openapi.models.operations.AnalyticsManagementProfilesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsManagementProfilesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsManagementProfilesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsManagementProfilesListRequest req = new AnalyticsManagementProfilesListRequest("optio", "totam") {{
                alt = AltEnum.ATOM;
                fields = "beatae";
                key = "commodi";
                maxResults = 473600L;
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                startIndex = 774234L;
                userIp = "cum";
            }};            

            AnalyticsManagementProfilesListResponse res = sdk.management.analyticsManagementProfilesList(req, new AnalyticsManagementProfilesListSecurity() {{
                option1 = new AnalyticsManagementProfilesListSecurityOption1("esse", "ipsum") {{
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

## analyticsManagementSegmentsList

Lists advanced segments to which the user has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsManagementSegmentsListRequest;
import org.openapis.openapi.models.operations.AnalyticsManagementSegmentsListResponse;
import org.openapis.openapi.models.operations.AnalyticsManagementSegmentsListSecurity;
import org.openapis.openapi.models.operations.AnalyticsManagementSegmentsListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsManagementSegmentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsManagementSegmentsListRequest req = new AnalyticsManagementSegmentsListRequest() {{
                alt = AltEnum.ATOM;
                fields = "excepturi";
                key = "aspernatur";
                maxResults = 18789L;
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                startIndex = 149675L;
                userIp = "iste";
            }};            

            AnalyticsManagementSegmentsListResponse res = sdk.management.analyticsManagementSegmentsList(req, new AnalyticsManagementSegmentsListSecurity() {{
                option1 = new AnalyticsManagementSegmentsListSecurityOption1("dolor", "natus") {{
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

## analyticsManagementWebpropertiesList

Lists web properties to which the user has access.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsManagementWebpropertiesListRequest;
import org.openapis.openapi.models.operations.AnalyticsManagementWebpropertiesListResponse;
import org.openapis.openapi.models.operations.AnalyticsManagementWebpropertiesListSecurity;
import org.openapis.openapi.models.operations.AnalyticsManagementWebpropertiesListSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsManagementWebpropertiesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsManagementWebpropertiesListRequest req = new AnalyticsManagementWebpropertiesListRequest("laboriosam") {{
                alt = AltEnum.ATOM;
                fields = "hic";
                key = "saepe";
                maxResults = 681820L;
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                startIndex = 613064L;
                userIp = "iure";
            }};            

            AnalyticsManagementWebpropertiesListResponse res = sdk.management.analyticsManagementWebpropertiesList(req, new AnalyticsManagementWebpropertiesListSecurity() {{
                option1 = new AnalyticsManagementWebpropertiesListSecurityOption1("saepe", "quidem") {{
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
