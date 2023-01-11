import { AxiosInstance } from "axios";
import { Calls } from "./calls";
import { PlayDtmf } from "./playdtmf";
import { PlayTts } from "./playtts";
import { StreamAudio } from "./streamaudio";
export declare const ServerList: readonly ["https://api.nexmo.com/v1/calls"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    calls: Calls;
    playDTMF: PlayDtmf;
    playTTS: PlayTts;
    streamAudio: StreamAudio;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
