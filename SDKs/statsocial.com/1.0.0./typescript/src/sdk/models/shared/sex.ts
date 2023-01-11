import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Female } from "./female";
import { Male } from "./male";



export class Sex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Female" })
  female?: Female;

  @SpeakeasyMetadata({ data: "json, name=Male" })
  male?: Male;
}
