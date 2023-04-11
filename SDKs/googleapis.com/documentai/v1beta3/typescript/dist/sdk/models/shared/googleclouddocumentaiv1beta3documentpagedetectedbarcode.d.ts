import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Barcode } from "./googleclouddocumentaiv1beta3barcode";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
/**
 * A detected barcode.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode extends SpeakeasyBase {
    /**
     * Encodes the detailed information of a barcode.
     */
    barcode?: GoogleCloudDocumentaiV1beta3Barcode;
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
}
