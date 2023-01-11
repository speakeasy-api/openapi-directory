import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { TypedNode } from "./typednode";



export class SimQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids", elemType: Node })
  ids?: Node[];

  @SpeakeasyMetadata({ data: "json, name=negated_ids", elemType: Node })
  negatedIds?: Node[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: TypedNode;

  @SpeakeasyMetadata({ data: "json, name=target_ids", elemType: Node, elemDepth: 2 })
  targetIds?: Node[][];

  @SpeakeasyMetadata({ data: "json, name=unresolved_ids" })
  unresolvedIds?: string[];
}
