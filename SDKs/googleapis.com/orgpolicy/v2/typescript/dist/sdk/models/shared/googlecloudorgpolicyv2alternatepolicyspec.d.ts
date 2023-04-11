import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2PolicySpec, GoogleCloudOrgpolicyV2PolicySpecInput } from "./googlecloudorgpolicyv2policyspec";
/**
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
 */
export declare class GoogleCloudOrgpolicyV2AlternatePolicySpecInput extends SpeakeasyBase {
    /**
     * Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy.
     */
    launch?: string;
    /**
     * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
     */
    spec?: GoogleCloudOrgpolicyV2PolicySpecInput;
}
/**
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
 */
export declare class GoogleCloudOrgpolicyV2AlternatePolicySpec extends SpeakeasyBase {
    /**
     * Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy.
     */
    launch?: string;
    /**
     * Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.
     */
    spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
