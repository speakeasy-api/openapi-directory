import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The organization's current lifecycle state.
 */
export declare enum OrganizationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    DeleteRequested = "DELETE_REQUESTED"
}
/**
 * The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong.
 */
export declare class Organization extends SpeakeasyBase {
    /**
     * Output only. Timestamp when the Organization was created.
     */
    createTime?: string;
    /**
     * Output only. Timestamp when the Organization was requested for deletion.
     */
    deleteTime?: string;
    /**
     * Immutable. The G Suite / Workspace customer id used in the Directory API.
     */
    directoryCustomerId?: string;
    /**
     * Output only. A human-readable string that refers to the organization in the Google Cloud Console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the Google Workspace customer that owns the organization.
     */
    displayName?: string;
    /**
     * Output only. A checksum computed by the server based on the current value of the Organization resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234".
     */
    name?: string;
    /**
     * Output only. The organization's current lifecycle state.
     */
    state?: OrganizationStateEnum;
    /**
     * Output only. Timestamp when the Organization was last modified.
     */
    updateTime?: string;
}
