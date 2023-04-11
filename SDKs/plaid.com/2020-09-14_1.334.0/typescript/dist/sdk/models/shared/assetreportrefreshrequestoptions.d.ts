import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If not specified, the `options` from the original call to `/asset_report/create` will be used.
 */
export declare class AssetReportRefreshRequestOptions extends SpeakeasyBase {
    /**
     * Client-generated identifier, which can be used by lenders to track loan applications.
     */
    clientReportId?: string;
    /**
     * The user object allows you to provide additional information about the user to be appended to the Asset Report. All fields are optional. The `first_name`, `last_name`, and `ssn` fields are required if you would like the Report to be eligible for Fannie Mae’s Day 1 Certainty™ program.
     */
    user?: Record<string, any>;
    /**
     * URL to which Plaid will send Assets webhooks, for example when the requested Asset Report is ready.
     */
    webhook?: string;
}
