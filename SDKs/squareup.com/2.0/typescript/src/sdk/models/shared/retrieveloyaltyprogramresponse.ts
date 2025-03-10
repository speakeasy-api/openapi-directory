/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyProgram } from "./loyaltyprogram";
import { Expose, Type } from "class-transformer";

/**
 * A response that contains the loyalty program.
 */
export class RetrieveLoyaltyProgramResponse extends SpeakeasyBase {
  /**
   * Any errors that occurred during the request.
   */
  @SpeakeasyMetadata({ elemType: ErrorT })
  @Expose({ name: "errors" })
  @Type(() => ErrorT)
  errors?: ErrorT[];

  /**
   * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
   *
   * @remarks
   * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
   * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "program" })
  @Type(() => LoyaltyProgram)
  program?: LoyaltyProgram;
}
