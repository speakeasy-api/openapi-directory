import { SpeakeasyBase } from "../../../internal/utils";
import { Track } from "./track";
/**
 * Response listing all tracks.
 */
export declare class TracksListResponse extends SpeakeasyBase {
    /**
     * The kind of this response ("androidpublisher#tracksListResponse").
     */
    kind?: string;
    /**
     * All tracks.
     */
    tracks?: Track[];
}
