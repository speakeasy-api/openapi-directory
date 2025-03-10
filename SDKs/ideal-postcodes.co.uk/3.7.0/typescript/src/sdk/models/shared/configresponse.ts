/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Config } from "./config";
import { Expose, Type } from "class-transformer";

export enum ConfigResponseCodeEnum {
  TwoThousand = "2000",
}

export enum ConfigResponseMessageEnum {
  Success = "Success",
}

/**
 * Success
 */
export class ConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: ConfigResponseCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: ConfigResponseMessageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  @Type(() => Config)
  result: Config;
}
