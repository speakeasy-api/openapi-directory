import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { VoiceStatusEnum } from "./voicestatusenum";
/**
 * Voice Call
 */
export declare class CsvVoice extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * UUID of the request.
     */
    callId?: string;
    /**
     * Country where the request was sent.
     */
    country?: string;
    /**
     * Country name where the request was sent.
     */
    countryName?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Date of the end of the call.
     */
    dateEnd?: Date;
    /**
     * Date of the start of the call.
     */
    dateStart?: Date;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: DirectionEnum;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Request from this number.
     */
    from?: string;
    /**
     * Network used to send the request.
     */
    network?: string;
    /**
     * Name of the network used to send the request.
     */
    networkName?: string;
    /**
     * Price of the request.
     */
    price?: number;
    /**
     * Search only for voice call with the corresponding status.
     */
    status?: VoiceStatusEnum;
    /**
     * Description of the status of the call.
     */
    statusDescription?: string;
    /**
     * Request to this number.
     */
    to?: string;
    /**
     * Total price of the request.
     */
    totalPrice?: number;
}
