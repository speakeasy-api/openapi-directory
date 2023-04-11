import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends extends SpeakeasyBase {
    /**
     * The dividend amount distributed by the asset at the date t
     */
    amount: number;
    /**
     * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
     */
    date: string;
}
export declare class PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices extends SpeakeasyBase {
    /**
     * The unadjusted close price of the asset at the date t
     */
    close: number;
    /**
     * The date corresponding to the date t in format YYYY-MM-DD
     */
    date: string;
}
export declare class PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits extends SpeakeasyBase {
    /**
     * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
     */
    date: string;
    /**
     * The split factor of the asset at the date t
     */
    factor: number;
}
export declare class PostAssetsPricesAdjustedRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetDividends[t] contains dividend information for the asset at the date t
     */
    assetDividends?: PostAssetsPricesAdjustedRequestBodyAssetsAssetDividends[];
    /**
     * assetPrices[t] contains price information for the asset at the date t
     */
    assetPrices: PostAssetsPricesAdjustedRequestBodyAssetsAssetPrices[];
    /**
     * assetSplits[t] contains split information for the asset at the date t
     */
    assetSplits?: PostAssetsPricesAdjustedRequestBodyAssetsAssetSplits[];
}
export declare class PostAssetsPricesAdjustedRequestBody extends SpeakeasyBase {
    assets: PostAssetsPricesAdjustedRequestBodyAssets[];
}
export declare class PostAssetsPricesAdjusted200ApplicationJSONAssetsAssetAdjustedPrices extends SpeakeasyBase {
    /**
     * The date corresponding to the date t in format YYYY-MM-DD
     */
    date: string;
    /**
     * The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided
     */
    dividendAdjustedClose?: number;
    /**
     * The dividend(s) and split(s) adjusted close price of the asset at the date t
     */
    fullyAdjustedClose: number;
    /**
     * The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided
     */
    splitAdjustedClose?: number;
}
export declare class PostAssetsPricesAdjusted200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * assetAdjustedPrices[t] contains adjusted price information for the asset at the date t
     */
    assetAdjustedPrices: PostAssetsPricesAdjusted200ApplicationJSONAssetsAssetAdjustedPrices[];
}
/**
 * OK
 */
export declare class PostAssetsPricesAdjusted200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsPricesAdjusted200ApplicationJSONAssets[];
}
export declare class PostAssetsPricesAdjustedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsPricesAdjusted200ApplicationJSONObject?: PostAssetsPricesAdjusted200ApplicationJSON;
}
