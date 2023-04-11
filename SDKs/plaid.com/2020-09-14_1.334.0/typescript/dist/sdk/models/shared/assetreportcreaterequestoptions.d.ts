import { SpeakeasyBase } from "../../../internal/utils";
import { AssetReportAddOnsEnum } from "./assetreportaddonsenum";
/**
 * An optional object to filter `/asset_report/create` results. If provided, must be non-`null`. The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.
 */
export declare class AssetReportCreateRequestOptions extends SpeakeasyBase {
    /**
     * Additional information that can be included in the asset report. Possible values: `"investments"`, `"fast_assets"`
     */
    addOns?: AssetReportAddOnsEnum[];
    /**
     * Client-generated identifier, which can be used by lenders to track loan applications.
     */
    clientReportId?: string;
    /**
     * true to return balance and identity earlier as a fast report. Defaults to false if omitted.
     */
    includeFastReport?: boolean;
    /**
     * Additional information that can be included in the asset report. Possible values: `"investments"`
     */
    products?: string[];
    /**
     * The user object allows you to provide additional information about the user to be appended to the Asset Report. All fields are optional. The `first_name`, `last_name`, and `ssn` fields are required if you would like the Report to be eligible for Fannie Mae’s Day 1 Certainty™ program.
     */
    user?: Record<string, any>;
    /**
     * URL to which Plaid will send Assets webhooks, for example when the requested Asset Report is ready.
     */
    webhook?: string;
}
