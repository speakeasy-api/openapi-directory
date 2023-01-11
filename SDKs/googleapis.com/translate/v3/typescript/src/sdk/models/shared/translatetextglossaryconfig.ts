import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TranslateTextGlossaryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glossary" })
  glossary?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreCase" })
  ignoreCase?: boolean;
}
