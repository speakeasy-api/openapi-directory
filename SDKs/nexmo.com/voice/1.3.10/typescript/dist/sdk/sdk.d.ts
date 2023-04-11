import { Calls } from "./calls";
import { PlayDTMF } from "./playdtmf";
import { PlayTTS } from "./playtts";
import { StreamAudio } from "./streamaudio";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/v1/calls"];
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
 * The Voice API lets you create outbound calls, control in-progress calls and get information about historical calls. More information about the Voice API can be found at <https://developer.nexmo.com/voice/voice-api/overview>.
 */
export declare class SDK {
    /**
     * Fetch, Create and Modify voice calls
     */
    calls: Calls;
    /**
     * Play DTMF tones in to an active call
     */
    playDTMF: PlayDTMF;
    /**
     * Start or stop playing Text to Speech in to an active call
     */
    playTTS: PlayTTS;
    /**
     * Start or stop streaming audio in to an active call
     */
    streamAudio: StreamAudio;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
