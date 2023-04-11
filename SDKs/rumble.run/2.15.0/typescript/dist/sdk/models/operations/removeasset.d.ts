import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAssetSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAssetRequest extends SpeakeasyBase {
    /**
     * UUID of the asset to remove
     */
    assetId: string;
}
export declare class RemoveAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
