# PolicyObjects

### Available Operations

* [CreateOrganizationPolicyObject](#createorganizationpolicyobject) - Creates a new Policy Object.
* [CreateOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [DeleteOrganizationPolicyObject](#deleteorganizationpolicyobject) - Deletes a Policy Object.
* [DeleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [GetOrganizationPolicyObject](#getorganizationpolicyobject) - Shows details of a Policy Object.
* [GetOrganizationPolicyObjects](#getorganizationpolicyobjects) - Lists Policy Objects belonging to the organization.
* [GetOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [GetOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [UpdateOrganizationPolicyObject](#updateorganizationpolicyobject) - Updates a Policy Object.
* [UpdateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

## CreateOrganizationPolicyObject

Creates a new Policy Object.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.CreateOrganizationPolicyObject(ctx, operations.CreateOrganizationPolicyObjectRequest{
        RequestBody: operations.CreateOrganizationPolicyObjectRequestBody{
            Category: "dignissimos",
            Cidr: sdk.String("explicabo"),
            Fqdn: sdk.String("incidunt"),
            GroupIds: []int64{
                452773,
                394467,
                321635,
                951520,
            },
            IP: sdk.String("laborum"),
            Mask: sdk.String("quae"),
            Name: "Mattie Becker",
            Type: "architecto",
        },
        OrganizationID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationPolicyObject201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationPolicyObjectsGroup

Creates a new Policy Object Group.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.CreateOrganizationPolicyObjectsGroup(ctx, operations.CreateOrganizationPolicyObjectsGroupRequest{
        RequestBody: operations.CreateOrganizationPolicyObjectsGroupRequestBody{
            Category: sdk.String("atque"),
            Name: "Barbara Kessler",
            ObjectIds: []int64{
                585862,
                346168,
            },
        },
        OrganizationID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationPolicyObjectsGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteOrganizationPolicyObject

Deletes a Policy Object.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.DeleteOrganizationPolicyObject(ctx, operations.DeleteOrganizationPolicyObjectRequest{
        OrganizationID: "pariatur",
        PolicyObjectID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationPolicyObjectsGroup

Deletes a Policy Object Group.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.DeleteOrganizationPolicyObjectsGroup(ctx, operations.DeleteOrganizationPolicyObjectsGroupRequest{
        OrganizationID: "labore",
        PolicyObjectGroupID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationPolicyObject

Shows details of a Policy Object.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.GetOrganizationPolicyObject(ctx, operations.GetOrganizationPolicyObjectRequest{
        OrganizationID: "ad",
        PolicyObjectID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationPolicyObjects

Lists Policy Objects belonging to the organization.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.GetOrganizationPolicyObjects(ctx, operations.GetOrganizationPolicyObjectsRequest{
        EndingBefore: sdk.String("eveniet"),
        OrganizationID: "neque",
        PerPage: sdk.Int64(171465),
        StartingAfter: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObjects200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationPolicyObjectsGroup

Shows details of a Policy Object Group.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.GetOrganizationPolicyObjectsGroup(ctx, operations.GetOrganizationPolicyObjectsGroupRequest{
        OrganizationID: "error",
        PolicyObjectGroupID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObjectsGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationPolicyObjectsGroups

Lists Policy Object Groups belonging to the organization.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.GetOrganizationPolicyObjectsGroups(ctx, operations.GetOrganizationPolicyObjectsGroupsRequest{
        EndingBefore: sdk.String("aliquid"),
        OrganizationID: "optio",
        PerPage: sdk.Int64(65139),
        StartingAfter: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObjectsGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationPolicyObject

Updates a Policy Object.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.UpdateOrganizationPolicyObject(ctx, operations.UpdateOrganizationPolicyObjectRequest{
        RequestBody: &operations.UpdateOrganizationPolicyObjectRequestBody{
            Cidr: sdk.String("quod"),
            Fqdn: sdk.String("necessitatibus"),
            GroupIds: []int64{
                983577,
                422456,
                212206,
                598299,
            },
            IP: sdk.String("ullam"),
            Mask: sdk.String("temporibus"),
            Name: sdk.String("Francis Ferry"),
        },
        OrganizationID: "ut",
        PolicyObjectID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationPolicyObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationPolicyObjectsGroup

Updates a Policy Object Group.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PolicyObjects.UpdateOrganizationPolicyObjectsGroup(ctx, operations.UpdateOrganizationPolicyObjectsGroupRequest{
        RequestBody: &operations.UpdateOrganizationPolicyObjectsGroupRequestBody{
            Name: sdk.String("Lynn Strosin II"),
            ObjectIds: []int64{
                645013,
                489133,
                696748,
            },
        },
        OrganizationID: "dignissimos",
        PolicyObjectGroupID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationPolicyObjectsGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
