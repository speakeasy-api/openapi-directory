import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseVideo } from "./licensevideo";
/**
 * List of videos to license
 */
export declare class LicenseVideoRequest extends SpeakeasyBase {
    /**
     * Videos to license
     */
    videos: LicenseVideo[];
}
