import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAWireDrawdownRequestParameters extends SpeakeasyBase {
    /**
     * The Account Number to which the recipient should send funds.
     */
    accountNumberId: string;
    /**
     * The amount requested from the recipient, in cents.
     */
    amount: number;
    /**
     * A message the recipient will see as part of the request.
     */
    messageToRecipient: string;
    /**
     * The drawdown request's recipient's account number.
     */
    recipientAccountNumber: string;
    /**
     * Line 1 of the drawdown request's recipient's address.
     */
    recipientAddressLine1?: string;
    /**
     * Line 2 of the drawdown request's recipient's address.
     */
    recipientAddressLine2?: string;
    /**
     * Line 3 of the drawdown request's recipient's address.
     */
    recipientAddressLine3?: string;
    /**
     * The drawdown request's recipient's name.
     */
    recipientName: string;
    /**
     * The drawdown request's recipient's routing number.
     */
    recipientRoutingNumber: string;
}
