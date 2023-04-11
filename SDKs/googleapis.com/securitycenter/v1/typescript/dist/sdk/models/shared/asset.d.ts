import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicy } from "./iampolicy";
import { SecurityCenterProperties } from "./securitycenterproperties";
import { SecurityMarks } from "./securitymarks";
/**
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
 */
export declare class Asset extends SpeakeasyBase {
    /**
     * The canonical name of the resource. It's either "organizations/{organization_id}/assets/{asset_id}", "folders/{folder_id}/assets/{asset_id}" or "projects/{project_number}/assets/{asset_id}", depending on the closest CRM ancestor of the resource.
     */
    canonicalName?: string;
    /**
     * The time at which the asset was created in Security Command Center.
     */
    createTime?: string;
    /**
     * Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.
     */
    iamPolicy?: IamPolicy;
    /**
     * The relative resource name of this asset. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/assets/{asset_id}".
     */
    name?: string;
    /**
     * Resource managed properties. These properties are managed and defined by the Google Cloud resource and cannot be modified by the user.
     */
    resourceProperties?: Record<string, any>;
    /**
     * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
     */
    securityCenterProperties?: SecurityCenterProperties;
    /**
     * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
     */
    securityMarks?: SecurityMarks;
    /**
     * The time at which the asset was last updated or added in Cloud SCC.
     */
    updateTime?: string;
}
