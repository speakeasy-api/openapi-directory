import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { SourceInput } from "./source";



// FieldMetadata
/** 
 * Metadata about a field.
**/
export class FieldMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=sourcePrimary" })
  sourcePrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}


// FieldMetadataInput
/** 
 * Metadata about a field.
**/
export class FieldMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: SourceInput;

  @SpeakeasyMetadata({ data: "json, name=sourcePrimary" })
  sourcePrimary?: boolean;
}
