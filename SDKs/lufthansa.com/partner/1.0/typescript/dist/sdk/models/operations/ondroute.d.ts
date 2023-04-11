import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ONDRouteSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class ONDRouteRequest extends SpeakeasyBase {
    /**
     * Mandatory http header:  application/xml or application/json
     */
    accept: string;
    /**
     * Carrier for which the OND will be retrieved (e.g. 'LH')
     */
    catalogues?: string;
    /**
     * Enter either the destination city or country code (e.g 'MAD' or 'ES'). Enter '*' for all
     */
    destination: string;
    /**
     * Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
     */
    limit?: string;
    /**
     * Number of records skipped. Defaults to 0
     */
    offset?: string;
    /**
     * Enter either the orgin city or orgin country code (e.g 'FRA' or 'DE'). Enter '*' for all
     */
    origin: string;
}
export declare class ONDRouteResponse extends SpeakeasyBase {
    contentType: string;
    ondRoute200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
