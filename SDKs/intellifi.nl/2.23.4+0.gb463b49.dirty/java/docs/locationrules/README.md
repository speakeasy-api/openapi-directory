# locationrules

## Overview

Location rules are directives for the localization engine that may be useful for certain solutions.


### Available Operations

* [addLocationRule](#addlocationrule) - Create location rule
* [deleteLocationRule](#deletelocationrule) - Delete location rule
* [getLocationRuleById](#getlocationrulebyid) - Get location rule
* [getLocationRules](#getlocationrules) - Get all location rules
* [updateLocationRule](#updatelocationrule) - Update existing location rule

## addLocationRule

Create location rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddLocationRuleResponse;
import org.openapis.openapi.models.shared.LocationRuleTypeEnum;
import org.openapis.openapi.models.shared.LocationRuleUpdate;
import org.openapis.openapi.models.shared.LocationRuleUpdateConditions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LocationRuleUpdate req = new LocationRuleUpdate() {{
                conditions = new LocationRuleUpdateConditions() {{
                    fromLocation = "5b7d6cbd7503c445552a1664";
                    toLocation = "5b7d6cbd7503c445552a1664";
                }};;
                enabled = true;
                label = "Foo Bar";
                parameters = new java.util.HashMap<String, Object>() {{
                    put("voluptatibus", "ipsa");
                    put("omnis", "voluptate");
                    put("cum", "perferendis");
                }};
                type = LocationRuleTypeEnum.ALLOW;
            }};            

            AddLocationRuleResponse res = sdk.locationrules.addLocationRule(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLocationRule

Delete location rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLocationRuleRequest;
import org.openapis.openapi.models.operations.DeleteLocationRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLocationRuleRequest req = new DeleteLocationRuleRequest("reprehenderit");            

            DeleteLocationRuleResponse res = sdk.locationrules.deleteLocationRule(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocationRuleById

Get location rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationRuleByIdRequest;
import org.openapis.openapi.models.operations.GetLocationRuleByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLocationRuleByIdRequest req = new GetLocationRuleByIdRequest("ut");            

            GetLocationRuleByIdResponse res = sdk.locationrules.getLocationRuleById(req);

            if (res.locationRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLocationRules

Get all location rules

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLocationRulesRequest;
import org.openapis.openapi.models.operations.GetLocationRulesResponse;
import org.openapis.openapi.models.shared.LocationRuleTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLocationRulesRequest req = new GetLocationRulesRequest() {{
                after = OffsetDateTime.parse("2022-08-22T09:14:02.538Z");
                afterId = "corporis";
                before = "dolore";
                beforeId = "iusto";
                enabled = true;
                from = "dicta";
                fromId = "harum";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                label = "Foo Bar";
                limit = 317983L;
                populate = "accusamus";
                resultsOnly = false;
                select = "commodi";
                sort = "repudiandae";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 641.47;
                type = LocationRuleTypeEnum.ALLOW;
                until = "quidem";
                untilId = "molestias";
            }};            

            GetLocationRulesResponse res = sdk.locationrules.getLocationRules(req);

            if (res.getLocationRules200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLocationRule

Update existing location rule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLocationRuleRequest;
import org.openapis.openapi.models.operations.UpdateLocationRuleResponse;
import org.openapis.openapi.models.shared.LocationRuleTypeEnum;
import org.openapis.openapi.models.shared.LocationRuleUpdate;
import org.openapis.openapi.models.shared.LocationRuleUpdateConditions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLocationRuleRequest req = new UpdateLocationRuleRequest(                new LocationRuleUpdate() {{
                                conditions = new LocationRuleUpdateConditions() {{
                                    fromLocation = "5b7d6cbd7503c445552a1664";
                                    toLocation = "5b7d6cbd7503c445552a1664";
                                }};;
                                enabled = true;
                                label = "Foo Bar";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("pariatur", "modi");
                                    put("praesentium", "rem");
                                    put("voluptates", "quasi");
                                }};
                                type = LocationRuleTypeEnum.DEBOUNCE;
                            }};, "sint");            

            UpdateLocationRuleResponse res = sdk.locationrules.updateLocationRule(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
