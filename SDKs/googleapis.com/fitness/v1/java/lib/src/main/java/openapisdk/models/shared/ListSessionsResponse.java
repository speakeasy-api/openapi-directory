package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSessionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedSession")
    public Session[] deletedSession;
    public ListSessionsResponse withDeletedSession(Session[] deletedSession) {
        this.deletedSession = deletedSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasMoreData")
    public Boolean hasMoreData;
    public ListSessionsResponse withHasMoreData(Boolean hasMoreData) {
        this.hasMoreData = hasMoreData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSessionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public Session[] session;
    public ListSessionsResponse withSession(Session[] session) {
        this.session = session;
        return this;
    }
}