import { SpeakeasyBase } from "../../../internal/utils";
import { GeoPoint } from "./geopoint";
/**
 * Recording information associated with the video.
 */
export declare class VideoRecordingDetails extends SpeakeasyBase {
    /**
     * Geographical coordinates of a point, in WGS84.
     */
    location?: GeoPoint;
    /**
     * The text description of the location where the video was recorded.
     */
    locationDescription?: string;
    /**
     * The date and time when the video was recorded.
     */
    recordingDate?: Date;
}
