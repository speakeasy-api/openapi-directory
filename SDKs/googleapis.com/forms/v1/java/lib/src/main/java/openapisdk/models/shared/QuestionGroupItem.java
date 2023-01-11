package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuestionGroupItem
 * Defines a question that comprises multiple questions grouped together.
**/
public class QuestionGroupItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grid")
    public Grid grid;
    public QuestionGroupItem withGrid(Grid grid) {
        this.grid = grid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public QuestionGroupItem withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public Question[] questions;
    public QuestionGroupItem withQuestions(Question[] questions) {
        this.questions = questions;
        return this;
    }
}