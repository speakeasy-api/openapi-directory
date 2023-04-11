import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty.
 */
export declare enum GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum {
    MonthUnspecified = "MONTH_UNSPECIFIED",
    January = "JANUARY",
    February = "FEBRUARY",
    March = "MARCH",
    April = "APRIL",
    May = "MAY",
    June = "JUNE",
    July = "JULY",
    August = "AUGUST",
    September = "SEPTEMBER",
    October = "OCTOBER",
    November = "NOVEMBER",
    December = "DECEMBER"
}
/**
 * Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
 */
export declare class GoogleChromeManagementV1DeviceAueCountReport extends SpeakeasyBase {
    /**
     * Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty.
     */
    aueMonth?: GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum;
    /**
     * Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty.
     */
    aueYear?: string;
    /**
     * Count of devices of this model.
     */
    count?: string;
    /**
     * Boolean value for whether or not the device has already expired.
     */
    expired?: boolean;
    /**
     * Public model name of the devices.
     */
    model?: string;
}
