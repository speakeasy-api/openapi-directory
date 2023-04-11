import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersBaseSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersBaseRequest extends SpeakeasyBase {
    /**
     * Base of the supplied number (Optional base 10 assumed by default)
     */
    from?: number;
    /**
     * Number to convert to the target base
     */
    number: number;
    /**
     * Target base to convert to
     */
    to: number;
}
export declare class GetNumbersBaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
