# myInfo

### Available Operations

* [getAutomaticInvitationList](#getautomaticinvitationlist) - List current user's automatic invitations info 
* [getTeamTemplateDetail](#getteamtemplatedetail) - Get current user's team template detal info 
* [getTeamTemplateList](#getteamtemplatelist) - List current user's team templates info 
* [uploadProfileImage](#uploadprofileimage) - Upload Profile Image.  A multipart/form-data request with a name "file"

## getAutomaticInvitationList

List current user's automatic invitations info 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomaticInvitationListRequest;
import org.openapis.openapi.models.operations.GetAutomaticInvitationListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomaticInvitationListRequest req = new GetAutomaticInvitationListRequest("harum");            

            GetAutomaticInvitationListResponse res = sdk.myInfo.getAutomaticInvitationList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamTemplateDetail

Get current user's team template detal info 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamTemplateDetailRequest;
import org.openapis.openapi.models.operations.GetTeamTemplateDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamTemplateDetailRequest req = new GetTeamTemplateDetailRequest("enim", "accusamus");            

            GetTeamTemplateDetailResponse res = sdk.myInfo.getTeamTemplateDetail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamTemplateList

List current user's team templates info 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamTemplateListRequest;
import org.openapis.openapi.models.operations.GetTeamTemplateListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamTemplateListRequest req = new GetTeamTemplateListRequest("commodi");            

            GetTeamTemplateListResponse res = sdk.myInfo.getTeamTemplateList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadProfileImage

Upload Profile Image.  A multipart/form-data request with a name "file"

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadProfileImageRequest;
import org.openapis.openapi.models.operations.UploadProfileImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadProfileImageRequest req = new UploadProfileImageRequest("repudiandae") {{
                requestBody = "quae".getBytes();
            }};            

            UploadProfileImageResponse res = sdk.myInfo.uploadProfileImage(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
