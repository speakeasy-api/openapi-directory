import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
/**
 * Inbound Messages
 */
export declare class CsvMessagesInbound extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Currency of the price of the request.
     */
    currency?: string;
    /**
     * Date of the request.
     */
    dateReceived?: Date;
    /**
     * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
     */
    direction?: DirectionEnum;
    /**
     * Request from this number.
     */
    from?: string;
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
     * Request to this number.
     */
    to?: string;
    /**
     * Total price of the request.
     */
    totalPrice?: number;
}
