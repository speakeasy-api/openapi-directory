package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Outage
 * An outage by the Snow Monkey on a service
**/
public class Outage {
    @JsonProperty("descriptorId")
    public String descriptorId;
    public Outage withDescriptorId(String descriptorId) {
        this.descriptorId = descriptorId;
        return this;
    }
    @JsonProperty("descriptorName")
    public String descriptorName;
    public Outage withDescriptorName(String descriptorName) {
        this.descriptorName = descriptorName;
        return this;
    }
    @JsonProperty("duration")
    public Integer duration;
    public Outage withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("until")
    public String until;
    public Outage withUntil(String until) {
        this.until = until;
        return this;
    }
}