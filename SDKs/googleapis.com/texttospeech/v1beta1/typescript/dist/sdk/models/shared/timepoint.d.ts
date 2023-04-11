import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
 */
export declare class Timepoint extends SpeakeasyBase {
    /**
     * Timepoint name as received from the client within `` tag.
     */
    markName?: string;
    /**
     * Time offset in seconds from the start of the synthesized audio.
     */
    timeSeconds?: number;
}
