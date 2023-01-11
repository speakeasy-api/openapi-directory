import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisBeta200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioBeta: number;
}
export declare class PostPortfolioAnalysisBeta200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisBeta200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisBetaRequest extends SpeakeasyBase {
    request: Record<string, any>;
}
export declare class PostPortfolioAnalysisBetaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPortfolioAnalysisBeta200ApplicationJSONObject?: PostPortfolioAnalysisBeta200ApplicationJson;
}
