import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GeocodeReverseRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class GeocodeReverseRequestBody extends SpeakeasyBase {
    languageCode?: string;
    latitude: string;
    longitude: string;
    outputCase?: GeocodeReverseRequestBodyOutputCaseEnum;
    zoom?: string;
}
export declare class GeocodeReverseRequest extends SpeakeasyBase {
    request?: GeocodeReverseRequestBody;
}
export declare class GeocodeReverseResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    geocodeReverseResponse?: shared.GeocodeReverseResponse;
    statusCode: number;
}
