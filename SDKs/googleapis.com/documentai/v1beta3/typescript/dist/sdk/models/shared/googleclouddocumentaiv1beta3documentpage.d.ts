import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageBlock } from "./googleclouddocumentaiv1beta3documentpageblock";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1beta3documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageDimension } from "./googleclouddocumentaiv1beta3documentpagedimension";
import { GoogleCloudDocumentaiV1beta3DocumentPageFormField } from "./googleclouddocumentaiv1beta3documentpageformfield";
import { GoogleCloudDocumentaiV1beta3DocumentPageImage } from "./googleclouddocumentaiv1beta3documentpageimage";
import { GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores } from "./googleclouddocumentaiv1beta3documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentPageLine } from "./googleclouddocumentaiv1beta3documentpageline";
import { GoogleCloudDocumentaiV1beta3DocumentPageMatrix } from "./googleclouddocumentaiv1beta3documentpagematrix";
import { GoogleCloudDocumentaiV1beta3DocumentPageParagraph } from "./googleclouddocumentaiv1beta3documentpageparagraph";
import { GoogleCloudDocumentaiV1beta3DocumentPageSymbol } from "./googleclouddocumentaiv1beta3documentpagesymbol";
import { GoogleCloudDocumentaiV1beta3DocumentPageTable } from "./googleclouddocumentaiv1beta3documentpagetable";
import { GoogleCloudDocumentaiV1beta3DocumentPageToken } from "./googleclouddocumentaiv1beta3documentpagetoken";
import { GoogleCloudDocumentaiV1beta3DocumentPageVisualElement } from "./googleclouddocumentaiv1beta3documentpagevisualelement";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
/**
 * A page in a Document.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPage extends SpeakeasyBase {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: GoogleCloudDocumentaiV1beta3DocumentPageBlock[];
    /**
     * A list of detected barcodes.
     */
    detectedBarcodes?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Dimension for the page.
     */
    dimension?: GoogleCloudDocumentaiV1beta3DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: GoogleCloudDocumentaiV1beta3DocumentPageFormField[];
    /**
     * Rendered image contents for this page.
     */
    image?: GoogleCloudDocumentaiV1beta3DocumentPageImage;
    /**
     * Image Quality Scores for the page image
     */
    imageQualityScores?: GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores;
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: GoogleCloudDocumentaiV1beta3DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: GoogleCloudDocumentaiV1beta3DocumentPageParagraph[];
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
    /**
     * A list of visually detected symbols on the page.
     */
    symbols?: GoogleCloudDocumentaiV1beta3DocumentPageSymbol[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: GoogleCloudDocumentaiV1beta3DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: GoogleCloudDocumentaiV1beta3DocumentPageToken[];
    /**
     * Transformation matrices that were applied to the original document image to produce Page.image.
     */
    transforms?: GoogleCloudDocumentaiV1beta3DocumentPageMatrix[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: GoogleCloudDocumentaiV1beta3DocumentPageVisualElement[];
}
