import { SpeakeasyBase } from "../../../internal/utils";
import { CaptionSnippet } from "./captionsnippet";
/**
 * A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
 */
export declare class Caption extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the caption track.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#caption".
     */
    kind?: string;
    /**
     * Basic details about a caption track, such as its language and name.
     */
    snippet?: CaptionSnippet;
}
