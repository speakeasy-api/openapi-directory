import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow } from "./googleclouddocumentaiv1beta3documentpagetabletablerow";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
/**
 * A table representation similar to HTML table structure.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPageTable extends SpeakeasyBase {
    /**
     * Body rows of the table.
     */
    bodyRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];
    /**
     * Header rows of the table.
     */
    headerRows?: GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow[];
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
}
