import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the end user's device
 */
export declare class SignalDevice extends SpeakeasyBase {
    /**
     * The IP address of the device that initiated the transaction
     */
    ipAddress?: string;
    /**
     * The user agent of the device that initiated the transaction (e.g. "Mozilla/5.0")
     */
    userAgent?: string;
}
