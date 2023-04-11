import { Audio } from "./audio";
import { Catalog } from "./catalog";
import { ComputerVision } from "./computervision";
import { Contributors } from "./contributors";
import { CustomMusic } from "./custommusic";
import { EditorialImages } from "./editorialimages";
import { EditorialVideo } from "./editorialvideo";
import { Images } from "./images";
import { Oauth } from "./oauth";
import { SoundEffects } from "./soundeffects";
import { Test } from "./test";
import { Users } from "./users";
import { Videos } from "./videos";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.shutterstock.com", "https://api-sandbox.shutterstock.com"];
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
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 */
export declare class SDK {
    audio: Audio;
    catalog: Catalog;
    computerVision: ComputerVision;
    contributors: Contributors;
    customMusic: CustomMusic;
    editorialImages: EditorialImages;
    editorialVideo: EditorialVideo;
    images: Images;
    oauth: Oauth;
    soundEffects: SoundEffects;
    test: Test;
    users: Users;
    videos: Videos;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
