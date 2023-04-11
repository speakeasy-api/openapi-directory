import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1beta1SecurityMarks } from "./googlecloudsecuritycenterv1beta1securitymarks";
import { SecurityCenterProperties } from "./securitycenterproperties";
/**
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
 */
export declare class Asset extends SpeakeasyBase {
    /**
     * The time at which the asset was created in Security Command Center.
     */
    createTime?: string;
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
    securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;
    /**
     * The time at which the asset was last updated, added, or deleted in Security Command Center.
     */
    updateTime?: string;
}
