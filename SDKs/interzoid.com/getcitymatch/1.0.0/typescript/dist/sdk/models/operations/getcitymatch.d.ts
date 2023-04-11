import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetcitymatchRequest extends SpeakeasyBase {
    /**
     * City name from which to generate similarity key
     */
    city: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Generated similarity key for city name data
 */
export declare class Getcitymatch200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetcitymatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Generated similarity key for city name data
     */
    getcitymatch200ApplicationJSONObject?: Getcitymatch200ApplicationJSON;
}
