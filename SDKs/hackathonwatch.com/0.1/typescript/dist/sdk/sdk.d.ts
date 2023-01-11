import { AxiosInstance } from "axios";
import { Hackathons } from "./hackathons";
import { SwaggerDoc } from "./swaggerdoc";
export declare const ServerList: readonly ["http://www.hackathonwatch.com/api/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    hackathons: Hackathons;
    swaggerDoc: SwaggerDoc;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
