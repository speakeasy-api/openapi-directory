package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJsonDataBookingQuestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Product200ApplicationJsonDataBookingQuestions withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionId")
    public Long questionId;
    public Product200ApplicationJsonDataBookingQuestions withQuestionId(Long questionId) {
        this.questionId = questionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public Product200ApplicationJsonDataBookingQuestions withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public Product200ApplicationJsonDataBookingQuestions withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringQuestionId")
    public String stringQuestionId;
    public Product200ApplicationJsonDataBookingQuestions withStringQuestionId(String stringQuestionId) {
        this.stringQuestionId = stringQuestionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subTitle")
    public String subTitle;
    public Product200ApplicationJsonDataBookingQuestions withSubTitle(String subTitle) {
        this.subTitle = subTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Product200ApplicationJsonDataBookingQuestions withTitle(String title) {
        this.title = title;
        return this;
    }
}