import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BrowserBotRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class BrowserBotRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=delay;" })
  delay?: number;

  @SpeakeasyMetadata({ data: "form, name=exec;" })
  exec?: string[];

  @SpeakeasyMetadata({ data: "form, name=ignore-certificate-errors;" })
  ignoreCertificateErrors?: boolean;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: BrowserBotRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=selector;" })
  selector?: string;

  @SpeakeasyMetadata({ data: "form, name=timeout;" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "form, name=url;" })
  url: string;

  @SpeakeasyMetadata({ data: "form, name=user-agent;" })
  userAgent?: string;
}


export class BrowserBotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: BrowserBotRequestBody;
}


export class BrowserBotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  browserBotResponse?: shared.BrowserBotResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
