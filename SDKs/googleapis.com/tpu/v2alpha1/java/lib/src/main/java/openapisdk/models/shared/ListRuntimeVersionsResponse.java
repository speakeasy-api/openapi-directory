package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRuntimeVersionsResponse
 * Response for ListRuntimeVersions.
**/
public class ListRuntimeVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRuntimeVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeVersions")
    public RuntimeVersion[] runtimeVersions;
    public ListRuntimeVersionsResponse withRuntimeVersions(RuntimeVersion[] runtimeVersions) {
        this.runtimeVersions = runtimeVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListRuntimeVersionsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}