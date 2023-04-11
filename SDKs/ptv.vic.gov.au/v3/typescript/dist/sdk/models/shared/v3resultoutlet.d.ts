import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3ResultOutlet extends SpeakeasyBase {
    /**
     * The business name of the outlet
     */
    outletBusiness?: string;
    /**
     * The business hours on Friday
     */
    outletBusinessHourFri?: string;
    /**
     * The business hours on Monday
     */
    outletBusinessHourMon?: string;
    /**
     * The business hours on Saturday
     */
    outletBusinessHourSat?: string;
    /**
     * The business hours on Sunday
     */
    outletBusinessHourSun?: string;
    /**
     * The business hours on Thursday
     */
    outletBusinessHourThur?: string;
    /**
     * The business hours on Tuesday
     */
    outletBusinessHourTue?: string;
    /**
     * The business hours on Wednesday
     */
    outletBusinessHourWed?: string;
    /**
     * Distance of outlet from input location (in metres); returns 0 if no location is input
     */
    outletDistance?: number;
    /**
     * Geographic coordinate of latitude at outlet
     */
    outletLatitude?: number;
    /**
     * Geographic coordinate of longitude at outlet
     */
    outletLongitude?: number;
    /**
     * The location name of the outlet
     */
    outletName?: string;
    /**
     * Any additional notes for the outlet such as 'Buy pre-loaded myki cards only'. May be null/empty.
     */
    outletNotes?: string;
    /**
     * The postcode for the outlet
     */
    outletPostcode?: number;
    /**
     * The SLID / SPID
     */
    outletSlidSpid?: string;
    /**
     * The city/municipality the outlet is in
     */
    outletSuburb?: string;
}
