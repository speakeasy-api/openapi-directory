import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceQuestion, ChoiceQuestionInput } from "./choicequestion";
/**
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
 */
export declare class Grid extends SpeakeasyBase {
    /**
     * A radio/checkbox/dropdown question.
     */
    columns?: ChoiceQuestion;
    /**
     * If `true`, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent.
     */
    shuffleQuestions?: boolean;
}
/**
 * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
 */
export declare class GridInput extends SpeakeasyBase {
    /**
     * A radio/checkbox/dropdown question.
     */
    columns?: ChoiceQuestionInput;
    /**
     * If `true`, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent.
     */
    shuffleQuestions?: boolean;
}
