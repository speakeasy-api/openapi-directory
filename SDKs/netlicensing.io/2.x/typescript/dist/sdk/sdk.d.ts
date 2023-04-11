import { License } from "./license";
import { Licensee } from "./licensee";
import { LicenseTemplate } from "./licensetemplate";
import { PaymentMethod } from "./paymentmethod";
import { Product } from "./product";
import { ProductModule } from "./productmodule";
import { Token } from "./token";
import { Transaction } from "./transaction";
import { Utility } from "./utility";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://go.netlicensing.io/core/v2/rest"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Labs64 <a href='https://netlicensing.io/wiki/restful-api' target='_blank'>NetLicensing RESTful API</a> gives you access to NetLicensing’s core features.<br/><br/><strong>Authentication</strong><br/>You authenticate to the NetLicensing API by providing your account credentials or simply use our demo account - <code>demo:demo</code><br/><br/>Find out more about Labs64 NetLicensing at <a href='https://netlicensing.io' target='_blank'>netlicensing.io</a>
 */
export declare class SDK {
    /**
     * License operations
     *
     * @see {@link https://netlicensing.io/wiki/license-services} - License Services
     */
    license: License;
    /**
     * License Template operations
     *
     * @see {@link https://netlicensing.io/wiki/license-template-services} - License Template Services
     */
    licenseTemplate: LicenseTemplate;
    /**
     * Licensee operations
     *
     * @see {@link https://netlicensing.io/wiki/licensee-services} - Licensee Services
     */
    licensee: Licensee;
    /**
     * Payment Method operations
     *
     * @see {@link https://netlicensing.io/wiki/payment-method-services} - Payment Method Services
     */
    paymentMethod: PaymentMethod;
    /**
     * Product operations
     *
     * @see {@link https://netlicensing.io/wiki/product-services} - Product Services
     */
    product: Product;
    /**
     * Product Module operations
     *
     * @see {@link https://netlicensing.io/wiki/product-module-services} - Product Module Services
     */
    productModule: ProductModule;
    /**
     * Token operations
     *
     * @see {@link https://netlicensing.io/wiki/token-services} - Token Services
     */
    token: Token;
    /**
     * Transaction operations
     *
     * @see {@link https://netlicensing.io/wiki/transaction-services} - Transaction Services
     */
    transaction: Transaction;
    /**
     * Utility operations
     *
     * @see {@link https://netlicensing.io/wiki/utility-services} - Utility Services
     */
    utility: Utility;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
