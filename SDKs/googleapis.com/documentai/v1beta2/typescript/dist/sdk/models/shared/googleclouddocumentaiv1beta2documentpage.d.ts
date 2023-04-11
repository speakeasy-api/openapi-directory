import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentPageBlock } from "./googleclouddocumentaiv1beta2documentpageblock";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1beta2documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta2documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta2DocumentPageDimension } from "./googleclouddocumentaiv1beta2documentpagedimension";
import { GoogleCloudDocumentaiV1beta2DocumentPageFormField } from "./googleclouddocumentaiv1beta2documentpageformfield";
import { GoogleCloudDocumentaiV1beta2DocumentPageImage } from "./googleclouddocumentaiv1beta2documentpageimage";
import { GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores } from "./googleclouddocumentaiv1beta2documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
import { GoogleCloudDocumentaiV1beta2DocumentPageLine } from "./googleclouddocumentaiv1beta2documentpageline";
import { GoogleCloudDocumentaiV1beta2DocumentPageMatrix } from "./googleclouddocumentaiv1beta2documentpagematrix";
import { GoogleCloudDocumentaiV1beta2DocumentPageParagraph } from "./googleclouddocumentaiv1beta2documentpageparagraph";
import { GoogleCloudDocumentaiV1beta2DocumentPageSymbol } from "./googleclouddocumentaiv1beta2documentpagesymbol";
import { GoogleCloudDocumentaiV1beta2DocumentPageTable } from "./googleclouddocumentaiv1beta2documentpagetable";
import { GoogleCloudDocumentaiV1beta2DocumentPageToken } from "./googleclouddocumentaiv1beta2documentpagetoken";
import { GoogleCloudDocumentaiV1beta2DocumentPageVisualElement } from "./googleclouddocumentaiv1beta2documentpagevisualelement";
import { GoogleCloudDocumentaiV1beta2DocumentProvenance } from "./googleclouddocumentaiv1beta2documentprovenance";
/**
 * A page in a Document.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentPage extends SpeakeasyBase {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: GoogleCloudDocumentaiV1beta2DocumentPageBlock[];
    /**
     * A list of detected barcodes.
     */
    detectedBarcodes?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage[];
    /**
     * Dimension for the page.
     */
    dimension?: GoogleCloudDocumentaiV1beta2DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: GoogleCloudDocumentaiV1beta2DocumentPageFormField[];
    /**
     * Rendered image contents for this page.
     */
    image?: GoogleCloudDocumentaiV1beta2DocumentPageImage;
    /**
     * Image Quality Scores for the page image
     */
    imageQualityScores?: GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores;
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: GoogleCloudDocumentaiV1beta2DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: GoogleCloudDocumentaiV1beta2DocumentPageParagraph[];
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1beta2DocumentProvenance;
    /**
     * A list of visually detected symbols on the page.
     */
    symbols?: GoogleCloudDocumentaiV1beta2DocumentPageSymbol[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: GoogleCloudDocumentaiV1beta2DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: GoogleCloudDocumentaiV1beta2DocumentPageToken[];
    /**
     * Transformation matrices that were applied to the original document image to produce Page.image.
     */
    transforms?: GoogleCloudDocumentaiV1beta2DocumentPageMatrix[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: GoogleCloudDocumentaiV1beta2DocumentPageVisualElement[];
}
