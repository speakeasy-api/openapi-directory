import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/repayment/list`
 */
export declare class TransferRepaymentListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of repayments to return.
     */
    count?: number;
    /**
     * The end datetime of repayments to return (RFC 3339 format).
     */
    endDate?: Date;
    /**
     * The number of repayments to skip before returning results.
     */
    offset?: number;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The start datetime of repayments to return (RFC 3339 format).
     */
    startDate?: Date;
}
