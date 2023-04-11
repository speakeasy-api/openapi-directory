import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersNumeralEgyptianSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersNumeralEgyptianRequest extends SpeakeasyBase {
    /**
     * Number to convert
     */
    number?: number;
}
export declare class GetNumbersNumeralEgyptianResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
