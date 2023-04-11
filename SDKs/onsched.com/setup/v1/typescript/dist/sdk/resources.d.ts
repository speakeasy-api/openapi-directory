import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Resources {
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
     * <p>Use this endpoint to <b>Delete</b> a Resource Allocation. A valid <b>resourceAllocation id</b> is required.</p>
     */
    deleteSetupV1ResourcesAllocationsId(req: operations.DeleteSetupV1ResourcesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesAllocationsIdResponse>;
    /**
     * Delete Block
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>
     */
    deleteSetupV1ResourcesBlockId(req: operations.DeleteSetupV1ResourcesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesBlockIdResponse>;
    /**
     * Delete Resource
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> a resource. The resource is not permanently deleted and can be recovered. A valid <b>resource id</b> is required.</p>
     */
    deleteSetupV1ResourcesId(req: operations.DeleteSetupV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesIdResponse>;
    /**
     * Delete Resource Image
     *
     * @remarks
     * <p>Use this endpoint to permanently <b>Delete</b> a previously uploaded resource image. A valid <b>resource id</b> is required.</p>
     */
    deleteSetupV1ResourcesIdDeleteimage(req: operations.DeleteSetupV1ResourcesIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesIdDeleteimageResponse>;
    /**
     * Delete Linked Services
     *
     * @remarks
     * <p>Use this endpoint to <b>Delete</b> linked services from a Resource, i.e. unlink the services. A valid <b>resource id</b> is required. Once deleted, all services become available to the resource.</p>
     */
    deleteSetupV1ResourcesIdServices(req: operations.DeleteSetupV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesIdServicesResponse>;
    /**
     * List Resources
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Resources</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1Resources(req: operations.GetSetupV1ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesResponse>;
    /**
     * Get Allocation
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Resource Allocation</b>. A valid <b>resourceAllocation id</b> is required. </p>
     */
    getSetupV1ResourcesAllocationsId(req: operations.GetSetupV1ResourcesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesAllocationsIdResponse>;
    /**
     * Get Block
     *
     * @remarks
     * <p>Use this endpoint to <b>Get</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>
     */
    getSetupV1ResourcesBlocksId(req: operations.GetSetupV1ResourcesBlocksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesBlocksIdResponse>;
    /**
     * Get Time Zones
     *
     * @remarks
     * <p>Use this endpoint to return a <b>List of Time Zones</b>.</p>
     */
    getSetupV1ResourcesTimezones(config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesTimezonesResponse>;
    /**
     * Get Resource
     *
     * @remarks
     * <p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the: <i>GET /setup/v1/resources</i> endpoint.</p>
     */
    getSetupV1ResourcesId(req: operations.GetSetupV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdResponse>;
    /**
     * List Resource Allocations
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Resource Allocations</b> for a specified resource. We recommend using allocations if a resource's schedule changes frequently from day to day or week to week. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1ResourcesIdAllocations(req: operations.GetSetupV1ResourcesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdAllocationsResponse>;
    /**
     * List Weekly Availability
     *
     * @remarks
     * <p>Use this endpoint to view the <b>Weekly Availability</b> for a resource. The displayed available times are represented in the resource's timezone. The resource timezone can be set to any world timezone. If not provided, by default it is set to the Business timezone.</p>
     */
    getSetupV1ResourcesIdAvailability(req: operations.GetSetupV1ResourcesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdAvailabilityResponse>;
    /**
     * List Resource Blocks
     *
     * @remarks
     * <p>Use this endpoint to return a list of <b>Resource Blocks</b>. A valid <b>resource id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
     */
    getSetupV1ResourcesIdBlocks(req: operations.GetSetupV1ResourcesIdBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdBlocksResponse>;
    /**
     * Get Resource Google URL
     *
     * @remarks
     * <p>Use this endpoint to return the <b>Resources Google Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Google Email Address</b> are required.</p>
     */
    getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress(req: operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse>;
    /**
     * Get Resource Outlook URL
     *
     * @remarks
     * <p>Use this endpoint to return the <b>Resources Outlook Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Outlook Email Address</b> are required.</p>
     */
    getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress(req: operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse>;
    /**
     * Create Resource
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a new resource.</p>
     * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
     * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST  /setup /v1 /resources /{id} /services</i> endpoint for details about explicitly linking services.</p>
     * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
     */
    postSetupV1Resources(req: operations.PostSetupV1ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesResponse>;
    /**
     * Create Resources Bulk
     *
     * @remarks
     * <p>Use this endpoint to <b>Bulk Create</b> resources. Valid <b>resource ids</b> are required. The posted list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
     * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
     * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST  /setup /v1 /resources /{id} /services</i> endpoint for details about explicitly linking services.</p>
     * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
     */
    postSetupV1ResourcesBulk(req: operations.PostSetupV1ResourcesBulkRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesBulkResponse>;
    /**
     * Create Allocation
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a resource allocation for a resource. A valid <b>resource id</b> is required.</p>
     * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Resource allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. They can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
     * <p>
     *   <b>Repeat object: (repeats = true)</b>
     * </p>
     * <p>The <b>frequency</b> can be set to a value of <b>D, W or M </b>for <b>Day, Week</b> or <b>Month</b> respectively.</p>
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
    postSetupV1ResourcesIdAllocations(req: operations.PostSetupV1ResourcesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdAllocationsResponse>;
    /**
     * Create Block
     *
     * @remarks
     * <p>Use this endpoint to <b>Create</b> a Resource Block. A valid <b>resource id</b> is required.</p>
     * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
     * <p>Resource blocks can be set to specific time ranges or for the whole day. Use the <b>AllDay</b> setting to create an all-day block. <b>AllDay</b> will automatically set startTime to 0 and endTime to 2400.</p>
     * <p>Resource blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
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
     *   <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”. </p>
     * <p>
     *   <b>Repeats will end on the date specified by the end date.</b>
     * </p>
     */
    postSetupV1ResourcesIdBlock(req: operations.PostSetupV1ResourcesIdBlockRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdBlockResponse>;
    /**
     * Create Linked Services
     *
     * @remarks
     * <p>Use this endpoint to explicitly <b>Link Services</b> to a Resource. A valid <b>resource id</b> is required.</p>
     * <p>
     *   <b>Note:</b> By default, the services array is empty which signifies that all services are provided by the resource. Linking services here will add to the linked service(s) array available to this resource. This will limit the services available to the resource.</p>
     * <p>You cannot post services that already exist in the array, you can only add new ones. Use the <i>PUT  /setup /v1 /resources /{id} /services</i> endpoint to update the entire list.</p>
     */
    postSetupV1ResourcesIdServices(req: operations.PostSetupV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdServicesResponse>;
    /**
     * Upload Resource Image
     *
     * @remarks
     * <p>Use this endpoint to <b>Upload</b> a resource image to the resource. A valid <b>resource id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>
     */
    postSetupV1ResourcesIdUploadimage(req: operations.PostSetupV1ResourcesIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdUploadimageResponse>;
    /**
     * Update Allocation
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a resource allocation. A valid <b>resourceAllocation id</b> is required. Refer to the <i>POST /setup/v1/resources/{id}/allocations</i> endpoint for details.</p>
     */
    putSetupV1ResourcesAllocationsId(req: operations.PutSetupV1ResourcesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesAllocationsIdResponse>;
    /**
     * Update Block
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a Resource Block. A valid <b>resourceBlock id</b> is required. Refer to the <i>POST  /setup /v1 /resources /{id} /block</i> endpoint for fieldnames and details.</p>
     */
    putSetupV1ResourcesBlockId(req: operations.PutSetupV1ResourcesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesBlockIdResponse>;
    /**
     * Update Resources Bulk
     *
     * @remarks
     * <p>Use this endpoint to <b>Bulk Update</b> resources. Valid <b>resource id's</b> are required. The list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
     * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
     * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST  /setup /v1 /resources /{id} /services</i> endpoint for details about explicitly linking services.</p>
     * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
     */
    putSetupV1ResourcesBulk(req: operations.PutSetupV1ResourcesBulkRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesBulkResponse>;
    /**
     * Update Resource
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> a resource. A valid <b>resource id</b> is required.</p>
     * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
     * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST  /setup /v1 /resources /{id} /services</i> endpoint for details about explicitly linking services.</p>
     * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
     */
    putSetupV1ResourcesId(req: operations.PutSetupV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdResponse>;
    /**
     * Update Weekly Availability
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> resource weekly availability. A valid <b>resource id</b> is required. The availability day entries are created when a resource object is created.</p>
     * <p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
     * <p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the resource. Resources can be set to any world timezone. </p>
     */
    putSetupV1ResourcesIdAvailability(req: operations.PutSetupV1ResourcesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdAvailabilityResponse>;
    /**
     * Reassign Resource
     *
     * @remarks
     * <p>Use this endpoint to <b>Reassign</b> appointments from one resource to another. If the startDate is not supplied, the default is today's date + 1 day; If the endDate is not supplied, all future appointments from the start date will be reassigned. If the calendar id is not supplied the default is the primary calendar of the location.</p>
     */
    putSetupV1ResourcesIdReassignAppointmentsResourceId(req: operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse>;
    /**
     * Recover Resource
     *
     * @remarks
     * <p>Use this endpoint to <b>Recover</b> a deleted resource. A valid <b>resource id</b> is required.</p>
     */
    putSetupV1ResourcesIdRecover(req: operations.PutSetupV1ResourcesIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdRecoverResponse>;
    /**
     * Update Linked Services
     *
     * @remarks
     * <p>Use this endpoint to <b>Update</b> the linked services of a Resource. A valid <b>resource id</b> is required.</p>
     * <p>Updating services with this endpoint will update the linked services available to the resource. Only those services will be available to the resource.</p>
     * <p>
     *   <b>Note:</b> This is a destructive process, any existing linked services will be removed and replaced with the list of services supplied here. Provide the resources complete list of services when using this endpoint.</p>
     */
    putSetupV1ResourcesIdServices(req: operations.PutSetupV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdServicesResponse>;
}
