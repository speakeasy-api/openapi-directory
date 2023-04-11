import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2AlternatePolicySpec, GoogleCloudOrgpolicyV2AlternatePolicySpecInput } from "./googlecloudorgpolicyv2alternatepolicyspec";
import { GoogleCloudOrgpolicyV2PolicySpec, GoogleCloudOrgpolicyV2PolicySpecInput } from "./googlecloudorgpolicyv2policyspec";
/**
 * Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.
 */
export declare class GoogleCloudOrgpolicyV2PolicyInput extends SpeakeasyBase {
    /**
     * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
     */
    alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpecInput;
    /**
     * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
     */
    dryRunSpec?: GoogleCloudOrgpolicyV2PolicySpecInput;
    /**
     * Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     */
    name?: string;
    /**
     * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
     */
    spec?: GoogleCloudOrgpolicyV2PolicySpecInput;
}
/**
 * Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.
 */
export declare class GoogleCloudOrgpolicyV2Policy extends SpeakeasyBase {
    /**
     * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
     */
    alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpec;
    /**
     * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
     */
    dryRunSpec?: GoogleCloudOrgpolicyV2PolicySpec;
    /**
     * Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
     */
    name?: string;
    /**
     * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
     */
    spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
