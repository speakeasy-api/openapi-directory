package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListStreamObjectsResponse
 * Response containing the objects for a stream.
**/
public class ListStreamObjectsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListStreamObjectsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamObjects")
    public StreamObject[] streamObjects;
    public ListStreamObjectsResponse withStreamObjects(StreamObject[] streamObjects) {
        this.streamObjects = streamObjects;
        return this;
    }
}