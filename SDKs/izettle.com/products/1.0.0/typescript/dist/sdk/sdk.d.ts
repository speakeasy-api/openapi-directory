import { Categories } from "./categories";
import { Discounts } from "./discounts";
import { Images } from "./images";
import { Import } from "./import";
import { Library } from "./library";
import { Products } from "./products";
import { ProductsOnline } from "./productsonline";
import { Taxes } from "./taxes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://products.izettle.com"];
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
 * The Product Library API is used for managing merchant's product information and product images.
 */
export declare class SDK {
    categories: Categories;
    discounts: Discounts;
    images: Images;
    import: Import;
    library: Library;
    products: Products;
    productsOnline: ProductsOnline;
    taxes: Taxes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
