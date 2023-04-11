import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Return tracks with a specified bpm[from], bpm[to]
 */
export declare class Bpm extends SpeakeasyBase {
    /**
     * Return tracks with at least this bpm value
     */
    from?: number;
    /**
     * Return tracks with at most this bpm value
     */
    to?: number;
}
