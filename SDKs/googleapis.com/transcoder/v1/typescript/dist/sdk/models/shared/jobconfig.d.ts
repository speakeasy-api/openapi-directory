import { SpeakeasyBase } from "../../../internal/utils";
import { AdBreak } from "./adbreak";
import { EditAtom } from "./editatom";
import { ElementaryStream } from "./elementarystream";
import { Input } from "./input";
import { Manifest } from "./manifest";
import { MuxStream } from "./muxstream";
import { Output } from "./output";
import { Overlay } from "./overlay";
import { PubsubDestination } from "./pubsubdestination";
import { SpriteSheet } from "./spritesheet";
/**
 * Job configuration
 */
export declare class JobConfig extends SpeakeasyBase {
    /**
     * List of ad breaks. Specifies where to insert ad break tags in the output manifests.
     */
    adBreaks?: AdBreak[];
    /**
     * List of `Edit atom`s. Defines the ultimate timeline of the resulting file or manifest.
     */
    editList?: EditAtom[];
    /**
     * List of elementary streams.
     */
    elementaryStreams?: ElementaryStream[];
    /**
     * List of input assets stored in Cloud Storage.
     */
    inputs?: Input[];
    /**
     * List of output manifests.
     */
    manifests?: Manifest[];
    /**
     * List of multiplexing settings for output streams.
     */
    muxStreams?: MuxStream[];
    /**
     * Location of output file(s) in a Cloud Storage bucket.
     */
    output?: Output;
    /**
     * List of overlays on the output video, in descending Z-order.
     */
    overlays?: Overlay[];
    /**
     * A Pub/Sub destination.
     */
    pubsubDestination?: PubsubDestination;
    /**
     * List of output sprite sheets. Spritesheets require at least one VideoStream in the Jobconfig.
     */
    spriteSheets?: SpriteSheet[];
}
