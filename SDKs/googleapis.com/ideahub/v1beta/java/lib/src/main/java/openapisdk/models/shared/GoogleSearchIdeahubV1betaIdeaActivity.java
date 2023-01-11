package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1betaIdeaActivity
 * An idea activity entry.
**/
public class GoogleSearchIdeahubV1betaIdeaActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ideas")
    public String[] ideas;
    public GoogleSearchIdeahubV1betaIdeaActivity withIdeas(String[] ideas) {
        this.ideas = ideas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1betaIdeaActivity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public String[] topics;
    public GoogleSearchIdeahubV1betaIdeaActivity withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleSearchIdeahubV1betaIdeaActivityTypeEnum type;
    public GoogleSearchIdeahubV1betaIdeaActivity withType(GoogleSearchIdeahubV1betaIdeaActivityTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleSearchIdeahubV1betaIdeaActivity withUri(String uri) {
        this.uri = uri;
        return this;
    }
}