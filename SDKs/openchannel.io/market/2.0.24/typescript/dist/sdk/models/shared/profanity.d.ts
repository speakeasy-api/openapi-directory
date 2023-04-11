import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Profanity found in this review
 */
export declare class Profanity extends SpeakeasyBase {
    /**
     * The ending location of the profanity
     */
    end: number;
    /**
     * The starting location of the profanity
     */
    start: number;
    /**
     * The profane word
     */
    word: string;
}
