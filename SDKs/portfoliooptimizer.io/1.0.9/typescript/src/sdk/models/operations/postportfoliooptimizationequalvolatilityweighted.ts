/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostPortfolioOptimizationEqualVolatilityWeightedRequestBody extends SpeakeasyBase {
  /**
   * The number of assets
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assets" })
  assets: number;

  /**
   * assetsVolatilities[i] is the volatility of the asset i
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assetsVolatilities" })
  assetsVolatilities: number[];
}

/**
 * OK
 */
export class PostPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSON extends SpeakeasyBase {
  /**
   * assetsWeights[i] is the weight of the asset i in the portfolio, in percentage
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assetsWeights" })
  assetsWeights: number[];
}

export class PostPortfolioOptimizationEqualVolatilityWeightedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  postPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSONObject?: PostPortfolioOptimizationEqualVolatilityWeighted200ApplicationJSON;
}
