import { AxiosInstance } from "axios";
import { Card } from "./card";
import { Misc } from "./misc";
import { Name } from "./name";
import { Phone } from "./phone";
import { SocialNumber } from "./socialnumber";
import { Text } from "./text";
export declare const ServerList: readonly ["https://randommer.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    card: Card;
    misc: Misc;
    name: Name;
    phone: Phone;
    socialNumber: SocialNumber;
    text: Text;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
