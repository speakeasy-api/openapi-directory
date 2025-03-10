import { Operations } from "./operations";
import { Projects } from "./projects";
import { Speech } from "./speech";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://speech.googleapis.com/"];
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
 * Converts audio to text by applying powerful neural network models.
 *
 * @see {@link https://cloud.google.com/speech-to-text/docs/quickstart-protocol}
 */
export declare class SDK {
    operations: Operations;
    projects: Projects;
    speech: Speech;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
