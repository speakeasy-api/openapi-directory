import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3HumanReviewStatus } from "./googleclouddocumentaiv1beta3humanreviewstatus";
/**
 * Response message for the process document method.
 */
export declare class GoogleCloudDocumentaiV1beta3ProcessResponse extends SpeakeasyBase {
    /**
     * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
     */
    document?: GoogleCloudDocumentaiV1beta3Document;
    /**
     * The name of the operation triggered by the processed document. If the human review process is not triggered, this field will be empty. It has the same response type and metadata as the long running operation returned by ReviewDocument method.
     */
    humanReviewOperation?: string;
    /**
     * The status of human review on a processed document.
     */
    humanReviewStatus?: GoogleCloudDocumentaiV1beta3HumanReviewStatus;
}
