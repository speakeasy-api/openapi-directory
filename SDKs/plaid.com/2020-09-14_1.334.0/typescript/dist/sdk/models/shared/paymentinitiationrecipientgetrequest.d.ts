import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationRecipientGetRequest defines the request schema for `/payment_initiation/recipient/get`
 */
export declare class PaymentInitiationRecipientGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The ID of the recipient
     */
    recipientId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
