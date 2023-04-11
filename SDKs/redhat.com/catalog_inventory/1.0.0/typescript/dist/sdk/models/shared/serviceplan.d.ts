import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServicePlan info
 */
export declare class ServicePlan extends SpeakeasyBase {
    archivedAt?: Date;
    createJsonSchema?: Record<string, any>;
    createdAt?: Date;
    description?: string;
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
    resourceVersion?: string;
    /**
     * ID of the resource
     */
    serviceOfferingId?: string;
    sourceCreatedAt?: Date;
    sourceDeletedAt?: Date;
    /**
     * ID of the resource
     */
    sourceId?: string;
    sourceRef?: string;
    updateJsonSchema?: string;
    updatedAt?: Date;
}
