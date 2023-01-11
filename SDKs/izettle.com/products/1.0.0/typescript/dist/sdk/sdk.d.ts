import { AxiosInstance } from "axios";
import { Categories } from "./categories";
import { Discounts } from "./discounts";
import { Images } from "./images";
import { Import } from "./import";
import { Library } from "./library";
import { Products } from "./products";
import { ProductsOnline } from "./productsonline";
import { Taxes } from "./taxes";
export declare const ServerList: readonly ["https://products.izettle.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
