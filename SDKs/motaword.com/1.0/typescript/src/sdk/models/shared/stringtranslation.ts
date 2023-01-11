import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringTranslationStateEnum } from "./stringtranslationstateenum";



export class StringTranslation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StringTranslationStateEnum;
}
