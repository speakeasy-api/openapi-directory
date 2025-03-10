/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
 */
export class MethodMap extends SpeakeasyBase {
  /**
   * The action identifier for the create method to be used for this collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "create" })
  create?: string;

  /**
   * The action identifier for the delete method to be used for this collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "delete" })
  delete?: string;

  /**
   * The action identifier for the get method to be used for this collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "get" })
  get?: string;

  /**
   * The action identifier for the setIamPolicy method to be used for this collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "setIamPolicy" })
  setIamPolicy?: string;

  /**
   * The action identifier for the update method to be used for this collection
   */
  @SpeakeasyMetadata()
  @Expose({ name: "update" })
  update?: string;
}
