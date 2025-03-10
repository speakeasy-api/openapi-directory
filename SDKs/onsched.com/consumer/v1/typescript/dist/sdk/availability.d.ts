import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Availability {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Available Times
     *
     * @remarks
     * <p>
     *   <b>Choose your search criteria carefully. Availability is an expensive call.</b> If you search availability for all resources, you should only do so for a single date. If you search availability for multiple dates, you should only do so for a specific resource by specifying the optional resourceId parameter.</p>
     * <p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
     * <p>A <b>resourceId</b> is optional, it is recommended if known at the time of availability call.</p>
     * <p>
     *   <b>timezoneName</b> is optional, it allows you to specify the IANA formatted name for the end user's timezone to view availability. e.g., <i>America/New_York</i>. <b>NOTE: This is the recommended approach for your implementation.</b>  The "tzOffset" parameter remains for backward compatibility.  For JavaScript, use moment.js in your client for ease of timezone detection and selection. For iOS, use the name property of the NSTimeZone returned from the localTimeZone method. For .NET, consider NodaTime or TimeZoneConverter via NuGet. </p>
     * <p>
     *   <b>duration</b> should only be populated if you allow the end user to select a duration, otherwise the service's duration will be used.</p>
     * <p>
     *   <b>startTime</b> and <b>endTime</b> are optional and are specified in <b>military time e.g., 800 = 8:00am, 2230 = 10:30pm</b>. Note: You will only see availability within the boundary of your business location start and end times.</p>
     * <p>
     *   <b>dayAvailability</b> will return day level availability for the number of days requested from the start date. See <i>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days</i> for details.</p>
     * <p>
     *   <b>firstDayAvailable</b> only works with day availability. If set to true it will look for the first day available within the range specified by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month. Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.</p>
     * <p>
     *   <b>tzOffset</b> allows you to pass in the timezone offset for the end user's timezone of choice, e.g., (-240) for EST. If you use this option, your application should be timezone aware. The requested timezone is specified as an offset (plus or minus) from GMT time.</p>
     * <p>Availability can be complex. For further troubleshooting refer to the: <i><b>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable</b></i> endpoint. This endpoint will show you all unavailable times for a given date range. Available times are created from any unblocked time periods. For more information: <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a></p>
     */
    getConsumerV1AvailabilityServiceIdStartDateEndDate(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse>;
    /**
     * Get Available Days
     *
     * @remarks
     * <p>This endpoint will return <b>Day Level Availability</b> for the range of dates requested. For example, if the business is closed, or there is a public holiday this endpoint will return that the "Day is unavailable".</p>
     * <p>Day Availability is a high-level check for Holidays and Open/Available hours of a location, service and/or resource and should be used to restrict your choices of days available in your application to improve usability and performance.</p>
     * <p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
     * <p>The locationId is optional, however if not supplied it defaults to the Primary Business Location for open/closed hours information. It is recommended you always provide the locationId.</p>
     * <p>A <b>resourceId</b> is optional. If used the available days will be return day availability for the resource specified.</p>
     * <p>The <b>tzOffset</b> parameter should be used if the appointment requester, the end user, is in a different timezone than the location or resource.</p>
     */
    getConsumerV1AvailabilityServiceIdStartDateEndDateDays(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse>;
    /**
     * Get Unavailable Times
     *
     * @remarks
     * <p>This endpoint is used to show <b>Unavailable</b> times and provides valuable information as to why a time slot is unavailable. If you question your availability results, populate the same parameters to this endpoint to find out why.</p>
     * <p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
     * <p>Location hours, holidays, services, resources, blocks, allocations, and appointments are just some of variables that may cause time slots to become unavailable. Use this endpoint to understand why you don't see availability.</p>
     */
    getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse>;
}
