import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersBaseHexSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersBaseHexRequest extends SpeakeasyBase {
    /**
     * Base of the supplied number (Optional base 10 assumed by default)
     */
    from?: number;
    /**
     * Number to convert to hex
     */
    number: number;
}
export declare class GetNumbersBaseHexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
