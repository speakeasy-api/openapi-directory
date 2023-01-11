package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackJourneyEventRequestBody
 * Event for a user or an account
**/
public class TrackJourneyEventRequestBody {
    @JsonProperty("identification")
    public TrackJourneyEventRequestBodyIdentification identification;
    public TrackJourneyEventRequestBody withIdentification(TrackJourneyEventRequestBodyIdentification identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public TrackJourneyEventRequestBody withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TrackJourneyEventRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggeredAt")
    public String triggeredAt;
    public TrackJourneyEventRequestBody withTriggeredAt(String triggeredAt) {
        this.triggeredAt = triggeredAt;
        return this;
    }
}