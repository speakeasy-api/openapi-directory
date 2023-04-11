import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetareacodefromnumberRequest extends SpeakeasyBase {
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * Telephone number to retrieve area code information
     */
    number: string;
}
/**
 * Telephone number area code information
 */
export declare class Getareacodefromnumber200ApplicationJSON extends SpeakeasyBase {
    abbreviation?: string;
    areaCode?: string;
    code?: string;
    credits?: string;
    locale?: string;
    primaryCity?: string;
}
export declare class GetareacodefromnumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Telephone number area code information
     */
    getareacodefromnumber200ApplicationJSONObject?: Getareacodefromnumber200ApplicationJSON;
}
