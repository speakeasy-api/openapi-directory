/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TflApiPresentationEntitiesJourneyPlannerJourneyVector extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "via" })
  via?: string;
}
