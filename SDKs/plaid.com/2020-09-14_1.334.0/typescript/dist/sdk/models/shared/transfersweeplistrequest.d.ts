import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/sweep/list`
 */
export declare class TransferSweepListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of sweeps to return.
     */
    count?: number;
    /**
     * The end datetime of sweeps to return (RFC 3339 format).
     */
    endDate?: Date;
    /**
     * Filter sweeps to only those with the specified `funding_account_id`.
     */
    fundingAccountId?: string;
    /**
     * The number of sweeps to skip before returning results.
     */
    offset?: number;
    /**
     * Filter sweeps to only those with the specified originator client.
     */
    originatorClientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The start datetime of sweeps to return (RFC 3339 format).
     */
    startDate?: Date;
}
