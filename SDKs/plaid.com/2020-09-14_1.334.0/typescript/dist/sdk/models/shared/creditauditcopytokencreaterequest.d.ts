import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CreditAuditCopyTokenCreateRequest defines the request schema for `/credit/audit_copy_token/create`
 */
export declare class CreditAuditCopyTokenCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * List of report tokens; can include both Asset Report tokens and Income Report tokens.
     */
    reportTokens: string[];
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
