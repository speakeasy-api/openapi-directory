import { Projects } from "./projects";
import { Text } from "./text";
import { Voices } from "./voices";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://texttospeech.googleapis.com/"];
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
 * Synthesizes natural-sounding speech by applying powerful neural network models.
 *
 * @see {@link https://cloud.google.com/text-to-speech/}
 */
export declare class SDK {
    projects: Projects;
    text: Text;
    voices: Voices;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
