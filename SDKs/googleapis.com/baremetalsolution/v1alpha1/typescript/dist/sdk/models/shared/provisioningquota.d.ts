import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceQuota } from "./instancequota";
/**
 * A provisioning quota for a given project.
 */
export declare class ProvisioningQuota extends SpeakeasyBase {
    /**
     * A resource budget.
     */
    instanceQuota?: InstanceQuota;
}
