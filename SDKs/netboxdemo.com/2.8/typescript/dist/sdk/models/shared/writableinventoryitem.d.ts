import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableInventoryItemInput extends SpeakeasyBase {
    /**
     * A unique tag used to identify this item
     */
    assetTag?: string;
    description?: string;
    device: number;
    /**
     * This item was automatically discovered
     */
    discovered?: boolean;
    manufacturer?: number;
    name: string;
    parent?: number;
    /**
     * Manufacturer-assigned part identifier
     */
    partId?: string;
    serial?: string;
    tags?: string[];
}
