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