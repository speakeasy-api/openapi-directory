import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPortfolioAnalysisFactorsExposuresRequestBodyFactors extends SpeakeasyBase {
    /**
     * factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length, equal to the common length of the portfolioReturns arrays
     */
    factorReturns: number[];
}
export declare class PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios extends SpeakeasyBase {
    /**
     * portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the common length of the factorReturns arrays
     */
    portfolioReturns: number[];
}
export declare class PostPortfolioAnalysisFactorsExposuresRequestBody extends SpeakeasyBase {
    factors?: PostPortfolioAnalysisFactorsExposuresRequestBodyFactors[];
    portfolios: PostPortfolioAnalysisFactorsExposuresRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisFactorsExposures200ApplicationJSONPortfolios extends SpeakeasyBase {
    /**
     * The portfolio alpha, which correponds to the portion of the portfolio returns that cannot be explained by the portfolio factor exposures
     */
    portfolioAlpha: number;
    /**
     * The portfolio betas, which correspond to the portfolio factor exposures
     */
    portfolioBetas: number[];
    /**
     * The portfolio R^2, which indicates how much of the variability in the portfolio returns can be explained by the portfolio factor exposures; generally, the higher the R^2 the better the portfolio factor exposures explain the portfolio returns
     */
    portfolioRSquared: number;
}
/**
 * OK
 */
export declare class PostPortfolioAnalysisFactorsExposures200ApplicationJSON extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisFactorsExposures200ApplicationJSONPortfolios[];
}
export declare class PostPortfolioAnalysisFactorsExposuresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postPortfolioAnalysisFactorsExposures200ApplicationJSONObject?: PostPortfolioAnalysisFactorsExposures200ApplicationJSON;
}
