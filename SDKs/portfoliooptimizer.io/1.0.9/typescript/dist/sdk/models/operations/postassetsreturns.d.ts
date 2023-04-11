import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsReturnsRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetPrices[t] is the price of the asset at the time t
     */
    assetPrices: number[];
}
export declare class PostAssetsReturnsRequestBody extends SpeakeasyBase {
    assets: PostAssetsReturnsRequestBodyAssets[];
}
export declare class PostAssetsReturns200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the arithmetic return of the asset from the time t-1 to the time t, in percentage
     */
    assetReturns: number[];
}
/**
 * OK
 */
export declare class PostAssetsReturns200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsReturns200ApplicationJSONAssets[];
}
export declare class PostAssetsReturnsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsReturns200ApplicationJSONObject?: PostAssetsReturns200ApplicationJSON;
}
