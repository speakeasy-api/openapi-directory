import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AssetReportAuditCopyCreateRequest defines the request schema for `/asset_report/audit_copy/get`
 */
export declare class AssetReportAuditCopyCreateRequest extends SpeakeasyBase {
    /**
     * A token that can be provided to endpoints such as `/asset_report/get` or `/asset_report/pdf/get` to fetch or update an Asset Report.
     */
    assetReportToken: string;
    /**
     * The `auditor_id` of the third party with whom you would like to share the Asset Report.
     */
    auditorId?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
