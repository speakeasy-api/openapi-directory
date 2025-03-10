/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * userlist
 */
export class Userlist extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success?: boolean;

  @SpeakeasyMetadata({ elemType: User })
  @Expose({ name: "user" })
  @Type(() => User)
  user?: User[];
}
