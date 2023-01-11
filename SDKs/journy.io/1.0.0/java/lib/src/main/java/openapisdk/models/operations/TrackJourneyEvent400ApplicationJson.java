package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackJourneyEvent400ApplicationJson
 * Specify the fields and/ or parameters that had errors
**/
public class TrackJourneyEvent400ApplicationJson {
    @JsonProperty("errors")
    public TrackJourneyEvent400ApplicationJsonErrors errors;
    public TrackJourneyEvent400ApplicationJson withErrors(TrackJourneyEvent400ApplicationJsonErrors errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public TrackJourneyEvent400ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public TrackJourneyEvent400ApplicationJsonMeta meta;
    public TrackJourneyEvent400ApplicationJson withMeta(TrackJourneyEvent400ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}