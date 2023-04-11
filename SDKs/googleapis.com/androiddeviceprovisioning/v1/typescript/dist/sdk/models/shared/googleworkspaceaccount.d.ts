import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Google Workspace customer.
 */
export declare class GoogleWorkspaceAccount extends SpeakeasyBase {
    /**
     * Required. The customer ID.
     */
    customerId?: string;
    /**
     * Output only. The pre-provisioning tokens previously used to claim devices.
     */
    preProvisioningTokens?: string[];
}
/**
 * A Google Workspace customer.
 */
export declare class GoogleWorkspaceAccountInput extends SpeakeasyBase {
    /**
     * Required. The customer ID.
     */
    customerId?: string;
}
