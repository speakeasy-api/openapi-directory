import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetcountrymatchRequest extends SpeakeasyBase {
    /**
     * Country name from which to generate similarity key
     */
    country: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Generated similarity key for country name data
 */
export declare class Getcountrymatch200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetcountrymatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Generated similarity key for country name data
     */
    getcountrymatch200ApplicationJSONObject?: Getcountrymatch200ApplicationJSON;
}
