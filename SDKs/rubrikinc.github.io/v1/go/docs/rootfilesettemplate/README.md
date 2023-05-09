# RootFilesetTemplate

## Overview

File system fileset templates.

### Available Operations

* [CreateFilesetTemplate](#createfilesettemplate) - Create a fileset template
* [DeleteFilesetTemplate](#deletefilesettemplate) - Delete a fileset template
* [GetFilesetTemplate](#getfilesettemplate) - Get information for a fileset template
* [QueryFilesetTemplate](#queryfilesettemplate) - Get summary information for all fileset templates
* [UpdateFilesetTemplate](#updatefilesettemplate) - Modify a fileset template

## CreateFilesetTemplate

Create a fileset template. The template is applied to the host.  Each template is a set of paths on the host.

A template uses full paths and wildcards to define the objects to include, exclude, and exempt from exclusion.

The **_exceptions_** value specifies paths that should not be excluded from the fileset by the **_exclude_** value.

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
    res, err := s.RootFilesetTemplate.CreateFilesetTemplate(ctx, shared.FilesetTemplateCreate{
        AllowBackupHiddenFoldersInNetworkMounts: sdk.Bool(false),
        AllowBackupNetworkMounts: sdk.Bool(false),
        BackupScriptErrorHandling: sdk.String("assumenda"),
        BackupScriptTimeout: sdk.Int64(776421),
        Exceptions: []string{
            "tempore",
            "commodi",
            "fugit",
        },
        Excludes: []string{
            "voluptate",
            "nisi",
        },
        Includes: []string{
            "provident",
            "laboriosam",
        },
        IsArrayEnabled: sdk.Bool(false),
        Name: "Andrew Ward Jr.",
        OperatingSystemType: shared.FilesetTemplateCreateOperatingSystemTypeEnumUnixLike.ToPointer(),
        PostBackupScript: sdk.String("consequuntur"),
        PreBackupScript: sdk.String("vitae"),
        ShareType: shared.FilesetTemplateCreateShareTypeEnumSmb.ToPointer(),
        UseWindowsVss: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetTemplateDetail != nil {
        // handle response
    }
}
```

## DeleteFilesetTemplate

Deletes the specfied fileset template. All associated filesets are deleted.

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
    res, err := s.RootFilesetTemplate.DeleteFilesetTemplate(ctx, operations.DeleteFilesetTemplateRequest{
        ID: "335d89ac-b3ec-4fda-8d0c-549ef0300497",
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

## GetFilesetTemplate

Retrieve summary information for a specified fileset template.

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
    res, err := s.RootFilesetTemplate.GetFilesetTemplate(ctx, operations.GetFilesetTemplateRequest{
        ID: "8a61fa1c-f206-488f-b7c1-ffc71dca163f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetTemplateDetail != nil {
        // handle response
    }
}
```

## QueryFilesetTemplate

Retrieve summary information for all fileset templates, including: ID and name of the fileset template, fileset template creation timestamp, array of the included filepaths, array of the excluded filepaths.

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
    res, err := s.RootFilesetTemplate.QueryFilesetTemplate(ctx, operations.QueryFilesetTemplateRequest{
        Name: sdk.String("Lynda Donnelly"),
        OperatingSystemType: operations.QueryFilesetTemplateOperatingSystemTypeEnumUnixLike.ToPointer(),
        PrimaryClusterID: sdk.String("laborum"),
        ShareType: operations.QueryFilesetTemplateShareTypeEnumAny.ToPointer(),
        SortBy: operations.QueryFilesetTemplateSortByEnumIncludes.ToPointer(),
        SortOrder: operations.QueryFilesetTemplateSortOrderEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetTemplateDetailListResponse != nil {
        // handle response
    }
}
```

## UpdateFilesetTemplate

Modify the values of specified fileset template.

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
    res, err := s.RootFilesetTemplate.UpdateFilesetTemplate(ctx, operations.UpdateFilesetTemplateRequest{
        FilesetTemplatePatch: shared.FilesetTemplatePatch{
            AllowBackupHiddenFoldersInNetworkMounts: sdk.Bool(false),
            AllowBackupNetworkMounts: sdk.Bool(false),
            BackupScriptErrorHandling: sdk.String("sapiente"),
            BackupScriptTimeout: sdk.Int64(242013),
            Exceptions: []string{
                "non",
            },
            Excludes: []string{
                "illum",
                "at",
                "tenetur",
                "molestias",
            },
            ID: "57a9e618-76c6-4ab2-9d29-dfc94d6fecd7",
            Includes: []string{
                "provident",
                "dolor",
                "sint",
            },
            Name: sdk.String("Deborah Keeling"),
            OperatingSystemType: shared.FilesetTemplatePatchOperatingSystemTypeEnumUnixLike.ToPointer(),
            PostBackupScript: sdk.String("assumenda"),
            PreBackupScript: sdk.String("explicabo"),
            ShareType: shared.FilesetTemplatePatchShareTypeEnumSmb.ToPointer(),
            UseWindowsVss: sdk.Bool(false),
        },
        ID: "00035533-8cec-4086-ba21-e9152cb31191",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilesetTemplateDetail != nil {
        // handle response
    }
}
```
