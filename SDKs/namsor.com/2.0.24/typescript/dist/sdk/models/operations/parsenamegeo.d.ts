import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ParseNameGeoSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ParseNameGeoRequest extends SpeakeasyBase {
    countryIso2: string;
    nameFull: string;
}
export declare class ParseNameGeoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A origined name.
     */
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
