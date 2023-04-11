import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageBlock } from "./googleclouddocumentaiv1documentpageblock";
import { GoogleCloudDocumentaiV1DocumentPageDetectedBarcode } from "./googleclouddocumentaiv1documentpagedetectedbarcode";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageDimension } from "./googleclouddocumentaiv1documentpagedimension";
import { GoogleCloudDocumentaiV1DocumentPageFormField } from "./googleclouddocumentaiv1documentpageformfield";
import { GoogleCloudDocumentaiV1DocumentPageImage } from "./googleclouddocumentaiv1documentpageimage";
import { GoogleCloudDocumentaiV1DocumentPageImageQualityScores } from "./googleclouddocumentaiv1documentpageimagequalityscores";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageLine } from "./googleclouddocumentaiv1documentpageline";
import { GoogleCloudDocumentaiV1DocumentPageMatrix } from "./googleclouddocumentaiv1documentpagematrix";
import { GoogleCloudDocumentaiV1DocumentPageParagraph } from "./googleclouddocumentaiv1documentpageparagraph";
import { GoogleCloudDocumentaiV1DocumentPageSymbol } from "./googleclouddocumentaiv1documentpagesymbol";
import { GoogleCloudDocumentaiV1DocumentPageTable } from "./googleclouddocumentaiv1documentpagetable";
import { GoogleCloudDocumentaiV1DocumentPageToken } from "./googleclouddocumentaiv1documentpagetoken";
import { GoogleCloudDocumentaiV1DocumentPageVisualElement } from "./googleclouddocumentaiv1documentpagevisualelement";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
/**
 * A page in a Document.
 */
export declare class GoogleCloudDocumentaiV1DocumentPage extends SpeakeasyBase {
    /**
     * A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
     */
    blocks?: GoogleCloudDocumentaiV1DocumentPageBlock[];
    /**
     * A list of detected barcodes.
     */
    detectedBarcodes?: GoogleCloudDocumentaiV1DocumentPageDetectedBarcode[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    /**
     * Dimension for the page.
     */
    dimension?: GoogleCloudDocumentaiV1DocumentPageDimension;
    /**
     * A list of visually detected form fields on the page.
     */
    formFields?: GoogleCloudDocumentaiV1DocumentPageFormField[];
    /**
     * Rendered image contents for this page.
     */
    image?: GoogleCloudDocumentaiV1DocumentPageImage;
    /**
     * Image Quality Scores for the page image
     */
    imageQualityScores?: GoogleCloudDocumentaiV1DocumentPageImageQualityScores;
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    /**
     * A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
     */
    lines?: GoogleCloudDocumentaiV1DocumentPageLine[];
    /**
     * 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing.
     */
    pageNumber?: number;
    /**
     * A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
     */
    paragraphs?: GoogleCloudDocumentaiV1DocumentPageParagraph[];
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
    /**
     * A list of visually detected symbols on the page.
     */
    symbols?: GoogleCloudDocumentaiV1DocumentPageSymbol[];
    /**
     * A list of visually detected tables on the page.
     */
    tables?: GoogleCloudDocumentaiV1DocumentPageTable[];
    /**
     * A list of visually detected tokens on the page.
     */
    tokens?: GoogleCloudDocumentaiV1DocumentPageToken[];
    /**
     * Transformation matrices that were applied to the original document image to produce Page.image.
     */
    transforms?: GoogleCloudDocumentaiV1DocumentPageMatrix[];
    /**
     * A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
     */
    visualElements?: GoogleCloudDocumentaiV1DocumentPageVisualElement[];
}
