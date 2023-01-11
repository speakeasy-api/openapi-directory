import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringTranslation } from "./stringtranslation";



export class StringWithTranslations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: StringTranslation })
  translations?: Record<string, StringTranslation>;
}
