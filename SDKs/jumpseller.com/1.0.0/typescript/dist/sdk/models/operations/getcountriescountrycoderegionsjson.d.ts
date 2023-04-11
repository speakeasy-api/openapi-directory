import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCountriesCountryCodeRegionsJsonRequest extends SpeakeasyBase {
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
export declare class GetCountriesCountryCodeRegionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Country Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * An array of Regions from a single Country
     */
    regions?: shared.Region[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
