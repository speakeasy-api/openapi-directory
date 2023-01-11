import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";



export class SufficiencyPostInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: Feature })
  features?: Feature[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
