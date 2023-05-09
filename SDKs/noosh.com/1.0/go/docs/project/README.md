# Project

### Available Operations

* [AttachProjectJSON](#attachprojectjson) - Attach children projects to specific Project
* [AttachProjectRaw](#attachprojectraw) - Attach children projects to specific Project
* [DeleteProject](#deleteproject) - Archieve a specific Project
* [GetProject](#getproject) - Get a specific Project
* [GetProjectList](#getprojectlist) - List the projects
* [PatchProjectJSON](#patchprojectjson) - Patch a specific Project
* [PatchProjectRaw](#patchprojectraw) - Patch a specific Project
* [PostProjectJSON](#postprojectjson) - Create a Project
* [PostProjectRaw](#postprojectraw) - Create a Project
* [PutProjectJSON](#putprojectjson) - Update a specific Project
* [PutProjectRaw](#putprojectraw) - Update a specific Project

## AttachProjectJSON

Attach children projects to specific Project

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
    res, err := s.Project.AttachProjectJSON(ctx, operations.AttachProjectJSONRequest{
        ProjectIDListVO: &shared.ProjectIDListVO{
            ChildProjectIds: []int64{
                1,
                1,
            },
        },
        ProjectID: "vel",
        WorkgroupID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## AttachProjectRaw

Attach children projects to specific Project

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
    res, err := s.Project.AttachProjectRaw(ctx, operations.AttachProjectRawRequest{
        RequestBody: []byte("omnis"),
        ProjectID: "molestiae",
        WorkgroupID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DeleteProject

Archieve a specific Project

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
    res, err := s.Project.DeleteProject(ctx, operations.DeleteProjectRequest{
        ProjectID: "nihil",
        WorkgroupID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetProject

Get a specific Project

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
    res, err := s.Project.GetProject(ctx, operations.GetProjectRequest{
        ProjectID: "distinctio",
        WorkgroupID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetProjectList

List the projects

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
    res, err := s.Project.GetProjectList(ctx, operations.GetProjectListRequest{
        WorkgroupID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PatchProjectJSON

Patch a specific Project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Project.PatchProjectJSON(ctx, operations.PatchProjectJSONRequest{
        ProjectPatchPO: &shared.ProjectPatchPO{
            ClientUserID: sdk.Int64(1),
            ClientWorkgroupID: sdk.Int64(1),
            Comments: sdk.String("sample comments"),
            CompletionDate: types.MustDateFromString("2022-08-14"),
            CustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-02-21"),
                    NumberValue: sdk.String("vero"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-11-24"),
                    NumberValue: sdk.String("magnam"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-06-06"),
                    NumberValue: sdk.String("ullam"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            DeactivationReasonID: sdk.Int64(1),
            IsActive: sdk.Bool(true),
            IsHot: sdk.Bool(true),
            ProjectCategoryID: sdk.Int64(1),
            ProjectDescription: sdk.String("sample project_description"),
            ProjectName: sdk.String("sample project_name"),
            ProjectNumber: sdk.String("sample project_number"),
            ProjectStatusID: sdk.Int64(1),
        },
        ProjectID: "provident",
        WorkgroupID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PatchProjectRaw

Patch a specific Project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Project.PatchProjectRaw(ctx, operations.PatchProjectRawRequest{
        RequestBody: []byte("sint"),
        ProjectID: "accusantium",
        WorkgroupID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostProjectJSON

Create a Project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Project.PostProjectJSON(ctx, operations.PostProjectJSONRequest{
        ProjectPersistVO: &shared.ProjectPersistVO{
            ClientAccount: sdk.String("sample client_account"),
            ClientUserID: sdk.Int64(1),
            ClientWorkgroupID: sdk.Int64(1),
            Comments: sdk.String("sample comments"),
            CompletionDate: types.MustDateFromString("2021-01-16"),
            CustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-10-12"),
                    NumberValue: sdk.String("necessitatibus"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-08-19"),
                    NumberValue: sdk.String("quasi"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            DeactivationReasonID: sdk.Int64(1),
            IsActive: sdk.Bool(true),
            IsHot: sdk.Bool(true),
            IsPaperDirect: sdk.Bool(true),
            ProjectCategoryID: sdk.Int64(1),
            ProjectDescription: sdk.String("sample project_description"),
            ProjectName: sdk.String("sample project_name"),
            ProjectNumber: sdk.String("sample project_number"),
            ProjectOwnerUserID: sdk.Int64(1),
            ProjectStatusID: 1,
        },
        WorkgroupID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostProjectRaw

Create a Project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Project.PostProjectRaw(ctx, operations.PostProjectRawRequest{
        RequestBody: []byte("doloribus"),
        WorkgroupID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutProjectJSON

Update a specific Project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Project.PutProjectJSON(ctx, operations.PutProjectJSONRequest{
        ProjectPersistVO: &shared.ProjectPersistVO{
            ClientAccount: sdk.String("sample client_account"),
            ClientUserID: sdk.Int64(1),
            ClientWorkgroupID: sdk.Int64(1),
            Comments: sdk.String("sample comments"),
            CompletionDate: types.MustDateFromString("2022-03-12"),
            CustomFields: []shared.CustomFieldPersistVO{
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-02-08"),
                    NumberValue: sdk.String("architecto"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-01-30"),
                    NumberValue: sdk.String("ullam"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
                shared.CustomFieldPersistVO{
                    DateValue: types.MustDateFromString("2022-01-23"),
                    NumberValue: sdk.String("repellat"),
                    ParamName: sdk.String("sample param_name"),
                    StringValue: sdk.String("sample string_value"),
                },
            },
            DeactivationReasonID: sdk.Int64(1),
            IsActive: sdk.Bool(true),
            IsHot: sdk.Bool(true),
            IsPaperDirect: sdk.Bool(true),
            ProjectCategoryID: sdk.Int64(1),
            ProjectDescription: sdk.String("sample project_description"),
            ProjectName: sdk.String("sample project_name"),
            ProjectNumber: sdk.String("sample project_number"),
            ProjectOwnerUserID: sdk.Int64(1),
            ProjectStatusID: 1,
        },
        ProjectID: "quibusdam",
        WorkgroupID: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutProjectRaw

Update a specific Project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Project.PutProjectRaw(ctx, operations.PutProjectRawRequest{
        RequestBody: []byte("saepe"),
        ProjectID: "pariatur",
        WorkgroupID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
