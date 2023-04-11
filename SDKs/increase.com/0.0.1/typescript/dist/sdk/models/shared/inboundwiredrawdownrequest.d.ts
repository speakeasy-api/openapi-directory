import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A constant representing the object's type. For this resource it will always be `inbound_wire_drawdown_request`.
 */
export declare enum InboundWireDrawdownRequestTypeEnum {
    InboundWireDrawdownRequest = "inbound_wire_drawdown_request"
}
/**
 * Inbound wire drawdown requests are requests from someone else to send them a wire. This feature is in beta; reach out to [support@increase.com](mailto:support@increase.com) to learn more.
 */
export declare class InboundWireDrawdownRequest extends SpeakeasyBase {
    /**
     * The amount being requested in cents.
     */
    amount: number;
    /**
     * The drawdown request's beneficiary's account number.
     */
    beneficiaryAccountNumber: string;
    /**
     * Line 1 of the drawdown request's beneficiary's address.
     */
    beneficiaryAddressLine1: string;
    /**
     * Line 2 of the drawdown request's beneficiary's address.
     */
    beneficiaryAddressLine2: string;
    /**
     * Line 3 of the drawdown request's beneficiary's address.
     */
    beneficiaryAddressLine3: string;
    /**
     * The drawdown request's beneficiary's name.
     */
    beneficiaryName: string;
    /**
     * The drawdown request's beneficiary's routing number.
     */
    beneficiaryRoutingNumber: string;
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being requested. Will always be "USD".
     */
    currency: string;
    /**
     * The Wire drawdown request identifier.
     */
    id: string;
    /**
     * A message from the drawdown request's originator.
     */
    messageToRecipient: string;
    /**
     * The drawdown request's originator's account number.
     */
    originatorAccountNumber: string;
    /**
     * Line 1 of the drawdown request's originator's address.
     */
    originatorAddressLine1: string;
    /**
     * Line 2 of the drawdown request's originator's address.
     */
    originatorAddressLine2: string;
    /**
     * Line 3 of the drawdown request's originator's address.
     */
    originatorAddressLine3: string;
    /**
     * The drawdown request's originator's name.
     */
    originatorName: string;
    /**
     * The drawdown request's originator's routing number.
     */
    originatorRoutingNumber: string;
    /**
     * Line 1 of the information conveyed from the originator of the message to the beneficiary.
     */
    originatorToBeneficiaryInformationLine1: string;
    /**
     * Line 2 of the information conveyed from the originator of the message to the beneficiary.
     */
    originatorToBeneficiaryInformationLine2: string;
    /**
     * Line 3 of the information conveyed from the originator of the message to the beneficiary.
     */
    originatorToBeneficiaryInformationLine3: string;
    /**
     * Line 4 of the information conveyed from the originator of the message to the beneficiary.
     */
    originatorToBeneficiaryInformationLine4: string;
    /**
     * The Account Number from which the recipient of this request is being requested to send funds.
     */
    recipientAccountNumberId: string;
    /**
     * A constant representing the object's type. For this resource it will always be `inbound_wire_drawdown_request`.
     */
    type: InboundWireDrawdownRequestTypeEnum;
}
