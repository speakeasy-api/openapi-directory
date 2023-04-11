import { SpeakeasyBase } from "../../../internal/utils";
import { IndexingSection } from "./indexingsection";
import { VectaraindexingCustomDimension } from "./vectaraindexingcustomdimension";
/**
 * A document to index.
 */
export declare class VectaraindexingDocument extends SpeakeasyBase {
    /**
     * A list of custom dimension values that are included in the generated
     *
     * @remarks
     * representation of all sections.
     */
    customDims?: VectaraindexingCustomDimension[];
    /**
     * An optional description for the document.
     */
    description?: string;
    /**
     * Client assigned document ID to this document.
     */
    documentId?: string;
    /**
     * Metadata about the document. This should be a json string, and it can be
     *
     * @remarks
     * retrieved at query time.
     */
    metadataJson?: string;
    /**
     * The actual content of the document, structured as a repeating list
     *
     * @remarks
     * of sections.
     */
    section?: IndexingSection[];
    /**
     * The title of the document.
     */
    title?: string;
}
