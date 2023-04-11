import { SpeakeasyBase } from "../../../internal/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";
/**
 * Overlaid jpeg image.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * Target image opacity. Valid values are from `1.0` (solid, default) to `0.0` (transparent), exclusive. Set this to a value greater than `0.0`.
     */
    alpha?: number;
    /**
     * 2D normalized coordinates. Default: `{0.0, 0.0}`
     */
    resolution?: NormalizedCoordinate;
    /**
     * Required. URI of the JPEG image in Cloud Storage. For example, `gs://bucket/inputs/image.jpeg`. JPEG is the only supported image type.
     */
    uri?: string;
}
