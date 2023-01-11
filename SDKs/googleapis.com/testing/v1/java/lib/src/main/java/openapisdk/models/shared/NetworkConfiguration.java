package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NetworkConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downRule")
    public TrafficRule downRule;
    public NetworkConfiguration withDownRule(TrafficRule downRule) {
        this.downRule = downRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NetworkConfiguration withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upRule")
    public TrafficRule upRule;
    public NetworkConfiguration withUpRule(TrafficRule upRule) {
        this.upRule = upRule;
        return this;
    }
}