import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Allocation
     *
     * @remarks
     * <p>Use this endpoint to permanently <b>Delete</b> a service allocation. A valid <b>serviceAllocation id</b> is required.</p>
     */
    deleteSetupV1ServicesAllocationsId(req: operations.DeleteSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesAllocationsIdResponse>;
    /**
     * Delete Block
     *
     * @remarks
     * <p>Use this endpoint to permanently <b>Delete</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>
     */
    deleteSetupV1ServicesBlockId(req: operations.DeleteSetupV1ServicesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesBlockIdResponse>;
    /**
     * Delete Service Links
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> service links from the calendar specified. A valid <b>calendar id</b> is required.</p>
     */
    deleteSetupV1ServicesCalendarId(req: operations.DeleteSetupV1ServicesCalendarIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesCalendarIdResponse>;
    /**
     * Delete Service
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a service object. A valid <b>service id</b> is required. The service is not permanently deleted and can be recovered by using the <i>PUT /setup /v1 /services /{id} /recover</i> endpoint.</p>
     */
    deleteSetupV1ServicesId(req: operations.DeleteSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesIdResponse>;
    /**
     * Delete Service Image
     *
     * @remarks
     * <p>Use this endpoint to permanently <b>Delete</b> a previously uploaded service image. A valid <b>service id</b> is required.</p>
     */
    deleteSetupV1ServicesIdDeleteimage(req: operations.DeleteSetupV1ServicesIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesIdDeleteimageResponse>;
    /**
     * List Services
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Service</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1Services(req: operations.GetSetupV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesResponse>;
    /**
     * Get Allocation
     *
     * @remarks
     * <p>Use this endpoint to <b>Get a Service Allocation</b>. A valid <b>serviceAllocation id</b> is required.</p>
     */
    getSetupV1ServicesAllocationsId(req: operations.GetSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesAllocationsIdResponse>;
    /**
     * Get Block
     *
     * @remarks
     * <p>Use this endpoint to <b>Get a Service Block</b>. A valid <b>serviceBlock id</b> is required.</p>
     */
    getSetupV1ServicesBlocksId(req: operations.GetSetupV1ServicesBlocksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesBlocksIdResponse>;
    /**
     * Get Service
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /setup/v1/services</i> endpoint.</p>
     */
    getSetupV1ServicesId(req: operations.GetSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdResponse>;
    /**
     * List Service Allocations
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Service Allocations</b> for a specified service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b> where the events are offered on specific dates and times. Retrieve all allocations for a location by passing in 0 as the service id.</p>
     * <p>The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1ServicesIdAllocations(req: operations.GetSetupV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdAllocationsResponse>;
    /**
     * Get Weekly Availability
     *
     * @remarks
     * <p>Use this endpoint to return the <b>Weekly Service Availability</b> for an appointment service. A valid <b>service id</b> is required. Weekly availability is returned for services where the Type = 1. For event type services, where service Type = 2, refer to the <i>GET  /setup /v1 /services /{id} /allocations</i> endpoint.</p>
     */
    getSetupV1ServicesIdAvailability(req: operations.GetSetupV1ServicesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdAvailabilityResponse>;
    /**
     * List Service Blocks
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Service Blocks</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1ServicesIdBlocks(req: operations.GetSetupV1ServicesIdBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdBlocksResponse>;
    /**
     * Get Linked Calendar
     *
     * @remarks
     * <p>Use this endpoint to <b>Get the Linked Calendar</b> for the service requested. A valid <b>service id</b> is required. A service can only be linked to one calendar in a location.</p>
     */
    getSetupV1ServicesIdCalendar(req: operations.GetSetupV1ServicesIdCalendarRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdCalendarResponse>;
    /**
     * List Resources for Service
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Resources</b> that provide the requested service. A valid <b>service id</b> is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1ServicesIdResources(req: operations.GetSetupV1ServicesIdResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdResourcesResponse>;
    /**
     * Create Service
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a new service. If not specified, the business location defaults to the primary business location. Note: Posting a service to the Primary Business Location will scope as company scoped and make the service available to all locations. If you want a service to only be available from a specific location, include the business location id.</p>
     * <p>Required fields: <b>Name</b> and <b>Duration</b></p>
     * <p>The service <b>Type</b> is either, <b>1 = Appointment</b> or <b>2 = Event</b>. Default is 1 if not specified.</p>
     * <p>For type = 1, Appointments - Create an availability entry for each weekday to provide the service for. <b>All days of the week must be provided when adding service availability.</b> Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. Start and End Times are entered in military format. e.g., 800 is 8:00am, 2230 is 10:30pm. If not provided, it defaults to the primary location business hours.</p>
     * <p>We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. If you require times in between specified hours to be unavailable, use the service block endpoint at: <i>POST  /setup /v1 /services /{id} /block</i>.</p>
     * <p>For type = 2, Events - Create service allocations for their availability. Refer to the: <i>POST /setup /v1 /services /{id} /allocations</i> to set up service allocations for the event.</p>
     * <p>Options are available for customer selected durations, for details: <a href="https://docs.onsched.com/docs/services-overview#variable-duration">Variable Duration Overview</a></p>
     * <p>Additional parameters include but are not limited to bookingLimit, maxCapacity and maxGroupSize. For details: <a href="https://docs.onsched.com/docs/service-max-capacity">Service Limits Overview</a></p>
     */
    postSetupV1Services(req: shared.ServiceInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesResponse>;
    /**
     * Link Service to Calendar
     *
     * @remarks
     * <p>Use this endpoint to <b>Link a Service</b> to a calendar. </p>
     */
    postSetupV1ServicesCalendar(req: shared.ServiceCalendarInputModel, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesCalendarResponse>;
    /**
     * Create Allocation
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a service allocation for a service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b>. Service allocations allow you to specify the time(s) a service is available as opposed to using weekly availability which represents a weekly schedule, ie: Mon-Fri 9am-5pm.</p>
     * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Service allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. Service allocations can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
     * <p>
     *   <b>Repeat object: (repeats = true)</b>
     * </p>
     * <p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
     * <p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>
     * <p>
     *   <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
     * <p>
     *   <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>
     * <p>
     *   <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
     * <p>
     *   <b>Repeats will end on the date specified by the end date.</b>
     * </p>
     */
    postSetupV1ServicesIdAllocations(req: operations.PostSetupV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdAllocationsResponse>;
    /**
     * Create Allocations Bulk
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> bulk service allocations. A valid <b>service id</b> is required. Use this endpoint only if you need to POST multiple service allocations in one transaction. For details refer to: <a href="POST  /setup /v1 /services /{id} /allocations">Post Service Allocation</a></p>
     */
    postSetupV1ServicesIdAllocationsBulk(req: operations.PostSetupV1ServicesIdAllocationsBulkRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdAllocationsBulkResponse>;
    /**
     * Create Block
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a Service Block. A valid <b>service id</b> is required.</p>
     * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
     * <p>Service blocks can be set to specific time ranges or for the whole day. To block a whole day set startTime to 0 and endTime to 2400.</p>
     * <p>Service blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
     * <p>
     *   <b>Repeat object: (repeats = true)</b>
     * </p>
     * <p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
     * <p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
     * <p>
     *   <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
     * <p>
     *   <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
     * <p>
     *   <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
     * <p>
     *   <b>Repeats will end on the date specified by the end date.</b>
     * </p>
     */
    postSetupV1ServicesIdBlock(req: operations.PostSetupV1ServicesIdBlockRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdBlockResponse>;
    /**
     * Upload Service Image
     *
     * @remarks
     * <p>Use this endpoint to <b>Upload</b> an image to the service. A valid <b>service id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>
     */
    postSetupV1ServicesIdUploadimage(req: operations.PostSetupV1ServicesIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdUploadimageResponse>;
    /**
     * Update Allocation
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a service allocation. A valid <b>serviceAllocation id</b> is required. Refer to the <i>POST /setup/v1/services/{id}/allocations</i> endpoint for fields names and details.</p>
     */
    putSetupV1ServicesAllocationsId(req: operations.PutSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesAllocationsIdResponse>;
    /**
     * Update Block
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>
     */
    putSetupV1ServicesBlockId(req: operations.PutSetupV1ServicesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesBlockIdResponse>;
    /**
     * Update Service
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a service object. A valid <b>service id</b> is required.</p>
     */
    putSetupV1ServicesId(req: operations.PutSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdResponse>;
    /**
     * Update Weekly Availability
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> service weekly availability. A valid <b>service id</b> is required. The availability day entries are created when a service object is created.</p>
     * <p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
     * <p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the business location.</p>
     */
    putSetupV1ServicesIdAvailability(req: operations.PutSetupV1ServicesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdAvailabilityResponse>;
    /**
     * Recover Service
     *
     * @remarks
     * <p>Use this endpoint to <b>Recover</b> a deleted service object. A valid <b>service id</b> is required.</p>
     */
    putSetupV1ServicesIdRecover(req: operations.PutSetupV1ServicesIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdRecoverResponse>;
}
