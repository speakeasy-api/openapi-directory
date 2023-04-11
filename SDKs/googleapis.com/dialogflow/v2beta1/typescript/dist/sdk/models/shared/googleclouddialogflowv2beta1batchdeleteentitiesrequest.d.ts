import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for EntityTypes.BatchDeleteEntities.
 */
export declare class GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest extends SpeakeasyBase {
    /**
     * Required. The reference `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don't start with `projects/`.
     */
    entityValues?: string[];
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
}
