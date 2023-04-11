import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.
 */
export declare class ActionParameter extends SpeakeasyBase {
    /**
     * The name of the parameter for the action script.
     */
    key?: string;
    /**
     * The value of the parameter.
     */
    value?: string;
}
