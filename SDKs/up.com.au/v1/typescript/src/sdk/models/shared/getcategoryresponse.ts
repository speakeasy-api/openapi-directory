/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CategoryResource } from "./categoryresource";
import { Expose, Type } from "class-transformer";

/**
 * Successful response to get a single category and its ancestry.
 *
 * @remarks
 *
 */
export class GetCategoryResponse extends SpeakeasyBase {
  /**
   * The category returned in this response.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => CategoryResource)
  data: CategoryResource;
}
