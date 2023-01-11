package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiveStreamContentDetails
 * Detailed settings of a stream.
**/
public class LiveStreamContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closedCaptionsIngestionUrl")
    public String closedCaptionsIngestionUrl;
    public LiveStreamContentDetails withClosedCaptionsIngestionUrl(String closedCaptionsIngestionUrl) {
        this.closedCaptionsIngestionUrl = closedCaptionsIngestionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReusable")
    public Boolean isReusable;
    public LiveStreamContentDetails withIsReusable(Boolean isReusable) {
        this.isReusable = isReusable;
        return this;
    }
}