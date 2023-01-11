package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompositeTypesListResponse
 * A response that returns all Composite Types supported by Deployment Manager
**/
public class CompositeTypesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compositeTypes")
    public CompositeType[] compositeTypes;
    public CompositeTypesListResponse withCompositeTypes(CompositeType[] compositeTypes) {
        this.compositeTypes = compositeTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CompositeTypesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}