import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
import { GoogleCloudDocumentaiV1DocumentPageTableTableRow } from "./googleclouddocumentaiv1documentpagetabletablerow";
import { GoogleCloudDocumentaiV1DocumentProvenance } from "./googleclouddocumentaiv1documentprovenance";
/**
 * A table representation similar to HTML table structure.
 */
export declare class GoogleCloudDocumentaiV1DocumentPageTable extends SpeakeasyBase {
    /**
     * Body rows of the table.
     */
    bodyRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];
    /**
     * A list of detected languages together with confidence.
     */
    detectedLanguages?: GoogleCloudDocumentaiV1DocumentPageDetectedLanguage[];
    /**
     * Header rows of the table.
     */
    headerRows?: GoogleCloudDocumentaiV1DocumentPageTableTableRow[];
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
    /**
     * Structure to identify provenance relationships between annotations in different revisions.
     */
    provenance?: GoogleCloudDocumentaiV1DocumentProvenance;
}
