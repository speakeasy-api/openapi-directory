/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Sites } from "./sites";
import { Expose, Type } from "class-transformer";

export class SiteTypeLayer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Sites })
  @Expose({ name: "Sites" })
  @Type(() => Sites)
  sites?: Sites[];
}
