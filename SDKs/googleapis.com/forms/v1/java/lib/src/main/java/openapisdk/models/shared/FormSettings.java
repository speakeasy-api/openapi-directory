package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormSettings
 * A form's settings.
**/
public class FormSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quizSettings")
    public QuizSettings quizSettings;
    public FormSettings withQuizSettings(QuizSettings quizSettings) {
        this.quizSettings = quizSettings;
        return this;
    }
}