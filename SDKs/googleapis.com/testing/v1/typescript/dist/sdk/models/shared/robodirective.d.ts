import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of action that Robo should perform on the specified element.
 */
export declare enum RoboDirectiveActionTypeEnum {
    ActionTypeUnspecified = "ACTION_TYPE_UNSPECIFIED",
    SingleClick = "SINGLE_CLICK",
    EnterText = "ENTER_TEXT",
    Ignore = "IGNORE"
}
/**
 * Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
 */
export declare class RoboDirective extends SpeakeasyBase {
    /**
     * Required. The type of action that Robo should perform on the specified element.
     */
    actionType?: RoboDirectiveActionTypeEnum;
    /**
     * The text that Robo is directed to set. If left empty, the directive will be treated as a CLICK on the element matching the resource_name.
     */
    inputText?: string;
    /**
     * Required. The android resource name of the target UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html
     */
    resourceName?: string;
}
