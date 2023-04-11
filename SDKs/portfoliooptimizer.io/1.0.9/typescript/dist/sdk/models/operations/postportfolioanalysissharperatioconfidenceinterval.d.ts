import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of confidence interval to build
 */
export declare enum PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyConfidenceIntervalTypeEnum {
    TwoSided = "twoSided",
    LowerOneSided = "lowerOneSided",
    UpperOneSided = "upperOneSided"
}
export declare class PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioValues[t] is the value of the portfolio at the time t
     */
    portfolioValues: number[];
}
export declare class PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBody extends SpeakeasyBase {
    /**
     * The type of confidence interval to build
     */
    confidenceIntervalType?: PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyConfidenceIntervalTypeEnum;
    /**
     * The confidence level of the confidence interval to build, in percentage
     */
    confidenceLevel?: number;
    portfolios: PostPortfolioAnalysisSharpeRatioConfidenceIntervalRequestBodyPortfolios[];
    /**
     * The risk free rate
     */
    riskFreeRate: number;
}
export declare class PostPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * portfolioSharpeRatioConfidenceInterval[0] (resp. portfolioSharpeRatioConfidenceInterval[1]) is the lower (resp. upper) bound of the built confidence interval, possibly equal to null in case of a negative infinite (resp. positive infinite) bound
     */
    portfolioSharpeRatioConfidenceInterval: number[];
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisSharpeRatioConfidenceIntervalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSONObject?: PostPortfolioAnalysisSharpeRatioConfidenceInterval200ApplicationJSON;
}
