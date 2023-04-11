import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAudioRender } from "./createaudiorender";
/**
 * Render request data
 */
export declare class CreateAudioRendersRequest extends SpeakeasyBase {
    /**
     * Parameters to create computer audio renders
     */
    audioRenders: CreateAudioRender[];
}
