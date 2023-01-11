import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Product
/** 
 * Product
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  url?: string;
}
