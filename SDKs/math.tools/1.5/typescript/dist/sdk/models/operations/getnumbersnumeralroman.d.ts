import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersNumeralRomanSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersNumeralRomanRequest extends SpeakeasyBase {
    /**
     * Number to convert
     */
    number?: number;
}
export declare class GetNumbersNumeralRomanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
