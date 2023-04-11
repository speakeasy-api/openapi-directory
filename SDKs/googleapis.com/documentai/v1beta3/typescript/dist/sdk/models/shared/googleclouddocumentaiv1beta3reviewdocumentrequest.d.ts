import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
/**
 * The priority of the human review task.
 */
export declare enum GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum {
    Default = "DEFAULT",
    Urgent = "URGENT"
}
/**
 * Request message for review document method.
 */
export declare class GoogleCloudDocumentaiV1beta3ReviewDocumentRequest extends SpeakeasyBase {
    /**
     * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
     */
    document?: GoogleCloudDocumentaiV1beta3Document;
    /**
     * The schema defines the output of the processed document by a processor.
     */
    documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;
    /**
     * Whether the validation should be performed on the ad-hoc review request.
     */
    enableSchemaValidation?: boolean;
    /**
     * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
     */
    inlineDocument?: GoogleCloudDocumentaiV1beta3Document;
    /**
     * The priority of the human review task.
     */
    priority?: GoogleCloudDocumentaiV1beta3ReviewDocumentRequestPriorityEnum;
}
