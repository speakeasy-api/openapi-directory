import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bob Weaver Deinterlacing Filter Configuration.
 */
export declare class BwdifConfig extends SpeakeasyBase {
    /**
     * Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`.
     */
    deinterlaceAllFrames?: boolean;
    /**
     * Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field
     */
    mode?: string;
    /**
     * The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity
     */
    parity?: string;
}
