import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UrlInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=contentEncoding" })
  contentEncoding: string;

  @SpeakeasyMetadata({ data: "json, name=contentSize" })
  contentSize: number;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=httpOk" })
  httpOk: boolean;

  @SpeakeasyMetadata({ data: "json, name=httpRedirect" })
  httpRedirect: boolean;

  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus: number;

  @SpeakeasyMetadata({ data: "json, name=httpStatusMessage" })
  httpStatusMessage: number;

  @SpeakeasyMetadata({ data: "json, name=isError" })
  isError: boolean;

  @SpeakeasyMetadata({ data: "json, name=isTimeout" })
  isTimeout: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode: string;

  @SpeakeasyMetadata({ data: "json, name=loadTime" })
  loadTime: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=real" })
  real: boolean;

  @SpeakeasyMetadata({ data: "json, name=serverCity" })
  serverCity: string;

  @SpeakeasyMetadata({ data: "json, name=serverCountry" })
  serverCountry: string;

  @SpeakeasyMetadata({ data: "json, name=serverCountryCode" })
  serverCountryCode: string;

  @SpeakeasyMetadata({ data: "json, name=serverHostname" })
  serverHostname: string;

  @SpeakeasyMetadata({ data: "json, name=serverIp" })
  serverIp: string;

  @SpeakeasyMetadata({ data: "json, name=serverName" })
  serverName: string;

  @SpeakeasyMetadata({ data: "json, name=serverRegion" })
  serverRegion: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=urlPath" })
  urlPath: string;

  @SpeakeasyMetadata({ data: "json, name=urlPort" })
  urlPort: number;

  @SpeakeasyMetadata({ data: "json, name=urlProtocol" })
  urlProtocol: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: boolean;
}
