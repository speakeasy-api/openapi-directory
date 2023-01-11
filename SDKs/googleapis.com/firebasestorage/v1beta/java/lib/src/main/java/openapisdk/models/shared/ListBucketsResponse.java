package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBucketsResponse
 * The response returned by `ListBuckets`.
**/
public class ListBucketsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public Bucket[] buckets;
    public ListBucketsResponse withBuckets(Bucket[] buckets) {
        this.buckets = buckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBucketsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}