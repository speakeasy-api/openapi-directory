import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Edge } from "./edge";
import { Node } from "./node";



export class Graph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=edges", elemType: Edge })
  edges?: Edge[];

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: Node })
  nodes?: Node[];
}
