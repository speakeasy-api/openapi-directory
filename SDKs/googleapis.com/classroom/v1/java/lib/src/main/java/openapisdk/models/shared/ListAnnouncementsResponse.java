package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAnnouncementsResponse
 * Response when listing course work.
**/
public class ListAnnouncementsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("announcements")
    public Announcement[] announcements;
    public ListAnnouncementsResponse withAnnouncements(Announcement[] announcements) {
        this.announcements = announcements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAnnouncementsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}