import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



// GetWarehouseByIdResponseBody
/** 
 * A warehouse
**/
export class GetWarehouseByIdResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=origin_address" })
  originAddress: Address;

  @SpeakeasyMetadata({ data: "json, name=return_address" })
  returnAddress: Address;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId: Record<string, any>;
}
