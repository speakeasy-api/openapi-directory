/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Agent Assist Smart Reply data.
 */
export class GoogleCloudContactcenterinsightsV1SmartReplyData extends SpeakeasyBase {
  /**
   * The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "confidenceScore" })
  confidenceScore?: number;

  /**
   * Map that contains metadata about the Smart Reply and the document from which it originates.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, string>;

  /**
   * The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}
   */
  @SpeakeasyMetadata()
  @Expose({ name: "queryRecord" })
  queryRecord?: string;

  /**
   * The content of the reply.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reply" })
  reply?: string;
}
