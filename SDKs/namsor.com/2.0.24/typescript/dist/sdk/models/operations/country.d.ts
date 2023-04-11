import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CountrySecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CountryRequest extends SpeakeasyBase {
    personalNameFull: string;
}
export declare class CountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A origined name.
     */
    personalNameGeoOut?: shared.PersonalNameGeoOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
