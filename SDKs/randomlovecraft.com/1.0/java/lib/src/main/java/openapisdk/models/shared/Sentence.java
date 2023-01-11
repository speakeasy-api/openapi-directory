package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Sentence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("book")
    public Book book;
    public Sentence withBook(Book book) {
        this.book = book;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Sentence withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentence")
    public String sentence;
    public Sentence withSentence(String sentence) {
        this.sentence = sentence;
        return this;
    }
}