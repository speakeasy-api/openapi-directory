/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
 *
 * @remarks
 *
 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
 *
 * - **note**: see response sample for structure
 *
 */
export class RatingCounts extends SpeakeasyBase {
  /**
   * Number of reviews with a one star rating
   */
  @SpeakeasyMetadata()
  @Expose({ name: "1" })
  one?: number;

  /**
   * Number of reviews with a two star rating
   */
  @SpeakeasyMetadata()
  @Expose({ name: "2" })
  two?: number;

  /**
   * Number of reviews with a three star rating
   */
  @SpeakeasyMetadata()
  @Expose({ name: "3" })
  three?: number;

  /**
   * Number of reviews with a four star rating
   */
  @SpeakeasyMetadata()
  @Expose({ name: "4" })
  four?: number;

  /**
   * Number of reviews with a five star rating
   */
  @SpeakeasyMetadata()
  @Expose({ name: "5" })
  five?: number;
}
