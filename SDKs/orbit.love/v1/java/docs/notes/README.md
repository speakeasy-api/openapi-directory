# notes

### Available Operations

* [getWorkspaceSlugMembersMemberSlugNotes](#getworkspaceslugmembersmemberslugnotes) - Get the member's notes
* [postWorkspaceSlugMembersMemberSlugNotes](#postworkspaceslugmembersmemberslugnotes) - Create a note
* [putWorkspaceSlugMembersMemberSlugNotesId](#putworkspaceslugmembersmemberslugnotesid) - Update a note

## getWorkspaceSlugMembersMemberSlugNotes

Get the member's notes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugNotesRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugNotesResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugNotesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugMembersMemberSlugNotesRequest req = new GetWorkspaceSlugMembersMemberSlugNotesRequest("sed", "saepe") {{
                page = "pariatur";
            }};            

            GetWorkspaceSlugMembersMemberSlugNotesResponse res = sdk.notes.getWorkspaceSlugMembersMemberSlugNotes(req, new GetWorkspaceSlugMembersMemberSlugNotesSecurity("accusantium") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## postWorkspaceSlugMembersMemberSlugNotes

Create a note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugNotesRequest;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugNotesResponse;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugNotesSecurity;
import org.openapis.openapi.models.shared.Note;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspaceSlugMembersMemberSlugNotesRequest req = new PostWorkspaceSlugMembersMemberSlugNotesRequest("consequuntur", "praesentium") {{
                note = new Note("natus");;
            }};            

            PostWorkspaceSlugMembersMemberSlugNotesResponse res = sdk.notes.postWorkspaceSlugMembersMemberSlugNotes(req, new PostWorkspaceSlugMembersMemberSlugNotesSecurity("magni") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## putWorkspaceSlugMembersMemberSlugNotesId

Update a note

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugNotesIdRequest;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugNotesIdResponse;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugNotesIdSecurity;
import org.openapis.openapi.models.shared.Note;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspaceSlugMembersMemberSlugNotesIdRequest req = new PutWorkspaceSlugMembersMemberSlugNotesIdRequest("sunt", "quo", "illum") {{
                note = new Note("pariatur");;
            }};            

            PutWorkspaceSlugMembersMemberSlugNotesIdResponse res = sdk.notes.putWorkspaceSlugMembersMemberSlugNotesId(req, new PutWorkspaceSlugMembersMemberSlugNotesIdSecurity("maxime") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
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
