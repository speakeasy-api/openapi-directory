import { Edit } from "./edit";
import { Serve } from "./serve";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.shotstack.io/{version}", "https://api.shotstack.io/serve/{version}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.
 *
 * @remarks
 *
 * You arrange and configure an edit and POST it to the API which will render your media and provide a file  location when complete.
 *
 * For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.gitbook.io/docs/guides/getting-started) documentation.
 * There are two main API's, one for editing and generating assets (Edit API) and one for managing hosted assets (Serve API).
 *
 * The Edit API base URL is: <b>https://api.shotstack.io/{version}</b>
 *
 * The Serve API base URL is: <b>https://api.shotstack.io/serve/{version}</b>
 */
export declare class SDK {
    edit: Edit;
    serve: Serve;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
