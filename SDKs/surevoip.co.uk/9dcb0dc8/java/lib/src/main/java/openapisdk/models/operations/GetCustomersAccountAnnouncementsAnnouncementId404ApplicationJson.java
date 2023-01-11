package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public GetCustomersAccountAnnouncementsAnnouncementId404ApplicationJson withError(String error) {
        this.error = error;
        return this;
    }
}