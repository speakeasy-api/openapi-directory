import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguagePair } from "./languagepair";



export class PopularLanguagePairs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pairs", elemType: LanguagePair })
  pairs?: LanguagePair[];
}
