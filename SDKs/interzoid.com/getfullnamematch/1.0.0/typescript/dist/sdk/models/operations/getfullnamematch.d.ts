import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetfullnamematchRequest extends SpeakeasyBase {
    /**
     * Full name from which to generate similarity key
     */
    fullname: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Generated similarity key for full name data
 */
export declare class Getfullnamematch200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetfullnamematchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Generated similarity key for full name data
     */
    getfullnamematch200ApplicationJSONObject?: Getfullnamematch200ApplicationJSON;
}
