import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetfullnameparsedmatchRequest extends SpeakeasyBase {
    /**
     * First name from which to generate similarity key
     */
    firstname: string;
    /**
     * Last name from which to generate similarity key
     */
    lastname: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Generated similarity key for parsed full name data
 */
export declare class Getfullnameparsedmatch200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetfullnameparsedmatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Generated similarity key for parsed full name data
     */
    getfullnameparsedmatch200ApplicationJSONObject?: Getfullnameparsedmatch200ApplicationJSON;
}
