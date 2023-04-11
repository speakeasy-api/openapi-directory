import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCountriesCountryCodeRegionsRegionCodeJsonRequest extends SpeakeasyBase {
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
    /**
     * Region Code
     */
    regionCode: string;
}
export declare class GetCountriesCountryCodeRegionsRegionCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Country or Region not found.
     */
    notFound?: shared.NotFound;
    /**
     * A Region information object
     */
    region?: shared.Region;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
