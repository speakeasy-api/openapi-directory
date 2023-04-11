import { SpeakeasyBase } from "../../../internal/utils";
import { AssetReportPDFGetRequestOptions } from "./assetreportpdfgetrequestoptions";
/**
 * AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
 */
export declare class AssetReportPDFGetRequest extends SpeakeasyBase {
    /**
     * A token that can be provided to endpoints such as `/asset_report/get` or `/asset_report/pdf/get` to fetch or update an Asset Report.
     */
    assetReportToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter or add data to `/asset_report/get` results. If provided, must be non-`null`.
     */
    options?: AssetReportPDFGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
