import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Yet Another Deinterlacing Filter Configuration.
 */
export declare class YadifConfig extends SpeakeasyBase {
    /**
     * Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`.
     */
    deinterlaceAllFrames?: boolean;
    /**
     * Disable spacial interlacing. The default is `false`.
     */
    disableSpatialInterlacing?: boolean;
    /**
     * Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field
     */
    mode?: string;
    /**
     * The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity
     */
    parity?: string;
}
