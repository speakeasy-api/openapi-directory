import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AssetReportAuditCopyRemoveRequest defines the request schema for `/asset_report/audit_copy/remove`
 */
export declare class AssetReportAuditCopyRemoveRequest extends SpeakeasyBase {
    /**
     * The `audit_copy_token` granting access to the Audit Copy you would like to revoke.
     */
    auditCopyToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
