import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
export declare class RegionProposal extends SpeakeasyBase {
    /**
     * Bounding box that defines a region of an image.
     */
    boundingBox?: BoundingBox;
    confidence?: number;
}
