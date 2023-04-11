import { SpeakeasyBase } from "../../../internal/utils";
import { Option, OptionInput } from "./option";
/**
 * Required. The type of choice question.
 */
export declare enum ChoiceQuestionTypeEnum {
    ChoiceTypeUnspecified = "CHOICE_TYPE_UNSPECIFIED",
    Radio = "RADIO",
    Checkbox = "CHECKBOX",
    DropDown = "DROP_DOWN"
}
/**
 * A radio/checkbox/dropdown question.
 */
export declare class ChoiceQuestion extends SpeakeasyBase {
    /**
     * Required. List of options that a respondent must choose from.
     */
    options?: Option[];
    /**
     * Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last.
     */
    shuffle?: boolean;
    /**
     * Required. The type of choice question.
     */
    type?: ChoiceQuestionTypeEnum;
}
/**
 * A radio/checkbox/dropdown question.
 */
export declare class ChoiceQuestionInput extends SpeakeasyBase {
    /**
     * Required. List of options that a respondent must choose from.
     */
    options?: OptionInput[];
    /**
     * Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last.
     */
    shuffle?: boolean;
    /**
     * Required. The type of choice question.
     */
    type?: ChoiceQuestionTypeEnum;
}
