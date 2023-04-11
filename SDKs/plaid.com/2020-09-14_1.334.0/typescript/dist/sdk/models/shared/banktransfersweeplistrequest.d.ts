import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BankTransferSweepListRequest defines the request schema for `/bank_transfer/sweep/list`
 */
export declare class BankTransferSweepListRequest extends SpeakeasyBase {
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
    endTime?: Date;
    /**
     * If multiple origination accounts are available, `origination_account_id` must be used to specify the account that the sweeps belong to.
     */
    originationAccountId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The start datetime of sweeps to return (RFC 3339 format).
     */
    startTime?: Date;
}
