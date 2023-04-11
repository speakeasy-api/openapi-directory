import { SpeakeasyBase } from "../../../internal/utils";
import { UnigramStats } from "./unigramstats";
/**
 * The data statistics of a series of STRING values.
 */
export declare class StringStats extends SpeakeasyBase {
    /**
     * The statistics of the top 20 unigrams, ordered by count.
     */
    topUnigramStats?: UnigramStats[];
}
