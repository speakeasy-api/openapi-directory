import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

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


export const ServerList = [
	"https://api.shutterstock.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public audio: Audio;
  public computerVision: ComputerVision;
  public contributors: Contributors;
  public customMusic: CustomMusic;
  public editorialImages: EditorialImages;
  public editorialVideo: EditorialVideo;
  public images: Images;
  public oauth: Oauth;
  public test: Test;
  public users: Users;
  public videoEditor: VideoEditor;
  public videos: Videos;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.audio = new Audio(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.computerVision = new ComputerVision(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contributors = new Contributors(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customMusic = new CustomMusic(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.editorialImages = new EditorialImages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.editorialVideo = new EditorialVideo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.images = new Images(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oauth = new Oauth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.test = new Test(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.videoEditor = new VideoEditor(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.videos = new Videos(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}