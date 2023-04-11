import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1BoundingPoly } from "./googleclouddocumentaiv1boundingpoly";
import { GoogleCloudDocumentaiV1DocumentTextAnchor } from "./googleclouddocumentaiv1documenttextanchor";
/**
 * Detected orientation for the Layout.
 */
export declare enum GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED",
    PageUp = "PAGE_UP",
    PageRight = "PAGE_RIGHT",
    PageDown = "PAGE_DOWN",
    PageLeft = "PAGE_LEFT"
}
/**
 * Visual element describing a layout unit on a page.
 */
export declare class GoogleCloudDocumentaiV1DocumentPageLayout extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudDocumentaiV1BoundingPoly;
    /**
     * Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.
     */
    confidence?: number;
    /**
     * Detected orientation for the Layout.
     */
    orientation?: GoogleCloudDocumentaiV1DocumentPageLayoutOrientationEnum;
    /**
     * Text reference indexing into the Document.text.
     */
    textAnchor?: GoogleCloudDocumentaiV1DocumentTextAnchor;
}
