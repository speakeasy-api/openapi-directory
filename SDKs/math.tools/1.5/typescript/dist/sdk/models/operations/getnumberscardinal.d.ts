import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersCardinalSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersCardinalRequest extends SpeakeasyBase {
    /**
     * Language to use
     */
    language?: string;
    /**
     * Number value
     */
    number?: number;
}
export declare class GetNumbersCardinalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
