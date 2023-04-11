import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * A warehouse
 */
export declare class GetWarehouseByIdResponseBody extends SpeakeasyBase {
    /**
     * Timestamp that indicates when the warehouse was created
     */
    createdAt: Date;
    /**
     * Designates which single warehouse is the default on the account
     */
    isDefault?: boolean;
    /**
     * Name of the warehouse
     */
    name: string;
    /**
     * The origin address of the warehouse
     */
    originAddress: Address;
    /**
     * The return address associated with the warehouse
     */
    returnAddress: Address;
    /**
     * A string that uniquely identifies the warehouse
     */
    warehouseId: string;
}
