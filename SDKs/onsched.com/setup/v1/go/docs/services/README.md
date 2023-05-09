# Services

### Available Operations

* [DeleteSetupV1ServicesAllocationsID](#deletesetupv1servicesallocationsid) - Delete Allocation
* [DeleteSetupV1ServicesBlockID](#deletesetupv1servicesblockid) - Delete Block
* [DeleteSetupV1ServicesCalendarID](#deletesetupv1servicescalendarid) - Delete Service Links
* [DeleteSetupV1ServicesID](#deletesetupv1servicesid) - Delete Service
* [DeleteSetupV1ServicesIDDeleteimage](#deletesetupv1servicesiddeleteimage) - Delete Service Image
* [GetSetupV1Services](#getsetupv1services) - List Services
* [GetSetupV1ServicesAllocationsID](#getsetupv1servicesallocationsid) - Get Allocation
* [GetSetupV1ServicesBlocksID](#getsetupv1servicesblocksid) - Get Block
* [GetSetupV1ServicesID](#getsetupv1servicesid) - Get Service
* [GetSetupV1ServicesIDAllocations](#getsetupv1servicesidallocations) - List Service Allocations
* [GetSetupV1ServicesIDAvailability](#getsetupv1servicesidavailability) - Get Weekly Availability
* [GetSetupV1ServicesIDBlocks](#getsetupv1servicesidblocks) - List Service Blocks
* [GetSetupV1ServicesIDCalendar](#getsetupv1servicesidcalendar) - Get Linked Calendar
* [GetSetupV1ServicesIDResources](#getsetupv1servicesidresources) - List Resources for Service
* [PostSetupV1Services](#postsetupv1services) - Create Service
* [PostSetupV1ServicesCalendar](#postsetupv1servicescalendar) - Link Service to Calendar
* [PostSetupV1ServicesIDAllocations](#postsetupv1servicesidallocations) - Create Allocation
* [PostSetupV1ServicesIDAllocationsBulk](#postsetupv1servicesidallocationsbulk) - Create Allocations Bulk
* [PostSetupV1ServicesIDBlock](#postsetupv1servicesidblock) - Create Block
* [PostSetupV1ServicesIDUploadimage](#postsetupv1servicesiduploadimage) - Upload Service Image
* [PutSetupV1ServicesAllocationsID](#putsetupv1servicesallocationsid) - Update Allocation
* [PutSetupV1ServicesBlockID](#putsetupv1servicesblockid) - Update Block
* [PutSetupV1ServicesID](#putsetupv1servicesid) - Update Service
* [PutSetupV1ServicesIDAvailability](#putsetupv1servicesidavailability) - Update Weekly Availability
* [PutSetupV1ServicesIDRecover](#putsetupv1servicesidrecover) - Recover Service

## DeleteSetupV1ServicesAllocationsID

<p>Use this endpoint to permanently <b>Delete</b> a service allocation. A valid <b>serviceAllocation id</b> is required.</p>

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
    res, err := s.Services.DeleteSetupV1ServicesAllocationsID(ctx, operations.DeleteSetupV1ServicesAllocationsIDRequest{
        ID: "b2912203-0d83-4f5a-ab77-99d22e8c1f84",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ServicesBlockID

<p>Use this endpoint to permanently <b>Delete</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

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
    res, err := s.Services.DeleteSetupV1ServicesBlockID(ctx, operations.DeleteSetupV1ServicesBlockIDRequest{
        ID: "93825fdc-42c8-476c-ac2d-fb4cfc1c7623",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ServicesCalendarID

<p>Use this endpoint to <b>Delete</b> service links from the calendar specified. A valid <b>calendar id</b> is required.</p>

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
    res, err := s.Services.DeleteSetupV1ServicesCalendarID(ctx, operations.DeleteSetupV1ServicesCalendarIDRequest{
        ID: "0f841fb1-bd23-4fdb-94db-6be5a685998e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceCalendarViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ServicesID

<p>Use this endpoint to <b>Delete</b> a service object. A valid <b>service id</b> is required. The service is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/services​/{id}​/recover</i> endpoint.</p>

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
    res, err := s.Services.DeleteSetupV1ServicesID(ctx, operations.DeleteSetupV1ServicesIDRequest{
        ID: "22ae20da-16fc-42b2-b1a2-89c57e854e90",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1ServicesIDDeleteimage

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded service image. A valid <b>service id</b> is required.</p>

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
    res, err := s.Services.DeleteSetupV1ServicesIDDeleteimage(ctx, operations.DeleteSetupV1ServicesIDDeleteimageRequest{
        ID: "439d2224-6569-4462-8070-84f7ab37cef0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1Services

<p>Use this endpoint to return a <b>List of Service</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
    res, err := s.Services.GetSetupV1Services(ctx, operations.GetSetupV1ServicesRequest{
        Deleted: sdk.Bool(false),
        Limit: sdk.Int(150715),
        LocationID: sdk.String("eos"),
        Offset: sdk.Int(162251),
        ServiceGroupID: sdk.Int(338514),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesAllocationsID

<p>Use this endpoint to <b>Get a Service Allocation</b>. A valid <b>serviceAllocation id</b> is required.</p>

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
    res, err := s.Services.GetSetupV1ServicesAllocationsID(ctx, operations.GetSetupV1ServicesAllocationsIDRequest{
        ID: "194db554-10ad-4c66-9af9-0a26c7cdc981",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesBlocksID

<p>Use this endpoint to <b>Get a Service Block</b>. A valid <b>serviceBlock id</b> is required.</p>

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
    res, err := s.Services.GetSetupV1ServicesBlocksID(ctx, operations.GetSetupV1ServicesBlocksIDRequest{
        ID: "f068981d-6bb3-43cf-aa34-8c31bf407ee4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesID

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /setup/v1/services</i> endpoint.</p>

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
    res, err := s.Services.GetSetupV1ServicesID(ctx, operations.GetSetupV1ServicesIDRequest{
        ID: 987362,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesIDAllocations

<p>Use this endpoint to return a <b>List of Service Allocations</b> for a specified service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b> where the events are offered on specific dates and times. Retrieve all allocations for a location by passing in 0 as the service id.</p>
<p>The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
    res, err := s.Services.GetSetupV1ServicesIDAllocations(ctx, operations.GetSetupV1ServicesIDAllocationsRequest{
        EndDate: types.MustTimeFromString("2020-02-17T02:25:23.787Z"),
        ID: "0c42b78f-1562-4639-8a0d-c766324ccb06",
        Limit: sdk.Int(771321),
        LocationID: sdk.String("totam"),
        Offset: sdk.Int(762297),
        ResourceID: sdk.String("est"),
        StartDate: types.MustTimeFromString("2022-11-01T20:18:10.242Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesIDAvailability

<p>Use this endpoint to return the <b>Weekly Service Availability</b> for an appointment service. A valid <b>service id</b> is required. Weekly availability is returned for services where the Type = 1. For event type services, where service Type = 2, refer to the <i>GET ​/setup​/v1​/services​/{id}​/allocations</i> endpoint.</p>

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
    res, err := s.Services.GetSetupV1ServicesIDAvailability(ctx, operations.GetSetupV1ServicesIDAvailabilityRequest{
        ID: "d0252927-0b8d-4572-add8-95b8bcf24db9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAvailabilityViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesIDBlocks

<p>Use this endpoint to return a list of <b>Service Blocks</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
    res, err := s.Services.GetSetupV1ServicesIDBlocks(ctx, operations.GetSetupV1ServicesIDBlocksRequest{
        EndDate: types.MustTimeFromString("2022-05-21T07:56:25.662Z"),
        ID: "693352f7-4533-4994-978d-e3b6e9389f5a",
        Limit: sdk.Int(743705),
        Offset: sdk.Int(739946),
        StartDate: types.MustTimeFromString("2022-01-13T01:27:57.075Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceBlockListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesIDCalendar

<p>Use this endpoint to <b>Get the Linked Calendar</b> for the service requested. A valid <b>service id</b> is required. A service can only be linked to one calendar in a location.</p>

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
    res, err := s.Services.GetSetupV1ServicesIDCalendar(ctx, operations.GetSetupV1ServicesIDCalendarRequest{
        ID: "662550a2-8382-4ac4-83af-d2315bba6501",
        LocationID: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceCalendarViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1ServicesIDResources

<p>Use this endpoint to return a list of <b>Resources</b> that provide the requested service. A valid <b>service id</b> is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
    res, err := s.Services.GetSetupV1ServicesIDResources(ctx, operations.GetSetupV1ServicesIDResourcesRequest{
        GoogleAuthReturnURL: sdk.String("incidunt"),
        ID: "e06f5bf6-ae59-41bc-8bde-f3612b63c205",
        Limit: sdk.Int(954595),
        Offset: sdk.Int(816825),
        OutlookAuthReturnURL: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceListViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Services

<p>Use this endpoint to <b>Create</b> a new service. If not specified, the business location defaults to the primary business location. Note: Posting a service to the Primary Business Location will scope as company scoped and make the service available to all locations. If you want a service to only be available from a specific location, include the business location id.</p>
<p>Required fields: <b>Name</b> and <b>Duration</b></p>
<p>The service <b>Type</b> is either, <b>1 = Appointment</b> or <b>2 = Event</b>. Default is 1 if not specified.</p>
<p>For type = 1, Appointments - Create an availability entry for each weekday to provide the service for. <b>All days of the week must be provided when adding service availability.</b> Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. Start and End Times are entered in military format. e.g., 800 is 8:00am, 2230 is 10:30pm. If not provided, it defaults to the primary location business hours.</p>
<p>We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. If you require times in between specified hours to be unavailable, use the service block endpoint at: <i>POST ​/setup​/v1​/services​/{id}​/block</i>.</p>
<p>For type = 2, Events - Create service allocations for their availability. Refer to the: <i>POST /setup​/v1​/services​/{id}​/allocations</i> to set up service allocations for the event.</p>
<p>Options are available for customer selected durations, for details: <a href="https://docs.onsched.com/docs/services-overview#variable-duration">Variable Duration Overview</a></p>
<p>Additional parameters include but are not limited to bookingLimit, maxCapacity and maxGroupSize. For details: <a href="https://docs.onsched.com/docs/service-max-capacity">Service Limits Overview</a></p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Services.PostSetupV1Services(ctx, shared.ServiceInputModel{
        Availability: &shared.AvailabilityInputModel{
            Fri: &shared.WeekDayInputModel{
                EndTime: sdk.Int(539537),
                StartTime: sdk.Int(310648),
            },
            Mon: &shared.WeekDayInputModel{
                EndTime: sdk.Int(45850),
                StartTime: sdk.Int(489821),
            },
            Sat: &shared.WeekDayInputModel{
                EndTime: sdk.Int(463895),
                StartTime: sdk.Int(264073),
            },
            Sun: &shared.WeekDayInputModel{
                EndTime: sdk.Int(683980),
                StartTime: sdk.Int(435931),
            },
            Thu: &shared.WeekDayInputModel{
                EndTime: sdk.Int(538368),
                StartTime: sdk.Int(638219),
            },
            Tue: &shared.WeekDayInputModel{
                EndTime: sdk.Int(572450),
                StartTime: sdk.Int(674077),
            },
            Wed: &shared.WeekDayInputModel{
                EndTime: sdk.Int(224777),
                StartTime: sdk.Int(322773),
            },
        },
        BookingInterval: sdk.Int(847740),
        BookingLimit: sdk.Int(22966),
        CustomFields: &shared.CustomFieldInputModel{
            Field1: sdk.String("molestias"),
            Field10: sdk.String("voluptas"),
            Field2: sdk.String("expedita"),
            Field3: sdk.String("voluptas"),
            Field4: sdk.String("maiores"),
            Field5: sdk.String("ea"),
            Field6: sdk.String("vel"),
            Field7: sdk.String("delectus"),
            Field8: sdk.String("accusamus"),
            Field9: sdk.String("reiciendis"),
        },
        Description: sdk.String("consequatur"),
        Duration: sdk.Int(148714),
        Fees: &shared.ServiceFeesInputModel{
            CancellationFeeAmount: sdk.Float64(334.07),
            CancellationFeeTaxable: sdk.Bool(false),
            FeeAmount: sdk.Float64(9134.33),
            FeeTaxable: sdk.Bool(false),
            NonRefundable: sdk.Bool(false),
        },
        LocationID: sdk.String("provident"),
        MaxCapacity: sdk.Int(978460),
        MaxGroupSize: sdk.Int(311449),
        MediaPageURL: sdk.String("numquam"),
        Name: sdk.String("Celia Gottlieb"),
        Options: &shared.ServiceOptionsInputModel{
            ConsumerPadding: sdk.Bool(false),
            DefaultService: sdk.Bool(false),
            DurationInterval: sdk.Int(471966),
            DurationMax: sdk.Int(728948),
            DurationMin: sdk.Int(607205),
            DurationSelect: sdk.Bool(false),
            Padding: sdk.Int(569196),
        },
        Public: sdk.Bool(false),
        ServiceGroupID: sdk.String("eos"),
        Settings: &shared.ServiceSettingsInputModel{
            BookAheadUnit: sdk.Int(789036),
            BookAheadValue: sdk.Int(547184),
            BookInAdvance: sdk.Int(830197),
        },
        Type: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ServicesCalendar

<p>Use this endpoint to <b>Link a Service</b> to a calendar. </p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Services.PostSetupV1ServicesCalendar(ctx, shared.ServiceCalendarInputModel{
        CalendarID: sdk.String("quibusdam"),
        LocationID: sdk.String("est"),
        ServiceID: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceCalendarViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ServicesIDAllocations

<p>Use this endpoint to <b>Create</b> a service allocation for a service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b>. Service allocations allow you to specify the time(s) a service is available as opposed to using weekly availability which represents a weekly schedule, ie: Mon-Fri 9am-5pm.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Service allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. Service allocations can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
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
    res, err := s.Services.PostSetupV1ServicesIDAllocations(ctx, operations.PostSetupV1ServicesIDAllocationsRequest{
        ServiceAllocationInputModel: &shared.ServiceAllocationInputModel{
            BookingLimit: sdk.Int(630747),
            EndDate: types.MustDateFromString("2022-11-18"),
            EndTime: sdk.Int(926266),
            LocationID: sdk.String("sapiente"),
            Reason: sdk.String("id"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("odit"),
                Interval: sdk.Int(80467),
                MonthDay: sdk.Int(612238),
                MonthType: sdk.String("atque"),
                Weekdays: sdk.String("explicabo"),
            },
            Repeats: sdk.Bool(false),
            ResourceID: sdk.String("ullam"),
            StartDate: types.MustDateFromString("2021-01-10"),
            StartTime: sdk.Int(867434),
        },
        ID: "0a9eba47-f7d3-4ef0-8964-0d6a1831c87a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ServicesIDAllocationsBulk

<p>Use this endpoint to <b>Create</b> bulk service allocations. A valid <b>service id</b> is required. Use this endpoint only if you need to POST multiple service allocations in one transaction. For details refer to: <a href="POST ​/setup​/v1​/services​/{id}​/allocations">Post Service Allocation</a></p>

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
    res, err := s.Services.PostSetupV1ServicesIDAllocationsBulk(ctx, operations.PostSetupV1ServicesIDAllocationsBulkRequest{
        ServiceAllocationsInputModel: &shared.ServiceAllocationsInputModel{
            ServiceAllocations: []shared.ServiceAllocationInputModel{
                shared.ServiceAllocationInputModel{
                    BookingLimit: sdk.Int(955913),
                    EndDate: types.MustDateFromString("2022-06-01"),
                    EndTime: sdk.Int(383196),
                    LocationID: sdk.String("reiciendis"),
                    Reason: sdk.String("repellendus"),
                    Repeat: &shared.RepeatInputModel{
                        Frequency: sdk.String("delectus"),
                        Interval: sdk.Int(67631),
                        MonthDay: sdk.Int(650200),
                        MonthType: sdk.String("possimus"),
                        Weekdays: sdk.String("praesentium"),
                    },
                    Repeats: sdk.Bool(false),
                    ResourceID: sdk.String("neque"),
                    StartDate: types.MustDateFromString("2022-05-06"),
                    StartTime: sdk.Int(890379),
                },
                shared.ServiceAllocationInputModel{
                    BookingLimit: sdk.Int(532870),
                    EndDate: types.MustDateFromString("2022-03-18"),
                    EndTime: sdk.Int(113808),
                    LocationID: sdk.String("cumque"),
                    Reason: sdk.String("architecto"),
                    Repeat: &shared.RepeatInputModel{
                        Frequency: sdk.String("sint"),
                        Interval: sdk.Int(756936),
                        MonthDay: sdk.Int(580689),
                        MonthType: sdk.String("quis"),
                        Weekdays: sdk.String("tempore"),
                    },
                    Repeats: sdk.Bool(false),
                    ResourceID: sdk.String("officia"),
                    StartDate: types.MustDateFromString("2021-10-17"),
                    StartTime: sdk.Int(558992),
                },
                shared.ServiceAllocationInputModel{
                    BookingLimit: sdk.Int(385828),
                    EndDate: types.MustDateFromString("2022-06-20"),
                    EndTime: sdk.Int(957510),
                    LocationID: sdk.String("deserunt"),
                    Reason: sdk.String("dolor"),
                    Repeat: &shared.RepeatInputModel{
                        Frequency: sdk.String("hic"),
                        Interval: sdk.Int(437094),
                        MonthDay: sdk.Int(575634),
                        MonthType: sdk.String("autem"),
                        Weekdays: sdk.String("iste"),
                    },
                    Repeats: sdk.Bool(false),
                    ResourceID: sdk.String("cupiditate"),
                    StartDate: types.MustDateFromString("2022-04-26"),
                    StartTime: sdk.Int(952216),
                },
                shared.ServiceAllocationInputModel{
                    BookingLimit: sdk.Int(222771),
                    EndDate: types.MustDateFromString("2021-11-16"),
                    EndTime: sdk.Int(801274),
                    LocationID: sdk.String("repudiandae"),
                    Reason: sdk.String("eaque"),
                    Repeat: &shared.RepeatInputModel{
                        Frequency: sdk.String("consectetur"),
                        Interval: sdk.Int(420910),
                        MonthDay: sdk.Int(110804),
                        MonthType: sdk.String("numquam"),
                        Weekdays: sdk.String("incidunt"),
                    },
                    Repeats: sdk.Bool(false),
                    ResourceID: sdk.String("modi"),
                    StartDate: types.MustDateFromString("2021-06-02"),
                    StartTime: sdk.Int(452481),
                },
            },
        },
        ID: "977a0ef2-f536-4028-afee-f934152ed7e2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationViewModels != nil {
        // handle response
    }
}
```

## PostSetupV1ServicesIDBlock

<p>Use this endpoint to <b>Create</b> a Service Block. A valid <b>service id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Service blocks can be set to specific time ranges or for the whole day. To block a whole day set startTime to 0 and endTime to 2400.</p>
<p>Service blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
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
  <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
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
    res, err := s.Services.PostSetupV1ServicesIDBlock(ctx, operations.PostSetupV1ServicesIDBlockRequest{
        ServiceBlockInputModel: &shared.ServiceBlockInputModel{
            EndDate: types.MustDateFromString("2022-10-02"),
            EndTime: sdk.Int(962497),
            LocationID: sdk.String("incidunt"),
            Reason: sdk.String("quod"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("sunt"),
                Interval: sdk.Int(353493),
                MonthDay: sdk.Int(463044),
                MonthType: sdk.String("illum"),
                Weekdays: sdk.String("voluptates"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2021-08-30"),
            StartTime: sdk.Int(446484),
        },
        ID: "170f445a-ccf6-467a-af9b-bad185fe431d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceBlockViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1ServicesIDUploadimage

<p>Use this endpoint to <b>Upload</b> an image to the service. A valid <b>service id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

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
    res, err := s.Services.PostSetupV1ServicesIDUploadimage(ctx, operations.PostSetupV1ServicesIDUploadimageRequest{
        ServiceImageInputModel: &shared.ServiceImageInputModel{
            ImageFileData: sdk.String("suscipit"),
            ImageFileName: sdk.String("quidem"),
        },
        ID: "f5c838fb-b8c2-40cb-a7fc-4b425e99e623",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ServicesAllocationsID

<p>Use this endpoint to <b>Update</b> a service allocation. A valid <b>serviceAllocation id</b> is required. Refer to the <i>POST /setup/v1/services/{id}/allocations</i> endpoint for fields names and details.</p>

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
    res, err := s.Services.PutSetupV1ServicesAllocationsID(ctx, operations.PutSetupV1ServicesAllocationsIDRequest{
        ServiceAllocationUpdateModel: &shared.ServiceAllocationUpdateModel{
            BookingLimit: sdk.Int(279679),
            EndDate: types.MustDateFromString("2021-04-04"),
            EndTime: sdk.Int(970703),
            LocationID: sdk.String("voluptate"),
            Reason: sdk.String("tempore"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("in"),
                Interval: sdk.Int(609864),
                MonthDay: sdk.Int(820735),
                MonthType: sdk.String("tenetur"),
                Weekdays: sdk.String("recusandae"),
            },
            Repeats: sdk.Bool(false),
            ResourceID: sdk.String("expedita"),
            StartDate: types.MustDateFromString("2022-07-18"),
            StartTime: sdk.Int(687352),
        },
        ID: "5c38d4ba-f91e-4506-af89-0a54b475f16f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAllocationViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ServicesBlockID

<p>Use this endpoint to <b>Update</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

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
    res, err := s.Services.PutSetupV1ServicesBlockID(ctx, operations.PutSetupV1ServicesBlockIDRequest{
        ServiceBlockUpdateModel: &shared.ServiceBlockUpdateModel{
            EndDate: types.MustDateFromString("2022-08-06"),
            EndTime: sdk.Int(821672),
            Reason: sdk.String("nesciunt"),
            Repeat: &shared.RepeatUpdateModel{
                Frequency: sdk.String("corrupti"),
                Interval: sdk.Int(343814),
                MonthDay: sdk.Int(682327),
                MonthType: sdk.String("sequi"),
                Weekdays: sdk.String("maxime"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-04-30"),
            StartTime: sdk.Int(757596),
        },
        ID: "631b99e2-6ced-48f9-bdb9-410f63bbf817",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceBlockViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ServicesID

<p>Use this endpoint to <b>Update</b> a service object. A valid <b>service id</b> is required.</p>

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
    res, err := s.Services.PutSetupV1ServicesID(ctx, operations.PutSetupV1ServicesIDRequest{
        ServiceUpdateModel: &shared.ServiceUpdateModel{
            Availability: &shared.AvailabilityInputModel{
                Fri: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(542242),
                    StartTime: sdk.Int(243941),
                },
                Mon: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(474774),
                    StartTime: sdk.Int(722151),
                },
                Sat: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(45728),
                    StartTime: sdk.Int(112788),
                },
                Sun: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(650678),
                    StartTime: sdk.Int(990454),
                },
                Thu: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(872580),
                    StartTime: sdk.Int(845374),
                },
                Tue: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(461853),
                    StartTime: sdk.Int(534509),
                },
                Wed: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(523266),
                    StartTime: sdk.Int(424553),
                },
            },
            BookingInterval: sdk.Int(177790),
            BookingLimit: sdk.Int(286464),
            CustomFields: &shared.CustomFieldUpdateModel{
                Field1: sdk.String("sunt"),
                Field10: sdk.String("blanditiis"),
                Field2: sdk.String("iste"),
                Field3: sdk.String("accusamus"),
                Field4: sdk.String("distinctio"),
                Field5: sdk.String("incidunt"),
                Field6: sdk.String("labore"),
                Field7: sdk.String("blanditiis"),
                Field8: sdk.String("ducimus"),
                Field9: sdk.String("consectetur"),
            },
            Description: sdk.String("sapiente"),
            Duration: sdk.Int(337149),
            Fees: &shared.ServiceFeesUpdateModel{
                CancellationFeeAmount: sdk.Float64(333.23),
                CancellationFeeTaxable: sdk.Bool(false),
                FeeAmount: sdk.Float64(1902.6),
                FeeTaxable: sdk.Bool(false),
                NonRefundable: sdk.Bool(false),
            },
            LocationID: sdk.String("consectetur"),
            MaxCapacity: sdk.Int(990540),
            MaxGroupSize: sdk.Int(103053),
            MediaPageURL: sdk.String("sint"),
            Name: sdk.String("Mr. Garry Zemlak"),
            Options: &shared.ServiceOptionsUpdateModel{
                ConsumerPadding: sdk.Bool(false),
                DefaultService: sdk.Bool(false),
                DurationInterval: sdk.Int(751901),
                DurationMax: sdk.Int(892640),
                DurationMin: sdk.Int(287379),
                DurationSelect: sdk.Bool(false),
                Padding: sdk.Int(84438),
            },
            Public: sdk.Bool(false),
            ServiceGroupID: sdk.String("minima"),
            Settings: &shared.ServiceSettingsUpdateModel{
                BookAheadUnit: sdk.Int(165483),
                BookAheadValue: sdk.Int(929849),
                BookInAdvance: sdk.Int(625418),
            },
            Type: sdk.String("expedita"),
        },
        ID: "9cd7e522-4a6a-40e1-a3b7-847ec59e1f67",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ServicesIDAvailability

<p>Use this endpoint to <b>Update</b> service weekly availability. A valid <b>service id</b> is required. The availability day entries are created when a service object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the business location.</p>

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
    res, err := s.Services.PutSetupV1ServicesIDAvailability(ctx, operations.PutSetupV1ServicesIDAvailabilityRequest{
        AvailabilityInputModel: &shared.AvailabilityInputModel{
            Fri: &shared.WeekDayInputModel{
                EndTime: sdk.Int(995671),
                StartTime: sdk.Int(227129),
            },
            Mon: &shared.WeekDayInputModel{
                EndTime: sdk.Int(767555),
                StartTime: sdk.Int(291666),
            },
            Sat: &shared.WeekDayInputModel{
                EndTime: sdk.Int(762581),
                StartTime: sdk.Int(776334),
            },
            Sun: &shared.WeekDayInputModel{
                EndTime: sdk.Int(922207),
                StartTime: sdk.Int(273349),
            },
            Thu: &shared.WeekDayInputModel{
                EndTime: sdk.Int(729386),
                StartTime: sdk.Int(380583),
            },
            Tue: &shared.WeekDayInputModel{
                EndTime: sdk.Int(847985),
                StartTime: sdk.Int(478576),
            },
            Wed: &shared.WeekDayInputModel{
                EndTime: sdk.Int(401083),
                StartTime: sdk.Int(575111),
            },
        },
        ID: "6ff3c574-7501-4357-a44f-51f8b084c319",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceAvailabilityViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1ServicesIDRecover

<p>Use this endpoint to <b>Recover</b> a deleted service object. A valid <b>service id</b> is required.</p>

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
    res, err := s.Services.PutSetupV1ServicesIDRecover(ctx, operations.PutSetupV1ServicesIDRecoverRequest{
        ID: "7e193a24-5467-4f94-874c-2d5cc4972233",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceViewModel != nil {
        // handle response
    }
}
```
