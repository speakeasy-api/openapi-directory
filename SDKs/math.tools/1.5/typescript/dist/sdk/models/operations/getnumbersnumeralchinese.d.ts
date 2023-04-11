import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersNumeralChineseSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersNumeralChineseRequest extends SpeakeasyBase {
    /**
     * Number to convert
     */
    number?: number;
}
export declare class GetNumbersNumeralChineseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
