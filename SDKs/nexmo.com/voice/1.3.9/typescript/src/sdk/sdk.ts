import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Calls } from "./calls";
import { PlayDtmf } from "./playdtmf";
import { PlayTts } from "./playtts";
import { StreamAudio } from "./streamaudio";


export const ServerList = [
	"https://api.nexmo.com/v1/calls",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public calls: Calls;
  public playDTMF: PlayDtmf;
  public playTTS: PlayTts;
  public streamAudio: StreamAudio;

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
    
    this.calls = new Calls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.playDTMF = new PlayDtmf(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.playTTS = new PlayTts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.streamAudio = new StreamAudio(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}