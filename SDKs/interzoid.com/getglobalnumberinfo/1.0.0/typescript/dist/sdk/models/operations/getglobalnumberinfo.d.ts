import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetglobalnumberinfoRequest extends SpeakeasyBase {
    /**
     * International number (with country code) to retrieve information for
     */
    intlnumber: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Global telephone demographic information
 */
export declare class Getglobalnumberinfo200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    country?: string;
    credits?: string;
    language2?: string;
    language3?: string;
    mobile?: string;
    primaryCity?: string;
    primaryLanguage?: string;
    region?: string;
    wealth?: string;
}
export declare class GetglobalnumberinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Global telephone demographic information
     */
    getglobalnumberinfo200ApplicationJSONObject?: Getglobalnumberinfo200ApplicationJSON;
}
