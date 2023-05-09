# liens

### Available Operations

* [cloudresourcemanagerLiensCreate](#cloudresourcemanagerlienscreate) - Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
* [cloudresourcemanagerLiensDelete](#cloudresourcemanagerliensdelete) - Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.
* [cloudresourcemanagerLiensList](#cloudresourcemanagerlienslist) - List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.

## cloudresourcemanagerLiensCreate

Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Lien;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerLiensCreateRequest req = new CloudresourcemanagerLiensCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                lien = new Lien() {{
                    createTime = "recusandae";
                    name = "Miss Raymond Hauck III";
                    origin = "repellendus";
                    parent = "sapiente";
                    reason = "quo";
                    restrictions = new String[]{{
                        add("at"),
                    }};
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "quod";
                key = "quod";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "porro";
                uploadProtocol = "dolorum";
            }};            

            CloudresourcemanagerLiensCreateResponse res = sdk.liens.cloudresourcemanagerLiensCreate(req, new CloudresourcemanagerLiensCreateSecurity() {{
                option1 = new CloudresourcemanagerLiensCreateSecurityOption1("dicta", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lien != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerLiensDelete

Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensDeleteRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensDeleteResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensDeleteSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerLiensDeleteRequest req = new CloudresourcemanagerLiensDeleteRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "molestiae";
                uploadProtocol = "modi";
            }};            

            CloudresourcemanagerLiensDeleteResponse res = sdk.liens.cloudresourcemanagerLiensDelete(req, new CloudresourcemanagerLiensDeleteSecurity() {{
                option1 = new CloudresourcemanagerLiensDeleteSecurityOption1("qui", "impedit") {{
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

## cloudresourcemanagerLiensList

List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerLiensListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerLiensListRequest req = new CloudresourcemanagerLiensListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                pageSize = 617636L;
                pageToken = "sed";
                parent = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            CloudresourcemanagerLiensListResponse res = sdk.liens.cloudresourcemanagerLiensList(req, new CloudresourcemanagerLiensListSecurity() {{
                option1 = new CloudresourcemanagerLiensListSecurityOption1("hic", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLiensResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
