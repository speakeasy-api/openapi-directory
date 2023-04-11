import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BoundingPoly } from "./googleclouddocumentaiv1beta3boundingpoly";
import { GoogleCloudDocumentaiV1beta3DocumentTextAnchor } from "./googleclouddocumentaiv1beta3documenttextanchor";
/**
 * Detected orientation for the Layout.
 */
export declare enum GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum {
    OrientationUnspecified = "ORIENTATION_UNSPECIFIED",
    PageUp = "PAGE_UP",
    PageRight = "PAGE_RIGHT",
    PageDown = "PAGE_DOWN",
    PageLeft = "PAGE_LEFT"
}
/**
 * Visual element describing a layout unit on a page.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPageLayout extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudDocumentaiV1beta3BoundingPoly;
    /**
     * Confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range `[0, 1]`.
     */
    confidence?: number;
    /**
     * Detected orientation for the Layout.
     */
    orientation?: GoogleCloudDocumentaiV1beta3DocumentPageLayoutOrientationEnum;
    /**
     * Text reference indexing into the Document.text.
     */
    textAnchor?: GoogleCloudDocumentaiV1beta3DocumentTextAnchor;
}
