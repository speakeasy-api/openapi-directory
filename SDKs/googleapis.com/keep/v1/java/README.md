# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.KeepNotesCreateSecurity;
import org.openapis.openapi.models.operations.KeepNotesCreateQueryParams;
import org.openapis.openapi.models.operations.KeepNotesCreateRequest;
import org.openapis.openapi.models.operations.KeepNotesCreateResponse;
import org.openapis.openapi.models.shared.NoteInput;
import org.openapis.openapi.models.shared.Section;
import org.openapis.openapi.models.shared.TextContent;
import org.openapis.openapi.models.shared.ListContent;
import org.openapis.openapi.models.shared.ListItem;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesCreateRequest req = new KeepNotesCreateRequest() {{
                security = new KeepNotesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new KeepNotesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new NoteInput() {{
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
                                        text = "iure";
                                    }};
                                }}),
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "debitis";
                                    }};
                                }}),
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "delectus";
                                    }};
                                }}),
                            }};
                        }};
                        text = new TextContent() {{
                            text = "tempora";
                        }};
                    }};
                    title = "Mrs.";
                }};
            }};            

            KeepNotesCreateResponse res = sdk.notes.keepNotesCreate(req);

            if (res.note.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### notes

* `keepNotesCreate` - Creates a new note.
* `keepNotesDelete` - Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
* `keepNotesGet` - Gets a note.
* `keepNotesList` - Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
* `keepNotesPermissionsBatchCreate` - Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
* `keepNotesPermissionsBatchDelete` - Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
