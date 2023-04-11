import { SpeakeasyBase } from "../../../internal/utils";
import { ActionLabels } from "./actionlabels";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ObjectRequestOptions } from "./objectrequestoptions";
/**
 * Fields on custom workflow action to be updated.
 */
export declare class ExtensionActionDefinitionPatch extends SpeakeasyBase {
    /**
     * The URL that will accept an HTTPS request each time workflows executes the custom action.
     */
    actionUrl?: string;
    /**
     * A list of dependencies between the input fields. These configure when the input fields should be visible.
     */
    inputFieldDependencies?: any[];
    /**
     * The list of input fields to display in this custom action.
     */
    inputFields?: InputFieldDefinition[];
    /**
     * The user-facing labels for the custom action.
     */
    labels?: Record<string, ActionLabels>;
    /**
     * Configures what properties of the enrolled CRM object are included in the action execution request
     */
    objectRequestOptions?: ObjectRequestOptions;
    /**
     * The object types that this custom action supports.
     */
    objectTypes?: string[];
    /**
     * Whether this custom action is published to customers.
     */
    published?: boolean;
}
