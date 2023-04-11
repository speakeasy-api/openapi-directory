import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Audio License URL object
 */
export declare class AudioUrl extends SpeakeasyBase {
    /**
     * URL that can be used to download the .zip file containing shorts, loops, and stems
     */
    shortsLoopsStems?: string;
    /**
     * URL that can be used to download the unwatermarked, licensed asset
     */
    url: string;
}
