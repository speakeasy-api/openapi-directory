import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServiceCredential info
 */
export declare class ServiceCredential extends SpeakeasyBase {
    archivedAt?: Date;
    createdAt?: Date;
    description?: string;
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
    serviceCredentialTypeId?: string;
    sourceCreatedAt?: Date;
    /**
     * ID of the resource
     */
    sourceId?: string;
    sourceRef?: string;
    sourceUpdatedAt?: Date;
    typeName?: string;
    updatedAt?: Date;
}
