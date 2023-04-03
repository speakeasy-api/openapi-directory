<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.KeepNotesCreateSecurity;
import org.openapis.openapi.models.operations.KeepNotesCreateRequest;
import org.openapis.openapi.models.operations.KeepNotesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NoteInput;
import org.openapis.openapi.models.shared.Section;
import org.openapis.openapi.models.shared.TextContent;
import org.openapis.openapi.models.shared.ListContent;
import org.openapis.openapi.models.shared.ListItem;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeepNotesCreateRequest req = new KeepNotesCreateRequest() {{
                dollarXgafv = "2";
                noteInput = new NoteInput() {{
                    body = new Section() {{
                        list = new ListContent() {{
                            listItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "quibusdam";
                                    }};
                                }}),
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "nulla";
                                    }};
                                }}),
                                add(new ListItem() {{
                                    checked = false;
                                    childListItems = new org.openapis.openapi.models.shared.ListItem[]{{
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                        add(new ListItem() {{}}),
                                    }};
                                    text = new TextContent() {{
                                        text = "illum";
                                    }};
                                }}),
                            }};
                        }};
                        text = new TextContent() {{
                            text = "vel";
                        }};
                    }};
                    title = "Miss";
                }};
                accessToken = "deserunt";
                alt = "media";
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }}            

            KeepNotesCreateResponse res = sdk.notes.keepNotesCreate(req, new KeepNotesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.note.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->