import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioReturn: number;
}
export declare class PostPortfolioAnalysisReturn200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisReturnRequest extends SpeakeasyBase {
    request: Record<string, any>;
}
export declare class PostPortfolioAnalysisReturnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPortfolioAnalysisReturn200ApplicationJSONObject?: PostPortfolioAnalysisReturn200ApplicationJson;
}
