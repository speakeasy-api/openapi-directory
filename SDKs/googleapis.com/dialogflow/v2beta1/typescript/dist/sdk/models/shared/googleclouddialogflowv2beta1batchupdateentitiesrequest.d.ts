import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";
/**
 * The request message for EntityTypes.BatchUpdateEntities.
 */
export declare class GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest extends SpeakeasyBase {
    /**
     * Required. The entities to update or create.
     */
    entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;
}
