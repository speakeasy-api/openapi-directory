import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1Paragraph } from "./googlecloudvisionv1p1beta1paragraph";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
/**
 * Detected block type (text, image etc) for this block.
 */
export declare enum GoogleCloudVisionV1p1beta1BlockBlockTypeEnum {
    Unknown = "UNKNOWN",
    Text = "TEXT",
    Table = "TABLE",
    Picture = "PICTURE",
    Ruler = "RULER",
    Barcode = "BARCODE"
}
/**
 * Logical element on the page.
 */
export declare class GoogleCloudVisionV1p1beta1Block extends SpeakeasyBase {
    /**
     * Detected block type (text, image etc) for this block.
     */
    blockType?: GoogleCloudVisionV1p1beta1BlockBlockTypeEnum;
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly;
    /**
     * Confidence of the OCR results on the block. Range [0, 1].
     */
    confidence?: number;
    /**
     * List of paragraphs in this block (if this blocks is of type text).
     */
    paragraphs?: GoogleCloudVisionV1p1beta1Paragraph[];
    /**
     * Additional information detected on the structural component.
     */
    property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;
}
