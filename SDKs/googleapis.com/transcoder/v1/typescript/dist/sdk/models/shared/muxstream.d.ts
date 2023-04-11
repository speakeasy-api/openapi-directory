import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentSettings } from "./segmentsettings";
/**
 * Multiplexing settings for output stream.
 */
export declare class MuxStream extends SpeakeasyBase {
    /**
     * The container format. The default is `mp4` Supported container formats: - `ts` - `fmp4`- the corresponding file extension is `.m4s` - `mp4` - `vtt` See also: [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats)
     */
    container?: string;
    /**
     * List of `ElementaryStream.key`s multiplexed in this stream.
     */
    elementaryStreams?: string[];
    /**
     * The name of the generated file. The default is `MuxStream.key` with the extension suffix corresponding to the `MuxStream.container`. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `mux_stream0000000123.ts`.
     */
    fileName?: string;
    /**
     * A unique key for this multiplexed stream. HLS media manifests will be named `MuxStream.key` with the `.m3u8` extension suffix.
     */
    key?: string;
    /**
     * Segment settings for `ts`, `fmp4` and `vtt`.
     */
    segmentSettings?: SegmentSettings;
}
