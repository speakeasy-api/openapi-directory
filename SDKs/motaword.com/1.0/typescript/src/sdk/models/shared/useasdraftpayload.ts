import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UseAsDraftPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromFileId" })
  fromFileId?: number;

  @SpeakeasyMetadata({ data: "json, name=fromManualTranslationFileId" })
  fromManualTranslationFileId?: number;

  @SpeakeasyMetadata({ data: "json, name=toManualTranslationFileId" })
  toManualTranslationFileId?: number;
}
