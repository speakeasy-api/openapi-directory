import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Block } from "./googlecloudvisionv1p1beta1block";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
/**
 * Detected page from OCR.
 */
export declare class GoogleCloudVisionV1p1beta1Page extends SpeakeasyBase {
    /**
     * List of blocks of text, images etc on this page.
     */
    blocks?: GoogleCloudVisionV1p1beta1Block[];
    /**
     * Confidence of the OCR results on the page. Range [0, 1].
     */
    confidence?: number;
    /**
     * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    height?: number;
    /**
     * Additional information detected on the structural component.
     */
    property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
    /**
     * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width?: number;
}
