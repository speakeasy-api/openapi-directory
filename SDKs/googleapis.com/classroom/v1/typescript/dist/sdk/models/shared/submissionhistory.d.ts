import { SpeakeasyBase } from "../../../internal/utils";
import { GradeHistory } from "./gradehistory";
import { StateHistory } from "./statehistory";
/**
 * The history of the submission. This currently includes state and grade histories.
 */
export declare class SubmissionHistory extends SpeakeasyBase {
    /**
     * The history of each grade on this submission.
     */
    gradeHistory?: GradeHistory;
    /**
     * The history of each state this submission has been in.
     */
    stateHistory?: StateHistory;
}
