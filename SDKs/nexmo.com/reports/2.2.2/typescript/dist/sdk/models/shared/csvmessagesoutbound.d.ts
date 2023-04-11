import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
/**
 * Outbound Messages
 */
export declare class CsvMessagesOutbound extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Search for messages with this `client_ref`.
     */
    clientRef?: string;
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
     * Date when the request was finalized.
     */
    dateFinalized?: Date;
    /**
     * Date of the request.
     */
    dateReceived?: Date;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: DirectionEnum;
    /**
     * Error code of the message.
     */
    errorCode?: string;
    /**
     * Request from this number.
     */
    from?: string;
    /**
     * Latency of the request in ms.
     */
    latency?: number;
    /**
     * Body of the message sent. Only present if include_message parameter is set to true.
     */
    messageBody?: string;
    /**
     * Id of the request.
     */
    messageId?: string;
    /**
     * Provider of the message.
     */
    provider?: string;
    /**
     * Status of the message.
     */
    status?: string;
    /**
     * Request to this number.
     */
    to?: string;
    /**
     * Total price of the request.
     */
    totalPrice?: number;
}
