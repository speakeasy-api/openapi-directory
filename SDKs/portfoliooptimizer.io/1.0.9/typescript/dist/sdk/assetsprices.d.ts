import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AssetsPrices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adjusted Prices
     *
     * @remarks
     * Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from:
     * * Unadjusted prices
     * * Capital distributions, like stock dividends
     * * Splits, like stock splits
     *
     * The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that:
     * * The price on the last date for which unadjusted prices are available is left unadjusted
     * * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available
     *
     * References
     * * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)
     *
     */
    postAssetsPricesAdjusted(req: operations.PostAssetsPricesAdjustedRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsPricesAdjustedResponse>;
    /**
     * Forward-Adjusted Prices
     *
     * @remarks
     * Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from:
     * * Unadjusted prices
     * * Capital distributions, like stock dividends
     * * Splits, like stock splits
     *
     * The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that:
     * * The price on the first date for which unadjusted prices are available is left unadjusted
     * * The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available
     *
     * References
     * * [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)
     *
     */
    postAssetsPricesAdjustedForward(req: operations.PostAssetsPricesAdjustedForwardRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAssetsPricesAdjustedForwardResponse>;
}
