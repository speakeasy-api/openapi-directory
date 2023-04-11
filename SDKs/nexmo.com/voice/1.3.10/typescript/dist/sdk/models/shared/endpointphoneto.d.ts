import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Connect to a Phone (PSTN) number
 */
export declare class EndpointPhoneTo extends SpeakeasyBase {
    /**
     * Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered
     */
    dtmfAnswer?: string;
    /**
     * The phone number to connect to
     */
    number: string;
    /**
     * The type of connection. Must be `phone`
     */
    type: string;
}
