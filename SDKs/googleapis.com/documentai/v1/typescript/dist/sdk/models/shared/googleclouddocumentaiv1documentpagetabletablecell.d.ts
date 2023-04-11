import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
/**
 * A cell representation inside the table.
 */
export declare class GoogleCloudDocumentaiV1DocumentPageTableTableCell extends SpeakeasyBase {
    /**
     * How many columns this cell spans.
     */
    colSpan?: number;
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    /**
     * How many rows this cell spans.
     */
    rowSpan?: number;
}
