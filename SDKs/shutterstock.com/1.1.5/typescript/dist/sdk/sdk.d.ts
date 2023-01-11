import { AxiosInstance } from "axios";
import { Audio } from "./audio";
import { ComputerVision } from "./computervision";
import { Contributors } from "./contributors";
import { CustomMusic } from "./custommusic";
import { EditorialImages } from "./editorialimages";
import { EditorialVideo } from "./editorialvideo";
import { Images } from "./images";
import { Oauth } from "./oauth";
import { Test } from "./test";
import { Users } from "./users";
import { VideoEditor } from "./videoeditor";
import { Videos } from "./videos";
export declare const ServerList: readonly ["https://api.shutterstock.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    audio: Audio;
    computerVision: ComputerVision;
    contributors: Contributors;
    customMusic: CustomMusic;
    editorialImages: EditorialImages;
    editorialVideo: EditorialVideo;
    images: Images;
    oauth: Oauth;
    test: Test;
    users: Users;
    videoEditor: VideoEditor;
    videos: Videos;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
