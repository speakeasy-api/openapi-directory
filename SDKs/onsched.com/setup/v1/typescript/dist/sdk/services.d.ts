import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSetupV1ServicesAllocationsId - Delete a service allocation object
     *
     * Deletes a service allocation.
    **/
    deleteSetupV1ServicesAllocationsId(req: operations.DeleteSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesAllocationsIdResponse>;
    /**
     * deleteSetupV1ServicesBlockId - Delete a service block object
     *
     * Deletes a service block.
    **/
    deleteSetupV1ServicesBlockId(req: operations.DeleteSetupV1ServicesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesBlockIdResponse>;
    /**
     * deleteSetupV1ServicesBookingwindowsId - Permanently deletes bookingWindow object.
     *
     * Use this endpoint to permanently delete a bookingWindow.
    **/
    deleteSetupV1ServicesBookingwindowsId(req: operations.DeleteSetupV1ServicesBookingwindowsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesBookingwindowsIdResponse>;
    deleteSetupV1ServicesCalendarId(req: operations.DeleteSetupV1ServicesCalendarIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesCalendarIdResponse>;
    /**
     * deleteSetupV1ServicesId - Deletes a service object.
     *
     * Use this endpoint to delete a service. The service is not permanently deleted and can be recovered.
    **/
    deleteSetupV1ServicesId(req: operations.DeleteSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesIdResponse>;
    /**
     * deleteSetupV1ServicesIdDeleteimage - Removes a service image
     *
     * Use this endpoint to delete a previously uploaded service image.
    **/
    deleteSetupV1ServicesIdDeleteimage(req: operations.DeleteSetupV1ServicesIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesIdDeleteimageResponse>;
    /**
     * getSetupV1Services - Returns a list of services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Services(req: operations.GetSetupV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesResponse>;
    /**
     * getSetupV1ServicesAllocationsId - Get a service allocation
    **/
    getSetupV1ServicesAllocationsId(req: operations.GetSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesAllocationsIdResponse>;
    /**
     * getSetupV1ServicesBlocksId - Get a service block
    **/
    getSetupV1ServicesBlocksId(req: operations.GetSetupV1ServicesBlocksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesBlocksIdResponse>;
    /**
     * getSetupV1ServicesBookingwindowsId - Get a booking window
    **/
    getSetupV1ServicesBookingwindowsId(req: operations.GetSetupV1ServicesBookingwindowsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesBookingwindowsIdResponse>;
    /**
     * getSetupV1ServicesId - Returns a service object.
     *
     * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
     * or the GET consumer/v1/appointments end point.
    **/
    getSetupV1ServicesId(req: operations.GetSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdResponse>;
    /**
     * getSetupV1ServicesIdAllocations - Returns a list of service allocations.
     *
     * This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event
     * against the service.
     *
     * You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
     * pass in the service id.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdAllocations(req: operations.GetSetupV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdAllocationsResponse>;
    /**
     * getSetupV1ServicesIdAvailability - Returns a list of weekly availability
     *
     * Use this endpoint to get weekly availability for a service.
    **/
    getSetupV1ServicesIdAvailability(req: operations.GetSetupV1ServicesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdAvailabilityResponse>;
    /**
     * getSetupV1ServicesIdBlocks - Returns a list of service blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdBlocks(req: operations.GetSetupV1ServicesIdBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdBlocksResponse>;
    /**
     * getSetupV1ServicesIdBookingwindows - Returns a list of service booking windows.
     *
     * This endpoint is used to retrieve any booking windows related to the service
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdBookingwindows(req: operations.GetSetupV1ServicesIdBookingwindowsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdBookingwindowsResponse>;
    /**
     * getSetupV1ServicesIdCalendar - Returns the linked calendar for the service
     *
     * Use this endpoint to get the linked calendar for the service.
     * A service can only be linked to one calendar in a location.
    **/
    getSetupV1ServicesIdCalendar(req: operations.GetSetupV1ServicesIdCalendarRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdCalendarResponse>;
    /**
     * getSetupV1ServicesIdResources - Returns a list of resources for the specified service.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdResources(req: operations.GetSetupV1ServicesIdResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdResourcesResponse>;
    /**
     * postSetupV1Services - Creates a new service object.
     *
     * Use this endpoint to create a new service. If not specified the business location id defaults to the first location in the company.
     * The service Type defaults to 1 if not entered.
     * The service Type can be one of the following values:
     * 1 = Appointment
     * 2 = Event
     * 3 = Meeting
    **/
    postSetupV1Services(req: operations.PostSetupV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesResponse>;
    /**
     * postSetupV1ServicesBookingwindows - Creates a new bookingWindow object.
     *
     * Use this endpoint to create a new bookingWindow.
    **/
    postSetupV1ServicesBookingwindows(req: operations.PostSetupV1ServicesBookingwindowsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesBookingwindowsResponse>;
    /**
     * postSetupV1ServicesCalendar - Links the service to a calendar
     *
     * Use this endpoint to link a service to a calendar.
    **/
    postSetupV1ServicesCalendar(req: operations.PostSetupV1ServicesCalendarRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesCalendarResponse>;
    /**
     * postSetupV1ServicesIdAllocations - Create a new service allocation
     *
     * Creates a new service allocation. You must specify a StartDate and EndDate.
     * A reason for the allocation is also required. This reason will display in the OnSched Portal Calendar.
     *
     * Service allocations are used primarily for event type services. The allocation represents an occurrence of an allocation.
     *
     * Service allocations can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     *
     * Service allocations can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
     *
     * Daily allocations will repeat for each day of the week for the date range specified.
     *
     * Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     *
     * Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     *
     * Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     *
     * Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in the EndDate field to indicate the repeating block
     * should continue indefinitely.
    **/
    postSetupV1ServicesIdAllocations(req: operations.PostSetupV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdAllocationsResponse>;
    /**
     * postSetupV1ServicesIdAllocationsBulk - Create new service allocations in bulk
     *
     * Creates new service allocations in bulk. Refer to documentation
     * for creating a single Service Allocation POST /setup/v1/services/{id}/allocations
     * for understanding how to populate the properties
     *
     * Use this endpoint only if you need to POST multiple allocations in one call
    **/
    postSetupV1ServicesIdAllocationsBulk(req: operations.PostSetupV1ServicesIdAllocationsBulkRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdAllocationsBulkResponse>;
    /**
     * postSetupV1ServicesIdBlock - Create a new service block
     *
     * Creates a new service block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     *
     * Service blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     *
     * Service blocks can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
     *
     * Daily blocks will repeat for each day of the week for the date range specified.
     *
     * Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     *
     * Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     *
     * Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     *
     * Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in
     * the EndDate field to indicate the repeating block should continue indefinitely.
    **/
    postSetupV1ServicesIdBlock(req: operations.PostSetupV1ServicesIdBlockRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdBlockResponse>;
    /**
     * postSetupV1ServicesIdUploadimage - Uploads a service image
     *
     * Use this endpoint to upload a service image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    postSetupV1ServicesIdUploadimage(req: operations.PostSetupV1ServicesIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdUploadimageResponse>;
    /**
     * putSetupV1ServicesAllocationsId - Update a service allocation
     *
     * Updates a service allocation. Refer to the details in the POST service allocation for setting each of the required parameters.
    **/
    putSetupV1ServicesAllocationsId(req: operations.PutSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesAllocationsIdResponse>;
    /**
     * putSetupV1ServicesBlockId - Update a service block
     *
     * Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
    **/
    putSetupV1ServicesBlockId(req: operations.PutSetupV1ServicesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesBlockIdResponse>;
    /**
     * putSetupV1ServicesBookingwindowsId - Updates a bookingWindow object.
     *
     * Use this endpoint to update a booking window
    **/
    putSetupV1ServicesBookingwindowsId(req: operations.PutSetupV1ServicesBookingwindowsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesBookingwindowsIdResponse>;
    /**
     * putSetupV1ServicesId - Updates a service object.
     *
     * Use this endpoint to update a service.
    **/
    putSetupV1ServicesId(req: operations.PutSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdResponse>;
    /**
     * putSetupV1ServicesIdAvailability - Updates Weekly Availability
     *
     * Use this endpoint to update service availability. The Id parameter specifies the service
     * for which you are updating availability. Availability day entries do not need to be created.
     * The availbility day entries are created when a service object is created. They default to
     * the business hours.
     *
     * Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
     * Start and End Times are entered in miltary format. e.g 2230 is 10:30pm.
     *
     * OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
     *
     * To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
     * to be unavailable, use the resource blocks endpoints.
     *
     * Times entered represent the timezone of the business location.
    **/
    putSetupV1ServicesIdAvailability(req: operations.PutSetupV1ServicesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdAvailabilityResponse>;
    /**
     * putSetupV1ServicesIdRecover - Recovers a service object.
     *
     * Use this endpoint to recover a deleted service.
    **/
    putSetupV1ServicesIdRecover(req: operations.PutSetupV1ServicesIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdRecoverResponse>;
}
