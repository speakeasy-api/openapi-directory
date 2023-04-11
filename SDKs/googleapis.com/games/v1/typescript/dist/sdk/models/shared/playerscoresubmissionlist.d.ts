import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreSubmission } from "./scoresubmission";
/**
 * A list of score submission requests.
 */
export declare class PlayerScoreSubmissionList extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreSubmissionList`.
     */
    kind?: string;
    /**
     * The score submissions.
     */
    scores?: ScoreSubmission[];
}
