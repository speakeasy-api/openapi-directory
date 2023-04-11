import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationRecipientCreateRequest defines the request schema for `/payment_initiation/recipient/create`
 */
export declare class PaymentInitiationRecipientCreateRequest extends SpeakeasyBase {
    /**
     * The optional address of the payment recipient.
     */
    address?: Record<string, any>;
    /**
     * An object containing a BACS account number and sort code. If an IBAN is not provided or if this recipient needs to accept domestic GBP-denominated payments, BACS data is required.
     */
    bacs?: Record<string, any>;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The International Bank Account Number (IBAN) for the recipient. If BACS data is not provided, an IBAN is required.
     */
    iban?: string;
    /**
     * The name of the recipient. We recommend using strings of length 18 or less and avoid special characters to ensure compatibility with all institutions.
     */
    name: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
