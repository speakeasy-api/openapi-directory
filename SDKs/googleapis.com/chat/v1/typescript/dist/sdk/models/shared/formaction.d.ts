import { SpeakeasyBase } from "../../../internal/utils";
import { ActionParameter } from "./actionparameter";
/**
 * A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
 */
export declare class FormAction extends SpeakeasyBase {
    /**
     * The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.
     */
    actionMethodName?: string;
    /**
     * List of action parameters.
     */
    parameters?: ActionParameter[];
}
