# alerts

### Available Operations

* [alertcenterAlertsBatchDelete](#alertcenteralertsbatchdelete) - Performs batch delete operation on alerts.
* [alertcenterAlertsBatchUndelete](#alertcenteralertsbatchundelete) - Performs batch undelete operation on alerts.
* [alertcenterAlertsDelete](#alertcenteralertsdelete) - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
* [alertcenterAlertsFeedbackCreate](#alertcenteralertsfeedbackcreate) - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
* [alertcenterAlertsFeedbackList](#alertcenteralertsfeedbacklist) - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
* [alertcenterAlertsGet](#alertcenteralertsget) - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
* [alertcenterAlertsGetMetadata](#alertcenteralertsgetmetadata) - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
* [alertcenterAlertsList](#alertcenteralertslist) - Lists the alerts.
* [alertcenterAlertsUndelete](#alertcenteralertsundelete) - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

## alertcenterAlertsBatchDelete

Performs batch delete operation on alerts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeleteAlertsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsBatchDeleteRequest req = new AlertcenterAlertsBatchDeleteRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeleteAlertsRequest = new BatchDeleteAlertsRequest() {{
                    alertId = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                    customerId = "placeat";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            AlertcenterAlertsBatchDeleteResponse res = sdk.alerts.alertcenterAlertsBatchDelete(req, new AlertcenterAlertsBatchDeleteSecurity("deserunt", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchDeleteAlertsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsBatchUndelete

Performs batch undelete operation on alerts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchUndeleteRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchUndeleteResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsBatchUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUndeleteAlertsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsBatchUndeleteRequest req = new AlertcenterAlertsBatchUndeleteRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                batchUndeleteAlertsRequest = new BatchUndeleteAlertsRequest() {{
                    alertId = new String[]{{
                        add("sapiente"),
                        add("quo"),
                        add("odit"),
                        add("at"),
                    }};
                    customerId = "at";
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "dolorum";
                uploadProtocol = "dicta";
            }};            

            AlertcenterAlertsBatchUndeleteResponse res = sdk.alerts.alertcenterAlertsBatchUndelete(req, new AlertcenterAlertsBatchUndeleteSecurity("nam", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchUndeleteAlertsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsDelete

Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsDeleteRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsDeleteResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsDeleteRequest req = new AlertcenterAlertsDeleteRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                customerId = "totam";
                fields = "beatae";
                key = "commodi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
            }};            

            AlertcenterAlertsDeleteResponse res = sdk.alerts.alertcenterAlertsDelete(req, new AlertcenterAlertsDeleteSecurity("cum", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsFeedbackCreate

Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsFeedbackCreateRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsFeedbackCreateResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsFeedbackCreateSecurity;
import org.openapis.openapi.models.shared.AlertFeedback;
import org.openapis.openapi.models.shared.AlertFeedbackTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsFeedbackCreateRequest req = new AlertcenterAlertsFeedbackCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                alertFeedback = new AlertFeedback() {{
                    alertId = "aspernatur";
                    createTime = "perferendis";
                    customerId = "ad";
                    email = "Camden61@yahoo.com";
                    feedbackId = "laboriosam";
                    type = AlertFeedbackTypeEnum.VERY_USEFUL;
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                customerId = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            AlertcenterAlertsFeedbackCreateResponse res = sdk.alerts.alertcenterAlertsFeedbackCreate(req, new AlertcenterAlertsFeedbackCreateSecurity("reiciendis", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.alertFeedback != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsFeedbackList

Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsFeedbackListRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsFeedbackListResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsFeedbackListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsFeedbackListRequest req = new AlertcenterAlertsFeedbackListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "corporis";
                customerId = "explicabo";
                fields = "nobis";
                filter = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            AlertcenterAlertsFeedbackListResponse res = sdk.alerts.alertcenterAlertsFeedbackList(req, new AlertcenterAlertsFeedbackListSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAlertFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsGet

Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsGetRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsGetResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsGetRequest req = new AlertcenterAlertsGetRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                customerId = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            AlertcenterAlertsGetResponse res = sdk.alerts.alertcenterAlertsGet(req, new AlertcenterAlertsGetSecurity("quam", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.alert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsGetMetadata

Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsGetMetadataRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsGetMetadataResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsGetMetadataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsGetMetadataRequest req = new AlertcenterAlertsGetMetadataRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                customerId = "laborum";
                fields = "animi";
                key = "enim";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            AlertcenterAlertsGetMetadataResponse res = sdk.alerts.alertcenterAlertsGetMetadata(req, new AlertcenterAlertsGetMetadataSecurity("ipsam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.alertMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsList

Lists the alerts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsListRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsListResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsListRequest req = new AlertcenterAlertsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                customerId = "temporibus";
                fields = "laborum";
                filter = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                orderBy = "vero";
                pageSize = 468651L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            AlertcenterAlertsListResponse res = sdk.alerts.alertcenterAlertsList(req, new AlertcenterAlertsListSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAlertsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## alertcenterAlertsUndelete

Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlertcenterAlertsUndeleteRequest;
import org.openapis.openapi.models.operations.AlertcenterAlertsUndeleteResponse;
import org.openapis.openapi.models.operations.AlertcenterAlertsUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UndeleteAlertRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AlertcenterAlertsUndeleteRequest req = new AlertcenterAlertsUndeleteRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                undeleteAlertRequest = new UndeleteAlertRequest() {{
                    customerId = "reprehenderit";
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                key = "dolore";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            AlertcenterAlertsUndeleteResponse res = sdk.alerts.alertcenterAlertsUndelete(req, new AlertcenterAlertsUndeleteSecurity("accusamus", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.alert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
