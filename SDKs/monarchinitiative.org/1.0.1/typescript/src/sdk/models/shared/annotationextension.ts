import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedObject } from "./namedobject";
import { Relation } from "./relation";



export class AnnotationExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filler" })
  filler?: NamedObject;

  @SpeakeasyMetadata({ data: "json, name=relation_chain", elemType: Relation })
  relationChain?: Relation[];
}
