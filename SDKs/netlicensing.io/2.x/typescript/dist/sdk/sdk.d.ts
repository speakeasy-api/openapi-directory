import { AxiosInstance } from "axios";
import { License } from "./license";
import { LicenseTemplate } from "./licensetemplate";
import { Licensee } from "./licensee";
import { PaymentMethod } from "./paymentmethod";
import { Product } from "./product";
import { ProductModule } from "./productmodule";
import { Token } from "./token";
import { Transaction } from "./transaction";
import { Utility } from "./utility";
export declare const ServerList: readonly ["https://go.netlicensing.io/core/v2/rest"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    license: License;
    licenseTemplate: LicenseTemplate;
    licensee: Licensee;
    paymentMethod: PaymentMethod;
    product: Product;
    productModule: ProductModule;
    token: Token;
    transaction: Transaction;
    utility: Utility;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
