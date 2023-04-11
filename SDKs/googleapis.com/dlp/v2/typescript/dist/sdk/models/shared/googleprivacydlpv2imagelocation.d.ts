import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BoundingBox } from "./googleprivacydlpv2boundingbox";
/**
 * Location of the finding within an image.
 */
export declare class GooglePrivacyDlpV2ImageLocation extends SpeakeasyBase {
    /**
     * Bounding boxes locating the pixels within the image containing the finding.
     */
    boundingBoxes?: GooglePrivacyDlpV2BoundingBox[];
}
