# Locations

### Available Operations

* [DeleteSetupV1LocationsServicesID](#deletesetupv1locationsservicesid) - Unlink Service
* [DeleteSetupV1LocationsID](#deletesetupv1locationsid) - Delete Location
* [DeleteSetupV1LocationsIDDeleteallimages](#deletesetupv1locationsiddeleteallimages) - Delete All Location Images
* [DeleteSetupV1LocationsIDDeleteimage](#deletesetupv1locationsiddeleteimage) - Delete Location Image
* [DeleteSetupV1LocationsIDEmailTemplatesMaster](#deletesetupv1locationsidemailtemplatesmaster) - Delete Master Template Settings
* [DeleteSetupV1LocationsIDEmailTemplatesTemplateName](#deletesetupv1locationsidemailtemplatestemplatename) - Delete Custom Template
* [DeleteSetupV1LocationsIDGoogleServiceAccount](#deletesetupv1locationsidgoogleserviceaccount) - Delete Google Cal Access
* [DeleteSetupV1LocationsIDServices](#deletesetupv1locationsidservices) - Delete Linked Services
* [GetSetupV1Locations](#getsetupv1locations) - List Locations
* [GetSetupV1LocationsServicesID](#getsetupv1locationsservicesid) - Get Linked Service
* [GetSetupV1LocationsID](#getsetupv1locationsid) - Get Location
* [GetSetupV1LocationsIDAppointmentreminders](#getsetupv1locationsidappointmentreminders) - Get Reminders
* [GetSetupV1LocationsIDEmailTemplates](#getsetupv1locationsidemailtemplates) - List Email Templates
* [GetSetupV1LocationsIDEmailTemplatesMaster](#getsetupv1locationsidemailtemplatesmaster) - Get Master Template Settings
* [GetSetupV1LocationsIDEmailTemplatesTemplateName](#getsetupv1locationsidemailtemplatestemplatename) - Get Email Template
* [GetSetupV1LocationsIDServices](#getsetupv1locationsidservices) - List Location Linked Services
* [PostSetupV1Locations](#postsetupv1locations) - Create Location
* [PostSetupV1LocationsBulk](#postsetupv1locationsbulk) - Create Locations Bulk
* [PostSetupV1LocationsIDEmailTemplates](#postsetupv1locationsidemailtemplates) - Create Custom Template
* [PostSetupV1LocationsIDEmailTemplatesMaster](#postsetupv1locationsidemailtemplatesmaster) - Create Master Template Settings
* [PostSetupV1LocationsIDGoogleServiceAccount](#postsetupv1locationsidgoogleserviceaccount) - Create Google Cal Access
* [PostSetupV1LocationsIDServices](#postsetupv1locationsidservices) - Create Linked Service
* [PostSetupV1LocationsIDUploadimage](#postsetupv1locationsiduploadimage) - Upload Location Image
* [PutSetupV1LocationsID](#putsetupv1locationsid) - Update Location
* [PutSetupV1LocationsIDAppointmentreminders](#putsetupv1locationsidappointmentreminders) - Update Reminders
* [PutSetupV1LocationsIDHolidaysHolidayIDClosed](#putsetupv1locationsidholidaysholidayidclosed) - Update Location Holidays
* [PutSetupV1LocationsIDRecover](#putsetupv1locationsidrecover) - Recover Location
* [PutSetupV1LocationsIDSettingsScopeSettingsScope](#putsetupv1locationsidsettingsscopesettingsscope) - Update Location Scope

## DeleteSetupV1LocationsServicesID

<p>Use this endpoint to <b>Unlink</b> a location service from a business location. A valid <b>locationService id</b> is required. Find location services by using the <i>GET ​/setup​/v1​/locations​/{id}​/services</i> endpoint. </p>

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
    res, err := s.Locations.DeleteSetupV1LocationsServicesID(ctx, operations.DeleteSetupV1LocationsServicesIDRequest{
        ID: "b6a89fbe-3a5a-4a8e-8824-d0ab4075088e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1LocationsID

<p>Use this endpoint to <b>Delete</b> a business location. A valid business <b>location id</b> is required. The location is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/locations​/{id}​/recover</i> endpoint.</p>

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
    res, err := s.Locations.DeleteSetupV1LocationsID(ctx, operations.DeleteSetupV1LocationsIDRequest{
        ID: "51862065-e904-4f3b-9194-b8abf603a79f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1LocationsIDDeleteallimages

<p>Use this endpoint to <b>Delete All</b> location images from the location blob storage container. An option exists to use upper case for matching the subdirectory name. Legacy apps stored pics using upper case while the API uses lower case names.</p>

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
    res, err := s.Locations.DeleteSetupV1LocationsIDDeleteallimages(ctx, operations.DeleteSetupV1LocationsIDDeleteallimagesRequest{
        ID: "9dfe0ab7-da8a-450c-a187-f86bc173d689",
        Uppercase: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSetupV1LocationsIDDeleteallimages200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## DeleteSetupV1LocationsIDDeleteimage

<p>Use this endpoint to <b>Delete</b> a previously uploaded location image. A valid business <b>location id</b> is required.</p>

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
    res, err := s.Locations.DeleteSetupV1LocationsIDDeleteimage(ctx, operations.DeleteSetupV1LocationsIDDeleteimageRequest{
        ID: "eee9526f-8d98-46e8-81ea-d4f0e1012563",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1LocationsIDEmailTemplatesMaster

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Deleting a custom master email template will reactivate the original default OnSched template settings.</p>

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
    res, err := s.Locations.DeleteSetupV1LocationsIDEmailTemplatesMaster(ctx, operations.DeleteSetupV1LocationsIDEmailTemplatesMasterRequest{
        ID: "f94e29e9-73e9-422a-97a1-5be3e060807e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MasterEmailTemplateSettingsViewModel != nil {
        // handle response
    }
}
```

## DeleteSetupV1LocationsIDEmailTemplatesTemplateName

<p>Use this endpoint to <b>Delete</b> a Custom Email Template that was previously created. A valid business <b>location id</b> and email <b>templateName</b> are required. Deleting a custom email template will revert the template back to its default originally created by OnSched. Changes will be reflected in all business locations associated with this company.</p>
<p>The email template endpoints work a little differently than most. When you delete you are deleting the custom template you created, and the original default Email Template created by OnSched will be reactivated.</p>

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
    res, err := s.Locations.DeleteSetupV1LocationsIDEmailTemplatesTemplateName(ctx, operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest{
        ID: "2b6e3ab8-845f-4059-ba60-ff2a54a31e94",
        TemplateName: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentResult != nil {
        // handle response
    }
}
```

## DeleteSetupV1LocationsIDGoogleServiceAccount

<p>Use this endpoint to <b>Delete</b> authorized access to all google calendar users in your organization. Upon deletion Google Calendars will no longer be synced for resources.</p>

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
    res, err := s.Locations.DeleteSetupV1LocationsIDGoogleServiceAccount(ctx, operations.DeleteSetupV1LocationsIDGoogleServiceAccountRequest{
        ID: "64a3e865-e795-46f9-a51a-5a9da660ff57",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSetupV1LocationsIDServices

<p>Use this endpoint to <b>Delete All</b> location linked services from a business location. A valid business <b>location id</b> is required. </p>

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
    res, err := s.Locations.DeleteSetupV1LocationsIDServices(ctx, operations.DeleteSetupV1LocationsIDServicesRequest{
        ID: "bfaad4f9-efc1-4b45-92c1-032648dc2f61",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1Locations

<p>Use this endpoint to <b>List Business Locations</b> associated with your company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

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
    res, err := s.Locations.GetSetupV1Locations(ctx, operations.GetSetupV1LocationsRequest{
        Deleted: sdk.Bool(false),
        FriendlyID: sdk.String("minima"),
        Limit: sdk.Int(107004),
        Name: sdk.String("Rene Weber"),
        Offset: sdk.Int(848151),
        ServiceID: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1LocationsServicesID

<p>Use this endpoint to <b>Get a Linked Service</b>. A valid <b>locationService id</b> is required.</p>

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
    res, err := s.Locations.GetSetupV1LocationsServicesID(ctx, operations.GetSetupV1LocationsServicesIDRequest{
        ID: "e9fe6c63-2ca3-4aed-8117-996312fde047",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessServiceViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1LocationsID

<p>Use this endpoint to return a <b>Location</b> object. A valid <b>location id</b> is required. If not specified, the business location defaults to the primary business location. Find all business location id's, by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

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
    res, err := s.Locations.GetSetupV1LocationsID(ctx, operations.GetSetupV1LocationsIDRequest{
        ID: "71778ff6-1d01-4747-a360-a15db6a66065",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1LocationsIDAppointmentreminders

<p>Use this endpoint to <b>Get Email and SMS appointment reminder settings</b> for the requested location. A valid business <b>location id</b> is required. </p>

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
    res, err := s.Locations.GetSetupV1LocationsIDAppointmentreminders(ctx, operations.GetSetupV1LocationsIDAppointmentremindersRequest{
        ID: "9a1adeaa-b585-41d6-8645-b08b61891baa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppointmentReminderViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1LocationsIDEmailTemplates

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

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
    res, err := s.Locations.GetSetupV1LocationsIDEmailTemplates(ctx, operations.GetSetupV1LocationsIDEmailTemplatesRequest{
        ID: "0fe1ade0-08e6-4f8c-9f35-0d8cdb5a3418",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailTemplateListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1LocationsIDEmailTemplatesMaster

<p>Use this endpoint to get <b>Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding panels and for changing color schemes. </p>

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
    res, err := s.Locations.GetSetupV1LocationsIDEmailTemplatesMaster(ctx, operations.GetSetupV1LocationsIDEmailTemplatesMasterRequest{
        ID: "14301042-1813-4d52-88ec-e7e253b66845",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MasterEmailTemplateSettingsViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1LocationsIDEmailTemplatesTemplateName

<p>Use this endpoint to return the requested <b>Email Template</b>. The template is from the primary business location. If it wasn't customized the default template is returned. The response content is in html format. A valid <b>emailTemplate name</b> is required. Find template names by using the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>

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
    res, err := s.Locations.GetSetupV1LocationsIDEmailTemplatesTemplateName(ctx, operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameRequest{
        ID: "1c6c6e20-5e16-4dea-b3fe-c9578a645842",
        TemplateName: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentResult != nil {
        // handle response
    }
}
```

## GetSetupV1LocationsIDServices

<p>Use this endpoint to return a list of <b>Location Linked Services</b>. A valid business <b>location id</b> is required. By default, there are no location linked services attached to a location. Refer to the: <i>POST /setup​/v1​/locations​/{id}​/services</i> for details. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
    res, err := s.Locations.GetSetupV1LocationsIDServices(ctx, operations.GetSetupV1LocationsIDServicesRequest{
        ID: "3a8418d1-6230-49fb-8929-921aefb9f58c",
        Limit: sdk.Int(300403),
        Offset: sdk.Int(836364),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessServiceListViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Locations

<p>Use this endpoint to <b>Create</b> a new business location. The result is a business location object with a GUID assigned to the location.</p>
<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
<p>
  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
<p>
  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
<p>
  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

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
    res, err := s.Locations.PostSetupV1Locations(ctx, shared.LocationInputModel{
        Address: &shared.AddressInputModel{
            AddressLine1: sdk.String("quos"),
            AddressLine2: sdk.String("commodi"),
            City: sdk.String("Independence"),
            Country: sdk.String("Macedonia"),
            PostalCode: sdk.String("27803-4002"),
            State: sdk.String("maiores"),
        },
        AdminEmail: sdk.String("enim"),
        AdminName: sdk.String("sint"),
        AppointmentReminders: &shared.AppointmentRemindersInputModel{
            EmailFirstReminder: sdk.Int(858778),
            EmailFirstReminderInterval: sdk.Int(643678),
            EmailSecondReminder: sdk.Int(458503),
            EmailSecondReminderInterval: sdk.Int(364463),
            SmsFirstReminder: sdk.Int(444587),
            SmsFirstReminderInterval: sdk.Int(667715),
            SmsSecondReminder: sdk.Int(336102),
            SmsSecondReminderInterval: sdk.Int(571844),
        },
        BusinessHours: &shared.BusinessHoursInputModel{
            Fri: &shared.BusinessHourInputModel{
                EndTime: sdk.Int(880679),
                Is24Hours: sdk.Bool(false),
                IsOpen: sdk.Bool(false),
                StartTime: sdk.Int(774684),
            },
            Mon: &shared.BusinessHourInputModel{
                EndTime: sdk.Int(945027),
                Is24Hours: sdk.Bool(false),
                IsOpen: sdk.Bool(false),
                StartTime: sdk.Int(900103),
            },
            Sat: &shared.BusinessHourInputModel{
                EndTime: sdk.Int(991891),
                Is24Hours: sdk.Bool(false),
                IsOpen: sdk.Bool(false),
                StartTime: sdk.Int(404306),
            },
            Sun: &shared.BusinessHourInputModel{
                EndTime: sdk.Int(376741),
                Is24Hours: sdk.Bool(false),
                IsOpen: sdk.Bool(false),
                StartTime: sdk.Int(895346),
            },
            Thu: &shared.BusinessHourInputModel{
                EndTime: sdk.Int(966148),
                Is24Hours: sdk.Bool(false),
                IsOpen: sdk.Bool(false),
                StartTime: sdk.Int(65082),
            },
            Tue: &shared.BusinessHourInputModel{
                EndTime: sdk.Int(791880),
                Is24Hours: sdk.Bool(false),
                IsOpen: sdk.Bool(false),
                StartTime: sdk.Int(685478),
            },
            Wed: &shared.BusinessHourInputModel{
                EndTime: sdk.Int(675689),
                Is24Hours: sdk.Bool(false),
                IsOpen: sdk.Bool(false),
                StartTime: sdk.Int(231070),
            },
        },
        Defaults: &shared.BusinessDefaultsInputModel{
            AutoUpdateCustomer: sdk.Bool(false),
            BusinessNotification: sdk.Bool(false),
            CustomerCity: sdk.Bool(false),
            CustomerState: sdk.Bool(false),
            EmailInfo: sdk.Bool(false),
            EnableUtcTimezone: sdk.Bool(false),
        },
        Email: sdk.String("Kallie.Emmerich74@gmail.com"),
        Fax: sdk.String("repudiandae"),
        FriendlyID: sdk.String("nam"),
        Name: sdk.String("Glenda Kling"),
        Phone: sdk.String("858.519.4380"),
        RegionID: sdk.String("facere"),
        Settings: &shared.OnlineSettingsInputModel{
            BookAheadUnit: sdk.Int(726878),
            BookAheadValue: sdk.Int(102413),
            BookInAdvance: sdk.Int(975425),
            BookingTimerMins: sdk.Int(156383),
            CustomerBookingsPerDay: sdk.Int(782090),
            EnableWorldTimezones: sdk.Bool(false),
        },
        TimezoneName: sdk.String("aliquam"),
        Website: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1LocationsBulk

<p>Use this endpoint to <b>Create Bulk</b> business locations. The posted list of locations cannot exceed 100 location objects per transaction for performance purposes. The result is a list of new business location objects with a GUID assigned to each location.</p>
<p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
<p>
  <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
<p>
  <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
<p>
  <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

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
    res, err := s.Locations.PostSetupV1LocationsBulk(ctx, shared.LocationsInputModel{
        Locations: []shared.LocationInputModel{
            shared.LocationInputModel{
                Address: &shared.AddressInputModel{
                    AddressLine1: sdk.String("accusantium"),
                    AddressLine2: sdk.String("vel"),
                    City: sdk.String("Bereniceside"),
                    Country: sdk.String("Mayotte"),
                    PostalCode: sdk.String("22591"),
                    State: sdk.String("impedit"),
                },
                AdminEmail: sdk.String("voluptatibus"),
                AdminName: sdk.String("iste"),
                AppointmentReminders: &shared.AppointmentRemindersInputModel{
                    EmailFirstReminder: sdk.Int(932562),
                    EmailFirstReminderInterval: sdk.Int(2677),
                    EmailSecondReminder: sdk.Int(391797),
                    EmailSecondReminderInterval: sdk.Int(931505),
                    SmsFirstReminder: sdk.Int(242178),
                    SmsFirstReminderInterval: sdk.Int(673838),
                    SmsSecondReminder: sdk.Int(250398),
                    SmsSecondReminderInterval: sdk.Int(224467),
                },
                BusinessHours: &shared.BusinessHoursInputModel{
                    Fri: &shared.BusinessHourInputModel{
                        EndTime: sdk.Int(483394),
                        Is24Hours: sdk.Bool(false),
                        IsOpen: sdk.Bool(false),
                        StartTime: sdk.Int(24753),
                    },
                    Mon: &shared.BusinessHourInputModel{
                        EndTime: sdk.Int(39992),
                        Is24Hours: sdk.Bool(false),
                        IsOpen: sdk.Bool(false),
                        StartTime: sdk.Int(7468),
                    },
                    Sat: &shared.BusinessHourInputModel{
                        EndTime: sdk.Int(639705),
                        Is24Hours: sdk.Bool(false),
                        IsOpen: sdk.Bool(false),
                        StartTime: sdk.Int(927403),
                    },
                    Sun: &shared.BusinessHourInputModel{
                        EndTime: sdk.Int(408303),
                        Is24Hours: sdk.Bool(false),
                        IsOpen: sdk.Bool(false),
                        StartTime: sdk.Int(693153),
                    },
                    Thu: &shared.BusinessHourInputModel{
                        EndTime: sdk.Int(377406),
                        Is24Hours: sdk.Bool(false),
                        IsOpen: sdk.Bool(false),
                        StartTime: sdk.Int(705148),
                    },
                    Tue: &shared.BusinessHourInputModel{
                        EndTime: sdk.Int(809365),
                        Is24Hours: sdk.Bool(false),
                        IsOpen: sdk.Bool(false),
                        StartTime: sdk.Int(596065),
                    },
                    Wed: &shared.BusinessHourInputModel{
                        EndTime: sdk.Int(709036),
                        Is24Hours: sdk.Bool(false),
                        IsOpen: sdk.Bool(false),
                        StartTime: sdk.Int(537236),
                    },
                },
                Defaults: &shared.BusinessDefaultsInputModel{
                    AutoUpdateCustomer: sdk.Bool(false),
                    BusinessNotification: sdk.Bool(false),
                    CustomerCity: sdk.Bool(false),
                    CustomerState: sdk.Bool(false),
                    EmailInfo: sdk.Bool(false),
                    EnableUtcTimezone: sdk.Bool(false),
                },
                Email: sdk.String("Jackson_Herman@hotmail.com"),
                Fax: sdk.String("animi"),
                FriendlyID: sdk.String("impedit"),
                Name: sdk.String("Dana Ortiz"),
                Phone: sdk.String("282-202-3164 x377"),
                RegionID: sdk.String("rem"),
                Settings: &shared.OnlineSettingsInputModel{
                    BookAheadUnit: sdk.Int(678060),
                    BookAheadValue: sdk.Int(487676),
                    BookInAdvance: sdk.Int(144691),
                    BookingTimerMins: sdk.Int(545),
                    CustomerBookingsPerDay: sdk.Int(168042),
                    EnableWorldTimezones: sdk.Bool(false),
                },
                TimezoneName: sdk.String("vel"),
                Website: sdk.String("quae"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModels != nil {
        // handle response
    }
}
```

## PostSetupV1LocationsIDEmailTemplates

<p>Use this endpoint to a <b>Create</b> a Custom Email Template. You must convert the content to a base64 encoded string. Updates to the primary business location create company scoped custom templates. Updates to non-primary business locations create business location scoped custom templates. The master template cannot be updated with this endpoint.</p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new email template that will be used instead. If you delete it, you are deleting the custom template you created and the original default template created by OnSched will be reactivated.</p>

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
    res, err := s.Locations.PostSetupV1LocationsIDEmailTemplates(ctx, operations.PostSetupV1LocationsIDEmailTemplatesRequest{
        EmailTemplateInputModel: &shared.EmailTemplateInputModel{
            TemplateContent: sdk.String("quae"),
            TemplateName: sdk.String("modi"),
        },
        ID: "35e139db-c225-49b1-abda-8c070e1084cb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContentResult != nil {
        // handle response
    }
}
```

## PostSetupV1LocationsIDEmailTemplatesMaster

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates​/masterSettings</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it, you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

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
    res, err := s.Locations.PostSetupV1LocationsIDEmailTemplatesMaster(ctx, operations.PostSetupV1LocationsIDEmailTemplatesMasterRequest{
        MasterTemplateSettingsInputModel: &shared.MasterTemplateSettingsInputModel{
            CenterEmailContent: sdk.Bool(false),
            CenterEmailContentPanel: sdk.Bool(false),
            CenterEmailFooter: sdk.Bool(false),
            ContentBackgroundColor: sdk.String("voluptatem"),
            ContentColor: sdk.String("autem"),
            ContentLinkColor: sdk.String("esse"),
            EmailBackgroundColor: sdk.String("dolores"),
            EmailColor: sdk.String("assumenda"),
            EmailLinkColor: sdk.String("beatae"),
            FooterFontSize: sdk.String("est"),
            FooterLogoHeight: sdk.String("facere"),
            FooterLogoPadding: sdk.String("corrupti"),
            FooterPanelEmailContact: sdk.Bool(false),
            FooterPanelPhoneContact: sdk.Bool(false),
            FooterPanelWebsiteContact: sdk.Bool(false),
            HeaderLogoHeight: sdk.String("molestiae"),
            HeaderLogoPadding: sdk.String("provident"),
            PanelBackgroundColor: sdk.String("accusamus"),
            PanelColor: sdk.String("necessitatibus"),
            PanelLinkColor: sdk.String("tempore"),
            PrivacyPolicyLink: sdk.String("sint"),
            ShowContentPanel: sdk.Bool(false),
            ShowFooterLogo: sdk.Bool(false),
            ShowFooterPanel: sdk.Bool(false),
            ShowHeaderLogo: sdk.Bool(false),
            ShowHeaderPanel: sdk.Bool(false),
        },
        ID: "665b85ef-bd02-4bae-8be2-d782259e3ea4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MasterEmailTemplateSettingsViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1LocationsIDGoogleServiceAccount

<p>Use this endpoint to <b>Authorize Access</b> to google calendar users in your organization. You must create/have a Google Service account as an admin of your GSuite, then save the credentials as a Json Key file. This <b>Json Key</b> and a valid business <b>location id</b> are required. </p>

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
    res, err := s.Locations.PostSetupV1LocationsIDGoogleServiceAccount(ctx, operations.PostSetupV1LocationsIDGoogleServiceAccountRequest{
        GoogleServiceAccountCreds: &shared.GoogleServiceAccountCreds{
            AuthProviderX509CertURL: sdk.String("quidem"),
            AuthURI: sdk.String("quis"),
            ClientEmail: sdk.String("beatae"),
            ClientID: sdk.String("unde"),
            ClientX509CertURL: sdk.String("molestiae"),
            PrivateKey: sdk.String("delectus"),
            PrivateKeyID: sdk.String("cupiditate"),
            ProjectID: sdk.String("fugit"),
            TokenURI: sdk.String("numquam"),
            Type: sdk.String("numquam"),
        },
        ID: "3da7ce52-b895-4c53-bc64-54efb0b34896",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleServiceAccountCreds != nil {
        // handle response
    }
}
```

## PostSetupV1LocationsIDServices

<p>Use this endpoint to <b>Link Services</b> to a location object. A valid business <b>location id</b> is required. By default, there are <i>no services linked</i> to a location. </p>
<p>Services are definable globally at the Company level and associated with the Primary Business Location, or at a Secondary Business Location. When accessing the Services endpoints, by default, API consumers are provided with a <b>combined</b> list of Services defined from both the Primary and Secondary Business Location.</p>
<p>If necessary, the list of Service(s) provided can be cherry-picked/linked to <b>only include specific Service(s)</b> by using this endpoint. This allows for a subset of defined Services to be provided for a location.</p>
<p>Supplying the list of services ids to cherry-pick/link to the location in the request body will explicitly define which Primary Location Services are offered by the specified business location.</p>

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
    res, err := s.Locations.PostSetupV1LocationsIDServices(ctx, operations.PostSetupV1LocationsIDServicesRequest{
        RequestBody: []string{
            "velit",
            "minus",
            "fuga",
            "nostrum",
        },
        ID: "acfbe2fd-5707-4577-9291-77deac646ecb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1LocationsIDUploadimage

<p>Use this endpoint to <b>Upload</b> an image to a location object. A valid business <b>location id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

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
    res, err := s.Locations.PostSetupV1LocationsIDUploadimage(ctx, operations.PostSetupV1LocationsIDUploadimageRequest{
        ResourceImageInputModel: &shared.ResourceImageInputModel{
            ImageFileData: sdk.String("exercitationem"),
            ImageFileName: sdk.String("quam"),
        },
        ID: "3409e3eb-1e5a-42b1-aeb0-7f116db99545",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1LocationsID

<p>Use this endpoint to <b>Update</b> a business location object. A valid business <b>location id</b> is required. The optional removeRegion query parameter can be used to remove the region relationship from the location.</p>
<p>If the settings element is populated the scope will be set to the business location with the settings supplied. If your settings are uniform across all locations, then do not supply the settings element and the location will use the settings defined on the primary business location (company scoped). Company scoped settings cascade down to the locations. You can override any location that needs different settings by providing settings in the update model. Use the <i>PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}</i> endpoint to change the settings scope only. This is typically used when switching from business location scope back to company.</p>
<p>Refer to: <i><b>POST ​/setup​/v1​/locations</b></i> endpoint for details.</p>

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
    res, err := s.Locations.PutSetupV1LocationsID(ctx, operations.PutSetupV1LocationsIDRequest{
        LocationUpdateModel: &shared.LocationUpdateModel{
            Address: &shared.AddressUpdateModel{
                AddressLine1: sdk.String("doloribus"),
                AddressLine2: sdk.String("eligendi"),
                City: sdk.String("Emelieshire"),
                Country: sdk.String("Norfolk Island"),
                PostalCode: sdk.String("55409-1568"),
                State: sdk.String("tempore"),
            },
            AdminEmail: sdk.String("libero"),
            AdminName: sdk.String("velit"),
            AppointmentReminders: &shared.AppointmentRemindersInputModel{
                EmailFirstReminder: sdk.Int(38557),
                EmailFirstReminderInterval: sdk.Int(963976),
                EmailSecondReminder: sdk.Int(773110),
                EmailSecondReminderInterval: sdk.Int(741238),
                SmsFirstReminder: sdk.Int(216870),
                SmsFirstReminderInterval: sdk.Int(238011),
                SmsSecondReminder: sdk.Int(903150),
                SmsSecondReminderInterval: sdk.Int(644420),
            },
            BusinessHours: &shared.BusinessHoursUpdateModel{
                Fri: &shared.BusinessHourInputModel{
                    EndTime: sdk.Int(42924),
                    Is24Hours: sdk.Bool(false),
                    IsOpen: sdk.Bool(false),
                    StartTime: sdk.Int(339756),
                },
                Mon: &shared.BusinessHourInputModel{
                    EndTime: sdk.Int(333072),
                    Is24Hours: sdk.Bool(false),
                    IsOpen: sdk.Bool(false),
                    StartTime: sdk.Int(727481),
                },
                Sat: &shared.BusinessHourInputModel{
                    EndTime: sdk.Int(99733),
                    Is24Hours: sdk.Bool(false),
                    IsOpen: sdk.Bool(false),
                    StartTime: sdk.Int(584593),
                },
                Sun: &shared.BusinessHourInputModel{
                    EndTime: sdk.Int(475589),
                    Is24Hours: sdk.Bool(false),
                    IsOpen: sdk.Bool(false),
                    StartTime: sdk.Int(756654),
                },
                Thu: &shared.BusinessHourInputModel{
                    EndTime: sdk.Int(820023),
                    Is24Hours: sdk.Bool(false),
                    IsOpen: sdk.Bool(false),
                    StartTime: sdk.Int(251464),
                },
                Tue: &shared.BusinessHourInputModel{
                    EndTime: sdk.Int(298187),
                    Is24Hours: sdk.Bool(false),
                    IsOpen: sdk.Bool(false),
                    StartTime: sdk.Int(932296),
                },
                Wed: &shared.BusinessHourInputModel{
                    EndTime: sdk.Int(150935),
                    Is24Hours: sdk.Bool(false),
                    IsOpen: sdk.Bool(false),
                    StartTime: sdk.Int(993002),
                },
            },
            Defaults: &shared.BusinessDefaultsUpdateModel{
                AutoUpdateCustomer: sdk.Bool(false),
                BusinessNotification: sdk.Bool(false),
                CustomerCity: sdk.Bool(false),
                CustomerState: sdk.Bool(false),
                EmailInfo: sdk.Bool(false),
                EnableUtcTimezone: sdk.Bool(false),
            },
            Email: sdk.String("Casimer.Schulist@gmail.com"),
            Fax: sdk.String("pariatur"),
            FriendlyID: sdk.String("amet"),
            Name: sdk.String("Virginia Flatley"),
            Phone: sdk.String("1-935-733-3778 x723"),
            RegionID: sdk.String("voluptatibus"),
            Settings: &shared.OnlineSettingsUpdateModel{
                BookAheadUnit: sdk.Int(974589),
                BookAheadValue: sdk.Int(162358),
                BookInAdvance: sdk.Int(891581),
                BookingTimerMins: sdk.Int(290841),
                CustomerBookingsPerDay: sdk.Int(700928),
                EnableWorldTimezones: sdk.Bool(false),
            },
            TimezoneName: sdk.String("eos"),
            Website: sdk.String("reprehenderit"),
        },
        ID: "537a8cd9-e731-49c1-b7d5-25f77b114eeb",
        RemoveRegion: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1LocationsIDAppointmentreminders

<p>Use this endpoint to <b>Update</b> Email and SMS appointment reminder settings for the requested location. A valid business <b>location id</b> is required. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>

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
    res, err := s.Locations.PutSetupV1LocationsIDAppointmentreminders(ctx, operations.PutSetupV1LocationsIDAppointmentremindersRequest{
        AppointmentRemindersInputModel: &shared.AppointmentRemindersInputModel{
            EmailFirstReminder: sdk.Int(334018),
            EmailFirstReminderInterval: sdk.Int(176499),
            EmailSecondReminder: sdk.Int(970079),
            EmailSecondReminderInterval: sdk.Int(939161),
            SmsFirstReminder: sdk.Int(444121),
            SmsFirstReminderInterval: sdk.Int(506312),
            SmsSecondReminder: sdk.Int(367046),
            SmsSecondReminderInterval: sdk.Int(999809),
        },
        ID: "c37814d4-c98e-40c2-bb89-eb75dad636c6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1LocationsIDHolidaysHolidayIDClosed

<p>Use this endpoint to <b>Update</b> Business Holidays as Opened or Closed. A valid business <b>location id</b> is required. If not specified, the business location defaults to the primary business location.</p>
<p>Holidays are automatically defined with the initial Post Location endpoint and are based on country code. Find your location holiday codes by using the: <i>GET /setup​/v1​/locations​/{id}</i> endpoint. Change your holidays to open or closed by passing in the <b>holidayId</b> along with the <b>closed</b> boolean value to change the status of a specific holiday. Pass in an <b>asterisk *</b> for the holidayId then all business holidays will be set as defined.</p>

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
    res, err := s.Locations.PutSetupV1LocationsIDHolidaysHolidayIDClosed(ctx, operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest{
        Closed: false,
        HolidayID: "aut",
        ID: "0503d8bb-3118-40f7-b9ae-9e057eb809e2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1LocationsIDRecover

<p>Use this endpoint to <b>Recover</b> a deleted business location. A valid business <b>location id</b> is required.</p>

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
    res, err := s.Locations.PutSetupV1LocationsIDRecover(ctx, operations.PutSetupV1LocationsIDRecoverRequest{
        ID: "810331f3-981d-44c7-80b6-07f3c93c73b9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1LocationsIDSettingsScopeSettingsScope

<p>Use this endpoint to <b>Update</b> a business locations online booking settings scope. A valid business <b>location id</b> is required.</p>
<p>
  <b>settingsScope</b> values are <b>0 = company scope, 1 = business location scope</b>. To inherit the online settings defined in the primary business location, then use value = 0 for company scope. Otherwise, to override the settings for a specific location then use value = 1 for business location scope. <b>Note</b>: You cannot change the settings scope of the Primary Business Location.</p>

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
    res, err := s.Locations.PutSetupV1LocationsIDSettingsScopeSettingsScope(ctx, operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest{
        ID: "da3f2ced-a7e2-43f2-a574-11faf4b7544e",
        SettingsScope: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationViewModel != nil {
        // handle response
    }
}
```
