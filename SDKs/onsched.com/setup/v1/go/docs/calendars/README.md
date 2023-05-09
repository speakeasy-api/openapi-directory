# Calendars

### Available Operations

* [DeleteSetupV1CalendarsBlockID](#deletesetupv1calendarsblockid) - Delete Calendar Block
* [DeleteSetupV1CalendarsID](#deletesetupv1calendarsid) - Delete Calendar
* [GetSetupV1Calendars](#getsetupv1calendars) - List Calendars
* [GetSetupV1CalendarsBlocksID](#getsetupv1calendarsblocksid) - Get Calendar Block
* [GetSetupV1CalendarsID](#getsetupv1calendarsid) - Get Calendar
* [GetSetupV1CalendarsIDBlocks](#getsetupv1calendarsidblocks) - List Calendar Blocks
* [GetSetupV1CalendarsIDServices](#getsetupv1calendarsidservices) - List Calendar Services
* [PostSetupV1Calendars](#postsetupv1calendars) - DEPRECATING: Create
* [PostSetupV1CalendarsIDBlock](#postsetupv1calendarsidblock) - Create Calendar Block
* [PutSetupV1CalendarsBlockID](#putsetupv1calendarsblockid) - Update Calendar Block
* [PutSetupV1CalendarsID](#putsetupv1calendarsid) - Update Calendar
* [PutSetupV1CalendarsIDRecover](#putsetupv1calendarsidrecover) - Recover Calendar

## DeleteSetupV1CalendarsBlockID

<p>Use this endpoint to permanently <b>Delete</b> a calendar block. A valid <b>calendarBlock id</b> is required.</p>

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
    res, err := s.Calendars.DeleteSetupV1CalendarsBlockID(ctx, operations.DeleteSetupV1CalendarsBlockIDRequest{
        ID: "88f3a669-9707-44ba-8469-b6e214195989",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarBlockViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1CalendarsID

<p>Use this endpoint to <b>Delete</b> a calendar object. A valid <b>calendar id</b> is required. The calendar is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/calendars​/{id}​/recover </i>endpoint.</p>

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
    res, err := s.Calendars.DeleteSetupV1CalendarsID(ctx, operations.DeleteSetupV1CalendarsIDRequest{
        ID: "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1Calendars

<p>Use this endpoint to return a <b>List of Calendars</b> from the requested location. If not specified, the business location defaults to the primary business location. </p>

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
    res, err := s.Calendars.GetSetupV1Calendars(ctx, operations.GetSetupV1CalendarsRequest{
        Deleted: sdk.Bool(false),
        Limit: sdk.Int(162493),
        LocationID: sdk.String("praesentium"),
        Offset: sdk.Int(615560),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CalendarsBlocksID

<p>Use this endpoint to return a <b>Calendar Block</b>. A valid <b>calendarBlock id</b> is required. </p>

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
    res, err := s.Calendars.GetSetupV1CalendarsBlocksID(ctx, operations.GetSetupV1CalendarsBlocksIDRequest{
        ID: "21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarBlockViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CalendarsID

<p>Use this endpoint to return a <b>Calendar</b> object. A valid <b>calendar id</b> is required.</p>

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
    res, err := s.Calendars.GetSetupV1CalendarsID(ctx, operations.GetSetupV1CalendarsIDRequest{
        ID: "25870532-02c7-43d5-be9b-90c28909b3fe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CalendarsIDBlocks

<p>Use this endpoint to return a <b>List of Calendar Blocks</b> for the requested calendar. A valid <b>calendar id</b> is required. </p>

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
    res, err := s.Calendars.GetSetupV1CalendarsIDBlocks(ctx, operations.GetSetupV1CalendarsIDBlocksRequest{
        ID: "49a8d9cb-f486-4333-a3f9-b77f3a410067",
        Limit: sdk.Int(311796),
        Offset: sdk.Int(881005),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarBlockListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CalendarsIDServices

<p>Use this endpoint to return a <b>List of Linked Services</b> of a calendar object. A valid <b>calendar id</b> is required. Find calendar id's by using the <i>GET /setup/v1/calendars</i> endpoint.</p>

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
    res, err := s.Calendars.GetSetupV1CalendarsIDServices(ctx, operations.GetSetupV1CalendarsIDServicesRequest{
        ID: "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
        Limit: sdk.Int(904425),
        Offset: sdk.Int(383464),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServiceListViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Calendars

<p>
  <b>DEPRECATING:</b> Create Calendar</p>
<p>We are no longer supporting Multiple Calendar Functionality as it is part of our Legacy Application and has no relevance in the API.</p>

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
    res, err := s.Calendars.PostSetupV1Calendars(ctx, shared.ScheduleInputModel{
        Availability: &shared.AvailabilityInputModel{
            Fri: &shared.WeekDayInputModel{
                EndTime: sdk.Int(645785),
                StartTime: sdk.Int(588317),
            },
            Mon: &shared.WeekDayInputModel{
                EndTime: sdk.Int(324683),
                StartTime: sdk.Int(831049),
            },
            Sat: &shared.WeekDayInputModel{
                EndTime: sdk.Int(519711),
                StartTime: sdk.Int(628982),
            },
            Sun: &shared.WeekDayInputModel{
                EndTime: sdk.Int(55),
                StartTime: sdk.Int(872651),
            },
            Thu: &shared.WeekDayInputModel{
                EndTime: sdk.Int(311860),
                StartTime: sdk.Int(273542),
            },
            Tue: &shared.WeekDayInputModel{
                EndTime: sdk.Int(425451),
                StartTime: sdk.Int(798047),
            },
            Wed: &shared.WeekDayInputModel{
                EndTime: sdk.Int(885338),
                StartTime: sdk.Int(185636),
            },
        },
        BookingsPerSlot: sdk.Int(679880),
        Interval: sdk.Int(952792),
        LocationID: sdk.String("esse"),
        Name: sdk.String("Tyrone Emard"),
        ResourceGroupID: sdk.String("amet"),
        Type: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1CalendarsIDBlock

<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendar id</b> is required.</p>
<p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
<p>Calendar blocks can be set to specific time ranges or for the whole day. Th block a whole day set the startTime to 0 and endTime to 2400.</p>
<p>Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.</p>
<p>
  <b>Repeat object: (repeats = true)</b>
</p>
<p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
<p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
<p>
  <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
<p>
  <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b>  is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
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
    res, err := s.Calendars.PostSetupV1CalendarsIDBlock(ctx, operations.PostSetupV1CalendarsIDBlockRequest{
        CalendarBlockInputModel: &shared.CalendarBlockInputModel{
            EndDate: types.MustDateFromString("2022-03-28"),
            EndTime: sdk.Int(313692),
            Reason: sdk.String("dolorem"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("sapiente"),
                Interval: sdk.Int(518201),
                MonthDay: sdk.Int(471752),
                MonthType: sdk.String("sit"),
                Weekdays: sdk.String("expedita"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-11-05"),
            StartTime: sdk.Int(424685),
        },
        ID: "b5a73429-cdb1-4a84-a2bb-679d2322715b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceBlockViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1CalendarsBlockID

<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendarBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/calendars​/{id}​/block</i> endpoint for fieldnames and details.</p>

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
    res, err := s.Calendars.PutSetupV1CalendarsBlockID(ctx, operations.PutSetupV1CalendarsBlockIDRequest{
        CalendarBlockUpdateModel: &shared.CalendarBlockUpdateModel{
            EndDate: types.MustDateFromString("2022-11-28"),
            EndTime: sdk.Int(765326),
            Reason: sdk.String("soluta"),
            Repeat: &shared.RepeatInputModel{
                Frequency: sdk.String("nobis"),
                Interval: sdk.Int(92596),
                MonthDay: sdk.Int(903720),
                MonthType: sdk.String("ipsum"),
                Weekdays: sdk.String("veritatis"),
            },
            Repeats: sdk.Bool(false),
            StartDate: types.MustDateFromString("2021-11-23"),
            StartTime: sdk.Int(731694),
        },
        ID: "90f3443a-1108-4e0a-9cf4-b921879fce95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarBlockViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1CalendarsID

<p>Use this endpoint to <b>Update</b> a calendar object. A valid <b>calendar id</b> is required. When your company was created a calendar object was automatically created with 24-hour weekly availability. Its <b>name = Main</b>, the <b>type = resource</b> and by default the <b>interval = 30 mins</b>. We are currently supporting resource calendar type. Other types were part of our Legacy Application and has no relevance in the API product.</p>

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
    res, err := s.Calendars.PutSetupV1CalendarsID(ctx, operations.PutSetupV1CalendarsIDRequest{
        ScheduleUpdateModel: &shared.ScheduleUpdateModel{
            Availability: &shared.AvailabilityInputModel{
                Fri: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(218403),
                    StartTime: sdk.Int(961571),
                },
                Mon: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(455169),
                    StartTime: sdk.Int(231701),
                },
                Sat: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(878870),
                    StartTime: sdk.Int(949319),
                },
                Sun: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(492268),
                    StartTime: sdk.Int(941378),
                },
                Thu: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(715561),
                    StartTime: sdk.Int(799203),
                },
                Tue: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(486160),
                    StartTime: sdk.Int(630448),
                },
                Wed: &shared.WeekDayInputModel{
                    EndTime: sdk.Int(708548),
                    StartTime: sdk.Int(874288),
                },
            },
            BookingsPerSlot: sdk.Int(498140),
            Interval: sdk.Int(293020),
            LocationID: sdk.String("quibusdam"),
            Name: sdk.String("Earl Mosciski DVM"),
            ResourceGroupID: sdk.String("exercitationem"),
            Type: sdk.String("nulla"),
        },
        ID: "2cff7c70-a456-426d-8368-13f16d9f5fce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1CalendarsIDRecover

<p>Use this endpoint to <b>Recover</b> a previously deleted calendar object. A valid <b>calendar id</b> is required.</p>

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
    res, err := s.Calendars.PutSetupV1CalendarsIDRecover(ctx, operations.PutSetupV1CalendarsIDRecoverRequest{
        ID: "6c556146-c3e2-450f-b008-c42e141aac36",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleViewModel != nil {
        // handle response
    }
}
```
