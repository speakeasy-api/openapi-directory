import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectCarrierResponseBody
/** 
 * A connect account response body
**/
export class ConnectCarrierResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: string;
}
