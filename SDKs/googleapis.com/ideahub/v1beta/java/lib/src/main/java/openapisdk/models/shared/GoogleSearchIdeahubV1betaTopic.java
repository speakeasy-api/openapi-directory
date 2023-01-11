package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1betaTopic
 * Represents a Topic umbrella for a list of questions that a Creator may want to respond to.
**/
public class GoogleSearchIdeahubV1betaTopic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleSearchIdeahubV1betaTopic withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mid")
    public String mid;
    public GoogleSearchIdeahubV1betaTopic withMid(String mid) {
        this.mid = mid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1betaTopic withName(String name) {
        this.name = name;
        return this;
    }
}