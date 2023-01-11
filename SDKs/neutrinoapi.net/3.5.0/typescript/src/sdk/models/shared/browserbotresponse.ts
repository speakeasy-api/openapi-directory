import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BrowserBotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=elements" })
  elements: string[];

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage: string;

  @SpeakeasyMetadata({ data: "json, name=execResults" })
  execResults: string[];

  @SpeakeasyMetadata({ data: "json, name=httpRedirectUrl" })
  httpRedirectUrl: string;

  @SpeakeasyMetadata({ data: "json, name=httpStatusCode" })
  httpStatusCode: number;

  @SpeakeasyMetadata({ data: "json, name=httpStatusMessage" })
  httpStatusMessage: string;

  @SpeakeasyMetadata({ data: "json, name=isError" })
  isError: boolean;

  @SpeakeasyMetadata({ data: "json, name=isHttpOk" })
  isHttpOk: boolean;

  @SpeakeasyMetadata({ data: "json, name=isHttpRedirect" })
  isHttpRedirect: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSecure" })
  isSecure: boolean;

  @SpeakeasyMetadata({ data: "json, name=isTimeout" })
  isTimeout: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode: string;

  @SpeakeasyMetadata({ data: "json, name=loadTime" })
  loadTime: number;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType: string;

  @SpeakeasyMetadata({ data: "json, name=responseHeaders" })
  responseHeaders: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=securityDetails" })
  securityDetails: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=serverIp" })
  serverIp: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
