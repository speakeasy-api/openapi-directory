import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisBeta200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioBeta" })
  portfolioBeta: number;
}


export class PostPortfolioAnalysisBeta200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisBeta200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisBeta200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisBetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostPortfolioAnalysisBetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPortfolioAnalysisBeta200ApplicationJSONObject?: PostPortfolioAnalysisBeta200ApplicationJson;
}
