import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersRandomSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersRandomRequest extends SpeakeasyBase {
    /**
     * Maximum Number value
     */
    max?: number;
    /**
     * Minimum Number value in the range
     */
    min?: number;
    /**
     * Total number of random numbers to generate. Defaults to 1
     */
    total?: number;
}
export declare class GetNumbersRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
