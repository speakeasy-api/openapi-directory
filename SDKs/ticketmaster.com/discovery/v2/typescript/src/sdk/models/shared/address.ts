import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Address
/** 
 * Address
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata()
  line1?: string;

  @SpeakeasyMetadata()
  line2?: string;

  @SpeakeasyMetadata()
  line3?: string;
}
