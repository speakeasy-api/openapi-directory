import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UrlInfoRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class UrlInfoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=fetch-content;" })
  fetchContent?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ignore-certificate-errors;" })
  ignoreCertificateErrors?: boolean;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: UrlInfoRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=retry;" })
  retry?: number;

  @SpeakeasyMetadata({ data: "form, name=timeout;" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "form, name=url;" })
  url: string;
}


export class UrlInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UrlInfoRequestBody;
}


export class UrlInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  urlInfoResponse?: shared.UrlInfoResponse;
}
