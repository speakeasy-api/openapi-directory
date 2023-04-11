import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status to update the Event Subscription with.
 */
export declare enum UpdateAnEventSubscriptionParametersStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Deleted = "deleted"
}
export declare class UpdateAnEventSubscriptionParameters extends SpeakeasyBase {
    /**
     * The status to update the Event Subscription with.
     */
    status?: UpdateAnEventSubscriptionParametersStatusEnum;
}
