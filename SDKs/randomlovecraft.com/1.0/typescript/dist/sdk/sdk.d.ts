import { AxiosInstance } from "axios";
import { Books } from "./books";
import { Sentences } from "./sentences";
export declare const ServerList: readonly ["https://randomlovecraft.com/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    books: Books;
    sentences: Sentences;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
