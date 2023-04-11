import { SpeakeasyBase } from "../../../internal/utils";
import { IncomeVerificationCreateRequestOptions } from "./incomeverificationcreaterequestoptions";
/**
 * IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
 */
export declare class IncomeVerificationCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Optional arguments for `/income/verification/create`
     */
    options?: IncomeVerificationCreateRequestOptions;
    /**
     * The ID of a precheck created with `/income/verification/precheck`. Will be used to improve conversion of the income verification flow.
     */
    precheckId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The URL endpoint to which Plaid should send webhooks related to the progress of the income verification process.
     */
    webhook: string;
}
