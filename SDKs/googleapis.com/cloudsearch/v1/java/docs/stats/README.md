# stats

### Available Operations

* [cloudsearchStatsGetIndex](#cloudsearchstatsgetindex) - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetQuery](#cloudsearchstatsgetquery) - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetSearchapplication](#cloudsearchstatsgetsearchapplication) - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetSession](#cloudsearchstatsgetsession) - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsGetUser](#cloudsearchstatsgetuser) - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsIndexDatasourcesGet](#cloudsearchstatsindexdatasourcesget) - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsQuerySearchapplicationsGet](#cloudsearchstatsquerysearchapplicationsget) - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsSessionSearchapplicationsGet](#cloudsearchstatssessionsearchapplicationsget) - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
* [cloudsearchStatsUserSearchapplicationsGet](#cloudsearchstatsusersearchapplicationsget) - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

## cloudsearchStatsGetIndex

Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsGetIndexRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsGetIndexResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsGetIndexSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsGetIndexSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsGetIndexSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsGetIndexSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsGetIndexRequest req = new CloudsearchStatsGetIndexRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "architecto";
                fromDateDay = 554645L;
                fromDateMonth = 614438L;
                fromDateYear = 826862L;
                key = "tempore";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "velit";
                toDateDay = 38557L;
                toDateMonth = 963976L;
                toDateYear = 773110L;
                uploadType = "cum";
                uploadProtocol = "ipsum";
            }};            

            CloudsearchStatsGetIndexResponse res = sdk.stats.cloudsearchStatsGetIndex(req, new CloudsearchStatsGetIndexSecurity() {{
                option1 = new CloudsearchStatsGetIndexSecurityOption1("adipisci", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getCustomerIndexStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsGetQuery

Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsGetQueryRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsGetQueryResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsGetQuerySecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsGetQuerySecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsGetQuerySecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsGetQuerySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsGetQueryRequest req = new CloudsearchStatsGetQueryRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "libero";
                fromDateDay = 99733L;
                fromDateMonth = 584593L;
                fromDateYear = 475589L;
                key = "eligendi";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "non";
                toDateDay = 298187L;
                toDateMonth = 932296L;
                toDateYear = 150935L;
                uploadType = "asperiores";
                uploadProtocol = "veniam";
            }};            

            CloudsearchStatsGetQueryResponse res = sdk.stats.cloudsearchStatsGetQuery(req, new CloudsearchStatsGetQuerySecurity() {{
                option1 = new CloudsearchStatsGetQuerySecurityOption1("consequuntur", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getCustomerQueryStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsGetSearchapplication

Get search application stats for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSearchapplicationRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSearchapplicationResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSearchapplicationSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSearchapplicationSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSearchapplicationSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSearchapplicationSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsGetSearchapplicationRequest req = new CloudsearchStatsGetSearchapplicationRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "amet";
                endDateDay = 347698L;
                endDateMonth = 68852L;
                endDateYear = 242637L;
                fields = "facilis";
                key = "tempore";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                startDateDay = 310840L;
                startDateMonth = 503748L;
                startDateYear = 718627L;
                uploadType = "nisi";
                uploadProtocol = "quis";
            }};            

            CloudsearchStatsGetSearchapplicationResponse res = sdk.stats.cloudsearchStatsGetSearchapplication(req, new CloudsearchStatsGetSearchapplicationSecurity() {{
                option1 = new CloudsearchStatsGetSearchapplicationSecurityOption1("nisi", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getCustomerSearchApplicationStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsGetSession

Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSessionRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSessionResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSessionSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSessionSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSessionSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsGetSessionSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsGetSessionRequest req = new CloudsearchStatsGetSessionRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                fields = "ad";
                fromDateDay = 973819L;
                fromDateMonth = 974589L;
                fromDateYear = 162358L;
                key = "debitis";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "rerum";
                toDateDay = 179795L;
                toDateMonth = 440777L;
                toDateYear = 345506L;
                uploadType = "neque";
                uploadProtocol = "iusto";
            }};            

            CloudsearchStatsGetSessionResponse res = sdk.stats.cloudsearchStatsGetSession(req, new CloudsearchStatsGetSessionSecurity() {{
                option1 = new CloudsearchStatsGetSessionSecurityOption1("est", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getCustomerSessionStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsGetUser

Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsGetUserRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsGetUserResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsGetUserSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsGetUserSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsGetUserSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsGetUserSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsGetUserRequest req = new CloudsearchStatsGetUserRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "ducimus";
                fromDateDay = 220104L;
                fromDateMonth = 118041L;
                fromDateYear = 622894L;
                key = "porro";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "dignissimos";
                toDateDay = 458970L;
                toDateMonth = 854115L;
                toDateYear = 322333L;
                uploadType = "aspernatur";
                uploadProtocol = "enim";
            }};            

            CloudsearchStatsGetUserResponse res = sdk.stats.cloudsearchStatsGetUser(req, new CloudsearchStatsGetUserSecurity() {{
                option1 = new CloudsearchStatsGetUserSecurityOption1("delectus", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getCustomerUserStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsIndexDatasourcesGet

Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsIndexDatasourcesGetRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsIndexDatasourcesGetResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsIndexDatasourcesGetSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsIndexDatasourcesGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsIndexDatasourcesGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsIndexDatasourcesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsIndexDatasourcesGetRequest req = new CloudsearchStatsIndexDatasourcesGetRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "accusamus";
                fromDateDay = 902581L;
                fromDateMonth = 734814L;
                fromDateYear = 334018L;
                key = "eos";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "earum";
                toDateDay = 444121L;
                toDateMonth = 506312L;
                toDateYear = 367046L;
                uploadType = "repellat";
                uploadProtocol = "quisquam";
            }};            

            CloudsearchStatsIndexDatasourcesGetResponse res = sdk.stats.cloudsearchStatsIndexDatasourcesGet(req, new CloudsearchStatsIndexDatasourcesGetSecurity() {{
                option1 = new CloudsearchStatsIndexDatasourcesGetSecurityOption1("sequi", "nihil") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getDataSourceIndexStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsQuerySearchapplicationsGet

Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsQuerySearchapplicationsGetRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsQuerySearchapplicationsGetResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsQuerySearchapplicationsGetSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsQuerySearchapplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsQuerySearchapplicationsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsQuerySearchapplicationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsQuerySearchapplicationsGetRequest req = new CloudsearchStatsQuerySearchapplicationsGetRequest("deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "quisquam";
                fromDateDay = 591065L;
                fromDateMonth = 514993L;
                fromDateYear = 921719L;
                key = "consequatur";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "aspernatur";
                toDateDay = 723942L;
                toDateMonth = 711991L;
                toDateYear = 559174L;
                uploadType = "provident";
                uploadProtocol = "repudiandae";
            }};            

            CloudsearchStatsQuerySearchapplicationsGetResponse res = sdk.stats.cloudsearchStatsQuerySearchapplicationsGet(req, new CloudsearchStatsQuerySearchapplicationsGetSecurity() {{
                option1 = new CloudsearchStatsQuerySearchapplicationsGetSecurityOption1("rerum", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getSearchApplicationQueryStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsSessionSearchapplicationsGet

Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsSessionSearchapplicationsGetRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsSessionSearchapplicationsGetResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsSessionSearchapplicationsGetSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsSessionSearchapplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsSessionSearchapplicationsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsSessionSearchapplicationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsSessionSearchapplicationsGetRequest req = new CloudsearchStatsSessionSearchapplicationsGetRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "dolorem";
                fromDateDay = 413801L;
                fromDateMonth = 771226L;
                fromDateYear = 415033L;
                key = "aut";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "ad";
                toDateDay = 60995L;
                toDateMonth = 229567L;
                toDateYear = 849320L;
                uploadType = "praesentium";
                uploadProtocol = "quidem";
            }};            

            CloudsearchStatsSessionSearchapplicationsGetResponse res = sdk.stats.cloudsearchStatsSessionSearchapplicationsGet(req, new CloudsearchStatsSessionSearchapplicationsGetSecurity() {{
                option1 = new CloudsearchStatsSessionSearchapplicationsGetSecurityOption1("cum", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getSearchApplicationSessionStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchStatsUserSearchapplicationsGet

Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchStatsUserSearchapplicationsGetRequest;
import org.openapis.openapi.models.operations.CloudsearchStatsUserSearchapplicationsGetResponse;
import org.openapis.openapi.models.operations.CloudsearchStatsUserSearchapplicationsGetSecurity;
import org.openapis.openapi.models.operations.CloudsearchStatsUserSearchapplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchStatsUserSearchapplicationsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchStatsUserSearchapplicationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchStatsUserSearchapplicationsGetRequest req = new CloudsearchStatsUserSearchapplicationsGetRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "iusto";
                fromDateDay = 228646L;
                fromDateMonth = 587967L;
                fromDateYear = 677141L;
                key = "necessitatibus";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "repudiandae";
                toDateDay = 10063L;
                toDateMonth = 366244L;
                toDateYear = 475826L;
                uploadType = "itaque";
                uploadProtocol = "facilis";
            }};            

            CloudsearchStatsUserSearchapplicationsGetResponse res = sdk.stats.cloudsearchStatsUserSearchapplicationsGet(req, new CloudsearchStatsUserSearchapplicationsGetSecurity() {{
                option1 = new CloudsearchStatsUserSearchapplicationsGetSecurityOption1("corrupti", "aperiam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getSearchApplicationUserStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
