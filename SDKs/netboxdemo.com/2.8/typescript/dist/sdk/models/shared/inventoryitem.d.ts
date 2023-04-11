import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare class InventoryItem extends SpeakeasyBase {
    /**
     * A unique tag used to identify this item
     */
    assetTag?: string;
    description?: string;
    device: NestedDevice;
    /**
     * This item was automatically discovered
     */
    discovered?: boolean;
    id?: number;
    manufacturer?: NestedManufacturer;
    name: string;
    parent?: number;
    /**
     * Manufacturer-assigned part identifier
     */
    partId?: string;
    serial?: string;
    tags?: string[];
}
