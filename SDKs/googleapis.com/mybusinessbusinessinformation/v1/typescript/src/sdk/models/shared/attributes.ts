import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { AttributeInput } from "./attribute";



// Attributes
/** 
 * A container for all the attributes for a given location.
**/
export class Attributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// AttributesInput
/** 
 * A container for all the attributes for a given location.
**/
export class AttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AttributeInput })
  attributes?: AttributeInput[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
