import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance.
 */
export declare enum UpgradeInstanceInternalRequestTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED",
    UpgradeFramework = "UPGRADE_FRAMEWORK",
    UpgradeOs = "UPGRADE_OS",
    UpgradeCuda = "UPGRADE_CUDA",
    UpgradeAll = "UPGRADE_ALL"
}
/**
 * Request for upgrading a notebook instance from within the VM
 */
export declare class UpgradeInstanceInternalRequest extends SpeakeasyBase {
    /**
     * Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance.
     */
    type?: UpgradeInstanceInternalRequestTypeEnum;
    /**
     * Required. The VM hardware token for authenticating the VM. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
     */
    vmId?: string;
}
