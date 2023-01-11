import { AxiosInstance } from "axios";
import { Operations } from "./operations";
import { Projects } from "./projects";
import { Text } from "./text";
import { Voices } from "./voices";
export declare const ServerList: readonly ["https://texttospeech.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    operations: Operations;
    projects: Projects;
    text: Text;
    voices: Voices;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
