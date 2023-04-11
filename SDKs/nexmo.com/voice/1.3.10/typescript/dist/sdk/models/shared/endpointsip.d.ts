import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Connect to a SIP Endpoint
 */
export declare class EndpointSip extends SpeakeasyBase {
    /**
     * The type of connection. Must be `sip`
     */
    type: string;
    /**
     * The SIP URI to connect to
     */
    uri?: string;
}
