# services

### Available Operations

* [deleteSetupV1ServicesAllocationsId](#deletesetupv1servicesallocationsid) - Delete Allocation
* [deleteSetupV1ServicesBlockId](#deletesetupv1servicesblockid) - Delete Block
* [deleteSetupV1ServicesCalendarId](#deletesetupv1servicescalendarid) - Delete Service Links
* [deleteSetupV1ServicesId](#deletesetupv1servicesid) - Delete Service
* [deleteSetupV1ServicesIdDeleteimage](#deletesetupv1servicesiddeleteimage) - Delete Service Image
* [getSetupV1Services](#getsetupv1services) - List Services
* [getSetupV1ServicesAllocationsId](#getsetupv1servicesallocationsid) - Get Allocation
* [getSetupV1ServicesBlocksId](#getsetupv1servicesblocksid) - Get Block
* [getSetupV1ServicesId](#getsetupv1servicesid) - Get Service
* [getSetupV1ServicesIdAllocations](#getsetupv1servicesidallocations) - List Service Allocations
* [getSetupV1ServicesIdAvailability](#getsetupv1servicesidavailability) - Get Weekly Availability
* [getSetupV1ServicesIdBlocks](#getsetupv1servicesidblocks) - List Service Blocks
* [getSetupV1ServicesIdCalendar](#getsetupv1servicesidcalendar) - Get Linked Calendar
* [getSetupV1ServicesIdResources](#getsetupv1servicesidresources) - List Resources for Service
* [postSetupV1Services](#postsetupv1services) - Create Service
* [postSetupV1ServicesCalendar](#postsetupv1servicescalendar) - Link Service to Calendar
* [postSetupV1ServicesIdAllocations](#postsetupv1servicesidallocations) - Create Allocation
* [postSetupV1ServicesIdAllocationsBulk](#postsetupv1servicesidallocationsbulk) - Create Allocations Bulk
* [postSetupV1ServicesIdBlock](#postsetupv1servicesidblock) - Create Block
* [postSetupV1ServicesIdUploadimage](#postsetupv1servicesiduploadimage) - Upload Service Image
* [putSetupV1ServicesAllocationsId](#putsetupv1servicesallocationsid) - Update Allocation
* [putSetupV1ServicesBlockId](#putsetupv1servicesblockid) - Update Block
* [putSetupV1ServicesId](#putsetupv1servicesid) - Update Service
* [putSetupV1ServicesIdAvailability](#putsetupv1servicesidavailability) - Update Weekly Availability
* [putSetupV1ServicesIdRecover](#putsetupv1servicesidrecover) - Recover Service

## deleteSetupV1ServicesAllocationsId

<p>Use this endpoint to permanently <b>Delete</b> a service allocation. A valid <b>serviceAllocation id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesAllocationsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesAllocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ServicesAllocationsIdRequest req = new DeleteSetupV1ServicesAllocationsIdRequest("inventore");            

            DeleteSetupV1ServicesAllocationsIdResponse res = sdk.services.deleteSetupV1ServicesAllocationsId(req);

            if (res.serviceAllocationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ServicesBlockId

<p>Use this endpoint to permanently <b>Delete</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesBlockIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesBlockIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ServicesBlockIdRequest req = new DeleteSetupV1ServicesBlockIdRequest("totam");            

            DeleteSetupV1ServicesBlockIdResponse res = sdk.services.deleteSetupV1ServicesBlockId(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ServicesCalendarId

<p>Use this endpoint to <b>Delete</b> service links from the calendar specified. A valid <b>calendar id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesCalendarIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesCalendarIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ServicesCalendarIdRequest req = new DeleteSetupV1ServicesCalendarIdRequest("eligendi");            

            DeleteSetupV1ServicesCalendarIdResponse res = sdk.services.deleteSetupV1ServicesCalendarId(req);

            if (res.serviceCalendarViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ServicesId

<p>Use this endpoint to <b>Delete</b> a service object. A valid <b>service id</b> is required. The service is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/services​/{id}​/recover</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ServicesIdRequest req = new DeleteSetupV1ServicesIdRequest("voluptatem");            

            DeleteSetupV1ServicesIdResponse res = sdk.services.deleteSetupV1ServicesId(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ServicesIdDeleteimage

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded service image. A valid <b>service id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesIdDeleteimageRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicesIdDeleteimageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ServicesIdDeleteimageRequest req = new DeleteSetupV1ServicesIdDeleteimageRequest("esse");            

            DeleteSetupV1ServicesIdDeleteimageResponse res = sdk.services.deleteSetupV1ServicesIdDeleteimage(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Services

<p>Use this endpoint to return a <b>List of Service</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesRequest req = new GetSetupV1ServicesRequest() {{
                deleted = false;
                limit = 824798;
                locationId = "beatae";
                offset = 668606;
                serviceGroupId = 817339;
            }};            

            GetSetupV1ServicesResponse res = sdk.services.getSetupV1Services(req);

            if (res.serviceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesAllocationsId

<p>Use this endpoint to <b>Get a Service Allocation</b>. A valid <b>serviceAllocation id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesAllocationsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesAllocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesAllocationsIdRequest req = new GetSetupV1ServicesAllocationsIdRequest("molestiae");            

            GetSetupV1ServicesAllocationsIdResponse res = sdk.services.getSetupV1ServicesAllocationsId(req);

            if (res.serviceAllocationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesBlocksId

<p>Use this endpoint to <b>Get a Service Block</b>. A valid <b>serviceBlock id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesBlocksIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesBlocksIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesBlocksIdRequest req = new GetSetupV1ServicesBlocksIdRequest("accusamus");            

            GetSetupV1ServicesBlocksIdResponse res = sdk.services.getSetupV1ServicesBlocksId(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesId

<p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /setup/v1/services</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesIdRequest req = new GetSetupV1ServicesIdRequest(733289);            

            GetSetupV1ServicesIdResponse res = sdk.services.getSetupV1ServicesId(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesIdAllocations

<p>Use this endpoint to return a <b>List of Service Allocations</b> for a specified service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b> where the events are offered on specific dates and times. Retrieve all allocations for a location by passing in 0 as the service id.</p>
<p>The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdAllocationsRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdAllocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesIdAllocationsRequest req = new GetSetupV1ServicesIdAllocationsRequest("ea") {{
                endDate = OffsetDateTime.parse("2022-08-17T16:02:36.189Z");
                limit = 702952;
                locationId = "laudantium";
                offset = 357207;
                resourceId = "officiis";
                startDate = OffsetDateTime.parse("2020-10-15T16:19:08.064Z");
            }};            

            GetSetupV1ServicesIdAllocationsResponse res = sdk.services.getSetupV1ServicesIdAllocations(req);

            if (res.serviceAllocationListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesIdAvailability

<p>Use this endpoint to return the <b>Weekly Service Availability</b> for an appointment service. A valid <b>service id</b> is required. Weekly availability is returned for services where the Type = 1. For event type services, where service Type = 2, refer to the <i>GET ​/setup​/v1​/services​/{id}​/allocations</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdAvailabilityRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdAvailabilityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesIdAvailabilityRequest req = new GetSetupV1ServicesIdAvailabilityRequest("alias");            

            GetSetupV1ServicesIdAvailabilityResponse res = sdk.services.getSetupV1ServicesIdAvailability(req);

            if (res.serviceAvailabilityViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesIdBlocks

<p>Use this endpoint to return a list of <b>Service Blocks</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdBlocksRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdBlocksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesIdBlocksRequest req = new GetSetupV1ServicesIdBlocksRequest("quidem") {{
                endDate = OffsetDateTime.parse("2021-02-28T18:13:48.502Z");
                limit = 34070;
                offset = 710456;
                startDate = OffsetDateTime.parse("2022-06-21T04:17:16.724Z");
            }};            

            GetSetupV1ServicesIdBlocksResponse res = sdk.services.getSetupV1ServicesIdBlocks(req);

            if (res.serviceBlockListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesIdCalendar

<p>Use this endpoint to <b>Get the Linked Calendar</b> for the service requested. A valid <b>service id</b> is required. A service can only be linked to one calendar in a location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdCalendarRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdCalendarResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesIdCalendarRequest req = new GetSetupV1ServicesIdCalendarRequest("odio") {{
                locationId = "praesentium";
            }};            

            GetSetupV1ServicesIdCalendarResponse res = sdk.services.getSetupV1ServicesIdCalendar(req);

            if (res.serviceCalendarViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicesIdResources

<p>Use this endpoint to return a list of <b>Resources</b> that provide the requested service. A valid <b>service id</b> is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdResourcesRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicesIdResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicesIdResourcesRequest req = new GetSetupV1ServicesIdResourcesRequest("explicabo") {{
                googleAuthReturnUrl = "corporis";
                limit = 621473;
                offset = 937117;
                outlookAuthReturnUrl = "adipisci";
            }};            

            GetSetupV1ServicesIdResourcesResponse res = sdk.services.getSetupV1ServicesIdResources(req);

            if (res.resourceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Services

<p>Use this endpoint to <b>Create</b> a new service. If not specified, the business location defaults to the primary business location. Note: Posting a service to the Primary Business Location will scope as company scoped and make the service available to all locations. If you want a service to only be available from a specific location, include the business location id.</p>
<p>Required fields: <b>Name</b> and <b>Duration</b></p>
<p>The service <b>Type</b> is either, <b>1 = Appointment</b> or <b>2 = Event</b>. Default is 1 if not specified.</p>
<p>For type = 1, Appointments - Create an availability entry for each weekday to provide the service for. <b>All days of the week must be provided when adding service availability.</b> Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. Start and End Times are entered in military format. e.g., 800 is 8:00am, 2230 is 10:30pm. If not provided, it defaults to the primary location business hours.</p>
<p>We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. If you require times in between specified hours to be unavailable, use the service block endpoint at: <i>POST ​/setup​/v1​/services​/{id}​/block</i>.</p>
<p>For type = 2, Events - Create service allocations for their availability. Refer to the: <i>POST /setup​/v1​/services​/{id}​/allocations</i> to set up service allocations for the event.</p>
<p>Options are available for customer selected durations, for details: <a href="https://docs.onsched.com/docs/services-overview#variable-duration">Variable Duration Overview</a></p>
<p>Additional parameters include but are not limited to bookingLimit, maxCapacity and maxGroupSize. For details: <a href="https://docs.onsched.com/docs/service-max-capacity">Service Limits Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ServicesResponse;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.CustomFieldInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceFeesInputModel;
import org.openapis.openapi.models.shared.ServiceInputModel;
import org.openapis.openapi.models.shared.ServiceOptionsInputModel;
import org.openapis.openapi.models.shared.ServiceSettingsInputModel;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ServiceInputModel req = new ServiceInputModel() {{
                availability = new AvailabilityInputModel() {{
                    fri = new WeekDayInputModel() {{
                        endTime = 630871;
                        startTime = 282837;
                    }};;
                    mon = new WeekDayInputModel() {{
                        endTime = 693746;
                        startTime = 339631;
                    }};;
                    sat = new WeekDayInputModel() {{
                        endTime = 106255;
                        startTime = 600213;
                    }};;
                    sun = new WeekDayInputModel() {{
                        endTime = 476946;
                        startTime = 963198;
                    }};;
                    thu = new WeekDayInputModel() {{
                        endTime = 585593;
                        startTime = 147801;
                    }};;
                    tue = new WeekDayInputModel() {{
                        endTime = 253625;
                        startTime = 256916;
                    }};;
                    wed = new WeekDayInputModel() {{
                        endTime = 201010;
                        startTime = 873557;
                    }};;
                }};;
                bookingInterval = 637856;
                bookingLimit = 491892;
                customFields = new CustomFieldInputModel() {{
                    field1 = "optio";
                    field10 = "necessitatibus";
                    field2 = "corporis";
                    field3 = "qui";
                    field4 = "expedita";
                    field5 = "voluptatum";
                    field6 = "cupiditate";
                    field7 = "minima";
                    field8 = "placeat";
                    field9 = "enim";
                }};;
                description = "neque";
                duration = 446877;
                fees = new ServiceFeesInputModel() {{
                    cancellationFeeAmount = 7963.97;
                    cancellationFeeTaxable = false;
                    feeAmount = 4330.77;
                    feeTaxable = false;
                    nonRefundable = false;
                }};;
                locationId = "modi";
                maxCapacity = 357347;
                maxGroupSize = 298264;
                mediaPageUrl = "voluptates";
                name = "Randolph Bayer";
                options = new ServiceOptionsInputModel() {{
                    consumerPadding = false;
                    defaultService = false;
                    durationInterval = 289913;
                    durationMax = 520875;
                    durationMin = 577709;
                    durationSelect = false;
                    padding = 375994;
                }};;
                public_ = false;
                serviceGroupId = "quo";
                settings = new ServiceSettingsInputModel() {{
                    bookAheadUnit = 242099;
                    bookAheadValue = 795591;
                    bookInAdvance = 684553;
                }};;
                type = "nostrum";
            }};            

            PostSetupV1ServicesResponse res = sdk.services.postSetupV1Services(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ServicesCalendar

<p>Use this endpoint to <b>Link a Service</b> to a calendar. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ServicesCalendarResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceCalendarInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ServiceCalendarInputModel req = new ServiceCalendarInputModel() {{
                calendarId = "impedit";
                locationId = "delectus";
                serviceId = "tempore";
            }};            

            PostSetupV1ServicesCalendarResponse res = sdk.services.postSetupV1ServicesCalendar(req);

            if (res.serviceCalendarViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ServicesIdAllocations

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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdAllocationsRequest;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdAllocationsResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceAllocationInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ServicesIdAllocationsRequest req = new PostSetupV1ServicesIdAllocationsRequest("odit") {{
                serviceAllocationInputModel = new ServiceAllocationInputModel() {{
                    bookingLimit = 997437;
                    endDate = LocalDate.parse("2021-11-29");
                    endTime = 441321;
                    locationId = "aperiam";
                    reason = "odio";
                    repeat = new RepeatInputModel() {{
                        frequency = "minima";
                        interval = 448369;
                        monthDay = 496915;
                        monthType = "excepturi";
                        weekdays = "dolores";
                    }};;
                    repeats = false;
                    resourceId = "error";
                    startDate = LocalDate.parse("2022-07-03");
                    startTime = 452729;
                }};;
            }};            

            PostSetupV1ServicesIdAllocationsResponse res = sdk.services.postSetupV1ServicesIdAllocations(req);

            if (res.serviceAllocationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ServicesIdAllocationsBulk

<p>Use this endpoint to <b>Create</b> bulk service allocations. A valid <b>service id</b> is required. Use this endpoint only if you need to POST multiple service allocations in one transaction. For details refer to: <a href="POST ​/setup​/v1​/services​/{id}​/allocations">Post Service Allocation</a></p>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdAllocationsBulkRequest;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdAllocationsBulkResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceAllocationInputModel;
import org.openapis.openapi.models.shared.ServiceAllocationsInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ServicesIdAllocationsBulkRequest req = new PostSetupV1ServicesIdAllocationsBulkRequest("itaque") {{
                serviceAllocationsInputModel = new ServiceAllocationsInputModel() {{
                    serviceAllocations = new org.openapis.openapi.models.shared.ServiceAllocationInputModel[]{{
                        add(new ServiceAllocationInputModel() {{
                            bookingLimit = 763165;
                            endDate = LocalDate.parse("2022-09-09");
                            endTime = 416692;
                            locationId = "officiis";
                            reason = "placeat";
                            repeat = new RepeatInputModel() {{
                                frequency = "quidem";
                                interval = 348192;
                                monthDay = 463344;
                                monthType = "dolorem";
                                weekdays = "modi";
                            }};
                            repeats = false;
                            resourceId = "ipsa";
                            startDate = LocalDate.parse("2021-04-01");
                            startTime = 194901;
                        }}),
                        add(new ServiceAllocationInputModel() {{
                            bookingLimit = 918547;
                            endDate = LocalDate.parse("2022-10-05");
                            endTime = 936928;
                            locationId = "veniam";
                            reason = "animi";
                            repeat = new RepeatInputModel() {{
                                frequency = "dolores";
                                interval = 724994;
                                monthDay = 115898;
                                monthType = "consequuntur";
                                weekdays = "necessitatibus";
                            }};
                            repeats = false;
                            resourceId = "nobis";
                            startDate = LocalDate.parse("2022-07-03");
                            startTime = 980486;
                        }}),
                        add(new ServiceAllocationInputModel() {{
                            bookingLimit = 87382;
                            endDate = LocalDate.parse("2022-08-12");
                            endTime = 863471;
                            locationId = "libero";
                            reason = "excepturi";
                            repeat = new RepeatInputModel() {{
                                frequency = "occaecati";
                                interval = 367917;
                                monthDay = 306382;
                                monthType = "nostrum";
                                weekdays = "doloribus";
                            }};
                            repeats = false;
                            resourceId = "eligendi";
                            startDate = LocalDate.parse("2022-05-16");
                            startTime = 944950;
                        }}),
                    }};
                }};;
            }};            

            PostSetupV1ServicesIdAllocationsBulkResponse res = sdk.services.postSetupV1ServicesIdAllocationsBulk(req);

            if (res.serviceAllocationViewModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ServicesIdBlock

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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdBlockRequest;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdBlockResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceBlockInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ServicesIdBlockRequest req = new PostSetupV1ServicesIdBlockRequest("quas") {{
                serviceBlockInputModel = new ServiceBlockInputModel() {{
                    endDate = LocalDate.parse("2021-11-14");
                    endTime = 484966;
                    locationId = "eaque";
                    reason = "saepe";
                    repeat = new RepeatInputModel() {{
                        frequency = "architecto";
                        interval = 554645;
                        monthDay = 614438;
                        monthType = "assumenda";
                        weekdays = "tempore";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2022-07-06");
                    startTime = 38557;
                }};;
            }};            

            PostSetupV1ServicesIdBlockResponse res = sdk.services.postSetupV1ServicesIdBlock(req);

            if (res.serviceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ServicesIdUploadimage

<p>Use this endpoint to <b>Upload</b> an image to the service. A valid <b>service id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdUploadimageRequest;
import org.openapis.openapi.models.operations.PostSetupV1ServicesIdUploadimageResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceImageInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ServicesIdUploadimageRequest req = new PostSetupV1ServicesIdUploadimageRequest("impedit") {{
                serviceImageInputModel = new ServiceImageInputModel() {{
                    imageFileData = "cum";
                    imageFileName = "ipsum";
                }};;
            }};            

            PostSetupV1ServicesIdUploadimageResponse res = sdk.services.postSetupV1ServicesIdUploadimage(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ServicesAllocationsId

<p>Use this endpoint to <b>Update</b> a service allocation. A valid <b>serviceAllocation id</b> is required. Refer to the <i>POST /setup/v1/services/{id}/allocations</i> endpoint for fields names and details.</p>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ServicesAllocationsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ServicesAllocationsIdResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceAllocationUpdateModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ServicesAllocationsIdRequest req = new PutSetupV1ServicesAllocationsIdRequest("saepe") {{
                serviceAllocationUpdateModel = new ServiceAllocationUpdateModel() {{
                    bookingLimit = 644420;
                    endDate = LocalDate.parse("2022-08-29");
                    endTime = 333072;
                    locationId = "libero";
                    reason = "architecto";
                    repeat = new RepeatInputModel() {{
                        frequency = "cupiditate";
                        interval = 475589;
                        monthDay = 756654;
                        monthType = "possimus";
                        weekdays = "non";
                    }};;
                    repeats = false;
                    resourceId = "magnam";
                    startDate = LocalDate.parse("2022-07-19");
                    startTime = 993002;
                }};;
            }};            

            PutSetupV1ServicesAllocationsIdResponse res = sdk.services.putSetupV1ServicesAllocationsId(req);

            if (res.serviceAllocationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ServicesBlockId

<p>Use this endpoint to <b>Update</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ServicesBlockIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ServicesBlockIdResponse;
import org.openapis.openapi.models.shared.RepeatUpdateModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceBlockUpdateModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ServicesBlockIdRequest req = new PutSetupV1ServicesBlockIdRequest("consequuntur") {{
                serviceBlockUpdateModel = new ServiceBlockUpdateModel() {{
                    endDate = LocalDate.parse("2021-06-18");
                    endTime = 140384;
                    reason = "pariatur";
                    repeat = new RepeatUpdateModel() {{
                        frequency = "amet";
                        interval = 347698;
                        monthDay = 68852;
                        monthType = "velit";
                        weekdays = "facilis";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2022-03-18");
                    startTime = 977518;
                }};;
            }};            

            PutSetupV1ServicesBlockIdResponse res = sdk.services.putSetupV1ServicesBlockId(req);

            if (res.serviceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ServicesId

<p>Use this endpoint to <b>Update</b> a service object. A valid <b>service id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ServicesIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ServicesIdResponse;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.CustomFieldUpdateModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceFeesUpdateModel;
import org.openapis.openapi.models.shared.ServiceOptionsUpdateModel;
import org.openapis.openapi.models.shared.ServiceSettingsUpdateModel;
import org.openapis.openapi.models.shared.ServiceUpdateModel;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ServicesIdRequest req = new PutSetupV1ServicesIdRequest("blanditiis") {{
                serviceUpdateModel = new ServiceUpdateModel() {{
                    availability = new AvailabilityInputModel() {{
                        fri = new WeekDayInputModel() {{
                            endTime = 718627;
                            startTime = 392430;
                        }};;
                        mon = new WeekDayInputModel() {{
                            endTime = 335977;
                            startTime = 391933;
                        }};;
                        sat = new WeekDayInputModel() {{
                            endTime = 727771;
                            startTime = 794507;
                        }};;
                        sun = new WeekDayInputModel() {{
                            endTime = 815200;
                            startTime = 706061;
                        }};;
                        thu = new WeekDayInputModel() {{
                            endTime = 217663;
                            startTime = 318917;
                        }};;
                        tue = new WeekDayInputModel() {{
                            endTime = 973819;
                            startTime = 974589;
                        }};;
                        wed = new WeekDayInputModel() {{
                            endTime = 162358;
                            startTime = 891581;
                        }};;
                    }};;
                    bookingInterval = 290841;
                    bookingLimit = 700928;
                    customFields = new CustomFieldUpdateModel() {{
                        field1 = "eos";
                        field10 = "reprehenderit";
                        field2 = "nostrum";
                        field3 = "neque";
                        field4 = "iusto";
                        field5 = "est";
                        field6 = "rem";
                        field7 = "eligendi";
                        field8 = "fugiat";
                        field9 = "unde";
                    }};;
                    description = "officiis";
                    duration = 495617;
                    fees = new ServiceFeesUpdateModel() {{
                        cancellationFeeAmount = 2201.04;
                        cancellationFeeTaxable = false;
                        feeAmount = 1180.41;
                        feeTaxable = false;
                        nonRefundable = false;
                    }};;
                    locationId = "error";
                    maxCapacity = 784731;
                    maxGroupSize = 111496;
                    mediaPageUrl = "dignissimos";
                    name = "Ginger Hand";
                    options = new ServiceOptionsUpdateModel() {{
                        consumerPadding = false;
                        defaultService = false;
                        durationInterval = 965090;
                        durationMax = 482584;
                        durationMin = 491201;
                        durationSelect = false;
                        padding = 729828;
                    }};;
                    public_ = false;
                    serviceGroupId = "illo";
                    settings = new ServiceSettingsUpdateModel() {{
                        bookAheadUnit = 69182;
                        bookAheadValue = 280114;
                        bookInAdvance = 879174;
                    }};;
                    type = "saepe";
                }};;
            }};            

            PutSetupV1ServicesIdResponse res = sdk.services.putSetupV1ServicesId(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ServicesIdAvailability

<p>Use this endpoint to <b>Update</b> service weekly availability. A valid <b>service id</b> is required. The availability day entries are created when a service object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the business location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ServicesIdAvailabilityRequest;
import org.openapis.openapi.models.operations.PutSetupV1ServicesIdAvailabilityResponse;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ServicesIdAvailabilityRequest req = new PutSetupV1ServicesIdAvailabilityRequest("veniam") {{
                availabilityInputModel = new AvailabilityInputModel() {{
                    fri = new WeekDayInputModel() {{
                        endTime = 176499;
                        startTime = 970079;
                    }};;
                    mon = new WeekDayInputModel() {{
                        endTime = 939161;
                        startTime = 444121;
                    }};;
                    sat = new WeekDayInputModel() {{
                        endTime = 506312;
                        startTime = 367046;
                    }};;
                    sun = new WeekDayInputModel() {{
                        endTime = 999809;
                        startTime = 789770;
                    }};;
                    thu = new WeekDayInputModel() {{
                        endTime = 197259;
                        startTime = 467119;
                    }};;
                    tue = new WeekDayInputModel() {{
                        endTime = 534908;
                        startTime = 75566;
                    }};;
                    wed = new WeekDayInputModel() {{
                        endTime = 290248;
                        startTime = 828841;
                    }};;
                }};;
            }};            

            PutSetupV1ServicesIdAvailabilityResponse res = sdk.services.putSetupV1ServicesIdAvailability(req);

            if (res.serviceAvailabilityViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ServicesIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted service object. A valid <b>service id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ServicesIdRecoverRequest;
import org.openapis.openapi.models.operations.PutSetupV1ServicesIdRecoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ServicesIdRecoverRequest req = new PutSetupV1ServicesIdRecoverRequest("quisquam");            

            PutSetupV1ServicesIdRecoverResponse res = sdk.services.putSetupV1ServicesIdRecover(req);

            if (res.serviceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
