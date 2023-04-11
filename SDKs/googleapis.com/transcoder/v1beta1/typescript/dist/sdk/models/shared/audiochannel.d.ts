import { SpeakeasyBase } from "../../../internal/utils";
import { AudioChannelInput } from "./audiochannelinput";
/**
 * The audio channel.
 */
export declare class AudioChannel extends SpeakeasyBase {
    /**
     * List of `Job.inputs` for this audio channel.
     */
    inputs?: AudioChannelInput[];
}
