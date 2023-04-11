import { SpeakeasyBase } from "../../../internal/utils";
import { AssetReportRefreshRequestOptions } from "./assetreportrefreshrequestoptions";
/**
 * AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
 */
export declare class AssetReportRefreshRequest extends SpeakeasyBase {
    /**
     * The `asset_report_token` returned by the original call to `/asset_report/create`
     */
    assetReportToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of days of history to include in the Asset Report. Must be an integer. If not specified, the value from the original call to `/asset_report/create` will be used.
     */
    daysRequested?: number;
    /**
     * An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If not specified, the `options` from the original call to `/asset_report/create` will be used.
     */
    options?: AssetReportRefreshRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
