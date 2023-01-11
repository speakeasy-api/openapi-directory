import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangedBy
/** 
 * User that last modified the object
**/
export class ChangedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
