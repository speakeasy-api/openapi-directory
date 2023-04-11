import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderFullGeoSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderFullGeoRequest extends SpeakeasyBase {
    countryIso2: string;
    fullName: string;
}
export declare class GenderFullGeoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
