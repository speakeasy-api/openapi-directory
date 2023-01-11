import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LanguageStringStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project_string_count" })
  projectStringCount?: number;

  @SpeakeasyMetadata({ data: "json, name=source_language" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=tm_string_count" })
  tmStringCount?: number;
}
