/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Output only. The current state of the Namespace resource.
 */
export enum NamespaceLifecycleStateCodeEnum {
  CodeUnspecified = "CODE_UNSPECIFIED",
  Creating = "CREATING",
  Ready = "READY",
  Deleting = "DELETING",
  Updating = "UPDATING",
}

/**
 * NamespaceLifecycleState describes the state of a Namespace resource.
 */
export class NamespaceLifecycleState extends SpeakeasyBase {
  /**
   * Output only. The current state of the Namespace resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: NamespaceLifecycleStateCodeEnum;
}
