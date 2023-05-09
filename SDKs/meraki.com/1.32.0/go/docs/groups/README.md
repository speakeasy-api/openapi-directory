# Groups

### Available Operations

* [CreateNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [CreateOrganizationAdaptivePolicyGroup](#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [CreateOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [DeleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [DeleteOrganizationAdaptivePolicyGroup](#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [DeleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [GetNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [GetNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [GetOrganizationAdaptivePolicyGroup](#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [GetOrganizationAdaptivePolicyGroups](#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [GetOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [GetOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [UpdateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [UpdateOrganizationAdaptivePolicyGroup](#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [UpdateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

## CreateNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

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
    res, err := s.Groups.CreateNetworkFirmwareUpgradesStagedGroup(ctx, operations.CreateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Myron Cassin"),
                        Serial: "occaecati",
                    },
                },
                SwitchStacks: []CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "39ae5a4d-5a65-4b4d-9562-d9b7d9e2d6fc",
                        Name: sdk.String("Jerome Hammes"),
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "29db875c-3a89-4028-aa51-f41cf6796ed3",
                        Name: sdk.String("Javier Collier"),
                    },
                    operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "18f581e9-8cce-43f7-9660-0da0e3aa61c6",
                        Name: sdk.String("Merle Abbott"),
                    },
                },
            },
            Description: sdk.String("totam"),
            IsDefault: false,
            Name: "Judith Rogahn",
        },
        NetworkID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateOrganizationAdaptivePolicyGroup

Creates a new adaptive policy group

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
    res, err := s.Groups.CreateOrganizationAdaptivePolicyGroup(ctx, operations.CreateOrganizationAdaptivePolicyGroupRequest{
        RequestBody: operations.CreateOrganizationAdaptivePolicyGroupRequestBody{
            Description: sdk.String("nesciunt"),
            Name: "Nichole Kutch",
            PolicyObjects: []CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("3c710e16-73d9-405c-b4be-def3c127c390"),
                    Name: sdk.String("Joey Hauck"),
                },
                operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("8250dcbb-cd3b-4121-b88c-1ee5e7a06139"),
                    Name: sdk.String("Rachael Schoen"),
                },
                operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("a0b7d176-4926-4b0c-b5e6-cb6ebabe5e0b"),
                    Name: sdk.String("Terrance White"),
                },
                operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("1358d6a8-7bb7-4aec-be56-9d70cb069907"),
                    Name: sdk.String("Terrence Lang"),
                },
            },
            Sgt: 279621,
        },
        OrganizationID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationAdaptivePolicyGroup201ApplicationJSONObject != nil {
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
    res, err := s.Groups.CreateOrganizationPolicyObjectsGroup(ctx, operations.CreateOrganizationPolicyObjectsGroupRequest{
        RequestBody: operations.CreateOrganizationPolicyObjectsGroupRequestBody{
            Category: sdk.String("incidunt"),
            Name: "Judith Nader",
            ObjectIds: []int64{
                94400,
            },
        },
        OrganizationID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationPolicyObjectsGroup201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

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
    res, err := s.Groups.DeleteNetworkFirmwareUpgradesStagedGroup(ctx, operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "dolorem",
        NetworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationAdaptivePolicyGroup

Deletes the specified adaptive policy group and any associated policies and references

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
    res, err := s.Groups.DeleteOrganizationAdaptivePolicyGroup(ctx, operations.DeleteOrganizationAdaptivePolicyGroupRequest{
        ID: "42c61be1-33ba-4cde-932b-6526f862853f",
        OrganizationID: "eveniet",
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
    res, err := s.Groups.DeleteOrganizationPolicyObjectsGroup(ctx, operations.DeleteOrganizationPolicyObjectsGroupRequest{
        OrganizationID: "eos",
        PolicyObjectGroupID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

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
    res, err := s.Groups.GetNetworkFirmwareUpgradesStagedGroup(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupRequest{
        GroupID: "enim",
        NetworkID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

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
    res, err := s.Groups.GetNetworkFirmwareUpgradesStagedGroups(ctx, operations.GetNetworkFirmwareUpgradesStagedGroupsRequest{
        NetworkID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyGroup

Returns an adaptive policy group

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
    res, err := s.Groups.GetOrganizationAdaptivePolicyGroup(ctx, operations.GetOrganizationAdaptivePolicyGroupRequest{
        ID: "e322231f-e666-44c4-9d2f-ba5cba069b8d",
        OrganizationID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationAdaptivePolicyGroups

List adaptive policy groups in a organization

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
    res, err := s.Groups.GetOrganizationAdaptivePolicyGroups(ctx, operations.GetOrganizationAdaptivePolicyGroupsRequest{
        OrganizationID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdaptivePolicyGroups200ApplicationJSONObjects != nil {
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
    res, err := s.Groups.GetOrganizationPolicyObjectsGroup(ctx, operations.GetOrganizationPolicyObjectsGroupRequest{
        OrganizationID: "dicta",
        PolicyObjectGroupID: "libero",
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
    res, err := s.Groups.GetOrganizationPolicyObjectsGroups(ctx, operations.GetOrganizationPolicyObjectsGroupsRequest{
        EndingBefore: sdk.String("recusandae"),
        OrganizationID: "libero",
        PerPage: sdk.Int64(505017),
        StartingAfter: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationPolicyObjectsGroups200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

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
    res, err := s.Groups.UpdateNetworkFirmwareUpgradesStagedGroup(ctx, operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest{
        RequestBody: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBody{
            AssignedDevices: &operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices{
                Devices: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices{
                        Name: sdk.String("Louis Parisian"),
                        Serial: "molestiae",
                    },
                },
                SwitchStacks: []UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "9479edd4-fcf7-4b50-8f87-f08f39271076",
                        Name: sdk.String("Shawn Gulgowski"),
                    },
                    operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks{
                        ID: "0c8f08bf-f108-41e8-8f86-996c8e22be0a",
                        Name: sdk.String("Kendra White"),
                    },
                },
            },
            Description: sdk.String("blanditiis"),
            IsDefault: false,
            Name: "Mike Rodriguez",
        },
        GroupID: "neque",
        NetworkID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationAdaptivePolicyGroup

Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".

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
    res, err := s.Groups.UpdateOrganizationAdaptivePolicyGroup(ctx, operations.UpdateOrganizationAdaptivePolicyGroupRequest{
        RequestBody: &operations.UpdateOrganizationAdaptivePolicyGroupRequestBody{
            Description: sdk.String("corrupti"),
            Name: sdk.String("Miss Tonya Abbott"),
            PolicyObjects: []UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                operations.UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects{
                    ID: sdk.String("c7834273-caa9-4118-b38f-1b61a331a54d"),
                    Name: sdk.String("Stephen Bartell"),
                },
            },
            Sgt: sdk.Int64(267445),
        },
        ID: "f92fed93-9ba8-4f71-a299-2c20ee1228ac",
        OrganizationID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationAdaptivePolicyGroup200ApplicationJSONObject != nil {
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
    res, err := s.Groups.UpdateOrganizationPolicyObjectsGroup(ctx, operations.UpdateOrganizationPolicyObjectsGroupRequest{
        RequestBody: &operations.UpdateOrganizationPolicyObjectsGroupRequestBody{
            Name: sdk.String("Kristopher Ruecker"),
            ObjectIds: []int64{
                860036,
                128638,
            },
        },
        OrganizationID: "numquam",
        PolicyObjectGroupID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationPolicyObjectsGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
