# contacts

### Available Operations

* [mirrorContactsDelete](#mirrorcontactsdelete) - Deletes a contact.
* [mirrorContactsGet](#mirrorcontactsget) - Gets a single contact by ID.
* [mirrorContactsInsert](#mirrorcontactsinsert) - Inserts a new contact.
* [mirrorContactsList](#mirrorcontactslist) - Retrieves a list of contacts for the authenticated user.
* [mirrorContactsPatch](#mirrorcontactspatch) - Updates a contact in place. This method supports patch semantics.
* [mirrorContactsUpdate](#mirrorcontactsupdate) - Updates a contact in place.

## mirrorContactsDelete

Deletes a contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorContactsDeleteRequest;
import org.openapis.openapi.models.operations.MirrorContactsDeleteResponse;
import org.openapis.openapi.models.operations.MirrorContactsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorContactsDeleteRequest req = new MirrorContactsDeleteRequest("hic") {{
                alt = AltEnum.JSON;
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                userIp = "molestiae";
            }};            

            MirrorContactsDeleteResponse res = sdk.contacts.mirrorContactsDelete(req, new MirrorContactsDeleteSecurity("modi", "qui") {{
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

## mirrorContactsGet

Gets a single contact by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorContactsGetRequest;
import org.openapis.openapi.models.operations.MirrorContactsGetResponse;
import org.openapis.openapi.models.operations.MirrorContactsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorContactsGetRequest req = new MirrorContactsGetRequest("impedit") {{
                alt = AltEnum.JSON;
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                userIp = "aspernatur";
            }};            

            MirrorContactsGetResponse res = sdk.contacts.mirrorContactsGet(req, new MirrorContactsGetSecurity("perferendis", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorContactsInsert

Inserts a new contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorContactsInsertRequest;
import org.openapis.openapi.models.operations.MirrorContactsInsertResponse;
import org.openapis.openapi.models.operations.MirrorContactsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Contact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorContactsInsertRequest req = new MirrorContactsInsertRequest() {{
                contact = new Contact() {{
                    acceptCommands = new org.openapis.openapi.models.shared.Command[]{{
                        add(new Command() {{
                            type = "sed";
                        }}),
                        add(new Command() {{
                            type = "iste";
                        }}),
                        add(new Command() {{
                            type = "dolor";
                        }}),
                    }};
                    acceptTypes = new String[]{{
                        add("laboriosam"),
                        add("hic"),
                        add("saepe"),
                    }};
                    displayName = "fuga";
                    id = "7596eb10-faaa-4235-ac59-55907aff1a3a";
                    imageUrls = new String[]{{
                        add("repellat"),
                    }};
                    kind = "mollitia";
                    phoneNumber = "occaecati";
                    priority = 253291L;
                    sharingFeatures = new String[]{{
                        add("quam"),
                        add("molestiae"),
                    }};
                    source = "velit";
                    speakableName = "error";
                    type = "quia";
                }};;
                alt = AltEnum.JSON;
                fields = "quis";
                key = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                userIp = "enim";
            }};            

            MirrorContactsInsertResponse res = sdk.contacts.mirrorContactsInsert(req, new MirrorContactsInsertSecurity("odit", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorContactsList

Retrieves a list of contacts for the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorContactsListRequest;
import org.openapis.openapi.models.operations.MirrorContactsListResponse;
import org.openapis.openapi.models.operations.MirrorContactsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorContactsListRequest req = new MirrorContactsListRequest() {{
                alt = AltEnum.JSON;
                fields = "sequi";
                key = "tenetur";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                userIp = "possimus";
            }};            

            MirrorContactsListResponse res = sdk.contacts.mirrorContactsList(req, new MirrorContactsListSecurity("aut", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorContactsPatch

Updates a contact in place. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorContactsPatchRequest;
import org.openapis.openapi.models.operations.MirrorContactsPatchResponse;
import org.openapis.openapi.models.operations.MirrorContactsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Contact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorContactsPatchRequest req = new MirrorContactsPatchRequest("error") {{
                contact = new Contact() {{
                    acceptCommands = new org.openapis.openapi.models.shared.Command[]{{
                        add(new Command() {{
                            type = "laborum";
                        }}),
                        add(new Command() {{
                            type = "quasi";
                        }}),
                        add(new Command() {{
                            type = "reiciendis";
                        }}),
                        add(new Command() {{
                            type = "voluptatibus";
                        }}),
                    }};
                    acceptTypes = new String[]{{
                        add("nihil"),
                        add("praesentium"),
                        add("voluptatibus"),
                        add("ipsa"),
                    }};
                    displayName = "omnis";
                    id = "7b0074f1-5471-4b5e-ae13-b99d488e1e91";
                    imageUrls = new String[]{{
                        add("incidunt"),
                        add("enim"),
                        add("consequatur"),
                        add("est"),
                    }};
                    kind = "quibusdam";
                    phoneNumber = "explicabo";
                    priority = 647174L;
                    sharingFeatures = new String[]{{
                        add("quibusdam"),
                        add("labore"),
                        add("modi"),
                    }};
                    source = "qui";
                    speakableName = "aliquid";
                    type = "cupiditate";
                }};;
                alt = AltEnum.JSON;
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                userIp = "ipsam";
            }};            

            MirrorContactsPatchResponse res = sdk.contacts.mirrorContactsPatch(req, new MirrorContactsPatchSecurity("alias", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorContactsUpdate

Updates a contact in place.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorContactsUpdateRequest;
import org.openapis.openapi.models.operations.MirrorContactsUpdateResponse;
import org.openapis.openapi.models.operations.MirrorContactsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Contact;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorContactsUpdateRequest req = new MirrorContactsUpdateRequest("dolorum") {{
                contact = new Contact() {{
                    acceptCommands = new org.openapis.openapi.models.shared.Command[]{{
                        add(new Command() {{
                            type = "tempora";
                        }}),
                        add(new Command() {{
                            type = "facilis";
                        }}),
                        add(new Command() {{
                            type = "tempore";
                        }}),
                    }};
                    acceptTypes = new String[]{{
                        add("delectus"),
                        add("eum"),
                    }};
                    displayName = "non";
                    id = "c969e9a3-efa7-47df-b14c-d66ae395efb9";
                    imageUrls = new String[]{{
                        add("id"),
                        add("blanditiis"),
                        add("deleniti"),
                    }};
                    kind = "sapiente";
                    phoneNumber = "amet";
                    priority = 643990L;
                    sharingFeatures = new String[]{{
                        add("vel"),
                        add("natus"),
                    }};
                    source = "omnis";
                    speakableName = "molestiae";
                    type = "perferendis";
                }};;
                alt = AltEnum.JSON;
                fields = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                userIp = "labore";
            }};            

            MirrorContactsUpdateResponse res = sdk.contacts.mirrorContactsUpdate(req, new MirrorContactsUpdateSecurity("labore", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
