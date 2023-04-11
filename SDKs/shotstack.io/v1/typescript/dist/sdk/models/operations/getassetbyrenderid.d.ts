import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetByRenderIdSecurity extends SpeakeasyBase {
    developerKey: string;
}
export declare class GetAssetByRenderIdRequest extends SpeakeasyBase {
    /**
     * The render id associated with the asset in UUID format
     */
    id: string;
}
export declare class GetAssetByRenderIdResponse extends SpeakeasyBase {
    /**
     * Get one or more assets by render id
     */
    assetRenderResponse?: shared.AssetRenderResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
