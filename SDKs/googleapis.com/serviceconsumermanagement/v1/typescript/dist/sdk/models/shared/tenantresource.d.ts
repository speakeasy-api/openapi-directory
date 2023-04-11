import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of tenant resource.
 */
export declare enum TenantResourceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingCreate = "PENDING_CREATE",
    Active = "ACTIVE",
    PendingDelete = "PENDING_DELETE",
    Failed = "FAILED",
    Deleted = "DELETED"
}
/**
 * Resource constituting the TenancyUnit.
 */
export declare class TenantResource extends SpeakeasyBase {
    /**
     * Output only. @OutputOnly Identifier of the tenant resource. For cloud projects, it is in the form 'projects/{number}'. For example 'projects/123456'.
     */
    resource?: string;
    /**
     * Status of tenant resource.
     */
    status?: TenantResourceStatusEnum;
    /**
     * Unique per single tenancy unit.
     */
    tag?: string;
}
