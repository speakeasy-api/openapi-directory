package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1betaIdea
 * A single Idea that we want to show the end user.
**/
public class GoogleSearchIdeahubV1betaIdea {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1betaIdea withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GoogleSearchIdeahubV1betaIdea withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public GoogleSearchIdeahubV1betaTopic[] topics;
    public GoogleSearchIdeahubV1betaIdea withTopics(GoogleSearchIdeahubV1betaTopic[] topics) {
        this.topics = topics;
        return this;
    }
}