import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
 */
export declare class GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource extends SpeakeasyBase {
    /**
     * The folder(s) that this resource belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to one or more folders.
     */
    folders?: string[];
    /**
     * The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the Google Cloud resource.
     */
    fullResourceName?: string;
    /**
     * The organization that this resource belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to an organization.
     */
    organization?: string;
    /**
     * The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name.
     */
    parent?: string;
    /**
     * The project that this resource belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project.
     */
    project?: string;
}
