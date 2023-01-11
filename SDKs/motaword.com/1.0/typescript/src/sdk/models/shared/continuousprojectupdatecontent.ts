import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContinuousProjectLanguage } from "./continuousprojectlanguage";



export class ContinuousProjectUpdateContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analytics_enabled" })
  analyticsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=auto_start_postedit" })
  autoStartPostedit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_enabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languages", elemType: ContinuousProjectLanguage })
  languages?: ContinuousProjectLanguage[];

  @SpeakeasyMetadata({ data: "json, name=mt_enabled" })
  mtEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postedit_enabled" })
  posteditEnabled?: boolean;
}
