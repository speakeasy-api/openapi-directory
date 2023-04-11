import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2BoundingPoly } from "./googleclouddocumentaiv1beta2boundingpoly";
/**
 * A hint for a table bounding box on the page for table parsing.
 */
export declare class GoogleCloudDocumentaiV1beta2TableBoundHint extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingBox?: GoogleCloudDocumentaiV1beta2BoundingPoly;
    /**
     * Optional. Page number for multi-paged inputs this hint applies to. If not provided, this hint will apply to all pages by default. This value is 1-based.
     */
    pageNumber?: number;
}
