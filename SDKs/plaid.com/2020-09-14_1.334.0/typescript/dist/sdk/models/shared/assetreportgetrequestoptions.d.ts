import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter or add data to `/asset_report/get` results. If provided, must be non-`null`.
 */
export declare class AssetReportGetRequestOptions extends SpeakeasyBase {
    /**
     * The maximum integer number of days of history to include in the Asset Report.
     */
    daysToInclude?: number;
}
