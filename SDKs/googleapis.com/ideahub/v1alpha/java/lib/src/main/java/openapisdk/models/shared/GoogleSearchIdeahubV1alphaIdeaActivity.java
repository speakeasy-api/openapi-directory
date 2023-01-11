package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1alphaIdeaActivity
 * An idea activity entry.
**/
public class GoogleSearchIdeahubV1alphaIdeaActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ideas")
    public String[] ideas;
    public GoogleSearchIdeahubV1alphaIdeaActivity withIdeas(String[] ideas) {
        this.ideas = ideas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1alphaIdeaActivity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;
    public GoogleSearchIdeahubV1alphaIdeaActivity withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum type;
    public GoogleSearchIdeahubV1alphaIdeaActivity withType(GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleSearchIdeahubV1alphaIdeaActivity withUri(String uri) {
        this.uri = uri;
        return this;
    }
}