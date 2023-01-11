import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Monetary } from "./monetary";
import { ClientStringWithTranslations } from "./clientstringwithtranslations";



export class MachineTranslatedStrings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: Monetary;

  @SpeakeasyMetadata({ data: "json, name=strings", elemType: ClientStringWithTranslations })
  strings?: ClientStringWithTranslations[];
}
