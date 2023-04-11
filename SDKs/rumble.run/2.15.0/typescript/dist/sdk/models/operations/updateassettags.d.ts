import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAssetTagsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateAssetTagsRequest extends SpeakeasyBase {
    /**
     * tags to apply to the asset
     */
    assetTags: shared.AssetTags;
    /**
     * UUID of the asset to update
     */
    assetId: string;
}
export declare class UpdateAssetTagsResponse extends SpeakeasyBase {
    /**
     * asset details
     */
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
