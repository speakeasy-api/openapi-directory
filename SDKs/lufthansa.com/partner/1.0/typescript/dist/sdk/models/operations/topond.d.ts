import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TopONDSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class TopONDRequest extends SpeakeasyBase {
    /**
     * Mandatory http header:  application/xml or application/json
     */
    accept: string;
    /**
     * Carrier for which the OND will be retrieved (e.g. 'LH')
     */
    catalogues?: string;
    /**
     * Enter the origin country code (e.g. 'DE'). Leave empty to search Top OND across all countries
     */
    origin?: string;
}
export declare class TopONDResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    topOND200ApplicationJSONString?: string;
}
