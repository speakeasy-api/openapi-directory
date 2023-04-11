import { SpeakeasyBase } from "../../../internal/utils";
import { Output } from "./output";
import { Timeline } from "./timeline";
/**
 * The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.gitbook.io/docs/guides/architecting-an-application/disk-types) for more details. <ul>
 *
 * @remarks
 *   <li>`local` - optimized for high speed rendering with up to 512MB storage</li>
 *   <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li>
 * </ul>
 */
export declare enum EditDiskEnum {
    Local = "local",
    Mount = "mount"
}
/**
 * An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
 */
export declare class Edit extends SpeakeasyBase {
    /**
     * An optional webhook callback URL used to receive status notifications when a render completes or fails. See [webhooks](https://shotstack.gitbook.io/docs/guides/architecting-an-application/webhooks) for  more details.
     */
    callback?: string;
    /**
     * The disk type to use for storing footage and assets for each render. See [disk types](https://shotstack.gitbook.io/docs/guides/architecting-an-application/disk-types) for more details. <ul>
     *
     * @remarks
     *   <li>`local` - optimized for high speed rendering with up to 512MB storage</li>
     *   <li>`mount` - optimized for larger file sizes and longer videos with 5GB for source footage and 512MB for output render</li>
     * </ul>
     */
    disk?: EditDiskEnum;
    /**
     * The output format, render range and type of media to generate.
     */
    output: Output;
    /**
     * A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
     */
    timeline: Timeline;
}
