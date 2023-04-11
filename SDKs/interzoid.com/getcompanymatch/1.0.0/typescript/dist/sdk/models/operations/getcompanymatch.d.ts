import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetcompanymatchRequest extends SpeakeasyBase {
    /**
     * Company name from which to generate similarity key
     */
    company: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Generated similarity key for company name data
 */
export declare class Getcompanymatch200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetcompanymatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Generated similarity key for company name data
     */
    getcompanymatch200ApplicationJSONObject?: Getcompanymatch200ApplicationJSON;
}
