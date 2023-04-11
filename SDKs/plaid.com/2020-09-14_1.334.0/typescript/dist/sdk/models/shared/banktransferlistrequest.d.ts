import { SpeakeasyBase } from "../../../internal/utils";
import { BankTransferDirectionEnum } from "./banktransferdirectionenum";
/**
 * Defines the request schema for `/bank_transfer/list`
 */
export declare class BankTransferListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of bank transfers to return.
     */
    count?: number;
    /**
     * Indicates the direction of the transfer: `outbound` for API-initiated transfers, or `inbound` for payments received by the FBO account.
     */
    direction?: BankTransferDirectionEnum;
    /**
     * The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    endDate?: Date;
    /**
     * The number of bank transfers to skip before returning results.
     */
    offset?: number;
    /**
     * Filter bank transfers to only those originated through the specified origination account.
     */
    originationAccountId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     */
    startDate?: Date;
}
