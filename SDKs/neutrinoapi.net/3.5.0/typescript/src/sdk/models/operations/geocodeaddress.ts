import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GeocodeAddressRequestBodyOutputCaseEnum {
    Camel = "camel"
}


export class GeocodeAddressRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=address;" })
  address?: string;

  @SpeakeasyMetadata({ data: "form, name=city;" })
  city?: string;

  @SpeakeasyMetadata({ data: "form, name=country-code;" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "form, name=county;" })
  county?: string;

  @SpeakeasyMetadata({ data: "form, name=fuzzy-search;" })
  fuzzySearch?: boolean;

  @SpeakeasyMetadata({ data: "form, name=house-number;" })
  houseNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=language-code;" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "form, name=output-case;" })
  outputCase?: GeocodeAddressRequestBodyOutputCaseEnum;

  @SpeakeasyMetadata({ data: "form, name=postal-code;" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "form, name=state;" })
  state?: string;

  @SpeakeasyMetadata({ data: "form, name=street;" })
  street?: string;
}


export class GeocodeAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: GeocodeAddressRequestBody;
}


export class GeocodeAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  geocodeAddressResponse?: shared.GeocodeAddressResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
