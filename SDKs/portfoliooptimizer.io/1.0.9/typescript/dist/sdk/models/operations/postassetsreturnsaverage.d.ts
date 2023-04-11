import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsReturnsAverageRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t
     */
    assetReturns: number[];
}
export declare class PostAssetsReturnsAverageRequestBody extends SpeakeasyBase {
    assets: PostAssetsReturnsAverageRequestBodyAssets[];
}
export declare class PostAssetsReturnsAverage200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * The arithmetic average return of the asset
     */
    assetAverageReturn: number;
}
/**
 * OK
 */
export declare class PostAssetsReturnsAverage200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsReturnsAverage200ApplicationJSONAssets[];
}
export declare class PostAssetsReturnsAverageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsReturnsAverage200ApplicationJSONObject?: PostAssetsReturnsAverage200ApplicationJSON;
}
