/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BestSellers } from "./bestsellers";
import { Brand } from "./brand";
import { Metrics } from "./metrics";
import { PriceCompetitiveness } from "./pricecompetitiveness";
import { PriceInsights } from "./priceinsights";
import { ProductCluster } from "./productcluster";
import { ProductView } from "./productview";
import { Segments } from "./segments";
import { Expose, Type } from "class-transformer";

/**
 * Result row returned from the search query.
 */
export class ReportRow extends SpeakeasyBase {
  /**
   * Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bestSellers" })
  @Type(() => BestSellers)
  bestSellers?: BestSellers;

  /**
   * Brand fields. Values are only set for fields requested explicitly in the request's search query.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "brand" })
  @Type(() => Brand)
  brand?: Brand;

  /**
   * Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metrics" })
  @Type(() => Metrics)
  metrics?: Metrics;

  /**
   * Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
   */
  @SpeakeasyMetadata()
  @Expose({ name: "priceCompetitiveness" })
  @Type(() => PriceCompetitiveness)
  priceCompetitiveness?: PriceCompetitiveness;

  /**
   * Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
   */
  @SpeakeasyMetadata()
  @Expose({ name: "priceInsights" })
  @Type(() => PriceInsights)
  priceInsights?: PriceInsights;

  /**
   * Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "productCluster" })
  @Type(() => ProductCluster)
  productCluster?: ProductCluster;

  /**
   * Product fields. Values are only set for fields requested explicitly in the request's search query.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "productView" })
  @Type(() => ProductView)
  productView?: ProductView;

  /**
   * Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "segments" })
  @Type(() => Segments)
  segments?: Segments;
}
