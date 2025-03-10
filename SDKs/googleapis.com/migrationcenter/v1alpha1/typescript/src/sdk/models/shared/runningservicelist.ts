/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RunningService } from "./runningservice";
import { Expose, Type } from "class-transformer";

/**
 * List of running guest OS services.
 */
export class RunningServiceList extends SpeakeasyBase {
  /**
   * Running service entries.
   */
  @SpeakeasyMetadata({ elemType: RunningService })
  @Expose({ name: "services" })
  @Type(() => RunningService)
  services?: RunningService[];
}
