import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentDimensions } from "./documentdimensions";
import { DocumentInputConfig } from "./documentinputconfig";
import { Layout } from "./layout";
import { TextSnippet } from "./textsnippet";
/**
 * A structured text document e.g. a PDF.
 */
export declare class Document extends SpeakeasyBase {
    /**
     * Message that describes dimension of a document.
     */
    documentDimensions?: DocumentDimensions;
    /**
     * A representation of a text snippet.
     */
    documentText?: TextSnippet;
    /**
     * Input configuration of a Document.
     */
    inputConfig?: DocumentInputConfig;
    /**
     * Describes the layout of the document. Sorted by page_number.
     */
    layout?: Layout[];
    /**
     * Number of pages in the document.
     */
    pageCount?: number;
}
