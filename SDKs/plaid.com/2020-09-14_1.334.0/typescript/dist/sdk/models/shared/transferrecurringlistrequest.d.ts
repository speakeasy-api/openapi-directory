import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/recurring/list`
 */
export declare class TransferRecurringListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of recurring transfers to return.
     */
    count?: number;
    /**
     * The end datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    endTime?: Date;
    /**
     * Filter recurring transfers to only those with the specified `funding_account_id`.
     */
    fundingAccountId?: string;
    /**
     * The number of recurring transfers to skip before returning results.
     */
    offset?: number;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The start datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    startTime?: Date;
}
