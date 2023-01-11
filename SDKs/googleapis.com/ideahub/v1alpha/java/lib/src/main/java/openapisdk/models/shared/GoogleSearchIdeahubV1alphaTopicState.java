package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1alphaTopicState
 * Represents topic state specific to a web property.
**/
public class GoogleSearchIdeahubV1alphaTopicState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissed")
    public Boolean dismissed;
    public GoogleSearchIdeahubV1alphaTopicState withDismissed(Boolean dismissed) {
        this.dismissed = dismissed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleSearchIdeahubV1alphaTopicState withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saved")
    public Boolean saved;
    public GoogleSearchIdeahubV1alphaTopicState withSaved(Boolean saved) {
        this.saved = saved;
        return this;
    }
}