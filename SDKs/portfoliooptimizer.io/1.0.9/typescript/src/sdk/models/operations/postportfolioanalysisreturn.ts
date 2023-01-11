import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisReturn200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioReturn" })
  portfolioReturn: number;
}


export class PostPortfolioAnalysisReturn200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisReturn200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisReturnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostPortfolioAnalysisReturnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPortfolioAnalysisReturn200ApplicationJSONObject?: PostPortfolioAnalysisReturn200ApplicationJson;
}
