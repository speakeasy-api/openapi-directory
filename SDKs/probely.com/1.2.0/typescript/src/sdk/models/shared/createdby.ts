import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatedBy
/** 
 * User that created the object
**/
export class CreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
