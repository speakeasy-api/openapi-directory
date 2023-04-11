import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServiceInventory info
 */
export declare class ServiceInventory extends SpeakeasyBase {
    archivedAt?: Date;
    createdAt?: Date;
    description?: string;
    extra?: Record<string, any>;
    /**
     * ID of the resource
     */
    id?: string;
    lastSeenAt?: Date;
    name?: string;
    /**
     * ID of the resource
     */
    refreshStatePartId?: string;
    sourceCreatedAt?: Date;
    /**
     * ID of the resource
     */
    sourceId?: string;
    sourceRef?: string;
    sourceUpdatedAt?: Date;
    updatedAt?: Date;
}
