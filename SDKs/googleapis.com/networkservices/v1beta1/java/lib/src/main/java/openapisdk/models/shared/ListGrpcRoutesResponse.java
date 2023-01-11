package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGrpcRoutesResponse
 * Response returned by the ListGrpcRoutes method.
**/
public class ListGrpcRoutesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grpcRoutes")
    public GrpcRoute[] grpcRoutes;
    public ListGrpcRoutesResponse withGrpcRoutes(GrpcRoute[] grpcRoutes) {
        this.grpcRoutes = grpcRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGrpcRoutesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}