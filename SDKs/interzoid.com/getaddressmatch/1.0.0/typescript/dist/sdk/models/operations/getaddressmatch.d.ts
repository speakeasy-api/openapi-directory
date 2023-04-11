import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetaddressmatchRequest extends SpeakeasyBase {
    /**
     * Address from which to generate similarity key
     */
    address: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Generated similarity key for address data
 */
export declare class Getaddressmatch200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetaddressmatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Generated similarity key for address data
     */
    getaddressmatch200ApplicationJSONObject?: Getaddressmatch200ApplicationJSON;
}
