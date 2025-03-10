/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApiDataRow } from "./apidatarow";
import { Expose, Type } from "class-transformer";

/**
 * How the results were aggregated.
 */
export enum SearchAnalyticsQueryResponseResponseAggregationTypeEnum {
  Auto = "AUTO",
  ByProperty = "BY_PROPERTY",
  ByPage = "BY_PAGE",
}

/**
 * A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
 */
export class SearchAnalyticsQueryResponse extends SpeakeasyBase {
  /**
   * How the results were aggregated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "responseAggregationType" })
  responseAggregationType?: SearchAnalyticsQueryResponseResponseAggregationTypeEnum;

  /**
   * A list of rows grouped by the key values in the order given in the query.
   */
  @SpeakeasyMetadata({ elemType: ApiDataRow })
  @Expose({ name: "rows" })
  @Type(() => ApiDataRow)
  rows?: ApiDataRow[];
}
