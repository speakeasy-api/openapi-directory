package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackJourneyEvent201ApplicationJson
 * The object was created
**/
public class TrackJourneyEvent201ApplicationJson {
    @JsonProperty("message")
    public String message;
    public TrackJourneyEvent201ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public TrackJourneyEvent201ApplicationJsonMeta meta;
    public TrackJourneyEvent201ApplicationJson withMeta(TrackJourneyEvent201ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}