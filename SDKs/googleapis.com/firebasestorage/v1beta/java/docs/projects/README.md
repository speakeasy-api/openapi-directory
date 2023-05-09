# projects

### Available Operations

* [firebasestorageProjectsBucketsAddFirebase](#firebasestorageprojectsbucketsaddfirebase) - Links a Google Cloud Storage bucket to a Firebase project.
* [firebasestorageProjectsBucketsGet](#firebasestorageprojectsbucketsget) - Gets a single linked storage bucket.
* [firebasestorageProjectsBucketsList](#firebasestorageprojectsbucketslist) - Lists the linked storage buckets for a project.
* [firebasestorageProjectsBucketsRemoveFirebase](#firebasestorageprojectsbucketsremovefirebase) - Unlinks a linked Google Cloud Storage bucket from a Firebase project.

## firebasestorageProjectsBucketsAddFirebase

Links a Google Cloud Storage bucket to a Firebase project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseRequest;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseResponse;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurity;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasestorageProjectsBucketsAddFirebaseRequest req = new FirebasestorageProjectsBucketsAddFirebaseRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            FirebasestorageProjectsBucketsAddFirebaseResponse res = sdk.projects.firebasestorageProjectsBucketsAddFirebase(req, new FirebasestorageProjectsBucketsAddFirebaseSecurity() {{
                option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1("at", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasestorageProjectsBucketsGet

Gets a single linked storage bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsGetRequest;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsGetResponse;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsGetSecurity;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasestorageProjectsBucketsGetRequest req = new FirebasestorageProjectsBucketsGetRequest("maiores") {{
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

            FirebasestorageProjectsBucketsGetResponse res = sdk.projects.firebasestorageProjectsBucketsGet(req, new FirebasestorageProjectsBucketsGetSecurity() {{
                option1 = new FirebasestorageProjectsBucketsGetSecurityOption1("occaecati", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasestorageProjectsBucketsList

Lists the linked storage buckets for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsListRequest;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsListResponse;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsListSecurity;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasestorageProjectsBucketsListRequest req = new FirebasestorageProjectsBucketsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                pageSize = 186332L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }};            

            FirebasestorageProjectsBucketsListResponse res = sdk.projects.firebasestorageProjectsBucketsList(req, new FirebasestorageProjectsBucketsListSecurity() {{
                option1 = new FirebasestorageProjectsBucketsListSecurityOption1("excepturi", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listBucketsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasestorageProjectsBucketsRemoveFirebase

Unlinks a linked Google Cloud Storage bucket from a Firebase project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsRemoveFirebaseRequest;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsRemoveFirebaseResponse;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsRemoveFirebaseSecurity;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasestorageProjectsBucketsRemoveFirebaseRequest req = new FirebasestorageProjectsBucketsRemoveFirebaseRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sed", "iste");
                    put("dolor", "natus");
                    put("laboriosam", "hic");
                }};
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

            FirebasestorageProjectsBucketsRemoveFirebaseResponse res = sdk.projects.firebasestorageProjectsBucketsRemoveFirebase(req, new FirebasestorageProjectsBucketsRemoveFirebaseSecurity() {{
                option1 = new FirebasestorageProjectsBucketsRemoveFirebaseSecurityOption1("ipsa", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
