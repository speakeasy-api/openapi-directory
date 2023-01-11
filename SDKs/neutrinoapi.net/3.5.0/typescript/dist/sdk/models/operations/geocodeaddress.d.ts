import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GeocodeAddressRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class GeocodeAddressRequestBody extends SpeakeasyBase {
    address?: string;
    city?: string;
    countryCode?: string;
    county?: string;
    fuzzySearch?: boolean;
    houseNumber?: string;
    languageCode?: string;
    outputCase?: GeocodeAddressRequestBodyOutputCaseEnum;
    postalCode?: string;
    state?: string;
    street?: string;
}
export declare class GeocodeAddressRequest extends SpeakeasyBase {
    request?: GeocodeAddressRequestBody;
}
export declare class GeocodeAddressResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    geocodeAddressResponse?: shared.GeocodeAddressResponse;
    statusCode: number;
}
