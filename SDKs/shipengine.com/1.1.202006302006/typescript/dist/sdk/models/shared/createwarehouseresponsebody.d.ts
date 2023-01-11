import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * A warehouse
**/
export declare class CreateWarehouseResponseBody extends SpeakeasyBase {
    createdAt: Date;
    name: string;
    originAddress: Address;
    returnAddress: Address;
    warehouseId: Record<string, any>;
}
