import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Action to enable targets:
 *
 * @remarks
 * * null - no action required
 * * trial - start a trial
 * * plan - select a plan to subscribe
 * * subscribe - add target to subscribed plan
 *
 */
export declare enum ActionActionEnum {
    Null = "null",
    Trial = "trial",
    Plan = "plan",
    Subscribe = "subscribe"
}
/**
 * Required action to enable targets
 */
export declare class Action extends SpeakeasyBase {
    /**
     * Action to enable targets:
     *
     * @remarks
     * * null - no action required
     * * trial - start a trial
     * * plan - select a plan to subscribe
     * * subscribe - add target to subscribed plan
     *
     */
    action?: ActionActionEnum;
}
