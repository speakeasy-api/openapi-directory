import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceQuestion, ChoiceQuestionInput } from "./choicequestion";
import { DateQuestion } from "./datequestion";
import { FileUploadQuestion } from "./fileuploadquestion";
import { Grading } from "./grading";
import { RowQuestion } from "./rowquestion";
import { ScaleQuestion } from "./scalequestion";
import { TextQuestion } from "./textquestion";
import { TimeQuestion } from "./timequestion";
/**
 * Any question. The specific type of question is known by its `kind`.
 */
export declare class Question extends SpeakeasyBase {
    /**
     * A radio/checkbox/dropdown question.
     */
    choiceQuestion?: ChoiceQuestion;
    /**
     * A date question. Date questions default to just month + day.
     */
    dateQuestion?: DateQuestion;
    /**
     * A file upload question. The API currently does not support creating file upload questions.
     */
    fileUploadQuestion?: FileUploadQuestion;
    /**
     * Grading for a single question
     */
    grading?: Grading;
    /**
     * Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.
     */
    questionId?: string;
    /**
     * Whether the question must be answered in order for a respondent to submit their response.
     */
    required?: boolean;
    /**
     * Configuration for a question that is part of a question group.
     */
    rowQuestion?: RowQuestion;
    /**
     * A scale question. The user has a range of numeric values to choose from.
     */
    scaleQuestion?: ScaleQuestion;
    /**
     * A text-based question.
     */
    textQuestion?: TextQuestion;
    /**
     * A time question.
     */
    timeQuestion?: TimeQuestion;
}
/**
 * Any question. The specific type of question is known by its `kind`.
 */
export declare class QuestionInput extends SpeakeasyBase {
    /**
     * A radio/checkbox/dropdown question.
     */
    choiceQuestion?: ChoiceQuestionInput;
    /**
     * A date question. Date questions default to just month + day.
     */
    dateQuestion?: DateQuestion;
    /**
     * A file upload question. The API currently does not support creating file upload questions.
     */
    fileUploadQuestion?: FileUploadQuestion;
    /**
     * Grading for a single question
     */
    grading?: Grading;
    /**
     * Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.
     */
    questionId?: string;
    /**
     * Whether the question must be answered in order for a respondent to submit their response.
     */
    required?: boolean;
    /**
     * Configuration for a question that is part of a question group.
     */
    rowQuestion?: RowQuestion;
    /**
     * A scale question. The user has a range of numeric values to choose from.
     */
    scaleQuestion?: ScaleQuestion;
    /**
     * A text-based question.
     */
    textQuestion?: TextQuestion;
    /**
     * A time question.
     */
    timeQuestion?: TimeQuestion;
}
