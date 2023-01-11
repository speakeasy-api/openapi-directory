import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios extends SpeakeasyBase {
    portfolioSharpeRatio: number;
}
export declare class PostPortfolioAnalysisSharpeRatio200ApplicationJson extends SpeakeasyBase {
    portfolios: PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios[];
}
export declare class PostPortfolioAnalysisSharpeRatioRequest extends SpeakeasyBase {
    request: Record<string, any>;
}
export declare class PostPortfolioAnalysisSharpeRatioResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPortfolioAnalysisSharpeRatio200ApplicationJSONObject?: PostPortfolioAnalysisSharpeRatio200ApplicationJson;
}
