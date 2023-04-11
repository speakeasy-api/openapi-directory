import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.
 */
export declare class CorrectAnswer extends SpeakeasyBase {
    /**
     * Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted.
     */
    value?: string;
}
