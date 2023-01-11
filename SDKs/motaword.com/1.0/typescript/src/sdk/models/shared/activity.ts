import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityLinks } from "./activitylinks";


export enum ActivityTypeEnum {
    Translated = "translated",
    Proofread = "proofread"
}


export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity_at" })
  activityAt?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ActivityLinks;

  @SpeakeasyMetadata({ data: "json, name=source_text" })
  sourceText?: string;

  @SpeakeasyMetadata({ data: "json, name=target_text" })
  targetText?: string;

  @SpeakeasyMetadata({ data: "json, name=translator" })
  translator?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ActivityTypeEnum;
}
