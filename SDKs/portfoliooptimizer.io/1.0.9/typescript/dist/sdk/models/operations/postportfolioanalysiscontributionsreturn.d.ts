import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios extends SpeakeasyBase {
    assetsWeights: number[];
}
export declare class PostPortfolioAnalysisContributionsReturnRequestBody extends SpeakeasyBase {
    assets: number;
    assetsGroups?: number[][];
    assetsReturns: number[];
    portfolios: PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
    assetsGroupsReturnContributions?: number[];
    assetsReturnContributions: number[];
}
export declare class PostPortfolioAnalysisContributionsReturn200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisContributionsReturnRequest extends SpeakeasyBase {
    request: PostPortfolioAnalysisContributionsReturnRequestBody;
}
export declare class PostPortfolioAnalysisContributionsReturnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPortfolioAnalysisContributionsReturn200ApplicationJSONObject?: PostPortfolioAnalysisContributionsReturn200ApplicationJson;
}
