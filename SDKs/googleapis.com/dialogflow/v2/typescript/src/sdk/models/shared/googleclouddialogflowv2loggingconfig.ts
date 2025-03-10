/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Defines logging behavior for conversation lifecycle events.
 */
export class GoogleCloudDialogflowV2LoggingConfig extends SpeakeasyBase {
  /**
   * Whether to log conversation events like CONVERSATION_STARTED to Stackdriver in the conversation project as JSON format ConversationEvent protos.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;
}
