import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioVolatility" })
  portfolioVolatility: number;
}


export class PostPortfolioAnalysisVolatility200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisVolatility200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisVolatilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostPortfolioAnalysisVolatilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPortfolioAnalysisVolatility200ApplicationJSONObject?: PostPortfolioAnalysisVolatility200ApplicationJson;
}
