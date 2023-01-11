import { AxiosInstance } from "axios";
import { Conversion } from "./conversion";
import { Metadata } from "./metadata";
import { Validation } from "./validation";
export declare const ServerList: readonly ["https://mermade.org.uk/api/v1", "http://mermade.org.uk/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    conversion: Conversion;
    metadata: Metadata;
    validation: Validation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
