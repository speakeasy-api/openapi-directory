import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PairwiseMatch } from "./pairwisematch";
import { Node } from "./node";



export class SimMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=pairwise_match", elemType: PairwiseMatch })
  pairwiseMatch?: PairwiseMatch[];

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=significance" })
  significance?: string;

  @SpeakeasyMetadata({ data: "json, name=taxon" })
  taxon?: Node;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
