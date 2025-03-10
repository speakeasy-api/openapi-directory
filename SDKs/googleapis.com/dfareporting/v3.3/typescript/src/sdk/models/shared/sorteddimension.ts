/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An optional sort order for the dimension column.
 */
export enum SortedDimensionSortOrderEnum {
  Ascending = "ASCENDING",
  Descending = "DESCENDING",
}

/**
 * Represents a sorted dimension.
 */
export class SortedDimension extends SpeakeasyBase {
  /**
   * The kind of resource this is, in this case dfareporting#sortedDimension.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * The name of the dimension.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * An optional sort order for the dimension column.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sortOrder" })
  sortOrder?: SortedDimensionSortOrderEnum;
}
