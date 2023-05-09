# locations

### Available Operations

* [deleteSetupV1LocationsServicesId](#deletesetupv1locationsservicesid) - Unlink Service
* [deleteSetupV1LocationsId](#deletesetupv1locationsid) - Delete Location
* [deleteSetupV1LocationsIdDeleteallimages](#deletesetupv1locationsiddeleteallimages) - Delete All Location Images
* [deleteSetupV1LocationsIdDeleteimage](#deletesetupv1locationsiddeleteimage) - Delete Location Image
* [deleteSetupV1LocationsIdEmailTemplatesMaster](#deletesetupv1locationsidemailtemplatesmaster) - Delete Master Template Settings
* [deleteSetupV1LocationsIdEmailTemplatesTemplateName](#deletesetupv1locationsidemailtemplatestemplatename) - Delete Custom Template
* [deleteSetupV1LocationsIdGoogleServiceAccount](#deletesetupv1locationsidgoogleserviceaccount) - Delete Google Cal Access
* [deleteSetupV1LocationsIdServices](#deletesetupv1locationsidservices) - Delete Linked Services
* [getSetupV1Locations](#getsetupv1locations) - List Locations
* [getSetupV1LocationsServicesId](#getsetupv1locationsservicesid) - Get Linked Service
* [getSetupV1LocationsId](#getsetupv1locationsid) - Get Location
* [getSetupV1LocationsIdAppointmentreminders](#getsetupv1locationsidappointmentreminders) - Get Reminders
* [getSetupV1LocationsIdEmailTemplates](#getsetupv1locationsidemailtemplates) - List Email Templates
* [getSetupV1LocationsIdEmailTemplatesMaster](#getsetupv1locationsidemailtemplatesmaster) - Get Master Template Settings
* [getSetupV1LocationsIdEmailTemplatesTemplateName](#getsetupv1locationsidemailtemplatestemplatename) - Get Email Template
* [getSetupV1LocationsIdServices](#getsetupv1locationsidservices) - List Location Linked Services
* [postSetupV1Locations](#postsetupv1locations) - Create Location
* [postSetupV1LocationsBulk](#postsetupv1locationsbulk) - Create Locations Bulk
* [postSetupV1LocationsIdEmailTemplates](#postsetupv1locationsidemailtemplates) - Create Custom Template
* [postSetupV1LocationsIdEmailTemplatesMaster](#postsetupv1locationsidemailtemplatesmaster) - Create Master Template Settings
* [postSetupV1LocationsIdGoogleServiceAccount](#postsetupv1locationsidgoogleserviceaccount) - Create Google Cal Access
* [postSetupV1LocationsIdServices](#postsetupv1locationsidservices) - Create Linked Service
* [postSetupV1LocationsIdUploadimage](#postsetupv1locationsiduploadimage) - Upload Location Image
* [putSetupV1LocationsId](#putsetupv1locationsid) - Update Location
* [putSetupV1LocationsIdAppointmentreminders](#putsetupv1locationsidappointmentreminders) - Update Reminders
* [putSetupV1LocationsIdHolidaysHolidayIdClosed](#putsetupv1locationsidholidaysholidayidclosed) - Update Location Holidays
* [putSetupV1LocationsIdRecover](#putsetupv1locationsidrecover) - Recover Location
* [putSetupV1LocationsIdSettingsScopeSettingsScope](#putsetupv1locationsidsettingsscopesettingsscope) - Update Location Scope

## deleteSetupV1LocationsServicesId

<p>Use this endpoint to <b>Unlink</b> a location service from a business location. A valid <b>locationService id</b> is required. Find location services by using the <i>GET ​/setup​/v1​/locations​/{id}​/services</i> endpoint. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsServicesIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsServicesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsServicesIdRequest req = new DeleteSetupV1LocationsServicesIdRequest("modi");            

            DeleteSetupV1LocationsServicesIdResponse res = sdk.locations.deleteSetupV1LocationsServicesId(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1LocationsId

<p>Use this endpoint to <b>Delete</b> a business location. A valid business <b>location id</b> is required. The location is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/locations​/{id}​/recover</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsIdRequest req = new DeleteSetupV1LocationsIdRequest("dolorum");            

            DeleteSetupV1LocationsIdResponse res = sdk.locations.deleteSetupV1LocationsId(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1LocationsIdDeleteallimages

<p>Use this endpoint to <b>Delete All</b> location images from the location blob storage container. An option exists to use upper case for matching the subdirectory name. Legacy apps stored pics using upper case while the API uses lower case names.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdDeleteallimagesRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdDeleteallimagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsIdDeleteallimagesRequest req = new DeleteSetupV1LocationsIdDeleteallimagesRequest("pariatur") {{
                uppercase = false;
            }};            

            DeleteSetupV1LocationsIdDeleteallimagesResponse res = sdk.locations.deleteSetupV1LocationsIdDeleteallimages(req);

            if (res.deleteSetupV1LocationsIdDeleteallimages200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1LocationsIdDeleteimage

<p>Use this endpoint to <b>Delete</b> a previously uploaded location image. A valid business <b>location id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdDeleteimageRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdDeleteimageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsIdDeleteimageRequest req = new DeleteSetupV1LocationsIdDeleteimageRequest("nobis");            

            DeleteSetupV1LocationsIdDeleteimageResponse res = sdk.locations.deleteSetupV1LocationsIdDeleteimage(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1LocationsIdEmailTemplatesMaster

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Deleting a custom master email template will reactivate the original default OnSched template settings.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdEmailTemplatesMasterRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdEmailTemplatesMasterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsIdEmailTemplatesMasterRequest req = new DeleteSetupV1LocationsIdEmailTemplatesMasterRequest("delectus");            

            DeleteSetupV1LocationsIdEmailTemplatesMasterResponse res = sdk.locations.deleteSetupV1LocationsIdEmailTemplatesMaster(req);

            if (res.masterEmailTemplateSettingsViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1LocationsIdEmailTemplatesTemplateName

<p>Use this endpoint to <b>Delete</b> a Custom Email Template that was previously created. A valid business <b>location id</b> and email <b>templateName</b> are required. Deleting a custom email template will revert the template back to its default originally created by OnSched. Changes will be reflected in all business locations associated with this company.</p>
<p>The email template endpoints work a little differently than most. When you delete you are deleting the custom template you created, and the original default Email Template created by OnSched will be reactivated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest req = new DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest("quos", "aliquid");            

            DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse res = sdk.locations.deleteSetupV1LocationsIdEmailTemplatesTemplateName(req);

            if (res.contentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1LocationsIdGoogleServiceAccount

<p>Use this endpoint to <b>Delete</b> authorized access to all google calendar users in your organization. Upon deletion Google Calendars will no longer be synced for resources.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdGoogleServiceAccountRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdGoogleServiceAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsIdGoogleServiceAccountRequest req = new DeleteSetupV1LocationsIdGoogleServiceAccountRequest("dolorem");            

            DeleteSetupV1LocationsIdGoogleServiceAccountResponse res = sdk.locations.deleteSetupV1LocationsIdGoogleServiceAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1LocationsIdServices

<p>Use this endpoint to <b>Delete All</b> location linked services from a business location. A valid business <b>location id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdServicesRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1LocationsIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1LocationsIdServicesRequest req = new DeleteSetupV1LocationsIdServicesRequest("qui");            

            DeleteSetupV1LocationsIdServicesResponse res = sdk.locations.deleteSetupV1LocationsIdServices(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Locations

<p>Use this endpoint to <b>List Business Locations</b> associated with your company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsRequest req = new GetSetupV1LocationsRequest() {{
                deleted = false;
                friendlyId = "hic";
                limit = 569574;
                name = "Adrian Kuhn";
                offset = 680545;
                serviceId = "numquam";
            }};            

            GetSetupV1LocationsResponse res = sdk.locations.getSetupV1Locations(req);

            if (res.locationListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1LocationsServicesId

<p>Use this endpoint to <b>Get a Linked Service</b>. A valid <b>locationService id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsServicesIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsServicesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsServicesIdRequest req = new GetSetupV1LocationsServicesIdRequest("ipsa");            

            GetSetupV1LocationsServicesIdResponse res = sdk.locations.getSetupV1LocationsServicesId(req);

            if (res.businessServiceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1LocationsId

<p>Use this endpoint to return a <b>Location</b> object. A valid <b>location id</b> is required. If not specified, the business location defaults to the primary business location. Find all business location id's, by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
<p>
  <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsIdRequest req = new GetSetupV1LocationsIdRequest("iure");            

            GetSetupV1LocationsIdResponse res = sdk.locations.getSetupV1LocationsId(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1LocationsIdAppointmentreminders

<p>Use this endpoint to <b>Get Email and SMS appointment reminder settings</b> for the requested location. A valid business <b>location id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdAppointmentremindersRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdAppointmentremindersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsIdAppointmentremindersRequest req = new GetSetupV1LocationsIdAppointmentremindersRequest("quaerat");            

            GetSetupV1LocationsIdAppointmentremindersResponse res = sdk.locations.getSetupV1LocationsIdAppointmentreminders(req);

            if (res.appointmentReminderViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1LocationsIdEmailTemplates

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdEmailTemplatesRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdEmailTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsIdEmailTemplatesRequest req = new GetSetupV1LocationsIdEmailTemplatesRequest("quidem");            

            GetSetupV1LocationsIdEmailTemplatesResponse res = sdk.locations.getSetupV1LocationsIdEmailTemplates(req);

            if (res.emailTemplateListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1LocationsIdEmailTemplatesMaster

<p>Use this endpoint to get <b>Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding panels and for changing color schemes. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdEmailTemplatesMasterRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdEmailTemplatesMasterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsIdEmailTemplatesMasterRequest req = new GetSetupV1LocationsIdEmailTemplatesMasterRequest("voluptas");            

            GetSetupV1LocationsIdEmailTemplatesMasterResponse res = sdk.locations.getSetupV1LocationsIdEmailTemplatesMaster(req);

            if (res.masterEmailTemplateSettingsViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1LocationsIdEmailTemplatesTemplateName

<p>Use this endpoint to return the requested <b>Email Template</b>. The template is from the primary business location. If it wasn't customized the default template is returned. The response content is in html format. A valid <b>emailTemplate name</b> is required. Find template names by using the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest req = new GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest("eos", "atque");            

            GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse res = sdk.locations.getSetupV1LocationsIdEmailTemplatesTemplateName(req);

            if (res.contentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1LocationsIdServices

<p>Use this endpoint to return a list of <b>Location Linked Services</b>. A valid business <b>location id</b> is required. By default, there are no location linked services attached to a location. Refer to the: <i>POST /setup​/v1​/locations​/{id}​/services</i> for details. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdServicesRequest;
import org.openapis.openapi.models.operations.GetSetupV1LocationsIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1LocationsIdServicesRequest req = new GetSetupV1LocationsIdServicesRequest("fugiat") {{
                limit = 67249;
                offset = 743835;
            }};            

            GetSetupV1LocationsIdServicesResponse res = sdk.locations.getSetupV1LocationsIdServices(req);

            if (res.businessServiceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Locations

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1LocationsResponse;
import org.openapis.openapi.models.shared.AddressInputModel;
import org.openapis.openapi.models.shared.AppointmentRemindersInputModel;
import org.openapis.openapi.models.shared.BusinessDefaultsInputModel;
import org.openapis.openapi.models.shared.BusinessHourInputModel;
import org.openapis.openapi.models.shared.BusinessHoursInputModel;
import org.openapis.openapi.models.shared.LocationInputModel;
import org.openapis.openapi.models.shared.OnlineSettingsInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LocationInputModel req = new LocationInputModel() {{
                address = new AddressInputModel() {{
                    addressLine1 = "iusto";
                    addressLine2 = "voluptate";
                    city = "Leuschkestead";
                    country = "Tokelau";
                    postalCode = "94246-9210";
                    state = "amet";
                }};;
                adminEmail = "optio";
                adminName = "accusamus";
                appointmentReminders = new AppointmentRemindersInputModel() {{
                    emailFirstReminder = 320017;
                    emailFirstReminderInterval = 904425;
                    emailSecondReminder = 383464;
                    emailSecondReminderInterval = 645785;
                    smsFirstReminder = 588317;
                    smsFirstReminderInterval = 324683;
                    smsSecondReminder = 831049;
                    smsSecondReminderInterval = 519711;
                }};;
                businessHours = new BusinessHoursInputModel() {{
                    fri = new BusinessHourInputModel() {{
                        endTime = 628982;
                        is24Hours = false;
                        isOpen = false;
                        startTime = 55;
                    }};;
                    mon = new BusinessHourInputModel() {{
                        endTime = 872651;
                        is24Hours = false;
                        isOpen = false;
                        startTime = 311860;
                    }};;
                    sat = new BusinessHourInputModel() {{
                        endTime = 273542;
                        is24Hours = false;
                        isOpen = false;
                        startTime = 425451;
                    }};;
                    sun = new BusinessHourInputModel() {{
                        endTime = 798047;
                        is24Hours = false;
                        isOpen = false;
                        startTime = 885338;
                    }};;
                    thu = new BusinessHourInputModel() {{
                        endTime = 185636;
                        is24Hours = false;
                        isOpen = false;
                        startTime = 679880;
                    }};;
                    tue = new BusinessHourInputModel() {{
                        endTime = 952792;
                        is24Hours = false;
                        isOpen = false;
                        startTime = 456130;
                    }};;
                    wed = new BusinessHourInputModel() {{
                        endTime = 687488;
                        is24Hours = false;
                        isOpen = false;
                        startTime = 483409;
                    }};;
                }};;
                defaults = new BusinessDefaultsInputModel() {{
                    autoUpdateCustomer = false;
                    businessNotification = false;
                    customerCity = false;
                    customerState = false;
                    emailInfo = false;
                    enableUtcTimezone = false;
                }};;
                email = "Pat73@gmail.com";
                fax = "accusamus";
                friendlyId = "numquam";
                name = "Florence Will";
                phone = "721-573-6422";
                regionId = "qui";
                settings = new OnlineSettingsInputModel() {{
                    bookAheadUnit = 586784;
                    bookAheadValue = 807581;
                    bookInAdvance = 863856;
                    bookingTimerMins = 747080;
                    customerBookingsPerDay = 117531;
                    enableWorldTimezones = false;
                }};;
                timezoneName = "laborum";
                website = "totam";
            }};            

            PostSetupV1LocationsResponse res = sdk.locations.postSetupV1Locations(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1LocationsBulk

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1LocationsBulkResponse;
import org.openapis.openapi.models.shared.AddressInputModel;
import org.openapis.openapi.models.shared.AppointmentRemindersInputModel;
import org.openapis.openapi.models.shared.BusinessDefaultsInputModel;
import org.openapis.openapi.models.shared.BusinessHourInputModel;
import org.openapis.openapi.models.shared.BusinessHoursInputModel;
import org.openapis.openapi.models.shared.LocationInputModel;
import org.openapis.openapi.models.shared.LocationsInputModel;
import org.openapis.openapi.models.shared.OnlineSettingsInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LocationsInputModel req = new LocationsInputModel() {{
                locations = new org.openapis.openapi.models.shared.LocationInputModel[]{{
                    add(new LocationInputModel() {{
                        address = new AddressInputModel() {{
                            addressLine1 = "dolores";
                            addressLine2 = "distinctio";
                            city = "Hyattport";
                            country = "Mauritius";
                            postalCode = "12114-1379";
                            state = "voluptatem";
                        }};
                        adminEmail = "cumque";
                        adminName = "soluta";
                        appointmentReminders = new AppointmentRemindersInputModel() {{
                            emailFirstReminder = 748664;
                            emailFirstReminderInterval = 92596;
                            emailSecondReminder = 903720;
                            emailSecondReminderInterval = 217450;
                            smsFirstReminder = 83422;
                            smsFirstReminderInterval = 749255;
                            smsSecondReminder = 552193;
                            smsSecondReminderInterval = 731694;
                        }};
                        businessHours = new BusinessHoursInputModel() {{
                            fri = new BusinessHourInputModel() {{
                                endTime = 584476;
                                is24Hours = false;
                                isOpen = false;
                                startTime = 45614;
                            }};
                            mon = new BusinessHourInputModel() {{
                                endTime = 961937;
                                is24Hours = false;
                                isOpen = false;
                                startTime = 209157;
                            }};
                            sat = new BusinessHourInputModel() {{
                                endTime = 292147;
                                is24Hours = false;
                                isOpen = false;
                                startTime = 286915;
                            }};
                            sun = new BusinessHourInputModel() {{
                                endTime = 240829;
                                is24Hours = false;
                                isOpen = false;
                                startTime = 677263;
                            }};
                            thu = new BusinessHourInputModel() {{
                                endTime = 100294;
                                is24Hours = false;
                                isOpen = false;
                                startTime = 63038;
                            }};
                            tue = new BusinessHourInputModel() {{
                                endTime = 16429;
                                is24Hours = false;
                                isOpen = false;
                                startTime = 555649;
                            }};
                            wed = new BusinessHourInputModel() {{
                                endTime = 929530;
                                is24Hours = false;
                                isOpen = false;
                                startTime = 9240;
                            }};
                        }};
                        defaults = new BusinessDefaultsInputModel() {{
                            autoUpdateCustomer = false;
                            businessNotification = false;
                            customerCity = false;
                            customerState = false;
                            emailInfo = false;
                            enableUtcTimezone = false;
                        }};
                        email = "River.Schaden70@hotmail.com";
                        fax = "cupiditate";
                        friendlyId = "qui";
                        name = "Marsha Kuhic";
                        phone = "963-394-2894 x97746";
                        regionId = "facilis";
                        settings = new OnlineSettingsInputModel() {{
                            bookAheadUnit = 874288;
                            bookAheadValue = 498140;
                            bookInAdvance = 293020;
                            bookingTimerMins = 844550;
                            customerBookingsPerDay = 848944;
                            enableWorldTimezones = false;
                        }};
                        timezoneName = "sequi";
                        website = "natus";
                    }}),
                }};
            }};            

            PostSetupV1LocationsBulkResponse res = sdk.locations.postSetupV1LocationsBulk(req);

            if (res.locationViewModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1LocationsIdEmailTemplates

<p>Use this endpoint to a <b>Create</b> a Custom Email Template. You must convert the content to a base64 encoded string. Updates to the primary business location create company scoped custom templates. Updates to non-primary business locations create business location scoped custom templates. The master template cannot be updated with this endpoint.</p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new email template that will be used instead. If you delete it, you are deleting the custom template you created and the original default template created by OnSched will be reactivated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdEmailTemplatesRequest;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdEmailTemplatesResponse;
import org.openapis.openapi.models.shared.EmailTemplateInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1LocationsIdEmailTemplatesRequest req = new PostSetupV1LocationsIdEmailTemplatesRequest("aut") {{
                emailTemplateInputModel = new EmailTemplateInputModel() {{
                    templateContent = "voluptatibus";
                    templateName = "exercitationem";
                }};;
            }};            

            PostSetupV1LocationsIdEmailTemplatesResponse res = sdk.locations.postSetupV1LocationsIdEmailTemplates(req);

            if (res.contentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1LocationsIdEmailTemplatesMaster

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates​/masterSettings</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it, you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdEmailTemplatesMasterRequest;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdEmailTemplatesMasterResponse;
import org.openapis.openapi.models.shared.MasterTemplateSettingsInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1LocationsIdEmailTemplatesMasterRequest req = new PostSetupV1LocationsIdEmailTemplatesMasterRequest("fugit") {{
                masterTemplateSettingsInputModel = new MasterTemplateSettingsInputModel() {{
                    centerEmailContent = false;
                    centerEmailContentPanel = false;
                    centerEmailFooter = false;
                    contentBackgroundColor = "porro";
                    contentColor = "maiores";
                    contentLinkColor = "doloribus";
                    emailBackgroundColor = "iusto";
                    emailColor = "eligendi";
                    emailLinkColor = "ducimus";
                    footerFontSize = "alias";
                    footerLogoHeight = "officia";
                    footerLogoPadding = "tempora";
                    footerPanelEmailContact = false;
                    footerPanelPhoneContact = false;
                    footerPanelWebsiteContact = false;
                    headerLogoHeight = "ipsam";
                    headerLogoPadding = "ea";
                    panelBackgroundColor = "aspernatur";
                    panelColor = "vel";
                    panelLinkColor = "possimus";
                    privacyPolicyLink = "magnam";
                    showContentPanel = false;
                    showFooterLogo = false;
                    showFooterPanel = false;
                    showHeaderLogo = false;
                    showHeaderPanel = false;
                }};;
            }};            

            PostSetupV1LocationsIdEmailTemplatesMasterResponse res = sdk.locations.postSetupV1LocationsIdEmailTemplatesMaster(req);

            if (res.masterEmailTemplateSettingsViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1LocationsIdGoogleServiceAccount

<p>Use this endpoint to <b>Authorize Access</b> to google calendar users in your organization. You must create/have a Google Service account as an admin of your GSuite, then save the credentials as a Json Key file. This <b>Json Key</b> and a valid business <b>location id</b> are required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdGoogleServiceAccountRequest;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdGoogleServiceAccountResponse;
import org.openapis.openapi.models.shared.GoogleServiceAccountCreds;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1LocationsIdGoogleServiceAccountRequest req = new PostSetupV1LocationsIdGoogleServiceAccountRequest("ex") {{
                googleServiceAccountCreds = new GoogleServiceAccountCreds() {{
                    authProviderX509CertUrl = "laudantium";
                    authUri = "dicta";
                    clientEmail = "dolor";
                    clientId = "maiores";
                    clientX509CertUrl = "quasi";
                    privateKey = "ex";
                    privateKeyId = "nulla";
                    projectId = "excepturi";
                    tokenUri = "voluptatibus";
                    type = "nostrum";
                }};;
            }};            

            PostSetupV1LocationsIdGoogleServiceAccountResponse res = sdk.locations.postSetupV1LocationsIdGoogleServiceAccount(req);

            if (res.googleServiceAccountCreds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1LocationsIdServices

<p>Use this endpoint to <b>Link Services</b> to a location object. A valid business <b>location id</b> is required. By default, there are <i>no services linked</i> to a location. </p>
<p>Services are definable globally at the Company level and associated with the Primary Business Location, or at a Secondary Business Location. When accessing the Services endpoints, by default, API consumers are provided with a <b>combined</b> list of Services defined from both the Primary and Secondary Business Location.</p>
<p>If necessary, the list of Service(s) provided can be cherry-picked/linked to <b>only include specific Service(s)</b> by using this endpoint. This allows for a subset of defined Services to be provided for a location.</p>
<p>Supplying the list of services ids to cherry-pick/link to the location in the request body will explicitly define which Primary Location Services are offered by the specified business location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdServicesRequest;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1LocationsIdServicesRequest req = new PostSetupV1LocationsIdServicesRequest("quisquam") {{
                requestBody = new String[]{{
                    add("ea"),
                    add("impedit"),
                    add("corporis"),
                    add("veniam"),
                }};
            }};            

            PostSetupV1LocationsIdServicesResponse res = sdk.locations.postSetupV1LocationsIdServices(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1LocationsIdUploadimage

<p>Use this endpoint to <b>Upload</b> an image to a location object. A valid business <b>location id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdUploadimageRequest;
import org.openapis.openapi.models.operations.PostSetupV1LocationsIdUploadimageResponse;
import org.openapis.openapi.models.shared.ResourceImageInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1LocationsIdUploadimageRequest req = new PostSetupV1LocationsIdUploadimageRequest("inventore") {{
                resourceImageInputModel = new ResourceImageInputModel() {{
                    imageFileData = "magnam";
                    imageFileName = "ea";
                }};;
            }};            

            PostSetupV1LocationsIdUploadimageResponse res = sdk.locations.postSetupV1LocationsIdUploadimage(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1LocationsId

<p>Use this endpoint to <b>Update</b> a business location object. A valid business <b>location id</b> is required. The optional removeRegion query parameter can be used to remove the region relationship from the location.</p>
<p>If the settings element is populated the scope will be set to the business location with the settings supplied. If your settings are uniform across all locations, then do not supply the settings element and the location will use the settings defined on the primary business location (company scoped). Company scoped settings cascade down to the locations. You can override any location that needs different settings by providing settings in the update model. Use the <i>PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}</i> endpoint to change the settings scope only. This is typically used when switching from business location scope back to company.</p>
<p>Refer to: <i><b>POST ​/setup​/v1​/locations</b></i> endpoint for details.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdResponse;
import org.openapis.openapi.models.shared.AddressUpdateModel;
import org.openapis.openapi.models.shared.AppointmentRemindersInputModel;
import org.openapis.openapi.models.shared.BusinessDefaultsUpdateModel;
import org.openapis.openapi.models.shared.BusinessHourInputModel;
import org.openapis.openapi.models.shared.BusinessHoursUpdateModel;
import org.openapis.openapi.models.shared.LocationUpdateModel;
import org.openapis.openapi.models.shared.OnlineSettingsUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1LocationsIdRequest req = new PutSetupV1LocationsIdRequest("consectetur") {{
                locationUpdateModel = new LocationUpdateModel() {{
                    address = new AddressUpdateModel() {{
                        addressLine1 = "recusandae";
                        addressLine2 = "aspernatur";
                        city = "North Veda";
                        country = "Reunion";
                        postalCode = "05731";
                        state = "accusamus";
                    }};;
                    adminEmail = "inventore";
                    adminName = "non";
                    appointmentReminders = new AppointmentRemindersInputModel() {{
                        emailFirstReminder = 89603;
                        emailFirstReminderInterval = 677412;
                        emailSecondReminder = 672048;
                        emailSecondReminderInterval = 810424;
                        smsFirstReminder = 245367;
                        smsFirstReminderInterval = 432148;
                        smsSecondReminder = 420539;
                        smsSecondReminderInterval = 752135;
                    }};;
                    businessHours = new BusinessHoursUpdateModel() {{
                        fri = new BusinessHourInputModel() {{
                            endTime = 557369;
                            is24Hours = false;
                            isOpen = false;
                            startTime = 829603;
                        }};;
                        mon = new BusinessHourInputModel() {{
                            endTime = 860552;
                            is24Hours = false;
                            isOpen = false;
                            startTime = 379034;
                        }};;
                        sat = new BusinessHourInputModel() {{
                            endTime = 727044;
                            is24Hours = false;
                            isOpen = false;
                            startTime = 96549;
                        }};;
                        sun = new BusinessHourInputModel() {{
                            endTime = 270328;
                            is24Hours = false;
                            isOpen = false;
                            startTime = 256139;
                        }};;
                        thu = new BusinessHourInputModel() {{
                            endTime = 131482;
                            is24Hours = false;
                            isOpen = false;
                            startTime = 591935;
                        }};;
                        tue = new BusinessHourInputModel() {{
                            endTime = 55374;
                            is24Hours = false;
                            isOpen = false;
                            startTime = 476477;
                        }};;
                        wed = new BusinessHourInputModel() {{
                            endTime = 301598;
                            is24Hours = false;
                            isOpen = false;
                            startTime = 487935;
                        }};;
                    }};;
                    defaults = new BusinessDefaultsUpdateModel() {{
                        autoUpdateCustomer = false;
                        businessNotification = false;
                        customerCity = false;
                        customerState = false;
                        emailInfo = false;
                        enableUtcTimezone = false;
                    }};;
                    email = "Jaden_Klocko@gmail.com";
                    fax = "reprehenderit";
                    friendlyId = "quidem";
                    name = "Bernard Kerluke";
                    phone = "1-670-266-2787";
                    regionId = "fuga";
                    settings = new OnlineSettingsUpdateModel() {{
                        bookAheadUnit = 259422;
                        bookAheadValue = 178367;
                        bookInAdvance = 373813;
                        bookingTimerMins = 69859;
                        customerBookingsPerDay = 587600;
                        enableWorldTimezones = false;
                    }};;
                    timezoneName = "consequatur";
                    website = "tempora";
                }};;
                removeRegion = false;
            }};            

            PutSetupV1LocationsIdResponse res = sdk.locations.putSetupV1LocationsId(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1LocationsIdAppointmentreminders

<p>Use this endpoint to <b>Update</b> Email and SMS appointment reminder settings for the requested location. A valid business <b>location id</b> is required. </p>
<p>
  <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
<p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
<p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdAppointmentremindersRequest;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdAppointmentremindersResponse;
import org.openapis.openapi.models.shared.AppointmentRemindersInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1LocationsIdAppointmentremindersRequest req = new PutSetupV1LocationsIdAppointmentremindersRequest("ipsam") {{
                appointmentRemindersInputModel = new AppointmentRemindersInputModel() {{
                    emailFirstReminder = 133465;
                    emailFirstReminderInterval = 197054;
                    emailSecondReminder = 779192;
                    emailSecondReminderInterval = 459856;
                    smsFirstReminder = 925164;
                    smsFirstReminderInterval = 44612;
                    smsSecondReminder = 715179;
                    smsSecondReminderInterval = 799796;
                }};;
            }};            

            PutSetupV1LocationsIdAppointmentremindersResponse res = sdk.locations.putSetupV1LocationsIdAppointmentreminders(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1LocationsIdHolidaysHolidayIdClosed

<p>Use this endpoint to <b>Update</b> Business Holidays as Opened or Closed. A valid business <b>location id</b> is required. If not specified, the business location defaults to the primary business location.</p>
<p>Holidays are automatically defined with the initial Post Location endpoint and are based on country code. Find your location holiday codes by using the: <i>GET /setup​/v1​/locations​/{id}</i> endpoint. Change your holidays to open or closed by passing in the <b>holidayId</b> along with the <b>closed</b> boolean value to change the status of a specific holiday. Pass in an <b>asterisk *</b> for the holidayId then all business holidays will be set as defined.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest req = new PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest(false, "inventore", "nihil");            

            PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse res = sdk.locations.putSetupV1LocationsIdHolidaysHolidayIdClosed(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1LocationsIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted business location. A valid business <b>location id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdRecoverRequest;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdRecoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1LocationsIdRecoverRequest req = new PutSetupV1LocationsIdRecoverRequest("accusamus");            

            PutSetupV1LocationsIdRecoverResponse res = sdk.locations.putSetupV1LocationsIdRecover(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1LocationsIdSettingsScopeSettingsScope

<p>Use this endpoint to <b>Update</b> a business locations online booking settings scope. A valid business <b>location id</b> is required.</p>
<p>
  <b>settingsScope</b> values are <b>0 = company scope, 1 = business location scope</b>. To inherit the online settings defined in the primary business location, then use value = 0 for company scope. Otherwise, to override the settings for a specific location then use value = 1 for business location scope. <b>Note</b>: You cannot change the settings scope of the Primary Business Location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest;
import org.openapis.openapi.models.operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest req = new PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest("odio", "occaecati");            

            PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse res = sdk.locations.putSetupV1LocationsIdSettingsScopeSettingsScope(req);

            if (res.locationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
