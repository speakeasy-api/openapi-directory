# Action

## Overview

CKAN's Action API is a powerful, RPC-style API that exposes all of CKAN's core features to API clients.

Find out more
<http://docs.ckan.org/en/ckan-2.5.3/api/index.html>
### Available Operations

* [GetActionOrganizationActivityList](#getactionorganizationactivitylist) - Get the activity stream of an organization
* [GetActionOrganizationActivityListHTML](#getactionorganizationactivitylisthtml) - Get the activity stream of an organization, HTML format
* [GetActionOrganizationAutocomplete](#getactionorganizationautocomplete) - Get names of organizations that match a query string
* [GetActionOrganizationFollowerCount](#getactionorganizationfollowercount) - Get number of followers of an organization
* [GetActionOrganizationFollowerList](#getactionorganizationfollowerlist) - Get users following an organization
* [GetActionOrganizationList](#getactionorganizationlist) - Get names of all organizations
* [GetActionOrganizationListForUser](#getactionorganizationlistforuser) - Get organizations that a user has a given permission for
* [GetActionOrganizationRevisionList](#getactionorganizationrevisionlist) - Get organization revisions
* [GetActionOrganizationShow](#getactionorganizationshow) - Get details of a specific organization
* [GetActionPackageActivityList](#getactionpackageactivitylist) - Get the activity stream of a package (dataset)
* [GetActionPackageActivityListHTML](#getactionpackageactivitylisthtml) - Get the activity stream of a package (dataset), HTML format
* [GetActionPackageAutocomplete](#getactionpackageautocomplete) - Find packages (datasets) matching a query
* [GetActionPackageList](#getactionpackagelist) - Get a list of all packages (datasets)
* [GetActionPackageRelationshipsList](#getactionpackagerelationshipslist) - Get package (dataset) relationships
* [GetActionPackageRevisionList](#getactionpackagerevisionlist) - Get list of revisions for a package (dataset)
* [GetActionPackageSearch](#getactionpackagesearch) - Find packages (datasets) matching query terms
* [GetActionPackageShow](#getactionpackageshow) - Get metadata about one specific package (dataset)
* [GetActionRelatedList](#getactionrelatedlist) - Gets items related to a package (dataset)
* [GetActionResourceSearch](#getactionresourcesearch) - Find resources
* [GetActionResourceShow](#getactionresourceshow) - Get metadata for a specific resource
* [GetActionStatusShow](#getactionstatusshow) - Get the site status
* [GetActionTagList](#getactiontaglist) - Get a list of tags

## GetActionOrganizationActivityList

Return an organization's activity stream

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationActivityList(ctx, operations.GetActionOrganizationActivityListRequest{
        ID: sdk.String("a05dfc2d-df7c-4c78-8a1b-a928fc816742"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationActivityListHTML

Return an organization's activity stream as HTML

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationActivityListHTML(ctx, operations.GetActionOrganizationActivityListHTMLRequest{
        ID: sdk.String("cb739205-9293-496f-aa75-96eb10faaa23"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationAutocomplete

Return a list of organization names that contain a string

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationAutocomplete(ctx, operations.GetActionOrganizationAutocompleteRequest{
        Limit: sdk.Int64(358152),
        Q: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationFollowerCount

Return the number of followers of an organization

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationFollowerCount(ctx, operations.GetActionOrganizationFollowerCountRequest{
        ID: sdk.String("c5955907-aff1-4a3a-afa9-467739251aa5"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationFollowerList

Return a list of users that are following a given organization

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationFollowerList(ctx, operations.GetActionOrganizationFollowerListRequest{
        ID: sdk.String("2c3f5ad0-19da-41ff-a78f-097b0074f154"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationList

Returns the names of all indexed organizations

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationList(ctx, operations.GetActionOrganizationListRequest{
        Limit: sdk.Int64(480894),
        Offset: sdk.Int64(118727),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationListForUser

Return the organizations that the user has a given permission for

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationListForUser(ctx, operations.GetActionOrganizationListForUserRequest{
        Permission: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationRevisionList

Return an organization's revisions

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationRevisionList(ctx, operations.GetActionOrganizationRevisionListRequest{
        ID: sdk.String("5e6e13b9-9d48-48e1-a91e-450ad2abd442"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionOrganizationShow

Return the details of an organization

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionOrganizationShow(ctx, operations.GetActionOrganizationShowRequest{
        ID: sdk.String("69802d50-2a94-4bb4-b63c-969e9a3efa77"),
        IncludeDatasets: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageActivityList

Returns a package's activity stream

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageActivityList(ctx, operations.GetActionPackageActivityListRequest{
        ID: sdk.String("dfb14cd6-6ae3-495e-bb9b-a88f3a669970"),
        Limit: sdk.Int64(470132),
        Offset: sdk.Int64(301575),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageActivityListHTML

The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageActivityListHTML(ctx, operations.GetActionPackageActivityListHTMLRequest{
        ID: sdk.String("ba4469b6-e214-4195-9890-afa563e2516f"),
        Limit: sdk.Int64(891924),
        Offset: sdk.Int64(260341),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageAutocomplete

Return a list of datasets that match a string

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageAutocomplete(ctx, operations.GetActionPackageAutocompleteRequest{
        Limit: sdk.Int64(806194),
        Q: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageList

Returns the names of all indexed packages (datasets)

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageList(ctx, operations.GetActionPackageListRequest{
        Limit: sdk.Int64(703889),
        Offset: sdk.Int64(447926),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageRelationshipsList

Return a dataset's relationships

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageRelationshipsList(ctx, operations.GetActionPackageRelationshipsListRequest{
        ID: sdk.String("11e5b7fd-2ed0-4289-a1cd-dc692601fb57"),
        Id2: sdk.String("autem"),
        Rel: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageRevisionList

Return a dataset's revision as a list of dictionaries

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageRevisionList(ctx, operations.GetActionPackageRevisionListRequest{
        ID: sdk.String("0d5f0d30-c5fb-4b25-8705-3202c73d5fe9"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageSearch

Searches for packages (datasets) matching the specified query terms

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageSearch(ctx, operations.GetActionPackageSearchRequest{
        Q: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionPackageShow

Returns metadata about the package (dataset) corresponding to the specified unique name

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionPackageShow(ctx, operations.GetActionPackageShowRequest{
        ID: sdk.String("90c28909-b3fe-449a-8d9c-bf48633323f9"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionRelatedList

Returns a dataset's related items.

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionRelatedList(ctx, operations.GetActionRelatedListRequest{
        Dataset: sdk.String("cum"),
        Featured: sdk.String("voluptate"),
        ID: sdk.String("7f3a4100-674e-4bf6-9280-d1ba77a89ebf"),
        Sort: sdk.String("nihil"),
        TypeFilter: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionResourceSearch

Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionResourceSearch(ctx, operations.GetActionResourceSearchRequest{
        Fields: sdk.String("voluptate"),
        Limit: sdk.Int64(663078),
        Offset: sdk.Int64(906418),
        OrderBy: sdk.String("eius"),
        Query: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionResourceShow

Return the metadata of a resource

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionResourceShow(ctx, operations.GetActionResourceShowRequest{
        ID: sdk.String("03ce5e6a-95d8-4a0d-846c-e2af7a73cf3b"),
        IncludeTracking: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionStatusShow

Returns the site status

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionStatusShow(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActionTagList

Returns the names of all indexed tags

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
            GithubAccessCode: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Action.GetActionTagList(ctx, operations.GetActionTagListRequest{
        Limit: sdk.Int64(880298),
        Offset: sdk.Int64(253941),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
