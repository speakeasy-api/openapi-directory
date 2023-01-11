import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



// CreateWarehouseRequestBodyInput
/** 
 * A warehouse
**/
export class CreateWarehouseRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=origin_address" })
  originAddress: Address;

  @SpeakeasyMetadata({ data: "json, name=return_address" })
  returnAddress?: Address;
}
