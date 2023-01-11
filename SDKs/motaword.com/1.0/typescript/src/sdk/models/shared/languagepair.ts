import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LanguagePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=target_language" })
  targetLanguage?: string;
}
