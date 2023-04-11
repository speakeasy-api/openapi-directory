import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetareacodeRequest extends SpeakeasyBase {
    /**
     * Telephone area code to retrieve area code information
     */
    areacode: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Telephone area code information
 */
export declare class Getareacode200ApplicationJSON extends SpeakeasyBase {
    abbreviation?: string;
    areaCode?: string;
    code?: string;
    credits?: string;
    locale?: string;
    primaryCity?: string;
}
export declare class GetareacodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Telephone area code information
     */
    getareacode200ApplicationJSONObject?: Getareacode200ApplicationJSON;
}
