import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddressesRequest extends SpeakeasyBase {
    apiKey: string;
    biasCountry?: string;
    biasLonlat?: string;
    biasPostTown?: string;
    biasPostcode?: string;
    biasPostcodeArea?: string;
    biasPostcodeOutward?: string;
    biasPostcodeSector?: string;
    biasThoroughfare?: string;
    box?: string;
    country?: string;
    filter?: string;
    lat?: number;
    limit?: number;
    lon?: number;
    page?: number;
    postTown?: string;
    postcode?: string;
    postcodeArea?: string;
    postcodeOutward?: string;
    postcodeSector?: string;
    postcodeType?: string;
    /**
     * Specifies the address you wish to query. Query can be shortened to `q=`
     */
    query?: string;
    suOrganisationIndicator?: string;
    uprn?: number;
}
export declare class AddressesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addressResponse?: shared.AddressResponse;
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Postcode Not Found
     */
    postcodeNotFoundResponse?: shared.PostcodeNotFoundResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
