import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersPrimeIsPrimeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersPrimeIsPrimeRequest extends SpeakeasyBase {
    /**
     * Number to check
     */
    number?: number;
}
export declare class GetNumbersPrimeIsPrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
