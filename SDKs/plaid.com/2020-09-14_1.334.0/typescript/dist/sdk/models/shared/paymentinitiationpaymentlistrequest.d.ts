import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
 */
export declare class PaymentInitiationPaymentListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The consent ID. If specified, only payments, executed using this consent, will be returned.
     */
    consentId?: string;
    /**
     * The maximum number of payments to return. If `count` is not specified, a maximum of 10 payments will be returned, beginning with the most recent payment before the cursor (if specified).
     */
    count?: number;
    /**
     * A string in RFC 3339 format (i.e. "2019-12-06T22:35:49Z"). Only payments created before the cursor will be returned.
     */
    cursor?: Date;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
