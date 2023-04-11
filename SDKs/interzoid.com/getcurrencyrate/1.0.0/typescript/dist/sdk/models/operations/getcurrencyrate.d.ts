import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetcurrencyrateRequest extends SpeakeasyBase {
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * Currency symbol to retrieve current rate for
     */
    symbol: string;
}
/**
 * Currency rate data to one US Dollar
 */
export declare class Getcurrencyrate200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    country?: string;
    credits?: string;
    name?: string;
    rate?: string;
    symbol?: string;
}
export declare class GetcurrencyrateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Currency rate data to one US Dollar
     */
    getcurrencyrate200ApplicationJSONObject?: Getcurrencyrate200ApplicationJSON;
}
