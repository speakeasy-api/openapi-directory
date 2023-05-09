# TeamMember

### Available Operations

* [DeleteTeamMemberOfProject](#deleteteammemberofproject) - Delete a team member for the specific project.
* [GetTeamMemberListOfClientProject](#getteammemberlistofclientproject) - List team member of client project side.
* [GetTeamMemberListOfProject](#getteammemberlistofproject) - List team member of project.
* [PostTeamMemberOfProjectJSON](#postteammemberofprojectjson) - Invite a team member or all the members of team template for the specific project.
* [PostTeamMemberOfProjectRaw](#postteammemberofprojectraw) - Invite a team member or all the members of team template for the specific project.
* [PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersJSON](#postv1workgroupsworkgroupidprojectsprojectidteammembersjson) - Deprecated, please use 1.1 Version
* [PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRaw](#postv1workgroupsworkgroupidprojectsprojectidteammembersraw) - Deprecated, please use 1.1 Version

## DeleteTeamMemberOfProject

Delete a team member for the specific project.

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
    res, err := s.TeamMember.DeleteTeamMemberOfProject(ctx, operations.DeleteTeamMemberOfProjectRequest{
        ProjectID: "repellendus",
        TeammemberID: "porro",
        WorkgroupID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTeamMemberListOfClientProject

List team member of client project side.

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
    res, err := s.TeamMember.GetTeamMemberListOfClientProject(ctx, operations.GetTeamMemberListOfClientProjectRequest{
        ProjectID: "ut",
        WorkgroupID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTeamMemberListOfProject

List team member of project.

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
    res, err := s.TeamMember.GetTeamMemberListOfProject(ctx, operations.GetTeamMemberListOfProjectRequest{
        ProjectID: "cupiditate",
        WorkgroupID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostTeamMemberOfProjectJSON

Invite a team member or all the members of team template for the specific project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TeamMember.PostTeamMemberOfProjectJSON(ctx, operations.PostTeamMemberOfProjectJSONRequest{
        TeamMemberPO: &shared.TeamMemberPO{
            RoleID: sdk.Int64(1),
            TeamTemplateID: sdk.Int64(1),
            UserID: sdk.Int64(1),
        },
        ProjectID: "quae",
        WorkgroupID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostTeamMemberOfProjectRaw

Invite a team member or all the members of team template for the specific project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TeamMember.PostTeamMemberOfProjectRaw(ctx, operations.PostTeamMemberOfProjectRawRequest{
        RequestBody: []byte("odio"),
        ProjectID: "occaecati",
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

## PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersJSON

Deprecated, please use 1.1 Version

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TeamMember.PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersJSON(ctx, operations.PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersJSONRequest{
        ContactUserVO: &shared.ContactUserVO{
            RoleID: 1,
            UserID: 1,
        },
        ProjectID: "quisquam",
        WorkgroupID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRaw

Deprecated, please use 1.1 Version

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TeamMember.PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRaw(ctx, operations.PostV1WorkgroupsWorkgroupIDProjectsProjectIDTeammembersRawRequest{
        RequestBody: []byte("omnis"),
        ProjectID: "quis",
        WorkgroupID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
