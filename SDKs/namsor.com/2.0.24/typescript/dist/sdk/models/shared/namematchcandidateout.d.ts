import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ordered list of name matching candidates
 */
export declare class NameMatchCandidateOut extends SpeakeasyBase {
    /**
     * The name matching candidate name
     */
    candidateName?: string;
    /**
     * The family name prediction score.
     */
    predScoreFamilyName?: number;
    /**
     * The given name prediction score.
     */
    predScoreGivenName?: number;
    /**
     * The name matching estimated probability.
     */
    probability?: number;
}
