import { SpeakeasyBase } from "../../../internal/utils";
export declare class BadWordFilterResponse extends SpeakeasyBase {
    /**
     * An array of the bad words found
     */
    badWordsList: string[];
    /**
     * Total number of bad words detected
     */
    badWordsTotal: number;
    /**
     * The censored content (only set if censor-character has been set)
     */
    censoredContent: string;
    /**
     * Does the text contain bad words
     */
    isBad: boolean;
}
