# RootHdfsTemplate

## Overview

HDFS templates.

### Available Operations

* [CreateHdfsTemplate](#createhdfstemplate) - Create a HDFS directory template
* [DeleteHdfsTemplate](#deletehdfstemplate) - Delete a HDFS directory template
* [GetHdfsTemplate](#gethdfstemplate) - Get information for a HDFS directory template
* [QueryHdfsTemplate](#queryhdfstemplate) - Get summary information for all HDFS directory templates
* [UpdateHdfsTemplate](#updatehdfstemplate) - Modify a HDFS directory template

## CreateHdfsTemplate

Create a HDFS directory template. The template is applied to the host.  Each template is a set of paths on the host.
A template uses full paths and wildcards to define the objects to include, exclude, and exempt from exclusion.
The **_exceptions_** value specifies paths that should not be excluded from the HDFS directory by the **_exclude_** value.
Specify an array of full path descriptions for each property **_include_**, **_exclude_**, and **_exceptions_**.
Acceptable wildcard characters are.
+ **_\*_** Single asterisk matches zero or more characters up to a path deliminator.
+ **_\*\*_** Double asterisk matches zero or more characters.
The following rules apply to path descriptions.
+ Accepts UTF-8 characters.
+ Case sensitive.
+ Forward slash character **_/_** is the path deliminator.
+ Symbolic links must point to a subset of a non symbolic link path.
+ Paths that do not start with **_/_** are modified to start with **_\*\*/_**.
+ Paths that do not end with **_\*_** are modified to end with **_/\*\*_**.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHdfsTemplate.CreateHdfsTemplate(ctx, shared.HdfsTemplateCreate{
        Exceptions: []string{
            "cupiditate",
            "occaecati",
        },
        Excludes: []string{
            "fuga",
            "consectetur",
            "modi",
            "aspernatur",
        },
        Includes: []string{
            "suscipit",
        },
        Name: "Olive Mayer",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsTemplateDetail != nil {
        // handle response
    }
}
```

## DeleteHdfsTemplate

Deletes the specfied HDFS directory template. All associated HDFS directories are deleted.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHdfsTemplate.DeleteHdfsTemplate(ctx, operations.DeleteHdfsTemplateRequest{
        ID: "00ce78a1-bd8f-4b7a-8a11-6ce723d4097f",
        PreserveSnapshots: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetHdfsTemplate

Retrieve summary information for a specified HDFS directory template.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHdfsTemplate.GetHdfsTemplate(ctx, operations.GetHdfsTemplateRequest{
        ID: "a30e9af7-25b2-4912-a030-d83f5aeb7799",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsTemplateDetail != nil {
        // handle response
    }
}
```

## QueryHdfsTemplate

Retrieve summary information for all HDFS directory templates, including: ID and name of the HDFS directory template, HDFS directory template creation timestamp, array of the included filepaths, array of the excluded filepaths.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHdfsTemplate.QueryHdfsTemplate(ctx, operations.QueryHdfsTemplateRequest{
        Name: sdk.String("Nicholas Conroy"),
        PrimaryClusterID: sdk.String("optio"),
        SortBy: operations.QueryHdfsTemplateSortByEnumName.ToPointer(),
        SortOrder: operations.QueryHdfsTemplateSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsTemplateDetailListResponse != nil {
        // handle response
    }
}
```

## UpdateHdfsTemplate

Modify the values of specified HDFS directory template.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHdfsTemplate.UpdateHdfsTemplate(ctx, operations.UpdateHdfsTemplateRequest{
        HdfsTemplatePatch: shared.HdfsTemplatePatch{
            Exceptions: []string{
                "magnam",
                "perspiciatis",
                "amet",
            },
            Excludes: []string{
                "sunt",
                "nemo",
                "delectus",
            },
            ID: "dc42c876-c2c2-4dfb-8cfc-1c76230f841f",
            Includes: []string{
                "architecto",
                "rerum",
                "assumenda",
            },
            Name: sdk.String("Connie Weissnat"),
        },
        ID: "14db6be5-a685-4998-a22a-e20da16fc2b2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HdfsTemplateDetail != nil {
        // handle response
    }
}
```
