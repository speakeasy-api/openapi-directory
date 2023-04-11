import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleModel } from "./simplemodel";
export declare class SurveyQuestionQuestion extends SpeakeasyBase {
    enabled?: boolean;
    format?: string;
    id?: number;
    question?: string;
    text?: string;
}
export declare class SurveyQuestion extends SpeakeasyBase {
    answers?: SimpleModel[];
    question?: SurveyQuestionQuestion;
    questionAnswers?: SimpleModel[];
}
