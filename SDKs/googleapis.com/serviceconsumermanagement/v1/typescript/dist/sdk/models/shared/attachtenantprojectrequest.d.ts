import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to attach an existing project to the tenancy unit as a new tenant resource.
 */
export declare class AttachTenantProjectRequest extends SpeakeasyBase {
    /**
     * When attaching an external project, this is in the format of `projects/{project_number}`.
     */
    externalResource?: string;
    /**
     * When attaching a reserved project already in tenancy units, this is the tag of a tenant resource under the tenancy unit for the managed service's service producer project. The reserved tenant resource must be in an active state.
     */
    reservedResource?: string;
    /**
     * Required. Tag of the tenant resource after attachment. Must be less than 128 characters. Required.
     */
    tag?: string;
}
