import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
/**
 * A cell representation inside the table.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell extends SpeakeasyBase {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number;
}
