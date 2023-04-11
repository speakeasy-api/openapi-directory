import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersBaseOctalSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersBaseOctalRequest extends SpeakeasyBase {
    /**
     * Base of the supplied number (Optional base 10 assumed by default)
     */
    from?: number;
    /**
     * Number to convert to octal
     */
    number: number;
}
export declare class GetNumbersBaseOctalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
