import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Persona } from "./persona";
import { Playlist } from "./playlist";
import { Show } from "./show";
import { Spin } from "./spin";
export declare const ServerList: readonly ["https://spinitron.com/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    persona: Persona;
    playlist: Playlist;
    show: Show;
    spin: Spin;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
