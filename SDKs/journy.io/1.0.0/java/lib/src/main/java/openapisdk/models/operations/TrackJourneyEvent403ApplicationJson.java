package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackJourneyEvent403ApplicationJson
 * The error message should specify what cause the error
**/
public class TrackJourneyEvent403ApplicationJson {
    @JsonProperty("message")
    public String message;
    public TrackJourneyEvent403ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("meta")
    public TrackJourneyEvent403ApplicationJsonMeta meta;
    public TrackJourneyEvent403ApplicationJson withMeta(TrackJourneyEvent403ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}