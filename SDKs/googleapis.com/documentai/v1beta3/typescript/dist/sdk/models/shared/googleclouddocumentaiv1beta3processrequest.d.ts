import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3ProcessOptions } from "./googleclouddocumentaiv1beta3processoptions";
import { GoogleCloudDocumentaiV1beta3RawDocument } from "./googleclouddocumentaiv1beta3rawdocument";
/**
 * Request message for the process document method.
 */
export declare class GoogleCloudDocumentaiV1beta3ProcessRequest extends SpeakeasyBase {
    /**
     * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
     */
    document?: GoogleCloudDocumentaiV1beta3Document;
    /**
     * Specifies which fields to include in ProcessResponse's document. Only supports top level document and pages field so it must be in the form of `{document_field_name}` or `pages.{page_field_name}`.
     */
    fieldMask?: string;
    /**
     * Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
     */
    inlineDocument?: GoogleCloudDocumentaiV1beta3Document;
    /**
     * Options for Process API
     */
    processOptions?: GoogleCloudDocumentaiV1beta3ProcessOptions;
    /**
     * Payload message of raw document content (bytes).
     */
    rawDocument?: GoogleCloudDocumentaiV1beta3RawDocument;
    /**
     * Whether Human Review feature should be skipped for this request. Default to false.
     */
    skipHumanReview?: boolean;
}
