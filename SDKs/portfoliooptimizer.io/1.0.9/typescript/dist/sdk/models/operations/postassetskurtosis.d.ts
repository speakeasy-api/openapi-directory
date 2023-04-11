import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsKurtosisRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset at the time t
     */
    assetReturns: number[];
}
export declare class PostAssetsKurtosisRequestBody extends SpeakeasyBase {
    assets: PostAssetsKurtosisRequestBodyAssets[];
}
export declare class PostAssetsKurtosis200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * The kurtosis of the asset
     */
    assetKurtosis: number;
}
/**
 * OK
 */
export declare class PostAssetsKurtosis200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsKurtosis200ApplicationJSONAssets[];
}
export declare class PostAssetsKurtosisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsKurtosis200ApplicationJSONObject?: PostAssetsKurtosis200ApplicationJSON;
}
