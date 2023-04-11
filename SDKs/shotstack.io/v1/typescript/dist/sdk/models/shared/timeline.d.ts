import { SpeakeasyBase } from "../../../internal/utils";
import { Font } from "./font";
import { Soundtrack } from "./soundtrack";
import { Track } from "./track";
/**
 * A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
 */
export declare class Timeline extends SpeakeasyBase {
    /**
     * A hexadecimal value for the timeline background colour. Defaults to #000000 (black).
     */
    background?: string;
    /**
     * Disable the caching of ingested source footage and assets. See  [caching](https://shotstack.gitbook.io/docs/guides/architecting-an-application/caching) for more details.
     */
    cache?: boolean;
    /**
     * An array of custom fonts to be downloaded for use by the HTML assets.
     */
    fonts?: Font[];
    /**
     * A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
     */
    soundtrack?: Soundtrack;
    /**
     * A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
     */
    tracks: Track[];
}
