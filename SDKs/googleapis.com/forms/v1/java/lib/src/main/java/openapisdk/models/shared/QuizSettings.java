package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuizSettings
 * Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
**/
public class QuizSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isQuiz")
    public Boolean isQuiz;
    public QuizSettings withIsQuiz(Boolean isQuiz) {
        this.isQuiz = isQuiz;
        return this;
    }
}