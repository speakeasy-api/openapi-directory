import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolioSharpeRatio" })
  portfolioSharpeRatio: number;
}


export class PostPortfolioAnalysisSharpeRatio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios })
  portfolios: PostPortfolioAnalysisSharpeRatio200ApplicationJsonPortfolios[];
}


export class PostPortfolioAnalysisSharpeRatioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostPortfolioAnalysisSharpeRatioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postPortfolioAnalysisSharpeRatio200ApplicationJSONObject?: PostPortfolioAnalysisSharpeRatio200ApplicationJson;
}
