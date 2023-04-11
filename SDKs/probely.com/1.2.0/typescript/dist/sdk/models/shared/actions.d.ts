import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Actions are:
 *
 * @remarks
 * * edit - edit target
 * * delete - delete target
 * * trial - start a trial with this target
 * * plan - select a subscipition plan with this target
 * * subscribe - add target to subscribed plan
 * * unsubscribe - remove target from subscription
 * * archive - archive target
 * * activate - unarchive target
 *
 */
export declare enum ActionsActionEnum {
    Edit = "edit",
    Delete = "delete",
    Trial = "trial",
    Plan = "plan",
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    Archive = "archive",
    Activate = "activate"
}
export declare class Actions extends SpeakeasyBase {
    /**
     * Actions are:
     *
     * @remarks
     * * edit - edit target
     * * delete - delete target
     * * trial - start a trial with this target
     * * plan - select a subscipition plan with this target
     * * subscribe - add target to subscribed plan
     * * unsubscribe - remove target from subscription
     * * archive - archive target
     * * activate - unarchive target
     *
     */
    action?: ActionsActionEnum;
    /**
     * Label or the action
     */
    label?: string;
}
