import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dimensions
/** 
 * The dimensions of a package
**/
export class Dimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}
