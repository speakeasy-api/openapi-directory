import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
 */
export declare class QuizSettings extends SpeakeasyBase {
    /**
     * Whether this form is a quiz or not. When true, responses are graded based on question Grading. Upon setting to false, all question Grading is deleted.
     */
    isQuiz?: boolean;
}
