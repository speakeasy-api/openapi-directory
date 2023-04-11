import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateReleaseAssetRequestBody extends SpeakeasyBase {
    /**
     * An alternate short description of the asset. Used in place of the filename.
     */
    label?: string;
    /**
     * The file name of the asset.
     */
    name?: string;
    state?: string;
}
export declare class ReposUpdateReleaseAssetRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateReleaseAssetRequestBody;
    /**
     * asset_id parameter
     */
    assetId: number;
    owner: string;
    repo: string;
}
export declare class ReposUpdateReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    releaseAsset?: shared.ReleaseAsset;
}
