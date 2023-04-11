import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Direction of the communication, either `inbound` (received by our services), or `outbound` (originated from our services). Required for products `SMS` and `MESSAGES`. Optional for `VOICE-CALL`. Invalid for `IN-APP-VOICE`, `CONVERSATIONS`, `NUMBER-INSIGHT`, `VERIFY-API`.
 */
export declare enum JsonSmsInboundWithBodyDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * Inbound SMS
 */
export declare class JsonSmsInboundWithBody extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
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
     * Date of the request.
     */
    dateReceived?: Date;
    direction?: JsonSmsInboundWithBodyDirectionEnum;
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
     * Network used to send the request.
     */
    network?: string;
    /**
     * Name of the network used to send the request.
     */
    networkName?: string;
    /**
     * Request to this number.
     */
    to?: string;
    /**
     * Price of the request.
     */
    totalPrice?: number;
}
