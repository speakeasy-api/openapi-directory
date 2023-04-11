import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CreditAuditCopyTokenUpdateRequest defines the request schema for `/credit/audit_copy_token/update`
 */
export declare class CreditAuditCopyTokenUpdateRequest extends SpeakeasyBase {
    /**
     * The `audit_copy_token` you would like to update.
     */
    auditCopyToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Array of tokens which the specified Audit Copy Token will be updated with. The types of token supported are asset report token and employment report token. There can be at most 1 of each type can be in the array.
     */
    reportTokens: string[];
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
