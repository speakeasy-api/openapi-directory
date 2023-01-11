package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Question
 * Represents a single question and some of its answers.
**/
public class Question {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public Author author;
    public Question withAuthor(Author author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Question withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Question withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Question withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topAnswers")
    public Answer[] topAnswers;
    public Question withTopAnswers(Answer[] topAnswers) {
        this.topAnswers = topAnswers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalAnswerCount")
    public Integer totalAnswerCount;
    public Question withTotalAnswerCount(Integer totalAnswerCount) {
        this.totalAnswerCount = totalAnswerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Question withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upvoteCount")
    public Integer upvoteCount;
    public Question withUpvoteCount(Integer upvoteCount) {
        this.upvoteCount = upvoteCount;
        return this;
    }
}