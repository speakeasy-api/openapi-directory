# calendars

### Available Operations

* [deleteSetupV1CalendarsBlockId](#deletesetupv1calendarsblockid) - Delete Calendar Block
* [deleteSetupV1CalendarsId](#deletesetupv1calendarsid) - Delete Calendar
* [getSetupV1Calendars](#getsetupv1calendars) - List Calendars
* [getSetupV1CalendarsBlocksId](#getsetupv1calendarsblocksid) - Get Calendar Block
* [getSetupV1CalendarsId](#getsetupv1calendarsid) - Get Calendar
* [getSetupV1CalendarsIdBlocks](#getsetupv1calendarsidblocks) - List Calendar Blocks
* [getSetupV1CalendarsIdServices](#getsetupv1calendarsidservices) - List Calendar Services
* [postSetupV1Calendars](#postsetupv1calendars) - DEPRECATING: Create
* [postSetupV1CalendarsIdBlock](#postsetupv1calendarsidblock) - Create Calendar Block
* [putSetupV1CalendarsBlockId](#putsetupv1calendarsblockid) - Update Calendar Block
* [putSetupV1CalendarsId](#putsetupv1calendarsid) - Update Calendar
* [putSetupV1CalendarsIdRecover](#putsetupv1calendarsidrecover) - Recover Calendar

## deleteSetupV1CalendarsBlockId

<p>Use this endpoint to permanently <b>Delete</b> a calendar block. A valid <b>calendarBlock id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1CalendarsBlockIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1CalendarsBlockIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1CalendarsBlockIdRequest req = new DeleteSetupV1CalendarsBlockIdRequest("iure");            

            DeleteSetupV1CalendarsBlockIdResponse res = sdk.calendars.deleteSetupV1CalendarsBlockId(req);

            if (res.calendarBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1CalendarsId

<p>Use this endpoint to <b>Delete</b> a calendar object. A valid <b>calendar id</b> is required. The calendar is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/calendars​/{id}​/recover </i>endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1CalendarsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1CalendarsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1CalendarsIdRequest req = new DeleteSetupV1CalendarsIdRequest("doloribus");            

            DeleteSetupV1CalendarsIdResponse res = sdk.calendars.deleteSetupV1CalendarsId(req);

            if (res.scheduleViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Calendars

<p>Use this endpoint to return a <b>List of Calendars</b> from the requested location. If not specified, the business location defaults to the primary business location. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsRequest;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CalendarsRequest req = new GetSetupV1CalendarsRequest() {{
                deleted = false;
                limit = 102044;
                locationId = "mollitia";
                offset = 208876;
            }};            

            GetSetupV1CalendarsResponse res = sdk.calendars.getSetupV1Calendars(req);

            if (res.scheduleListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CalendarsBlocksId

<p>Use this endpoint to return a <b>Calendar Block</b>. A valid <b>calendarBlock id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsBlocksIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsBlocksIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CalendarsBlocksIdRequest req = new GetSetupV1CalendarsBlocksIdRequest("consequuntur");            

            GetSetupV1CalendarsBlocksIdResponse res = sdk.calendars.getSetupV1CalendarsBlocksId(req);

            if (res.calendarBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CalendarsId

<p>Use this endpoint to return a <b>Calendar</b> object. A valid <b>calendar id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CalendarsIdRequest req = new GetSetupV1CalendarsIdRequest("mollitia");            

            GetSetupV1CalendarsIdResponse res = sdk.calendars.getSetupV1CalendarsId(req);

            if (res.scheduleViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CalendarsIdBlocks

<p>Use this endpoint to return a <b>List of Calendar Blocks</b> for the requested calendar. A valid <b>calendar id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsIdBlocksRequest;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsIdBlocksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CalendarsIdBlocksRequest req = new GetSetupV1CalendarsIdBlocksRequest("numquam") {{
                limit = 414369;
                offset = 466311;
            }};            

            GetSetupV1CalendarsIdBlocksResponse res = sdk.calendars.getSetupV1CalendarsIdBlocks(req);

            if (res.calendarBlockListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CalendarsIdServices

<p>Use this endpoint to return a <b>List of Linked Services</b> of a calendar object. A valid <b>calendar id</b> is required. Find calendar id's by using the <i>GET /setup/v1/calendars</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsIdServicesRequest;
import org.openapis.openapi.models.operations.GetSetupV1CalendarsIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CalendarsIdServicesRequest req = new GetSetupV1CalendarsIdServicesRequest("velit") {{
                limit = 623510;
                offset = 158969;
            }};            

            GetSetupV1CalendarsIdServicesResponse res = sdk.calendars.getSetupV1CalendarsIdServices(req);

            if (res.serviceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Calendars

<p>
  <b>DEPRECATING:</b> Create Calendar</p>
<p>We are no longer supporting Multiple Calendar Functionality as it is part of our Legacy Application and has no relevance in the API.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1CalendarsResponse;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.ScheduleInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ScheduleInputModel req = new ScheduleInputModel() {{
                availability = new AvailabilityInputModel() {{
                    fri = new WeekDayInputModel() {{
                        endTime = 110375;
                        startTime = 674752;
                    }};;
                    mon = new WeekDayInputModel() {{
                        endTime = 656330;
                        startTime = 317202;
                    }};;
                    sat = new WeekDayInputModel() {{
                        endTime = 138183;
                        startTime = 778346;
                    }};;
                    sun = new WeekDayInputModel() {{
                        endTime = 196582;
                        startTime = 949572;
                    }};;
                    thu = new WeekDayInputModel() {{
                        endTime = 368725;
                        startTime = 662527;
                    }};;
                    tue = new WeekDayInputModel() {{
                        endTime = 820994;
                        startTime = 13571;
                    }};;
                    wed = new WeekDayInputModel() {{
                        endTime = 97101;
                        startTime = 622846;
                    }};;
                }};;
                bookingsPerSlot = 837945;
                interval = 673660;
                locationId = "quasi";
                name = "Jan Thiel";
                resourceGroupId = "voluptatibus";
                type = "ipsa";
            }};            

            PostSetupV1CalendarsResponse res = sdk.calendars.postSetupV1Calendars(req);

            if (res.scheduleViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1CalendarsIdBlock

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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1CalendarsIdBlockRequest;
import org.openapis.openapi.models.operations.PostSetupV1CalendarsIdBlockResponse;
import org.openapis.openapi.models.shared.CalendarBlockInputModel;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1CalendarsIdBlockRequest req = new PostSetupV1CalendarsIdBlockRequest("voluptate") {{
                calendarBlockInputModel = new CalendarBlockInputModel() {{
                    endDate = LocalDate.parse("2022-12-17");
                    endTime = 39187;
                    reason = "reprehenderit";
                    repeat = new RepeatInputModel() {{
                        frequency = "ut";
                        interval = 979587;
                        monthDay = 120196;
                        monthType = "corporis";
                        weekdays = "dolore";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2022-11-18");
                    startTime = 688661;
                }};;
            }};            

            PostSetupV1CalendarsIdBlockResponse res = sdk.calendars.postSetupV1CalendarsIdBlock(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1CalendarsBlockId

<p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendarBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/calendars​/{id}​/block</i> endpoint for fieldnames and details.</p>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1CalendarsBlockIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1CalendarsBlockIdResponse;
import org.openapis.openapi.models.shared.CalendarBlockUpdateModel;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1CalendarsBlockIdRequest req = new PutSetupV1CalendarsBlockIdRequest("accusamus") {{
                calendarBlockUpdateModel = new CalendarBlockUpdateModel() {{
                    endDate = LocalDate.parse("2022-01-30");
                    endTime = 64147;
                    reason = "ipsum";
                    repeat = new RepeatInputModel() {{
                        frequency = "quidem";
                        interval = 565189;
                        monthDay = 566602;
                        monthType = "pariatur";
                        weekdays = "modi";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2021-12-15");
                    startTime = 916723;
                }};;
            }};            

            PutSetupV1CalendarsBlockIdResponse res = sdk.calendars.putSetupV1CalendarsBlockId(req);

            if (res.calendarBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1CalendarsId

<p>Use this endpoint to <b>Update</b> a calendar object. A valid <b>calendar id</b> is required. When your company was created a calendar object was automatically created with 24-hour weekly availability. Its <b>name = Main</b>, the <b>type = resource</b> and by default the <b>interval = 30 mins</b>. We are currently supporting resource calendar type. Other types were part of our Legacy Application and has no relevance in the API product.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1CalendarsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1CalendarsIdResponse;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.ScheduleUpdateModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1CalendarsIdRequest req = new PutSetupV1CalendarsIdRequest("repudiandae") {{
                scheduleUpdateModel = new ScheduleUpdateModel() {{
                    availability = new AvailabilityInputModel() {{
                        fri = new WeekDayInputModel() {{
                            endTime = 575947;
                            startTime = 83112;
                        }};;
                        mon = new WeekDayInputModel() {{
                            endTime = 929297;
                            startTime = 277718;
                        }};;
                        sat = new WeekDayInputModel() {{
                            endTime = 318569;
                            startTime = 9356;
                        }};;
                        sun = new WeekDayInputModel() {{
                            endTime = 667411;
                            startTime = 842342;
                        }};;
                        thu = new WeekDayInputModel() {{
                            endTime = 131797;
                            startTime = 647174;
                        }};;
                        tue = new WeekDayInputModel() {{
                            endTime = 716327;
                            startTime = 841386;
                        }};;
                        wed = new WeekDayInputModel() {{
                            endTime = 289406;
                            startTime = 264730;
                        }};;
                    }};;
                    bookingsPerSlot = 183191;
                    interval = 397821;
                    locationId = "cupiditate";
                    name = "Christopher Cummerata";
                    resourceGroupId = "alias";
                    type = "fugit";
                }};;
            }};            

            PutSetupV1CalendarsIdResponse res = sdk.calendars.putSetupV1CalendarsId(req);

            if (res.scheduleViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1CalendarsIdRecover

<p>Use this endpoint to <b>Recover</b> a previously deleted calendar object. A valid <b>calendar id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1CalendarsIdRecoverRequest;
import org.openapis.openapi.models.operations.PutSetupV1CalendarsIdRecoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1CalendarsIdRecoverRequest req = new PutSetupV1CalendarsIdRecoverRequest("excepturi");            

            PutSetupV1CalendarsIdRecoverResponse res = sdk.calendars.putSetupV1CalendarsIdRecover(req);

            if (res.scheduleViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
