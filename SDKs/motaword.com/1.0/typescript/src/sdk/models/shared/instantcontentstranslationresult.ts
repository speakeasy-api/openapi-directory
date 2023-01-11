import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstantContentsTranslationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: Record<string, string>;
}
