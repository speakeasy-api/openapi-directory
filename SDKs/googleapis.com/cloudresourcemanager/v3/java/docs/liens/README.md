# liens

### Available Operations

* [cloudresourcemanagerLiensCreate](#cloudresourcemanagerlienscreate) - Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
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
                dollarXgafv = XgafvEnum.TWO;
                lien = new Lien() {{
                    createTime = "laboriosam";
                    name = "Elias Parker";
                    origin = "iste";
                    parent = "iure";
                    reason = "saepe";
                    restrictions = new String[]{{
                        add("architecto"),
                        add("ipsa"),
                        add("reiciendis"),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            CloudresourcemanagerLiensCreateResponse res = sdk.liens.cloudresourcemanagerLiensCreate(req, new CloudresourcemanagerLiensCreateSecurity() {{
                option1 = new CloudresourcemanagerLiensCreateSecurityOption1("omnis", "nemo") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                pageSize = 102044L;
                pageToken = "mollitia";
                parent = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "consequuntur";
                uploadProtocol = "repellat";
            }};            

            CloudresourcemanagerLiensListResponse res = sdk.liens.cloudresourcemanagerLiensList(req, new CloudresourcemanagerLiensListSecurity() {{
                option1 = new CloudresourcemanagerLiensListSecurityOption1("mollitia", "occaecati") {{
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
