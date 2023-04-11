import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. Settings were updated if supplied, the details of the current settings are included in the response.
 */
export declare class AccountSettings extends SpeakeasyBase {
    /**
     * The current or updated delivery receipt webhook URI
     */
    drCallbackUrl?: string;
    /**
     * The maximum number of API calls per second.
     */
    maxCallsPerSecond?: number;
    /**
     * The maximum number of inbound messages per second.
     */
    maxInboundRequest?: number;
    /**
     * The maximum number of outbound messages per second.
     */
    maxOutboundRequest?: number;
    /**
     * The current or updated inbound message webhook URI
     */
    moCallbackUrl?: string;
}
