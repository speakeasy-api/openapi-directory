import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetcountrystandardRequest extends SpeakeasyBase {
    /**
     * Country name from which to retrieve the standardized version
     */
    country: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Standardized country name data
 */
export declare class Getcountrystandard200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    countryStandard?: string;
    credits?: string;
}
export declare class GetcountrystandardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Standardized country name data
     */
    getcountrystandard200ApplicationJSONObject?: Getcountrystandard200ApplicationJSON;
}
