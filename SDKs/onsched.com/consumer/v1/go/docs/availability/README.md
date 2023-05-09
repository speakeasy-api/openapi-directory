# Availability

### Available Operations

* [GetConsumerV1AvailabilityServiceIDStartDateEndDate](#getconsumerv1availabilityserviceidstartdateenddate) - Get Available Times
* [GetConsumerV1AvailabilityServiceIDStartDateEndDateDays](#getconsumerv1availabilityserviceidstartdateenddatedays) - Get Available Days
* [GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable](#getconsumerv1availabilityserviceidstartdateenddateunavailable) - Get Unavailable Times

## GetConsumerV1AvailabilityServiceIDStartDateEndDate

<p>
  <b>Choose your search criteria carefully. Availability is an expensive call.</b> If you search availability for all resources, you should only do so for a single date. If you search availability for multiple dates, you should only do so for a specific resource by specifying the optional resourceId parameter.</p>
<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
<p>A <b>resourceId</b> is optional, it is recommended if known at the time of availability call.</p>
<p>
  <b>timezoneName</b> is optional, it allows you to specify the IANA formatted name for the end user's timezone to view availability. e.g., <i>America/New_York</i>. <b>NOTE: This is the recommended approach for your implementation.</b>  The "tzOffset" parameter remains for backward compatibility.  For JavaScript, use moment.js in your client for ease of timezone detection and selection. For iOS, use the name property of the NSTimeZone returned from the localTimeZone method. For .NET, consider NodaTime or TimeZoneConverter via NuGet. </p>
<p>
  <b>duration</b> should only be populated if you allow the end user to select a duration, otherwise the service's duration will be used.</p>
<p>
  <b>startTime</b> and <b>endTime</b> are optional and are specified in <b>military time e.g., 800 = 8:00am, 2230 = 10:30pm</b>. Note: You will only see availability within the boundary of your business location start and end times.</p>
<p>
  <b>dayAvailability</b> will return day level availability for the number of days requested from the start date. See <i>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days</i> for details.</p>
<p>
  <b>firstDayAvailable</b> only works with day availability. If set to true it will look for the first day available within the range specified by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month. Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.</p>
<p>
  <b>tzOffset</b> allows you to pass in the timezone offset for the end user's timezone of choice, e.g., (-240) for EST. If you use this option, your application should be timezone aware. The requested timezone is specified as an offset (plus or minus) from GMT time.</p>
<p>Availability can be complex. For further troubleshooting refer to the: <i><b>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable</b></i> endpoint. This endpoint will show you all unavailable times for a given date range. Available times are created from any unblocked time periods. For more information: <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a></p>

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
    res, err := s.Availability.GetConsumerV1AvailabilityServiceIDStartDateEndDate(ctx, operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest{
        DayAvailability: sdk.Int(209157),
        DayAvailabilityStartDate: types.MustTimeFromString("2022-09-18T06:37:26.413Z"),
        Destination: sdk.String("adipisci"),
        Duration: sdk.Int(677263),
        EndDate: types.MustTimeFromString("2022-12-08T23:47:03.469Z"),
        EndTime: sdk.Int(16429),
        FirstDayAvailable: sdk.Bool(false),
        Interval: sdk.Int(555649),
        LocationID: sdk.String("itaque"),
        ResourceGroupID: sdk.String("consequatur"),
        ResourceID: sdk.String("est"),
        ResourceIds: sdk.String("repellendus"),
        RoundRobin: sdk.String("porro"),
        ServiceID: "doloribus",
        StartDate: types.MustTimeFromString("2022-04-19T05:23:08.152Z"),
        StartTime: sdk.Int(586410),
        TimezoneName: sdk.String("qui"),
        TzOffset: sdk.Int(63955),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AvailabilityViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1AvailabilityServiceIDStartDateEndDateDays

<p>This endpoint will return <b>Day Level Availability</b> for the range of dates requested. For example, if the business is closed, or there is a public holiday this endpoint will return that the "Day is unavailable".</p>
<p>Day Availability is a high-level check for Holidays and Open/Available hours of a location, service and/or resource and should be used to restrict your choices of days available in your application to improve usability and performance.</p>
<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
<p>The locationId is optional, however if not supplied it defaults to the Primary Business Location for open/closed hours information. It is recommended you always provide the locationId.</p>
<p>A <b>resourceId</b> is optional. If used the available days will be return day availability for the resource specified.</p>
<p>The <b>tzOffset</b> parameter should be used if the appointment requester, the end user, is in a different timezone than the location or resource.</p>

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
    res, err := s.Availability.GetConsumerV1AvailabilityServiceIDStartDateEndDateDays(ctx, operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest{
        EndDate: types.MustTimeFromString("2022-01-11T11:48:15.910Z"),
        LocationID: sdk.String("occaecati"),
        ResourceID: sdk.String("voluptatibus"),
        ServiceID: "quisquam",
        StartDate: types.MustTimeFromString("2021-03-07T21:49:29.078Z"),
        TzOffset: sdk.Int(338159),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AvailabilityDayViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable

<p>This endpoint is used to show <b>Unavailable</b> times and provides valuable information as to why a time slot is unavailable. If you question your availability results, populate the same parameters to this endpoint to find out why.</p>
<p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
<p>Location hours, holidays, services, resources, blocks, allocations, and appointments are just some of variables that may cause time slots to become unavailable. Use this endpoint to understand why you don't see availability.</p>

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
    res, err := s.Availability.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable(ctx, operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest{
        Duration: sdk.Int(218403),
        EndDate: types.MustTimeFromString("2021-08-20T14:09:47.998Z"),
        LocationID: sdk.String("consectetur"),
        ResourceID: sdk.String("vero"),
        ServiceID: "tenetur",
        SkipTimePastUnavailability: sdk.Bool(false),
        StartDate: types.MustTimeFromString("2022-01-22T09:31:52.637Z"),
        TzOffset: sdk.Int(715561),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnavailableTimeListViewModel != nil {
        // handle response
    }
}
```
