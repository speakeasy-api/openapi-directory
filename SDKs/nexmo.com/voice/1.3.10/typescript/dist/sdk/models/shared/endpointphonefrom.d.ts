import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Connect to a Phone (PSTN) number
 */
export declare class EndpointPhoneFrom extends SpeakeasyBase {
    /**
     * The phone number to connect to
     */
    number: string;
    /**
     * The type of connection. Must be `phone`
     */
    type: string;
}
