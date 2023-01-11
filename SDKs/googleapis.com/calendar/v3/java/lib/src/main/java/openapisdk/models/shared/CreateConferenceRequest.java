package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConferenceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferenceSolutionKey")
    public ConferenceSolutionKey conferenceSolutionKey;
    public CreateConferenceRequest withConferenceSolutionKey(ConferenceSolutionKey conferenceSolutionKey) {
        this.conferenceSolutionKey = conferenceSolutionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public CreateConferenceRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConferenceRequestStatus status;
    public CreateConferenceRequest withStatus(ConferenceRequestStatus status) {
        this.status = status;
        return this;
    }
}