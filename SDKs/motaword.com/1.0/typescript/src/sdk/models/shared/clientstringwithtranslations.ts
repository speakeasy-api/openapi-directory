import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientStringTranslation } from "./clientstringtranslation";



export class ClientStringWithTranslations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_changed" })
  lastChanged?: Date;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: ClientStringTranslation })
  translations?: ClientStringTranslation[];
}
