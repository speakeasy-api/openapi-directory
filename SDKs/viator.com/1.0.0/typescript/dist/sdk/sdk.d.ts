import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { BookingServices } from "./bookingservices";
import { DeprecatedServices } from "./deprecatedservices";
import { GeneralServices } from "./generalservices";
import { ProductServices } from "./productservices";
import { TaxonomyServices } from "./taxonomyservices";
export declare const ServerList: readonly ["https://viatorapi.viator.com/service", "https://viatorapi.sandbox.viator.com/service"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    bookingServices: BookingServices;
    deprecatedServices: DeprecatedServices;
    generalServices: GeneralServices;
    productServices: ProductServices;
    taxonomyServices: TaxonomyServices;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
