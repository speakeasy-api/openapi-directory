# acl

### Available Operations

* [calendarAclDelete](#calendaracldelete) - Deletes an access control rule.
* [calendarAclGet](#calendaraclget) - Returns an access control rule.
* [calendarAclInsert](#calendaraclinsert) - Creates an access control rule.
* [calendarAclList](#calendaracllist) - Returns the rules in the access control list for the calendar.
* [calendarAclPatch](#calendaraclpatch) - Updates an access control rule. This method supports patch semantics.
* [calendarAclUpdate](#calendaraclupdate) - Updates an access control rule.
* [calendarAclWatch](#calendaraclwatch) - Watch for changes to ACL resources.

## calendarAclDelete

Deletes an access control rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclDeleteRequest;
import org.openapis.openapi.models.operations.CalendarAclDeleteResponse;
import org.openapis.openapi.models.operations.CalendarAclDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclDeleteRequest req = new CalendarAclDeleteRequest("error", "deserunt") {{
                alt = AltEnum.JSON;
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                userIp = "ipsa";
            }};            

            CalendarAclDeleteResponse res = sdk.acl.calendarAclDelete(req, new CalendarAclDeleteSecurity("delectus", "tempora") {{
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

## calendarAclGet

Returns an access control rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclGetRequest;
import org.openapis.openapi.models.operations.CalendarAclGetResponse;
import org.openapis.openapi.models.operations.CalendarAclGetSecurity;
import org.openapis.openapi.models.operations.CalendarAclGetSecurityOption1;
import org.openapis.openapi.models.operations.CalendarAclGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclGetRequest req = new CalendarAclGetRequest("suscipit", "molestiae") {{
                alt = AltEnum.JSON;
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "excepturi";
            }};            

            CalendarAclGetResponse res = sdk.acl.calendarAclGet(req, new CalendarAclGetSecurity() {{
                option1 = new CalendarAclGetSecurityOption1("nisi", "recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.aclRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarAclInsert

Creates an access control rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclInsertRequest;
import org.openapis.openapi.models.operations.CalendarAclInsertResponse;
import org.openapis.openapi.models.operations.CalendarAclInsertSecurity;
import org.openapis.openapi.models.shared.AclRule;
import org.openapis.openapi.models.shared.AclRuleScope;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclInsertRequest req = new CalendarAclInsertRequest("temporibus") {{
                aclRule = new AclRule() {{
                    etag = "ab";
                    id = "51a05dfc-2ddf-47cc-b8ca-1ba928fc8167";
                    kind = "modi";
                    role = "qui";
                    scope = new AclRuleScope() {{
                        type = "impedit";
                        value = "cum";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                sendNotifications = false;
                userIp = "perferendis";
            }};            

            CalendarAclInsertResponse res = sdk.acl.calendarAclInsert(req, new CalendarAclInsertSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.aclRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarAclList

Returns the rules in the access control list for the calendar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclListRequest;
import org.openapis.openapi.models.operations.CalendarAclListResponse;
import org.openapis.openapi.models.operations.CalendarAclListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclListRequest req = new CalendarAclListRequest("sed") {{
                alt = AltEnum.JSON;
                fields = "iste";
                key = "dolor";
                maxResults = 616934L;
                oauthToken = "laboriosam";
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "saepe";
                showDeleted = false;
                syncToken = "fuga";
                userIp = "in";
            }};            

            CalendarAclListResponse res = sdk.acl.calendarAclList(req, new CalendarAclListSecurity("corporis", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.acl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarAclPatch

Updates an access control rule. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclPatchRequest;
import org.openapis.openapi.models.operations.CalendarAclPatchResponse;
import org.openapis.openapi.models.operations.CalendarAclPatchSecurity;
import org.openapis.openapi.models.shared.AclRule;
import org.openapis.openapi.models.shared.AclRuleScope;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclPatchRequest req = new CalendarAclPatchRequest("iure", "saepe") {{
                aclRule = new AclRule() {{
                    etag = "quidem";
                    id = "10faaa23-52c5-4955-907a-ff1a3a2fa946";
                    kind = "quam";
                    role = "molestiae";
                    scope = new AclRuleScope() {{
                        type = "velit";
                        value = "error";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "quia";
                key = "quis";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "laborum";
                sendNotifications = false;
                userIp = "animi";
            }};            

            CalendarAclPatchResponse res = sdk.acl.calendarAclPatch(req, new CalendarAclPatchSecurity("enim", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.aclRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarAclUpdate

Updates an access control rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclUpdateRequest;
import org.openapis.openapi.models.operations.CalendarAclUpdateResponse;
import org.openapis.openapi.models.operations.CalendarAclUpdateSecurity;
import org.openapis.openapi.models.shared.AclRule;
import org.openapis.openapi.models.shared.AclRuleScope;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclUpdateRequest req = new CalendarAclUpdateRequest("quo", "sequi") {{
                aclRule = new AclRule() {{
                    etag = "tenetur";
                    id = "5ad019da-1ffe-478f-897b-0074f15471b5";
                    kind = "accusamus";
                    role = "commodi";
                    scope = new AclRuleScope() {{
                        type = "repudiandae";
                        value = "quae";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                sendNotifications = false;
                userIp = "pariatur";
            }};            

            CalendarAclUpdateResponse res = sdk.acl.calendarAclUpdate(req, new CalendarAclUpdateSecurity("modi", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.aclRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## calendarAclWatch

Watch for changes to ACL resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalendarAclWatchRequest;
import org.openapis.openapi.models.operations.CalendarAclWatchResponse;
import org.openapis.openapi.models.operations.CalendarAclWatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalendarAclWatchRequest req = new CalendarAclWatchRequest("rem") {{
                channel = new Channel() {{
                    address = "095 Tobin Forge";
                    expiration = "enim";
                    id = "0ad2abd4-4269-4802-9502-a94bb4f63c96";
                    kind = "provident";
                    params = new java.util.HashMap<String, String>() {{
                        put("sint", "officia");
                        put("dolor", "debitis");
                        put("a", "dolorum");
                        put("in", "in");
                    }};
                    payload = false;
                    resourceId = "illum";
                    resourceUri = "maiores";
                    token = "rerum";
                    type = "dicta";
                }};;
                alt = AltEnum.JSON;
                fields = "magnam";
                key = "cumque";
                maxResults = 813798L;
                oauthToken = "ea";
                pageToken = "aliquid";
                prettyPrint = false;
                quotaUser = "laborum";
                showDeleted = false;
                syncToken = "accusamus";
                userIp = "non";
            }};            

            CalendarAclWatchResponse res = sdk.acl.calendarAclWatch(req, new CalendarAclWatchSecurity("occaecati", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
