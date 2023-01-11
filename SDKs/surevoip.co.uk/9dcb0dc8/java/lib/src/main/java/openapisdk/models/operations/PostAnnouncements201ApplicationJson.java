package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAnnouncements201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("announcement")
    public PostAnnouncements201ApplicationJsonAnnouncement announcement;
    public PostAnnouncements201ApplicationJson withAnnouncement(PostAnnouncements201ApplicationJsonAnnouncement announcement) {
        this.announcement = announcement;
        return this;
    }
}