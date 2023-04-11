import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Barcode } from "./googleclouddocumentaiv1barcode";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
/**
 * A detected barcode.
 */
export declare class GoogleCloudDocumentaiV1DocumentPageDetectedBarcode extends SpeakeasyBase {
    /**
     * Encodes the detailed information of a barcode.
     */
    barcode?: GoogleCloudDocumentaiV1Barcode;
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
}
