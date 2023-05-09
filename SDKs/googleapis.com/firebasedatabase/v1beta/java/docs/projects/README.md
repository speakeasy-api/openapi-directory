# projects

### Available Operations

* [firebasedatabaseProjectsLocationsInstancesCreate](#firebasedatabaseprojectslocationsinstancescreate) - Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
* [firebasedatabaseProjectsLocationsInstancesDelete](#firebasedatabaseprojectslocationsinstancesdelete) - Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
* [firebasedatabaseProjectsLocationsInstancesDisable](#firebasedatabaseprojectslocationsinstancesdisable) - Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
* [firebasedatabaseProjectsLocationsInstancesGet](#firebasedatabaseprojectslocationsinstancesget) - Gets the DatabaseInstance identified by the specified resource name.
* [firebasedatabaseProjectsLocationsInstancesList](#firebasedatabaseprojectslocationsinstanceslist) - Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
* [firebasedatabaseProjectsLocationsInstancesReenable](#firebasedatabaseprojectslocationsinstancesreenable) - Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
* [firebasedatabaseProjectsLocationsInstancesUndelete](#firebasedatabaseprojectslocationsinstancesundelete) - Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.

## firebasedatabaseProjectsLocationsInstancesCreate

Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.DatabaseInstanceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesCreateRequest req = new FirebasedatabaseProjectsLocationsInstancesCreateRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                databaseInstanceInput = new DatabaseInstanceInput() {{
                    name = "Ted Mante";
                    type = DatabaseInstanceTypeEnum.USER_DATABASE;
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                databaseId = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
                validateOnly = false;
            }};            

            FirebasedatabaseProjectsLocationsInstancesCreateResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesCreate(req, new FirebasedatabaseProjectsLocationsInstancesCreateSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesCreateSecurityOption1("at", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedatabaseProjectsLocationsInstancesDelete

Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDeleteRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDeleteResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDeleteSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesDeleteRequest req = new FirebasedatabaseProjectsLocationsInstancesDeleteRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "nam";
                uploadProtocol = "officia";
            }};            

            FirebasedatabaseProjectsLocationsInstancesDeleteResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesDelete(req, new FirebasedatabaseProjectsLocationsInstancesDeleteSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesDeleteSecurityOption1("occaecati", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedatabaseProjectsLocationsInstancesDisable

Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDisableRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDisableResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDisableSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesDisableRequest req = new FirebasedatabaseProjectsLocationsInstancesDisableRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("totam", "beatae");
                    put("commodi", "molestiae");
                    put("modi", "qui");
                    put("impedit", "cum");
                }};
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            FirebasedatabaseProjectsLocationsInstancesDisableResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesDisable(req, new FirebasedatabaseProjectsLocationsInstancesDisableSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesDisableSecurityOption1("dolor", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedatabaseProjectsLocationsInstancesGet

Gets the DatabaseInstance identified by the specified resource name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesGetRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesGetResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesGetSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesGetRequest req = new FirebasedatabaseProjectsLocationsInstancesGetRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                key = "iste";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            FirebasedatabaseProjectsLocationsInstancesGetResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesGet(req, new FirebasedatabaseProjectsLocationsInstancesGetSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1("ipsa", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedatabaseProjectsLocationsInstancesList

Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesListRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesListResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesListSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesListSecurityOption2;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesListSecurityOption3;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesListRequest req = new FirebasedatabaseProjectsLocationsInstancesListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "corporis";
                key = "explicabo";
                oauthToken = "nobis";
                pageSize = 315428L;
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "nemo";
                showDeleted = false;
                uploadType = "minima";
                uploadProtocol = "excepturi";
            }};            

            FirebasedatabaseProjectsLocationsInstancesListResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesList(req, new FirebasedatabaseProjectsLocationsInstancesListSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesListSecurityOption1("accusantium", "iure") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDatabaseInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedatabaseProjectsLocationsInstancesReenable

Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesReenableRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesReenableResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesReenableSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesReenableRequest req = new FirebasedatabaseProjectsLocationsInstancesReenableRequest("culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("architecto", "mollitia");
                    put("dolorem", "culpa");
                    put("consequuntur", "repellat");
                    put("mollitia", "occaecati");
                }};
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestiae";
                key = "velit";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quis";
                uploadProtocol = "vitae";
            }};            

            FirebasedatabaseProjectsLocationsInstancesReenableResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesReenable(req, new FirebasedatabaseProjectsLocationsInstancesReenableSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesReenableSecurityOption1("laborum", "animi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasedatabaseProjectsLocationsInstancesUndelete

Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesUndeleteRequest;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesUndeleteResponse;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasedatabaseProjectsLocationsInstancesUndeleteRequest req = new FirebasedatabaseProjectsLocationsInstancesUndeleteRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sequi", "tenetur");
                    put("ipsam", "id");
                    put("possimus", "aut");
                    put("quasi", "error");
                }};
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            FirebasedatabaseProjectsLocationsInstancesUndeleteResponse res = sdk.projects.firebasedatabaseProjectsLocationsInstancesUndelete(req, new FirebasedatabaseProjectsLocationsInstancesUndeleteSecurity() {{
                option1 = new FirebasedatabaseProjectsLocationsInstancesUndeleteSecurityOption1("ipsa", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
