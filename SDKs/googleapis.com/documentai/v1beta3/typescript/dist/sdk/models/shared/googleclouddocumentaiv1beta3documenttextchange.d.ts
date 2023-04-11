import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";
/**
 * This message is used for text changes aka. OCR corrections.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentTextChange extends SpeakeasyBase {
    /**
     * The text that replaces the text identified in the `text_anchor`.
     */
    changedText?: string;
    /**
     * The history of this annotation.
     */
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance[];
    /**
     * Text reference indexing into the Document.text.
     */
    textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
}
