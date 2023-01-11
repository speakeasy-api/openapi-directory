import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClientStringTranslationStateEnum {
    Translated = "Translated",
    Approved = "Approved"
}


export class ClientStringTranslation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=last_changed" })
  lastChanged?: Date;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClientStringTranslationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=target_language" })
  targetLanguage?: string;
}
