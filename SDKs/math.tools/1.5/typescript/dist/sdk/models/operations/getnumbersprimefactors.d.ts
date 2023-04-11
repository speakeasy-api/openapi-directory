import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersPrimeFactorsSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersPrimeFactorsRequest extends SpeakeasyBase {
    /**
     * Number to get the factors
     */
    number?: number;
}
export declare class GetNumbersPrimeFactorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
