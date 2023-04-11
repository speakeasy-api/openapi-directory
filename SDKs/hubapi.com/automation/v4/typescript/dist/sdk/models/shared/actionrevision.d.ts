import { SpeakeasyBase } from "../../../internal/utils";
import { ExtensionActionDefinition } from "./extensionactiondefinition";
/**
 * A revision of this custom action.
 */
export declare class ActionRevision extends SpeakeasyBase {
    /**
     * The date the revision was created.
     */
    createdAt: Date;
    /**
     * Configuration for custom workflow action.
     */
    definition: ExtensionActionDefinition;
    id: string;
    /**
     * The version number of the custom action.
     */
    revisionId: string;
}
