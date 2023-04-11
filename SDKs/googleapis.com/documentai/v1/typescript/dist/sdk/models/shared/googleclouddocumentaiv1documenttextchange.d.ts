import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
/**
 * This message is used for text changes aka. OCR corrections.
 */
export declare class GoogleCloudDocumentaiV1DocumentTextChange extends SpeakeasyBase {
    /**
     * The text that replaces the text identified in the `text_anchor`.
     */
    changedText?: string;
    /**
     * The history of this annotation.
     */
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance[];
    /**
     * Text reference indexing into the Document.text.
     */
    textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
}
