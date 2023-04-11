import { SpeakeasyBase } from "../../../internal/utils";
import { TrackRelease } from "./trackrelease";
/**
 * A track configuration. The resource for TracksService.
 */
export declare class Track extends SpeakeasyBase {
    /**
     * In a read request, represents all active releases in the track. In an update request, represents desired changes.
     */
    releases?: TrackRelease[];
    /**
     * Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)
     */
    track?: string;
}
