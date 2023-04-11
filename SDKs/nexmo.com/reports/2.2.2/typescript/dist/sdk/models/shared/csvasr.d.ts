import { SpeakeasyBase } from "../../../internal/utils";
import { AsrStatusEnum } from "./asrstatusenum";
import { DirectionEnum } from "./directionenum";
/**
 * ASR
 */
export declare class CsvAsr extends SpeakeasyBase {
    /**
     * The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts.
     */
    accountId?: string;
    /**
     * Date of the start of the call.
     */
    callDateStart?: Date;
    /**
     * UUID of the request.
     */
    callId?: string;
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
     * Price of the request.
     */
    price?: number;
    /**
     * Search only for ASR with corresponding status.
     */
    status?: AsrStatusEnum;
    /**
     * ASR error message.
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
