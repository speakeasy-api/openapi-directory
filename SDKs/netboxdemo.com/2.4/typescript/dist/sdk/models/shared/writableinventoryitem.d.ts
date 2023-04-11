import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableInventoryItemInput extends SpeakeasyBase {
    /**
     * A unique tag used to identify this item
     */
    assetTag?: string;
    description?: string;
    device: number;
    discovered?: boolean;
    manufacturer?: number;
    name: string;
    parent?: number;
    partId?: string;
    serial?: string;
    tags?: string[];
}
