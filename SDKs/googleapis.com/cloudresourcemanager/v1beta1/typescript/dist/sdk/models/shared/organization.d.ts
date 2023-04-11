import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationOwner } from "./organizationowner";
/**
 * The organization's current lifecycle state. Assigned by the server.
 */
export declare enum OrganizationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.
 */
export declare class Organization extends SpeakeasyBase {
    /**
     * Timestamp when the Organization was created. Assigned by the server.
     */
    creationTime?: string;
    /**
     * A human-readable string that refers to the Organization in the GCP Console UI. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the G Suite customer that owns the organization.
     */
    displayName?: string;
    /**
     * The organization's current lifecycle state. Assigned by the server.
     */
    lifecycleState?: OrganizationLifecycleStateEnum;
    /**
     * Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234".
     */
    name?: string;
    /**
     * An immutable id for the Organization that is assigned on creation. This should be omitted when creating a new Organization. This field is read-only.
     */
    organizationId?: string;
    /**
     * The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted.
     */
    owner?: OrganizationOwner;
}
