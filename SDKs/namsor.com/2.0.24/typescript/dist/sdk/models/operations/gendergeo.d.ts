import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderGeoSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderGeoRequest extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
}
export declare class GenderGeoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
