/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Lookup } from "./lookup";
import { Expose, Transform, Type } from "class-transformer";

export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "displayOrder" })
  displayOrder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUpdate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "link" })
  link?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "linkType" })
  @Type(() => Lookup)
  linkType?: Lookup;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
