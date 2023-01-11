import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



// ListWarehousesResponseBodyWarehouse
/** 
 * A warehouse
**/
export class ListWarehousesResponseBodyWarehouse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=origin_address" })
  originAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=return_address" })
  returnAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=warehouse_id" })
  warehouseId?: Record<string, any>;
}


// ListWarehousesResponseBody
/** 
 * A warehouse list response body
**/
export class ListWarehousesResponseBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=warehouses", elemType: ListWarehousesResponseBodyWarehouse })
  warehouses: ListWarehousesResponseBodyWarehouse[];
}
