import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GlobalpageloadRequest extends SpeakeasyBase {
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list)
     */
    origin: string;
    /**
     * specific URL to perform load test time
     */
    url: string;
}
/**
 * Page load performance measurement response
 */
export declare class Globalpageload200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    contents?: string;
    credits?: string;
    origin?: string;
    pageResponseStatus?: string;
    seconds?: string;
}
export declare class GlobalpageloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Page load performance measurement response
     */
    globalpageload200ApplicationJSONObject?: Globalpageload200ApplicationJSON;
}
