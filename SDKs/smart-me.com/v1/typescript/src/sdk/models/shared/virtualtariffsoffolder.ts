/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VirtualTariff } from "./virtualtariff";
import { Expose, Transform, Type } from "class-transformer";

/**
 * OK
 */
export class VirtualTariffsOfFolder extends SpeakeasyBase {
  /**
   * The DateTime (UTC) of this virtual tarfifs
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "FolderId" })
  folderId?: string;

  /**
   * The name of this folder
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: VirtualTariff })
  @Expose({ name: "VirtualTariffs" })
  @Type(() => VirtualTariff)
  virtualTariffs?: VirtualTariff[];
}
