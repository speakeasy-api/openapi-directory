/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventBatchRecordFailure } from "./eventbatchrecordfailure";
import { EventRecordFailure } from "./eventrecordfailure";
import { PlayerEvent } from "./playerevent";
import { Expose, Type } from "class-transformer";

/**
 * An event period update resource.
 */
export class EventUpdateResponse extends SpeakeasyBase {
  /**
   * Any batch-wide failures which occurred applying updates.
   */
  @SpeakeasyMetadata({ elemType: EventBatchRecordFailure })
  @Expose({ name: "batchFailures" })
  @Type(() => EventBatchRecordFailure)
  batchFailures?: EventBatchRecordFailure[];

  /**
   * Any failures updating a particular event.
   */
  @SpeakeasyMetadata({ elemType: EventRecordFailure })
  @Expose({ name: "eventFailures" })
  @Type(() => EventRecordFailure)
  eventFailures?: EventRecordFailure[];

  /**
   * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateResponse`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * The current status of any updated events
   */
  @SpeakeasyMetadata({ elemType: PlayerEvent })
  @Expose({ name: "playerEvents" })
  @Type(() => PlayerEvent)
  playerEvents?: PlayerEvent[];
}
