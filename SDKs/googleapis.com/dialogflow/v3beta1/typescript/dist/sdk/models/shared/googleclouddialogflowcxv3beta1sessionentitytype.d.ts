import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EntityTypeEntity } from "./googleclouddialogflowcxv3beta1entitytypeentity";
/**
 * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
 */
export declare enum GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum {
    EntityOverrideModeUnspecified = "ENTITY_OVERRIDE_MODE_UNSPECIFIED",
    EntityOverrideModeOverride = "ENTITY_OVERRIDE_MODE_OVERRIDE",
    EntityOverrideModeSupplement = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
}
/**
 * Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
 */
export declare class GoogleCloudDialogflowCxV3beta1SessionEntityType extends SpeakeasyBase {
    /**
     * Required. The collection of entities to override or supplement the custom entity type.
     */
    entities?: GoogleCloudDialogflowCxV3beta1EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
     */
    entityOverrideMode?: GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum;
    /**
     * Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     */
    name?: string;
}
