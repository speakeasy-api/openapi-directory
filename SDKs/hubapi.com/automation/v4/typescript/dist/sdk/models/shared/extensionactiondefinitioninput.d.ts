import { SpeakeasyBase } from "../../../internal/utils";
import { ActionFunction } from "./actionfunction";
import { ActionLabels } from "./actionlabels";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ObjectRequestOptions } from "./objectrequestoptions";
/**
 * State of custom workflow action to be created.
 */
export declare class ExtensionActionDefinitionInput extends SpeakeasyBase {
    /**
     * The URL that will accept an HTTPS request each time workflows executes the custom action.
     */
    actionUrl: string;
    /**
     * The date that this custom action was archived, if the custom action is archived.
     */
    archivedAt?: number;
    /**
     * A list of functions associated with the custom workflow action.
     */
    functions: ActionFunction[];
    /**
     * A list of dependencies between the input fields. These configure when the input fields should be visible.
     */
    inputFieldDependencies?: any[];
    /**
     * The list of input fields to display in this custom action.
     */
    inputFields: InputFieldDefinition[];
    /**
     * The user-facing labels for the custom action.
     */
    labels: Record<string, ActionLabels>;
    /**
     * Configures what properties of the enrolled CRM object are included in the action execution request
     */
    objectRequestOptions?: ObjectRequestOptions;
    /**
     * The object types that this custom action supports.
     */
    objectTypes: string[];
    /**
     * Whether this custom action is published to customers.
     */
    published: boolean;
}
