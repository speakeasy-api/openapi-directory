import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersBaseBinarySecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersBaseBinaryRequest extends SpeakeasyBase {
    /**
     * Base of the supplied number (Optional base 10 assumed by default)
     */
    from?: number;
    /**
     * Number to convert to binary
     */
    number: number;
}
export declare class GetNumbersBaseBinaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
