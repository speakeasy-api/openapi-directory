package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangesListResponse
 * The response to a request to enumerate Changes to a ResourceRecordSets collection.
**/
public class ChangesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changes")
    public Change[] changes;
    public ChangesListResponse withChanges(Change[] changes) {
        this.changes = changes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ResponseHeader header;
    public ChangesListResponse withHeader(ResponseHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChangesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ChangesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}