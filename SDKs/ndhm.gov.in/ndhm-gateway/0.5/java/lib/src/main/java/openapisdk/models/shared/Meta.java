package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationExpiry")
    public String communicationExpiry;
    public Meta withCommunicationExpiry(String communicationExpiry) {
        this.communicationExpiry = communicationExpiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationHint")
    public String communicationHint;
    public Meta withCommunicationHint(String communicationHint) {
        this.communicationHint = communicationHint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationMedium")
    public MetaCommunicationMediumEnum communicationMedium;
    public Meta withCommunicationMedium(MetaCommunicationMediumEnum communicationMedium) {
        this.communicationMedium = communicationMedium;
        return this;
    }
}