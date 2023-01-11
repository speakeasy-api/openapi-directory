import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Eighteen24 } from "./eighteen24";
import { TwentyFive34 } from "./twentyfive34";
import { ThirtyFive44 } from "./thirtyfive44";



export class CombinedAge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=18 - 24" })
  eighteen24?: Eighteen24;

  @SpeakeasyMetadata({ data: "json, name=25 - 34" })
  twentyFive34?: TwentyFive34;

  @SpeakeasyMetadata({ data: "json, name=35 - 44" })
  thirtyFive44?: ThirtyFive44;
}
