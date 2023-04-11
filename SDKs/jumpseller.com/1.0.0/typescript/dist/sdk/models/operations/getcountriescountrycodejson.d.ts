import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCountriesCountryCodeJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * ISO3166 Country Code
     */
    countryCode: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCountriesCountryCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A Country information object
     */
    country?: shared.Country;
    /**
     * Country Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
