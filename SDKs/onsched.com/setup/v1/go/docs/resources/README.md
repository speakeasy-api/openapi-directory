# Resources

### Available Operations

* [DeleteSetupV1ResourcesAllocationsID](#deletesetupv1resourcesallocationsid) - Delete Allocation
* [DeleteSetupV1ResourcesBlockID](#deletesetupv1resourcesblockid) - Delete Block
* [DeleteSetupV1ResourcesID](#deletesetupv1resourcesid) - Delete Resource
* [DeleteSetupV1ResourcesIDDeleteimage](#deletesetupv1resourcesiddeleteimage) - Delete Resource Image
* [DeleteSetupV1ResourcesIDServices](#deletesetupv1resourcesidservices) - Delete Linked Services
* [GetSetupV1Resources](#getsetupv1resources) - List Resources
* [GetSetupV1ResourcesAllocationsID](#getsetupv1resourcesallocationsid) - Get Allocation
* [GetSetupV1ResourcesBlocksID](#getsetupv1resourcesblocksid) - Get Block
* [GetSetupV1ResourcesTimezones](#getsetupv1resourcestimezones) - Get Time Zones
* [GetSetupV1ResourcesID](#getsetupv1resourcesid) - Get Resource
* [GetSetupV1ResourcesIDAllocations](#getsetupv1resourcesidallocations) - List Resource Allocations
* [GetSetupV1ResourcesIDAvailability](#getsetupv1resourcesidavailability) - List Weekly Availability
* [GetSetupV1ResourcesIDBlocks](#getsetupv1resourcesidblocks) - List Resource Blocks
* [GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress](#getsetupv1resourcesidcalendarauthgooglegoogleemailaddress) - Get Resource Google URL
* [GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress](#getsetupv1resourcesidcalendarauthoutlookoutlookemailaddress) - Get Resource Outlook URL
* [PostSetupV1Resources](#postsetupv1resources) - Create Resource
* [PostSetupV1ResourcesBulk](#postsetupv1resourcesbulk) - Create Resources Bulk
* [PostSetupV1ResourcesIDAllocations](#postsetupv1resourcesidallocations) - Create Allocation
* [PostSetupV1ResourcesIDBlock](#postsetupv1resourcesidblock) - Create Block
* [PostSetupV1ResourcesIDServices](#postsetupv1resourcesidservices) - Create Linked Services
* [PostSetupV1ResourcesIDUploadimage](#postsetupv1resourcesiduploadimage) - Upload Resource Image
* [PutSetupV1ResourcesAllocationsID](#putsetupv1resourcesallocationsid) - Update Allocation
* [PutSetupV1ResourcesBlockID](#putsetupv1resourcesblockid) - Update Block
* [PutSetupV1ResourcesBulk](#putsetupv1resourcesbulk) - Update Resources Bulk
* [PutSetupV1ResourcesID](#putsetupv1resourcesid) - Update Resource
* [PutSetupV1ResourcesIDAvailability](#putsetupv1resourcesidavailability) - Update Weekly Availability
* [PutSetupV1ResourcesIDReassignAppointmentsResourceID](#putsetupv1resourcesidreassignappointmentsresourceid) - Reassign Resource
* [PutSetupV1ResourcesIDRecover](#putsetupv1resourcesidrecover) - Recover Resource
* [PutSetupV1ResourcesIDServices](#putsetupv1resourcesidservices) - Update Linked Services

## DeleteSetupV1ResourcesAllocationsID

<p>Use this endpoint to <b>Delete</b> a Resource Allocation. A valid <b>resourceAllocation id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.DeleteSetupV1ResourcesAllocationsID(ctx, operations.DeleteSetupV1ResourcesAllocationsIDRequest{
        ID: "a7b408f0-5e3d-448f-9af3-13a1f5fd9425",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ResourcesBlockID

<p>Use this endpoint to <b>Delete</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.DeleteSetupV1ResourcesBlockID(ctx, operations.DeleteSetupV1ResourcesBlockIDRequest{
        ID: "9c0b36f2-5ea9-444f-bb75-6c11f6c37a51",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ResourcesID

<p>Use this endpoint to <b>Delete</b> a resource. The resource is not permanently deleted and can be recovered. A valid <b>resource id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.DeleteSetupV1ResourcesID(ctx, operations.DeleteSetupV1ResourcesIDRequest{
        ID: "26243835-bbc0-45a2-ba45-cefc5fde10a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ResourcesIDDeleteimage

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded resource image. A valid <b>resource id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.DeleteSetupV1ResourcesIDDeleteimage(ctx, operations.DeleteSetupV1ResourcesIDDeleteimageRequest{
        ID: "ce2169e5-1001-49c6-9c5e-34762799bfbb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ResourcesIDServices

<p>Use this endpoint to <b>Delete</b> linked services from a Resource, i.e. unlink the services. A valid <b>resource id</b> is required. Once deleted, all services become available to the resource.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.DeleteSetupV1ResourcesIDServices(ctx, operations.DeleteSetupV1ResourcesIDServicesRequest{
        ID: "e6949fb2-bb4e-4cae-ac3d-5db3adebd5da",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1Resources

<p>Use this endpoint to return a <b>List of Resources</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1Resources(ctx, operations.GetSetupV1ResourcesRequest{
        Deleted: sdk.Bool(false),
        Email: sdk.String("Margarita.Gorczany0@hotmail.com"),
        GoogleAuthReturnURL: sdk.String("suscipit"),
        Limit: sdk.Int(647210),
        LocationID: sdk.String("molestias"),
        Name: sdk.String("Ernesto Mayert"),
        Offset: sdk.Int(19462),
        OutlookAuthReturnURL: sdk.String("fugit"),
        ResourceGroupID: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesAllocationsID

<p>Use this endpoint to return a <b>Resource Allocation</b>. A valid <b>resourceAllocation id</b> is required. </p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesAllocationsID(ctx, operations.GetSetupV1ResourcesAllocationsIDRequest{
        ID: "44cf5e9d-9a45-478a-9c1a-c600dec001ac",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceAllocationViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesBlocksID

<p>Use this endpoint to <b>Get</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesBlocksID(ctx, operations.GetSetupV1ResourcesBlocksIDRequest{
        ID: "802e2ec0-9ff8-4f0f-816f-f3477c13e902",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesTimezones

<p>Use this endpoint to return a <b>List of Time Zones</b>.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesTimezones(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemTimezoneViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesID

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the: <i>GET /setup/v1/resources</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesID(ctx, operations.GetSetupV1ResourcesIDRequest{
        GoogleAuthReturnURL: sdk.String("impedit"),
        ID: "14125b09-60a6-4681-91a4-72af923c5949",
        OutlookAuthReturnURL: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesIDAllocations

<p>Use this endpoint to return a list of <b>Resource Allocations</b> for a specified resource. We recommend using allocations if a resource's schedule changes frequently from day to day or week to week. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesIDAllocations(ctx, operations.GetSetupV1ResourcesIDAllocationsRequest{
        EndDate: types.MustTimeFromString("2022-07-06T22:48:19.114Z"),
        ID: "f350cf87-6ffb-4901-86ec-bb4e243cf789",
        Limit: sdk.Int(996541),
        Offset: sdk.Int(955047),
        StartDate: types.MustTimeFromString("2021-01-16T02:54:13.627Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceAllocationListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesIDAvailability

<p>Use this endpoint to view the <b>Weekly Availability</b> for a resource. The displayed available times are represented in the resource's timezone. The resource timezone can be set to any world timezone. If not provided, by default it is set to the Business timezone.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesIDAvailability(ctx, operations.GetSetupV1ResourcesIDAvailabilityRequest{
        ID: "eda53e5a-e6e0-4ac1-84c2-b9c247c88373",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceAvailabilityViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesIDBlocks

<p>Use this endpoint to return a list of <b>Resource Blocks</b>. A valid <b>resource id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesIDBlocks(ctx, operations.GetSetupV1ResourcesIDBlocksRequest{
        EndDate: types.MustTimeFromString("2022-06-20T03:06:33.282Z"),
        ID: "0e1942f3-2e55-4055-b56f-5d56d0bd0af2",
        Limit: sdk.Int(823572),
        Offset: sdk.Int(996072),
        StartDate: types.MustTimeFromString("2022-09-13T05:51:54.156Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress

<p>Use this endpoint to return the <b>Resources Google Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Google Email Address</b> are required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddress(ctx, operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest{
        GoogleAuthReturnURL: sdk.String("adipisci"),
        GoogleEmailAddress: "pariatur",
        ID: "b4f62cba-3f89-441a-abc0-b80a6924d3b2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarAuthViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress

<p>Use this endpoint to return the <b>Resources Outlook Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Outlook Email Address</b> are required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddress(ctx, operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest{
        ID: "ecfcc8f8-9501-40f5-9d3d-6fa1804e54c8",
        OutlookAuthReturnURL: sdk.String("consequuntur"),
        OutlookEmailAddress: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarAuthViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Resources

<p>Use this endpoint to <b>Create</b> a new resource.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PostSetupV1Resources(ctx, operations.PostSetupV1ResourcesRequest{
        ResourceInputModel: &shared.ResourceInputModel{
            Address: &shared.AddressInputModel{
                AddressLine1: sdk.String("inventore"),
                AddressLine2: sdk.String("aliquid"),
                City: sdk.String("Mandyburgh"),
                Country: sdk.String("Iceland"),
                PostalCode: sdk.String("75542"),
                State: sdk.String("recusandae"),
            },
            Availability: &shared.AvailabilityInputModel{
                Fri: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(271306),
                    StartTime: sdk.Int(503449),
                },
                Mon: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(258059),
                    StartTime: sdk.Int(196374),
                },
                Sat: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(532320),
                    StartTime: sdk.Int(27078),
                },
                Sun: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(703189),
                    StartTime: sdk.Int(84178),
                },
                Thu: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(949280),
                    StartTime: sdk.Int(419858),
                },
                Tue: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(694088),
                    StartTime: sdk.Int(517121),
                },
                Wed: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(781193),
                    StartTime: sdk.Int(646491),
                },
            },
            Contact: &shared.ContactInputModel{
                BusinessPhone: sdk.String("magni"),
                BusinessPhoneExt: sdk.String("nihil"),
                ConferenceInfo: sdk.String("voluptas"),
                HomePhone: sdk.String("animi"),
                MobilePhone: sdk.String("commodi"),
                PreferredPhoneType: sdk.String("alias"),
                SkypeUsername: sdk.String("fuga"),
            },
            CustomFields: &shared.CustomFieldInputModel{
                Field1: sdk.String("aut"),
                Field10: sdk.String("dolore"),
                Field2: sdk.String("maxime"),
                Field3: sdk.String("aliquam"),
                Field4: sdk.String("iste"),
                Field5: sdk.String("ullam"),
                Field6: sdk.String("eligendi"),
                Field7: sdk.String("placeat"),
                Field8: sdk.String("voluptas"),
                Field9: sdk.String("occaecati"),
            },
            Description: sdk.String("unde"),
            Email: sdk.String("Janelle.Block9@gmail.com"),
            GroupID: sdk.String("cumque"),
            LocationID: sdk.String("dicta"),
            Name: sdk.String("Miss Irving Quigley"),
            Options: &shared.ResourceOptionsInputModel{
                BioLink: sdk.String("labore"),
                BookingNotification: sdk.Int(712640),
                CalendarAvailability: sdk.Int(548256),
                DisplayColor: sdk.String("rem"),
                EffectiveDate: types.MustTimeFromString("2021-03-25T03:12:44.676Z"),
                Gender: sdk.String("male"),
                GoogleCalendarID: sdk.String("pariatur"),
                Hourly: sdk.Float64(9568.71),
                IgnoreBusinessHours: sdk.Bool(false),
                NotificationType: sdk.Int(775427),
                OutlookCalendarID: sdk.String("incidunt"),
                SortKey: sdk.Int(797293),
            },
            RecurringAvailability: sdk.Bool(false),
            ServiceIds: []string{
                "porro",
                "id",
                "excepturi",
                "occaecati",
            },
            TimezoneID: sdk.String("libero"),
        },
        GoogleAuthReturnURL: sdk.String("quo"),
        OutlookAuthReturnURL: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ResourcesBulk

<p>Use this endpoint to <b>Bulk Create</b> resources. Valid <b>resource ids</b> are required. The posted list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PostSetupV1ResourcesBulk(ctx, operations.PostSetupV1ResourcesBulkRequest{
        ResourcesInputModel: &shared.ResourcesInputModel{
            Resources: []shared.ResourceInputModel{
                shared.ResourceInputModel{
                    Address: &shared.AddressInputModel{
                        AddressLine1: sdk.String("maxime"),
                        AddressLine2: sdk.String("accusantium"),
                        City: sdk.String("Corkeryhaven"),
                        Country: sdk.String("Saint Lucia"),
                        PostalCode: sdk.String("00542-9217"),
                        State: sdk.String("doloremque"),
                    },
                    Availability: &shared.AvailabilityInputModel{
                        Fri: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(30192),
                            StartTime: sdk.Int(430146),
                        },
                        Mon: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(873320),
                            StartTime: sdk.Int(431253),
                        },
                        Sat: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(444479),
                            StartTime: sdk.Int(531195),
                        },
                        Sun: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(502393),
                            StartTime: sdk.Int(470647),
                        },
                        Thu: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(540048),
                            StartTime: sdk.Int(697994),
                        },
                        Tue: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(645544),
                            StartTime: sdk.Int(541822),
                        },
                        Wed: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(344856),
                            StartTime: sdk.Int(542340),
                        },
                    },
                    Contact: &shared.ContactInputModel{
                        BusinessPhone: sdk.String("architecto"),
                        BusinessPhoneExt: sdk.String("est"),
                        ConferenceInfo: sdk.String("enim"),
                        HomePhone: sdk.String("rem"),
                        MobilePhone: sdk.String("magni"),
                        PreferredPhoneType: sdk.String("quae"),
                        SkypeUsername: sdk.String("quas"),
                    },
                    CustomFields: &shared.CustomFieldInputModel{
                        Field1: sdk.String("placeat"),
                        Field10: sdk.String("enim"),
                        Field2: sdk.String("labore"),
                        Field3: sdk.String("sapiente"),
                        Field4: sdk.String("saepe"),
                        Field5: sdk.String("delectus"),
                        Field6: sdk.String("officia"),
                        Field7: sdk.String("natus"),
                        Field8: sdk.String("cumque"),
                        Field9: sdk.String("natus"),
                    },
                    Description: sdk.String("quaerat"),
                    Email: sdk.String("Carli_Torphy@hotmail.com"),
                    GroupID: sdk.String("quis"),
                    LocationID: sdk.String("enim"),
                    Name: sdk.String("Ida Stanton IV"),
                    Options: &shared.ResourceOptionsInputModel{
                        BioLink: sdk.String("minus"),
                        BookingNotification: sdk.Int(990369),
                        CalendarAvailability: sdk.Int(924293),
                        DisplayColor: sdk.String("voluptates"),
                        EffectiveDate: types.MustTimeFromString("2022-10-06T14:31:03.611Z"),
                        Gender: sdk.String("female"),
                        GoogleCalendarID: sdk.String("sit"),
                        Hourly: sdk.Float64(3962.34),
                        IgnoreBusinessHours: sdk.Bool(false),
                        NotificationType: sdk.Int(898638),
                        OutlookCalendarID: sdk.String("sed"),
                        SortKey: sdk.Int(537170),
                    },
                    RecurringAvailability: sdk.Bool(false),
                    ServiceIds: []string{
                        "nesciunt",
                    },
                    TimezoneID: sdk.String("delectus"),
                },
                shared.ResourceInputModel{
                    Address: &shared.AddressInputModel{
                        AddressLine1: sdk.String("laborum"),
                        AddressLine2: sdk.String("aliquam"),
                        City: sdk.String("Gleichnerland"),
                        Country: sdk.String("Samoa"),
                        PostalCode: sdk.String("50829"),
                        State: sdk.String("aspernatur"),
                    },
                    Availability: &shared.AvailabilityInputModel{
                        Fri: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(80284),
                            StartTime: sdk.Int(193236),
                        },
                        Mon: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(143078),
                            StartTime: sdk.Int(685467),
                        },
                        Sat: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(943103),
                            StartTime: sdk.Int(49499),
                        },
                        Sun: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(211301),
                            StartTime: sdk.Int(101854),
                        },
                        Thu: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(44929),
                            StartTime: sdk.Int(134173),
                        },
                        Tue: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(860362),
                            StartTime: sdk.Int(316541),
                        },
                        Wed: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(73574),
                            StartTime: sdk.Int(298750),
                        },
                    },
                    Contact: &shared.ContactInputModel{
                        BusinessPhone: sdk.String("delectus"),
                        BusinessPhoneExt: sdk.String("numquam"),
                        ConferenceInfo: sdk.String("optio"),
                        HomePhone: sdk.String("nobis"),
                        MobilePhone: sdk.String("ex"),
                        PreferredPhoneType: sdk.String("repellat"),
                        SkypeUsername: sdk.String("quae"),
                    },
                    CustomFields: &shared.CustomFieldInputModel{
                        Field1: sdk.String("deleniti"),
                        Field10: sdk.String("expedita"),
                        Field2: sdk.String("hic"),
                        Field3: sdk.String("excepturi"),
                        Field4: sdk.String("aliquid"),
                        Field5: sdk.String("sed"),
                        Field6: sdk.String("beatae"),
                        Field7: sdk.String("similique"),
                        Field8: sdk.String("ea"),
                        Field9: sdk.String("animi"),
                    },
                    Description: sdk.String("dolore"),
                    Email: sdk.String("Jeremie_Koch@hotmail.com"),
                    GroupID: sdk.String("esse"),
                    LocationID: sdk.String("eveniet"),
                    Name: sdk.String("Melvin Torp"),
                    Options: &shared.ResourceOptionsInputModel{
                        BioLink: sdk.String("itaque"),
                        BookingNotification: sdk.Int(489685),
                        CalendarAvailability: sdk.Int(373449),
                        DisplayColor: sdk.String("explicabo"),
                        EffectiveDate: types.MustTimeFromString("2021-10-23T06:28:50.254Z"),
                        Gender: sdk.String("female"),
                        GoogleCalendarID: sdk.String("facilis"),
                        Hourly: sdk.Float64(2181.28),
                        IgnoreBusinessHours: sdk.Bool(false),
                        NotificationType: sdk.Int(284885),
                        OutlookCalendarID: sdk.String("quaerat"),
                        SortKey: sdk.Int(103988),
                    },
                    RecurringAvailability: sdk.Bool(false),
                    ServiceIds: []string{
                        "eveniet",
                        "dolor",
                        "expedita",
                    },
                    TimezoneID: sdk.String("libero"),
                },
                shared.ResourceInputModel{
                    Address: &shared.AddressInputModel{
                        AddressLine1: sdk.String("iste"),
                        AddressLine2: sdk.String("illo"),
                        City: sdk.String("Lueilwitzhaven"),
                        Country: sdk.String("Micronesia"),
                        PostalCode: sdk.String("38095"),
                        State: sdk.String("tempora"),
                    },
                    Availability: &shared.AvailabilityInputModel{
                        Fri: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(63825),
                            StartTime: sdk.Int(607545),
                        },
                        Mon: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(848063),
                            StartTime: sdk.Int(526584),
                        },
                        Sat: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(949370),
                            StartTime: sdk.Int(537946),
                        },
                        Sun: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(264958),
                            StartTime: sdk.Int(937664),
                        },
                        Thu: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(101374),
                            StartTime: sdk.Int(305189),
                        },
                        Tue: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(286726),
                            StartTime: sdk.Int(983434),
                        },
                        Wed: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(196646),
                            StartTime: sdk.Int(902132),
                        },
                    },
                    Contact: &shared.ContactInputModel{
                        BusinessPhone: sdk.String("consequatur"),
                        BusinessPhoneExt: sdk.String("esse"),
                        ConferenceInfo: sdk.String("debitis"),
                        HomePhone: sdk.String("facere"),
                        MobilePhone: sdk.String("quisquam"),
                        PreferredPhoneType: sdk.String("cumque"),
                        SkypeUsername: sdk.String("aliquam"),
                    },
                    CustomFields: &shared.CustomFieldInputModel{
                        Field1: sdk.String("dolorum"),
                        Field10: sdk.String("deserunt"),
                        Field2: sdk.String("ad"),
                        Field3: sdk.String("reiciendis"),
                        Field4: sdk.String("sequi"),
                        Field5: sdk.String("porro"),
                        Field6: sdk.String("laborum"),
                        Field7: sdk.String("nobis"),
                        Field8: sdk.String("quibusdam"),
                        Field9: sdk.String("omnis"),
                    },
                    Description: sdk.String("aut"),
                    Email: sdk.String("Ludwig.McDermott@yahoo.com"),
                    GroupID: sdk.String("necessitatibus"),
                    LocationID: sdk.String("accusantium"),
                    Name: sdk.String("Sue Krajcik"),
                    Options: &shared.ResourceOptionsInputModel{
                        BioLink: sdk.String("sed"),
                        BookingNotification: sdk.Int(140439),
                        CalendarAvailability: sdk.Int(479830),
                        DisplayColor: sdk.String("expedita"),
                        EffectiveDate: types.MustTimeFromString("2022-03-03T21:01:37.637Z"),
                        Gender: sdk.String("female"),
                        GoogleCalendarID: sdk.String("ipsa"),
                        Hourly: sdk.Float64(5751.39),
                        IgnoreBusinessHours: sdk.Bool(false),
                        NotificationType: sdk.Int(291389),
                        OutlookCalendarID: sdk.String("esse"),
                        SortKey: sdk.Int(38044),
                    },
                    RecurringAvailability: sdk.Bool(false),
                    ServiceIds: []string{
                        "sapiente",
                        "quam",
                        "est",
                    },
                    TimezoneID: sdk.String("aliquam"),
                },
                shared.ResourceInputModel{
                    Address: &shared.AddressInputModel{
                        AddressLine1: sdk.String("delectus"),
                        AddressLine2: sdk.String("culpa"),
                        City: sdk.String("Jaylonfield"),
                        Country: sdk.String("Virgin Islands, U.S."),
                        PostalCode: sdk.String("23639"),
                        State: sdk.String("animi"),
                    },
                    Availability: &shared.AvailabilityInputModel{
                        Fri: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(925994),
                            StartTime: sdk.Int(359453),
                        },
                        Mon: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(252567),
                            StartTime: sdk.Int(900368),
                        },
                        Sat: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(719469),
                            StartTime: sdk.Int(983275),
                        },
                        Sun: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(386538),
                            StartTime: sdk.Int(30426),
                        },
                        Thu: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(759490),
                            StartTime: sdk.Int(193623),
                        },
                        Tue: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(125707),
                            StartTime: sdk.Int(112250),
                        },
                        Wed: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(973096),
                            StartTime: sdk.Int(42364),
                        },
                    },
                    Contact: &shared.ContactInputModel{
                        BusinessPhone: sdk.String("sed"),
                        BusinessPhoneExt: sdk.String("amet"),
                        ConferenceInfo: sdk.String("rerum"),
                        HomePhone: sdk.String("in"),
                        MobilePhone: sdk.String("nostrum"),
                        PreferredPhoneType: sdk.String("temporibus"),
                        SkypeUsername: sdk.String("ratione"),
                    },
                    CustomFields: &shared.CustomFieldInputModel{
                        Field1: sdk.String("dolor"),
                        Field10: sdk.String("nisi"),
                        Field2: sdk.String("dignissimos"),
                        Field3: sdk.String("reiciendis"),
                        Field4: sdk.String("itaque"),
                        Field5: sdk.String("vitae"),
                        Field6: sdk.String("est"),
                        Field7: sdk.String("accusantium"),
                        Field8: sdk.String("quod"),
                        Field9: sdk.String("minus"),
                    },
                    Description: sdk.String("quos"),
                    Email: sdk.String("Will_Kuhic@hotmail.com"),
                    GroupID: sdk.String("aperiam"),
                    LocationID: sdk.String("similique"),
                    Name: sdk.String("Ramona Jakubowski"),
                    Options: &shared.ResourceOptionsInputModel{
                        BioLink: sdk.String("alias"),
                        BookingNotification: sdk.Int(771931),
                        CalendarAvailability: sdk.Int(196700),
                        DisplayColor: sdk.String("commodi"),
                        EffectiveDate: types.MustTimeFromString("2022-04-16T19:53:20.939Z"),
                        Gender: sdk.String("female"),
                        GoogleCalendarID: sdk.String("quisquam"),
                        Hourly: sdk.Float64(1237.95),
                        IgnoreBusinessHours: sdk.Bool(false),
                        NotificationType: sdk.Int(317260),
                        OutlookCalendarID: sdk.String("nulla"),
                        SortKey: sdk.Int(979271),
                    },
                    RecurringAvailability: sdk.Bool(false),
                    ServiceIds: []string{
                        "mollitia",
                        "impedit",
                        "accusamus",
                    },
                    TimezoneID: sdk.String("et"),
                },
            },
        },
        GoogleAuthReturnURL: sdk.String("quas"),
        OutlookAuthReturnURL: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModels != nil {
        // handle response
    }
}
```

## PostSetupV1ResourcesIDAllocations

<p>Use this endpoint to <b>Create</b> a resource allocation for a resource. A valid <b>resource id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Resource allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. They can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M </b>for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>
<p>
  <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PostSetupV1ResourcesIDAllocations(ctx, operations.PostSetupV1ResourcesIDAllocationsRequest{
        ResourceAllocationInputModel: &shared.ResourceAllocationInputModel{
            EndDate: types.MustDateFromString("2022-10-05"),
            EndTime: sdk.Int(770544),
            Reason: sdk.String("tempora"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("eveniet"),
                Interval: sdk.Int(920548),
                MonthDay: sdk.Int(150349),
                MonthType: sdk.String("impedit"),
                Weekdays: sdk.String("quas"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2021-09-18"),
            StartTime: sdk.Int(753087),
        },
        ID: "e611feeb-1c7c-4bdb-aeec-74378ba25317",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ResourcesIDBlock

<p>Use this endpoint to <b>Create</b> a Resource Block. A valid <b>resource id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Resource blocks can be set to specific time ranges or for the whole day. Use the <b>AllDay</b> setting to create an all-day block. <b>AllDay</b> will automatically set startTime to 0 and endTime to 2400.</p>
<p>Resource blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
<p>
  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”. </p>
<p>
  <b>Repeats will end on the date specified by the end date.</b>
</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PostSetupV1ResourcesIDBlock(ctx, operations.PostSetupV1ResourcesIDBlockRequest{
        ResourceBlockInputModel: &shared.ResourceBlockInputModel{
            AllDay: sdk.Bool(false),
            EndDate: types.MustDateFromString("2022-09-14"),
            EndTime: sdk.Int(487799),
            Reason: sdk.String("nulla"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("impedit"),
                Interval: sdk.Int(586277),
                MonthDay: sdk.Int(72422),
                MonthType: sdk.String("exercitationem"),
                Weekdays: sdk.String("laborum"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-07-22"),
            StartTime: sdk.Int(804879),
        },
        ID: "af5dd672-3dc0-4f5a-a2f3-a6b700878756",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ResourcesIDServices

<p>Use this endpoint to explicitly <b>Link Services</b> to a Resource. A valid <b>resource id</b> is required.</p>
<p>
  <b>Note:</b> By default, the services array is empty which signifies that all services are provided by the resource. Linking services here will add to the linked service(s) array available to this resource. This will limit the services available to the resource.</p>
<p>You cannot post services that already exist in the array, you can only add new ones. Use the <i>PUT ​/setup​/v1​/resources​/{id}​/services</i> endpoint to update the entire list.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PostSetupV1ResourcesIDServices(ctx, operations.PostSetupV1ResourcesIDServicesRequest{
        RequestBody: []string{
            "quaerat",
        },
        ID: "3f5a6c98-b555-4540-80d4-0bcacc6cbd6b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ResourcesIDUploadimage

<p>Use this endpoint to <b>Upload</b> a resource image to the resource. A valid <b>resource id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PostSetupV1ResourcesIDUploadimage(ctx, operations.PostSetupV1ResourcesIDUploadimageRequest{
        ResourceImageInputModel: &shared.ResourceImageInputModel{
            ImageFileData: sdk.String("enim"),
            ImageFileName: sdk.String("maiores"),
        },
        ID: "3ec90930-4f92-46ba-9255-3819b474b0ed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesAllocationsID

<p>Use this endpoint to <b>Update</b> a resource allocation. A valid <b>resourceAllocation id</b> is required. Refer to the <i>POST /setup/v1/resources/{id}/allocations</i> endpoint for details.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesAllocationsID(ctx, operations.PutSetupV1ResourcesAllocationsIDRequest{
        ResourceAllocationUpdateModel: &shared.ResourceAllocationUpdateModel{
            EndDate: types.MustDateFromString("2022-12-21"),
            EndTime: sdk.Int(919171),
            Reason: sdk.String("corporis"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("ea"),
                Interval: sdk.Int(179906),
                MonthDay: sdk.Int(305267),
                MonthType: sdk.String("blanditiis"),
                Weekdays: sdk.String("hic"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2020-01-12"),
            StartTime: sdk.Int(420985),
        },
        ID: "39a910ab-dcab-4626-b669-6e1ec00221b3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesBlockID

<p>Use this endpoint to <b>Update</b> a Resource Block. A valid <b>resourceBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/resources​/{id}​/block</i> endpoint for fieldnames and details.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesBlockID(ctx, operations.PutSetupV1ResourcesBlockIDRequest{
        ResourceBlockUpdateModel: &shared.ResourceBlockUpdateModel{
            AllDay: sdk.Bool(false),
            EndDate: types.MustDateFromString("2022-08-27"),
            EndTime: sdk.Int(847018),
            Reason: sdk.String("praesentium"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("unde"),
                Interval: sdk.Int(629461),
                MonthDay: sdk.Int(753261),
                MonthType: sdk.String("tempore"),
                Weekdays: sdk.String("amet"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2020-09-30"),
            StartTime: sdk.Int(989089),
        },
        ID: "da8d0c54-9ef0-4300-8978-a61fa1cf2068",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesBulk

<p>Use this endpoint to <b>Bulk Update</b> resources. Valid <b>resource id's</b> are required. The list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesBulk(ctx, operations.PutSetupV1ResourcesBulkRequest{
        ResourcesUpdateModel: &shared.ResourcesUpdateModel{
            Resources: []shared.ResourceBulkUpdateModel{
                shared.ResourceBulkUpdateModel{
                    Address: &shared.AddressUpdateModel{
                        AddressLine1: sdk.String("tenetur"),
                        AddressLine2: sdk.String("voluptate"),
                        City: sdk.String("Pollyland"),
                        Country: sdk.String("Vanuatu"),
                        PostalCode: sdk.String("74088-6042"),
                        State: sdk.String("maiores"),
                    },
                    Availability: &shared.AvailabilityInputModel{
                        Fri: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(153097),
                            StartTime: sdk.Int(657141),
                        },
                        Mon: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(197519),
                            StartTime: sdk.Int(757471),
                        },
                        Sat: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(528315),
                            StartTime: sdk.Int(21668),
                        },
                        Sun: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(671690),
                            StartTime: sdk.Int(609172),
                        },
                        Thu: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(470321),
                            StartTime: sdk.Int(945190),
                        },
                        Tue: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(959696),
                            StartTime: sdk.Int(242013),
                        },
                        Wed: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(240292),
                            StartTime: sdk.Int(250298),
                        },
                    },
                    Contact: &shared.ContactUpdateModel{
                        BusinessPhone: sdk.String("optio"),
                        BusinessPhoneExt: sdk.String("illum"),
                        ConferenceInfo: sdk.String("at"),
                        HomePhone: sdk.String("tenetur"),
                        MobilePhone: sdk.String("molestias"),
                        PreferredPhoneType: sdk.String("ipsam"),
                        SkypeUsername: sdk.String("esse"),
                    },
                    CustomFields: &shared.CustomFieldUpdateModel{
                        Field1: sdk.String("laborum"),
                        Field10: sdk.String("perspiciatis"),
                        Field2: sdk.String("voluptates"),
                        Field3: sdk.String("eum"),
                        Field4: sdk.String("quasi"),
                        Field5: sdk.String("quas"),
                        Field6: sdk.String("odio"),
                        Field7: sdk.String("commodi"),
                        Field8: sdk.String("porro"),
                        Field9: sdk.String("aliquid"),
                    },
                    Description: sdk.String("mollitia"),
                    Email: sdk.String("Brandon.Bosco61@hotmail.com"),
                    GroupID: sdk.String("illum"),
                    ID: sdk.String("fc94d6fe-cd79-4939-8066-a6d2d0003553"),
                    Name: sdk.String("Billie Schmitt"),
                    Options: &shared.ResourceOptionsUpdateModel{
                        BioLink: sdk.String("doloremque"),
                        BookingNotification: sdk.Int(516833),
                        CalendarAvailability: sdk.Int(435266),
                        DisplayColor: sdk.String("maiores"),
                        EffectiveDate: types.MustTimeFromString("2022-09-17T20:05:38.425Z"),
                        Gender: sdk.String("female"),
                        GoogleCalendarID: sdk.String("necessitatibus"),
                        Hourly: sdk.Float64(6119.7),
                        IgnoreBusinessHours: sdk.Bool(false),
                        NotificationType: sdk.Int(116463),
                        OutlookCalendarID: sdk.String("ipsam"),
                        SortKey: sdk.Int(163181),
                    },
                    RecurringAvailability: sdk.Bool(false),
                    ServiceIds: []string{
                        "quidem",
                        "non",
                        "beatae",
                        "sunt",
                    },
                    TimezoneID: sdk.String("molestias"),
                },
                shared.ResourceBulkUpdateModel{
                    Address: &shared.AddressUpdateModel{
                        AddressLine1: sdk.String("beatae"),
                        AddressLine2: sdk.String("autem"),
                        City: sdk.String("Monserratestad"),
                        Country: sdk.String("Tonga"),
                        PostalCode: sdk.String("75870"),
                        State: sdk.String("non"),
                    },
                    Availability: &shared.AvailabilityInputModel{
                        Fri: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(310195),
                            StartTime: sdk.Int(10164),
                        },
                        Mon: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(515433),
                            StartTime: sdk.Int(831067),
                        },
                        Sat: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(415953),
                            StartTime: sdk.Int(843679),
                        },
                        Sun: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(231255),
                            StartTime: sdk.Int(377680),
                        },
                        Thu: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(307874),
                            StartTime: sdk.Int(938244),
                        },
                        Tue: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(945431),
                            StartTime: sdk.Int(826797),
                        },
                        Wed: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(294181),
                            StartTime: sdk.Int(317374),
                        },
                    },
                    Contact: &shared.ContactUpdateModel{
                        BusinessPhone: sdk.String("ullam"),
                        BusinessPhoneExt: sdk.String("perspiciatis"),
                        ConferenceInfo: sdk.String("alias"),
                        HomePhone: sdk.String("ex"),
                        MobilePhone: sdk.String("quibusdam"),
                        PreferredPhoneType: sdk.String("dicta"),
                        SkypeUsername: sdk.String("quia"),
                    },
                    CustomFields: &shared.CustomFieldUpdateModel{
                        Field1: sdk.String("commodi"),
                        Field10: sdk.String("neque"),
                        Field2: sdk.String("quibusdam"),
                        Field3: sdk.String("numquam"),
                        Field4: sdk.String("rem"),
                        Field5: sdk.String("officiis"),
                        Field6: sdk.String("omnis"),
                        Field7: sdk.String("neque"),
                        Field8: sdk.String("corporis"),
                        Field9: sdk.String("quod"),
                    },
                    Description: sdk.String("dolores"),
                    Email: sdk.String("Kevon.Walter@hotmail.com"),
                    GroupID: sdk.String("sapiente"),
                    ID: sdk.String("30be3e43-202d-4721-a576-506641870d9d"),
                    Name: sdk.String("Stephanie Wolf"),
                    Options: &shared.ResourceOptionsUpdateModel{
                        BioLink: sdk.String("repellendus"),
                        BookingNotification: sdk.Int(7919),
                        CalendarAvailability: sdk.Int(237972),
                        DisplayColor: sdk.String("doloremque"),
                        EffectiveDate: types.MustTimeFromString("2022-03-11T15:27:50.555Z"),
                        Gender: sdk.String("male"),
                        GoogleCalendarID: sdk.String("cumque"),
                        Hourly: sdk.Float64(8061.24),
                        IgnoreBusinessHours: sdk.Bool(false),
                        NotificationType: sdk.Int(92264),
                        OutlookCalendarID: sdk.String("beatae"),
                        SortKey: sdk.Int(662068),
                    },
                    RecurringAvailability: sdk.Bool(false),
                    ServiceIds: []string{
                        "quos",
                    },
                    TimezoneID: sdk.String("ratione"),
                },
                shared.ResourceBulkUpdateModel{
                    Address: &shared.AddressUpdateModel{
                        AddressLine1: sdk.String("iure"),
                        AddressLine2: sdk.String("tempora"),
                        City: sdk.String("New Alexanebury"),
                        Country: sdk.String("Luxembourg"),
                        PostalCode: sdk.String("53016-3384"),
                        State: sdk.String("sapiente"),
                    },
                    Availability: &shared.AvailabilityInputModel{
                        Fri: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(459086),
                            StartTime: sdk.Int(207512),
                        },
                        Mon: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(697591),
                            StartTime: sdk.Int(788469),
                        },
                        Sat: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(506245),
                            StartTime: sdk.Int(273349),
                        },
                        Sun: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(370052),
                            StartTime: sdk.Int(887132),
                        },
                        Thu: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(196497),
                            StartTime: sdk.Int(165545),
                        },
                        Tue: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(29881),
                            StartTime: sdk.Int(665960),
                        },
                        Wed: &shared.WeekDayInputModel{
                            EndTime: sdk.Int(226181),
                            StartTime: sdk.Int(84211),
                        },
                    },
                    Contact: &shared.ContactUpdateModel{
                        BusinessPhone: sdk.String("error"),
                        BusinessPhoneExt: sdk.String("voluptatibus"),
                        ConferenceInfo: sdk.String("numquam"),
                        HomePhone: sdk.String("rerum"),
                        MobilePhone: sdk.String("dolorum"),
                        PreferredPhoneType: sdk.String("quibusdam"),
                        SkypeUsername: sdk.String("earum"),
                    },
                    CustomFields: &shared.CustomFieldUpdateModel{
                        Field1: sdk.String("excepturi"),
                        Field10: sdk.String("numquam"),
                        Field2: sdk.String("molestiae"),
                        Field3: sdk.String("impedit"),
                        Field4: sdk.String("error"),
                        Field5: sdk.String("animi"),
                        Field6: sdk.String("voluptatum"),
                        Field7: sdk.String("aliquid"),
                        Field8: sdk.String("nihil"),
                        Field9: sdk.String("facilis"),
                    },
                    Description: sdk.String("optio"),
                    Email: sdk.String("Chasity40@gmail.com"),
                    GroupID: sdk.String("eum"),
                    ID: sdk.String("65816ddc-a8ef-451f-8b4c-593ec12cdaad"),
                    Name: sdk.String("Meghan Schroeder"),
                    Options: &shared.ResourceOptionsUpdateModel{
                        BioLink: sdk.String("delectus"),
                        BookingNotification: sdk.Int(904983),
                        CalendarAvailability: sdk.Int(813975),
                        DisplayColor: sdk.String("nobis"),
                        EffectiveDate: types.MustTimeFromString("2021-04-26T13:44:30.471Z"),
                        Gender: sdk.String("female"),
                        GoogleCalendarID: sdk.String("temporibus"),
                        Hourly: sdk.Float64(9475.15),
                        IgnoreBusinessHours: sdk.Bool(false),
                        NotificationType: sdk.Int(278050),
                        OutlookCalendarID: sdk.String("numquam"),
                        SortKey: sdk.Int(546950),
                    },
                    RecurringAvailability: sdk.Bool(false),
                    ServiceIds: []string{
                        "dolore",
                        "esse",
                        "reiciendis",
                    },
                    TimezoneID: sdk.String("iste"),
                },
            },
        },
        GoogleAuthReturnURL: sdk.String("amet"),
        OutlookAuthReturnURL: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModels != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesID

<p>Use this endpoint to <b>Update</b> a resource. A valid <b>resource id</b> is required.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesID(ctx, operations.PutSetupV1ResourcesIDRequest{
        ResourceUpdateModel: &shared.ResourceUpdateModel{
            Address: &shared.AddressUpdateModel{
                AddressLine1: sdk.String("aut"),
                AddressLine2: sdk.String("impedit"),
                City: sdk.String("New Jo"),
                Country: sdk.String("Mauritania"),
                PostalCode: sdk.String("55286"),
                State: sdk.String("facilis"),
            },
            Availability: &shared.AvailabilityInputModel{
                Fri: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(983060),
                    StartTime: sdk.Int(622968),
                },
                Mon: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(926119),
                    StartTime: sdk.Int(955962),
                },
                Sat: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(234964),
                    StartTime: sdk.Int(958280),
                },
                Sun: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(977641),
                    StartTime: sdk.Int(824267),
                },
                Thu: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(830149),
                    StartTime: sdk.Int(607742),
                },
                Tue: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(966652),
                    StartTime: sdk.Int(487765),
                },
                Wed: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(974703),
                    StartTime: sdk.Int(13316),
                },
            },
            Contact: &shared.ContactUpdateModel{
                BusinessPhone: sdk.String("quam"),
                BusinessPhoneExt: sdk.String("omnis"),
                ConferenceInfo: sdk.String("similique"),
                HomePhone: sdk.String("asperiores"),
                MobilePhone: sdk.String("modi"),
                PreferredPhoneType: sdk.String("facere"),
                SkypeUsername: sdk.String("neque"),
            },
            CustomFields: &shared.CustomFieldUpdateModel{
                Field1: sdk.String("quis"),
                Field10: sdk.String("in"),
                Field2: sdk.String("sed"),
                Field3: sdk.String("non"),
                Field4: sdk.String("porro"),
                Field5: sdk.String("fugiat"),
                Field6: sdk.String("soluta"),
                Field7: sdk.String("ipsa"),
                Field8: sdk.String("reiciendis"),
                Field9: sdk.String("labore"),
            },
            Description: sdk.String("vero"),
            Email: sdk.String("Kayleigh50@gmail.com"),
            GroupID: sdk.String("iusto"),
            LocationID: sdk.String("fugiat"),
            Name: sdk.String("Vera Langworth"),
            Options: &shared.ResourceOptionsUpdateModel{
                BioLink: sdk.String("accusamus"),
                BookingNotification: sdk.Int(861823),
                CalendarAvailability: sdk.Int(921127),
                DisplayColor: sdk.String("quibusdam"),
                EffectiveDate: types.MustTimeFromString("2022-05-15T17:03:01.012Z"),
                Gender: sdk.String("male"),
                GoogleCalendarID: sdk.String("unde"),
                Hourly: sdk.Float64(614.98),
                IgnoreBusinessHours: sdk.Bool(false),
                NotificationType: sdk.Int(430181),
                OutlookCalendarID: sdk.String("nostrum"),
                SortKey: sdk.Int(909093),
            },
            RecurringAvailability: sdk.Bool(false),
            ServiceIds: []string{
                "ratione",
                "blanditiis",
            },
            TimezoneID: sdk.String("quidem"),
        },
        GoogleAuthReturnURL: sdk.String("illum"),
        ID: "fc2032b6-c879-4923-b7e1-3584f7ae12c6",
        OutlookAuthReturnURL: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesIDAvailability

<p>Use this endpoint to <b>Update</b> resource weekly availability. A valid <b>resource id</b> is required. The availability day entries are created when a resource object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the resource. Resources can be set to any world timezone. </p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesIDAvailability(ctx, operations.PutSetupV1ResourcesIDAvailabilityRequest{
        AvailabilityInputModel: &shared.AvailabilityInputModel{
            Fri: &shared.WeekDayInputModel{
                EndTime: sdk.Int(615597),
                StartTime: sdk.Int(112014),
            },
            Mon: &shared.WeekDayInputModel{
                EndTime: sdk.Int(946558),
                StartTime: sdk.Int(515153),
            },
            Sat: &shared.WeekDayInputModel{
                EndTime: sdk.Int(133148),
                StartTime: sdk.Int(755240),
            },
            Sun: &shared.WeekDayInputModel{
                EndTime: sdk.Int(917877),
                StartTime: sdk.Int(117142),
            },
            Thu: &shared.WeekDayInputModel{
                EndTime: sdk.Int(81053),
                StartTime: sdk.Int(356256),
            },
            Tue: &shared.WeekDayInputModel{
                EndTime: sdk.Int(480741),
                StartTime: sdk.Int(82396),
            },
            Wed: &shared.WeekDayInputModel{
                EndTime: sdk.Int(454590),
                StartTime: sdk.Int(151497),
            },
        },
        ID: "305377dc-fa89-4df9-b5e3-56686092e9c3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceAvailabilityViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesIDReassignAppointmentsResourceID

<p>Use this endpoint to <b>Reassign</b> appointments from one resource to another. If the startDate is not supplied, the default is today's date + 1 day; If the endDate is not supplied, all future appointments from the start date will be reassigned. If the calendar id is not supplied the default is the primary calendar of the location.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesIDReassignAppointmentsResourceID(ctx, operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest{
        CalendarID: sdk.String("repellendus"),
        EndDate: types.MustTimeFromString("2020-08-16T15:28:22.285Z"),
        ID: "5f111dea-1026-4d54-9a4d-190feb21780b",
        ResourceID: "placeat",
        StartDate: types.MustTimeFromString("2020-09-25T02:22:59.870Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentViewModels != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesIDRecover

<p>Use this endpoint to <b>Recover</b> a deleted resource. A valid <b>resource id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesIDRecover(ctx, operations.PutSetupV1ResourcesIDRecoverRequest{
        GoogleAuthReturnURL: sdk.String("sit"),
        ID: "dbbddb48-4708-4fb4-a391-e6bc158c4c4e",
        OutlookAuthReturnURL: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ResourcesIDServices

<p>Use this endpoint to <b>Update</b> the linked services of a Resource. A valid <b>resource id</b> is required.</p>
<p>Updating services with this endpoint will update the linked services available to the resource. Only those services will be available to the resource.</p>
<p>
  <b>Note:</b> This is a destructive process, any existing linked services will be removed and replaced with the list of services supplied here. Provide the resources complete list of services when using this endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Resources.PutSetupV1ResourcesIDServices(ctx, operations.PutSetupV1ResourcesIDServicesRequest{
        RequestBody: []string{
            "enim",
            "cupiditate",
        },
        ID: "9ea34226-0e9b-4200-8e78-a1bd8fb7a0a1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceViewModel != nil {
        // handle response
    }
}
```
