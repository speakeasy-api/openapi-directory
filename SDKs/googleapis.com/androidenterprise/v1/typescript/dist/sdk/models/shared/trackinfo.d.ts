import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Id to name association of a track.
 */
export declare class TrackInfo extends SpeakeasyBase {
    /**
     * A modifiable name for a track. This is the visible name in the play developer console.
     */
    trackAlias?: string;
    /**
     * Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information.
     */
    trackId?: string;
}
