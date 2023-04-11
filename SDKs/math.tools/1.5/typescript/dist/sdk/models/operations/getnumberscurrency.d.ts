import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersCurrencySecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersCurrencyRequest extends SpeakeasyBase {
    /**
     * Language to use
     */
    language?: string;
    /**
     * Number to spell
     */
    number?: number;
}
export declare class GetNumbersCurrencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
