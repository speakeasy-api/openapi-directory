import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType } from "./googleclouddocumentaiv1beta3documentschemaentitytype";
import { GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata } from "./googleclouddocumentaiv1beta3documentschemametadata";
/**
 * The schema defines the output of the processed document by a processor.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentSchema extends SpeakeasyBase {
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
    entityTypes?: GoogleCloudDocumentaiV1beta3DocumentSchemaEntityType[];
    /**
     * Metadata for global schema behavior.
     */
    metadata?: GoogleCloudDocumentaiV1beta3DocumentSchemaMetadata;
}
