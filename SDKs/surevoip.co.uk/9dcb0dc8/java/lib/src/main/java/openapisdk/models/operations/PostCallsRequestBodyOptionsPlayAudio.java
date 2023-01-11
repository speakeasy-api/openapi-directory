package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCallsRequestBodyOptionsPlayAudio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("announcement_id")
    public String announcementId;
    public PostCallsRequestBodyOptionsPlayAudio withAnnouncementId(String announcementId) {
        this.announcementId = announcementId;
        return this;
    }
}