import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Calendars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSetupV1CalendarsBlockId - Delete a calendar block object
     *
     * Deletes a calendar block.
    **/
    deleteSetupV1CalendarsBlockId(req: operations.DeleteSetupV1CalendarsBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CalendarsBlockIdResponse>;
    /**
     * deleteSetupV1CalendarsId - Deletes a calendar object.
     *
     * Use this endpoint to delete a calendar. The calendar is not permanently deleted and can be recovered.
    **/
    deleteSetupV1CalendarsId(req: operations.DeleteSetupV1CalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CalendarsIdResponse>;
    /**
     * getSetupV1Calendars - Returns a list of calendars.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Calendars(req: operations.GetSetupV1CalendarsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsResponse>;
    /**
     * getSetupV1CalendarsBlocksId - Update a calendar block
    **/
    getSetupV1CalendarsBlocksId(req: operations.GetSetupV1CalendarsBlocksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsBlocksIdResponse>;
    /**
     * getSetupV1CalendarsId - Returns a calendar object.
     *
     * The result returned is a single calendar object. An id is required to find the calendar.
    **/
    getSetupV1CalendarsId(req: operations.GetSetupV1CalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsIdResponse>;
    /**
     * getSetupV1CalendarsIdBlocks - Returns a list of calendar blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1CalendarsIdBlocks(req: operations.GetSetupV1CalendarsIdBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsIdBlocksResponse>;
    /**
     * getSetupV1CalendarsIdServices - Returns a list of services linked to a calendar.
     *
     * The result returned is a list of services. An id is required to find the service. Find calendar id's using either the GET setup/v1/calendars end point
    **/
    getSetupV1CalendarsIdServices(req: operations.GetSetupV1CalendarsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsIdServicesResponse>;
    /**
     * postSetupV1Calendars - Creates a new calendar object.
     *
     * Use this endpoint to create an additional calendar. If not specified, the business location id defaults to the primary location of the company.<br /><br />
     * Note: Every location has a primary calendar. All appointments will be booked to that calendar unless otherwise specified with a linked service.<br /><br />
     * name is a required parameter<br /><br />
     * type is a required parameter with a value of “resource”<br /><br />
     * interval is a required parameter with a value of 1,5,10,15,20,30,60<br /><br />
     * bookingsPerSlot is a required parameter with a value between 1 and 20<br /><br />
     * scheduleGroupId is an optional parameter.If supplied, it must be a valid Resource Group Id<br /><br />
     * weekly availability is optional.If this element is not populated, then weekly availability defaults to the business hours<br /><br />
    **/
    postSetupV1Calendars(req: operations.PostSetupV1CalendarsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CalendarsResponse>;
    /**
     * postSetupV1CalendarsIdBlock - Create a new calendar block
     *
     * Creates a new calendar block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     *
     * Calendar blocks can be set to specific time ranges or for the whole day.
     *
     * Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.
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
     * Repeat blocks will end on the date specified by the end date. You can specify never in the EndDateTime field to indicate the repeating block
     * should continue indefinitely.
    **/
    postSetupV1CalendarsIdBlock(req: operations.PostSetupV1CalendarsIdBlockRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CalendarsIdBlockResponse>;
    /**
     * putSetupV1CalendarsBlockId - Update a calendar block
     *
     * Updates a calendar block. Refer to the details in the POST calendar block for setting each of the required parameters.
    **/
    putSetupV1CalendarsBlockId(req: operations.PutSetupV1CalendarsBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CalendarsBlockIdResponse>;
    /**
     * putSetupV1CalendarsId - Updates a calendar object.
     *
     * Use this endpoint to update a calendar.
     * Calendar availability is optional. If this element is not populated then weekly availability is not updated
    **/
    putSetupV1CalendarsId(req: operations.PutSetupV1CalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CalendarsIdResponse>;
    /**
     * putSetupV1CalendarsIdRecover - Recovers a calendar object.
     *
     * Use this endpoint to recover a deleted calendar.
    **/
    putSetupV1CalendarsIdRecover(req: operations.PutSetupV1CalendarsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CalendarsIdRecoverResponse>;
}
