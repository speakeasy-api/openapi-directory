import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The lifecycle status of the drawdown request.
 */
export declare enum WireDrawdownRequestStatusEnum {
    PendingSubmission = "pending_submission",
    PendingResponse = "pending_response",
    Fulfilled = "fulfilled",
    Refused = "refused"
}
/**
 * After the drawdown request is submitted to Fedwire, this will contain supplemental details.
 */
export declare class WireDrawdownRequestWireDrawdownRequestSubmission extends SpeakeasyBase {
    /**
     * The input message accountability data (IMAD) uniquely identifying the submission with Fedwire.
     */
    inputMessageAccountabilityData: string;
}
/**
 * A constant representing the object's type. For this resource it will always be `wire_drawdown_request`.
 */
export declare enum WireDrawdownRequestTypeEnum {
    WireDrawdownRequest = "wire_drawdown_request"
}
/**
 * Wire drawdown requests enable you to request that someone else send you a wire. This feature is in beta; reach out to [support@increase.com](mailto:support@increase.com) to learn more.
 */
export declare class WireDrawdownRequest extends SpeakeasyBase {
    /**
     * The Account Number to which the recipient of this request is being requested to send funds.
     */
    accountNumberId: string;
    /**
     * The amount being requested in cents.
     */
    amount: number;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being requested. Will always be "USD".
     */
    currency: string;
    /**
     * If the recipient fulfills the drawdown request by sending funds, then this will be the identifier of the corresponding Transaction.
     */
    fulfillmentTransactionId: string;
    /**
     * The Wire drawdown request identifier.
     */
    id: string;
    /**
     * The message the recipient will see as part of the drawdown request.
     */
    messageToRecipient: string;
    /**
     * The drawdown request's recipient's account number.
     */
    recipientAccountNumber: string;
    /**
     * Line 1 of the drawdown request's recipient's address.
     */
    recipientAddressLine1: string;
    /**
     * Line 2 of the drawdown request's recipient's address.
     */
    recipientAddressLine2: string;
    /**
     * Line 3 of the drawdown request's recipient's address.
     */
    recipientAddressLine3: string;
    /**
     * The drawdown request's recipient's name.
     */
    recipientName: string;
    /**
     * The drawdown request's recipient's routing number.
     */
    recipientRoutingNumber: string;
    /**
     * The lifecycle status of the drawdown request.
     */
    status: WireDrawdownRequestStatusEnum;
    /**
     * After the drawdown request is submitted to Fedwire, this will contain supplemental details.
     */
    submission: WireDrawdownRequestWireDrawdownRequestSubmission;
    /**
     * A constant representing the object's type. For this resource it will always be `wire_drawdown_request`.
     */
    type: WireDrawdownRequestTypeEnum;
}
