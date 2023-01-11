import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Address
/** 
 * Address
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=line1s" })
  line1s?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=line2s" })
  line2s?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=line3s" })
  line3s?: Record<string, string>;
}
