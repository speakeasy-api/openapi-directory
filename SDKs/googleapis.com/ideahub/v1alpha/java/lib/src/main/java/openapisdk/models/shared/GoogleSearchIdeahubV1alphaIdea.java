package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1alphaIdea
 * A single Idea that we want to show the end user.
**/
public class GoogleSearchIdeahubV1alphaIdea {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1alphaIdea withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GoogleSearchIdeahubV1alphaIdea withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public GoogleSearchIdeahubV1alphaTopic[] topics;
    public GoogleSearchIdeahubV1alphaIdea withTopics(GoogleSearchIdeahubV1alphaTopic[] topics) {
        this.topics = topics;
        return this;
    }
}