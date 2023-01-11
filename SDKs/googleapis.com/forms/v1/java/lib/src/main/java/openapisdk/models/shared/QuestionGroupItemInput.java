package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuestionGroupItemInput
 * Defines a question that comprises multiple questions grouped together.
**/
public class QuestionGroupItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grid")
    public GridInput grid;
    public QuestionGroupItemInput withGrid(GridInput grid) {
        this.grid = grid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ImageInput image;
    public QuestionGroupItemInput withImage(ImageInput image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questions")
    public QuestionInput[] questions;
    public QuestionGroupItemInput withQuestions(QuestionInput[] questions) {
        this.questions = questions;
        return this;
    }
}