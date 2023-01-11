import { AxiosInstance } from "axios";
import { Baggage } from "./baggage";
import { Offers } from "./offers";
import { Orders } from "./orders";
import { Preflight } from "./preflight";
import { Promotions } from "./promotions";
import { ReferenceData } from "./referencedata";
export declare const ServerList: readonly ["https://api.lufthansa.com/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    baggage: Baggage;
    offers: Offers;
    orders: Orders;
    preflight: Preflight;
    promotions: Promotions;
    referenceData: ReferenceData;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
