import { AxiosInstance } from "axios";
import { Info } from "./info";
import { Links } from "./links";
import { References } from "./references";
import { Structures } from "./structures";
import { Versions } from "./versions";
export declare const ServerList: readonly ["http://optimade.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    info: Info;
    links: Links;
    references: References;
    structures: Structures;
    versions: Versions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
