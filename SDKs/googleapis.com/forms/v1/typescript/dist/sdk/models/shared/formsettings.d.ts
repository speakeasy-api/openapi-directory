import { SpeakeasyBase } from "../../../internal/utils";
import { QuizSettings } from "./quizsettings";
/**
 * A form's settings.
 */
export declare class FormSettings extends SpeakeasyBase {
    /**
     * Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
     */
    quizSettings?: QuizSettings;
}
