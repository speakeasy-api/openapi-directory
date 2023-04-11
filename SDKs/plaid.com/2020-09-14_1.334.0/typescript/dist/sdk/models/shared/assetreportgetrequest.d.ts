import { SpeakeasyBase } from "../../../internal/utils";
import { AssetReportGetRequestOptions } from "./assetreportgetrequestoptions";
/**
 * AssetReportGetRequest defines the request schema for `/asset_report/get`
 */
export declare class AssetReportGetRequest extends SpeakeasyBase {
    /**
     * A token that can be provided to endpoints such as `/asset_report/get` or `/asset_report/pdf/get` to fetch or update an Asset Report.
     */
    assetReportToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * `true` to fetch "fast" version of asset report. Defaults to false if omitted.
     */
    fastReport?: boolean;
    /**
     * `true` if you would like to retrieve the Asset Report with Insights, `false` otherwise. This field defaults to `false` if omitted.
     */
    includeInsights?: boolean;
    /**
     * An optional object to filter or add data to `/asset_report/get` results. If provided, must be non-`null`.
     */
    options?: AssetReportGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
