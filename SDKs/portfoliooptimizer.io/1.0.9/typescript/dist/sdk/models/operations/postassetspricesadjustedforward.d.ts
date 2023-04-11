import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends extends SpeakeasyBase {
    /**
     * The dividend amount distributed by the asset at the date t
     */
    amount: number;
    /**
     * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
     */
    date: string;
}
export declare class PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices extends SpeakeasyBase {
    /**
     * The unadjusted close price of the asset at the date t
     */
    close: number;
    /**
     * The date corresponding to the date t in format YYYY-MM-DD
     */
    date: string;
}
export declare class PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits extends SpeakeasyBase {
    /**
     * The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date
     */
    date: string;
    /**
     * The split factor of the asset at the date t
     */
    factor: number;
}
export declare class PostAssetsPricesAdjustedForwardRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetDividends[t] contains dividend information for the asset at the date t
     */
    assetDividends?: PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetDividends[];
    /**
     * assetPrices[t] contains price information for the asset at the date t
     */
    assetPrices: PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetPrices[];
    /**
     * assetSplits[t] contains split information for the asset at the date t
     */
    assetSplits?: PostAssetsPricesAdjustedForwardRequestBodyAssetsAssetSplits[];
}
export declare class PostAssetsPricesAdjustedForwardRequestBody extends SpeakeasyBase {
    assets: PostAssetsPricesAdjustedForwardRequestBodyAssets[];
}
export declare class PostAssetsPricesAdjustedForward200ApplicationJSONAssetsAssetAdjustedPrices extends SpeakeasyBase {
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
export declare class PostAssetsPricesAdjustedForward200ApplicationJSONAssets extends SpeakeasyBase {
    /**
     * assetAdjustedPrices[t] contains adjusted price information for the asset at the date t
     */
    assetAdjustedPrices: PostAssetsPricesAdjustedForward200ApplicationJSONAssetsAssetAdjustedPrices[];
}
/**
 * OK
 */
export declare class PostAssetsPricesAdjustedForward200ApplicationJSON extends SpeakeasyBase {
    assets: PostAssetsPricesAdjustedForward200ApplicationJSONAssets[];
}
export declare class PostAssetsPricesAdjustedForwardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsPricesAdjustedForward200ApplicationJSONObject?: PostAssetsPricesAdjustedForward200ApplicationJSON;
}
