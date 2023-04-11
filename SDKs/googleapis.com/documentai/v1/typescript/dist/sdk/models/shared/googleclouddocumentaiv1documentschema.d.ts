import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityType } from "./googleclouddocumentaiv1documentschemaentitytype";
import { GoogleCloudDocumentaiV1DocumentSchemaMetadata } from "./googleclouddocumentaiv1documentschemametadata";
/**
 * The schema defines the output of the processed document by a processor.
 */
export declare class GoogleCloudDocumentaiV1DocumentSchema extends SpeakeasyBase {
    /**
     * Description of the schema.
     */
    description?: string;
    /**
     * Display name to show to users.
     */
    displayName?: string;
    /**
     * Entity types of the schema.
     */
    entityTypes?: GoogleCloudDocumentaiV1DocumentSchemaEntityType[];
    /**
     * Metadata for global schema behavior.
     */
    metadata?: GoogleCloudDocumentaiV1DocumentSchemaMetadata;
}
