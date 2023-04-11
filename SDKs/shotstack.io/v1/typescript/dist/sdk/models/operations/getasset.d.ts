import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetSecurity extends SpeakeasyBase {
    developerKey: string;
}
export declare class GetAssetRequest extends SpeakeasyBase {
    /**
     * The id of the asset in UUID format
     */
    id: string;
}
export declare class GetAssetResponse extends SpeakeasyBase {
    /**
     * Get asset by asset id
     */
    assetResponse?: shared.AssetResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
