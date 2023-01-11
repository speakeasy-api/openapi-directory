package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataTransfersListResponse
 * Template for a collection of DataTransfer resources.
**/
public class DataTransfersListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataTransfers")
    public DataTransfer[] dataTransfers;
    public DataTransfersListResponse withDataTransfers(DataTransfer[] dataTransfers) {
        this.dataTransfers = dataTransfers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DataTransfersListResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DataTransfersListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public DataTransfersListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}