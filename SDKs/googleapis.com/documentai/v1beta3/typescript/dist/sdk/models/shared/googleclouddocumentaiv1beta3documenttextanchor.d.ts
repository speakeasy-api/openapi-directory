import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1beta3documenttextanchortextsegment";
/**
 * Text reference indexing into the Document.text.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentTextAnchor extends SpeakeasyBase {
    /**
     * Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.
     */
    content?: string;
    /**
     * The text segments from the Document.text.
     */
    textSegments?: GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment[];
}
