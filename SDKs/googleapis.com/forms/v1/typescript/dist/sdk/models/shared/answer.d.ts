import { SpeakeasyBase } from "../../../internal/utils";
import { FileUploadAnswers } from "./fileuploadanswers";
import { Grade } from "./grade";
import { TextAnswers } from "./textanswers";
/**
 * The submitted answer for a question.
 */
export declare class Answer extends SpeakeasyBase {
    /**
     * All submitted files for a FileUpload question.
     */
    fileUploadAnswers?: FileUploadAnswers;
    /**
     * Grade information associated with a respondent's answer to a question.
     */
    grade?: Grade;
    /**
     * Output only. The question's ID. See also Question.question_id.
     */
    questionId?: string;
    /**
     * A question's answers as text.
     */
    textAnswers?: TextAnswers;
}
