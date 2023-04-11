import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";
/**
 * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
 */
export declare enum GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum {
    EntityOverrideModeUnspecified = "ENTITY_OVERRIDE_MODE_UNSPECIFIED",
    EntityOverrideModeOverride = "ENTITY_OVERRIDE_MODE_OVERRIDE",
    EntityOverrideModeSupplement = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
}
/**
 * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
 */
export declare class GoogleCloudDialogflowV2SessionEntityType extends SpeakeasyBase {
    /**
     * Required. The collection of entities associated with this session entity type.
     */
    entities?: GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
     */
    entityOverrideMode?: GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
    /**
     * Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string;
}
