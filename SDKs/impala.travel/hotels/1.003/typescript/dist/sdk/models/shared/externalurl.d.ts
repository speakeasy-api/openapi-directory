import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Destination of the external url
 */
export declare enum ExternalUrlNameEnum {
    BookingCom = "BOOKING.COM",
    HotelsCom = "HOTELS.COM"
}
export declare class ExternalUrl extends SpeakeasyBase {
    /**
     * Destination of the external url
     */
    name?: ExternalUrlNameEnum;
    /**
     * Value of the external url
     */
    url?: string;
}
