# resources

### Available Operations

* [deleteSetupV1ResourcesAllocationsId](#deletesetupv1resourcesallocationsid) - Delete Allocation
* [deleteSetupV1ResourcesBlockId](#deletesetupv1resourcesblockid) - Delete Block
* [deleteSetupV1ResourcesId](#deletesetupv1resourcesid) - Delete Resource
* [deleteSetupV1ResourcesIdDeleteimage](#deletesetupv1resourcesiddeleteimage) - Delete Resource Image
* [deleteSetupV1ResourcesIdServices](#deletesetupv1resourcesidservices) - Delete Linked Services
* [getSetupV1Resources](#getsetupv1resources) - List Resources
* [getSetupV1ResourcesAllocationsId](#getsetupv1resourcesallocationsid) - Get Allocation
* [getSetupV1ResourcesBlocksId](#getsetupv1resourcesblocksid) - Get Block
* [getSetupV1ResourcesTimezones](#getsetupv1resourcestimezones) - Get Time Zones
* [getSetupV1ResourcesId](#getsetupv1resourcesid) - Get Resource
* [getSetupV1ResourcesIdAllocations](#getsetupv1resourcesidallocations) - List Resource Allocations
* [getSetupV1ResourcesIdAvailability](#getsetupv1resourcesidavailability) - List Weekly Availability
* [getSetupV1ResourcesIdBlocks](#getsetupv1resourcesidblocks) - List Resource Blocks
* [getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress](#getsetupv1resourcesidcalendarauthgooglegoogleemailaddress) - Get Resource Google URL
* [getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress](#getsetupv1resourcesidcalendarauthoutlookoutlookemailaddress) - Get Resource Outlook URL
* [postSetupV1Resources](#postsetupv1resources) - Create Resource
* [postSetupV1ResourcesBulk](#postsetupv1resourcesbulk) - Create Resources Bulk
* [postSetupV1ResourcesIdAllocations](#postsetupv1resourcesidallocations) - Create Allocation
* [postSetupV1ResourcesIdBlock](#postsetupv1resourcesidblock) - Create Block
* [postSetupV1ResourcesIdServices](#postsetupv1resourcesidservices) - Create Linked Services
* [postSetupV1ResourcesIdUploadimage](#postsetupv1resourcesiduploadimage) - Upload Resource Image
* [putSetupV1ResourcesAllocationsId](#putsetupv1resourcesallocationsid) - Update Allocation
* [putSetupV1ResourcesBlockId](#putsetupv1resourcesblockid) - Update Block
* [putSetupV1ResourcesBulk](#putsetupv1resourcesbulk) - Update Resources Bulk
* [putSetupV1ResourcesId](#putsetupv1resourcesid) - Update Resource
* [putSetupV1ResourcesIdAvailability](#putsetupv1resourcesidavailability) - Update Weekly Availability
* [putSetupV1ResourcesIdReassignAppointmentsResourceId](#putsetupv1resourcesidreassignappointmentsresourceid) - Reassign Resource
* [putSetupV1ResourcesIdRecover](#putsetupv1resourcesidrecover) - Recover Resource
* [putSetupV1ResourcesIdServices](#putsetupv1resourcesidservices) - Update Linked Services

## deleteSetupV1ResourcesAllocationsId

<p>Use this endpoint to <b>Delete</b> a Resource Allocation. A valid <b>resourceAllocation id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesAllocationsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesAllocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ResourcesAllocationsIdRequest req = new DeleteSetupV1ResourcesAllocationsIdRequest("quasi");            

            DeleteSetupV1ResourcesAllocationsIdResponse res = sdk.resources.deleteSetupV1ResourcesAllocationsId(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ResourcesBlockId

<p>Use this endpoint to <b>Delete</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesBlockIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesBlockIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ResourcesBlockIdRequest req = new DeleteSetupV1ResourcesBlockIdRequest("vel");            

            DeleteSetupV1ResourcesBlockIdResponse res = sdk.resources.deleteSetupV1ResourcesBlockId(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ResourcesId

<p>Use this endpoint to <b>Delete</b> a resource. The resource is not permanently deleted and can be recovered. A valid <b>resource id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ResourcesIdRequest req = new DeleteSetupV1ResourcesIdRequest("molestiae");            

            DeleteSetupV1ResourcesIdResponse res = sdk.resources.deleteSetupV1ResourcesId(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ResourcesIdDeleteimage

<p>Use this endpoint to permanently <b>Delete</b> a previously uploaded resource image. A valid <b>resource id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesIdDeleteimageRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesIdDeleteimageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ResourcesIdDeleteimageRequest req = new DeleteSetupV1ResourcesIdDeleteimageRequest("occaecati");            

            DeleteSetupV1ResourcesIdDeleteimageResponse res = sdk.resources.deleteSetupV1ResourcesIdDeleteimage(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetupV1ResourcesIdServices

<p>Use this endpoint to <b>Delete</b> linked services from a Resource, i.e. unlink the services. A valid <b>resource id</b> is required. Once deleted, all services become available to the resource.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesIdServicesRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcesIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ResourcesIdServicesRequest req = new DeleteSetupV1ResourcesIdServicesRequest("distinctio");            

            DeleteSetupV1ResourcesIdServicesResponse res = sdk.resources.deleteSetupV1ResourcesIdServices(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Resources

<p>Use this endpoint to return a <b>List of Resources</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesRequest req = new GetSetupV1ResourcesRequest() {{
                deleted = false;
                email = "Lou76@gmail.com";
                googleAuthReturnUrl = "consequuntur";
                limit = 9766;
                locationId = "minus";
                name = "Miranda Feest";
                offset = 590984;
                outlookAuthReturnUrl = "a";
                resourceGroupId = "nulla";
            }};            

            GetSetupV1ResourcesResponse res = sdk.resources.getSetupV1Resources(req);

            if (res.resourceListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesAllocationsId

<p>Use this endpoint to return a <b>Resource Allocation</b>. A valid <b>resourceAllocation id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesAllocationsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesAllocationsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesAllocationsIdRequest req = new GetSetupV1ResourcesAllocationsIdRequest("esse");            

            GetSetupV1ResourcesAllocationsIdResponse res = sdk.resources.getSetupV1ResourcesAllocationsId(req);

            if (res.resourceAllocationViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesBlocksId

<p>Use this endpoint to <b>Get</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesBlocksIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesBlocksIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesBlocksIdRequest req = new GetSetupV1ResourcesBlocksIdRequest("a");            

            GetSetupV1ResourcesBlocksIdResponse res = sdk.resources.getSetupV1ResourcesBlocksId(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesTimezones

<p>Use this endpoint to return a <b>List of Time Zones</b>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesTimezonesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesTimezonesResponse res = sdk.resources.getSetupV1ResourcesTimezones();

            if (res.systemTimezoneViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesId

<p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the: <i>GET /setup/v1/resources</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesIdRequest req = new GetSetupV1ResourcesIdRequest("pariatur") {{
                googleAuthReturnUrl = "possimus";
                outlookAuthReturnUrl = "quia";
            }};            

            GetSetupV1ResourcesIdResponse res = sdk.resources.getSetupV1ResourcesId(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesIdAllocations

<p>Use this endpoint to return a list of <b>Resource Allocations</b> for a specified resource. We recommend using allocations if a resource's schedule changes frequently from day to day or week to week. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdAllocationsRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdAllocationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesIdAllocationsRequest req = new GetSetupV1ResourcesIdAllocationsRequest("asperiores") {{
                endDate = OffsetDateTime.parse("2022-09-29T22:10:17.894Z");
                limit = 159414;
                offset = 94458;
                startDate = OffsetDateTime.parse("2021-09-25T11:11:22.943Z");
            }};            

            GetSetupV1ResourcesIdAllocationsResponse res = sdk.resources.getSetupV1ResourcesIdAllocations(req);

            if (res.resourceAllocationListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesIdAvailability

<p>Use this endpoint to view the <b>Weekly Availability</b> for a resource. The displayed available times are represented in the resource's timezone. The resource timezone can be set to any world timezone. If not provided, by default it is set to the Business timezone.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdAvailabilityRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdAvailabilityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesIdAvailabilityRequest req = new GetSetupV1ResourcesIdAvailabilityRequest("tenetur");            

            GetSetupV1ResourcesIdAvailabilityResponse res = sdk.resources.getSetupV1ResourcesIdAvailability(req);

            if (res.resourceAvailabilityViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesIdBlocks

<p>Use this endpoint to return a list of <b>Resource Blocks</b>. A valid <b>resource id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdBlocksRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdBlocksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesIdBlocksRequest req = new GetSetupV1ResourcesIdBlocksRequest("earum") {{
                endDate = OffsetDateTime.parse("2022-07-21T16:57:57.397Z");
                limit = 258684;
                offset = 727697;
                startDate = OffsetDateTime.parse("2020-10-10T05:59:09.149Z");
            }};            

            GetSetupV1ResourcesIdBlocksResponse res = sdk.resources.getSetupV1ResourcesIdBlocks(req);

            if (res.resourceBlockListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress

<p>Use this endpoint to return the <b>Resources Google Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Google Email Address</b> are required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest req = new GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest("aliquam", "sapiente") {{
                googleAuthReturnUrl = "dicta";
            }};            

            GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse res = sdk.resources.getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress(req);

            if (res.calendarAuthViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress

<p>Use this endpoint to return the <b>Resources Outlook Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Outlook Email Address</b> are required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest req = new GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest("reprehenderit", "ullam") {{
                outlookAuthReturnUrl = "nisi";
            }};            

            GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse res = sdk.resources.getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress(req);

            if (res.calendarAuthViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Resources

<p>Use this endpoint to <b>Create</b> a new resource.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesRequest;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesResponse;
import org.openapis.openapi.models.shared.AddressInputModel;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.ContactInputModel;
import org.openapis.openapi.models.shared.CustomFieldInputModel;
import org.openapis.openapi.models.shared.ResourceInputModel;
import org.openapis.openapi.models.shared.ResourceOptionsInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ResourcesRequest req = new PostSetupV1ResourcesRequest() {{
                resourceInputModel = new ResourceInputModel() {{
                    address = new AddressInputModel() {{
                        addressLine1 = "voluptatum";
                        addressLine2 = "qui";
                        city = "Hoboken";
                        country = "Malaysia";
                        postalCode = "60690-8040";
                        state = "minima";
                    }};;
                    availability = new AvailabilityInputModel() {{
                        fri = new WeekDayInputModel() {{
                            endTime = 86532;
                            startTime = 232744;
                        }};;
                        mon = new WeekDayInputModel() {{
                            endTime = 237173;
                            startTime = 614465;
                        }};;
                        sat = new WeekDayInputModel() {{
                            endTime = 839513;
                            startTime = 33074;
                        }};;
                        sun = new WeekDayInputModel() {{
                            endTime = 522371;
                            startTime = 15606;
                        }};;
                        thu = new WeekDayInputModel() {{
                            endTime = 513075;
                            startTime = 428796;
                        }};;
                        tue = new WeekDayInputModel() {{
                            endTime = 649832;
                            startTime = 68074;
                        }};;
                        wed = new WeekDayInputModel() {{
                            endTime = 544591;
                            startTime = 251941;
                        }};;
                    }};;
                    contact = new ContactInputModel() {{
                        businessPhone = "voluptatem";
                        businessPhoneExt = "dolor";
                        conferenceInfo = "occaecati";
                        homePhone = "numquam";
                        mobilePhone = "impedit";
                        preferredPhoneType = "explicabo";
                        skypeUsername = "voluptas";
                    }};;
                    customFields = new CustomFieldInputModel() {{
                        field1 = "aut";
                        field10 = "dignissimos";
                        field2 = "dicta";
                        field3 = "maiores";
                        field4 = "natus";
                        field5 = "velit";
                        field6 = "voluptatibus";
                        field7 = "voluptas";
                        field8 = "asperiores";
                        field9 = "aperiam";
                    }};;
                    description = "ea";
                    email = "Carson_Sipes@gmail.com";
                    groupId = "dignissimos";
                    locationId = "officia";
                    name = "Vernon Bergnaum";
                    options = new ResourceOptionsInputModel() {{
                        bioLink = "quod";
                        bookingNotification = 288398;
                        calendarAvailability = 70447;
                        displayColor = "adipisci";
                        effectiveDate = OffsetDateTime.parse("2021-09-04T08:55:11.388Z");
                        gender = "female";
                        googleCalendarId = "velit";
                        hourly = 6339.31;
                        ignoreBusinessHours = false;
                        notificationType = 665859;
                        outlookCalendarId = "recusandae";
                        sortKey = 517309;
                    }};;
                    recurringAvailability = false;
                    serviceIds = new String[]{{
                        add("vel"),
                        add("ducimus"),
                        add("quos"),
                        add("vel"),
                    }};
                    timezoneId = "labore";
                }};;
                googleAuthReturnUrl = "possimus";
                outlookAuthReturnUrl = "facilis";
            }};            

            PostSetupV1ResourcesResponse res = sdk.resources.postSetupV1Resources(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ResourcesBulk

<p>Use this endpoint to <b>Bulk Create</b> resources. Valid <b>resource ids</b> are required. The posted list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesBulkRequest;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesBulkResponse;
import org.openapis.openapi.models.shared.AddressInputModel;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.ContactInputModel;
import org.openapis.openapi.models.shared.CustomFieldInputModel;
import org.openapis.openapi.models.shared.ResourceInputModel;
import org.openapis.openapi.models.shared.ResourceOptionsInputModel;
import org.openapis.openapi.models.shared.ResourcesInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ResourcesBulkRequest req = new PostSetupV1ResourcesBulkRequest() {{
                resourcesInputModel = new ResourcesInputModel() {{
                    resources = new org.openapis.openapi.models.shared.ResourceInputModel[]{{
                        add(new ResourceInputModel() {{
                            address = new AddressInputModel() {{
                                addressLine1 = "in";
                                addressLine2 = "corporis";
                                city = "Sioux Falls";
                                country = "Guinea";
                                postalCode = "30724-3982";
                                state = "doloribus";
                            }};
                            availability = new AvailabilityInputModel() {{
                                fri = new WeekDayInputModel() {{
                                    endTime = 381760;
                                    startTime = 968972;
                                }};
                                mon = new WeekDayInputModel() {{
                                    endTime = 697142;
                                    startTime = 904949;
                                }};
                                sat = new WeekDayInputModel() {{
                                    endTime = 897071;
                                    startTime = 296556;
                                }};
                                sun = new WeekDayInputModel() {{
                                    endTime = 121059;
                                    startTime = 992012;
                                }};
                                thu = new WeekDayInputModel() {{
                                    endTime = 241545;
                                    startTime = 249420;
                                }};
                                tue = new WeekDayInputModel() {{
                                    endTime = 228263;
                                    startTime = 105906;
                                }};
                                wed = new WeekDayInputModel() {{
                                    endTime = 489509;
                                    startTime = 950953;
                                }};
                            }};
                            contact = new ContactInputModel() {{
                                businessPhone = "debitis";
                                businessPhoneExt = "consectetur";
                                conferenceInfo = "corporis";
                                homePhone = "harum";
                                mobilePhone = "laboriosam";
                                preferredPhoneType = "ipsa";
                                skypeUsername = "voluptates";
                            }};
                            customFields = new CustomFieldInputModel() {{
                                field1 = "libero";
                                field10 = "vitae";
                                field2 = "accusamus";
                                field3 = "similique";
                                field4 = "tempora";
                                field5 = "aspernatur";
                                field6 = "voluptas";
                                field7 = "voluptas";
                                field8 = "voluptas";
                                field9 = "minima";
                            }};
                            description = "nobis";
                            email = "David50@hotmail.com";
                            groupId = "in";
                            locationId = "dolore";
                            name = "Rochelle Smitham";
                            options = new ResourceOptionsInputModel() {{
                                bioLink = "cum";
                                bookingNotification = 502389;
                                calendarAvailability = 555361;
                                displayColor = "hic";
                                effectiveDate = OffsetDateTime.parse("2022-05-14T14:10:48.315Z");
                                gender = "male";
                                googleCalendarId = "pariatur";
                                hourly = 5196.43;
                                ignoreBusinessHours = false;
                                notificationType = 940210;
                                outlookCalendarId = "exercitationem";
                                sortKey = 750765;
                            }};
                            recurringAvailability = false;
                            serviceIds = new String[]{{
                                add("rerum"),
                            }};
                            timezoneId = "sed";
                        }}),
                        add(new ResourceInputModel() {{
                            address = new AddressInputModel() {{
                                addressLine1 = "reiciendis";
                                addressLine2 = "explicabo";
                                city = "Port Arthur";
                                country = "Kazakhstan";
                                postalCode = "06261-4461";
                                state = "voluptas";
                            }};
                            availability = new AvailabilityInputModel() {{
                                fri = new WeekDayInputModel() {{
                                    endTime = 604118;
                                    startTime = 100032;
                                }};
                                mon = new WeekDayInputModel() {{
                                    endTime = 382808;
                                    startTime = 960257;
                                }};
                                sat = new WeekDayInputModel() {{
                                    endTime = 895386;
                                    startTime = 72434;
                                }};
                                sun = new WeekDayInputModel() {{
                                    endTime = 967795;
                                    startTime = 19300;
                                }};
                                thu = new WeekDayInputModel() {{
                                    endTime = 546885;
                                    startTime = 979574;
                                }};
                                tue = new WeekDayInputModel() {{
                                    endTime = 274823;
                                    startTime = 148478;
                                }};
                                wed = new WeekDayInputModel() {{
                                    endTime = 592231;
                                    startTime = 258702;
                                }};
                            }};
                            contact = new ContactInputModel() {{
                                businessPhone = "necessitatibus";
                                businessPhoneExt = "ipsum";
                                conferenceInfo = "ea";
                                homePhone = "occaecati";
                                mobilePhone = "quos";
                                preferredPhoneType = "voluptatibus";
                                skypeUsername = "tempora";
                            }};
                            customFields = new CustomFieldInputModel() {{
                                field1 = "tempora";
                                field10 = "voluptate";
                                field2 = "reiciendis";
                                field3 = "ex";
                                field4 = "sit";
                                field5 = "non";
                                field6 = "officiis";
                                field7 = "praesentium";
                                field8 = "facilis";
                                field9 = "quaerat";
                            }};
                            description = "incidunt";
                            email = "Solon75@yahoo.com";
                            groupId = "error";
                            locationId = "veniam";
                            name = "Sophie Wisoky";
                            options = new ResourceOptionsInputModel() {{
                                bioLink = "aperiam";
                                bookingNotification = 901483;
                                calendarAvailability = 253642;
                                displayColor = "veniam";
                                effectiveDate = OffsetDateTime.parse("2022-02-10T10:18:57.740Z");
                                gender = "female";
                                googleCalendarId = "laudantium";
                                hourly = 3484.76;
                                ignoreBusinessHours = false;
                                notificationType = 510629;
                                outlookCalendarId = "cum";
                                sortKey = 386827;
                            }};
                            recurringAvailability = false;
                            serviceIds = new String[]{{
                                add("voluptatum"),
                                add("error"),
                                add("hic"),
                            }};
                            timezoneId = "expedita";
                        }}),
                    }};
                }};;
                googleAuthReturnUrl = "debitis";
                outlookAuthReturnUrl = "neque";
            }};            

            PostSetupV1ResourcesBulkResponse res = sdk.resources.postSetupV1ResourcesBulk(req);

            if (res.resourceViewModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ResourcesIdAllocations

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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdAllocationsRequest;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdAllocationsResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.ResourceAllocationInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ResourcesIdAllocationsRequest req = new PostSetupV1ResourcesIdAllocationsRequest("nostrum") {{
                resourceAllocationInputModel = new ResourceAllocationInputModel() {{
                    endDate = LocalDate.parse("2021-08-25");
                    endTime = 548361;
                    reason = "accusamus";
                    repeat = new RepeatInputModel() {{
                        frequency = "tempora";
                        interval = 543678;
                        monthDay = 148268;
                        monthType = "ut";
                        weekdays = "fugiat";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2022-05-14");
                    startTime = 710337;
                }};;
            }};            

            PostSetupV1ResourcesIdAllocationsResponse res = sdk.resources.postSetupV1ResourcesIdAllocations(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ResourcesIdBlock

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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdBlockRequest;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdBlockResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.ResourceBlockInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ResourcesIdBlockRequest req = new PostSetupV1ResourcesIdBlockRequest("consequatur") {{
                resourceBlockInputModel = new ResourceBlockInputModel() {{
                    allDay = false;
                    endDate = LocalDate.parse("2022-08-17");
                    endTime = 24527;
                    reason = "voluptatum";
                    repeat = new RepeatInputModel() {{
                        frequency = "quas";
                        interval = 922112;
                        monthDay = 361151;
                        monthType = "et";
                        weekdays = "blanditiis";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2022-11-05");
                    startTime = 24313;
                }};;
            }};            

            PostSetupV1ResourcesIdBlockResponse res = sdk.resources.postSetupV1ResourcesIdBlock(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ResourcesIdServices

<p>Use this endpoint to explicitly <b>Link Services</b> to a Resource. A valid <b>resource id</b> is required.</p>
<p>
  <b>Note:</b> By default, the services array is empty which signifies that all services are provided by the resource. Linking services here will add to the linked service(s) array available to this resource. This will limit the services available to the resource.</p>
<p>You cannot post services that already exist in the array, you can only add new ones. Use the <i>PUT ​/setup​/v1​/resources​/{id}​/services</i> endpoint to update the entire list.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdServicesRequest;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ResourcesIdServicesRequest req = new PostSetupV1ResourcesIdServicesRequest("nostrum") {{
                requestBody = new String[]{{
                    add("error"),
                    add("consequatur"),
                    add("incidunt"),
                    add("reiciendis"),
                }};
            }};            

            PostSetupV1ResourcesIdServicesResponse res = sdk.resources.postSetupV1ResourcesIdServices(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1ResourcesIdUploadimage

<p>Use this endpoint to <b>Upload</b> a resource image to the resource. A valid <b>resource id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdUploadimageRequest;
import org.openapis.openapi.models.operations.PostSetupV1ResourcesIdUploadimageResponse;
import org.openapis.openapi.models.shared.ResourceImageInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostSetupV1ResourcesIdUploadimageRequest req = new PostSetupV1ResourcesIdUploadimageRequest("harum") {{
                resourceImageInputModel = new ResourceImageInputModel() {{
                    imageFileData = "dicta";
                    imageFileName = "architecto";
                }};;
            }};            

            PostSetupV1ResourcesIdUploadimageResponse res = sdk.resources.postSetupV1ResourcesIdUploadimage(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesAllocationsId

<p>Use this endpoint to <b>Update</b> a resource allocation. A valid <b>resourceAllocation id</b> is required. Refer to the <i>POST /setup/v1/resources/{id}/allocations</i> endpoint for details.</p>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesAllocationsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesAllocationsIdResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.ResourceAllocationUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesAllocationsIdRequest req = new PutSetupV1ResourcesAllocationsIdRequest("labore") {{
                resourceAllocationUpdateModel = new ResourceAllocationUpdateModel() {{
                    endDate = LocalDate.parse("2021-12-03");
                    endTime = 671957;
                    reason = "nam";
                    repeat = new RepeatInputModel() {{
                        frequency = "tenetur";
                        interval = 388867;
                        monthDay = 2703;
                        monthType = "amet";
                        weekdays = "deserunt";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2022-05-26");
                    startTime = 972083;
                }};;
            }};            

            PutSetupV1ResourcesAllocationsIdResponse res = sdk.resources.putSetupV1ResourcesAllocationsId(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesBlockId

<p>Use this endpoint to <b>Update</b> a Resource Block. A valid <b>resourceBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/resources​/{id}​/block</i> endpoint for fieldnames and details.</p>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesBlockIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesBlockIdResponse;
import org.openapis.openapi.models.shared.RepeatInputModel;
import org.openapis.openapi.models.shared.ResourceBlockUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesBlockIdRequest req = new PutSetupV1ResourcesBlockIdRequest("repellendus") {{
                resourceBlockUpdateModel = new ResourceBlockUpdateModel() {{
                    allDay = false;
                    endDate = LocalDate.parse("2020-04-04");
                    endTime = 16871;
                    reason = "est";
                    repeat = new RepeatInputModel() {{
                        frequency = "quidem";
                        interval = 440666;
                        monthDay = 813679;
                        monthType = "fuga";
                        weekdays = "praesentium";
                    }};;
                    repeats = false;
                    startDate = LocalDate.parse("2022-05-02");
                    startTime = 29100;
                }};;
            }};            

            PutSetupV1ResourcesBlockIdResponse res = sdk.resources.putSetupV1ResourcesBlockId(req);

            if (res.resourceBlockViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesBulk

<p>Use this endpoint to <b>Bulk Update</b> resources. Valid <b>resource id's</b> are required. The list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesBulkRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesBulkResponse;
import org.openapis.openapi.models.shared.AddressUpdateModel;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.ContactUpdateModel;
import org.openapis.openapi.models.shared.CustomFieldUpdateModel;
import org.openapis.openapi.models.shared.ResourceBulkUpdateModel;
import org.openapis.openapi.models.shared.ResourceOptionsUpdateModel;
import org.openapis.openapi.models.shared.ResourcesUpdateModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesBulkRequest req = new PutSetupV1ResourcesBulkRequest() {{
                resourcesUpdateModel = new ResourcesUpdateModel() {{
                    resources = new org.openapis.openapi.models.shared.ResourceBulkUpdateModel[]{{
                        add(new ResourceBulkUpdateModel() {{
                            address = new AddressUpdateModel() {{
                                addressLine1 = "quasi";
                                addressLine2 = "atque";
                                city = "Yvettemouth";
                                country = "Holy See (Vatican City State)";
                                postalCode = "80428-4568";
                                state = "officiis";
                            }};
                            availability = new AvailabilityInputModel() {{
                                fri = new WeekDayInputModel() {{
                                    endTime = 880107;
                                    startTime = 618826;
                                }};
                                mon = new WeekDayInputModel() {{
                                    endTime = 328303;
                                    startTime = 133461;
                                }};
                                sat = new WeekDayInputModel() {{
                                    endTime = 404425;
                                    startTime = 980581;
                                }};
                                sun = new WeekDayInputModel() {{
                                    endTime = 544647;
                                    startTime = 871786;
                                }};
                                thu = new WeekDayInputModel() {{
                                    endTime = 621693;
                                    startTime = 502721;
                                }};
                                tue = new WeekDayInputModel() {{
                                    endTime = 379356;
                                    startTime = 922348;
                                }};
                                wed = new WeekDayInputModel() {{
                                    endTime = 542129;
                                    startTime = 541381;
                                }};
                            }};
                            contact = new ContactUpdateModel() {{
                                businessPhone = "sunt";
                                businessPhoneExt = "recusandae";
                                conferenceInfo = "dolorum";
                                homePhone = "repellendus";
                                mobilePhone = "labore";
                                preferredPhoneType = "reiciendis";
                                skypeUsername = "doloremque";
                            }};
                            customFields = new CustomFieldUpdateModel() {{
                                field1 = "repudiandae";
                                field10 = "dicta";
                                field2 = "accusantium";
                                field3 = "beatae";
                                field4 = "dolores";
                                field5 = "enim";
                                field6 = "laboriosam";
                                field7 = "velit";
                                field8 = "a";
                                field9 = "molestias";
                            }};
                            description = "magnam";
                            email = "Carole_McClure44@hotmail.com";
                            groupId = "adipisci";
                            id = "e922a57a-15be-43e0-a080-7e2b6e3ab884";
                            name = "Winifred Abernathy";
                            options = new ResourceOptionsUpdateModel() {{
                                bioLink = "nihil";
                                bookingNotification = 649078;
                                calendarAvailability = 378245;
                                displayColor = "alias";
                                effectiveDate = OffsetDateTime.parse("2020-02-03T14:34:15.560Z");
                                gender = "female";
                                googleCalendarId = "id";
                                hourly = 3279.88;
                                ignoreBusinessHours = false;
                                notificationType = 293144;
                                outlookCalendarId = "dolorum";
                                sortKey = 200364;
                            }};
                            recurringAvailability = false;
                            serviceIds = new String[]{{
                                add("recusandae"),
                            }};
                            timezoneId = "omnis";
                        }}),
                        add(new ResourceBulkUpdateModel() {{
                            address = new AddressUpdateModel() {{
                                addressLine1 = "quaerat";
                                addressLine2 = "molestiae";
                                city = "Edfurt";
                                country = "Dominica";
                                postalCode = "54394-5349";
                                state = "provident";
                            }};
                            availability = new AvailabilityInputModel() {{
                                fri = new WeekDayInputModel() {{
                                    endTime = 133439;
                                    startTime = 354506;
                                }};
                                mon = new WeekDayInputModel() {{
                                    endTime = 96804;
                                    startTime = 657020;
                                }};
                                sat = new WeekDayInputModel() {{
                                    endTime = 343392;
                                    startTime = 652309;
                                }};
                                sun = new WeekDayInputModel() {{
                                    endTime = 591027;
                                    startTime = 821719;
                                }};
                                thu = new WeekDayInputModel() {{
                                    endTime = 659177;
                                    startTime = 402767;
                                }};
                                tue = new WeekDayInputModel() {{
                                    endTime = 397257;
                                    startTime = 37565;
                                }};
                                wed = new WeekDayInputModel() {{
                                    endTime = 999278;
                                    startTime = 984632;
                                }};
                            }};
                            contact = new ContactUpdateModel() {{
                                businessPhone = "ullam";
                                businessPhoneExt = "in";
                                conferenceInfo = "nam";
                                homePhone = "earum";
                                mobilePhone = "officia";
                                preferredPhoneType = "laborum";
                                skypeUsername = "placeat";
                            }};
                            customFields = new CustomFieldUpdateModel() {{
                                field1 = "modi";
                                field10 = "voluptatibus";
                                field2 = "molestias";
                                field3 = "officiis";
                                field4 = "sapiente";
                                field5 = "cumque";
                                field6 = "vitae";
                                field7 = "rerum";
                                field8 = "tempora";
                                field9 = "quis";
                            }};
                            description = "inventore";
                            email = "Nova24@gmail.com";
                            groupId = "aspernatur";
                            id = "648dc2f6-1519-49eb-bd0e-9fe6c632ca3a";
                            name = "Mr. Jody Altenwerth";
                            options = new ResourceOptionsUpdateModel() {{
                                bioLink = "natus";
                                bookingNotification = 581082;
                                calendarAvailability = 382440;
                                displayColor = "adipisci";
                                effectiveDate = OffsetDateTime.parse("2022-10-31T07:20:14.068Z");
                                gender = "male";
                                googleCalendarId = "nulla";
                                hourly = 8965.82;
                                ignoreBusinessHours = false;
                                notificationType = 58534;
                                outlookCalendarId = "tempora";
                                sortKey = 470621;
                            }};
                            recurringAvailability = false;
                            serviceIds = new String[]{{
                                add("dicta"),
                                add("iusto"),
                            }};
                            timezoneId = "esse";
                        }}),
                        add(new ResourceBulkUpdateModel() {{
                            address = new AddressUpdateModel() {{
                                addressLine1 = "praesentium";
                                addressLine2 = "maiores";
                                city = "Irving";
                                country = "Bhutan";
                                postalCode = "01424-4230";
                                state = "laborum";
                            }};
                            availability = new AvailabilityInputModel() {{
                                fri = new WeekDayInputModel() {{
                                    endTime = 123844;
                                    startTime = 344718;
                                }};
                                mon = new WeekDayInputModel() {{
                                    endTime = 856756;
                                    startTime = 713767;
                                }};
                                sat = new WeekDayInputModel() {{
                                    endTime = 399667;
                                    startTime = 639187;
                                }};
                                sun = new WeekDayInputModel() {{
                                    endTime = 381397;
                                    startTime = 399161;
                                }};
                                thu = new WeekDayInputModel() {{
                                    endTime = 21973;
                                    startTime = 431760;
                                }};
                                tue = new WeekDayInputModel() {{
                                    endTime = 374753;
                                    startTime = 614528;
                                }};
                                wed = new WeekDayInputModel() {{
                                    endTime = 661607;
                                    startTime = 70042;
                                }};
                            }};
                            contact = new ContactUpdateModel() {{
                                businessPhone = "error";
                                businessPhoneExt = "possimus";
                                conferenceInfo = "voluptates";
                                homePhone = "mollitia";
                                mobilePhone = "laborum";
                                preferredPhoneType = "libero";
                                skypeUsername = "ad";
                            }};
                            customFields = new CustomFieldUpdateModel() {{
                                field1 = "deleniti";
                                field10 = "enim";
                                field2 = "vitae";
                                field3 = "repellendus";
                                field4 = "ex";
                                field5 = "quo";
                                field6 = "ex";
                                field7 = "ut";
                                field8 = "ad";
                                field9 = "expedita";
                            }};
                            description = "voluptatem";
                            email = "Myriam53@yahoo.com";
                            groupId = "omnis";
                            id = "1baa0fe1-ade0-408e-af8c-5f350d8cdb5a";
                            name = "Michele Bode II";
                            options = new ResourceOptionsUpdateModel() {{
                                bioLink = "dolor";
                                bookingNotification = 8689;
                                calendarAvailability = 100014;
                                displayColor = "sit";
                                effectiveDate = OffsetDateTime.parse("2022-11-09T08:03:12.737Z");
                                gender = "female";
                                googleCalendarId = "laudantium";
                                hourly = 656.04;
                                ignoreBusinessHours = false;
                                notificationType = 222658;
                                outlookCalendarId = "fugiat";
                                sortKey = 369490;
                            }};
                            recurringAvailability = false;
                            serviceIds = new String[]{{
                                add("ipsa"),
                            }};
                            timezoneId = "quas";
                        }}),
                        add(new ResourceBulkUpdateModel() {{
                            address = new AddressUpdateModel() {{
                                addressLine1 = "eveniet";
                                addressLine2 = "impedit";
                                city = "Knoxville";
                                country = "Tokelau";
                                postalCode = "31744";
                                state = "voluptatum";
                            }};
                            availability = new AvailabilityInputModel() {{
                                fri = new WeekDayInputModel() {{
                                    endTime = 301692;
                                    startTime = 349440;
                                }};
                                mon = new WeekDayInputModel() {{
                                    endTime = 70410;
                                    startTime = 781480;
                                }};
                                sat = new WeekDayInputModel() {{
                                    endTime = 421844;
                                    startTime = 751022;
                                }};
                                sun = new WeekDayInputModel() {{
                                    endTime = 388319;
                                    startTime = 927212;
                                }};
                                thu = new WeekDayInputModel() {{
                                    endTime = 160393;
                                    startTime = 28952;
                                }};
                                tue = new WeekDayInputModel() {{
                                    endTime = 350207;
                                    startTime = 895692;
                                }};
                                wed = new WeekDayInputModel() {{
                                    endTime = 95619;
                                    startTime = 392569;
                                }};
                            }};
                            contact = new ContactUpdateModel() {{
                                businessPhone = "at";
                                businessPhoneExt = "vero";
                                conferenceInfo = "est";
                                homePhone = "harum";
                                mobilePhone = "sequi";
                                preferredPhoneType = "doloribus";
                                skypeUsername = "repudiandae";
                            }};
                            customFields = new CustomFieldUpdateModel() {{
                                field1 = "optio";
                                field10 = "occaecati";
                                field2 = "nemo";
                                field3 = "voluptate";
                                field4 = "blanditiis";
                                field5 = "officia";
                                field6 = "voluptas";
                                field7 = "numquam";
                                field8 = "nemo";
                                field9 = "quos";
                            }};
                            description = "eius";
                            email = "Jerrell_Dooley27@gmail.com";
                            groupId = "quasi";
                            id = "8d162309-fb09-4299-a1ae-fb9f58c4d86e";
                            name = "Deanna Wehner";
                            options = new ResourceOptionsUpdateModel() {{
                                bioLink = "vero";
                                bookingNotification = 32901;
                                calendarAvailability = 371919;
                                displayColor = "vel";
                                effectiveDate = OffsetDateTime.parse("2022-11-27T17:29:03.103Z");
                                gender = "female";
                                googleCalendarId = "maiores";
                                hourly = 3182.33;
                                ignoreBusinessHours = false;
                                notificationType = 575213;
                                outlookCalendarId = "nulla";
                                sortKey = 643678;
                            }};
                            recurringAvailability = false;
                            serviceIds = new String[]{{
                                add("nemo"),
                                add("reprehenderit"),
                            }};
                            timezoneId = "est";
                        }}),
                    }};
                }};;
                googleAuthReturnUrl = "quis";
                outlookAuthReturnUrl = "sint";
            }};            

            PutSetupV1ResourcesBulkResponse res = sdk.resources.putSetupV1ResourcesBulk(req);

            if (res.resourceViewModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesId

<p>Use this endpoint to <b>Update</b> a resource. A valid <b>resource id</b> is required.</p>
<p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
<p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
<p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdResponse;
import org.openapis.openapi.models.shared.AddressUpdateModel;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.ContactUpdateModel;
import org.openapis.openapi.models.shared.CustomFieldUpdateModel;
import org.openapis.openapi.models.shared.ResourceOptionsUpdateModel;
import org.openapis.openapi.models.shared.ResourceUpdateModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesIdRequest req = new PutSetupV1ResourcesIdRequest("impedit") {{
                resourceUpdateModel = new ResourceUpdateModel() {{
                    address = new AddressUpdateModel() {{
                        addressLine1 = "hic";
                        addressLine2 = "necessitatibus";
                        city = "Homestead";
                        country = "Haiti";
                        postalCode = "90766-2252";
                        state = "impedit";
                    }};;
                    availability = new AvailabilityInputModel() {{
                        fri = new WeekDayInputModel() {{
                            endTime = 166047;
                            startTime = 746585;
                        }};;
                        mon = new WeekDayInputModel() {{
                            endTime = 922757;
                            startTime = 721430;
                        }};;
                        sat = new WeekDayInputModel() {{
                            endTime = 294076;
                            startTime = 482892;
                        }};;
                        sun = new WeekDayInputModel() {{
                            endTime = 453094;
                            startTime = 194023;
                        }};;
                        thu = new WeekDayInputModel() {{
                            endTime = 493958;
                            startTime = 205566;
                        }};;
                        tue = new WeekDayInputModel() {{
                            endTime = 778172;
                            startTime = 535468;
                        }};;
                        wed = new WeekDayInputModel() {{
                            endTime = 844235;
                            startTime = 437814;
                        }};;
                    }};;
                    contact = new ContactUpdateModel() {{
                        businessPhone = "odit";
                        businessPhoneExt = "voluptatibus";
                        conferenceInfo = "vel";
                        homePhone = "magnam";
                        mobilePhone = "quibusdam";
                        preferredPhoneType = "inventore";
                        skypeUsername = "facere";
                    }};;
                    customFields = new CustomFieldUpdateModel() {{
                        field1 = "libero";
                        field10 = "architecto";
                        field2 = "voluptatibus";
                        field3 = "quia";
                        field4 = "porro";
                        field5 = "aliquam";
                        field6 = "velit";
                        field7 = "illo";
                        field8 = "accusantium";
                        field9 = "vel";
                    }};;
                    description = "ea";
                    email = "Seth.Mante@gmail.com";
                    groupId = "ut";
                    locationId = "perspiciatis";
                    name = "Keith Rutherford";
                    options = new ResourceOptionsUpdateModel() {{
                        bioLink = "itaque";
                        bookingNotification = 2677;
                        calendarAvailability = 391797;
                        displayColor = "itaque";
                        effectiveDate = OffsetDateTime.parse("2022-04-30T01:11:05.137Z");
                        gender = "female";
                        googleCalendarId = "dolor";
                        hourly = 4833.94;
                        ignoreBusinessHours = false;
                        notificationType = 24753;
                        outlookCalendarId = "doloremque";
                        sortKey = 7468;
                    }};;
                    recurringAvailability = false;
                    serviceIds = new String[]{{
                        add("recusandae"),
                        add("ea"),
                        add("quidem"),
                    }};
                    timezoneId = "voluptas";
                }};;
                googleAuthReturnUrl = "facilis";
                outlookAuthReturnUrl = "placeat";
            }};            

            PutSetupV1ResourcesIdResponse res = sdk.resources.putSetupV1ResourcesId(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesIdAvailability

<p>Use this endpoint to <b>Update</b> resource weekly availability. A valid <b>resource id</b> is required. The availability day entries are created when a resource object is created.</p>
<p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
<p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the resource. Resources can be set to any world timezone. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdAvailabilityRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdAvailabilityResponse;
import org.openapis.openapi.models.shared.AvailabilityInputModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WeekDayInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesIdAvailabilityRequest req = new PutSetupV1ResourcesIdAvailabilityRequest("expedita") {{
                availabilityInputModel = new AvailabilityInputModel() {{
                    fri = new WeekDayInputModel() {{
                        endTime = 537236;
                        startTime = 954334;
                    }};;
                    mon = new WeekDayInputModel() {{
                        endTime = 455579;
                        startTime = 351936;
                    }};;
                    sat = new WeekDayInputModel() {{
                        endTime = 600193;
                        startTime = 897543;
                    }};;
                    sun = new WeekDayInputModel() {{
                        endTime = 654082;
                        startTime = 769967;
                    }};;
                    thu = new WeekDayInputModel() {{
                        endTime = 373040;
                        startTime = 357425;
                    }};;
                    tue = new WeekDayInputModel() {{
                        endTime = 668234;
                        startTime = 621666;
                    }};;
                    wed = new WeekDayInputModel() {{
                        endTime = 456885;
                        startTime = 288570;
                    }};;
                }};;
            }};            

            PutSetupV1ResourcesIdAvailabilityResponse res = sdk.resources.putSetupV1ResourcesIdAvailability(req);

            if (res.resourceAvailabilityViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesIdReassignAppointmentsResourceId

<p>Use this endpoint to <b>Reassign</b> appointments from one resource to another. If the startDate is not supplied, the default is today's date + 1 day; If the endDate is not supplied, all future appointments from the start date will be reassigned. If the calendar id is not supplied the default is the primary calendar of the location.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest req = new PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest("vero", "consectetur") {{
                calendarId = "vitae";
                endDate = OffsetDateTime.parse("2022-10-15T11:04:29.234Z");
                startDate = OffsetDateTime.parse("2022-10-26T04:37:41.230Z");
            }};            

            PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse res = sdk.resources.putSetupV1ResourcesIdReassignAppointmentsResourceId(req);

            if (res.appointmentViewModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted resource. A valid <b>resource id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdRecoverRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdRecoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesIdRecoverRequest req = new PutSetupV1ResourcesIdRecoverRequest("ex") {{
                googleAuthReturnUrl = "nemo";
                outlookAuthReturnUrl = "soluta";
            }};            

            PutSetupV1ResourcesIdRecoverResponse res = sdk.resources.putSetupV1ResourcesIdRecover(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcesIdServices

<p>Use this endpoint to <b>Update</b> the linked services of a Resource. A valid <b>resource id</b> is required.</p>
<p>Updating services with this endpoint will update the linked services available to the resource. Only those services will be available to the resource.</p>
<p>
  <b>Note:</b> This is a destructive process, any existing linked services will be removed and replaced with the list of services supplied here. Provide the resources complete list of services when using this endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdServicesRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcesIdServicesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcesIdServicesRequest req = new PutSetupV1ResourcesIdServicesRequest("rem") {{
                requestBody = new String[]{{
                    add("odio"),
                    add("fugit"),
                    add("alias"),
                }};
            }};            

            PutSetupV1ResourcesIdServicesResponse res = sdk.resources.putSetupV1ResourcesIdServices(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
