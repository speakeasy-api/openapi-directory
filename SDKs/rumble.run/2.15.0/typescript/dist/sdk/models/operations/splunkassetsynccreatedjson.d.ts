import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SplunkAssetSyncCreatedJSONSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class SplunkAssetSyncCreatedJSONRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
    /**
     * an optional unix timestamp to use as a checkpoint
     */
    since?: number;
}
export declare class SplunkAssetSyncCreatedJSONResponse extends SpeakeasyBase {
    /**
     * filtered asset results with a checkpoint wrapper
     */
    assetsWithCheckpoint?: shared.AssetsWithCheckpoint;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
