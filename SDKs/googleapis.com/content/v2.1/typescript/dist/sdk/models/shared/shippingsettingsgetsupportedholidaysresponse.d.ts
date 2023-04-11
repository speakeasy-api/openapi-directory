import { SpeakeasyBase } from "../../../internal/utils";
import { HolidaysHoliday } from "./holidaysholiday";
/**
 * Successful response
 */
export declare class ShippingsettingsGetSupportedHolidaysResponse extends SpeakeasyBase {
    /**
     * A list of holidays applicable for delivery guarantees. May be empty.
     */
    holidays?: HolidaysHoliday[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedHolidaysResponse`".
     */
    kind?: string;
}
