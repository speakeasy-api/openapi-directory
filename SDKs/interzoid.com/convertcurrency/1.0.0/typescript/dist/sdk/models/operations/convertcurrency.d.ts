import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConvertcurrencyRequest extends SpeakeasyBase {
    /**
     * The amount of currency to be converted
     */
    amount: string;
    /**
     * Currency symbol for the converted from amount
     */
    from: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * Currency symbol for the converted to amount
     */
    to: string;
}
/**
 * Currency rate data to one US DOllar
 */
export declare class Convertcurrency200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    converted?: string;
    credits?: string;
    currency?: string;
}
export declare class ConvertcurrencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Currency rate data to one US DOllar
     */
    convertcurrency200ApplicationJSONObject?: Convertcurrency200ApplicationJSON;
}
