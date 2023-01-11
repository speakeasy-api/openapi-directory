import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GeocodeReverseRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class GeocodeReverseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=language-code;" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "form, name=latitude;" })
  latitude: string;

  @SpeakeasyMetadata({ data: "form, name=longitude;" })
  longitude: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: GeocodeReverseRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=zoom;" })
  zoom?: string;
}


export class GeocodeReverseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: GeocodeReverseRequestBody;
}


export class GeocodeReverseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  geocodeReverseResponse?: shared.GeocodeReverseResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
