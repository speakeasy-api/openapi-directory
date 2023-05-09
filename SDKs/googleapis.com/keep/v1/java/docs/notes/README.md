# notes

### Available Operations

* [keepNotesCreate](#keepnotescreate) - Creates a new note.
* [keepNotesDelete](#keepnotesdelete) - Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
* [keepNotesGet](#keepnotesget) - Gets a note.
* [keepNotesList](#keepnoteslist) - Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
* [keepNotesPermissionsBatchCreate](#keepnotespermissionsbatchcreate) - Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
* [keepNotesPermissionsBatchDelete](#keepnotespermissionsbatchdelete) - Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

## keepNotesCreate

Creates a new note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeepNotesCreateRequest;
import org.openapis.openapi.models.operations.KeepNotesCreateResponse;
import org.openapis.openapi.models.operations.KeepNotesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ListContent;
import org.openapis.openapi.models.shared.ListItem;
import org.openapis.openapi.models.shared.NoteInput;
import org.openapis.openapi.models.shared.Section;
import org.openapis.openapi.models.shared.TextContent;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesCreateRequest req = new KeepNotesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                noteInput = new NoteInput() {{
                    body = new Section() {{
                        list = new ListContent() {{
                            listItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "excepturi";
                                    }};
                                }}),
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "recusandae";
                                    }};
                                }}),
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "ab";
                                    }};
                                }}),
                            }};
                        }};;
                        text = new TextContent() {{
                            text = "quis";
                        }};;
                    }};;
                    title = "Mr.";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            KeepNotesCreateResponse res = sdk.notes.keepNotesCreate(req, new KeepNotesCreateSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.note != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keepNotesDelete

Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeepNotesDeleteRequest;
import org.openapis.openapi.models.operations.KeepNotesDeleteResponse;
import org.openapis.openapi.models.operations.KeepNotesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesDeleteRequest req = new KeepNotesDeleteRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            KeepNotesDeleteResponse res = sdk.notes.keepNotesDelete(req, new KeepNotesDeleteSecurity("deleniti", "hic") {{
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

## keepNotesGet

Gets a note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeepNotesGetRequest;
import org.openapis.openapi.models.operations.KeepNotesGetResponse;
import org.openapis.openapi.models.operations.KeepNotesGetSecurity;
import org.openapis.openapi.models.operations.KeepNotesGetSecurityOption1;
import org.openapis.openapi.models.operations.KeepNotesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesGetRequest req = new KeepNotesGetRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "modi";
                key = "qui";
                mimeType = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            KeepNotesGetResponse res = sdk.notes.keepNotesGet(req, new KeepNotesGetSecurity() {{
                option1 = new KeepNotesGetSecurityOption1("aspernatur", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.note != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keepNotesList

Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeepNotesListRequest;
import org.openapis.openapi.models.operations.KeepNotesListResponse;
import org.openapis.openapi.models.operations.KeepNotesListSecurity;
import org.openapis.openapi.models.operations.KeepNotesListSecurityOption1;
import org.openapis.openapi.models.operations.KeepNotesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesListRequest req = new KeepNotesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                filter = "natus";
                key = "laboriosam";
                oauthToken = "hic";
                pageSize = 902599L;
                pageToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            KeepNotesListResponse res = sdk.notes.keepNotesList(req, new KeepNotesListSecurity() {{
                option1 = new KeepNotesListSecurityOption1("iure", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listNotesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keepNotesPermissionsBatchCreate

Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeepNotesPermissionsBatchCreateRequest;
import org.openapis.openapi.models.operations.KeepNotesPermissionsBatchCreateResponse;
import org.openapis.openapi.models.operations.KeepNotesPermissionsBatchCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchCreatePermissionsRequestInput;
import org.openapis.openapi.models.shared.CreatePermissionRequestInput;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.PermissionInput;
import org.openapis.openapi.models.shared.PermissionRoleEnum;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesPermissionsBatchCreateRequest req = new KeepNotesPermissionsBatchCreateRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                batchCreatePermissionsRequestInput = new BatchCreatePermissionsRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.CreatePermissionRequestInput[]{{
                        add(new CreatePermissionRequestInput() {{
                            parent = "reiciendis";
                            permission = new PermissionInput() {{
                                email = "Madaline21@hotmail.com";
                                family = new java.util.HashMap<String, Object>() {{
                                    put("explicabo", "nobis");
                                    put("enim", "omnis");
                                }};
                                group = new Group() {{
                                    email = "Era43@yahoo.com";
                                }};
                                role = PermissionRoleEnum.OWNER;
                                user = new User() {{
                                    email = "Veronica.Brakus@hotmail.com";
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "mollitia";
                key = "occaecati";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            KeepNotesPermissionsBatchCreateResponse res = sdk.notes.keepNotesPermissionsBatchCreate(req, new KeepNotesPermissionsBatchCreateSecurity("velit", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchCreatePermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keepNotesPermissionsBatchDelete

Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeepNotesPermissionsBatchDeleteRequest;
import org.openapis.openapi.models.operations.KeepNotesPermissionsBatchDeleteResponse;
import org.openapis.openapi.models.operations.KeepNotesPermissionsBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeletePermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesPermissionsBatchDeleteRequest req = new KeepNotesPermissionsBatchDeleteRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeletePermissionsRequest = new BatchDeletePermissionsRequest() {{
                    names = new String[]{{
                        add("laborum"),
                    }};
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "id";
                uploadProtocol = "possimus";
            }};            

            KeepNotesPermissionsBatchDeleteResponse res = sdk.notes.keepNotesPermissionsBatchDelete(req, new KeepNotesPermissionsBatchDeleteSecurity("aut", "quasi") {{
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
