package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeLogsListResponse
 * Change Log List Response
**/
public class ChangeLogsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeLogs")
    public ChangeLog[] changeLogs;
    public ChangeLogsListResponse withChangeLogs(ChangeLog[] changeLogs) {
        this.changeLogs = changeLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChangeLogsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ChangeLogsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}