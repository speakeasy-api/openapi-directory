import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * A warehouse
**/
export declare class ListWarehousesResponseBodyWarehouse extends SpeakeasyBase {
    createdAt?: Date;
    name?: string;
    originAddress?: Address;
    returnAddress?: Address;
    warehouseId?: Record<string, any>;
}
/**
 * A warehouse list response body
**/
export declare class ListWarehousesResponseBody extends SpeakeasyBase {
    warehouses: ListWarehousesResponseBodyWarehouse[];
}
