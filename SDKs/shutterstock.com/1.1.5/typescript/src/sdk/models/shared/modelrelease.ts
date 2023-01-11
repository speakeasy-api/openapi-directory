import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelRelease
/** 
 * Model and property release metadata
**/
export class ModelRelease extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
