package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1betaTopicState
 * Represents topic state specific to a web property.
**/
public class GoogleSearchIdeahubV1betaTopicState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissed")
    public Boolean dismissed;
    public GoogleSearchIdeahubV1betaTopicState withDismissed(Boolean dismissed) {
        this.dismissed = dismissed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1betaTopicState withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saved")
    public Boolean saved;
    public GoogleSearchIdeahubV1betaTopicState withSaved(Boolean saved) {
        this.saved = saved;
        return this;
    }
}