import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TranslationMemoryUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceLanguage" })
  sourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceText" })
  sourceText?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLanguage" })
  targetLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetText" })
  targetText?: string;
}
