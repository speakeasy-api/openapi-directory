package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TopicSentimentOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TopicSentimentOutput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public TopicSentimentOutput withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentiments")
    public Sentiment[] sentiments;
    public TopicSentimentOutput withSentiments(Sentiment[] sentiments) {
        this.sentiments = sentiments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public TopicSentimentOutput withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicSentiments")
    public TopicSentiment[] topicSentiments;
    public TopicSentimentOutput withTopicSentiments(TopicSentiment[] topicSentiments) {
        this.topicSentiments = topicSentiments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public Topic[] topics;
    public TopicSentimentOutput withTopics(Topic[] topics) {
        this.topics = topics;
        return this;
    }
}