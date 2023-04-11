import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2Barcode } from "./googleclouddocumentaiv1beta2barcode";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";
/**
 * A detected barcode.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode extends SpeakeasyBase {
    /**
     * Encodes the detailed information of a barcode.
     */
    barcode?: GoogleCloudDocumentaiV1beta2Barcode;
    /**
     * Visual element describing a layout unit on a page.
     */
    layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
}
