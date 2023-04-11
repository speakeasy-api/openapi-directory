import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User-facing labels for this custom workflow action.
 */
export declare class ActionLabels extends SpeakeasyBase {
    /**
     * The label to be displayed in the action card of the workflow editor once this custom action has been added to a workflow.
     */
    actionCardContent?: string;
    /**
     * A description for this custom action. This will show up in the action editor along with the input fields.
     */
    actionDescription?: string;
    /**
     * The name of this custom action. This is what will show up when users are selecting an action in the workflows app.
     */
    actionName: string;
    /**
     * The name to be displayed at the top of the action editor in the workflows app.
     */
    appDisplayName?: string;
    /**
     * A map of input field names to descriptions for the fields. These will show up as tooltips when users are editing your action.
     */
    inputFieldDescriptions?: Record<string, string>;
    /**
     * A map of input field names to the user-facing labels.
     */
    inputFieldLabels?: Record<string, string>;
}
