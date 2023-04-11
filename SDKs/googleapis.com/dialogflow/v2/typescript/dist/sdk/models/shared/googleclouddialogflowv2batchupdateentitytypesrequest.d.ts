import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeBatch } from "./googleclouddialogflowv2entitytypebatch";
/**
 * The request message for EntityTypes.BatchUpdateEntityTypes.
 */
export declare class GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest extends SpeakeasyBase {
    /**
     * This message is a wrapper around a collection of entity types.
     */
    entityTypeBatchInline?: GoogleCloudDialogflowV2EntityTypeBatch;
    /**
     * The URI to a Google Cloud Storage file containing entity types to update or create. The file format can either be a serialized proto (of EntityBatch type) or a JSON object. Note: The URI must start with "gs://".
     */
    entityTypeBatchUri?: string;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;
}
