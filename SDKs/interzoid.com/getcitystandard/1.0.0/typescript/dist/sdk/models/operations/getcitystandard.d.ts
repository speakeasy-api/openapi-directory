import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetcitystandardRequest extends SpeakeasyBase {
    /**
     * City name from which to retrieve the standardized version
     */
    city: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Standardized city name data
 */
export declare class Getcitystandard200ApplicationJSON extends SpeakeasyBase {
    cityStandard?: string;
    code?: string;
    credits?: string;
}
export declare class GetcitystandardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Standardized city name data
     */
    getcitystandard200ApplicationJSONObject?: Getcitystandard200ApplicationJSON;
}
