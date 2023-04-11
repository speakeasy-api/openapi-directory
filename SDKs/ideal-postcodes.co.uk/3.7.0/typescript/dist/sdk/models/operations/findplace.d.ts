import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindPlaceRequest extends SpeakeasyBase {
    apiKey: string;
    biasCountryIso?: string;
    /**
     * Biases search based on approximate geolocation of IP address.
     *
     * @remarks
     * Set `bias_ip=true` to enable.
     */
    biasIp?: shared.BiasIpParamEnum;
    biasLonlat?: string;
    countryIso?: string;
    /**
     * Specifies the place you wish to query. Query can be shortened to `q=`
     */
    query?: string;
}
export declare class FindPlaceResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * Success
     */
    placeResponse?: shared.PlaceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
