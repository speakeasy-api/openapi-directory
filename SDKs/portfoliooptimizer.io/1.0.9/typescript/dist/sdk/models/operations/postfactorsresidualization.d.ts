import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostFactorsResidualizationRequestBodyFactors extends SpeakeasyBase {
    /**
     * factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length
     */
    factorReturns: number[];
}
export declare class PostFactorsResidualizationRequestBody extends SpeakeasyBase {
    factors: PostFactorsResidualizationRequestBodyFactors[];
    /**
     * The index of the factor to residualize
     */
    residualizedFactor: number;
}
/**
 * OK
 */
export declare class PostFactorsResidualization200ApplicationJSON extends SpeakeasyBase {
    /**
     * residualizedFactorReturns[t] is the return of the residualized factor at the time t
     */
    residualizedFactorReturns: number[];
}
export declare class PostFactorsResidualizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postFactorsResidualization200ApplicationJSONObject?: PostFactorsResidualization200ApplicationJSON;
}
