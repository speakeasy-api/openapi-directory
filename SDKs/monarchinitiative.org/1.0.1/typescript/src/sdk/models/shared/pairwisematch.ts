import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IcNode } from "./icnode";



export class PairwiseMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lcs" })
  lcs?: IcNode;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: IcNode;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: IcNode;
}
