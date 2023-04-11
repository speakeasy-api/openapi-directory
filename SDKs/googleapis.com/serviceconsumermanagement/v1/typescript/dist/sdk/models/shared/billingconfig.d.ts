import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the billing configuration for a new tenant project.
 */
export declare class BillingConfig extends SpeakeasyBase {
    /**
     * Name of the billing account. For example `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string;
}
