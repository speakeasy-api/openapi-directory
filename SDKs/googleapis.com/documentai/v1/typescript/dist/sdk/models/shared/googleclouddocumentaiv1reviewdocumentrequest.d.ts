import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
/**
 * The priority of the human review task.
 */
export declare enum GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT",
    Urgent = "URGENT"
}
/**
 * Request message for review document method.
 */
export declare class GoogleCloudDocumentaiV1ReviewDocumentRequest extends SpeakeasyBase {
    /**
     * The schema defines the output of the processed document by a processor.
     */
    documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;
    /**
     * Whether the validation should be performed on the ad-hoc review request.
     */
    enableSchemaValidation?: boolean;
    /**
     * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
     */
    inlineDocument?: GoogleCloudDocumentaiV1Document;
    /**
     * The priority of the human review task.
     */
    priority?: GoogleCloudDocumentaiV1ReviewDocumentRequestPriorityEnum;
}
