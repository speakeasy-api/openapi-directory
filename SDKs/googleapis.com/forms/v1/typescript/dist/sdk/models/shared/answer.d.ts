import { SpeakeasyBase } from "../../../internal/utils";
import { FileUploadAnswers } from "./fileuploadanswers";
import { Grade } from "./grade";
import { TextAnswers } from "./textanswers";
export declare class Answer extends SpeakeasyBase {
    fileUploadAnswers?: FileUploadAnswers;
    grade?: Grade;
    questionId?: string;
    textAnswers?: TextAnswers;
}
