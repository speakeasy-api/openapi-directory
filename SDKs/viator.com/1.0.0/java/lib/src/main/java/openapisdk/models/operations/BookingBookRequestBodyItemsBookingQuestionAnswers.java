package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBookRequestBodyItemsBookingQuestionAnswers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public BookingBookRequestBodyItemsBookingQuestionAnswers withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionId")
    public Long questionId;
    public BookingBookRequestBodyItemsBookingQuestionAnswers withQuestionId(Long questionId) {
        this.questionId = questionId;
        return this;
    }
}