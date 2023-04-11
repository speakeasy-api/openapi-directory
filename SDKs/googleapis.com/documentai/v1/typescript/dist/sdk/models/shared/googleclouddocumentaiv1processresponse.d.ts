import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Document } from "./googleclouddocumentaiv1document";
import { GoogleCloudDocumentaiV1HumanReviewStatus } from "./googleclouddocumentaiv1humanreviewstatus";
/**
 * Response message for the process document method.
 */
export declare class GoogleCloudDocumentaiV1ProcessResponse extends SpeakeasyBase {
    /**
     * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
     */
    document?: GoogleCloudDocumentaiV1Document;
    /**
     * The status of human review on a processed document.
     */
    humanReviewStatus?: GoogleCloudDocumentaiV1HumanReviewStatus;
}
