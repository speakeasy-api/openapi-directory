import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class NetworkUnblockResponseOk extends SpeakeasyBase {
    /**
     * The unique network ID
     */
    network?: string;
    /**
     * Gives the DateTime when the unblock will expire.
     */
    unblockedUntil?: string;
}
