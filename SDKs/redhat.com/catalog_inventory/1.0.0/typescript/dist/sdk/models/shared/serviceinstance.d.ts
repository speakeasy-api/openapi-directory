import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServiceInstance info
 */
export declare class ServiceInstance extends SpeakeasyBase {
    archivedAt?: Date;
    createdAt?: Date;
    externalUrl?: string;
    /**
     * Extra information about this object in JSON format
     */
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
    rootServiceInstanceId?: string;
    /**
     * ID of the resource
     */
    serviceInventoryId?: string;
    /**
     * ID of the resource
     */
    serviceOfferingId?: string;
    /**
     * ID of the resource
     */
    servicePlanId?: string;
    sourceCreatedAt?: Date;
    sourceDeletedAt?: Date;
    /**
     * ID of the resource
     */
    sourceId?: string;
    sourceRef?: string;
    updatedAt?: Date;
}
