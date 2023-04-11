import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddressAutocompleteRequest extends SpeakeasyBase {
    apiKey?: string;
    biasCountry?: string;
    /**
     * Biases search based on approximate geolocation of IP address.
     *
     * @remarks
     * Set `bias_ip=true` to enable.
     */
    biasIp?: shared.BiasIpParamEnum;
    biasLonlat?: string;
    biasPostTown?: string;
    biasPostcode?: string;
    biasPostcodeArea?: string;
    biasPostcodeOutward?: string;
    biasPostcodeSector?: string;
    biasThoroughfare?: string;
    box?: string;
    context?: string;
    country?: string;
    /**
     * Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned.
     *
     * @remarks
     *
     */
    limit?: number;
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
export declare class AddressAutocompleteResponse extends SpeakeasyBase {
    /**
     * Success
     */
    autocompleteResponse?: shared.AutocompleteResponse;
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
