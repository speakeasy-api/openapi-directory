import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServiceOfferingNode info
 */
export declare class ServiceOfferingNode extends SpeakeasyBase {
    archivedAt?: Date;
    createdAt?: Date;
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
    /**
     * ID of the resource
     */
    rootServiceOfferingId?: string;
    /**
     * ID of the resource
     */
    serviceInventoryId?: string;
    /**
     * ID of the resource
     */
    serviceOfferingId?: string;
    sourceCreatedAt?: Date;
    /**
     * ID of the resource
     */
    sourceId?: string;
    sourceRef?: string;
    sourceUpdatedAt?: Date;
    updatedAt?: Date;
}
