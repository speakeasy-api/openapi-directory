import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServiceOffering info
 */
export declare class ServiceOffering extends SpeakeasyBase {
    archivedAt?: Date;
    createdAt?: Date;
    description?: string;
    displayName?: string;
    distributor?: string;
    documentationUrl?: string;
    /**
     * Extra information about this object in JSON format
     */
    extra?: Record<string, any>;
    /**
     * ID of the resource
     */
    id?: string;
    lastSeenAt?: Date;
    longDescription?: string;
    name?: string;
    /**
     * ID of the resource
     */
    refreshStatePartId?: string;
    /**
     * ID of the resource
     */
    serviceInventoryId?: string;
    sourceCreatedAt?: Date;
    sourceDeletedAt?: Date;
    /**
     * ID of the resource
     */
    sourceId?: string;
    /**
     * The native reference used by the Source to refer to this object
     */
    sourceRef?: string;
    supportUrl?: string;
    updatedAt?: Date;
}
