# MyInfo

### Available Operations

* [GetAutomaticInvitationList](#getautomaticinvitationlist) - List current user's automatic invitations info 
* [GetTeamTemplateDetail](#getteamtemplatedetail) - Get current user's team template detal info 
* [GetTeamTemplateList](#getteamtemplatelist) - List current user's team templates info 
* [UploadProfileImage](#uploadprofileimage) - Upload Profile Image.  A multipart/form-data request with a name "file"

## GetAutomaticInvitationList

List current user's automatic invitations info 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MyInfo.GetAutomaticInvitationList(ctx, operations.GetAutomaticInvitationListRequest{
        WorkgroupID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTeamTemplateDetail

Get current user's team template detal info 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MyInfo.GetTeamTemplateDetail(ctx, operations.GetTeamTemplateDetailRequest{
        TeamTemplateID: "vero",
        WorkgroupID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTeamTemplateList

List current user's team templates info 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MyInfo.GetTeamTemplateList(ctx, operations.GetTeamTemplateListRequest{
        WorkgroupID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UploadProfileImage

Upload Profile Image.  A multipart/form-data request with a name "file"

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MyInfo.UploadProfileImage(ctx, operations.UploadProfileImageRequest{
        RequestBody: []byte("voluptatibus"),
        WorkgroupID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
