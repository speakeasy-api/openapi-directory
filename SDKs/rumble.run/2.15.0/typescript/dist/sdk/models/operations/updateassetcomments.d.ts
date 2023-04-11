import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAssetCommentsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateAssetCommentsRequest extends SpeakeasyBase {
    /**
     * comments to apply to the asset
     */
    assetComments: shared.AssetComments;
    /**
     * UUID of the asset to update
     */
    assetId: string;
}
export declare class UpdateAssetCommentsResponse extends SpeakeasyBase {
    /**
     * asset details
     */
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
