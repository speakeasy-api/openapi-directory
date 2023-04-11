import { SpeakeasyBase } from "../../../internal/utils";
/**
 * H264 codec settings.
 */
export declare class H264CodecSettings extends SpeakeasyBase {
    /**
     * Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`.
     */
    allowOpenGop?: boolean;
    /**
     * Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
     */
    aqStrength?: number;
    /**
     * The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.
     */
    bFrameCount?: number;
    /**
     * Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`.
     */
    bPyramid?: boolean;
    /**
     * Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000.
     */
    bitrateBps?: number;
    /**
     * Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.
     */
    crfLevel?: number;
    /**
     * Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `vbr`. The default is `false`.
     */
    enableTwoPass?: boolean;
    /**
     * The entropy coder to use. The default is `cabac`. Supported entropy coders: - `cavlc` - `cabac`
     */
    entropyCoder?: string;
    /**
     * Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculating frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.
     */
    frameRate?: number;
    /**
     * Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`.
     */
    gopDuration?: string;
    /**
     * Select the GOP size based on the specified frame count. Must be greater than zero.
     */
    gopFrameCount?: number;
    /**
     * The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
     */
    heightPixels?: number;
    /**
     * Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format
     */
    pixelFormat?: string;
    /**
     * Enforces the specified codec preset. The default is `veryfast`. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Preset). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.
     */
    preset?: string;
    /**
     * Enforces the specified codec profile. The following profiles are supported: * `baseline` * `main` * `high` (default) The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.
     */
    profile?: string;
    /**
     * Specify the `rate_control_mode`. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate - `crf` - constant rate factor
     */
    rateControlMode?: string;
    /**
     * Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.
     */
    tune?: string;
    /**
     * Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.
     */
    vbvFullnessBits?: number;
    /**
     * Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.
     */
    vbvSizeBits?: number;
    /**
     * The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
     */
    widthPixels?: number;
}
