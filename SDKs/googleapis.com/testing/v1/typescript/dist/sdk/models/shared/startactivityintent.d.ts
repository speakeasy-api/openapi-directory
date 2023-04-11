import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A starting intent specified by an action, uri, and categories.
 */
export declare class StartActivityIntent extends SpeakeasyBase {
    /**
     * Action name. Required for START_ACTIVITY.
     */
    action?: string;
    /**
     * Intent categories to set on the intent.
     */
    categories?: string[];
    /**
     * URI for the action.
     */
    uri?: string;
}
