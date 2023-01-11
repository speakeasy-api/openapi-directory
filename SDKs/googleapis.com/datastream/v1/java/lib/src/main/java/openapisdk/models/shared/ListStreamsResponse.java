package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListStreamsResponse
 * Response message for listing streams.
**/
public class ListStreamsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListStreamsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streams")
    public Stream[] streams;
    public ListStreamsResponse withStreams(Stream[] streams) {
        this.streams = streams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListStreamsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}