/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryAdjustment } from "./inventoryadjustment";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class RetrieveInventoryAdjustmentResponse extends SpeakeasyBase {
  /**
   * Represents a change in state or quantity of product inventory at a
   *
   * @remarks
   * particular time and location.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adjustment" })
  @Type(() => InventoryAdjustment)
  adjustment?: InventoryAdjustment;

  /**
   * Any errors that occurred during the request.
   */
  @SpeakeasyMetadata({ elemType: ErrorT })
  @Expose({ name: "errors" })
  @Type(() => ErrorT)
  errors?: ErrorT[];
}
