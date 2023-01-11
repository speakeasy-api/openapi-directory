import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Promoter
/** 
 * Promoter
**/
export class Promoter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;
}
